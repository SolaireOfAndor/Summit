"use client"

import Link from "next/link"
import Image from "next/image"
import { navigationData } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { ArrowRight, Building2, Home, Calendar, Clock } from "lucide-react"

interface SupportedAccommodationsDropdownProps {
  onNavigate?: () => void
}

const accommodationImages = {
  "SIL": "/house-image/1.webp",
  "STA": "/house-image/2.webp", 
  "MTA": "/house-image/3.webp",
  "SDA": "/house-image/4.webp"
}

const accommodationIcons = {
  "SIL": Home,
  "STA": Calendar,
  "MTA": Clock,
  "SDA": Building2
}

/**
 * @component SupportedAccommodationsDropdown
 * @description Compact professional dropdown for Supported Accommodations navigation
 */
export function SupportedAccommodationsDropdown({ onNavigate }: SupportedAccommodationsDropdownProps) {
  return (
    <div className="w-full p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="dropdown-header mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center">
              <Building2 className="w-4 h-4 text-[hsl(var(--text-white))]" />
            </div>
            <h3 className="text-2xl font-bold text-[hsl(var(--heading))]">
              Supported Accommodations
            </h3>
          </div>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl">
            Discover our comprehensive range of accommodation and support services
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
          {navigationData.supportedAccommodations.map((item) => {
            const IconComponent = accommodationIcons[item.title as keyof typeof accommodationIcons] || Building2
            const imageSrc = accommodationImages[item.title as keyof typeof accommodationImages]
            
            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onNavigate}
                className="dropdown-item group bg-[hsl(var(--pure-white))] rounded-lg border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >
                <div className="dropdown-image relative h-32 mb-4 overflow-hidden bg-[hsl(var(--light-orange))]">
                  <Image
                    src={imageSrc}
                    alt={`${item.title} accommodation`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 w-8 h-8 bg-[hsl(var(--primary))] rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <IconComponent className="w-4 h-4 text-[hsl(var(--text-white))]" />
                  </div>
                </div>
                
                <div className="p-4 pt-0">
                  <h4 className="font-bold text-base text-[hsl(var(--heading))] mb-2 group-hover:text-[hsl(var(--primary))] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-[hsl(var(--primary))] font-semibold text-sm group-hover:text-[hsl(var(--primary-hover))] transition-colors">
                    Learn more
                    <ArrowRight className="ml-1 w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        
        {/* Compact CTA Section */}
        <div className="bg-gradient-to-r from-[hsl(var(--light-orange))] to-[hsl(var(--lighter-orange))] rounded-lg p-6 border border-[hsl(var(--border))]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-lg text-[hsl(var(--heading))] mb-1">
                Need personalized guidance?
              </h4>
              <p className="text-[hsl(var(--muted-foreground))]">
                Our team can help you find the perfect accommodation solution
              </p>
            </div>
            <div className="flex gap-3 lg:flex-shrink-0">
              <Link
                href="/properties"
                onClick={onNavigate}
                className="nav-button px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] rounded-md hover:bg-[hsl(var(--primary-hover))] transition-colors font-semibold text-sm"
              >
                View Properties
              </Link>
              <Link
                href="/contact"
                onClick={onNavigate}
                className="nav-button px-4 py-2 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-md hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--text-white))] transition-colors font-semibold text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 