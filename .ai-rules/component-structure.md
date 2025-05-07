# Component Structure Reference

## Directory Structure
```
/components
    /layout      # Structural UI elements
    /features    # Business feature components
    /common      # Reusable UI utilities
    /forms       # Form components
    /sections    # Page sections
    /navigation  # Navigation components
    /ui          # Base UI components
    component-registry.ts # Component metadata
```

## Component Categorization
- `layout`: Headers, footers, containers, grids
- `features`: Domain-specific components (PropertyCard, PropertyFilters, ServiceCard)
- `common`: Shared utilities (ErrorBoundary, ThemeProvider, ScrollProgress)
- `forms`: Interactive input components (ContactForm, FeedbackForm)
- `sections`: Content sections (Hero, CTASection, PageHero)
- `navigation`: Menus, navigation controls (MainNav, MobileNav, ScrollToTop)
- `ui`: Base UI components (Button, Card, Dialog)

## JSDoc Documentation Requirements
```typescript
/**
 * @component ComponentName
 * @description [REQUIRED] Component's purpose and functionality
 * 
 * @example
 * ```tsx
 * <ComponentName prop1="value" prop2={value} />
 * ```
 * 
 * @category [REQUIRED] Layout|Feature|Common|Form|Section|Navigation
 * @usedIn [REQUIRED] Pages or components where component is used
 * @param {Type} propName - [OPTIONAL] Description of prop
 * @returns {JSX.Element} [OPTIONAL]
 * @deprecated [OPTIONAL] Use ComponentName instead
 */
```

## Component Registry Schema
```typescript
// component-registry.ts
export enum ComponentCategory {
  LAYOUT = 'layout',
  UI = 'ui',
  FEATURE = 'feature',
  COMMON = 'common',
  FORM = 'form',
  SECTION = 'section',
  NAVIGATION = 'navigation'
}

export interface ComponentRegistryEntry {
  name: string;               // PascalCase component name
  path: string;               // Path relative to project root
  category: ComponentCategory; // From enum above
  description: string;        // Brief description
  usedIn: string[];          // Array of usage locations
  props?: Record<string, string>; // Optional prop documentation
  dependencies?: string[];    // Components used within this component
  deprecated?: {
    since: string;
    reason: string;
    alternative?: string;
  };
}

export const componentRegistry: ComponentRegistryEntry[] = [
  // All components listed here
];
```

## Import/Export Patterns
- Direct imports from category: `import { ComponentName } from "@/components/category/component-name"`
- No re-exports at project root
- No aliased imports/exports
- Avoid default exports in component files

## Props Interface Pattern
```typescript
interface ComponentNameProps {
  /** Prop description comment */
  requiredProp: string;
  /** Optional prop description */
  optionalProp?: number;
  /** Function callback description */
  onEvent?: (param: EventType) => void;
  /** Children description */
  children?: React.ReactNode;
}

export function ComponentName({
  requiredProp,
  optionalProp = defaultValue,
  onEvent,
  children
}: ComponentNameProps) {
  // Implementation
}
```

## Utility Scripts
1. `scripts/check-jsdoc.js`: Verifies JSDoc standards compliance
2. `scripts/add-jsdoc.js`: Adds JSDoc templates to components
3. `scripts/generate-docs.js`: Generates documentation from JSDoc
4. `scripts/migrate-component-imports.js`: Updates import paths
5. `scripts/cleanup-component-reexports.js`: Removes unused re-exports
6. `scripts/fix-component-reexports.js`: Repairs re-export files

## Component File Naming
- File names: kebab-case.tsx (e.g., `property-card.tsx`)
- Component names: PascalCase (e.g., `PropertyCard`)
- Always use .tsx extension for component files
- Props interfaces: ComponentNameProps

## Component Creation Rules
1. Place in correct category directory
2. Include complete JSDoc documentation
3. Include in component registry
4. Use interface for props with JSDoc comments
5. Export named (not default)
6. Include component and props unit tests

## Component Modification Rules
1. Update JSDoc when behavior changes
2. Update component registry when usage changes
3. Maintain backward compatibility or provide migration path
4. Add props with default values for backward compatibility

## Component Removal Process
1. Mark as deprecated in component registry
2. Add @deprecated JSDoc tag
3. Create re-export with deprecation warning
4. Eventually remove after migration period

## React Patterns
1. Functional components only
2. Hooks for state management
3. Callback naming: `handleEventName` for internal, `onEventName` for props
4. Composition over inheritance
5. Controlled components preferred
6. Avoid prop drilling (use context where needed)

## Special Considerations
1. Mobile-first responsive design using Tailwind
2. Accessibility compliance required
3. Theme awareness via ThemeProvider
4. Use Radix primitives where possible
5. Navigation components use navigationData from lib/navigation.ts
6. Form components use React Hook Form with Zod validation

## Component Creation Process
1. Determine component category and place in corresponding directory
2. Create component file using kebab-case naming
3. Add component implementation with PascalCase name
4. Document with complete JSDoc including all required tags
5. Add to component-registry.ts with complete metadata
6. Write tests if required

## Component Example
```tsx
// components/features/property-card.tsx

/**
 * @component PropertyCard
 * @description A card component for displaying property information including type, details, 
 * features, and an image. Includes interactive elements like tooltips and navigation.
 * 
 * @example
 * ```tsx
 * <PropertyCard
 *   type="SDA"
 *   title="Modern Apartment"
 *   location="Brisbane, QLD"
 *   description="Spacious property with modern amenities"
 *   image="/images/properties/apartment.jpg"
 *   bedrooms={2}
 *   bathrooms={1}
 *   vacancy={1}
 *   features={["Air conditioning", "Wheelchair access"]}
 *   designCategory="Improved Liveability"
 *   buildingType="Apartment"
 *   href="/properties/modern-apartment"
 * />
 * ```
 * 
 * @category Feature
 * @usedIn Property listings, Property search pages
 */

interface PropertyCardProps {
  /** Property type (e.g., SDA, SIL) */
  type: string;
  /** Name of the property */
  title: string;
  /** Geographic location of the property */
  location: string;
  /** Brief description of the property */
  description: string;
  /** URL to the property image */
  image: string;
  /** Number of bedrooms in the property */
  bedrooms: number;
  /** Number of bathrooms in the property */
  bathrooms: number;
  /** Number of vacancies available */
  vacancy: number;
  /** List of property features/amenities */
  features: string[];
  /** SDA design category (e.g., "Improved Liveability", "Fully Accessible") */
  designCategory?: string;
  /** Type of building (e.g., "House", "Apartment", "Villa") */
  buildingType?: string;
  /** URL to the property details page */
  href: string;
}

export function PropertyCard({
  type,
  title,
  location,
  description,
  image,
  bedrooms,
  bathrooms,
  vacancy,
  features,
  designCategory,
  buildingType,
  href,
}: PropertyCardProps) {
  // Component implementation
}
```

## Component Registry Entry Example
```typescript
// In component-registry.ts
{
  name: 'PropertyCard',
  path: 'components/features/property-card.tsx',
  category: ComponentCategory.FEATURE,
  description: 'A card component for displaying property information',
  usedIn: ['Property listings', 'Property search pages'],
  props: {
    type: 'Property type (e.g., SDA, SIL)',
    title: 'Name of the property',
    // Additional props...
  },
  dependencies: ['Card', 'Badge', 'Icon']
}
``` 