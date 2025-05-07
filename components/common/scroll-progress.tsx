"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { cn } from "@/lib/utils"

/**
 * @component ScrollProgress
 * @description A visual progress indicator that shows how far the user has scrolled down the page.
 * Appears as a thin line at the top of the viewport that fills from left to right as
 * the user scrolls down the page, providing visual feedback on reading progress.
 * 
 * @example
 * ```tsx
 * <ScrollProgress />
 * ```
 * 
 * @category Common
 * @usedIn Long content pages like blog posts, articles, and documentation pages
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const rafId = useRef<number>()
  const prevProgress = useRef(0)

  const calculateProgress = useCallback(() => {
    const currentProgress = window.scrollY
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

    if (scrollHeight) {
      const newProgress = Number((currentProgress / scrollHeight).toFixed(2)) * 100
      // Only update if progress has changed significantly (0.5%)
      if (Math.abs(newProgress - prevProgress.current) > 0.5) {
        setProgress(newProgress)
        prevProgress.current = newProgress
      }
    }
  }, [])

  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }
    
    rafId.current = requestAnimationFrame(calculateProgress)
  }, [calculateProgress])

  // Handle resize to recalculate scroll height
  const handleResize = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }
    rafId.current = requestAnimationFrame(calculateProgress)
  }, [calculateProgress])

  useEffect(() => {
    // Initial calculation
    handleScroll()

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    // Cleanup function
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [handleScroll, handleResize])

  return (
    <div 
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      className="fixed top-0 left-0 right-0 h-1 bg-muted z-50"
    >
      <div
        className={cn(
          "h-full bg-primary transition-transform duration-150 ease-out",
          progress === 0 && "opacity-0"
        )}
        style={{ 
          transform: `translateX(${progress - 100}%)`,
          willChange: "transform"
        }}
      />
    </div>
  )
}

