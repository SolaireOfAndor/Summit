"use client"

import Link from "next/link"
import Image from "next/image"
import { navigationData } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { ArrowRight, HeartHandshake, Home, User } from "lucide-react"

interface DropInSupportDropdownProps {
  onNavigate?: () => void
}

const supportImages = {
  "Assistance with Daily Life": "/png/support-1120755_1920.jpg",
  "Assistance with Self Care": "/nurse-walking-with-senior-patient-wheelchair.webp"
}

const supportIcons = {
  "Assistance with Daily Life": Home,
  "Assistance with Self Care": User
}

/**
 * @component DropInSupportDropdown
 * @description Compact professional dropdown for Drop-in Support navigation
 */
export function DropInSupportDropdown({ onNavigate }: DropInSupportDropdownProps) {
  return (
    <div className="w-full p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="dropdown-header mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center">
              <HeartHandshake className="w-4 h-4 text-[hsl(var(--text-white))]" />
            </div>
            <h3 className="text-2xl font-bold text-[hsl(var(--heading))]">
              Drop-in Support Services
            </h3>
          </div>
          <p className="text-[hsl(var(--muted-foreground))] max-w-2xl">
            Flexible, person-centered support services to help you live independently
          </p>
        </div>
        
        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {navigationData.dropInSupport.map((item, index) => {
            const IconComponent = supportIcons[item.title as keyof typeof supportIcons]
            const imageSrc = supportImages[item.title as keyof typeof supportImages]
            
            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onNavigate}
                className="dropdown-item group bg-[hsl(var(--pure-white))] rounded-lg border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >
                <div className="dropdown-image relative h-40 mb-4 overflow-hidden bg-[hsl(var(--light-orange))]">
                  <Image
                    src={imageSrc}
                    alt={`Professional ${item.title.toLowerCase()} support service`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 w-10 h-10 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-[hsl(var(--text-white))]" />
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="font-bold text-lg text-[hsl(var(--heading))] mb-3 group-hover:text-[hsl(var(--primary))] transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center text-[hsl(var(--primary))] font-semibold group-hover:text-[hsl(var(--primary-hover))] transition-colors">
                    Explore service
                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
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
              <h4 className="font-bold text-lg mb-1">
                Ready to enhance your independence?
              </h4>
              <p className="opacity-90">
                Contact us today to discuss your support needs and create a personalized plan
              </p>
            </div>
            <div className="flex gap-3 lg:flex-shrink-0">
              <Link
                href="/contact"
                onClick={onNavigate}
                className="nav-button px-4 py-2 bg-[hsl(var(--text-white))] text-[hsl(var(--primary))] rounded-md hover:bg-[hsl(var(--background))] transition-colors font-semibold text-sm"
              >
                Get Started
              </Link>
              <Link
                href="/learn/about-sil"
                onClick={onNavigate}
                className="nav-button px-4 py-2 border-2 border-[hsl(var(--text-white))] text-[hsl(var(--text-white))] rounded-md hover:bg-[hsl(var(--text-white))] hover:text-[hsl(var(--primary))] transition-colors font-semibold text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 