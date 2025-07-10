"use client"

import { useState } from "react"
import { PageHero } from "@/components/sections/page-hero"
import { PropertyCard } from "@/components/features/property-card"
import { PropertyFilters } from "@/components/features/property-filters"
import { properties } from "@/lib/properties"
import type { PropertyFilters as Filters } from "@/types/property"

// Sample data - replace with actual data from your backend
const buildingTypes = [
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "house", label: "House" },
  { value: "duplex", label: "Duplex" },
]

// Add design categories for SIL properties
const designCategories = [
  { value: "high-physical-support", label: "High Physical Support" },
  { value: "robust", label: "Robust" },
  { value: "fully-accessible", label: "Fully Accessible" },
  { value: "improved-liveability", label: "Improved Liveability" },
]

const silProperties = properties.filter(p => p.type.includes("SIL"))

export default function SILVacanciesPage() {
  const [filteredProperties, setFilteredProperties] = useState(silProperties)

  const handleFilterChange = (filters: Filters) => {
    const filtered = silProperties.filter((property) => {
      // Add design category match check
      const designMatch =
        !filters.designCategory?.length ||
        filters.designCategory?.some((category: string) => 
          property.features.some(f => f.label.toLowerCase().includes(category.toLowerCase()))
        ) || false

      const buildingTypeMatch = 
        !filters.buildingType?.length || 
        property.features.some(f => 
          filters.buildingType?.some((type: string) => 
            f.label.toLowerCase().includes(type.toLowerCase())
          ) || false
        );
      
      // Include design match in the filter condition
      return buildingTypeMatch && designMatch;
    })
    setFilteredProperties(filtered)
  }

  return (
    <>
      <PageHero
        title="SIL Vacancies"
        description="Discover available Supported Independent Living opportunities. Find a supportive community that helps you thrive."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "Services", href: "/services" },
          { title: "SIL Services", href: "/supported-accommodations/sil" },
          { title: "SIL Vacancies", href: "/services/sil-vacancies" },
        ]}
      />

      <div className="container py-12">
        <PropertyFilters
          buildingTypes={buildingTypes}
          designCategories={designCategories}
          onFilterChange={handleFilterChange}
        />

        <div className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
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

