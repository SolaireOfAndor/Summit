# Component Organization

This document outlines the organization structure and documentation standards for components in the Eden project.

## Folder Structure

Components are organized into the following categories:

- **layout/**: Layout components like headers, footers, and page containers
- **features/**: Feature-specific components for core business functionality
- **common/**: Reusable utility components
- **forms/**: Form components and form-related controls
- **sections/**: Page sections and content blocks
- **ui/**: UI components from shadcn/ui and custom UI components
- **navigation/**: Navigation-related components

## Component Documentation Template

When creating a new component, use the following JSDoc template at the top of your file:

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
 * @category Layout|Feature|Common|Form|Section|UI|Navigation
 * @usedIn Pages or components where this is used
 */
```

## Component Registry

Components are tracked in `components/component-registry.ts` which provides:

- Documentation of all components
- Categorization
- Usage tracking
- Dependency mapping
- Helper functions to find components

## Naming Conventions

- Use **PascalCase** for component names
- Use **kebab-case** for file names
- Use descriptive names that indicate the component's purpose
- Group related components in subfolders when appropriate

## Best Practices

1. **Single Responsibility**: Each component should have a single, well-defined responsibility
2. **Props Documentation**: Document all props using TypeScript interfaces/types with JSDoc comments
3. **Component Size**: Keep components reasonably sized; consider splitting large components
4. **Reusability**: Make components as reusable as possible; avoid hardcoding values
5. **Dependencies**: Minimize dependencies on other components when possible
6. **Styling**: Use consistent styling approach (we use Tailwind CSS)
7. **Testing**: Include tests for complex components

## Adding a New Component

1. Determine the appropriate category for your component
2. Create the component in the corresponding folder
3. Document the component using the template above
4. Add the component to the registry in `component-registry.ts`
5. Update any necessary exports

## Deprecating Components

When deprecating a component:

1. Mark it as deprecated in the component registry
2. Add a JSDoc `@deprecated` tag with migration instructions
3. Keep the component available until all usages are migrated

## Component Example Template

```tsx
import React from 'react';

/**
 * @component ExampleComponent
 * @description An example component demonstrating the documentation pattern
 * 
 * @example
 * ```tsx
 * <ExampleComponent title="Hello World" description="This is an example" />
 * ```
 * 
 * @category Common
 * @usedIn Various example pages
 */

interface ExampleComponentProps {
  /** The title to display */
  title: string;
  /** Optional description */
  description?: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-bold">{title}</h2>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      {onClick && (
        <button 
          onClick={onClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Click me
        </button>
      )}
    </div>
  );
};

export default ExampleComponent;
``` 