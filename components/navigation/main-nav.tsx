"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { SupportedAccommodationsDropdown } from "./nav-content/supported-accommodations-dropdown"
import { DropInSupportDropdown } from "./nav-content/drop-in-support-dropdown"
import { LearnDropdown } from "./nav-content/learn-dropdown"
import { AboutDropdown } from "./nav-content/about-dropdown"

interface MainNavProps {
  className?: string
  onNavigate: () => void
}

interface NavigationItem {
  id: string
  label: string
  href: string
  hasDropdown: boolean
  dropdownComponent?: React.ComponentType<{ onNavigate: () => void }>
}

const navigationItems: NavigationItem[] = [
  {
    id: "supported-accommodations",
    label: "Supported Accommodations",
    href: "/supported-accommodations", // Link to main supported accommodations page
    hasDropdown: true,
    dropdownComponent: SupportedAccommodationsDropdown,
  },
  {
    id: "drop-in-support", 
    label: "Drop-in Support",
    href: "/drop-in-support", // Link to main drop-in support page
    hasDropdown: true,
    dropdownComponent: DropInSupportDropdown,
  },
  {
    id: "community-participation",
    label: "Community Participation", 
    href: "/community-participation",
    hasDropdown: false,
  },
  {
    id: "about",
    label: "About",
    href: "/about", // Link to main about page
    hasDropdown: true,
    dropdownComponent: AboutDropdown,
  },
  {
    id: "learn",
    label: "Learn",
    href: "/learn", // Link to main learn page
    hasDropdown: true,
    dropdownComponent: LearnDropdown,
  },
]

/**
 * @component MainNav
 * @description Overhauled navigation component that supports both clickable navigation items and screen-wide dropdowns
 */
export function MainNav({ onNavigate, className }: MainNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [dropdownPosition, setDropdownPosition] = useState<{ left: number; width: number } | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (itemId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    const item = navigationItems.find(item => item.id === itemId)
    if (!item?.hasDropdown) return

    const itemElement = itemRefs.current[itemId]
    if (!itemElement || !navRef.current) return

    const navRect = navRef.current.getBoundingClientRect()
    const itemRect = itemElement.getBoundingClientRect()
    
    setDropdownPosition({
      left: itemRect.left - navRect.left + (itemRect.width / 2),
      width: navRect.width
    })
    setActiveDropdown(itemId)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      setDropdownPosition(null)
    }, 150)
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null)
    setDropdownPosition(null)
  }

  const handleDropdownItemClick = () => {
    setActiveDropdown(null)
    setDropdownPosition(null)
    onNavigate()
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav ref={navRef} className={cn("relative", className)}>
      <div className="flex items-center gap-3 px-2">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center">
              <Button
                asChild
                variant="ghost"
                className="main-nav-item nav-button h-16 px-6 text-xl font-semibold text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary-transparent))] hover:text-[hsl(var(--primary))] rounded-md shadow-sm hover:shadow-md transition-all duration-200 border-none"
              >
                <Link href={item.href} onClick={onNavigate} className="nav-link">
                  {item.label}
                </Link>
              </Button>
              
              {item.hasDropdown && (
                <button
                  ref={(el) => { itemRefs.current[item.id] = el }}
                  className={cn(
                    "nav-button ml-1 p-2 h-16 flex items-center justify-center text-[hsl(var(--secondary-foreground))] hover:text-[hsl(var(--primary))] transition-all duration-200",
                    activeDropdown === item.id && "text-[hsl(var(--primary))]"
                  )}
                  aria-label={`Open ${item.label} menu`}
                >
                  <ChevronDown 
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      activeDropdown === item.id && "rotate-180"
                    )} 
                  />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Screen-wide dropdown container */}
      {activeDropdown && dropdownPosition && (
        <div 
          className="dropdown-container absolute top-full left-0 right-0 z-50 mt-2 max-h-[80vh] overflow-y-auto"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          {/* Invisible bridge to prevent gap issues */}
          <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
          
          <div 
            className="relative w-full bg-[hsl(var(--background))] backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border-2 border-[hsl(var(--border))] ring-1 ring-[hsl(var(--primary))/0.1]"
            style={{
              transformOrigin: `${dropdownPosition.left}px top`
            }}
          >
            {/* Arrow pointer */}
            <div 
              className="absolute -top-2 w-4 h-4 bg-[hsl(var(--background))] border-l-2 border-t-2 border-[hsl(var(--border))] transform rotate-45"
              style={{
                left: `${dropdownPosition.left - 8}px`
              }}
            />
            
            {/* Dropdown content */}
            <div className="dropdown-content relative z-10 bg-[hsl(var(--background))] rounded-lg">
              {(() => {
                const item = navigationItems.find(item => item.id === activeDropdown)
                if (!item?.dropdownComponent) return null
                const DropdownComponent = item.dropdownComponent
                return <DropdownComponent onNavigate={handleDropdownItemClick} />
              })()}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

