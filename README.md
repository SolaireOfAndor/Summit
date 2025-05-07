# Eden - Disability Support Services Platform

This project implements a modern web platform for Eden, a provider of disability support services including SDA (Specialist Disability Accommodation) and SIL (Supported Independent Living).

## Features

- **Property Listings**: Browse available SDA and SIL properties
- **Service Information**: Detailed information about services provided
- **Contact Forms**: Request information or support
- **Resource Library**: Educational resources for clients and families

## Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Components**: Custom component library with Radix UI
- **Forms**: React Hook Form with Zod validation

## Getting Started

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd eden
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- **`app/`**: Next.js app router pages and layouts
- **`components/`**: Reusable UI components organized by category
- **`lib/`**: Utility functions and shared logic
- **`public/`**: Static assets
- **`styles/`**: Global styles and Tailwind configuration
- **`scripts/`**: Utility scripts for development workflow

## Component Documentation

We maintain comprehensive JSDoc documentation for components to ensure code clarity and ease of use.

### Documentation Standards

All components include standardized JSDoc comments with:

- Component description
- Usage examples
- Component category
- Usage locations
- Prop documentation

See [JSDoc Standards](docs/jsdoc-standards.md) for detailed guidelines.

### Documentation Tools

We've implemented several tools to help maintain and generate documentation:

1. **Check for Missing JSDoc**

   ```bash
   npm run jsdoc:check
   ```

2. **Add JSDoc to Components**

   ```bash
   # Document a single component
   npm run jsdoc:add components/path/component.tsx
   
   # Document all components in a directory
   npm run jsdoc:add components/directory
   ```

3. **Generate Documentation**

   ```bash
   npm run jsdoc:generate
   ```

See [JSDoc Implementation Guide](docs/jsdoc-implementation.md) for more details.

## Component Organization

Components are organized by function into the following directories:

- **`components/layout/`**: Structural components (containers, grids)
- **`components/features/`**: Business feature components (PropertyCard, etc.)
- **`components/common/`**: Reusable UI elements (buttons, inputs)
- **`components/forms/`**: Form-related components
- **`components/sections/`**: Page sections (Hero, CTASection, etc.)
- **`components/navigation/`**: Navigation-related components

## Development Workflow

1. **Feature branches**: Create a branch for each feature or fix
2. **Code style**: Follow the established patterns and use Tailwind for styling
3. **Documentation**: Add JSDoc comments to all new components
4. **Testing**: Test components before submitting PRs
5. **Code review**: All PRs require review before merging

## Git Hooks

The project uses Husky and lint-staged to enforce code quality:

- **Pre-commit**: JSDoc validation for components

## License

[License information]

## Contact

[Contact information]
