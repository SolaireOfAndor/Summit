/**
 * Migrate Component Imports
 * 
 * This script helps migrate component imports to use the new component structure.
 * It can be run in "report" mode to just show what would change, or in "update" mode to actually modify files.
 * 
 * Usage: node scripts/migrate-component-imports.js [--update]
 */

const fs = require('fs');
const path = require('path');

// Directories to scan
const DIRECTORIES_TO_SCAN = ['app', 'components'];

// Mode: 'report' or 'update'
const MODE = process.argv.includes('--update') ? 'update' : 'report';

// Map of component categories from component-registry.ts
function loadComponentRegistry() {
  const registryPath = path.join(__dirname, '..', 'components', 'component-registry.ts');
  const content = fs.readFileSync(registryPath, 'utf8');
  
  const components = {};
  const componentRegex = /name:\s*['"]([^'"]+)['"],[\s\n]*path:\s*['"]components\/([^\/'"]+)\/([^'"]+)['"],/g;
  
  let match;
  while ((match = componentRegex.exec(content)) !== null) {
    const [_, name, category, filename] = match;
    components[path.basename(filename, '.tsx')] = {
      name,
      category,
      filename: path.basename(filename, '.tsx')
    };
  }
  
  return components;
}

// Find all files to process
function findFilesToProcess() {
  const results = [];
  
  for (const directory of DIRECTORIES_TO_SCAN) {
    results.push(...findFilesInDirectory(directory));
  }
  
  return results;
}

// Find all files in a directory recursively
function findFilesInDirectory(directory) {
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
      results.push(...findFilesInDirectory(path.join(directory, file)));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(filePath);
    }
  }
  
  return results;
}

// Process a file to find and optionally update imports
function processFile(filePath, componentRegistry, stats) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  let fileModified = false;
  
  // Find import statements that match our components
  const importRegex = /import\s+{([^}]+)}\s+from\s+["']@\/components\/([\w-]+)["']/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    const [fullImport, importNames, componentName] = match;
    
    // Skip if this is importing from a subfolder already
    if (componentName.includes('/')) {
      continue;
    }
    
    // Find the component in the registry
    const registryComponent = componentRegistry[componentName];
    
    if (registryComponent) {
      const newImport = `import {${importNames}} from "@/components/${registryComponent.category}/${componentName}"`;
      
      if (MODE === 'update') {
        newContent = newContent.replace(fullImport, newImport);
        fileModified = true;
      }
      
      stats.components[componentName] = stats.components[componentName] || { count: 0, files: [] };
      stats.components[componentName].count++;
      stats.components[componentName].files.push(filePath);
      
      console.log(`📄 ${path.relative(path.join(__dirname, '..'), filePath)}`);
      console.log(`  - Old: ${fullImport}`);
      console.log(`  - New: ${newImport}`);
      console.log();
    }
  }
  
  if (fileModified) {
    fs.writeFileSync(filePath, newContent);
    stats.modifiedFiles.push(filePath);
  }
}

// Main function
function main() {
  console.log(`🔍 Running in ${MODE.toUpperCase()} mode...\n`);
  
  // Load component registry
  console.log('Loading component registry...');
  const componentRegistry = loadComponentRegistry();
  console.log(`Found ${Object.keys(componentRegistry).length} components in registry\n`);
  
  // Find files to process
  console.log('Finding files to process...');
  const files = findFilesToProcess();
  console.log(`Found ${files.length} files to process\n`);
  
  // Process files
  console.log('Processing files...');
  const stats = {
    components: {},
    modifiedFiles: []
  };
  
  for (const filePath of files) {
    processFile(filePath, componentRegistry, stats);
  }
  
  // Print summary
  console.log('\n📊 Summary:');
  console.log(`Found ${Object.keys(stats.components).length} components to migrate in ${files.length} files`);
  
  if (MODE === 'update') {
    console.log(`Modified ${stats.modifiedFiles.length} files`);
  }
  
  // Sort components by usage count
  const sortedComponents = Object.entries(stats.components)
    .sort((a, b) => b[1].count - a[1].count)
    .map(([component, data]) => ({ component, count: data.count, files: data.files }));
  
  console.log('\nTop components to migrate:');
  for (const { component, count } of sortedComponents.slice(0, 10)) {
    console.log(`  - ${component}: ${count} imports`);
  }
  
  // Next steps
  console.log('\n🛠️ Next steps:');
  if (MODE === 'report') {
    console.log('1. Run again with --update flag to apply changes');
    console.log('2. Test your application after making changes');
  } else {
    console.log('1. Test your application to ensure everything works');
    console.log('2. Run the cleanup script to remove .bak files once everything is working');
  }
}

// Run the script
main(); 