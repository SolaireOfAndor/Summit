import { notFound } from "next/navigation"
import { PropertyPage } from "@/components/features/property-page"
import { getProperties, generatePropertySEO, type PropertyData } from "@/lib/properties"
import { Metadata } from "next"

interface PropertySlugPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PropertySlugPageProps): Promise<Metadata> {
  const properties = getProperties()
  const property = properties.find(p => p.slug === params.slug)
  
  if (!property) {
    return {
      title: "Property Not Found | Summit",
      description: "The requested property could not be found."
    }
  }

  const seoData = generatePropertySEO(property)
  
  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    openGraph: {
      title: seoData.metaTitle,
      description: seoData.metaDescription,
      images: property.images?.[0] ? [property.images[0]] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.metaTitle,
      description: seoData.metaDescription,
      images: property.images?.[0] ? [property.images[0]] : [],
    }
  }
}

export async function generateStaticParams() {
  const properties = getProperties()
  return properties.map((property) => ({
    slug: property.slug,
  }))
}

export default function PropertySlugPage({ params }: PropertySlugPageProps) {
  const properties = getProperties()
  const property = properties.find(p => p.slug === params.slug)
  
  if (!property) {
    notFound()
  }

  return <PropertyPage property={property} />
}

