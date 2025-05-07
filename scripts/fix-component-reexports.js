/**
 * Fix Component Re-exports
 * 
 * This script automatically fixes component re-exports to ensure they use the "as default" pattern.
 * It reads the component registry to identify the correct category for each component.
 * 
 * Usage: node scripts/fix-component-reexports.js
 */

const fs = require('fs');
const path = require('path');

// Map of component categories from component-registry.ts
const CATEGORY_MAP = {
  'LAYOUT': 'layout',
  'UI': 'ui',
  'FEATURE': 'features',
  'COMMON': 'common',
  'FORM': 'forms',
  'SECTION': 'sections',
  'NAVIGATION': 'navigation'
};

// Load the component registry to get the component categories
function loadComponentRegistry() {
  const registryPath = path.join(__dirname, '..', 'components', 'component-registry.ts');
  const content = fs.readFileSync(registryPath, 'utf8');
  
  const components = {};
  const componentRegex = /name:\s*['"]([^'"]+)['"],[\s\n]*path:[^,]*,[\s\n]*category:\s*ComponentCategory\.([A-Z]+)/g;
  
  let match;
  while ((match = componentRegex.exec(content)) !== null) {
    const [_, name, category] = match;
    components[name] = {
      category: CATEGORY_MAP[category] || category.toLowerCase(),
      name
    };
  }
  
  return components;
}

// Fix a component re-export file
function fixReExportFile(filePath, componentName, category) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️ File does not exist: ${filePath}`);
    return false;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // If it already has "as default", skip it
  if (content.includes('as default')) {
    console.log(`✅ Already fixed: ${filePath}`);
    return true;
  }
  
  // Extract the first export target to determine the component name
  const exportMatch = content.match(/export\s*{\s*([A-Za-z0-9_]+)\s*}/);
  if (!exportMatch) {
    console.log(`❌ Could not determine export name: ${filePath}`);
    return false;
  }
  
  const exportName = exportMatch[1];
  
  // Create the new content
  const newContent = `/**
 * @deprecated This file is kept for backward compatibility.
 * Please import from '${category}/${path.basename(filePath, '.tsx')}' instead.
 */

export { ${exportName} as default } from './${category}/${path.basename(filePath, '.tsx')}';
export * from './${category}/${path.basename(filePath, '.tsx')}';
`;
  
  // Write the file
  fs.writeFileSync(filePath, newContent);
  console.log(`🔧 Fixed: ${filePath}`);
  
  return true;
}

// Get all component files in the root components directory
function getComponentFiles() {
  const files = fs.readdirSync(path.join(__dirname, '..', 'components'));
  
  return files.filter(file => {
    const filePath = path.join(__dirname, '..', 'components', file);
    return fs.statSync(filePath).isFile() && 
           file.endsWith('.tsx') && 
           file !== 'index.ts' && 
           file !== 'component-registry.ts' &&
           !file.endsWith('.bak');
  });
}

// Determine the component name from the file name
function getComponentNameFromFile(fileName) {
  // Convert kebab-case to PascalCase
  const baseName = path.basename(fileName, '.tsx');
  return baseName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

// Main function
function main() {
  console.log('🔍 Loading component registry...');
  const registry = loadComponentRegistry();
  console.log(`Found ${Object.keys(registry).length} components in registry`);
  
  console.log('\n🔍 Gathering component files in root directory...');
  const componentFiles = getComponentFiles();
  console.log(`Found ${componentFiles.length} component files to check`);
  
  console.log('\n🔧 Fixing component re-exports...');
  
  // Track statistics
  const stats = {
    fixed: 0,
    skipped: 0,
    failed: 0
  };
  
  for (const file of componentFiles) {
    // Skip files that are already fixed or not relevant
    if (file === 'index.ts' || file === 'component-registry.ts' || file.endsWith('.bak')) {
      continue;
    }
    
    const filePath = path.join(__dirname, '..', 'components', file);
    const pascalCaseName = getComponentNameFromFile(file);
    
    // Find component in registry
    let componentInfo = null;
    for (const [name, info] of Object.entries(registry)) {
      if (name === pascalCaseName || name.toLowerCase() === pascalCaseName.toLowerCase()) {
        componentInfo = info;
        break;
      }
    }
    
    if (!componentInfo) {
      console.log(`⚠️ Could not find component in registry: ${pascalCaseName} (${file})`);
      stats.failed++;
      continue;
    }
    
    const result = fixReExportFile(filePath, componentInfo.name, componentInfo.category);
    
    if (result) {
      stats.fixed++;
    } else {
      stats.failed++;
    }
  }
  
  console.log('\n📊 Results:');
  console.log(`  ✅ Fixed: ${stats.fixed}`);
  console.log(`  ⏭️ Skipped: ${stats.skipped}`);
  console.log(`  ❌ Failed: ${stats.failed}`);
  
  if (stats.failed > 0) {
    console.log('\n⚠️ Some components could not be fixed automatically. Please check them manually.');
  } else {
    console.log('\n🎉 All components fixed successfully!');
  }
  
  console.log('\n🛠️ Next steps:');
  console.log('1. Run the check-component-imports.js script to verify fixes');
  console.log('2. Test your application to ensure everything works correctly');
  console.log('3. Run the cleanup script to remove .bak files once everything is working');
}

// Run the script
main(); 