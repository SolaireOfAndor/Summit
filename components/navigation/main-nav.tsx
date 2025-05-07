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
import { ServicesMenu } from "./nav-content/services-menu"
import { ResourcesMenu } from "./nav-content/resources-menu"
import { AboutMenu } from "./nav-content/about-menu"
import { Dispatch, SetStateAction } from "react"

interface MainNavProps {
  activeService: string
  onServiceHover: Dispatch<SetStateAction<string>>
  onNavigate: () => void
  className?: string
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
export function MainNav({ activeService, onServiceHover, onNavigate }: MainNavProps) {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <Button
            asChild
            variant="ghost"
            className="h-16 px-6 text-xl font-semibold text-secondary hover:bg-primary/10 hover:text-primary rounded-md shadow-sm hover:shadow-md transition-shadow border-none"
          >
            <Link href="/" onClick={onNavigate}>
              Home
            </Link>
          </Button>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-16 text-xl font-semibold text-secondary hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary rounded-md shadow-sm hover:shadow-md transition-shadow">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ServicesMenu activeService={activeService} onServiceHover={onServiceHover} onNavigate={onNavigate} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-16 text-xl font-semibold text-secondary hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary rounded-md shadow-sm hover:shadow-md transition-shadow">
            {" "}
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ResourcesMenu onNavigate={onNavigate} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-16 text-xl font-semibold text-secondary hover:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary rounded-md shadow-sm hover:shadow-md transition-shadow">
            {" "}
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <AboutMenu onNavigate={onNavigate} />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

