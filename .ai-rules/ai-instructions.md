# AI Instructions for Summit Project

## IMPORTANT RULES
- ALWAYS place components in correct category directories, not root
- ALWAYS include JSDoc documentation with REQUIRED tags (exception: shadcn/ui primitives)
- ALWAYS use kebab-case for filenames (exception: accessibility components — see below)
- ALWAYS use PascalCase for component names
- NEVER create re-export files at project root
- NEVER use default exports for components (exception: CTASection — see below)
- ALWAYS add new custom components to `components/index.ts`
- ALWAYS add core custom components to `components/component-registry.ts`

## Component Location Rules
```
UI primitives (shadcn)   → components/ui/
Custom UI components     → components/ui/
Layout components        → components/layout/
Feature components       → components/features/
Accessibility components → components/features/accessibility/
Common utilities         → components/common/
Form components          → components/forms/
Section components       → components/sections/
Navigation components    → components/navigation/
Nav dropdown content     → components/navigation/nav-content/
Component templates      → components/templates/
Context providers        → contexts/
```

## Known Exceptions
These deviations from the rules exist in the codebase and should be maintained as-is:

1. **PascalCase filenames** — `components/features/accessibility/` uses PascalCase filenames (`AccessibilityIcon.tsx`, `DesktopAccessibilityBar.tsx`, `AccessibilityOptionsList.tsx`)
2. **Default export** — `components/sections/cta-section.tsx` uses a default export (re-exported as named in `components/index.ts`)
3. **No JSDoc on shadcn/ui** — Generated UI primitives in `components/ui/` (e.g. `button.tsx`, `input.tsx`, `card.tsx`) do not have JSDoc. Custom UI components like `summit-button.tsx` and `section-separator.tsx` DO require JSDoc.
4. **Component registry is partial** — Not all components are in the registry (~18 of ~57). The registry tracks core custom components. Shadcn primitives and some newer components are only in `components/index.ts`.

## Import Pattern Examples
```typescript
// CORRECT — use category path
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/features/property-card";
import { Hero } from "@/components/sections/hero";
import { AccessibilityIcon } from "@/components/features/accessibility/AccessibilityIcon";
import { AboutDropdown } from "@/components/navigation/nav-content/about-dropdown";
import { useDarkMode } from "@/contexts/dark-mode-context";

// ALSO CORRECT — barrel import for multiple components
import { Header, Footer, Hero, ContactForm } from "@/components";

// INCORRECT — NEVER DO THIS
import Button from "@/components/button";
import { PropertyCard } from "@/components/property-card";
```

## Context Providers
The app uses three accessibility context providers in `contexts/`:

| Provider | File | Hook |
|----------|------|------|
| DarkModeProvider | `contexts/dark-mode-context.tsx` | `useDarkMode` |
| ColorBlindModeProvider | `contexts/color-blind-context.tsx` | `useColorBlindMode` |
| ReadableFontModeProvider | `contexts/readable-font-context.tsx` | `useReadableFontMode` |

These wrap the app in `app/layout.tsx` in the order: `DarkModeProvider > ColorBlindModeProvider > ReadableFontModeProvider`.

When creating new context providers, follow the same pattern: create in `contexts/`, export both the Provider component and a custom hook.

## Navigation Structure
Navigation data lives in `lib/navigation.ts` and exports `navigationData` with four sections: `about`, `learn`, `supportedAccommodations`, `dropInSupport`.

Each navigation section has a corresponding dropdown component in `components/navigation/nav-content/`:
- `about-dropdown.tsx` — About, Summit Vision, Feedback
- `learn-dropdown.tsx` — Funding, SIL, STA, MTA, SDA
- `supported-accommodations-dropdown.tsx` — SIL, STA, MTA, SDA
- `drop-in-support-dropdown.tsx` — Daily Life, Self-Care, Community Participation

## Component Creation Template
Use the template at `components/templates/component.tsx` as a reference:

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

export const ComponentName = ({ prop1, prop2 = 0 }: ComponentNameProps) => {
  // Component implementation
};
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

## Forms
Forms use React Hook Form with Zod validation. Current form components:
- `components/forms/contact-form.tsx` — Contact form with validation
- `components/forms/feedback-form.tsx` — Feedback form with rating and categories

Pattern:
```typescript
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({ /* fields */ });

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
});
```

## Properties and Data
- Property data: `lib/properties.ts` — used by `/properties`, `/properties/[slug]`
- SIL location data: `lib/sil-locations.ts` — used by `/sil/[location]`
- Navigation data: `lib/navigation.ts` — used by header, mobile nav, dropdown components

## Sitemap Maintenance
When any page is added, removed, or has its route changed:
1. Update `app/sitemap.ts` — add/remove/modify the entry in the static URLs array
2. Update `LAST_UPDATED` in `app/sitemap.ts` to today's date
3. If a page is removed, add a redirect in `next.config.mjs` for the old URL

## When Modifying Components
1. Preserve existing JSDoc documentation and update it
2. Maintain backward compatibility with existing props
3. Update component registry if functionality changes
4. Update `components/index.ts` if exports change
5. Document new props with JSDoc comments

## When Removing Components
1. First check if it's used: `node scripts/cleanup-component-reexports.js`
2. Mark as deprecated in registry before removing
3. Add @deprecated JSDoc tag
4. Remove from `components/index.ts`
5. Only remove file after migration period

## Common Mistakes to Avoid
1. Creating components in the wrong directory
2. Missing JSDoc documentation on custom components
3. Using incorrect import paths (must use category structure)
4. Using default exports (use named exports)
5. Forgetting to add to `components/index.ts`
6. Incorrect file or component naming
7. Modifying generated shadcn/ui components without good reason
8. Creating context providers outside the `contexts/` directory

## Script Usage
- Documentation check: `npm run jsdoc:check`
- Auto-add JSDoc template: `npm run jsdoc:add components/path/file.tsx`
- Generate docs: `npm run jsdoc:generate`
