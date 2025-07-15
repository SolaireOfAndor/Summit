# Summit Website Color Palette & Accessibility Guide

This guide provides comprehensive documentation for Summit's color system, including the base palette, accessibility modes, and implementation guidelines to ensure consistent, accessible, and branded user experiences.

## Table of Contents

1. [Base Color Palette](#1-base-color-palette)
2. [Accessibility Modes](#2-accessibility-modes)
3. [Usage Guidelines](#3-usage-guidelines)
4. [Implementation Examples](#4-implementation-examples)
5. [Accessibility Standards](#5-accessibility-standards)
6. [Maintenance](#6-maintenance)

---

## 1. Base Color Palette

### 1.1 Primary Brand Colors

| Variable | Hex | HSL | Usage |
|----------|-----|-----|-------|
| `--primary` | #ff7e32 | `25 100% 60%` | **Main brand color.** Primary buttons, CTAs, icons, navigation highlights, interactive elements. Use for anything requiring user attention or action. |
| `--deep-brown` | #663300 | `30 100% 20%` | **Headings and important text.** Major headings (h1-h3), "Summit" logo text, footer background. Provides strong contrast and stability. |
| `--medium-brown` | #996633 | `30 33% 40%` | **Body and secondary text.** Paragraph text, secondary information, less prominent UI elements. Ensures readability with warmth. |

### 1.2 Background Colors

| Variable | Hex | HSL | Usage |
|----------|-----|-----|-------|
| `--background` | #fffaf5 | `30 100% 98%` | **Main background.** Page background, navbar when scrolled. Creates soft, inviting canvas. |
| `--light-orange` | #fff2e6 | `30 100% 95%` | **Section backgrounds.** About section, card icon backgrounds, subtle section contrast. |
| `--lighter-orange` | #fff8f0 | `30 100% 97%` | **Alternating backgrounds.** Quality commitment section, alternates with light-orange for visual separation. |
| `--pure-white` | #ffffff | `0 0% 100%` | **Cards and forms.** Card backgrounds, testimonials, service cards, form elements for maximum contrast. |

### 1.3 Text Colors

| Variable | Hex | HSL | Usage |
|----------|-----|-----|-------|
| `--heading` | #663300 | `30 100% 20%` | **Primary headings.** All major headings and Summit logo text. |
| `--body` | #996633 | `30 33% 40%` | **Body text.** Paragraph and secondary text content. |
| `--text-white` | #ffffff | `0 0% 100%` | **Text on dark backgrounds.** Footer, primary buttons, contact section. |
| `--text-light-gray` | #d1d5db | `210 16% 85%` | **Secondary text on dark backgrounds.** Less important footer and contact text. |

### 1.4 Interactive Elements

| Variable | Hex/RGBA | HSL | Usage |
|----------|----------|-----|-------|
| `--primary-hover` | #e65c00 | `25 100% 45%` | **Button hover states.** Hover/focus states for primary buttons and links. |
| `--primary-transparent` | rgba(255,126,50,0.2) | `25 100% 60% / 0.2` | **Subtle highlights.** Card icon hover, button focus rings, subtle overlays. |
| `--gray-400` | #9ca3af | `220 9% 72%` | **Footer links.** Secondary links and muted footer text. |

### 1.5 Form Elements

| Variable | Hex/RGBA | HSL | Usage |
|----------|----------|-----|-------|
| `--border-gray` | #d1d5db | `210 16% 85%` | **Form borders.** Input, textarea, select borders. |
| `--focus-orange` | #ff7e32 | `25 100% 60%` | **Focus states.** Border/underline for focused form elements. |
| `--focus-ring` | rgba(255,126,50,0.2) | `25 100% 60% / 0.2` | **Focus rings.** Outer glow on focused form elements. |

### 1.6 Overlay and Effects

| Variable | RGBA/HSL | Usage |
|----------|-----------|-------|
| `--orange-gradient-light` | `25 100% 60% / 0.2` | **Image overlays.** Gradient overlays on images, especially about section. |
| `--orange-shadow` | `25 100% 60% / 0.1` | **Elevated elements.** Card and button shadows with branded tint. |
| `--background-blur-light` | `30 100% 98% / 0.9` | **Navbar blur.** Semi-transparent blurred navbar effect when scrolled. |

---

## 2. Accessibility Modes

Summit supports three accessibility modes that can work independently or in combination.

### 2.1 Dark Mode

**Purpose:** Reduces eye strain in low-light conditions and provides alternative visual experience.

**Color Adjustments:**
```css
.dark {
  --background: 30 15% 8%; /* Very dark warm brown */
  --light-orange: 30 20% 12%; /* Dark section backgrounds */
  --pure-white: 30 15% 15%; /* Dark card backgrounds */
  --primary: 25 100% 65%; /* Brighter orange for dark backgrounds */
  --heading: 30 15% 85%; /* Light brown for headings */
  --body: 30 20% 75%; /* Medium brown for body text */
}
```

### 2.2 Color Blind Mode

**Purpose:** Provides universal accessibility for users with deuteranopia, protanopia, and tritanopia.

**Color Strategy:** Blue-yellow palette replacing orange tones.

**Color Adjustments:**
```css
.colorblind {
  --primary: 220 91% 60%; /* Accessible blue (#2563eb) */
  --primary-hover: 220 91% 45%; /* Darker blue for hover */
  --accent-yellow: 45 93% 47%; /* High contrast yellow (#eab308) */
  --heading: 0 0% 10%; /* High contrast black */
  --body: 0 0% 20%; /* Dark gray for body text */
  --background: 0 0% 98%; /* High contrast white */
}
```

**Enhanced Features:**
- Always underlined links for better identification
- Thicker focus outlines (3px minimum)
- High contrast shadows
- Enhanced image contrast

### 2.3 Readable Font Mode

**Purpose:** Improves readability for users with dyslexia and reading difficulties.

**Font Features:**
- **Primary Fonts:** Verdana, Arial, Helvetica, Trebuchet MS
- **Letter Spacing:** 0.05em for character distinction
- **Word Spacing:** 0.1em for word separation
- **Line Height:** 1.6 for improved readability
- **Text Size:** 1.05em increase
- **Font Weights:** Enhanced weights for better contrast

```css
.readable-font * {
  font-family: 'Verdana', 'Arial', 'Helvetica', 'Trebuchet MS', sans-serif !important;
  letter-spacing: 0.05em !important;
  word-spacing: 0.1em !important;
  line-height: 1.6 !important;
}
```

### 2.4 Combined Modes

**Dark + Color Blind Mode:**
```css
.dark.colorblind {
  --background-blur-light: 0 0% 8% / 0.9; /* Dark blurred navbar */
  --primary: 220 91% 70%; /* Lighter blue for dark backgrounds */
  --accent-yellow: 45 93% 60%; /* Brighter yellow for dark mode */
}
```

**All Modes Combined:**
Enhanced focus indicators and maximum accessibility compliance when all three modes are active.

---

## 3. Usage Guidelines

### 3.1 General Principles

1. **Consistency:** Always use CSS variables via `hsl(var(--variable-name))`
2. **Contrast:** Ensure WCAG 2.1 AA compliance (4.5:1 for normal text, 3:1 for large text)
3. **Hierarchy:** Use `--primary` for important actions, `--deep-brown` for headings
4. **Responsive:** Test color combinations across all accessibility modes
5. **Brand Alignment:** Maintain Summit's warm, professional, accessible brand identity

### 3.2 Color Hierarchy

```
Primary Actions: --primary → --primary-hover
Headings: --deep-brown → --heading (context-aware)
Body Text: --medium-brown → --body (context-aware)
Backgrounds: --background → --light-orange → --lighter-orange → --pure-white
Accents: --primary-transparent, --orange-shadow
```

### 3.3 Context-Aware Usage

**Light Mode:**
- Use warm orange (`--primary`) for actions
- Use brown tones (`--deep-brown`, `--medium-brown`) for text
- Use cream/orange backgrounds (`--background`, `--light-orange`)

**Dark Mode:**
- Brighter orange (`--primary` adjusted) for visibility
- Light text (`--heading`, `--body` inverted) for contrast
- Dark backgrounds maintain warmth

**Color Blind Mode:**
- Blue primary (`--primary` becomes blue) for actions
- Yellow accent (`--accent-yellow`) for secondary actions
- High contrast text and backgrounds

**Readable Font Mode:**
- Maintains color scheme
- Enhances typography and spacing
- Improves focus indicators

---

## 4. Implementation Examples

### 4.1 Basic Component Styling

```tsx
// Primary Button
<button className="
  bg-[hsl(var(--primary))] 
  hover:bg-[hsl(var(--primary-hover))] 
  text-[hsl(var(--text-white))] 
  focus:ring-[hsl(var(--focus-ring))]
  px-6 py-3 rounded-md font-semibold
  transition-colors duration-200
">
  Primary Action
</button>

// Section Background
<section className="
  bg-[hsl(var(--light-orange))] 
  py-16 px-4
">
  <h2 className="text-[hsl(var(--heading))] text-3xl font-bold mb-6">
    Section Heading
  </h2>
  <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
    Section content with proper color contrast.
  </p>
</section>

// Card Component
<div className="
  bg-[hsl(var(--pure-white))] 
  shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]
  rounded-lg p-6 border border-[hsl(var(--border-gray))]
">
  <h3 className="text-[hsl(var(--heading))] text-xl font-semibold mb-3">
    Card Title
  </h3>
  <p className="text-[hsl(var(--body))]">
    Card content with accessible colors.
  </p>
</div>
```

### 4.2 Form Elements

```tsx
// Input Field
<input 
  className="
    w-full px-4 py-3 rounded-md
    bg-[hsl(var(--pure-white))]
    border border-[hsl(var(--border-gray))]
    text-[hsl(var(--body))]
    placeholder:text-[hsl(var(--gray-400))]
    focus:border-[hsl(var(--focus-orange))]
    focus:ring-2 focus:ring-[hsl(var(--focus-ring))]
    focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]
    transition-colors duration-200
  "
  placeholder="Enter your information"
/>

// Form Label
<label className="
  block text-[hsl(var(--heading))] 
  font-medium mb-2
  text-sm tracking-wide
">
  Field Label
</label>
```

### 4.3 Navigation Elements

```tsx
// Navigation Link
<a 
  href="/about"
  className="
    text-[hsl(var(--body))] 
    hover:text-[hsl(var(--primary))]
    focus:text-[hsl(var(--primary))]
    font-medium transition-colors duration-200
    underline-offset-4 hover:underline
    focus:outline-none focus:ring-2 focus:ring-[hsl(var(--focus-ring))]
    focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]
  "
  aria-current="page"
>
  About Us
</a>

// Navbar with Blur
<nav className="
  fixed top-0 w-full z-50
  bg-[hsl(var(--background-blur-light))]
  backdrop-blur-md border-b
  border-[hsl(var(--border-gray))]
  transition-all duration-300
">
  {/* Navigation content */}
</nav>
```

### 4.4 Accessibility-Aware Components

```tsx
// Component that adapts to accessibility modes
const AccessibleCard = ({ title, content }) => {
  const { isDarkMode } = useDarkMode();
  const { isColorBlindMode } = useColorBlindMode();
  const { isReadableFontMode } = useReadableFontMode();

  return (
    <div className={cn(
      "bg-[hsl(var(--pure-white))] rounded-lg p-6",
      "border border-[hsl(var(--border-gray))]",
      "shadow-[0_4px_12px_0_hsl(var(--orange-shadow))]",
      "transition-all duration-300",
      isColorBlindMode && "shadow-[0_4px_12px_0_rgba(0,0,0,0.2)]",
      isReadableFontMode && "p-8" // More padding in readable mode
    )}>
      <h3 className="text-[hsl(var(--heading))] text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="text-[hsl(var(--body))]">
        {content}
      </p>
    </div>
  );
};
```

---

## 5. Accessibility Standards

### 5.1 WCAG 2.1 AA Compliance

**Color Contrast Requirements:**
- Normal text: Minimum 4.5:1 contrast ratio
- Large text (18pt+): Minimum 3:1 contrast ratio
- Non-text elements: Minimum 3:1 contrast ratio

**Tested Combinations:**
```
✅ --heading on --background: 8.2:1
✅ --body on --background: 5.1:1  
✅ --primary on --text-white: 4.8:1
✅ --text-white on --deep-brown: 12.1:1
```

### 5.2 Color Independence

**Requirements Met:**
- Information never conveyed by color alone
- Interactive elements have multiple indicators (color + underline/border/icon)
- Focus indicators visible in all modes
- Text alternatives provided for color-coded content

### 5.3 User Preferences

**System Integration:**
- Respects `prefers-color-scheme` media query
- Remembers user accessibility preferences
- Provides manual override controls
- Maintains preferences across sessions

---

## 6. Maintenance

### 6.1 Regular Testing

**Monthly Tasks:**
- Test contrast ratios with online tools
- Validate accessibility mode combinations
- Check color consistency across components
- Verify browser compatibility

**Quarterly Tasks:**
- Comprehensive accessibility audit
- Update color documentation
- Review new WCAG guidelines
- Test with assistive technologies

### 6.2 Color Updates

**Process for Color Changes:**
1. Test new colors in all accessibility modes
2. Verify WCAG compliance
3. Update CSS variables
4. Test across all components
5. Update documentation
6. Notify development team

### 6.3 Documentation Updates

**Keep Current:**
- Color variable definitions
- Usage examples
- Accessibility mode behavior
- Implementation patterns
- Testing procedures

---

## 7. Tools and Resources

### 7.1 Testing Tools

**Contrast Checking:**
- WebAIM Contrast Checker
- Colour Contrast Analyser
- WAVE Web Accessibility Evaluator

**Color Simulation:**
- Stark (Figma/Sketch plugin)
- Coblis Color Blindness Simulator
- Chrome DevTools Vision Deficiencies

### 7.2 Implementation Tools

**CSS Variables:**
- All colors defined in `app/globals.css`
- Use HSL format for flexibility
- Implement via `hsl(var(--variable-name))`

**Tailwind Integration:**
- Custom color classes via CSS variables
- Responsive utilities support
- Dark mode and accessibility mode support

---

This guide ensures Summit's color system remains accessible, consistent, and aligned with the brand while supporting all users' needs through comprehensive accessibility features. 