"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { navigationData } from "@/lib/navigation"
import type { ServiceCategory, NavigationSubItem } from "@/lib/navigation"
import { AnimatePresence, motion } from "framer-motion"

interface ServicesMenuProps {
  activeService: string
  onServiceHover: (service: string) => void
  onNavigate?: () => void
}

// Type guard to validate if a string is a valid service category
function isValidServiceCategory(category: string): category is keyof typeof navigationData.services {
  return category in navigationData.services
}

// Type guard to validate if an object is a ServiceCategory
function isServiceCategory(obj: unknown): obj is ServiceCategory {
  if (!obj || typeof obj !== 'object') return false
  return 'url' in obj && 'description' in obj && 'items' in obj
}

export function ServicesMenu({ activeService, onServiceHover, onNavigate }: ServicesMenuProps) {
  // Validate active service and get the active category data
  const validActiveService = isValidServiceCategory(activeService) ? activeService : Object.keys(navigationData.services)[0] as keyof typeof navigationData.services
  const activeCategory = navigationData.services[validActiveService]
  const [activeItem, setActiveItem] = useState<NavigationSubItem>(activeCategory.items[0])
  const [showCategoryPreview, setShowCategoryPreview] = useState(false)

  if (!isServiceCategory(activeCategory)) {
    console.error(`Invalid service category data for ${validActiveService}`)
    return null
  }

  return (
    <nav 
      aria-label="Services navigation"
      className="w-[900px] bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-secondary/20"
    >
      <div className="grid grid-cols-[250px_250px_1fr] h-full overflow-hidden rounded-lg">
        {/* Left side - Main categories */}
        <div 
          className="bg-gradient-to-br from-secondary/5 to-accent/5 border-r border-secondary/20 max-h-[450px] overflow-y-auto"
          role="tablist"
          aria-orientation="vertical"
          onMouseLeave={() => setShowCategoryPreview(false)}
        >
          {Object.entries(navigationData.services).map(([category, content]) => {
            if (!isServiceCategory(content)) return null

            return (
              <Link
                key={category}
                href={content.url}
                onClick={onNavigate}
                className="block w-full text-left"
              >
                <button
                  onMouseEnter={() => {
                    onServiceHover(category)
                    setShowCategoryPreview(true)
                  }}
                  role="tab"
                  aria-selected={category === validActiveService}
                  aria-controls={`${category}-panel`}
                  className={cn(
                    "block w-full text-left px-5 py-4 transition-all hover:bg-accent/5 group relative",
                    category === validActiveService
                      ? "bg-accent/10 text-secondary"
                      : "text-secondary/80 hover:text-secondary"
                  )}
                >
                  <div className="font-medium text-base flex items-center">
                    <div>
                      <div>{category}</div>
                      <div className="text-xs text-secondary/60 mt-0.5">{content.description}</div>
                    </div>
                    <span className={cn(
                      "ml-auto opacity-0 transform translate-x-2 transition-all",
                      category === validActiveService ? "opacity-100 translate-x-0" : "group-hover:opacity-100 group-hover:translate-x-0"
                    )}>→</span>
                  </div>
                  <div className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ease-out",
                    category === validActiveService
                      ? "w-full opacity-100"
                      : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                  )} />
                </button>
              </Link>
            )
          })}
        </div>

        {/* Middle - Sub items */}
        <div 
          className="bg-gradient-to-br from-secondary/5 to-accent/5 border-r border-secondary/20"
          role="tabpanel"
          id={`${validActiveService}-panel`}
          aria-labelledby={validActiveService}
          onMouseEnter={() => setShowCategoryPreview(false)}
        >
          <div className="py-2">
            {activeCategory.items.map((item) => (
              <button
                key={item.title}
                onMouseEnter={() => setActiveItem(item)}
                onClick={() => {
                  onNavigate?.()
                  window.location.href = item.href
                }}
                className={cn(
                  "w-full text-left px-5 py-4 transition-all hover:bg-accent/5 group relative",
                  activeItem.title === item.title
                    ? "bg-accent/10 text-secondary"
                    : "text-secondary/80 hover:text-secondary"
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
                  "absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ease-out",
                  activeItem.title === item.title
                    ? "w-full opacity-100"
                    : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                )} />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Preview */}
        <div className="p-8 flex flex-col overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={showCategoryPreview ? validActiveService : activeItem.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex flex-col"
            >
              <div className="relative h-[240px] rounded-xl overflow-hidden shadow-lg mb-6 group">
                <Link 
                  href={showCategoryPreview ? activeCategory.url : activeItem.href} 
                  onClick={onNavigate} 
                  className="block w-full h-full"
                >
                  <Image
                    src={showCategoryPreview ? (activeCategory.image || "/images/placeholder.webp") : (activeItem.image || "/images/placeholder.webp")}
                    alt={showCategoryPreview ? validActiveService : activeItem.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
              </div>
              <div className="relative">
                <h3 className="font-semibold text-xl text-secondary mb-3 flex items-center">
                  {showCategoryPreview ? validActiveService : activeItem.title}
                  <div className="ml-4 h-px flex-1 bg-gradient-to-r from-secondary/30 to-transparent" />
                </h3>
                <p className="text-secondary/80 leading-relaxed mb-4">
                  {showCategoryPreview ? activeCategory.description : activeItem.description}
                </p>
                <Link 
                  href={showCategoryPreview ? activeCategory.url : activeItem.href}
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
    </nav>
  )
}

