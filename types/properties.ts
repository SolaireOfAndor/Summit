import { LucideIcon } from "lucide-react"

export interface PropertyOption {
  value: string
  label: string
  icon?: string | LucideIcon
}

export interface PropertyFilters {
  buildingType?: string[]
  designCategory?: string[]
  [key: string]: string | string[] | undefined
}