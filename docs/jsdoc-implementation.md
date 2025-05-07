# JSDoc Implementation Guide

This document explains the JSDoc implementation in our project and how to use the associated tooling.

## Overview

We've implemented a comprehensive JSDoc documentation system for React components with the following features:

1. **Standardized JSDoc Format**: A consistent format for documenting components
2. **Automated Tooling**: Scripts to help check, add, and generate documentation
3. **Git Integration**: Pre-commit hooks to ensure documentation standards
4. **Documentation Generation**: Tools to generate markdown documentation from JSDoc comments

## Tools Available

### 1. Check for Missing JSDoc

Scans your codebase to identify components missing proper JSDoc documentation.

```bash
# Using npm script
npm run jsdoc:check

# Or directly
node scripts/check-jsdoc.js
```

### 2. Add JSDoc to Components

Helps automate adding JSDoc documentation to component files.

```bash
# Using npm script for a single component
npm run jsdoc:add components/path/component.tsx

# Or for an entire directory
npm run jsdoc:add components/directory

# Or directly
node scripts/add-jsdoc.js components/path/component.tsx
```

### 3. Generate Documentation

Extracts JSDoc comments from component files and generates markdown documentation.

```bash
# Using npm script
npm run jsdoc:generate

# Or directly
node scripts/generate-docs.js
```

## Git Hooks Integration

We've set up git hooks using Husky and lint-staged to check for proper JSDoc documentation before commits:

- **Pre-commit Hook**: Runs `jsdoc:check` on staged `.tsx` files
- **Configuration**: See `package.json` for `lint-staged` configuration

## JSDoc Format for Components

Here's the standard format for JSDoc comments in component files:

```tsx
/**
 * @component ComponentName
 * @description Brief description of what this component does
 * 
 * @example
 * ```tsx
 * <ComponentName prop1="value" prop2={value} />
 * ```
 * 
 * @category Category
 * @usedIn List of pages or components where this is used
 */
```

See [JSDoc Standards](./jsdoc-standards.md) for more detailed guidelines.

## Workflow Recommendations

### For New Components

1. Create your component with proper JSDoc documentation
2. Run `npm run jsdoc:check` to verify documentation
3. Commit your changes (pre-commit hook will also verify)

### For Existing Components Without JSDoc

1. Run `npm run jsdoc:check` to identify undocumented components
2. Use `npm run jsdoc:add components/path/component.tsx` to add template JSDoc
3. Edit the generated template to provide accurate documentation
4. Commit your changes

### For Documentation Generation

1. Ensure components have proper JSDoc documentation
2. Run `npm run jsdoc:generate` to generate markdown documentation
3. Review the generated documentation in `docs/components.md`

## Implementation Details

- **JSDoc Checking**: `scripts/check-jsdoc.js` uses regex to look for required JSDoc tags
- **JSDoc Addition**: `scripts/add-jsdoc.js` detects component structure and adds appropriate JSDoc
- **Documentation Generation**: `scripts/generate-docs.js` extracts JSDoc and formats as markdown

## Future Improvements

Potential enhancements to consider:

1. Integrate with TypeDoc or a similar tool for even more comprehensive documentation
2. Add visual component examples in documentation
3. Create a web-based documentation viewer
4. Add props table generation from TypeScript interfaces
5. Implement automated testing for documentation completeness 