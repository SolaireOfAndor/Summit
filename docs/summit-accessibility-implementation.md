# Summit Website Accessibility Implementation Guide

This guide provides comprehensive documentation for implementing, using, and maintaining Summit's accessibility features, ensuring WCAG 2.1 AA compliance and inclusive user experiences.

## Table of Contents

1. [Overview](#1-overview)
2. [Accessibility Modes](#2-accessibility-modes)
3. [Implementation Patterns](#3-implementation-patterns)
4. [Context Usage](#4-context-usage)
5. [Component Guidelines](#5-component-guidelines)
6. [Testing and Validation](#6-testing-and-validation)
7. [Maintenance](#7-maintenance)

---

## 1. Overview

Summit's accessibility system provides three independent, combinable accessibility modes:

- **Dark Mode**: Reduces eye strain in low-light conditions
- **Color Blind Mode**: Universal accessibility for color vision deficiencies
- **Readable Font Mode**: Enhanced typography for dyslexia and reading difficulties

### 1.1 Key Features

✅ **Independent Operation**: Each mode works alone or in combination  
✅ **Persistent Preferences**: Settings saved in localStorage  
✅ **System Integration**: Respects user's system preferences  
✅ **Real-time Switching**: Instant mode changes without page reload  
✅ **WCAG 2.1 AA Compliant**: All combinations meet accessibility standards  

### 1.2 Supported Combinations

| Light | Dark | Color Blind | Readable Font | Status |
|-------|------|-------------|---------------|--------|
| ✅ | ❌ | ❌ | ❌ | Base mode |
| ❌ | ✅ | ❌ | ❌ | Dark mode |
| ✅ | ❌ | ✅ | ❌ | Color blind mode |
| ✅ | ❌ | ❌ | ✅ | Readable font mode |
| ❌ | ✅ | ✅ | ❌ | Dark + Color blind |
| ❌ | ✅ | ❌ | ✅ | Dark + Readable font |
| ✅ | ❌ | ✅ | ✅ | Color blind + Readable font |
| ❌ | ✅ | ✅ | ✅ | All modes combined |

---

## 2. Accessibility Modes

### 2.1 Dark Mode

**Purpose**: Reduces eye strain and provides comfortable viewing in low-light environments.

**Technical Implementation**:
```typescript
// Context: contexts/dark-mode-context.tsx
interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (enabled: boolean) => void;
}
```

**CSS Class Applied**: `.dark`

**Key Features**:
- Respects `prefers-color-scheme: dark` system setting
- Inverts color scheme while maintaining brand warmth
- Enhanced contrast for better readability
- Smooth transitions between modes

**Storage Key**: `summit-dark-mode`

### 2.2 Color Blind Mode

**Purpose**: Provides universal accessibility for users with deuteranopia, protanopia, and tritanopia.

**Technical Implementation**:
```typescript
// Context: contexts/color-blind-context.tsx
interface ColorBlindModeContextType {
  isColorBlindMode: boolean;
  toggleColorBlindMode: () => void;
  setColorBlindMode: (enabled: boolean) => void;
}
```

**CSS Class Applied**: `.colorblind`

**Key Features**:
- Blue-yellow color palette (universally distinguishable)
- Enhanced focus indicators (3px minimum)
- Always-underlined links
- High contrast text and backgrounds
- Improved image contrast filters

**Storage Key**: `summit-color-blind-mode`

### 2.3 Readable Font Mode

**Purpose**: Improves readability for users with dyslexia and reading difficulties.

**Technical Implementation**:
```typescript
// Context: contexts/readable-font-context.tsx
interface ReadableFontModeContextType {
  isReadableFontMode: boolean;
  toggleReadableFontMode: () => void;
  setReadableFontMode: (enabled: boolean) => void;
}
```

**CSS Class Applied**: `.readable-font`

**Key Features**:
- Dyslexia-friendly fonts (Verdana, Arial, Helvetica, Trebuchet MS)
- Enhanced letter spacing (0.05em)
- Improved word spacing (0.1em)
- Increased line height (1.6)
- Slightly larger text size (1.05em)
- Enhanced font weights for better contrast

**Storage Key**: `summit-readable-font-mode`

---

## 3. Implementation Patterns

### 3.1 Provider Setup

The accessibility providers are nested in the root layout:

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${montserrat.variable} font-sans min-h-screen flex flex-col`}>
        <DarkModeProvider>
          <ColorBlindModeProvider>
            <ReadableFontModeProvider>
              <ScrollProgress />
              <ScrollToTop />
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </ReadableFontModeProvider>
          </ColorBlindModeProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
```

### 3.2 CSS Architecture

**Base Variables** (Light Mode):
```css
:root {
  --primary: 25 100% 60%; /* #ff7e32 */
  --background: 30 100% 98%; /* #fffaf5 */
  --heading: 30 100% 20%; /* #663300 */
  /* ... other variables */
}
```

**Dark Mode Overrides**:
```css
.dark {
  --primary: 25 100% 65%; /* Brighter for dark backgrounds */
  --background: 30 15% 8%; /* Very dark warm brown */
  --heading: 30 15% 85%; /* Light for contrast */
  /* ... other overrides */
}
```

**Color Blind Mode Overrides**:
```css
.colorblind {
  --primary: 220 91% 60%; /* Accessible blue */
  --accent-yellow: 45 93% 47%; /* High contrast yellow */
  --heading: 0 0% 10%; /* High contrast black */
  /* ... other overrides */
}
```

**Readable Font Mode**:
```css
.readable-font * {
  font-family: 'Verdana', 'Arial', 'Helvetica', 'Trebuchet MS', sans-serif !important;
  letter-spacing: 0.05em !important;
  word-spacing: 0.1em !important;
  line-height: 1.6 !important;
}
```

**Combined Mode Handling**:
```css
.dark.colorblind {
  --background-blur-light: 0 0% 8% / 0.9; /* Dark navbar fix */
  --primary: 220 91% 70%; /* Lighter blue for dark mode */
}

.dark.colorblind.readable-font *:focus {
  outline: 4px solid hsl(var(--primary)) !important;
  box-shadow: 0 0 0 7px hsl(var(--primary) / 0.4) !important;
}
```

---

## 4. Context Usage

### 4.1 Basic Usage

```tsx
import { useDarkMode } from "@/contexts/dark-mode-context";
import { useColorBlindMode } from "@/contexts/color-blind-context";
import { useReadableFontMode } from "@/contexts/readable-font-context";

const MyComponent = () => {
  const { isDarkMode, toggleDarkMode, setDarkMode } = useDarkMode();
  const { isColorBlindMode, toggleColorBlindMode } = useColorBlindMode();
  const { isReadableFontMode, toggleReadableFontMode } = useReadableFontMode();

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light' : 'Switch to Dark'}
      </button>
      <button onClick={toggleColorBlindMode}>
        {isColorBlindMode ? 'Disable' : 'Enable'} Color Blind Mode
      </button>
      <button onClick={toggleReadableFontMode}>
        {isReadableFontMode ? 'Disable' : 'Enable'} Readable Font
      </button>
    </div>
  );
};
```

### 4.2 Conditional Styling

```tsx
const AdaptiveComponent = () => {
  const { isDarkMode } = useDarkMode();
  const { isColorBlindMode } = useColorBlindMode();
  const { isReadableFontMode } = useReadableFontMode();

  return (
    <div className={cn(
      "p-6 rounded-lg transition-all duration-300",
      "bg-[hsl(var(--pure-white))] text-[hsl(var(--body))]",
      "border border-[hsl(var(--border-gray))]",
      isColorBlindMode && "shadow-[0_4px_12px_0_rgba(0,0,0,0.2)]",
      isReadableFontMode && "p-8 text-lg"
    )}>
      <h2 className="text-[hsl(var(--heading))] font-bold mb-4">
        Adaptive Content
      </h2>
      <p>This component adapts to accessibility preferences.</p>
    </div>
  );
};
```

### 4.3 Advanced Integration

```tsx
const AccessibilityAwareButton = ({ 
  children, 
  variant = 'primary',
  onClick,
  ...props 
}) => {
  const { isColorBlindMode } = useColorBlindMode();
  const { isReadableFontMode } = useReadableFontMode();

  const getVariantStyles = () => {
    const baseStyles = "px-6 py-3 rounded-md font-semibold transition-all duration-200";
    
    switch (variant) {
      case 'primary':
        return cn(
          baseStyles,
          "bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))]",
          "text-[hsl(var(--text-white))]",
          "focus:ring-2 focus:ring-[hsl(var(--focus-ring))]",
          isColorBlindMode && "focus:ring-4 focus:ring-offset-2",
          isReadableFontMode && "px-8 py-4 text-lg font-semibold"
        );
      case 'secondary':
        return cn(
          baseStyles,
          "bg-[hsl(var(--accent-yellow))] hover:bg-[hsl(var(--accent-yellow-hover))]",
          "text-[hsl(var(--heading))]",
          isColorBlindMode && "border-2 border-[hsl(var(--heading))]"
        );
      default:
        return baseStyles;
    }
  };

  return (
    <button
      className={getVariantStyles()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
```

---

## 5. Component Guidelines

### 5.1 Accessibility-First Components

**Required Patterns**:
```tsx
// ✅ Good: Accessibility-aware component
const AccessibleCard = ({ title, content, icon: Icon }) => {
  const { isColorBlindMode } = useColorBlindMode();
  
  return (
    <div className="
      bg-[hsl(var(--pure-white))] 
      border border-[hsl(var(--border-gray))]
      rounded-lg p-6 
      shadow-[0_4px_12px_0_hsl(var(--orange-shadow))]
      focus-within:ring-2 focus-within:ring-[hsl(var(--focus-ring))]
      transition-all duration-300
    ">
      {Icon && (
        <div className="
          mb-4 p-3 rounded-md 
          bg-[hsl(var(--light-orange))]
          w-fit
        ">
          <Icon className="
            w-6 h-6 
            text-[hsl(var(--primary))]
          " />
        </div>
      )}
      
      <h3 className="
        text-[hsl(var(--heading))] 
        text-xl font-semibold mb-3
      ">
        {title}
      </h3>
      
      <p className="
        text-[hsl(var(--body))] 
        leading-relaxed
      ">
        {content}
      </p>
    </div>
  );
};
```

### 5.2 Focus Management

**Enhanced Focus Indicators**:
```tsx
const FocusAwareElement = ({ children, ...props }) => {
  const { isColorBlindMode } = useColorBlindMode();
  const { isReadableFontMode } = useReadableFontMode();
  
  return (
    <div
      className={cn(
        "focus:outline-none",
        "focus:ring-2 focus:ring-[hsl(var(--focus-ring))]",
        "focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]",
        isColorBlindMode && "focus:ring-4 focus:ring-offset-3",
        isReadableFontMode && "focus:ring-4",
        "transition-all duration-200"
      )}
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  );
};
```

### 5.3 Form Components

**Accessible Form Elements**:
```tsx
const AccessibleInput = ({ 
  label, 
  id, 
  error, 
  required = false,
  ...props 
}) => {
  const { isReadableFontMode } = useReadableFontMode();
  
  return (
    <div className="space-y-2">
      <label 
        htmlFor={id}
        className={cn(
          "block text-[hsl(var(--heading))] font-medium",
          "text-sm tracking-wide",
          isReadableFontMode && "text-base font-semibold"
        )}
      >
        {label}
        {required && (
          <span className="text-[hsl(var(--destructive))] ml-1" aria-label="required">
            *
          </span>
        )}
      </label>
      
      <input
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-md",
          "bg-[hsl(var(--pure-white))]",
          "border border-[hsl(var(--border-gray))]",
          "text-[hsl(var(--body))]",
          "placeholder:text-[hsl(var(--gray-400))]",
          "focus:border-[hsl(var(--focus-orange))]",
          "focus:ring-2 focus:ring-[hsl(var(--focus-ring))]",
          "focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]",
          "transition-colors duration-200",
          error && "border-[hsl(var(--destructive))] focus:border-[hsl(var(--destructive))]",
          isReadableFontMode && "text-lg py-4"
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      
      {error && (
        <p 
          id={`${id}-error`}
          className="text-[hsl(var(--destructive))] text-sm"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};
```

### 5.4 Navigation Components

**Accessible Navigation**:
```tsx
const AccessibleNavItem = ({ href, children, isActive = false }) => {
  return (
    <a
      href={href}
      className={cn(
        "text-[hsl(var(--body))] hover:text-[hsl(var(--primary))]",
        "focus:text-[hsl(var(--primary))]",
        "font-medium transition-colors duration-200",
        "underline-offset-4 hover:underline",
        "focus:outline-none focus:ring-2 focus:ring-[hsl(var(--focus-ring))]",
        "focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]",
        "px-3 py-2 rounded-md",
        isActive && "text-[hsl(var(--primary))] bg-[hsl(var(--primary-transparent))]"
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </a>
  );
};
```

---

## 6. Testing and Validation

### 6.1 Automated Testing

**Context Testing**:
```tsx
// __tests__/accessibility/dark-mode.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { DarkModeProvider, useDarkMode } from '@/contexts/dark-mode-context';

const TestComponent = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <span data-testid="mode">{isDarkMode ? 'dark' : 'light'}</span>
      <button onClick={toggleDarkMode} data-testid="toggle">
        Toggle
      </button>
    </div>
  );
};

describe('DarkModeContext', () => {
  it('toggles dark mode correctly', () => {
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>
    );

    expect(screen.getByTestId('mode')).toHaveTextContent('light');
    
    fireEvent.click(screen.getByTestId('toggle'));
    
    expect(screen.getByTestId('mode')).toHaveTextContent('dark');
  });

  it('persists mode in localStorage', () => {
    const { rerender } = render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>
    );

    fireEvent.click(screen.getByTestId('toggle'));
    
    expect(localStorage.getItem('summit-dark-mode')).toBe('true');
  });
});
```

**Accessibility Testing**:
```tsx
// __tests__/accessibility/wcag-compliance.test.tsx
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';

expect.extend(toHaveNoViolations);

describe('WCAG Compliance', () => {
  const AllProvidersWrapper = ({ children }) => (
    <DarkModeProvider>
      <ColorBlindModeProvider>
        <ReadableFontModeProvider>
          {children}
        </ReadableFontModeProvider>
      </ColorBlindModeProvider>
    </DarkModeProvider>
  );

  it('should not have accessibility violations in light mode', async () => {
    const { container } = render(
      <AllProvidersWrapper>
        <MyComponent />
      </AllProvidersWrapper>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should maintain accessibility in all mode combinations', async () => {
    // Test all 8 combinations
    const modes = [
      { dark: false, colorBlind: false, readableFont: false },
      { dark: true, colorBlind: false, readableFont: false },
      { dark: false, colorBlind: true, readableFont: false },
      { dark: false, colorBlind: false, readableFont: true },
      { dark: true, colorBlind: true, readableFont: false },
      { dark: true, colorBlind: false, readableFont: true },
      { dark: false, colorBlind: true, readableFont: true },
      { dark: true, colorBlind: true, readableFont: true },
    ];

    for (const mode of modes) {
      // Apply mode classes to document
      document.documentElement.className = [
        mode.dark && 'dark',
        mode.colorBlind && 'colorblind',
        mode.readableFont && 'readable-font'
      ].filter(Boolean).join(' ');

      const { container } = render(
        <AllProvidersWrapper>
          <MyComponent />
        </AllProvidersWrapper>
      );

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });
});
```

### 6.2 Manual Testing Checklist

**Functionality Testing**:
- [ ] Each accessibility mode toggles correctly
- [ ] Preferences persist across page reloads
- [ ] System dark mode preference is respected
- [ ] All 8 mode combinations work correctly
- [ ] Smooth transitions between modes

**Visual Testing**:
- [ ] Color contrast meets WCAG 2.1 AA standards
- [ ] Focus indicators are clearly visible
- [ ] Text remains readable in all modes
- [ ] UI elements maintain proper spacing
- [ ] Images have appropriate contrast

**Keyboard Navigation**:
- [ ] All interactive elements are focusable
- [ ] Focus order is logical
- [ ] Keyboard shortcuts work in all modes
- [ ] Focus indicators are enhanced in accessibility modes

**Screen Reader Testing**:
- [ ] Mode changes are announced
- [ ] All content remains accessible
- [ ] ARIA labels and descriptions work correctly
- [ ] Navigation remains intuitive

### 6.3 Browser and Device Testing

**Browser Support**:
- [ ] Chrome/Chromium (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)

**Device Testing**:
- [ ] Desktop (Windows, macOS, Linux)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet (iPad, Android tablets)

**Assistive Technology**:
- [ ] NVDA (Windows)
- [ ] JAWS (Windows)
- [ ] VoiceOver (macOS/iOS)
- [ ] TalkBack (Android)

---

## 7. Maintenance

### 7.1 Regular Maintenance Tasks

**Weekly**:
- Monitor accessibility mode usage analytics
- Check for console errors related to accessibility features
- Verify localStorage persistence works correctly

**Monthly**:
- Test all accessibility mode combinations
- Validate WCAG compliance with automated tools
- Review and update accessibility documentation
- Check for new browser compatibility issues

**Quarterly**:
- Comprehensive accessibility audit
- User testing with assistive technologies
- Review and update accessibility patterns
- Training updates for development team

### 7.2 Adding New Accessibility Features

**Process**:
1. **Research**: Identify user need and accessibility standards
2. **Design**: Create inclusive design specifications
3. **Implement**: Follow established context patterns
4. **Test**: Comprehensive testing across all existing modes
5. **Document**: Update guides and examples
6. **Deploy**: Gradual rollout with monitoring

**New Context Template**:
```tsx
// contexts/new-accessibility-context.tsx
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface NewAccessibilityContextType {
  isNewMode: boolean;
  toggleNewMode: () => void;
  setNewMode: (enabled: boolean) => void;
}

const NewAccessibilityContext = createContext<NewAccessibilityContextType | undefined>(undefined);

export const useNewAccessibility = () => {
  const context = useContext(NewAccessibilityContext);
  if (context === undefined) {
    throw new Error('useNewAccessibility must be used within a NewAccessibilityProvider');
  }
  return context;
};

export const NewAccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isNewMode, setIsNewMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('summit-new-accessibility-mode');
    if (savedMode !== null) {
      setIsNewMode(JSON.parse(savedMode));
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const root = document.documentElement;
    if (isNewMode) {
      root.classList.add('new-accessibility');
    } else {
      root.classList.remove('new-accessibility');
    }

    localStorage.setItem('summit-new-accessibility-mode', JSON.stringify(isNewMode));
  }, [isNewMode, isInitialized]);

  const toggleNewMode = () => setIsNewMode(prev => !prev);
  const setNewMode = (enabled: boolean) => setIsNewMode(enabled);

  return (
    <NewAccessibilityContext.Provider value={{ isNewMode, toggleNewMode, setNewMode }}>
      {children}
    </NewAccessibilityContext.Provider>
  );
};
```

### 7.3 Performance Monitoring

**Key Metrics**:
- Context re-render frequency
- CSS transition performance
- localStorage write frequency
- Bundle size impact

**Optimization Strategies**:
- Memoize context values
- Use CSS-only transitions where possible
- Debounce rapid mode changes
- Lazy load accessibility-specific assets

### 7.4 User Feedback Integration

**Feedback Collection**:
- Accessibility survey in user feedback forms
- Analytics on accessibility mode usage
- Support ticket analysis for accessibility issues
- User testing sessions with accessibility focus

**Improvement Process**:
1. Collect and analyze user feedback
2. Identify common accessibility pain points
3. Prioritize improvements based on impact
4. Implement and test solutions
5. Monitor effectiveness of changes

---

This guide ensures Summit's accessibility features remain maintainable, effective, and aligned with user needs while meeting the highest accessibility standards. 