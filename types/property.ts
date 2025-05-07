import { LucideIcon } from "lucide-react"

export interface PropertyFeature {
  label: string
  value: string
  icon?: string
}

export interface BaseProperty {
  id: string
  title: string
  slug: string
  description: string
  location: string
  features: PropertyFeature[]
  buildingType: string
  images: string[]
  price?: string
  availability: 'available' | 'coming-soon' | 'occupied'
}

export interface SDAProperty extends BaseProperty {
  designCategory: 'Basic' | 'Improved Liveability' | 'Fully Accessible' | 'Robust' | 'High Physical Support'
  sdaType: string[]
  onSiteSupport: boolean
}

export interface StandardProperty extends BaseProperty {
  propertyType: string[]
}

export type Property = SDAProperty | StandardProperty

export interface PropertyOption {
  label: string
  value: string
}

export interface PropertyFilters {
  buildingType?: string[]
  designCategory?: string[]
  [key: string]: string | string[] | undefined
}
