import { properties } from "@/lib/properties"
import { notFound } from "next/navigation"
import { PropertyPage as PropertyPageTemplate } from "@/components/features/property-page"
import { Metadata } from "next"

// Generate metadata for each property page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const property = properties.find((p) => p.slug === params.slug)
  
  if (!property) {
    return {
      title: "Property Not Found",
      description: "The requested property could not be found."
    }
  }
  
  return {
    title: `${property.title} | Eden Ability`,
    description: property.description.substring(0, 155) + (property.description.length > 155 ? '...' : ''),
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.images?.[0] || "/placeholder.svg"]
    }
  }
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = properties.find((p) => p.slug === params.slug)

  if (!property) {
    notFound()
  }

  return <PropertyPageTemplate property={property} />
}

// Static paths for pre-rendering at build time
export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }))
}

// Revalidate every 24 hours
export const revalidate = 86400 // 24 hours

