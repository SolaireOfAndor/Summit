'use client'

import { Building2, Users, MapPin, CheckCircle2, ArrowRight, Home } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SummitButton } from "@/components/ui/summit-button"
import Link from "next/link"
import Image from "next/image"

/**
 * @component PropertiesHighlight
 * @description Landing page section highlighting available properties and vacancies
 * with current availability and key features.
 * 
 * @example
 * ```tsx
 * <PropertiesHighlight />
 * ```
 * 
 * @category Section
 * @usedIn Landing Page (app/page.tsx)
 */

const propertyHighlights = [
  {
    type: "SDA",
    title: "Specialist Disability Accommodation",
    description: "Purpose-built accessible homes with specialized features.",
    image: "/house-image/1.webp",
    features: [
      "Accessible design",
      "Assistive technology",
      "Quality locations"
    ],
    vacancyCount: "12+",
    href: "/properties/sda-vacancies",
    bgColor: "bg-[hsl(var(--lighter-orange))]",
    locations: ["Sydney CBD", "Parramatta", "Chatswood", "Mascot"]
  },
  {
    type: "SIL",
    title: "Supported Independent Living",
    description: "Properties with comprehensive daily living support services.",
    image: "/house-image/3.webp", 
    features: [
      "24/7 support available",
      "Flexible arrangements",
      "Community locations"
    ],
    vacancyCount: "8+",
    href: "/properties/sil-vacancies",
    bgColor: "bg-[hsl(var(--light-orange))]",
    locations: ["Bondi", "North Ryde", "Cronulla", "Mittagong"]
  }
]

const propertyStats = [
  {
    title: "NSW Locations",
    value: "15+",
    description: "Properties across Sydney and regional NSW",
    icon: MapPin
  },
  {
    title: "Current Vacancies",
    value: "20+",
    description: "Available SDA and SIL properties",
    icon: Home
  },
  {
    title: "Quality Standards", 
    value: "100%",
    description: "NDIS compliant properties",
    icon: CheckCircle2
  }
]

export function PropertiesHighlight() {
  return (
    <section 
      className="py-20 lg:py-24 bg-[hsl(var(--background))]"
      aria-labelledby="properties-highlight-title"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary))] bg-[hsl(var(--primary-transparent))] px-4 py-2 rounded-full mb-6">
            <Building2 className="w-4 h-4" />
            <span>Available Properties</span>
          </div>
          <h2 
            id="properties-highlight-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(var(--heading))] mb-6"
          >
            Quality Homes Across NSW
          </h2>
          <p className="text-lg text-[hsl(var(--body))] max-w-2xl mx-auto">
            Discover our range of accessible, high-quality properties designed to support 
            your independence.
          </p>
        </div>

        {/* Property Types */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {propertyHighlights.map((property, index) => (
            <Card key={property.type} className={`overflow-hidden ${property.bgColor} border-0`}>
              <div className="relative">
                {/* Property Image */}
                <div className="relative h-48 lg:h-56">
                  <Image
                    src={property.image}
                    alt={`${property.title} property example`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-[hsl(var(--pure-white))] text-[hsl(var(--primary))] font-semibold">
                      {property.vacancyCount} Vacancies Available
                    </Badge>
                  </div>
                </div>
                
                {/* Content */}
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                      {property.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-[hsl(var(--heading))]">{property.title}</CardTitle>
                  <p className="text-[hsl(var(--body))] text-sm leading-relaxed">{property.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-[hsl(var(--body))]">
                        <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Locations */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-[hsl(var(--heading))] mb-2">Available Locations:</p>
                    <div className="flex flex-wrap gap-2">
                      {property.locations.map((location, index) => (
                        <Badge key={location} variant="secondary" className="text-xs">
                          {location}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <SummitButton asChild className="w-full">
                    <Link href={property.href}>
                      View {property.type} Vacancies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </SummitButton>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Property Stats */}
        <div className="bg-[hsl(var(--pure-white))] rounded-2xl p-8 shadow-[0_4px_24px_0_hsl(var(--orange-shadow))] mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            {propertyStats.map((stat, index) => (
              <div key={stat.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--primary))]/10 mb-4">
                  <stat.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-[hsl(var(--heading))] mb-1">
                  {stat.title}
                </div>
                <p className="text-sm text-[hsl(var(--body))]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <SummitButton asChild size="lg" variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-transparent))]">
            <Link href="/properties">Browse All Properties</Link>
          </SummitButton>
        </div>
      </div>
    </section>
  )
} 