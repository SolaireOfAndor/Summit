/**
 * Check Component Imports
 * 
 * This script scans the entire project to identify component imports
 * and helps determine if there are any issues with component re-exports.
 * 
 * Usage: node scripts/check-component-imports.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directories to scan
const DIRECTORIES_TO_SCAN = ['app', 'components'];

// Known directories to ignore (not actual component files)
const KNOWN_DIRECTORIES = ['ui', 'navigation', 'layout', 'common', 'features', 'forms', 'sections'];

// Component files in the root components directory (which are now re-exports)
const componentReExports = [];

// Component imports found in the project
const componentImports = [];

// Regular expression to match import statements from our components
const importRegex = /@\/components\/([a-zA-Z0-9_-]+)/g;

// Collect all component re-export files
function collectReExportFiles() {
  const files = fs.readdirSync(path.join(__dirname, '..', 'components'));
  
  return files.filter(file => {
    const filePath = path.join(__dirname, '..', 'components', file);
    return fs.statSync(filePath).isFile() && file.endsWith('.tsx') && file !== 'index.ts' && file !== 'component-registry.ts';
  });
}

// Find all component imports in a file
function findComponentImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const imports = [];
  let match;
  
  // Reset regex state
  importRegex.lastIndex = 0;
  
  while ((match = importRegex.exec(content)) !== null) {
    const componentName = match[1];
    
    // Skip known directories
    if (KNOWN_DIRECTORIES.includes(componentName)) {
      continue;
    }
    
    imports.push({
      file: path.relative(path.join(__dirname, '..'), filePath),
      component: componentName
    });
  }
  
  return imports;
}

// Scan a directory recursively
function scanDirectory(directory) {
  const results = [];
  const dir = path.join(__dirname, '..', directory);
  
  if (!fs.existsSync(dir)) {
    return results;
  }
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results.push(...scanDirectory(path.join(directory, file)));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(...findComponentImports(filePath));
    }
  }
  
  return results;
}

// Check a component re-export file to see if it's properly exporting
function checkReExportFile(componentName) {
  const filePath = path.join(__dirname, '..', 'components', `${componentName}.tsx`);
  
  if (!fs.existsSync(filePath)) {
    return {
      component: componentName,
      exists: false,
      error: 'File does not exist'
    };
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // For most components, check if they use a named export with "as default"
  // But also allow direct default export for components like cta-section
  if (!content.includes('as default') && !content.includes('export { default }')) {
    return {
      component: componentName,
      exists: true,
      error: 'Missing proper default export'
    };
  }
  
  return {
    component: componentName,
    exists: true,
    error: null
  };
}

// Main function
function main() {
  console.log('🔍 Checking component imports across the project...\n');
  
  // Collect re-export files
  const reExportFiles = collectReExportFiles();
  console.log(`Found ${reExportFiles.length} component re-export files`);
  
  // Find component imports across the project
  let allImports = [];
  for (const directory of DIRECTORIES_TO_SCAN) {
    const imports = scanDirectory(directory);
    allImports = [...allImports, ...imports];
  }
  
  // Count imports by component
  const importCounts = {};
  for (const imp of allImports) {
    importCounts[imp.component] = (importCounts[imp.component] || 0) + 1;
  }
  
  // Find the most imported components
  const sortedComponents = Object.entries(importCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([component, count]) => ({ component, count }));
  
  console.log('\n📊 Component import statistics:');
  for (const { component, count } of sortedComponents.slice(0, 10)) {
    console.log(`  - ${component}: ${count} imports`);
  }
  
  // Check for potential issues with re-exports
  console.log('\n🧪 Checking re-export files for potential issues:');
  const issues = [];
  
  // Check all components that are imported
  for (const componentName of Object.keys(importCounts)) {
    // Skip checking known directories
    if (KNOWN_DIRECTORIES.includes(componentName)) {
      continue;
    }
    
    const result = checkReExportFile(componentName);
    if (result.error) {
      issues.push(result);
    }
  }
  
  if (issues.length === 0) {
    console.log('  ✅ No issues found with component re-exports');
  } else {
    console.log(`  ❌ Found ${issues.length} issues with component re-exports:`);
    for (const issue of issues) {
      console.log(`  - ${issue.component}: ${issue.error}`);
    }
  }
  
  // Provide next steps
  console.log('\n🛠️ Next steps:');
  if (issues.length > 0) {
    console.log('1. Fix the component re-export issues listed above');
    console.log('2. Run this script again to verify fixes');
  } else {
    console.log('1. Consider updating imports to use the new component structure');
    console.log('2. Run the cleanup script to remove .bak files once everything is working');
  }
}

// Run the script
main(); 