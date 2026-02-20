"use client"

import { PageHero } from "@/components/sections/page-hero"
import { PropertyCard } from "@/components/features/property-card"
import { properties } from "@/lib/properties"

const silProperties = properties.filter(p => p.type.includes("SIL"))

export default function SILVacanciesPage() {
  return (
    <>
      <PageHero
        title="SIL Vacancies"
        description="Discover available Supported Independent Living opportunities. Find a supportive community that helps you thrive."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "Properties", href: "/properties" },
          { title: "SIL Vacancies", href: "/properties/sil-vacancies" },
        ]}
      />

      <div className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {silProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No properties found</h3>
            <p className="text-muted-foreground mt-2">Please check back soon for new listings</p>
          </div>
        )}
      </div>
    </>
  )
}
