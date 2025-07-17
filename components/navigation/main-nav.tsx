"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { SupportedAccommodationsMenu } from "./nav-content/supported-accommodations-menu"
import { DropInSupportMenu } from "./nav-content/drop-in-support-menu"
import { LearnMenu } from "./nav-content/learn-menu"
import { AboutMenu } from "./nav-content/about-menu"
import { navigationData } from "@/lib/navigation"

interface MainNavProps {
  className?: string
  onNavigate: () => void
}

/**
 * @component MainNav
 * @description The primary navigation component for SummitSDA desktop viewports. Provides links to main site sections, dropdown menus for sub-pages, and interactive elements for a complete navigation experience.
 *
 * @example
 * ```tsx
 * <MainNav />
 * ```
 *
 * @category Navigation
 * @usedIn Header component for desktop navigation
 * @returns {JSX.Element}
 */
export function MainNav({ onNavigate }: MainNavProps) {
  return (
    <NavigationMenu className="hidden lg:flex relative">
      <NavigationMenuList className="gap-3 px-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-16 text-xl font-semibold text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary-transparent))] hover:text-[hsl(var(--primary))] data-[state=open]:bg-[hsl(var(--primary-transparent))] data-[state=open]:text-[hsl(var(--primary))] rounded-md shadow-sm hover:shadow-md transition-all duration-200">
            Supported Accommodations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <SupportedAccommodationsMenu onNavigate={onNavigate} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-16 text-xl font-semibold text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary-transparent))] hover:text-[hsl(var(--primary))] data-[state=open]:bg-[hsl(var(--primary-transparent))] data-[state=open]:text-[hsl(var(--primary))] rounded-md shadow-sm hover:shadow-md transition-all duration-200">
            Drop-in Support
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <DropInSupportMenu onNavigate={onNavigate} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Button
            asChild
            variant="ghost"
            className="h-16 px-6 text-xl font-semibold text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary-transparent))] hover:text-[hsl(var(--primary))] rounded-md shadow-sm hover:shadow-md transition-all duration-200 border-none"
          >
            <Link href="/community-participation" onClick={onNavigate}>
              Community Participation
            </Link>
          </Button>
        </NavigationMenuItem>

        <div className="flex-1" />

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-16 text-xl font-semibold text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary-transparent))] hover:text-[hsl(var(--primary))] data-[state=open]:bg-[hsl(var(--primary-transparent))] data-[state=open]:text-[hsl(var(--primary))] rounded-md shadow-sm hover:shadow-md transition-all duration-200">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <AboutMenu onNavigate={onNavigate} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-16 text-xl font-semibold text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--primary-transparent))] hover:text-[hsl(var(--primary))] data-[state=open]:bg-[hsl(var(--primary-transparent))] data-[state=open]:text-[hsl(var(--primary))] rounded-md shadow-sm hover:shadow-md transition-all duration-200">
            Learn
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <LearnMenu onNavigate={onNavigate} />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

