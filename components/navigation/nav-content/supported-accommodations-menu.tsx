"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { navigationData } from "@/lib/navigation"

interface MenuProps {
  onNavigate?: () => void
}

/**
 * @component SupportedAccommodationsMenu
 * @description SummitSDA menu for Supported Accommodations. Lists all supported accommodation types with descriptions.
 * @example
 * <SupportedAccommodationsMenu onNavigate={handleNavigate} />
 * @category Navigation
 * @usedIn MainNav, MobileNav
 * @param {() => void} [onNavigate] - Callback for navigation actions
 * @returns {JSX.Element}
 */
export function SupportedAccommodationsMenu({ onNavigate }: MenuProps) {
  return (
    <nav aria-label="Supported Accommodations navigation" className="w-[500px] bg-[hsl(var(--background))] backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-[hsl(var(--border))] p-8">
      <ul className="space-y-4">
        {navigationData.supportedAccommodations.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn("block text-xl font-medium text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary))] transition-colors")}
              aria-label={item.title}
              tabIndex={0}
            >
              {item.title}
            </Link>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">{item.description}</p>
          </li>
        ))}
      </ul>
    </nav>
  )
} 