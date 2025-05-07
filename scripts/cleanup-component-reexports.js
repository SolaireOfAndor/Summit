/**
 * Cleanup Component Re-exports
 * 
 * This script identifies and removes component re-export files that are no longer needed
 * after migration. It first checks if any files are still importing from these re-exports
 * before suggesting removal.
 * 
 * Usage: node scripts/cleanup-component-reexports.js [--force]
 * 
 * Options:
 *   --force    Remove files without prompting (use with caution!)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directories to scan for imports
const DIRECTORIES_TO_SCAN = ['app', 'components', 'lib', 'hooks'];

// Component directories to check
const COMPONENT_DIRECTORIES = [
  'components/layout',
  'components/features',
  'components/common',
  'components/forms',
  'components/sections',
  'components/navigation'
];

// Get all re-export files in the root components directory
function getReExportFiles() {
  const componentsDir = path.join(__dirname, '..', 'components');
  const files = fs.readdirSync(componentsDir);
  
  return files.filter(file => {
    const filePath = path.join(componentsDir, file);
    return fs.statSync(filePath).isFile() && 
           file.endsWith('.tsx') && 
           file !== 'index.ts' && 
           file !== 'component-registry.ts';
  });
}

// Check if a file is being imported anywhere in the project
function checkFileImports(fileName) {
  const baseName = path.basename(fileName, '.tsx');
  const importPattern = `@/components/${baseName}`;
  const results = [];
  
  for (const directory of DIRECTORIES_TO_SCAN) {
    const directoryPath = path.join(__dirname, '..', directory);
    if (!fs.existsSync(directoryPath)) continue;
    
    try {
      // Use grep to find imports (much faster than reading each file)
      const grepCommand = process.platform === 'win32'
        ? `findstr /s /i /m /c:"${importPattern}" "${directoryPath}\\*.tsx" "${directoryPath}\\*.ts" "${directoryPath}\\*.jsx" "${directoryPath}\\*.js"`
        : `grep -r "${importPattern}" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" "${directoryPath}"`;
      
      const output = execSync(grepCommand, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
      
      if (output.trim()) {
        const files = output.trim().split('\n');
        results.push(...files);
      }
    } catch (error) {
      // grep returns non-zero exit code when no matches are found, which is fine
      if (error.status !== 1) {
        console.error(`Error scanning ${directory}:`, error.message);
      }
    }
  }
  
  return results;
}

// Find the actual component in the subdirectories
function findActualComponent(baseName) {
  for (const directory of COMPONENT_DIRECTORIES) {
    const filePath = path.join(__dirname, '..', directory, `${baseName}.tsx`);
    if (fs.existsSync(filePath)) {
      return {
        directory,
        filePath
      };
    }
  }
  
  return null;
}

// Analyze a re-export file to verify it's actually a re-export
function analyzeReExportFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if it's a re-export file (contains export { x } from './...')
  const isReExport = content.includes('export {') && content.includes('from \'./');
  
  // Look for deprecation notices
  const hasDeprecationNotice = content.includes('@deprecated');
  
  return {
    isReExport,
    hasDeprecationNotice,
    content
  };
}

// Main function
function main() {
  const forceMode = process.argv.includes('--force');
  
  console.log('🔍 Scanning for component re-export files...\n');
  
  // Get all re-export files
  const reExportFiles = getReExportFiles();
  console.log(`Found ${reExportFiles.length} potential re-export files\n`);
  
  // Check each file
  const results = [];
  
  for (const fileName of reExportFiles) {
    const filePath = path.join(__dirname, '..', 'components', fileName);
    const baseName = path.basename(fileName, '.tsx');
    
    // Analyze the file
    const analysis = analyzeReExportFile(filePath);
    
    // Find where the actual component is
    const actualComponent = findActualComponent(baseName);
    
    // Check if the file is still being imported
    const imports = checkFileImports(fileName);
    
    results.push({
      fileName,
      filePath,
      baseName,
      isReExport: analysis.isReExport,
      hasDeprecationNotice: analysis.hasDeprecationNotice,
      imports,
      actualComponent,
      canBeRemoved: analysis.isReExport && imports.length === 0 && actualComponent
    });
  }
  
  // Display results
  console.log('📊 Analysis Results:\n');
  
  const removableFiles = results.filter(result => result.canBeRemoved);
  const nonRemovableFiles = results.filter(result => !result.canBeRemoved);
  
  console.log(`✅ ${removableFiles.length} files can be safely removed`);
  console.log(`⚠️ ${nonRemovableFiles.length} files should be kept\n`);
  
  // Show removable files
  if (removableFiles.length > 0) {
    console.log('Files that can be removed:');
    for (const result of removableFiles) {
      console.log(`  - ${result.fileName} (actual component in ${result.actualComponent.directory})`);
    }
    console.log();
  }
  
  // Show non-removable files with reasons
  if (nonRemovableFiles.length > 0) {
    console.log('Files that should be kept:');
    for (const result of nonRemovableFiles) {
      const reasons = [];
      
      if (!result.isReExport) {
        reasons.push('not a re-export');
      }
      
      if (result.imports.length > 0) {
        reasons.push(`still imported in ${result.imports.length} files`);
      }
      
      if (!result.actualComponent) {
        reasons.push('actual component not found');
      }
      
      console.log(`  - ${result.fileName} (${reasons.join(', ')})`);
      
      // Show import locations if any
      if (result.imports.length > 0) {
        console.log(`    Imported in:`);
        for (const importFile of result.imports.slice(0, 5)) {
          console.log(`      ${importFile}`);
        }
        if (result.imports.length > 5) {
          console.log(`      ...and ${result.imports.length - 5} more files`);
        }
      }
    }
    console.log();
  }
  
  // Remove files if requested
  if (forceMode && removableFiles.length > 0) {
    console.log('🗑️ Removing files...');
    
    for (const result of removableFiles) {
      fs.unlinkSync(result.filePath);
      console.log(`  ✅ Removed ${result.fileName}`);
    }
    
    console.log(`\n✅ Successfully removed ${removableFiles.length} re-export files`);
  } else if (removableFiles.length > 0) {
    console.log('🛠️ Next steps:');
    console.log('1. Review the list of files that can be removed');
    console.log('2. Run this script with the --force flag to remove them:');
    console.log('   node scripts/cleanup-component-reexports.js --force');
  }
}

// Run the script
main(); 