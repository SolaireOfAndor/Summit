import { useMemo, useState } from "react"
import type { Property, PropertyFeature } from "@/types/property"

interface FilterState {
  location: string
  features: string[]
  buildingType: string
  designCategory?: string
}

export function usePropertyFilters(properties: Property[]) {
  const [filters, setFilters] = useState<FilterState>({
    location: "",
    features: [],
    buildingType: "",
    designCategory: "",
  })

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const locationMatch = !filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase())
      const featuresMatch = filters.features.length === 0 || filters.features.every((f) => 
        property.features.some(feature => feature.value === f)
      )
      const buildingTypeMatch = !filters.buildingType || property.buildingType === filters.buildingType
      
      // Type guard for SDA properties
      const designCategoryMatch = 
        !filters.designCategory || 
        ('designCategory' in property && property.designCategory === filters.designCategory)

      return locationMatch && featuresMatch && buildingTypeMatch && designCategoryMatch
    })
  }, [properties, filters])

  const handleFilterChange = (filterUpdate: Partial<FilterState>) => {
    setFilters((prev) => ({
      ...prev,
      ...filterUpdate,
    }))
  }

  return {
    filters,
    filteredProperties,
    handleFilterChange,
  }
} 