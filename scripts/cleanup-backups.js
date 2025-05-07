/**
 * Cleanup Backup Files
 * 
 * This script removes the .bak files created during component organization
 * Only run this after verifying that the organized components are working correctly
 * 
 * Usage: node scripts/cleanup-backups.js
 */

const fs = require('fs');
const path = require('path');

// Directory to clean up
const componentsDir = path.join(__dirname, '..', 'components');

// Find all .bak files
function findBackupFiles(dir) {
  const results = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively search directories
      results.push(...findBackupFiles(filePath));
    } else if (file.endsWith('.bak')) {
      results.push(filePath);
    }
  }
  
  return results;
}

// Main function
function main() {
  console.log('🔍 Finding backup files...');
  const backupFiles = findBackupFiles(componentsDir);
  
  if (backupFiles.length === 0) {
    console.log('✅ No backup files found. Nothing to clean up.');
    return;
  }
  
  console.log(`🗑️ Found ${backupFiles.length} backup files:`);
  for (const file of backupFiles) {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    console.log(`  - ${relativePath}`);
  }
  
  console.log('\n⚠️ Are you sure you want to delete these files? (y/n)');
  process.stdin.once('data', (data) => {
    const answer = data.toString().trim().toLowerCase();
    
    if (answer === 'y' || answer === 'yes') {
      console.log('🗑️ Deleting backup files...');
      for (const file of backupFiles) {
        fs.unlinkSync(file);
        const relativePath = path.relative(path.join(__dirname, '..'), file);
        console.log(`  ✅ Deleted ${relativePath}`);
      }
      console.log('🎉 Cleanup completed!');
    } else {
      console.log('❌ Cleanup cancelled. No files were deleted.');
    }
    
    process.exit(0);
  });
}

// Run the script
main(); 