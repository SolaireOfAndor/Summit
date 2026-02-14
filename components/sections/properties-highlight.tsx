'use client'

import { Home, ArrowRight } from "lucide-react"
import { SummitButton } from "@/components/ui/summit-button"
import { PropertyCard } from "@/components/features/property-card"
import { properties } from "@/lib/properties"
import Link from "next/link"

/**
 * @component PropertiesHighlight
 * @description Landing page section showcasing real SIL property vacancies
 * pulled from the properties data. Displays the first few SIL properties
 * using the existing PropertyCard component with a CTA to view all vacancies.
 * 
 * @example
 * ```tsx
 * <PropertiesHighlight />
 * ```
 * 
 * @category Section
 * @usedIn Landing Page (app/page.tsx)
 */

const silProperties = properties
  .filter(p => p.type.includes("SIL"))
  .slice(0, 3)

export function PropertiesHighlight() {
  return (
    <section 
      className="py-20 lg:py-24 bg-[hsl(var(--background))]"
      aria-labelledby="properties-highlight-title"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary))] bg-[hsl(var(--primary-transparent))] px-4 py-2 rounded-full mb-6">
            <Home className="w-4 h-4" />
            <span>SIL Vacancies</span>
          </div>
          <h2 
            id="properties-highlight-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(var(--heading))] mb-6"
          >
            Current SIL Vacancies
          </h2>
          <p className="text-lg text-[hsl(var(--body))] max-w-2xl mx-auto">
            Browse our Supported Independent Living properties with vacancies now open. 
            Each home comes with personalised 24/7 support across NSW.
          </p>
        </div>

        {/* Property Cards Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 lg:mb-16">
          {silProperties.map((property) => (
            <PropertyCard
              key={property.id}
              type="SIL"
              title={property.title}
              location={property.location}
              description={property.description}
              image={property.images?.[0] || "/placeholder.svg"}
              bedrooms={property.details.bedrooms}
              bathrooms={property.details.bathrooms}
              vacancy={property.details.bedroomsAvailable}
              features={property.features.slice(0, 3).map(f => f.label)}
              href={`/properties/${property.slug}`}
              designCategory={property.features.find(f => f.label.includes("Design"))?.label}
              buildingType={property.features.find(f => 
                ["Apartment", "Villa", "House", "Duplex"].includes(f.label)
              )?.label}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <SummitButton asChild size="lg" className="shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
            <Link href="/properties/sil-vacancies">
              View All SIL Vacancies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </SummitButton>
          <SummitButton asChild size="lg" variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-transparent))]">
            <Link href="/properties">Browse All Properties</Link>
          </SummitButton>
        </div>
      </div>
    </section>
  )
}
