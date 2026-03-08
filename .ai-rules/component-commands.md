# Component Commands Reference

## Development
```bash
# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint

# TypeScript type checking
npm run type-check
```

## JSDoc Documentation
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

Note: `jsdoc:check` also runs automatically via lint-staged on `.tsx` files during commits.

## Component Import Migration
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

## Component Creation Process
1. Create the component file in the appropriate category directory:
   ```bash
   # Example: creating a new feature component
   touch components/features/new-component.tsx
   ```
2. Implement the component with JSDoc, named export, and TypeScript props interface
3. Add re-export to `components/index.ts`
4. Add entry to `components/component-registry.ts` (for core custom components)
5. Verify documentation:
   ```bash
   npm run jsdoc:check
   ```

## Component Modification Process
1. Edit the component file in its category directory
2. Update JSDoc if functionality changes
3. Update `components/component-registry.ts` if needed
4. Update `components/index.ts` if exports change
5. Verify documentation:
   ```bash
   npm run jsdoc:check
   npm run jsdoc:generate
   ```

## Component Removal Process
1. Check if component is used:
   ```bash
   node scripts/cleanup-component-reexports.js
   ```
2. Update `components/component-registry.ts` to mark as deprecated
3. If still in use, add `@deprecated` tag to JSDoc
4. If not used:
   - Remove re-export from `components/index.ts`
   - Remove entry from `components/component-registry.ts`
   - Delete the component file

## Other Utility Scripts
```bash
# Organize components into category directories
node scripts/organize-components.js

# Clean up backup files created by migration scripts
node scripts/cleanup-backups.js
```
