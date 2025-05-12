"use client"

import { useState, useCallback, useMemo, memo } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { PropertyOption } from "@/types/properties"

// Import all icons that might be needed
import {
  Flame,
  MoveUpIcon as Lift,
  Thermometer,
  Wind,
  Utensils,
  DoorOpen,
  BookOpen,
  Dumbbell,
  TreePine,
  Lock,
  Home,
  ShipWheelIcon as Wheelchair,
  Building2,
  Wifi,
  Ruler,
  Lightbulb,
} from "lucide-react"

// Create a map of all icons
const iconMap = {
  Flame,
  Lift,
  Thermometer,
  Wind,
  Utensils,
  DoorOpen,
  BookOpen,
  Dumbbell,
  TreePine,
  Lock,
  Home,
  Wheelchair,
  Building2,
  Wifi,
  Ruler,
  Lightbulb,
}

interface PropertyFiltersProps {
  buildingTypes: readonly PropertyOption[]
  designCategories?: readonly PropertyOption[]
  onFilterChange: (filters: any) => void
  className?: string
}

interface FilterPopoverProps {
  options: readonly PropertyOption[]
  placeholder: string
  multiple?: boolean
  onSelect: (value: string | string[]) => void
  id: string
}

const FilterPopover = memo(function FilterPopover({ 
  options, 
  placeholder, 
  multiple = false, 
  onSelect,
  id 
}: FilterPopoverProps) {
  const [open, setOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const handleSelect = useCallback((value: string) => {
    let newValues: string[]
    if (multiple) {
      newValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value]
      setSelectedValues(newValues)
      onSelect(newValues)
    } else {
      setSelectedValues([value])
      onSelect(value)
      setOpen(false)
    }
  }, [multiple, selectedValues, onSelect, setOpen])

  const renderIcon = useCallback((iconName: string) => {
    // Only try to render icon if it's a string reference to an icon
    if (typeof iconName === 'string' && iconName in iconMap) {
      const IconComponent = iconMap[iconName as keyof typeof iconMap]
      return <IconComponent className="mr-2 h-4 w-4" />
    }
    return null
  }, [])

  const selectedLabels = useMemo(() => {
    return options
      .filter((option) => selectedValues.includes(option.value))
      .map((option) => option.label)
  }, [options, selectedValues])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label={placeholder}
          className="justify-between w-[200px] md:w-[220px]"
          id={id}
        >
          {selectedValues.length > 0 ? (
            <div className="flex flex-wrap gap-1 max-w-[180px] overflow-hidden">
              {selectedLabels.map((label) => (
                <Badge key={label} variant="secondary" className="mr-1">
                  {label}
                </Badge>
              ))}
            </div>
          ) : (
            placeholder
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0" align="start">
        <Command>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.value)
                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    {option.icon && renderIcon(option.icon as string)}
                    <span>{option.label}</span>
                    {isSelected && <Check className="ml-auto h-4 w-4" />}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
})

/**
 * @component PropertyFilters
 * @description A component that provides filtering options for Summit property listings. Allows users to filter properties by location, type, features, and other criteria to find suitable NDIS accommodation solutions.
 *
 * @example
 * ```tsx
 * <PropertyFilters onFilterChange={handleFilterChange} />
 * ```
 *
 * @category Feature
 * @usedIn Property listing pages and search results
 * @param {PropertyOption[]} buildingTypes - List of available building types
 * @param {PropertyOption[]} [designCategories] - Optional list of SDA design categories
 * @param {(filters: any) => void} onFilterChange - Callback when filters change
 * @param {string} [className] - Optional additional class names
 * @returns {JSX.Element}
 */
export const PropertyFilters = memo(function PropertyFilters({
  buildingTypes,
  designCategories,
  onFilterChange,
  className,
}: PropertyFiltersProps) {
  const handleBuildingTypeChange = useCallback((value: string | string[]) => {
    onFilterChange({ buildingType: Array.isArray(value) ? value : [value] })
  }, [onFilterChange])

  const handleDesignCategoryChange = useCallback((value: string | string[]) => {
    onFilterChange({ designCategory: Array.isArray(value) ? value : [value] })
  }, [onFilterChange])

  return (
    <div 
      className={cn("flex flex-wrap gap-4", className)}
      role="search"
      aria-label="Property filters"
    >
      <FilterPopover
        id="building-type-filter"
        options={buildingTypes}
        placeholder="Building type"
        onSelect={handleBuildingTypeChange}
      />
      
      {designCategories && (
        <FilterPopover
          id="design-category-filter"
          options={designCategories}
          placeholder="Design category"
          onSelect={handleDesignCategoryChange}
        />
      )}
    </div>
  )
})

