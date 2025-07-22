"use client"

import Link from "next/link"
import Image from "next/image"
import { navigationData } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { ArrowRight, GraduationCap, DollarSign, Home, Calendar, Clock, Building2 } from "lucide-react"

interface LearnDropdownProps {
  onNavigate?: () => void
}

const learnImages = {
  "NDIS Funding": "/png/business-19148_1920.jpg",
  "About SIL": "/house-image/5.webp",
  "About STA": "/house-image/6.webp",
  "About MTA": "/house-image/7.webp",
  "About SDA": "/house-image/8.webp"
}

const learnIcons = {
  "NDIS Funding": DollarSign,
  "About SIL": Home,
  "About STA": Calendar,
  "About MTA": Clock,
  "About SDA": Building2
}

/**
 * @component LearnDropdown
 * @description Compact professional dropdown for Learn navigation
 */
export function LearnDropdown({ onNavigate }: LearnDropdownProps) {
  return (
    <div className="w-full p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="dropdown-header mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-[hsl(var(--text-white))]" />
            </div>
            <h3 className="text-2xl font-bold text-[hsl(var(--heading))]">
              Learn About NDIS & Support Services
            </h3>
          </div>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl">
            Educational resources to help you understand your NDIS options and support choices
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
          {navigationData.learn.map((item, index) => {
            const IconComponent = learnIcons[item.title as keyof typeof learnIcons]
            const imageSrc = learnImages[item.title as keyof typeof learnImages]
            
            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onNavigate}
                className="dropdown-item group bg-[hsl(var(--pure-white))] rounded-lg border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >
                <div className="dropdown-image relative h-28 mb-3 overflow-hidden bg-[hsl(var(--light-orange))]">
                  <Image
                    src={imageSrc}
                    alt={`${item.title} - Educational guide`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 w-7 h-7 bg-[hsl(var(--primary))] rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <IconComponent className="w-3.5 h-3.5 text-[hsl(var(--text-white))]" />
                  </div>
                </div>
                
                <div className="p-3">
                  <h4 className="font-bold text-sm text-[hsl(var(--heading))] mb-2 group-hover:text-[hsl(var(--primary))] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-[hsl(var(--muted-foreground))] text-xs leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-[hsl(var(--primary))] font-semibold text-xs group-hover:text-[hsl(var(--primary-hover))] transition-colors">
                    Read guide
                    <ArrowRight className="ml-1 w-3 h-3 transform transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        
        {/* Compact CTA Section */}
        <div className="bg-gradient-to-r from-[hsl(var(--lighter-orange))] to-[hsl(var(--light-orange))] rounded-lg p-6 border border-[hsl(var(--border))]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <h4 className="font-bold text-lg text-[hsl(var(--heading))] mb-1">
                Stay Informed & Empowered
              </h4>
              <p className="text-[hsl(var(--muted-foreground))]">
                Our comprehensive guides help you make informed decisions about your support needs
              </p>
            </div>
            <div className="flex gap-3 lg:flex-shrink-0">
              <Link
                href="/learn/funding"
                onClick={onNavigate}
                className="nav-button px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] rounded-md hover:bg-[hsl(var(--primary-hover))] transition-colors font-semibold text-sm"
              >
                Start Learning
              </Link>
              <Link
                href="/contact"
                onClick={onNavigate}
                className="nav-button px-4 py-2 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] rounded-md hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--text-white))] transition-colors font-semibold text-sm"
              >
                Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 