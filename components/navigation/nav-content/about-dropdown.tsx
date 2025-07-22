"use client"

import Link from "next/link"
import Image from "next/image"
import { navigationData } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { ArrowRight, Eye, Building2, MessageSquare, Award } from "lucide-react"

interface AboutDropdownProps {
  onNavigate?: () => void
}

const aboutImages = {
  "Summit Vision": "/png/idea-3082824_1920.jpg",
  "About SummitSDA": "/png/business-15721_1920.jpg",
  "Feedback/Complaints": "/png/thumbs-up-2649310_960_720.webp"
}

const aboutIcons = {
  "Summit Vision": Eye,
  "About SummitSDA": Building2,
  "Feedback/Complaints": MessageSquare
}

/**
 * @component AboutDropdown
 * @description Compact professional dropdown for About navigation
 */
export function AboutDropdown({ onNavigate }: AboutDropdownProps) {
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
              About SummitSDA
            </h3>
          </div>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl">
            Learn more about our mission, values, and commitment to providing quality support services
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {navigationData.about.map((item, index) => {
            const IconComponent = aboutIcons[item.title as keyof typeof aboutIcons]
            const imageSrc = aboutImages[item.title as keyof typeof aboutImages]
            
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
                    alt={`${item.title} - Learn about Summit`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 w-8 h-8 bg-[hsl(var(--primary))] rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <IconComponent className="w-4 h-4 text-[hsl(var(--text-white))]" />
                  </div>
                </div>
                
                <div className="p-4 pt-0">
                  <h4 className="font-bold text-base text-[hsl(var(--heading))] mb-2 group-hover:text-[hsl(var(--primary))] transition-colors">
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
        <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-hover))] rounded-lg p-6 text-[hsl(var(--text-white))]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-5 h-5" />
                <h4 className="font-bold text-lg">
                  Have Questions or Feedback?
                </h4>
              </div>
              <p className="opacity-90">
                We value your input and are always looking for ways to improve our services
              </p>
            </div>
            <div className="flex gap-3 lg:flex-shrink-0">
              <Link
                href="/about/feedback"
                onClick={onNavigate}
                className="nav-button px-4 py-2 bg-[hsl(var(--text-white))] text-[hsl(var(--primary))] rounded-md hover:bg-[hsl(var(--background))] transition-colors font-semibold text-sm"
              >
                Give Feedback
              </Link>
              <Link
                href="/contact"
                onClick={onNavigate}
                className="nav-button px-4 py-2 border-2 border-[hsl(var(--text-white))] text-[hsl(var(--text-white))] rounded-md hover:bg-[hsl(var(--text-white))] hover:text-[hsl(var(--primary))] transition-colors font-semibold text-sm"
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