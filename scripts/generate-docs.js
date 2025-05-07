/**
 * Generate Component Documentation from JSDoc
 * 
 * This script extracts JSDoc comments from component files and generates
 * markdown documentation organized by category.
 * 
 * Usage: node scripts/generate-docs.js
 */

const fs = require('fs');
const path = require('path');

// Component directories to scan
const COMPONENT_DIRECTORIES = [
  'components/layout',
  'components/features',
  'components/common',
  'components/forms',
  'components/sections',
  'components/navigation'
];

// Output file path
const OUTPUT_FILE = 'docs/components.md';

// Extract JSDoc from file content
function extractJSDoc(content) {
  const jsdocRegex = /\/\*\*\s*([\s\S]*?)\s*\*\/\s*export\s+(default\s+)?(function|const)\s+(\w+)/g;
  const matches = [];
  let match;
  
  while ((match = jsdocRegex.exec(content)) !== null) {
    const jsdocContent = match[1];
    const componentName = match[4];
    
    const jsdocData = {
      componentName,
      description: '',
      example: '',
      category: '',
      usedIn: '',
      params: [],
      returns: '',
      see: [],
      deprecated: ''
    };
    
    // Extract JSDoc tags
    const descriptionMatch = jsdocContent.match(/@description\s+(.*?)(\s*@|\s*\*\s*$)/s);
    if (descriptionMatch) {
      jsdocData.description = descriptionMatch[1].trim();
    }
    
    const exampleMatch = jsdocContent.match(/@example\s+([\s\S]*?)(\s*@|\s*\*\s*$)/s);
    if (exampleMatch) {
      jsdocData.example = exampleMatch[1].trim();
    }
    
    const categoryMatch = jsdocContent.match(/@category\s+(.*?)(\s*@|\s*\*\s*$)/s);
    if (categoryMatch) {
      jsdocData.category = categoryMatch[1].trim();
    }
    
    const usedInMatch = jsdocContent.match(/@usedIn\s+(.*?)(\s*@|\s*\*\s*$)/s);
    if (usedInMatch) {
      jsdocData.usedIn = usedInMatch[1].trim();
    }
    
    const deprecatedMatch = jsdocContent.match(/@deprecated\s+(.*?)(\s*@|\s*\*\s*$)/s);
    if (deprecatedMatch) {
      jsdocData.deprecated = deprecatedMatch[1].trim();
    }
    
    // Only add if it has basic JSDoc data
    if (jsdocData.description || jsdocData.category) {
      matches.push(jsdocData);
    }
  }
  
  return matches;
}

// Get all component files in directories
function getAllComponentFiles() {
  const componentFiles = [];
  
  for (const directory of COMPONENT_DIRECTORIES) {
    if (!fs.existsSync(directory)) {
      continue;
    }
    
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      if (file.endsWith('.tsx') && !file.endsWith('.test.tsx')) {
        componentFiles.push(path.join(directory, file));
      }
    }
  }
  
  return componentFiles;
}

// Format JSDoc data into markdown
function formatJSDocToMarkdown(jsdocData) {
  let markdown = `## ${jsdocData.componentName}\n\n`;
  
  if (jsdocData.deprecated) {
    markdown += `> **DEPRECATED:** ${jsdocData.deprecated}\n\n`;
  }
  
  if (jsdocData.description) {
    // Clean up description text (remove asterisks and normalize whitespace)
    let description = jsdocData.description;
    description = description.replace(/\s*\*\s*/g, ' ').trim();
    markdown += `${description}\n\n`;
  }
  
  if (jsdocData.usedIn) {
    let usedIn = jsdocData.usedIn;
    usedIn = usedIn.replace(/\s*\*\s*/g, ' ').trim();
    // Remove any import statements that might have been captured
    usedIn = usedIn.replace(/import\s+.*$/m, '').trim();
    markdown += `**Used in:** ${usedIn}\n\n`;
  }
  
  if (jsdocData.example) {
    // Clean up example code
    let example = jsdocData.example;
    
    // Remove any asterisks
    example = example.replace(/\s*\*\s*/g, '');
    
    // Remove ```tsx and ``` if present
    example = example.replace(/^\s*```tsx\s*/, '').replace(/\s*```\s*$/, '');
    
    // Add proper spacing to props
    example = example.replace(/(\w+)=/g, '$1 = ');
    
    // Fix spacing in arrays and objects
    example = example.replace(/{(\[|{)/, '{ $1').replace(/(}|])}/g, '$1 }');
    
    markdown += `### Example\n\n\`\`\`tsx\n${example}\n\`\`\`\n\n`;
  }
  
  return markdown;
}

// Generate documentation
function generateDocumentation() {
  console.log('🔍 Scanning component directories for JSDoc comments...');
  
  const componentFiles = getAllComponentFiles();
  console.log(`Found ${componentFiles.length} component files`);
  
  // Extract JSDoc from all files
  const allJSDocData = [];
  
  for (const filePath of componentFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    const jsdocData = extractJSDoc(content);
    
    // Add file path to each JSDoc data entry
    for (const data of jsdocData) {
      data.filePath = filePath;
    }
    
    allJSDocData.push(...jsdocData);
  }
  
  console.log(`Extracted JSDoc from ${allJSDocData.length} components`);
  
  // Group by category
  const categorizedComponents = {};
  
  for (const data of allJSDocData) {
    // Clean up category name
    const category = data.category ? data.category.replace(/\s*\*\s*/g, ' ').trim() : 'Uncategorized';
    
    if (!categorizedComponents[category]) {
      categorizedComponents[category] = [];
    }
    
    categorizedComponents[category].push(data);
  }
  
  // Generate markdown
  let markdown = '# Component Documentation\n\n';
  markdown += 'This documentation is automatically generated from JSDoc comments in component files.\n\n';
  
  // Add table of contents
  markdown += '## Table of Contents\n\n';
  
  for (const category in categorizedComponents) {
    markdown += `- [${category}](#${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')})\n`;
    
    for (const component of categorizedComponents[category]) {
      markdown += `  - [${component.componentName}](#${component.componentName.toLowerCase()})\n`;
    }
  }
  
  markdown += '\n';
  
  // Add component documentation by category
  for (const category in categorizedComponents) {
    markdown += `# ${category}\n\n`;
    
    for (const component of categorizedComponents[category]) {
      markdown += formatJSDocToMarkdown(component);
    }
  }
  
  // Write to file
  fs.writeFileSync(OUTPUT_FILE, markdown, 'utf8');
  
  console.log(`✅ Documentation generated at ${OUTPUT_FILE}`);
}

// Main function
function main() {
  console.log('🚀 Generating Component Documentation\n');
  
  // Create docs directory if it doesn't exist
  const docsDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }
  
  generateDocumentation();
  
  console.log('\n✨ Done!');
}

// Run the script
main(); 