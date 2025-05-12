"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * @component ScrollToTop
 * @description SummitSDA utility navigation component that provides a button to smoothly scroll back to the top of the page. Appears once the user has scrolled down a certain distance and includes animation effects for smooth appearance and disappearance.
 *
 * @example
 * ```tsx
 * <ScrollToTop />
 * ```
 *
 * @category Navigation
 * @usedIn All pages with scrollable content via the main layout
 * @returns {JSX.Element}
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Toggle button visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-full opacity-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground",
        isVisible && "opacity-100",
        !isVisible && "pointer-events-none",
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
}

