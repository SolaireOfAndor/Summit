# Component Commands Reference

## Utility Scripts Usage

### JSDoc Documentation
```bash
# Check all components for proper JSDoc documentation
npm run jsdoc:check

# Add JSDoc template to a specific component
npm run jsdoc:add components/category/component-name.tsx

# Add JSDoc templates to all components in a category
npm run jsdoc:add components/category

# Generate markdown documentation from JSDoc comments
npm run jsdoc:generate
```

### Component Import Migration
```bash
# Check current import patterns (report only)
node scripts/check-component-imports.js

# Analyze imports that would be migrated (report only)
node scripts/migrate-component-imports.js

# Migrate component imports to new structure (updates files)
node scripts/migrate-component-imports.js --update

# Fix component re-exports
node scripts/fix-component-reexports.js

# Check for removable re-export files (report only)
node scripts/cleanup-component-reexports.js

# Remove unused re-export files
node scripts/cleanup-component-reexports.js --force
```

## Component Creation Commands
```bash
# Create a new component file in the appropriate directory
touch components/{category}/{component-name}.tsx

# Update component registry
# Edit components/component-registry.ts manually to add the new component

# Verify component documentation
npm run jsdoc:check
```

## Component Testing Commands
```bash
# Run component tests
npm test

# Run specific component test
npm test -- -t "ComponentName"
```

## Component Modification Process
1. Edit the component file in its category directory
2. Update JSDoc if functionality changes
3. Update component registry if needed
4. Run `npm run jsdoc:check` to verify documentation
5. Run `npm run jsdoc:generate` to update documentation

## Component Removal Process
1. Check if component is used: `node scripts/cleanup-component-reexports.js`
2. Update component registry to mark as deprecated
3. If still in use, add @deprecated tag to JSDoc
4. If not used, remove file and registry entry 