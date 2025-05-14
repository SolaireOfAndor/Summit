"use client"

import { useState } from "react"
import Link from "next/link"
import { navigationData, NavigationItem } from "@/lib/navigation"
import { cn } from "@/lib/utils"

interface LearnMenuProps {
  onNavigate?: () => void
}

/**
 * @component LearnMenu
 * @description SummitSDA menu for Learn. Lists all learning and educational pages with descriptions and preview.
 * @example
 * <LearnMenu onNavigate={handleNavigate} />
 * @category Navigation
 * @usedIn MainNav, MobileNav
 * @param {() => void} [onNavigate] - Callback for navigation actions
 * @returns {JSX.Element}
 */
export function LearnMenu({ onNavigate }: LearnMenuProps) {
  const [activeItem, setActiveItem] = useState<NavigationItem>(navigationData.learn[0])

  return (
    <div className="w-[800px] grid grid-cols-[280px_1fr] bg-[hsl(var(--background))] backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-[hsl(var(--border))]">
      {/* Left side - Menu items */}
      <div className="bg-[hsl(var(--muted))] border-r border-[hsl(var(--border))]">
        <ul className="py-2">
          {navigationData.learn.map((item) => (
            <li key={item.title} className="relative">
              <button
                onMouseEnter={() => setActiveItem(item)}
                onClick={() => {
                  onNavigate?.()
                  // Assuming direct navigation is intended here, but consider NextLink for client-side routing if preferred
                  window.location.href = item.href 
                }}
                className={cn(
                  "w-full text-left px-5 py-4 transition-all hover:bg-[hsl(var(--accent))/0.05] group relative",
                  activeItem.title === item.title
                    ? "bg-[hsl(var(--accent))/0.1] text-[hsl(var(--secondary-foreground))] font-semibold" // Added font-semibold for active
                    : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--secondary-foreground))]"
                )}
                aria-label={item.title}
                tabIndex={0}
              >
                <div className="font-medium text-base flex items-center"> {/* Ensure this remains or adjust if activeItem is bolder */}
                  {item.title}
                  <span className={cn(
                    "ml-auto opacity-0 transform translate-x-2 transition-all",
                    activeItem.title === item.title ? "opacity-100 translate-x-0" : "group-hover:opacity-100 group-hover:translate-x-0"
                  )}>→</span>
                </div>
                {/* Visual indicator for active item */}
                <div className={cn(
                  "absolute bottom-0 left-0 h-[2px] bg-[hsl(var(--accent))] transition-all duration-300 ease-out",
                  activeItem.title === item.title
                    ? "w-full opacity-100"
                    : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                )} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - Preview */}
      <div className="p-8 flex flex-col overflow-hidden">
        <div className="flex flex-col">
          <h3 className="font-semibold text-xl text-[hsl(var(--secondary-foreground))] mb-3 flex items-center">
            {activeItem.title}
            <div className="ml-4 h-px flex-1 bg-gradient-to-r from-[hsl(var(--secondary-foreground))/0.3] to-transparent" />
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
            {activeItem.description}
          </p>
          <Link 
            href={activeItem.href} 
            onClick={onNavigate}
            className="inline-flex items-center text-[hsl(var(--accent))] hover:text-[hsl(var(--primary))] font-medium transition-colors group" // Added group for arrow animation
            aria-label={`Learn more about ${activeItem.title}`}
            tabIndex={0}
          >
            Learn more
            <span className="ml-1 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
} 