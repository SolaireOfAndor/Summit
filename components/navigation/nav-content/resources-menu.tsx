"use client"

import { useState } from "react"
import Link from "next/link"
import { navigationData, NavigationItem } from "@/lib/navigation"
import { cn } from "@/lib/utils"

interface ResourcesMenuProps {
  onNavigate?: () => void
}

export function ResourcesMenu({ onNavigate }: ResourcesMenuProps) {
  const [activeItem, setActiveItem] = useState<NavigationItem>(navigationData.learn[0])

  return (
    <div className="w-[800px] grid grid-cols-[280px_1fr] bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden border border-secondary/20">
      {/* Left side - Menu items */}
      <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border-r border-secondary/20">
        <ul className="py-2">
          {navigationData.learn.map((item) => (
            <li key={item.title} className="relative">
              <button
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
                aria-label={item.title}
                tabIndex={0}
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
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - Preview */}
      <div className="p-8 flex flex-col overflow-hidden">
        <div className="flex flex-col">
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

