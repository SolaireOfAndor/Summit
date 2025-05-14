"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { navigationData } from "@/lib/navigation"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import type { NavigationItem } from "@/lib/navigation"
import { AnimatePresence, motion } from "framer-motion"

interface AboutMenuProps {
  onNavigate?: () => void
}

/**
 * @component AboutMenu
 * @description SummitSDA menu for About section. Lists all about pages with descriptions and preview.
 * @example
 * <AboutMenu onNavigate={handleNavigate} />
 * @category Navigation
 * @usedIn MainNav, MobileNav
 * @param {() => void} [onNavigate] - Callback for navigation actions
 * @returns {JSX.Element}
 */
export function AboutMenu({ onNavigate }: AboutMenuProps) {
  const [activeItem, setActiveItem] = useState<NavigationItem>(navigationData.about[0])

  return (
    <div className="w-[700px] grid grid-cols-[250px_1fr] bg-[hsl(var(--background))] backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-[hsl(var(--border))]">
      {/* Left side - Menu items */}
      <div className="bg-[hsl(var(--muted))] border-r border-[hsl(var(--border))]">
        <ul className="py-2">
          {navigationData.about.map((item) => (
            <li key={item.title} className="relative">
              <NavigationMenuLink asChild>
                <button
                  onMouseEnter={() => setActiveItem(item)}
                  onClick={() => {
                    onNavigate?.()
                    window.location.href = item.href
                  }}
                  className={cn(
                    "w-full text-left px-5 py-4 transition-all hover:bg-[hsl(var(--accent))/0.05] group relative",
                    activeItem.title === item.title
                      ? "bg-[hsl(var(--accent))/0.1] text-[hsl(var(--secondary-foreground))]"
                      : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--secondary-foreground))]"
                  )}
                >
                  <div className="font-medium text-base flex items-center">
                    {item.title}
                    <span className={cn(
                      "ml-auto opacity-0 transform translate-x-2 transition-all",
                      activeItem.title === item.title ? "opacity-100 translate-x-0" : "group-hover:opacity-100 group-hover:translate-x-0"
                    )}>→</span>
                  </div>
                  <div className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-[hsl(var(--accent))] transition-all duration-300 ease-out",
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
      <div className="p-8 flex flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex flex-col"
          >
            <div className="relative h-[240px] rounded-xl overflow-hidden shadow-lg mb-6 group">
              <Link href={activeItem.href} onClick={onNavigate} className="block w-full h-full">
                <Image
                  src={activeItem.image || "/images/placeholder.webp"}
                  alt={activeItem.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
            </div>
            <div className="relative">
              <h3 className="font-semibold text-xl text-[hsl(var(--secondary-foreground))] mb-3 flex items-center">
                {activeItem.title}
                <div className="ml-4 h-px flex-1 bg-gradient-to-r from-[hsl(var(--secondary-foreground))/0.3] to-transparent" />
              </h3>
              {activeItem.description && (
                <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                  {activeItem.description}
                </p>
              )}
              <Link 
                href={activeItem.href} 
                onClick={onNavigate}
                className="inline-flex items-center text-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] font-medium transition-colors"
              >
                Learn more
                <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

