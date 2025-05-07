import { PageHero } from "@/components/sections/page-hero"
import { properties } from "@/lib/properties"
import { Metadata } from "next"

// Generate filter options dynamically from the properties data
function generateFilterOptions() {
  // Extract unique locations
  const locationSet = new Set<string>();
  properties.forEach(property => {
    const city = property.location.split(',')[0].trim();
    locationSet.add(city);
  });
  
  // Extract unique features
  const featureSet = new Set<string>();
  properties.forEach(property => {
    property.features.forEach(feature => {
      featureSet.add(feature.label);
    });
  });
  
  // Create formatted options
  const locations = Array.from(locationSet).map(location => ({
    value: location.toLowerCase().replace(/\s+/g, '-'),
    label: location
  }));
  
  const features = Array.from(featureSet).map(feature => ({
    value: feature.toLowerCase().replace(/\s+/g, '-'),
    label: feature
  }));
  
  // Property types from the type field
  const typeSet = new Set<string>();
  properties.forEach(property => {
    property.type.forEach(type => {
      typeSet.add(type);
    });
  });
  
  const propertyTypes = Array.from(typeSet).map(type => ({
    value: type.toLowerCase(),
    label: type
  }));
  
  return {
    locations,
    features,
    propertyTypes
  };
}

// Generate filter options
const filterOptions = generateFilterOptions();

// Add metadata for the main properties page
export const metadata: Metadata = {
  title: "Available Properties | Eden Ability",
  description: "Find your perfect home from our range of accessible and supported living options."
}

export default function PropertiesPage() {
  // Prepare serializable property data for client component
  const serializedProperties = properties.map(property => ({
    id: property.id,
    slug: property.slug,
    title: property.title,
    location: property.location,
    type: property.type,
    details: property.details,
    description: property.description,
    images: property.images,
    features: property.features.map(f => f.label),
    availability: property.availability
  }));
  
  return (
    <>
      <PageHero
        title="Available Properties"
        description="Find your perfect home from our range of accessible and supported living options."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
      />

      
    </>
  )
}

