# AI Rules for Eden Project

This directory contains files specifically designed to help AI tools understand the structure, patterns, and rules of the Eden project's component system.

## Files in this Directory

- **component-structure.md**: Comprehensive documentation on component structure, organization, and requirements
- **component-commands.md**: Command reference for working with components
- **ai-instructions.md**: Specific instructions for AI tools on how to handle components
- **ai-context.jsonc**: Machine-readable structured data about the component system

## Purpose

These files are designed to be read by AI tools to help them:

1. Understand the project's component architecture
2. Follow established patterns and conventions
3. Generate code that complies with project standards
4. Assist with component creation, modification, and removal

## How to Use These Files with AI Tools

When working with AI tools like Claude, GitHub Copilot, or similar:

1. Reference these files in your prompts, e.g., "Please review the component structure as defined in .ai-rules/component-structure.md"
2. For machine-readable context, point to ai-context.jsonc
3. For specific instructions, reference ai-instructions.md

## Key Component Rules Summary

- Components are organized by category in dedicated directories
- All components require proper JSDoc documentation
- File naming uses kebab-case (e.g., property-card.tsx)
- Component naming uses PascalCase (e.g., PropertyCard)
- All components must be registered in the component registry
- Import paths must use the category structure
- Functional components with TypeScript interfaces for props

## Maintaining These Rules

If project patterns or requirements change:

1. Update these files to reflect new rules or patterns
2. Ensure ai-context.jsonc stays in sync with textual documentation
3. Keep example templates current 