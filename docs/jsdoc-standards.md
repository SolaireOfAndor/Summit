# JSDoc Standards for Components

This document outlines the standards for JSDoc documentation in our React component library.

## Why JSDoc?

JSDoc provides numerous benefits to our development workflow:

1. **Improved Code Clarity**: Makes component purpose and usage clear to all developers
2. **Better IDE Integration**: Provides intellisense, auto-completion, and hover documentation
3. **Automatic Documentation**: Allows for generating documentation websites automatically
4. **Standardized Information**: Ensures consistent documentation across all components

## Required JSDoc Tags

Every component should include the following JSDoc tags:

| Tag | Purpose | Example |
|-----|---------|---------|
| `@component` | Identifies the name of the component | `@component Button` |
| `@description` | Explains what the component does | `@description A customizable button component with various styles` |
| `@example` | Shows how to use the component | `@example <Button variant="primary">Click me</Button>` |
| `@category` | Categorizes the component | `@category UI/Button` |
| `@usedIn` | Lists where the component is used | `@usedIn HomePage, LoginForm` |

## Optional JSDoc Tags

These tags are optional but recommended when applicable:

| Tag | Purpose | Example |
|-----|---------|---------|
| `@param` | Documents component props | `@param {string} variant - The style variant` |
| `@returns` | Describes what the component returns | `@returns {JSX.Element} A styled button element` |
| `@see` | References related components | `@see LinkButton` |
| `@deprecated` | Marks deprecated components | `@deprecated Use Button instead` |

## Complete Example

```tsx
/**
 * @component Button
 * @description A customizable button component that supports different variants and sizes.
 * 
 * @example
 * ```tsx
 * <Button 
 *   variant="primary" 
 *   size="md" 
 *   onClick={() => console.log('Clicked')}
 * >
 *   Click Me
 * </Button>
 * ```
 * 
 * @category UI/Button
 * @usedIn Throughout the application for user interactions
 * 
 * @param {object} props - Component props
 * @param {ReactNode} props.children - Button content
 * @param {'primary'|'secondary'|'tertiary'} [props.variant="primary"] - Visual style variant
 * @param {'sm'|'md'|'lg'} [props.size="md"] - Button size
 * @param {function} [props.onClick] - Click handler function
 * 
 * @returns {JSX.Element} A styled button element
 */
```

## Component Categories

Use these standard categories when documenting components:

- `Layout` - Structure components (Container, Grid, etc.)
- `Feature` - Business logic components (PropertyCard, Booking, etc.)
- `Common` - Reusable UI components (Button, Input, etc.)
- `Form` - Form-related components (InputField, Checkbox, etc.)
- `Section` - Page sections (Hero, Footer, etc.)
- `Navigation` - Navigation components (Menu, Breadcrumbs, etc.)

## Tooling

We have created scripts to help maintain JSDoc documentation:

1. **Check for Missing JSDoc**:
   ```bash
   node scripts/check-jsdoc.js
   ```

2. **Add JSDoc to Components**:
   ```bash
   # Add to a single component
   node scripts/add-jsdoc.js components/path/component.tsx
   
   # Add to all components in a directory
   node scripts/add-jsdoc.js components/directory
   ```

## Best Practices

1. **Be Descriptive**: Write clear, concise descriptions that explain the component's purpose
2. **Show Real Examples**: Provide realistic usage examples that demonstrate common use cases
3. **Document All Props**: Ensure all props are documented, especially required ones
4. **Keep Updated**: Update documentation when component behavior changes
5. **Be Consistent**: Follow the same documentation pattern across all components

## Integration with TypeScript

JSDoc works well with TypeScript to provide enhanced documentation:

```tsx
/**
 * @component Button
 * @description Primary button component
 */
type ButtonProps = {
  /** The visual style variant of the button */
  variant: 'primary' | 'secondary';
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Click handler function */
  onClick?: () => void;
};

export function Button({ variant, size = 'md', onClick }: ButtonProps) {
  // Component implementation
}
``` 