/**
 * Check for Components Missing JSDoc Documentation
 * 
 * This script scans component directories to identify components
 * that are missing proper JSDoc documentation.
 * 
 * Usage: node scripts/check-jsdoc.js
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

// JSDoc patterns to check for
const REQUIRED_JSDOC_PATTERNS = [
  '@component',
  '@description',
  '@category'
];

// Scan a component file for JSDoc documentation
function scanComponentFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  
  // Check if the file has JSDoc comments
  const hasJSDoc = REQUIRED_JSDOC_PATTERNS.every(pattern => 
    content.includes(pattern)
  );
  
  return {
    filePath,
    fileName,
    hasJSDoc,
    missingPatterns: REQUIRED_JSDOC_PATTERNS.filter(pattern => 
      !content.includes(pattern)
    )
  };
}

// Get all component files in a directory
function getComponentFiles(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }
  
  const files = fs.readdirSync(directory);
  
  return files
    .filter(file => file.endsWith('.tsx') && !file.endsWith('.test.tsx'))
    .map(file => path.join(directory, file));
}

// Format a file path for display
function formatFilePath(filePath) {
  return filePath.replace(/\\/g, '/');
}

// Main function
function main() {
  console.log('🔍 Checking components for JSDoc documentation...\n');
  
  const allComponentFiles = [];
  
  // Gather all component files
  for (const directory of COMPONENT_DIRECTORIES) {
    const componentFiles = getComponentFiles(directory);
    allComponentFiles.push(...componentFiles);
  }
  
  console.log(`Found ${allComponentFiles.length} component files to check\n`);
  
  // Scan each component file
  const results = allComponentFiles.map(scanComponentFile);
  
  // Separate components with and without JSDoc
  const withJSDoc = results.filter(result => result.hasJSDoc);
  const withoutJSDoc = results.filter(result => !result.hasJSDoc);
  
  // Print report
  console.log('📊 JSDoc Documentation Report:');
  console.log(`  ✅ ${withJSDoc.length} components have proper JSDoc documentation`);
  console.log(`  ❌ ${withoutJSDoc.length} components are missing proper JSDoc documentation\n`);
  
  if (withoutJSDoc.length > 0) {
    console.log('Components missing proper JSDoc documentation:');
    
    for (const result of withoutJSDoc) {
      console.log(`  - ${formatFilePath(result.filePath)}`);
      console.log(`    Missing: ${result.missingPatterns.join(', ')}`);
    }
  }
  
  // Provide next steps
  console.log('\n🛠️ Next steps:');
  
  if (withoutJSDoc.length === 0) {
    console.log('All components have proper JSDoc documentation! 🎉');
  } else {
    console.log('1. Add JSDoc documentation to the components listed above');
    console.log('2. Run this script again to verify all components are documented');
    
    // Suggest a component to start with
    if (withoutJSDoc.length > 0) {
      console.log('\nExample JSDoc template to add to a component:');
      console.log(`
/**
 * @component ComponentName
 * @description Brief description of what this component does and its purpose
 * 
 * @example
 * \`\`\`tsx
 * <ComponentName prop1="value" prop2={value} />
 * \`\`\`
 * 
 * @category Layout|Feature|Common|Form|Section|Navigation
 * @usedIn List of pages or components where this is used
 */
`);
    }
  }
}

// Run the script
main(); 