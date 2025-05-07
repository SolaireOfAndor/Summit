/**
 * Add JSDoc Documentation to Components
 * 
 * This script helps automate adding JSDoc documentation to component files.
 * It can be run with a specific component file path or with a component directory.
 * 
 * Usage: 
 *   node scripts/add-jsdoc.js components/path/component.tsx
 *   node scripts/add-jsdoc.js components/directory
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// JSDoc template for components
const JSDOC_TEMPLATE = `/**
 * @component COMPONENT_NAME
 * @description [ADD DESCRIPTION] - What does this component do?
 * 
 * @example
 * \`\`\`tsx
 * <COMPONENT_NAME PROPS />
 * \`\`\`
 * 
 * @category CATEGORY
 * @usedIn [ADD USAGE] - Where is this component used?
 */`;

// Component categories based on directory
const DIRECTORY_CATEGORIES = {
  'components/layout': 'Layout',
  'components/features': 'Feature',
  'components/common': 'Common',
  'components/forms': 'Form',
  'components/sections': 'Section',
  'components/navigation': 'Navigation'
};

// Extract component name from file content
function extractComponentName(content) {
  // Look for export default function ComponentName or export function ComponentName
  const functionMatch = content.match(/export\s+(default\s+)?function\s+(\w+)/);
  if (functionMatch) {
    return functionMatch[2];
  }
  
  // Look for const ComponentName = ...
  const constMatch = content.match(/export\s+const\s+(\w+)\s*=/);
  if (constMatch) {
    return constMatch[1];
  }
  
  return null;
}

// Get category for a file path
function getCategoryForPath(filePath) {
  const normalizedPath = filePath.replace(/\\/g, '/');
  
  for (const [dir, category] of Object.entries(DIRECTORY_CATEGORIES)) {
    if (normalizedPath.includes(dir)) {
      return category;
    }
  }
  
  return '[UNKNOWN CATEGORY]';
}

// Extract props from component
function extractProps(content, componentName) {
  // Look for interface ComponentNameProps or type ComponentNameProps
  const propsRegex = new RegExp(`(interface|type)\\s+${componentName}Props\\s*=?\\s*\\{([^}]*)\\}`, 's');
  const propsMatch = content.match(propsRegex);
  
  if (propsMatch) {
    return propsMatch[2]
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('//'))
      .map(line => {
        // Extract prop name
        const propMatch = line.match(/(\w+)(\?)?:/);
        if (propMatch) {
          return propMatch[1];
        }
        return null;
      })
      .filter(Boolean);
  }
  
  return [];
}

// Add JSDoc to a component file
function addJSDocToComponent(filePath) {
  console.log(`\nProcessing: ${filePath}`);
  
  // Read file content
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if JSDoc already exists
  if (content.includes('@component') && content.includes('@description')) {
    console.log('✅ File already has JSDoc documentation');
    return;
  }
  
  // Extract component name
  const componentName = extractComponentName(content);
  
  if (!componentName) {
    console.log('⚠️ Could not detect component name');
    return;
  }
  
  console.log(`📝 Detected component: ${componentName}`);
  
  // Extract props
  const props = extractProps(content, componentName);
  
  // Get category
  const category = getCategoryForPath(filePath);
  
  // Build props string for example
  const propsString = props.length > 0 
    ? props.map(prop => `${prop}={${prop}}`).join(' ') 
    : '[props]';
  
  // Create JSDoc
  let jsdoc = JSDOC_TEMPLATE
    .replace(/COMPONENT_NAME/g, componentName)
    .replace(/CATEGORY/g, category)
    .replace(/<COMPONENT_NAME PROPS \/>/g, `<${componentName} ${propsString} />`);
  
  // Find insertion point (before component definition)
  const insertionRegex = new RegExp(`export\\s+(default\\s+)?((function|const)\\s+${componentName})`);
  const updatedContent = content.replace(insertionRegex, `${jsdoc}\n$&`);
  
  // Write updated content
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log('✅ Added JSDoc documentation');
  
  // Print what was added
  console.log('\nAdded JSDoc:');
  console.log(jsdoc);
}

// Process a single file
function processFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Error: File does not exist: ${filePath}`);
    return;
  }
  
  if (!filePath.endsWith('.tsx')) {
    console.error(`Error: File is not a .tsx file: ${filePath}`);
    return;
  }
  
  addJSDocToComponent(filePath);
}

// Process a directory
function processDirectory(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    console.error(`Error: Directory does not exist: ${directoryPath}`);
    return;
  }
  
  const files = fs.readdirSync(directoryPath);
  
  const componentFiles = files
    .filter(file => file.endsWith('.tsx') && !file.endsWith('.test.tsx'))
    .map(file => path.join(directoryPath, file));
  
  console.log(`Found ${componentFiles.length} component files in ${directoryPath}`);
  
  for (const filePath of componentFiles) {
    addJSDocToComponent(filePath);
  }
}

// Main function
function main() {
  const targetPath = process.argv[2];
  
  if (!targetPath) {
    console.log('Usage:');
    console.log('  node scripts/add-jsdoc.js components/path/component.tsx');
    console.log('  node scripts/add-jsdoc.js components/directory');
    return;
  }
  
  console.log('🚀 JSDoc Adder Tool\n');
  
  const stats = fs.statSync(targetPath);
  
  if (stats.isFile()) {
    processFile(targetPath);
  } else if (stats.isDirectory()) {
    processDirectory(targetPath);
  } else {
    console.error(`Error: Invalid path: ${targetPath}`);
  }
  
  console.log('\n✨ Done!');
  console.log('Next steps:');
  console.log('1. Review and update the auto-generated JSDoc');
  console.log('2. Fill in the [ADD DESCRIPTION] and [ADD USAGE] placeholders');
}

// Run the script
main(); 