# AI Instructions for Summit Component System

## IMPORTANT RULES
- ALWAYS place components in correct category directories, not root
- ALWAYS include JSDoc documentation with REQUIRED tags
- ALWAYS use kebab-case for filenames
- ALWAYS use PascalCase for component names
- NEVER create re-export files at project root
- NEVER use default exports for components
- ALWAYS add new components to component-registry.ts

## Component Location Rules
```
UI components → components/ui/
Layout components → components/layout/
Feature components → components/features/
Common utilities → components/common/
Form components → components/forms/
Section components → components/sections/
Navigation components → components/navigation/
```

## Import Pattern Examples
```typescript
// CORRECT
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/features/property-card";
import { Hero } from "@/components/sections/hero";

// INCORRECT - NEVER DO THIS
import Button from "@/components/button";
import { PropertyCard } from "@/components/property-card";
```

## Component Creation Template
```typescript
// components/category/component-name.tsx

/**
 * @component ComponentName
 * @description Brief description of this component's purpose and functionality.
 * 
 * @example
 * ```tsx
 * <ComponentName prop1="value" />
 * ```
 * 
 * @category Category
 * @usedIn List of pages or components where this is used
 */

interface ComponentNameProps {
  /** Description of prop1 */
  prop1: string;
  /** Description of prop2 */
  prop2?: number;
}

export function ComponentName({ prop1, prop2 = defaultValue }: ComponentNameProps) {
  // Component implementation
}
```

## Component Registry Entry Template
```typescript
{
  name: 'ComponentName',
  path: 'components/category/component-name.tsx',
  category: ComponentCategory.CATEGORY,
  description: 'Brief description of the component',
  usedIn: ['Page1', 'Page2'],
}
```

## Common Mistakes to Avoid
1. Creating components in the wrong directory
2. Missing JSDoc documentation
3. Using incorrect import paths
4. Using default exports
5. Not adding to component registry
6. Incorrect file or component naming

## When Modifying Components
1. Preserve existing JSDoc documentation and update it
2. Maintain backward compatibility with existing props
3. Update component registry if functionality changes - ensure it reflects Summit's services.
4. Document new props with JSDoc comments

## When Removing Components
1. First check if it's used: `node scripts/cleanup-component-reexports.js`
2. Mark as deprecated in registry before removing
3. Add @deprecated JSDoc tag
4. Only remove after migration period

## Script Usage
- Documentation check: `npm run jsdoc:check`
- Auto-add JSDoc template: `npm run jsdoc:add components/path/file.tsx`
- Generate docs: `npm run jsdoc:generate` 