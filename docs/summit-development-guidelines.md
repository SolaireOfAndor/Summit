# Summit Website Development Guidelines

## 1. Overview

This document provides comprehensive development guidelines for the Summit website, incorporating modern React/Next.js best practices, accessibility standards, and Summit's specific business requirements as a registered NDIS service provider.

## 2. Summit Business Profile

**Business Type:** Registered NDIS service provider, focused on participant-centered support, empowerment, and high-quality, individualized care.

**Key Service Areas:**
- Supported Independent Living (SIL)
- Specialist Disability Accommodation (SDA)
- Medium Term Accommodation (MTA)
- Short Term Accommodation (STA) & Respite
- General Housing Solutions
- Personal Support & Daily Living
- Community Access & Engagement
- NDIS Education, Guidance, and Planning

**Core Values:**
- Participant empowerment and choice
- Exceeding industry standards
- Staff education and ongoing training
- Individualized, flexible support
- NSW-wide service reach

## 3. Technical Stack & Standards

### 3.1 Core Technologies
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with CSS Variables
- **UI Components:** Shadcn/UI + Custom Components
- **State Management:** React Context API
- **Accessibility:** WCAG 2.1 AA Compliance

### 3.2 Development Environment
- **Node.js:** Latest LTS version
- **Package Manager:** npm
- **Code Quality:** ESLint + Prettier
- **Version Control:** Git with conventional commits

## 4. Code Implementation Guidelines

### 4.1 General Principles
- **DRY Principle:** Don't Repeat Yourself - create reusable components and utilities
- **Early Returns:** Use early returns to reduce nesting and improve readability
- **Descriptive Naming:** Use clear, descriptive variable and function names
- **Component Size:** Keep components focused and reasonably sized
- **Type Safety:** Leverage TypeScript for better code quality and developer experience

### 4.2 Naming Conventions

#### Components
- Use **PascalCase** for component names: `HeaderNavigation`, `ContactForm`
- Use **kebab-case** for file names: `header-navigation.tsx`, `contact-form.tsx`
- Use descriptive names that indicate the component's purpose

#### Functions and Variables
- Use **camelCase** for functions and variables: `handleSubmit`, `isLoading`
- Prefix event handlers with "handle": `handleClick`, `handleKeyDown`, `handleSubmit`
- Use meaningful names that describe the purpose: `userInputData` instead of `data`

#### Constants
- Use **UPPER_SNAKE_CASE** for constants: `API_BASE_URL`, `MAX_RETRY_ATTEMPTS`

### 4.3 Component Structure

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

interface ComponentNameProps {
  /** Description of the prop */
  propName: string;
  /** Optional prop with default value */
  optionalProp?: boolean;
}

export const ComponentName = ({ propName, optionalProp = false }: ComponentNameProps) => {
  // Early returns for conditional rendering
  if (!propName) return null;

  const handleSomeAction = () => {
    // Handle action logic
  };

  return (
    <div className="tailwind-classes">
      {/* Component content */}
    </div>
  );
};
```

### 4.4 TypeScript Guidelines

#### Interface Definitions
```tsx
// Component props interfaces
interface ButtonProps {
  /** The button variant */
  variant: 'primary' | 'secondary' | 'outline';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Button content */
  children: React.ReactNode;
}

// API response types
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
```

#### Type Definitions
```tsx
// Use types for unions and computed types
type Theme = 'light' | 'dark';
type AccessibilityMode = 'normal' | 'colorblind' | 'readable-font';

// Use const assertions for constants
const ACCESSIBILITY_MODES = ['normal', 'colorblind', 'readable-font'] as const;
type AccessibilityMode = typeof ACCESSIBILITY_MODES[number];
```

## 5. Styling Guidelines

### 5.1 Tailwind CSS Usage
- **Always use Tailwind classes** for styling - avoid custom CSS unless absolutely necessary
- **Use CSS variables** for colors: `bg-[hsl(var(--primary))]`
- **Responsive design**: Mobile-first approach with responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- **Consistent spacing**: Use Tailwind's spacing scale for margins and padding

### 5.2 CSS Variable System
```css
/* Use the defined CSS variables */
:root {
  --primary: 25 100% 60%; /* #ff7e32 */
  --deep-brown: 30 100% 20%; /* #663300 */
  --background: 30 100% 98%; /* #fffaf5 */
}

/* Example usage in components */
.button {
  background-color: hsl(var(--primary));
  color: hsl(var(--text-white));
}
```

### 5.3 Responsive Design Patterns
```tsx
// Mobile-first responsive design
<div className="
  flex flex-col gap-4
  sm:flex-row sm:gap-6
  md:gap-8
  lg:max-w-6xl lg:mx-auto
">
  {/* Content */}
</div>
```

## 6. Accessibility Implementation

### 6.1 Accessibility Modes
The Summit website supports three accessibility modes:

1. **Dark/Light Mode Toggle**
2. **Color Blind Mode** (Blue-yellow palette for universal accessibility)
3. **Readable Font Mode** (Dyslexia-friendly fonts and enhanced readability)

### 6.2 Accessibility Context Usage
```tsx
// Import accessibility contexts
import { useDarkMode } from "@/contexts/dark-mode-context";
import { useColorBlindMode } from "@/contexts/color-blind-context";
import { useReadableFontMode } from "@/contexts/readable-font-context";

// Use in components
const MyComponent = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { isColorBlindMode, toggleColorBlindMode } = useColorBlindMode();
  const { isReadableFontMode, toggleReadableFontMode } = useReadableFontMode();

  return (
    // Component implementation
  );
};
```

### 6.3 Accessibility Best Practices

#### Semantic HTML
```tsx
// Use proper semantic HTML elements
<header role="banner">
  <nav aria-label="Main navigation">
    <ul role="list">
      <li><a href="/about" aria-current="page">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <section aria-labelledby="services-heading">
    <h2 id="services-heading">Our Services</h2>
  </section>
</main>

<footer role="contentinfo">
  {/* Footer content */}
</footer>
```

#### ARIA Attributes
```tsx
// Use ARIA attributes for enhanced accessibility
<button
  aria-label="Toggle dark mode"
  aria-pressed={isDarkMode}
  aria-expanded={isMenuOpen}
  onClick={handleToggleDarkMode}
>
  Toggle Dark Mode
</button>

<div
  role="tabpanel"
  aria-labelledby="tab-1"
  tabIndex={0}
>
  {/* Panel content */}
</div>
```

#### Focus Management
```tsx
// Ensure proper focus management
<button
  className="
    focus:outline-none 
    focus:ring-2 
    focus:ring-[hsl(var(--focus-ring))] 
    focus:ring-offset-2 
    focus:ring-offset-[hsl(var(--background))]
  "
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleAction();
    }
  }}
>
  Action Button
</button>
```

## 7. Context and State Management

### 7.1 Context Pattern
```tsx
// Context definition pattern
interface MyContextType {
  state: StateType;
  actions: {
    updateState: (newState: StateType) => void;
    resetState: () => void;
  };
}

const MyContext = createContext<MyContextType | undefined>(undefined);

// Custom hook pattern
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

// Provider pattern
export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<StateType>(initialState);
  
  const updateState = useCallback((newState: StateType) => {
    setState(newState);
  }, []);

  const value = useMemo(() => ({
    state,
    actions: { updateState, resetState: () => setState(initialState) }
  }), [state, updateState]);

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
```

## 8. Performance Guidelines

### 8.1 Component Optimization
```tsx
// Use React.memo for components that don't need frequent re-renders
const ExpensiveComponent = React.memo(({ data }: { data: DataType }) => {
  return <div>{/* Expensive rendering logic */}</div>;
});

// Use useCallback for event handlers
const handleClick = useCallback(() => {
  // Event handler logic
}, [dependency]);

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

### 8.2 Image Optimization
```tsx
// Use Next.js Image component for optimized images
import Image from 'next/image';

<Image
  src="/path/to/image.webp"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={isAboveFold}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## 9. Testing Guidelines

### 9.1 Component Testing
```tsx
// Example component test structure
import { render, screen, fireEvent } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent prop="value" />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    const handleClick = jest.fn();
    render(<MyComponent onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### 9.2 Accessibility Testing
```tsx
// Include accessibility tests
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

it('should not have accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## 10. SEO Guidelines

### 10.1 Metadata Management
```tsx
// Use Next.js metadata API
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title - Summit',
  description: 'Page description that clearly explains the content',
  openGraph: {
    title: 'Page Title - Summit',
    description: 'Page description',
    images: ['/og-image.jpg'],
  },
};
```

### 10.2 Structured Data
```tsx
// Include structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Summit",
  "url": "https://summitsda.com.au",
  "description": "Registered NDIS service provider...",
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

## 11. Content Guidelines

### 11.1 Summit-Specific Content
- All content must reflect Summit's mission and values
- Use participant-centered language
- Emphasize empowerment, choice, and individualized support
- Maintain professional yet approachable tone
- Include relevant NDIS terminology and compliance information

### 11.2 Accessibility in Content
- Use clear, simple language
- Provide alternative text for all images
- Use descriptive link text
- Structure content with proper headings (h1, h2, h3, etc.)
- Ensure adequate color contrast

## 12. Deployment and Production

### 12.1 Build Process
```bash
# Development
npm run dev

# Production build
npm run build
npm run start

# Type checking
npm run type-check

# Linting
npm run lint
```

### 12.2 Environment Variables
```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://summitsda.com.au
NEXT_PUBLIC_API_BASE_URL=https://api.summitsda.com.au
```

## 13. Maintenance and Updates

### 13.1 Regular Tasks
- Update dependencies monthly
- Review accessibility compliance quarterly
- Update content as services change
- Monitor performance metrics
- Test across different devices and browsers

### 13.2 Documentation Updates
- Update this guide when new patterns are established
- Document new components in the component registry
- Maintain JSDoc comments for all components
- Keep accessibility documentation current

---

This document serves as the foundation for all development work on the Summit website. It should be reviewed and updated regularly to ensure it remains current with best practices and Summit's evolving needs. 