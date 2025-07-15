# Summit Website Documentation

Welcome to the comprehensive documentation for the Summit website. This documentation covers development guidelines, accessibility implementation, color systems, and best practices for building inclusive, accessible web experiences.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Documentation Overview](#documentation-overview)
3. [Accessibility Features](#accessibility-features)
4. [Development Guidelines](#development-guidelines)
5. [Color System](#color-system)
6. [Getting Help](#getting-help)

---

## 🚀 Quick Start

### For Developers
1. **Read the Development Guidelines**: Start with [`summit-development-guidelines.md`](./summit-development-guidelines.md)
2. **Understand the Color System**: Review [`summit-color-palette-guide.md`](./summit-color-palette-guide.md)
3. **Learn Accessibility Implementation**: Study [`summit-accessibility-implementation.md`](./summit-accessibility-implementation.md)
4. **Follow the Cursor Rules**: Reference [`.cursor/rules/summit-accessibility-rules.mdc`](../.cursor/rules/summit-accessibility-rules.mdc)

### For Designers
1. **Color Palette**: Use the comprehensive color guide in [`summit-color-palette-guide.md`](./summit-color-palette-guide.md)
2. **Accessibility Modes**: Understand the three accessibility modes and their visual impact
3. **Design Tokens**: All colors are available as CSS variables for design tool integration

### For Content Creators
1. **Accessibility Guidelines**: Review accessibility content requirements in the development guidelines
2. **Brand Voice**: Ensure content reflects Summit's NDIS service provider mission
3. **Inclusive Language**: Use participant-centered language emphasizing empowerment and choice

---

## 📚 Documentation Overview

### Core Documentation Files

| Document | Purpose | Audience |
|----------|---------|----------|
| [`summit-development-guidelines.md`](./summit-development-guidelines.md) | Comprehensive development standards and practices | Developers |
| [`summit-color-palette-guide.md`](./summit-color-palette-guide.md) | Complete color system and accessibility modes | Developers, Designers |
| [`summit-accessibility-implementation.md`](./summit-accessibility-implementation.md) | Detailed accessibility feature documentation | Developers |
| [`.cursor/rules/summit-accessibility-rules.mdc`](../.cursor/rules/summit-accessibility-rules.mdc) | Cursor AI development rules | AI Tools, Developers |

### Supporting Documentation

| Document | Purpose |
|----------|---------|
| [`components.md`](./components.md) | Component registry and organization |
| [`jsdoc-standards.md`](./jsdoc-standards.md) | Documentation standards for components |
| [`jsdoc-implementation.md`](./jsdoc-implementation.md) | JSDoc implementation guide |
| [`sitemap.md`](./sitemap.md) | Website structure and navigation |
| [`../components/README.md`](../components/README.md) | Component organization guide |

---

## ♿ Accessibility Features

Summit's website includes comprehensive accessibility features designed to support users with diverse needs:

### 🌙 Dark Mode
- **Purpose**: Reduces eye strain in low-light conditions
- **Implementation**: CSS class `.dark` applied to document root
- **Features**: 
  - Respects system preferences
  - Maintains brand warmth in dark theme
  - Enhanced contrast ratios
  - Smooth transitions

### 🎨 Color Blind Mode
- **Purpose**: Universal accessibility for color vision deficiencies
- **Implementation**: CSS class `.colorblind` applied to document root
- **Features**:
  - Blue-yellow color palette (universally distinguishable)
  - Enhanced focus indicators (3px minimum)
  - Always-underlined links
  - High contrast text and backgrounds

### 📖 Readable Font Mode
- **Purpose**: Enhanced readability for dyslexia and reading difficulties
- **Implementation**: CSS class `.readable-font` applied to document root
- **Features**:
  - Dyslexia-friendly fonts (Verdana, Arial, Helvetica, Trebuchet MS)
  - Enhanced letter spacing (0.05em)
  - Improved word spacing (0.1em)
  - Increased line height (1.6)
  - Slightly larger text size (1.05em)

### 🔄 Mode Combinations
All accessibility modes work independently and can be combined:
- **8 Total Combinations**: Light, Dark, Color Blind, Readable Font (and all combinations)
- **WCAG 2.1 AA Compliant**: All combinations meet accessibility standards
- **Persistent Preferences**: Settings saved in localStorage
- **Real-time Switching**: Instant mode changes without page reload

---

## 💻 Development Guidelines

### Technical Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with CSS Variables
- **UI Components**: Shadcn/UI + Custom Components
- **State Management**: React Context API
- **Accessibility**: WCAG 2.1 AA Compliance

### Code Standards
- **DRY Principle**: Don't Repeat Yourself
- **Early Returns**: Reduce nesting, improve readability
- **Type Safety**: Leverage TypeScript for better code quality
- **Accessibility-First**: Every component must be accessible
- **Mobile-First**: Responsive design starting with mobile

### Component Structure
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

### Accessibility Context Usage
```tsx
import { useDarkMode } from "@/contexts/dark-mode-context";
import { useColorBlindMode } from "@/contexts/color-blind-context";
import { useReadableFontMode } from "@/contexts/readable-font-context";

const MyComponent = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { isColorBlindMode, toggleColorBlindMode } = useColorBlindMode();
  const { isReadableFontMode, toggleReadableFontMode } = useReadableFontMode();

  return (
    <div className={cn(
      "base-classes",
      isColorBlindMode && "colorblind-specific-classes",
      isReadableFontMode && "readable-font-specific-classes"
    )}>
      {/* Component content */}
    </div>
  );
};
```

---

## 🎨 Color System

### Base Palette
| Variable | Hex | Usage |
|----------|-----|-------|
| `--primary` | #ff7e32 | Main brand color, buttons, CTAs, interactive elements |
| `--deep-brown` | #663300 | Headings, important text, footer background |
| `--medium-brown` | #996633 | Body text, secondary information |
| `--background` | #fffaf5 | Main background, navbar when scrolled |
| `--pure-white` | #ffffff | Cards, forms, maximum contrast elements |

### Implementation
Always use CSS variables with HSL format:
```tsx
// ✅ Correct
<div className="bg-[hsl(var(--primary))] text-[hsl(var(--text-white))]">

// ❌ Incorrect
<div className="bg-orange-500 text-white">
```

### Accessibility Mode Colors
- **Color Blind Mode**: `--primary` becomes blue (#2563eb), adds yellow accent (#eab308)
- **Dark Mode**: Adjusts all colors for dark backgrounds while maintaining warmth
- **Combined Modes**: Special handling ensures proper contrast in all combinations

---

## 🆘 Getting Help

### For Development Issues
1. **Check the Guidelines**: Review [`summit-development-guidelines.md`](./summit-development-guidelines.md)
2. **Accessibility Questions**: Consult [`summit-accessibility-implementation.md`](./summit-accessibility-implementation.md)
3. **Color Usage**: Reference [`summit-color-palette-guide.md`](./summit-color-palette-guide.md)
4. **Component Patterns**: Check existing components in [`components.md`](./components.md)

### For Accessibility Issues
1. **Test All Modes**: Verify functionality in all 8 accessibility mode combinations
2. **Use Validation Tools**: Test with axe, WAVE, and other accessibility validators
3. **Check Contrast**: Ensure WCAG 2.1 AA compliance (4.5:1 for normal text, 3:1 for large text)
4. **Keyboard Navigation**: Verify all interactive elements are keyboard accessible

### Testing Checklist
- [ ] Component works in all accessibility modes
- [ ] WCAG 2.1 AA compliance verified
- [ ] Keyboard navigation functional
- [ ] Screen reader compatible
- [ ] Color contrast ratios meet standards
- [ ] Focus indicators clearly visible
- [ ] Semantic HTML structure
- [ ] ARIA attributes properly implemented

### Resources
- **WCAG 2.1 Guidelines**: [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- **Color Contrast Checker**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Accessibility Testing**: [axe DevTools](https://www.deque.com/axe/devtools/)
- **Screen Reader Testing**: [NVDA](https://www.nvaccess.org/download/), [JAWS](https://www.freedomscientific.com/products/software/jaws/)

---

## 🏢 About Summit

Summit is a registered NDIS service provider focused on participant-centered support, empowerment, and high-quality, individualized care. Our services include:

- Supported Independent Living (SIL)
- Specialist Disability Accommodation (SDA)  
- Medium Term Accommodation (MTA)
- Short Term Accommodation (STA) & Respite
- General Housing Solutions
- Personal Support & Daily Living
- Community Access & Engagement
- NDIS Education, Guidance, and Planning

### Core Values
- **Participant empowerment and choice**
- **Exceeding industry standards**
- **Staff education and ongoing training**
- **Individualized, flexible support**
- **NSW-wide service reach**

---

## 📝 Contributing

When contributing to Summit's website:

1. **Follow the Guidelines**: Adhere to all development and accessibility standards
2. **Test Thoroughly**: Verify functionality across all accessibility modes
3. **Document Changes**: Update relevant documentation
4. **Maintain Quality**: Ensure code quality and accessibility compliance
5. **Reflect Brand Values**: All content must align with Summit's mission and values

---

## 📄 License & Compliance

This documentation and the Summit website are designed to meet:
- **WCAG 2.1 AA** accessibility standards
- **NDIS** compliance requirements
- **Australian** accessibility legislation
- **Industry best practices** for inclusive design

---

*Last updated: [Current Date]*  
*Version: 1.0*  
*Documentation maintained by: Summit Development Team* 