"use client"

import { useState } from "react"
import { PageHero } from "@/components/sections/page-hero"
import { PropertyCard } from "@/components/features/property-card"
import { PropertyFilters } from "@/components/features/property-filters"
import { properties } from "@/lib/properties"
import type { PropertyFilters as Filters } from "@/types/property"

// Sample data - replace with actual data from your backend
const designCategories = [
  { value: "high-physical-support", label: "High Physical Support" },
  { value: "robust", label: "Robust" },
  { value: "fully-accessible", label: "Fully Accessible" },
  { value: "improved-liveability", label: "Improved Liveability" },
]

const buildingTypes = [
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "house", label: "House" },
  { value: "duplex", label: "Duplex" },
]

// Remove local properties array and use filtered ones
const sdaProperties = properties.filter(p => p.type.includes("SDA"))

export default function SDAVacanciesPage() {
  const [filteredProperties, setFilteredProperties] = useState(sdaProperties)

  const handleFilterChange = (filters: Filters) => {
    const filtered = sdaProperties.filter((property) => {
      const designMatch =
        !filters.designCategory?.length ||
        filters.designCategory.some((category: string) => 
          property.features.some(f => f.label.toLowerCase().includes(category))
        )

      const typeMatch =
        !filters.buildingType?.length ||
        filters.buildingType.some((type: string) => 
          property.features.some(f => f.label.toLowerCase().includes(type))
        )

      return designMatch && typeMatch
    })
    setFilteredProperties(filtered)
  }

  return (
    <>
      <PageHero
        title="SDA Vacancies"
        description="Find your perfect Specialist Disability Accommodation. Browse our available properties and discover a home that meets your needs."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "Services", href: "/services" },
          { title: "Eden Housing", href: "/services/eden-housing" },
          { title: "SDA Vacancies", href: "/services/sda-vacancies" },
        ]}
      />

      <div className="container py-12">
        <PropertyFilters
          designCategories={designCategories}
          buildingTypes={buildingTypes}
          onFilterChange={handleFilterChange}
        />

        <div className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                type="SDA"
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

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No properties found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters to see more properties</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

