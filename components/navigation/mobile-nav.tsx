"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { navigationData } from "@/lib/navigation"

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

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto py-6">
        <div className="space-y-1 mt-6">
          {/* Supported Accommodations Section */}
          <div>
            <button
              onClick={() => toggleSection("supportedAccommodations")}
              className="flex items-center justify-between w-full px-6 py-3 text-base font-semibold hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50 hover:bg-primary/5"
            >
              <span>Supported Accommodations</span>
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-200", openSections["supportedAccommodations"] ? "rotate-180" : "")}
              />
            </button>
            {openSections["supportedAccommodations"] && (
              <div className="py-2 px-6 space-y-1">
                {navigationData.supportedAccommodations.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="block rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 hover:bg-primary/5"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Drop-in Support Section */}
          <div>
            <button
              onClick={() => toggleSection("dropInSupport")}
              className="flex items-center justify-between w-full px-6 py-3 text-base font-semibold hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50 hover:bg-primary/5"
            >
              <span>Drop-in Support</span>
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-200", openSections["dropInSupport"] ? "rotate-180" : "")}
              />
            </button>
            {openSections["dropInSupport"] && (
              <div className="py-2 px-6 space-y-1">
                {navigationData.dropInSupport.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="block rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 hover:bg-primary/5"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Community Participation */}
          <Link
            href="/community-participation"
            onClick={() => handleNavigation("/community-participation")}
            className="flex items-center px-6 py-3 text-base font-semibold hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50 hover:bg-primary/5 rounded-lg"
          >
            Community Participation
          </Link>
        </div>

        {/* About and Learn moved to the bottom */}
        <div className="space-y-1 mt-8">
          {/* About Section */}
          <div>
            <button
              onClick={() => toggleSection("about")}
              className="flex items-center justify-between w-full px-6 py-3 text-base font-semibold hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50 hover:bg-primary/5"
            >
              <span>About</span>
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-200", openSections["about"] ? "rotate-180" : "")}
              />
            </button>
            {openSections["about"] && (
              <div className="py-2 px-6 space-y-1">
                {navigationData.about.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="block rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 hover:bg-primary/5"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Learn Section */}
          <div>
            <button
              onClick={() => toggleSection("learn")}
              className="flex items-center justify-between w-full px-6 py-3 text-base font-semibold hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50 hover:bg-primary/5"
            >
              <span>Learn</span>
              <ChevronDown
                className={cn("h-4 w-4 transition-transform duration-200", openSections["learn"] ? "rotate-180" : "")}
              />
            </button>
            {openSections["learn"] && (
              <div className="py-2 px-6 space-y-1">
                {navigationData.learn.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="block rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 hover:bg-primary/5"
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
  )
}

