"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { navigationData } from "@/lib/navigation"

interface MenuProps {
  onNavigate?: () => void
}

/**
 * @component DropInSupportMenu
 * @description SummitSDA menu for Drop-in Support. Lists all drop-in support services with descriptions.
 * @example
 * <DropInSupportMenu onNavigate={handleNavigate} />
 * @category Navigation
 * @usedIn MainNav, MobileNav
 * @param {() => void} [onNavigate] - Callback for navigation actions
 * @returns {JSX.Element}
 */
export function DropInSupportMenu({ onNavigate }: MenuProps) {
  return (
    <nav aria-label="Drop-in Support navigation" className="w-[500px] bg-[hsl(var(--background))] backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-[hsl(var(--border))] p-8">
      <ul className="space-y-4">
        {navigationData.dropInSupport.map((item) => (
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