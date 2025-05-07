const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      'xs': ['0.8rem', { lineHeight: '1.2rem' }],      // Very small text: footnotes, captions, fine print
      'sm': ['1.00rem', { lineHeight: '1.5rem' }],     // Small text: secondary information, metadata
      'base': ['1.1rem', { lineHeight: '1.8rem' }],    // Default body text size
      'lg': ['1.2rem', { lineHeight: '2.1rem' }],     // Slightly larger body text, short paragraphs
      'xl': ['1.2rem', { lineHeight: '2.1rem' }],      // Small headings, emphasized body text
      '2xl': ['1.6rem', { lineHeight: '2.4rem' }],     // Subheadings, section titles
      '3xl': ['2.00rem', { lineHeight: '2.7rem' }],    // Major section headings
      '4xl': ['2.4rem', { lineHeight: '3rem' }],       // Page titles, major headings
      '5xl': ['3.2rem', { lineHeight: '1.2' }],        // Large display headings
      '6xl': ['4.1rem', { lineHeight: '1.2' }],        // Extra large display headings
      '7xl': ['5.1rem', { lineHeight: '1.2' }],        // Very large display text
      '8xl': ['7.00rem', { lineHeight: '1.2' }],        // Giant display text
      '9xl': ['9.00rem', { lineHeight: '1.2' }],        // Largest display text for hero sections
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(181, 45%, 60%)",
          dark: "hsl(181, 45%, 44%)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          light: "hsl(293, 47%, 36%)",
          dark: "hsl(293, 47%, 26%)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          light: "hsl(47, 59%, 56%)",
          dark: "hsl(47, 59%, 46%)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

