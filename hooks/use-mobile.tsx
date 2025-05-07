"use client"

import * as React from "react"

export interface MobileConfig {
  breakpoint?: number
  defaultValue?: boolean
  ssrValue?: boolean
}

const DEFAULT_CONFIG: Required<MobileConfig> = {
  breakpoint: 768,
  defaultValue: false,
  ssrValue: false,
}

/**
 * Custom hook for responsive mobile detection with SSR support
 * @param config Optional configuration for mobile detection
 * @returns boolean indicating if viewport is mobile size
 */
export function useIsMobile(config: MobileConfig = {}) {
  const {
    breakpoint = DEFAULT_CONFIG.breakpoint,
    defaultValue = DEFAULT_CONFIG.defaultValue,
    ssrValue = DEFAULT_CONFIG.ssrValue,
  } = config

  // Use refs to store mutable values
  const mqlRef = React.useRef<MediaQueryList | null>(null)
  const isSSR = React.useRef(typeof window === "undefined")

  // Initialize with SSR-safe value
  const [isMobile, setIsMobile] = React.useState(() => {
    if (isSSR.current) return ssrValue
    return window.innerWidth < breakpoint ? true : defaultValue
  })

  React.useEffect(() => {
    // Initialize MediaQueryList
    const query = `(max-width: ${breakpoint - 1}px)`
    mqlRef.current = window.matchMedia(query)

    // Handler function using RAF for performance
    let rafId: number
    const handleChange = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setIsMobile(mqlRef.current?.matches ?? defaultValue)
      })
    }

    // Initial check
    handleChange()

    // Add event listener
    if (mqlRef.current?.addEventListener) {
      mqlRef.current.addEventListener("change", handleChange)
    } else {
      // Fallback for older browsers
      mqlRef.current?.addListener?.(handleChange)
    }

    // Cleanup function
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      
      if (mqlRef.current?.removeEventListener) {
        mqlRef.current.removeEventListener("change", handleChange)
      } else {
        // Fallback cleanup for older browsers
        mqlRef.current?.removeListener?.(handleChange)
      }
    }
  }, [breakpoint, defaultValue])

  return isMobile
}

/**
 * Hook for responsive breakpoints with SSR support
 */
export function useBreakpoint(breakpoint: number, config: Omit<MobileConfig, 'breakpoint'> = {}) {
  return useIsMobile({ ...config, breakpoint })
}

/**
 * Predefined breakpoints for common screen sizes
 */
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  LAPTOP: 1024,
  DESKTOP: 1280,
} as const

/**
 * Provider component for mobile context
 */
interface MobileContextValue {
  isMobile: boolean
  breakpoint: number
}

const MobileContext = React.createContext<MobileContextValue | undefined>(undefined)

interface MobileProviderProps extends MobileConfig {
  children: React.ReactNode
}

export function MobileProvider({ 
  children,
  breakpoint = DEFAULT_CONFIG.breakpoint,
  defaultValue = DEFAULT_CONFIG.defaultValue,
  ssrValue = DEFAULT_CONFIG.ssrValue,
}: MobileProviderProps) {
  const isMobile = useIsMobile({ breakpoint, defaultValue, ssrValue })

  const value = React.useMemo(() => ({
    isMobile,
    breakpoint,
  }), [isMobile, breakpoint])

  return (
    <MobileContext.Provider value={value}>
      {children}
    </MobileContext.Provider>
  )
}

/**
 * Hook to use mobile context
 */
export function useMobileContext() {
  const context = React.useContext(MobileContext)
  if (!context) {
    throw new Error("useMobileContext must be used within a MobileProvider")
  }
  return context
}
