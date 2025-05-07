import type { PropertyOption } from "@/types/property"

export const propertyFilterConfig = {
  locations: [
    { value: "sydney", label: "Sydney" },
    { value: "melbourne", label: "Melbourne" },
    { value: "brisbane", label: "Brisbane" },
    { value: "perth", label: "Perth" },
  ],
  
  sda: {
    features: [
      { value: "ceiling-hoist", label: "Ceiling Hoist" },
      { value: "assistive-tech", label: "Assistive Technology" },
      { value: "accessible-bathroom", label: "Accessible Bathroom" },
      { value: "outdoor-area", label: "Private Outdoor Area" },
    ],
    designCategories: [
      { value: "high-physical-support", label: "High Physical Support" },
      { value: "robust", label: "Robust" },
      { value: "fully-accessible", label: "Fully Accessible" },
      { value: "improved-liveability", label: "Improved Liveability" },
    ],
  },
  
  sil: {
    features: [
      { value: "24-7-support", label: "24/7 Support" },
      { value: "shared-living", label: "Shared Living" },
      { value: "activity-program", label: "Activity Program" },
      { value: "transport", label: "Transport Support" },
    ],
  },
  
  buildingTypes: [
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "house", label: "House" },
    { value: "duplex", label: "Duplex" },
  ],
} as const 