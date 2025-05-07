"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { navigationData } from "@/lib/navigation"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import type { NavigationItem } from "@/lib/navigation"
import { AnimatePresence, motion } from "framer-motion"

interface ResourcesMenuProps {
  onNavigate?: () => void
}

export function ResourcesMenu({ onNavigate }: ResourcesMenuProps) {
  const [activeItem, setActiveItem] = useState<NavigationItem>(navigationData.resources[0])

  return (
    <div className="w-[800px] grid grid-cols-[280px_1fr] bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-secondary/20">
      {/* Left side - Menu items */}
      <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border-r border-secondary/20">
        <ul className="py-2">
          {navigationData.resources.map((resource) => (
            <li key={resource.title} className="relative">
              <NavigationMenuLink asChild>
                <button
                  onMouseEnter={() => setActiveItem(resource)}
                  onClick={() => {
                    onNavigate?.()
                    window.location.href = resource.href
                  }}
                  className={cn(
                    "w-full text-left px-5 py-4 transition-all hover:bg-accent/5 group relative",
                    activeItem.title === resource.title
                      ? "bg-accent/10 text-secondary"
                      : "text-secondary/80 hover:text-secondary"
                  )}
                >
                  <div className="font-medium text-base flex items-center">
                    {resource.title}
                    <span className={cn(
                      "ml-auto opacity-0 transform translate-x-2 transition-all",
                      activeItem.title === resource.title ? "opacity-100 translate-x-0" : "group-hover:opacity-100 group-hover:translate-x-0"
                    )}>→</span>
                  </div>
                  <div className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ease-out",
                    activeItem.title === resource.title
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
              <h3 className="font-semibold text-xl text-secondary mb-3 flex items-center">
                {activeItem.title}
                <div className="ml-4 h-px flex-1 bg-gradient-to-r from-secondary/30 to-transparent" />
              </h3>
              <p className="text-secondary/80 leading-relaxed mb-4">
                {activeItem.description}
              </p>
              <Link 
                href={activeItem.href} 
                onClick={onNavigate}
                className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors"
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

