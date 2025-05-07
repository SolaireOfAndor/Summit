"use client"

import Link from "next/link"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { EdenButton } from "@/components/ui/eden-button"

interface ServiceItem {
  title: string
  href: string
  description: string
}

interface ServiceCategory {
  description: string
  url: string
  items: ReadonlyArray<ServiceItem> | ServiceItem[]
}

interface ResourceItem {
  title: string
  href: string
  description: string
}

interface AboutItem {
  title: string
  href: string
}

interface MobileNavProps {
  services: Record<string, ServiceCategory>
  resources: ReadonlyArray<ResourceItem> | ResourceItem[]
  about: ReadonlyArray<AboutItem> | AboutItem[]
  onNavigate: () => void
}

/**
 * @component MobileNav
 * @description Responsive navigation component optimized for mobile and tablet devices.
 * Features a hamburger menu, slide-out navigation panel, accordion-style submenus,
 * and touch-friendly interactive elements for easy mobile navigation.
 * 
 * @example
 * ```tsx
 * <MobileNav
 *   services={servicesData}
 *   resources={resourcesData}
 *   about={aboutData}
 *   onNavigate={handleNavigation}
 * />
 * ```
 * 
 * @category Navigation
 * @usedIn Header component for mobile and tablet navigation
 */
export function MobileNav({ services, resources, about, onNavigate }: MobileNavProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({ ...prev, [category]: !prev[category] }))
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
        {/* Home Link */}
        <Link
          href="/"
          onClick={() => handleNavigation("/")}
          className="flex items-center px-6 py-2 text-sm font-medium hover:text-primary transition-colors hover:bg-primary/5 rounded-lg mx-2"
        >
          Home
        </Link>

        {/* Services Section */}
        <div className="space-y-1 mt-6">
          <div>
            <button
              onClick={() => toggleSection("services")}
              className="flex items-center justify-between w-full px-6 py-3 text-base font-semibold hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50 hover:bg-primary/5"
            >
              <span>Services</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openSections["services"] ? "rotate-180" : "",
                )}
              />
            </button>

            {openSections["services"] && (
              <div className="py-2 space-y-1">
                {Object.entries(services).map(([category, content]) => (
                  <div key={category} className="space-y-1">
                    <div className="flex items-center px-6">
                      <Link
                        href={content.url}
                        onClick={() => handleNavigation(content.url)}
                        className="flex-1 py-2 px-3 text-sm font-medium hover:text-primary transition-colors rounded-lg hover:bg-primary/5 group"
                      >
                        <div className="flex items-center justify-between">
                          <span>{category}</span>
                          <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 pr-4">{content.description}</p>
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          toggleCategory(category)
                        }}
                        className="ml-2 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                        aria-label={`Toggle ${category} submenu`}
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            openCategories[category] ? "rotate-180" : "",
                          )}
                        />
                      </button>
                    </div>

                    {openCategories[category] && (
                      <div className="pl-9 pr-6 space-y-1 mt-1">
                        {content.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => handleNavigation(item.href)}
                            className="block rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 hover:bg-primary/5"
                          >
                            <div className="font-medium">{item.title}</div>
                            <p className="text-xs mt-0.5 text-muted-foreground/80">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Resources Section */}
          <div>
            <button
              onClick={() => toggleSection("resources")}
              className="flex items-center justify-between w-full px-6 py-3 text-base font-semibold hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary/50 hover:bg-primary/5"
            >
              <span>Resources</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openSections["resources"] ? "rotate-180" : "",
                )}
              />
            </button>

            {openSections["resources"] && (
              <div className="py-2 px-6 space-y-1">
                {resources.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="block rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 hover:bg-primary/5"
                  >
                    <div className="font-medium">{item.title}</div>
                    <p className="text-xs mt-0.5 text-muted-foreground/80">{item.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

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
                {about.map((item) => (
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

      {/* Contact Button */}
      <div className="p-6 border-t">
        <EdenButton variant="contact" asChild className="w-full">
          <Link href="/contact" onClick={() => handleNavigation("/contact")}>
            Contact
          </Link>
        </EdenButton>
      </div>
    </div>
  )
}

