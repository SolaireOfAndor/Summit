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
import { SupportedAccommodationsMenu, DropInSupportMenu } from "./nav-content/services-menu"
import { ResourcesMenu } from "./nav-content/resources-menu"
import { AboutMenu } from "./nav-content/about-menu"
import { navigationData } from "@/lib/navigation"

interface MainNavProps {
  className?: string
  onNavigate: () => void
}

/**
 * @component MainNav
 * @description The primary navigation component for desktop viewports.
 * Provides links to main site sections, dropdown menus for sub-pages, 
 * and interactive elements for a complete navigation experience.
 * 
 * @example
 * ```tsx
 * <MainNav />
 * ```
 * 
 * @category Navigation
 * @usedIn Header component for desktop navigation
 */
export function MainNav({ onNavigate }: MainNavProps) {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-16 text-xl font-semibold text-secondary hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary rounded-md shadow-sm hover:shadow-md transition-shadow">
            Supported Accommodations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <SupportedAccommodationsMenu onNavigate={onNavigate} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-16 text-xl font-semibold text-secondary hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary rounded-md shadow-sm hover:shadow-md transition-shadow">
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
            className="h-16 px-6 text-xl font-semibold text-secondary hover:bg-primary/10 hover:text-primary rounded-md shadow-sm hover:shadow-md transition-shadow border-none"
          >
            <Link href="/community-participation" onClick={onNavigate}>
              Community Participation
            </Link>
          </Button>
        </NavigationMenuItem>

        <div className="flex-1" />

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-16 text-xl font-semibold text-secondary hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary rounded-md shadow-sm hover:shadow-md transition-shadow">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <AboutMenu onNavigate={onNavigate} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-16 text-xl font-semibold text-secondary hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary rounded-md shadow-sm hover:shadow-md transition-shadow">
            Learn
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ResourcesMenu onNavigate={onNavigate} />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

