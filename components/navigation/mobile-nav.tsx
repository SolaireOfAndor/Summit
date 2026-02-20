"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { navigationData } from "@/lib/navigation"
import { SummitButton } from "@/components/ui/summit-button"
import { usePathname } from "next/navigation"

interface MobileNavProps {
  onNavigate: () => void
}

interface MobileNavSection {
  key: string
  label: string
  href: string
  items: ReadonlyArray<{ title: string; href: string; description?: string }>
}

const mobileNavSections: MobileNavSection[] = [
  {
    key: "supportedAccommodations",
    label: "Supported Accommodations",
    href: "/supported-accommodations",
    items: navigationData.supportedAccommodations,
  },
  {
    key: "dropInSupport",
    label: "Drop-in Support",
    href: "/drop-in-support",
    items: navigationData.dropInSupport,
  },
  {
    key: "about",
    label: "About",
    href: "/about",
    items: navigationData.about,
  },
  {
    key: "learn",
    label: "Learn",
    href: "/learn",
    items: navigationData.learn,
  },
]

/**
 * @component MobileNav
 * @description Responsive navigation component for SummitSDA, optimized for mobile and tablet devices. Features a hamburger menu, slide-out navigation panel, accordion-style submenus, and touch-friendly interactive elements for easy mobile navigation.
 *
 * @example
 * ```tsx
 * <MobileNav onNavigate={handleNavigation} />
 * ```
 *
 * @category Navigation
 * @usedIn Header component for mobile and tablet navigation
 * @param {() => void} onNavigate - Callback for navigation actions
 * @returns {JSX.Element}
 */
export function MobileNav({ onNavigate }: MobileNavProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const pathname = usePathname()

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    onNavigate()
  }

  const isCurrentPage = (href: string) => {
    return pathname === href
  }

  const isSectionActive = (section: MobileNavSection) => {
    return pathname === section.href || section.items.some(item => pathname === item.href)
  }

  return (
    <div className="flex flex-col h-full bg-[hsl(var(--background))]">
      {/* Header Section */}
      <div className="flex items-center justify-between p-6 border-b border-[hsl(var(--border))] bg-[hsl(var(--light-orange))] shadow-sm">
        <h2 className="text-xl font-semibold text-[hsl(var(--heading))]">Menu</h2>
        <div className="w-6 h-6 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
          <div className="w-2 h-2 bg-[hsl(var(--text-white))] rounded-full"></div>
        </div>
      </div>

      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-6">
          <div className="space-y-3">
            {mobileNavSections.map((section) => (
              <div key={section.key} className="px-4">
                <div
                  className={cn(
                    "flex items-center w-full rounded-lg shadow-sm hover:shadow-md border border-transparent transition-all duration-200",
                    isSectionActive(section)
                      ? "bg-[hsl(var(--primary-transparent))] border-[hsl(var(--primary))/0.2]"
                      : "hover:border-[hsl(var(--primary))/0.2]"
                  )}
                >
                  <Link
                    href={section.href}
                    onClick={handleNavigation}
                    className={cn(
                      "flex-1 px-6 py-4 text-left text-base font-semibold transition-all duration-200 rounded-l-lg",
                      isSectionActive(section)
                        ? "text-[hsl(var(--primary))]"
                        : "text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-transparent))]"
                    )}
                    aria-label={`Go to ${section.label} page`}
                  >
                    {section.label}
                  </Link>
                  <button
                    onClick={() => toggleSection(section.key)}
                    className={cn(
                      "flex items-center justify-center px-4 py-4 rounded-r-lg transition-all duration-200 border-l border-[hsl(var(--border))]",
                      "hover:bg-[hsl(var(--primary-transparent))]",
                      "focus:outline-none focus:ring-2 focus:ring-[hsl(var(--focus-ring))] focus:ring-inset"
                    )}
                    aria-label={`${openSections[section.key] ? "Collapse" : "Expand"} ${section.label} submenu`}
                    aria-expanded={openSections[section.key] ?? false}
                  >
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        openSections[section.key] ? "rotate-180 text-[hsl(var(--primary))]" : "",
                        isSectionActive(section) ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--muted-foreground))]"
                      )}
                    />
                  </button>
                </div>
                {openSections[section.key] && (
                  <div className="mt-3 px-2 pb-2 space-y-1 bg-[hsl(var(--lighter-orange))] rounded-lg border border-[hsl(var(--border))] shadow-sm">
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={handleNavigation}
                        className={cn(
                          "block px-6 py-3 text-sm transition-all duration-200 rounded-lg border-l-2 hover:shadow-sm",
                          isCurrentPage(item.href)
                            ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary-transparent))] border-[hsl(var(--primary))]"
                            : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-transparent))] border-transparent hover:border-[hsl(var(--primary))/0.5]"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section with Contact Button */}
      <div className="border-t border-[hsl(var(--border))] p-6 bg-[hsl(var(--light-orange))] shadow-[0_-2px_8px_0_hsl(var(--orange-shadow))]">
        <SummitButton
          variant="contact"
          asChild
          className="w-full h-12 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] hover:bg-[hsl(var(--primary-hover))] transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Link href="/contact" onClick={handleNavigation}>
            Contact Us
          </Link>
        </SummitButton>
      </div>
    </div>
  )
}

