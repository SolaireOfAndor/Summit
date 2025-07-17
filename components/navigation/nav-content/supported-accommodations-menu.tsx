"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { navigationData } from "@/lib/navigation"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import type { NavigationItem } from "@/lib/navigation"
import { AnimatePresence, motion } from "framer-motion"

interface SupportedAccommodationsMenuProps {
  onNavigate?: () => void
}

/**
 * @component SupportedAccommodationsMenu
 * @description SummitSDA menu for Supported Accommodations section. Lists all supported accommodation types with descriptions and preview.
 * @example
 * <SupportedAccommodationsMenu onNavigate={handleNavigate} />
 * @category Navigation
 * @usedIn MainNav, MobileNav
 * @param {() => void} [onNavigate] - Callback for navigation actions
 * @returns {JSX.Element}
 */
export function SupportedAccommodationsMenu({ onNavigate }: SupportedAccommodationsMenuProps) {
  const [activeItem, setActiveItem] = useState<NavigationItem>(navigationData.supportedAccommodations[0])

  return (
    <div className="relative">
      {/* Invisible hover bridge to prevent dropdown from closing */}
      <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
      
      <div className="w-[700px] grid grid-cols-[250px_1fr] bg-[hsl(var(--background))] backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border-2 border-[hsl(var(--border))] ring-1 ring-[hsl(var(--primary))/0.1]">
        {/* Left side - Menu items */}
        <div className="bg-[hsl(var(--muted))/0.8] backdrop-blur-sm border-r-2 border-[hsl(var(--border))]">
          <ul className="py-2">
            {navigationData.supportedAccommodations.map((item) => (
              <li key={item.title} className="relative">
                <NavigationMenuLink asChild>
                  <button
                    onMouseEnter={() => setActiveItem(item)}
                    onClick={() => {
                      onNavigate?.()
                      window.location.href = item.href
                    }}
                    className={cn(
                      "w-full text-left px-5 py-4 transition-all duration-200 hover:bg-[hsl(var(--accent))/0.1] group relative backdrop-blur-sm",
                      activeItem.title === item.title
                        ? "bg-[hsl(var(--primary))/0.1] text-[hsl(var(--primary))] shadow-sm"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--secondary-foreground))] hover:shadow-sm"
                    )}
                  >
                    <div className="font-medium text-base flex items-center">
                      {item.title}
                      <span className={cn(
                        "ml-auto opacity-0 transform translate-x-2 transition-all duration-200",
                        activeItem.title === item.title ? "opacity-100 translate-x-0 text-[hsl(var(--primary))]" : "group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[hsl(var(--primary))]"
                      )}>→</span>
                    </div>
                    <div className={cn(
                      "absolute bottom-0 left-0 h-[3px] bg-[hsl(var(--primary))] transition-all duration-300 ease-out rounded-t-sm",
                      activeItem.title === item.title
                        ? "w-full opacity-100"
                        : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                    )} />
                  </button>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Preview */}
        <div className="p-8 flex flex-col overflow-hidden bg-[hsl(var(--background))] backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex flex-col"
            >
              <div className="relative h-[240px] rounded-xl overflow-hidden shadow-xl mb-6 group ring-1 ring-[hsl(var(--border))]">
                <Link href={activeItem.href} onClick={onNavigate} className="block w-full h-full">
                  <Image
                    src={activeItem.image || "/images/placeholder.webp"}
                    alt={activeItem.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
              <div className="relative">
                <h3 className="font-semibold text-xl text-[hsl(var(--secondary-foreground))] mb-3 flex items-center">
                  {activeItem.title}
                  <div className="ml-4 h-px flex-1 bg-gradient-to-r from-[hsl(var(--primary))/0.4] to-transparent" />
                </h3>
                {activeItem.description && (
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4 text-sm">
                    {activeItem.description}
                  </p>
                )}
                <Link 
                  href={activeItem.href} 
                  onClick={onNavigate}
                  className="inline-flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))] font-medium transition-colors duration-200 px-3 py-1 rounded-md hover:bg-[hsl(var(--primary))/0.1] group"
                >
                  Learn more
                  <span className="ml-1 transform transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
} 