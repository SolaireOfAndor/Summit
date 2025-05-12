"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { navigationData, NavigationItem } from "@/lib/navigation"

interface MenuProps {
  onNavigate?: () => void
}

export function SupportedAccommodationsMenu({ onNavigate }: MenuProps) {
  return (
    <nav aria-label="Supported Accommodations navigation" className="w-[500px] bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-secondary/20 p-8">
      <ul className="space-y-4">
        {navigationData.supportedAccommodations.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn("block text-xl font-medium text-secondary hover:text-primary transition-colors")}
              aria-label={item.title}
              tabIndex={0}
            >
              {item.title}
            </Link>
            <p className="text-sm text-secondary/70 mt-1">{item.description}</p>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function DropInSupportMenu({ onNavigate }: MenuProps) {
  return (
    <nav aria-label="Drop-in Support navigation" className="w-[500px] bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-secondary/20 p-8">
      <ul className="space-y-4">
        {navigationData.dropInSupport.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn("block text-xl font-medium text-secondary hover:text-primary transition-colors")}
              aria-label={item.title}
              tabIndex={0}
            >
              {item.title}
            </Link>
            <p className="text-sm text-secondary/70 mt-1">{item.description}</p>
          </li>
        ))}
      </ul>
    </nav>
  )
}

