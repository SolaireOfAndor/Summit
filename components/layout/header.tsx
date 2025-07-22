"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { useCallback, useEffect, useRef, useState } from "react"
import { SummitButton } from "@/components/ui/summit-button"
import { MainNav } from "@/components/navigation/main-nav"
import { useNavigation } from "@/hooks/useNavigation"
import { usePathname } from "next/navigation"
import { DesktopAccessibilityBar } from "@/components/features/accessibility/DesktopAccessibilityBar"
import { AccessibilityIcon } from "@/components/features/accessibility/AccessibilityIcon"
import { AccessibilityOptionsList } from "@/components/features/accessibility/AccessibilityOptionsList"

const SCROLL_THRESHOLD = 10; // Show/hide headers when scrolled more than this many pixels from top
const ACCESSIBILITY_BAR_HEIGHT_CLASS = "h-8"; // Tailwind class for 32px
const MAIN_HEADER_HEIGHT_CLASS = "h-20"; // Standard height, CSS will handle readable mode

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

  // Close accessibility menu when clicking outside
  useEffect(() => {
    if (!isAccessibilityMenuMobileOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside the accessibility menu and not on the toggle button
      if (
        !target.closest('[data-accessibility-menu]') &&
        !target.closest('[data-accessibility-toggle]')
      ) {
        setIsAccessibilityMenuMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isAccessibilityMenuMobileOpen]);
  
  const handleToggleMobileAccessibilityMenu = () => {
    setIsAccessibilityMenuMobileOpen(prev => !prev);
    if (!isAccessibilityMenuMobileOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleMobileMenuOpen = (open: boolean) => {
    setMobileMenuOpen(open);
    if (open) {
      setIsAccessibilityMenuMobileOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Accessibility Button - Fixed positioned outside sliding header */}
      <DesktopAccessibilityBar isVisible={areHeadersVisible} />
      
      <div 
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-transform duration-300 ease-in-out transform",
          areHeadersVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <header
          role="banner"
          className={cn(
            "main-header w-full border-b-2",
            MAIN_HEADER_HEIGHT_CLASS, // Standard height, CSS handles readable mode
            // Background styles are applied regardless of transform, visibility handled by parent div
            headerBackgroundScrolled && areHeadersVisible // Only apply scrolled styles if headers are meant to be visible
              ? "bg-[hsl(var(--background-blur-light))] backdrop-blur-md shadow-md border-[hsl(var(--secondary))]/70"
              : "bg-[hsl(var(--background))] border-[hsl(var(--secondary))]/40"
          )}
        >
          <div className="flex h-full items-center px-4 sm:px-6 max-w-[1400px] mx-auto">
            <Link 
              href="/" 
              onClick={handleNavigation}
              className="h-12 w-32 sm:h-16 sm:w-44 relative flex-shrink-0"
              aria-label="SummitSDA - Return to homepage"
            >
              <Image
                src="/Logo/logo.png"
                alt="SummitSDA logo"
                fill
                className="object-contain logo-image"
                priority
                sizes="(max-width: 768px) 128px, 176px"
              />
            </Link>

            <nav className="flex-1 flex justify-center">
              <MainNav onNavigate={handleNavigation} className="hidden lg:flex" />
            </nav>

            <div className="flex items-center h-full">
              <SummitButton
                variant="contact"
                asChild
                className="contact-button hidden lg:flex h-16 items-center px-8 text-lg font-semibold rounded-md shadow-sm transition-shadow bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary-hover))]"
              >
                <Link href="/contact" onClick={handleNavigation}>Contact</Link>
              </SummitButton>

              <div className="lg:hidden flex items-center gap-2">
                <button
                  onClick={handleToggleMobileAccessibilityMenu}
                  className="flex items-center justify-center w-12 h-12 p-2 rounded-md hover:bg-[hsl(var(--primary-transparent))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--focus-ring))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))] transition-colors"
                  aria-label="Open accessibility options"
                  aria-expanded={isAccessibilityMenuMobileOpen}
                  data-accessibility-toggle
                >
                  <AccessibilityIcon asChild iconSize={24} className="text-[hsl(var(--heading))] hover:text-[hsl(var(--primary))] transition-colors" />
                </button>

                <Sheet open={mobileMenuOpen} onOpenChange={handleMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <button
                      className="flex items-center justify-center w-12 h-12 p-2 rounded-md hover:bg-[hsl(var(--primary-transparent))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--focus-ring))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))] transition-colors"
                      aria-label="Open main menu"
                      aria-expanded={mobileMenuOpen}
                      aria-controls="mobile-menu-content"
                    >
                      <Menu className="h-6 w-6 text-[hsl(var(--heading))] hover:text-[hsl(var(--primary))] transition-colors" aria-hidden="true" />
                    </button>
                  </SheetTrigger>
                  <SheetContent 
                    id="mobile-menu-content" 
                    className="w-80 sm:w-96 bg-[hsl(var(--background))] border-[hsl(var(--border))] shadow-xl z-[65] p-0"
                    side="right"
                  >
                    <MobileNav onNavigate={handleNavigation} />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>
        
        {/* Mobile Accessibility Options Menu is outside the sliding container to remain fixed */}
        {isAccessibilityMenuMobileOpen && (
          <>
            <div 
              className="lg:hidden fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm" 
              onClick={handleToggleMobileAccessibilityMenu}
              aria-hidden="true"
            />
            <div className="lg:hidden fixed top-24 right-4 left-4 z-[71] bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-lg shadow-xl p-4" data-accessibility-menu>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[hsl(var(--heading))]">Accessibility Options</h3>
                <button
                  onClick={handleToggleMobileAccessibilityMenu}
                  className="p-2 rounded-md hover:bg-[hsl(var(--primary-transparent))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--focus-ring))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))] transition-colors"
                  aria-label="Close accessibility options"
                >
                  <X size={20} className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors" />
                </button>
              </div>
              <AccessibilityOptionsList />
            </div>
          </>
        )}
      </div>
    </>
  )
}

