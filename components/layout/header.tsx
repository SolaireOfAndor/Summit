"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { useCallback, useEffect, useRef, useState } from "react"
import { EdenButton } from "@/components/ui/eden-button"
import { MainNav } from "@/components/navigation/main-nav"
import { useNavigation } from "@/hooks/useNavigation"
import { usePathname } from "next/navigation"
import { navigationData } from "@/lib/navigation"

/**
 * @component Header
 * @description The main navigation header component that appears at the top of all pages.
 * Contains the logo, main navigation links, and mobile menu for responsive design.
 * 
 * @example
 * ```tsx
 * <Header />
 * ```
 * 
 * @category Layout
 * @usedIn All pages via the RootLayout
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { mobileMenuOpen, setMobileMenuOpen, activeService, setActiveService, handleNavigation } = useNavigation()
  const pathname = usePathname()
  const rafId = useRef<number>()
  const lastScrollY = useRef(0)

  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }

    rafId.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      
      // Only update if scroll position changed significantly (3px threshold)
      if (Math.abs(currentScrollY - lastScrollY.current) > 3) {
        setScrolled(currentScrollY > 20)
        lastScrollY.current = currentScrollY
      }
    })
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname, setMobileMenuOpen])

  // Setup scroll listener
  useEffect(() => {
    // Initial check
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header
        role="banner"
        className={cn(
          "w-full h-20 border-b-2 transition-all duration-300",
          scrolled ? "bg-white/80 backdrop-blur-md shadow-md border-secondary/70" : "bg-white border-secondary/40",
        )}
      >
        <div className="flex h-full items-center px-6 max-w-[1400px] mx-auto">
          <Link 
            href="/" 
            onClick={handleNavigation}
            className="h-16 w-44 relative"
            aria-label="EDEN ABILITY - Return to homepage"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eden%20Ability%20logo%20large%20no%20background-upFC342AXP8I5xXBDcZzobJ6geDjaT.png"
              alt="EDEN ABILITY"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 176px, 176px"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex-1 flex justify-center">
            <MainNav
              activeService={activeService}
              onServiceHover={setActiveService}
              onNavigate={handleNavigation}
              className="hidden lg:flex"
            />
          </nav>

          {/* Contact Button and Mobile Menu */}
          <div className="flex items-center h-full gap-2">
            <EdenButton
              variant="contact"
              asChild
              className="hidden lg:flex h-16 items-center px-8 text-lg font-semibold rounded-md shadow-sm transition-shadow"
            >
              <Link href="/contact" onClick={handleNavigation}>
                Contact
              </Link>
            </EdenButton>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className="p-2 -m-2 hover:bg-primary/10 transition-colors rounded-md shadow-sm hover:shadow-md"
                    aria-label="Open menu"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                  >
                    <Menu className="h-16 w-16 p-4 text-secondary" aria-hidden="true" />
                  </button>
                </SheetTrigger>
                <SheetContent id="mobile-menu" className="w-80 sm:w-96">
                  <MobileNav 
                    services={navigationData.services}
                    resources={navigationData.resources}
                    about={navigationData.about}
                    onNavigate={handleNavigation} 
                  />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

