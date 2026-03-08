# AI Rules for Summit Project

This directory contains files specifically designed to help AI tools understand the structure, patterns, and rules of the Summit project — an NDIS SIL provider website built with Next.js, TypeScript, TailwindCSS, and Shadcn/Radix UI.

## Files in this Directory

- **summit_business_description.md**: Business profile, service offerings, service areas, and website identity for SummitSDA
- **ai-context.jsonc**: Machine-readable structured data covering the component system, routes, navigation, contexts, tech stack, and project patterns
- **ai-instructions.md**: Human-readable rules and instructions for component creation, modification, removal, import patterns, navigation, forms, and known exceptions
- **component-commands.md**: Command reference for development, JSDoc documentation, import migration, and component lifecycle scripts

## Purpose

These files help AI tools to:

1. Understand the project's component architecture and directory structure
2. Follow established patterns, conventions, and known exceptions
3. Generate code that complies with project standards
4. Assist with component creation, modification, and removal
5. Understand the website's business context, routes, and navigation structure
6. Work with the accessibility system (contexts and providers)
7. Follow correct form patterns (React Hook Form + Zod)

## How to Use These Files with AI Tools

When working with AI tools like Claude, GitHub Copilot, or similar:

1. Reference these files in your prompts, e.g., "Please review the component structure as defined in .ai-rules/ai-instructions.md"
2. For machine-readable context, point to `ai-context.jsonc`
3. For specific instructions and rules, reference `ai-instructions.md`
4. For business context and service information, reference `summit_business_description.md`

## Key Rules Summary

### Component System
- Components are organised by category in dedicated directories under `components/`
- File naming uses kebab-case (exception: `features/accessibility/` uses PascalCase)
- Component naming uses PascalCase
- Named exports required (exception: CTASection uses default export)
- Custom components require JSDoc with `@component`, `@description`, `@category`, `@usedIn` tags
- Shadcn/UI primitives in `components/ui/` do not require JSDoc
- New components must be added to `components/index.ts` and optionally to the component registry

### Project Structure
- Context providers live in `contexts/` (not `components/`)
- Navigation data lives in `lib/navigation.ts` with dropdown components in `components/navigation/nav-content/`
- Property data in `lib/properties.ts`, SIL location data in `lib/sil-locations.ts`
- Forms use React Hook Form with Zod validation
- Sitemap at `app/sitemap.ts` must be updated when routes change

### Tech Stack
- Next.js (App Router), TypeScript, TailwindCSS
- Shadcn/UI + Radix UI primitives
- React Hook Form + Zod for forms
- Husky + lint-staged for pre-commit checks
- No test suite exists

## Maintaining These Rules

If project patterns or requirements change:

1. Update these files to reflect new rules or patterns
2. Ensure `ai-context.jsonc` stays in sync with the textual documentation
3. Keep the route list in `ai-context.jsonc` current when pages are added or removed
4. Update `summit_business_description.md` if services or branding changes
