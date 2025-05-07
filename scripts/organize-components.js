/**
 * Component Organization Script
 * 
 * This script helps organize components into the new folder structure based on the component registry.
 * It creates symbolic links for components that should be moved to maintain backward compatibility.
 * 
 * Usage:
 * node scripts/organize-components.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Load the component registry
const componentRegistryPath = path.join(__dirname, '..', 'components', 'component-registry.ts');
const componentRegistryContent = fs.readFileSync(componentRegistryPath, 'utf8');

// Parse the component registry to extract component information
// This is a simplified parsing approach - in a real implementation, you would use a TypeScript parser
function parseComponentRegistry(content) {
  const components = [];
  const componentRegex = /{[\s\n]*name:\s*['"]([^'"]+)['"],[\s\n]*path:\s*['"]([^'"]+)['"],[\s\n]*category:\s*ComponentCategory\.([A-Z]+)/g;
  
  let match;
  while ((match = componentRegex.exec(content)) !== null) {
    components.push({
      name: match[1],
      path: match[2],
      category: match[3].toLowerCase()
    });
  }
  
  return components;
}

// Map category to folder
function getCategoryFolder(category) {
  const mapping = {
    'layout': 'layout',
    'ui': 'ui',
    'feature': 'features',
    'common': 'common',
    'form': 'forms',
    'section': 'sections',
    'navigation': 'navigation'
  };
  
  return mapping[category] || category;
}

// Function to move a component to its appropriate folder
function organizeComponent(component) {
  const sourcePath = path.join(__dirname, '..', component.path);
  if (!fs.existsSync(sourcePath)) {
    console.log(`⚠️ Component file not found: ${sourcePath}`);
    return;
  }
  
  const targetFolder = getCategoryFolder(component.category);
  const targetDir = path.join(__dirname, '..', 'components', targetFolder);
  const fileName = path.basename(sourcePath);
  const targetPath = path.join(targetDir, fileName);
  
  // Ensure the target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  // Skip if the file is already in the correct location
  if (sourcePath === targetPath) {
    console.log(`✅ ${component.name} is already in the correct location: ${targetPath}`);
    return;
  }
  
  try {
    // Copy the file to the new location
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`📁 Copied ${component.name} to ${targetFolder}/${fileName}`);
    
    // Create a backup of the original file
    const backupPath = `${sourcePath}.bak`;
    fs.copyFileSync(sourcePath, backupPath);
    
    // Update the original file with a re-export to maintain backward compatibility
    const componentName = component.name;
    // Determine the relative path from the source to the target
    const relativePath = path.relative(path.dirname(sourcePath), targetPath);
    const relativePathNormalized = relativePath.replace(/\\/g, '/');
    
    const reExportContent = `/**
 * @deprecated This file is kept for backward compatibility.
 * Please import from '${getCategoryFolder(component.category)}/${fileName}' instead.
 */

export { default } from './${relativePathNormalized}';
export * from './${relativePathNormalized}';
`;
    
    fs.writeFileSync(sourcePath, reExportContent);
    console.log(`🔄 Created re-export for backward compatibility: ${sourcePath}`);
    
    // Update the component registry path
    const newPath = `components/${targetFolder}/${fileName}`;
    console.log(`📝 Update the component registry path to: ${newPath}`);
    
  } catch (error) {
    console.error(`❌ Error organizing component ${component.name}:`, error);
  }
}

// Main function
function main() {
  console.log('🚀 Starting component organization...');
  
  try {
    const components = parseComponentRegistry(componentRegistryContent);
    console.log(`Found ${components.length} components in the registry`);
    
    for (const component of components) {
      organizeComponent(component);
    }
    
    console.log('\n✅ Component organization completed!');
    console.log('\nNext steps:');
    console.log('1. Review the changes and ensure everything works correctly');
    console.log('2. Update the component registry paths to reflect the new locations');
    console.log('3. Remove the .bak files once you confirm everything is working');
    
  } catch (error) {
    console.error('❌ Error during component organization:', error);
  }
}

// Run the script
main(); 