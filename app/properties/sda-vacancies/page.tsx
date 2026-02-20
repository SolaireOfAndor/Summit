"use client"

import { PageHero } from "@/components/sections/page-hero"
import { PropertyCard } from "@/components/features/property-card"
import { properties } from "@/lib/properties"

const sdaProperties = properties.filter(p => p.type.includes("SDA"))

export default function SDAVacanciesPage() {
  return (
    <>
      <PageHero
        title="SDA Vacancies"
        description="Find your perfect Specialist Disability Accommodation. Browse our available properties and discover a home that meets your needs."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "Properties", href: "/properties" },
          { title: "SDA Vacancies", href: "/properties/sda-vacancies" },
        ]}
      />

      <div className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sdaProperties.map((property) => (
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

        {sdaProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium">No properties found</h3>
            <p className="text-muted-foreground mt-2">Please check back soon for new listings</p>
          </div>
        )}
      </div>
    </>
  )
}
