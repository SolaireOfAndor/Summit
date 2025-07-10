'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
  type ThemeProviderProps,
} from 'next-themes'

interface ExtendedThemeProviderProps extends Omit<ThemeProviderProps, 'attribute'> {
  children: React.ReactNode
}

// Custom hook for theme management
/**
 * @component useTheme
 * @description [ADD DESCRIPTION] - What does this component do?
 * 
 * @example
 * ```tsx
 * <useTheme PROPS />
 * ```
 * 
 * @category Common
 * @usedIn [ADD USAGE] - Where is this component used?
 */
export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme()
  
  const currentTheme = theme === 'system' ? systemTheme : theme
  
  return {
    theme: currentTheme,
    setTheme,
    systemTheme,
    isSystem: theme === 'system'
  }
}

/**
 * @component ThemeProvider
 * @description A provider component that manages the application's theme state.
 * Utilizes next-themes to handle theme persistence, system preferences, and 
 * theme switching functionality. Supports light, dark, and system themes.
 * 
 * @example
 * ```tsx
 * <ThemeProvider 
 *   attribute="class"
 *   defaultTheme="system"
 *   enableSystem
 * >
 *   <App />
 * </ThemeProvider>
 * ```
 * 
 * @category Common
 * @usedIn Root layout to provide theme context to the entire application
 */
export function ThemeProvider({ children, ...props }: ExtendedThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Handle mounting state to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="summit-theme"
      themes={['light', 'dark', 'system']}
      value={{
        light: 'light',
        dark: 'dark',
        system: 'system'
      }}
      {...props}
    >
      {/* Prevent flash of incorrect theme */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const storageKey = 'summit-theme';
                const theme = localStorage.getItem(storageKey);
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                
                document.documentElement.classList.add(theme === 'system' ? systemTheme : theme || 'system');
                
                // Listen for system theme changes
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                  if (localStorage.getItem(storageKey) === 'system') {
                    document.documentElement.classList.remove('light', 'dark');
                    document.documentElement.classList.add(e.matches ? 'dark' : 'light');
                  }
                });
              } catch (e) {
                console.warn('Failed to setup initial theme', e);
              }
            })();
          `,
        }}
      />
      {mounted ? children : null}
    </NextThemesProvider>
  )
}

// HOC for components that need theme awareness
export function withTheme<T extends object>(
  Component: React.ComponentType<T>
): React.FC<T> {
  return function WithThemeComponent(props: T) {
    const { theme } = useTheme()
    
    return (
      <Component
        {...props}
        data-theme={theme}
      />
    )
  }
}

// Constants for theme configuration
export const THEME_CONFIG = {
  STORAGE_KEY: 'summit-theme',
  THEMES: ['light', 'dark', 'system'] as const,
  DEFAULT_THEME: 'system' as const,
} as const

// Types for theme configuration
export type Theme = (typeof THEME_CONFIG.THEMES)[number]
