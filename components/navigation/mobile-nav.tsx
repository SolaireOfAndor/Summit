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

  const handleNavigation = (href: string) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    onNavigate()
  }

  const isCurrentPage = (href: string) => {
    return pathname === href
  }

  const isParentSectionActive = (items: ReadonlyArray<{href: string}>) => {
    return items.some(item => pathname === item.href)
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
            {/* Supported Accommodations Section */}
            <div className="px-4">
              <button
                onClick={() => toggleSection("supportedAccommodations")}
                className={cn(
                  "flex items-center justify-between w-full px-6 py-4 text-left text-base font-semibold transition-all duration-200 rounded-lg shadow-sm hover:shadow-md border border-transparent hover:border-[hsl(var(--primary))/0.2]",
                  isParentSectionActive(navigationData.supportedAccommodations)
                    ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary-transparent))] border-[hsl(var(--primary))/0.2]"
                    : "text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-transparent))]"
                )}
              >
                <span>Supported Accommodations</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    openSections["supportedAccommodations"] ? "rotate-180 text-[hsl(var(--primary))]" : "",
                    isParentSectionActive(navigationData.supportedAccommodations) ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--muted-foreground))]"
                  )}
                />
              </button>
              {openSections["supportedAccommodations"] && (
                <div className="mt-3 px-2 pb-2 space-y-1 bg-[hsl(var(--lighter-orange))] rounded-lg border border-[hsl(var(--border))] shadow-sm">
                  {navigationData.supportedAccommodations.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => handleNavigation(item.href)}
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

            {/* Drop-in Support Section */}
            <div className="px-4">
              <button
                onClick={() => toggleSection("dropInSupport")}
                className={cn(
                  "flex items-center justify-between w-full px-6 py-4 text-left text-base font-semibold transition-all duration-200 rounded-lg shadow-sm hover:shadow-md border border-transparent hover:border-[hsl(var(--primary))/0.2]",
                  isParentSectionActive(navigationData.dropInSupport)
                    ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary-transparent))] border-[hsl(var(--primary))/0.2]"
                    : "text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-transparent))]"
                )}
              >
                <span>Drop-in Support</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    openSections["dropInSupport"] ? "rotate-180 text-[hsl(var(--primary))]" : "",
                    isParentSectionActive(navigationData.dropInSupport) ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--muted-foreground))]"
                  )}
                />
              </button>
              {openSections["dropInSupport"] && (
                <div className="mt-3 px-2 pb-2 space-y-1 bg-[hsl(var(--lighter-orange))] rounded-lg border border-[hsl(var(--border))] shadow-sm">
                  {navigationData.dropInSupport.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => handleNavigation(item.href)}
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

            {/* Community Participation */}
            <div className="px-4">
              <Link
                href="/community-participation"
                onClick={() => handleNavigation("/community-participation")}
                className={cn(
                  "flex items-center px-6 py-4 text-base font-semibold transition-all duration-200 rounded-lg shadow-sm hover:shadow-md border border-transparent hover:border-[hsl(var(--primary))/0.2]",
                  isCurrentPage("/community-participation")
                    ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary-transparent))] border-[hsl(var(--primary))/0.2]"
                    : "text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-transparent))]"
                )}
              >
                Community Participation
              </Link>
            </div>

            {/* Divider */}
            <div className="px-4 my-4">
              <div className="border-t border-[hsl(var(--border))] opacity-30"></div>
            </div>

            {/* About Section */}
            <div className="px-4">
              <button
                onClick={() => toggleSection("about")}
                className={cn(
                  "flex items-center justify-between w-full px-6 py-4 text-left text-base font-semibold transition-all duration-200 rounded-lg shadow-sm hover:shadow-md border border-transparent hover:border-[hsl(var(--primary))/0.2]",
                  isParentSectionActive(navigationData.about)
                    ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary-transparent))] border-[hsl(var(--primary))/0.2]"
                    : "text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-transparent))]"
                )}
              >
                <span>About</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    openSections["about"] ? "rotate-180 text-[hsl(var(--primary))]" : "",
                    isParentSectionActive(navigationData.about) ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--muted-foreground))]"
                  )}
                />
              </button>
              {openSections["about"] && (
                <div className="mt-3 px-2 pb-2 space-y-1 bg-[hsl(var(--lighter-orange))] rounded-lg border border-[hsl(var(--border))] shadow-sm">
                  {navigationData.about.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => handleNavigation(item.href)}
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

            {/* Learn Section */}
            <div className="px-4">
              <button
                onClick={() => toggleSection("learn")}
                className={cn(
                  "flex items-center justify-between w-full px-6 py-4 text-left text-base font-semibold transition-all duration-200 rounded-lg shadow-sm hover:shadow-md border border-transparent hover:border-[hsl(var(--primary))/0.2]",
                  isParentSectionActive(navigationData.learn)
                    ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary-transparent))] border-[hsl(var(--primary))/0.2]"
                    : "text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-transparent))]"
                )}
              >
                <span>Learn</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    openSections["learn"] ? "rotate-180 text-[hsl(var(--primary))]" : "",
                    isParentSectionActive(navigationData.learn) ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--muted-foreground))]"
                  )}
                />
              </button>
              {openSections["learn"] && (
                <div className="mt-3 px-2 pb-2 space-y-1 bg-[hsl(var(--lighter-orange))] rounded-lg border border-[hsl(var(--border))] shadow-sm">
                  {navigationData.learn.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => handleNavigation(item.href)}
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
          <Link href="/contact" onClick={() => handleNavigation("/contact")}>
            Contact Us
          </Link>
        </SummitButton>
      </div>
    </div>
  )
}

