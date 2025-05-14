"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { useCallback, useEffect, useRef, useState } from "react"
import { SummitButton } from "@/components/ui/summit-button"
import { MainNav } from "@/components/navigation/main-nav"
import { useNavigation } from "@/hooks/useNavigation"
import { usePathname } from "next/navigation"
import { DesktopAccessibilityBar } from "@/components/features/accessibility/DesktopAccessibilityBar"
import { AccessibilityIcon } from "@/components/features/accessibility/AccessibilityIcon"

const SCROLL_THRESHOLD = 10; // Show/hide headers when scrolled more than this many pixels from top
const ACCESSIBILITY_BAR_HEIGHT_CLASS = "h-8"; // Tailwind class for 32px
const MAIN_HEADER_HEIGHT_CLASS = "h-20"; // Tailwind class for 80px

/**
 * @component Header
 * @description The main navigation header and accessibility bar component for SummitSDA.
 * Manages the scroll-based visibility of both bars.
 */
export function Header() {
  const [areHeadersVisible, setAreHeadersVisible] = useState(true); // Controls visibility of the entire header section
  const [headerBackgroundScrolled, setHeaderBackgroundScrolled] = useState(false); // For main header's blur/border style
  
  const {
    mobileMenuOpen,
    setMobileMenuOpen,
    handleNavigation,
  } = useNavigation()
  const pathname = usePathname()
  const rafId = useRef<number>()
  const lastScrollY = useRef(0)
  const [isAccessibilityMenuMobileOpen, setIsAccessibilityMenuMobileOpen] = useState(false)

  const handleScroll = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      if (currentScrollY <= SCROLL_THRESHOLD) {
        setAreHeadersVisible(true);
      } else if (isScrollingDown) {
        setAreHeadersVisible(false);
      } else { // Scrolling up
        setAreHeadersVisible(true);
      }
      
      // Style for the main header background (blur/border)
      // Activate if scrolled past the point where the accessibility bar would normally be fully visible
      setHeaderBackgroundScrolled(currentScrollY > 0); // Simplified: any scroll changes background if headers are visible

      lastScrollY.current = currentScrollY;
    });
  }, []); 

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsAccessibilityMenuMobileOpen(false);
  }, [pathname, setMobileMenuOpen]);

  useEffect(() => {
    handleScroll(); 
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  
  const handleToggleMobileAccessibilityMenu = () => {
    setIsAccessibilityMenuMobileOpen(prev => !prev);
    if (!isAccessibilityMenuMobileOpen) setMobileMenuOpen(false);
  };

  return (
    <div 
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-transform duration-300 ease-in-out transform",
        areHeadersVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <DesktopAccessibilityBar isVisible={areHeadersVisible} />
      <header
        role="banner"
        className={cn(
          "w-full border-b-2", // No margin-top needed, positioned naturally after accessibility bar
          MAIN_HEADER_HEIGHT_CLASS, // Explicit height class
          // Background styles are applied regardless of transform, visibility handled by parent div
          headerBackgroundScrolled && areHeadersVisible // Only apply scrolled styles if headers are meant to be visible
            ? "bg-[hsl(var(--background-blur-light))] backdrop-blur-md shadow-md border-[hsl(var(--secondary))]/70"
            : "bg-[hsl(var(--background))] border-[hsl(var(--secondary))]/40"
        )}
      >
        <div className="flex h-full items-center px-6 max-w-[1400px] mx-auto">
          <Link 
            href="/" 
            onClick={handleNavigation}
            className="h-16 w-44 relative"
            aria-label="SummitSDA - Return to homepage"
          >
            <Image
              src="/logo/logo.png"
              alt="SummitSDA logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 176px, 176px"
            />
          </Link>

          <nav className="flex-1 flex justify-center">
            <MainNav onNavigate={handleNavigation} className="hidden lg:flex" />
          </nav>

          <div className="flex items-center h-full gap-2">
            <SummitButton
              variant="contact"
              asChild
              className="hidden lg:flex h-16 items-center px-8 text-lg font-semibold rounded-md shadow-sm transition-shadow bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary-hover))]"
            >
              <Link href="/contact" onClick={handleNavigation}>Contact</Link>
            </SummitButton>

            <div className="lg:hidden flex items-center gap-1">
              <AccessibilityIcon onClick={handleToggleMobileAccessibilityMenu} iconSize={32} className="p-2 -m-2 hover:bg-[hsl(var(--primary-transparent))] transition-colors rounded-md shadow-sm hover:shadow-md text-[hsl(var(--secondary))]" />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className="p-2 -m-2 hover:bg-[hsl(var(--primary-transparent))] transition-colors rounded-md shadow-sm hover:shadow-md"
                    aria-label="Open main menu"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu-content"
                  >
                    <Menu className="h-16 w-16 p-4 text-[hsl(var(--secondary))]" aria-hidden="true" />
                  </button>
                </SheetTrigger>
                <SheetContent id="mobile-menu-content" className="w-80 sm:w-96 bg-[hsl(var(--background))] z-[65]">
                  <MobileNav onNavigate={handleNavigation} />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Accessibility Options Menu is outside the sliding container to remain fixed */}
      {isAccessibilityMenuMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm" onClick={handleToggleMobileAccessibilityMenu} />
      )}
      
    </div>
  )
}

