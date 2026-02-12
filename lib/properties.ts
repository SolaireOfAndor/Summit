import type { LucideIcon } from "lucide-react"
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
import { z } from "zod"

export interface PropertyFeature {
  icon: string | LucideIcon
  label: string
}

export interface LocationFeature {
  icon: string | LucideIcon
  label: string
  distance: string
}

export interface PropertySEOData {
  metaTitle: string
  metaDescription: string
  structuredData: Record<string, any>
}

const PropertySchema = z.object({
  id: z.string(),
  slug: z.string(),
  type: z.array(z.enum(["SDA", "SIL", "MTA"])),
  title: z.string(),
  location: z.string(),
  description: z.string(),
  detailedDescription: z.string().optional(),
  metaDescription: z.string().optional(),
  details: z.object({
    bedrooms: z.number(),
    bathrooms: z.number(),
    toilets: z.number(),
    parking: z.number(),
    accessibleParking: z.number(),
    bedroomsAvailable: z.number(),
  }),
  pricing: z.object({
    rent: z.string(),
    notes: z.array(z.string()),
  }),
  availability: z.string(),
  features: z.array(z.object({
    icon: z.any(),
    label: z.string(),
  })),
  activities: z.object({
    indoor: z.array(z.string()),
    outdoor: z.array(z.string()),
  }),
  location_features: z.array(z.object({
    icon: z.any(),
    label: z.string(),
    distance: z.string(),
  })),
  housemateInfo: z.object({
    currentTenants: z.number(),
    ageRange: z.string(),
    genders: z.array(z.string()),
    preferences: z.array(z.string()),
    selectionProcess: z.string(),
  }),
  eligibility: z.array(z.string()),
  contact: z.object({
    phone: z.string(),
    email: z.string(),
    hours: z.string(),
  }),
  images: z.array(z.string()).optional(),
})

export type PropertyData = z.infer<typeof PropertySchema>

const rawProperties: PropertyData[] = [
  {
    id: "bossley-park-villas",
    slug: "bossley-park-independent-villas",
    type: ["SIL", "SDA"],
    title: "Villas in Bossley Park",
    location: "Bossley Park, NSW 2176",
    description: "Supported Independent Villas in heart of Bossley Park with 24/7 Care",
    detailedDescription: "# Accessible Accommodation in Sydney, Bossley Park\n\nSummit Housing offers spectacular Shared Supported Accommodation (SIL), Medium Term Accommodation (MTA) and Short Term Accommodation (STA) in Bossley Park NSW.\n\nSummit's Bossley Park shared supported accommodation includes two and three bedroom options. This is the perfect place to enjoy your stay your way, offering loads of super cool programs and Skills for Life modules to make your stay a fun, exciting and educational experience. Available for participants looking for Medium-term (MTA), Short-term (STA) or extended stays (SIL).\n\n## Property Features\n\n- Self-contained 2-3 bedrooms, each with TV, built-in robe, furniture and furnishings\n- Available for overnight stays, short stays or extended stays\n- Lovely home with a beautiful large green garden area\n\n## Amenities and Location\n\n- 24/7 staff support\n- Transport: 10 minute walk to public train station\n- Convenience: 5-minute walk to grocery store, chemist, Australia Post and medical centre\n- Community: Fun house to live in with friendly and active housemates and staff\n- Healthcare: Only 3km to the nearest hospital\n\n## Activities\n\n### Indoor Activities\n- Daily meals served in room (breakfast, lunch, dinner, morning and afternoon tea)\n- TV, games, and painting in the living room\n- Chess, board games, and puzzles\n- Barbecuing\n\n### Outdoor Activities\n- Hydrotherapy and aquatic physiotherapy\n- Amusement centre and adventure park\n- Nature reserve exploration\n- Casual dining and restaurants\n- Golf resorts and Aqua Golf\n- Bowling and fishing\n\n## Good to Know\n\n- Disability Day programs: 5km\n- GP: 1km\n- Health Centre: 1km\n- Community Civic Activities: 5km\n\n## Contact Information\n\nPlease enquire through email: Lucy@summitsda.com.au or Kate@summitsda.com.au\n\nOr call: 0450 016 874\n\nAvailable weekdays, Monday to Friday, 3-5pm",
    details: {
      bedrooms: 3,
      bathrooms: 2,
      toilets: 2,
      parking: 1,
      accessibleParking: 1,
      bedroomsAvailable: 1,
    },
    pricing: {
      rent: "$0 per week",
      notes: ["Plus Commonwealth Rent Assistance", "MTA Funding can be used for this property"],
    },
    availability: "2023-11-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Dishwasher" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Intercom" },
      { icon: "Home", label: "Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "Strong and Robust Construction" },
      { icon: "Wifi", label: "Broadband internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
    ],
    activities: {
      indoor: [
        "Breakfast, Lunch, Dinner every day served in room",
        "Morning and Afternoon teas served in room",
        "Watching TV or playing games with housemates",
        "Painting activities",
        "Playing Chess or variety of board games",
        "Puzzles in the living room",
        "Barbecuing",
      ],
      outdoor: [
        "Hydrotherapy, or aquatic physiotherapy",
        "Amusement centre",
        "Adventure park",
        "Nature Reserve",
        "Casual dining and restaurants",
        "Golf resorts, Aqua Golf",
        "Bowling",
        "Fishing",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Hospital", distance: "3km" },
      { icon: "Building2", label: "Grocery Store", distance: "5 min walk" },
      { icon: "Building2", label: "Public Transport", distance: "10 min walk" },
      { icon: "Building2", label: "Medical Centre", distance: "1km" },
      { icon: "Building2", label: "Disability Day programs", distance: "5km" },
    ],
    housemateInfo: {
      currentTenants: 2,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Prefer to spend time to themselves",
        "Want to share some costs (e.g., meals)",
      ],
      selectionProcess: "Housemates will be selected based on individual needs based assessment.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 3-5pm",
    },
    images: [
      "/properties/bosley-park/1.webp",
      "/properties/bosley-park/2.webp",
      "/properties/bosley-park/3.webp",
      "/properties/bosley-park/4.webp",
      "/properties/bosley-park/5.webp",
      "/properties/bosley-park/6.webp",
      "/properties/bosley-park/7.webp",
      "/properties/bosley-park/8.webp"
    ],
  },
  {
    id: "cronulla-apartments",
    slug: "cronulla-independent-apartments",
    type: ["SIL", "SDA", "MTA"],
    title: "Apartments in Cronulla",
    location: "Cronulla, NSW 2230",
    description: "Spectacular Independent Living Disability Accommodation in Sutherland Shire with 24/7 Care",
    detailedDescription: "# Accessible Accommodation in Cronulla, Sutherland Shire\n\nSummit Housing offers spectacular Shared Supported Accommodation (SIL), Medium Term Accommodation (MTA) and Short Term Accommodation (STA) in Sutherland Shire NSW.\n\nEden Ability's shared supported accommodation including one bedroom and two bedroom units for Medium-term (MTA), Short-term (STA) and extended stays (SIL) has just opened, newly refurbished with plenty of outdoor and indoor places to choose from. This is the perfect place to enjoy your stay your way. Choose from loads of super cool programs and our Skills for Life modules to make your stay a fun, exciting and educational experience.\n\n## Property Features\n\n- 10 separate self-contained 1 bedroom and 2 bedrooms units\n- Each unit has an en-suite, kitchenette, TV, built-in robe, furniture and furnishings\n- Available for overnight stays, short stays or extended stays\n- Lovely accommodation with garden, covered outdoor area, BBQ area, swimming pool and gym\n\n## Amenities and Location\n\n- Shared accommodation with lift access\n- 10 private suites with 10 bathrooms\n- Large shared living, gaming and barbecuing areas\n- 24/7 staff support\n- Beautiful garden\n- Transport: 2 minute walk to public train station\n- Convenience: 3-minute walk to grocery store, chemist, Australia Post and medical centre\n- Community: Fun house to live in with friendly and active housemates and staff\n- Healthcare: Only 5km to the nearest hospital\n\n## Activities\n\n### Indoor Activities\n- Daily meals served in room (breakfast, lunch, dinner, morning and afternoon tea)\n- Morning exercise in the gym\n- TV, games, and painting in the living room\n- Chess, board games, and puzzles\n- Barbecuing and swimming\n\n### Outdoor Activities\n- Hydrotherapy and aquatic physiotherapy\n- Amusement centre and adventure park\n- Nature reserve exploration\n- Casual dining and restaurants\n- Golf resorts and Aqua Golf\n- Bowling and fishing\n\n## Good to Know\n\n- Disability Day programs: 5km\n- GP: 2km\n- Health Centre: 3km\n- Community Civic Activities: 5km\n\n## Contact Information\n\nPlease enquire through email: Lucy@edenability.com.au or Kate@edenability.com.au\n\nOr call: 0450 016 874\n\nAvailable weekdays, Monday to Friday, 3-5pm",
    details: {
      bedrooms: 2,
      bathrooms: 2,
      toilets: 2,
      parking: 2,
      accessibleParking: 1,
      bedroomsAvailable: 2,
    },
    pricing: {
      rent: "$0 per week",
      notes: ["Plus Commonwealth Rent Assistance", "MTA Funding can be used for this property"],
    },
    availability: "2021-07-15",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Dishwasher" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Intercom" },
      { icon: "Home", label: "Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "Accessible Features" },
      { icon: "Building2", label: "Strong and Robust Construction" },
      { icon: "Wifi", label: "Broadband internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficiency Rating: Low" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift in building" },
    ],
    activities: {
      indoor: [
        "Breakfast, Lunch, Dinner every day served in room",
        "Morning and Afternoon teas served in room",
        "Morning Exercise in the gym",
        "Watching TV or playing games with housemates",
        "Playing Chess or variety of board games",
        "Puzzles in the living room",
        "Barbecuing",
        "Swimming",
      ],
      outdoor: [
        "Hydrotherapy, or aquatic physiotherapy",
        "Amusement centre",
        "Adventure park",
        "Nature Reserve",
        "Casual dining and restaurants",
        "Golf resorts, Aqua Golf",
        "Bowling",
        "Fishing",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Hospital", distance: "5km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Public Transport", distance: "2 min walk" },
      { icon: "Building2", label: "Medical Centre", distance: "3 min walk" },
      { icon: "Building2", label: "Disability Day programs", distance: "5km" },
      { icon: "Building2", label: "GP", distance: "2km" },
      { icon: "Building2", label: "Health Centre", distance: "3km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Want to share some costs (e.g., meals)",
      ],
      selectionProcess: "Housemates will be selected based on individual needs based assessment.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 3-5pm",
    },
    images: [
      "/properties/cronulla/1.webp",
      "/properties/cronulla/2.webp",
      "/properties/cronulla/3.webp",
      "/properties/cronulla/4.webp",
      "/properties/cronulla/5.webp",
    ],
  },
  {
    id: "sydney-cbd-apartments",
    slug: "sydney-cbd-independent-apartments",
    type: ["SIL", "SDA", "MTA"],
    title: "Apartments in Sydney CBD",
    location: "Sydney, NSW 2000",
    description: "Spectacular Independent Living Disability Accommodation in Sydney CBD with 24/7 Care",
    detailedDescription: "# Accessible Accommodation in Sydney CBD\n\nSummit Housing offers spectacular Shared Supported Accommodation (SIL), Medium Term Accommodation (MTA) and Short Term Accommodation (STA) in Sydney CBD.\n\nEden Ability's shared supported accommodation includes one bedroom and two bedroom units for Medium-term (MTA), Short-term (STA) and extended stays (SIL). Newly refurbished with plenty of outdoor and indoor spaces to choose from, this is the perfect place to enjoy your stay your way. Choose from loads of super cool programs and our Skills for Life modules to make your stay a fun, exciting and educational experience.\n\n## Property Features\n\n- 10 separate self-contained 1 bedroom and 2 bedrooms units\n- Each unit has an en-suite, kitchenette, TV, built-in robe, furniture and furnishings\n- Available for overnight stays, short stays or extended stays\n- Lovely accommodation with garden, covered outdoor area, BBQ area, swimming pool and gym\n\n## Amenities and Location\n\n- Shared accommodation with lift access\n- 10 private suites with 10 bathrooms\n- Large shared living, gaming and barbecuing areas\n- 24/7 staff support\n- Beautiful garden\n- Transport: 2 minute walk to public train station\n- Convenience: 3-minute walk to grocery store, chemist, Australia Post and medical centre\n- Community: Fun house to live in with friendly and active housemates and staff\n- Healthcare: Only 5km to the nearest hospital\n\n## Activities\n\n### Indoor Activities\n- Daily meals served in room (breakfast, lunch, dinner, morning and afternoon tea)\n- Morning exercise in the gym\n- TV, games, and painting in the living room\n- Chess, board games, and puzzles\n- Barbecuing and swimming\n\n### Outdoor Activities\n- Hydrotherapy and aquatic physiotherapy\n- Amusement centre and adventure park\n- Nature reserve exploration\n- Casual dining and restaurants\n- Golf resorts and Aqua Golf\n- Bowling and fishing\n\n## Good to Know\n\n- Disability Day programs: 5km\n- GP: 2km\n- Health Centre: 3km\n- Community Civic Activities: 5km\n\n## Contact Information\n\nPlease enquire through email: Lucy@edenability.com.au or Kate@edenability.com.au\n\nOr call: 0450 016 874\n\nAvailable weekdays, Monday to Friday, 3-5pm",
    details: {
      bedrooms: 2,
      bathrooms: 2,
      toilets: 2,
      parking: 2,
      accessibleParking: 1,
      bedroomsAvailable: 2,
    },
    pricing: {
      rent: "$0 per week",
      notes: ["Plus Commonwealth Rent Assistance", "MTA Funding can be used for this property"],
    },
    availability: "2021-07-15",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Dishwasher" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Intercom" },
      { icon: "Home", label: "Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "Accessible Features" },
      { icon: "Building2", label: "Strong and Robust Construction" },
      { icon: "Wifi", label: "Broadband internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficiency Rating: Low" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift in building" },
    ],
    activities: {
      indoor: [
        "Breakfast, Lunch, Dinner every day served in room",
        "Morning and Afternoon teas served in room",
        "Morning Exercise in the gym",
        "Watching TV or playing games with housemates",
        "Playing Chess or variety of board games",
        "Puzzles in the living room",
        "Barbecuing",
        "Swimming",
      ],
      outdoor: [
        "Hydrotherapy, or aquatic physiotherapy",
        "Amusement centre",
        "Adventure park",
        "Nature Reserve",
        "Casual dining and restaurants",
        "Golf resorts, Aqua Golf",
        "Bowling",
        "Fishing",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Hospital", distance: "5km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Public Transport", distance: "2 min walk" },
      { icon: "Building2", label: "Medical Centre", distance: "3 min walk" },
      { icon: "Building2", label: "Disability Day programs", distance: "5km" },
      { icon: "Building2", label: "GP", distance: "2km" },
      { icon: "Building2", label: "Health Centre", distance: "3km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Want to share some costs (e.g., meals)",
      ],
      selectionProcess: "Housemates will be selected based on individual needs based assessment.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 3-5pm",
    },
    images: [
      "/properties/sydney-cbd/1.webp",
      "/properties/sydney-cbd/2.webp",
      "/properties/sydney-cbd/3.webp",
      "/properties/sydney-cbd/4.webp",
      "/properties/sydney-cbd/5.webp",
      "/properties/sydney-cbd/6.webp",
      "/properties/sydney-cbd/7.webp",
      "/properties/sydney-cbd/8.webp",
      "/properties/sydney-cbd/9.webp",
    ],
  },
  {
    id: "chatswood-apartments",
    slug: "chatswood-independent-apartments",
    type: ["SIL", "SDA", "MTA"],
    title: "Apartments in Chatswood",
    location: "Chatswood, NSW 2067",
    description: "Spectacular Independent Living Disability Accommodation in Chatswood with 24/7 Care",
    detailedDescription: "# Accessible Accommodation in Chatswood\n\nSummit Housing offers spectacular Shared Supported Accommodation (SIL), Medium Term Accommodation (MTA) and Short Term Accommodation (STA) in Chatswood NSW.\n\nEden Ability's Chatswood shared supported accommodation includes one bedroom and two bedroom units for Medium-term (MTA), Short-term (STA) and extended stays (SIL). Newly refurbished with plenty of outdoor and indoor spaces to choose from, this is the perfect place to enjoy your stay your way. Choose from loads of super cool programs and our Skills for Life modules to make your stay a fun, exciting and educational experience.\n\n## Property Features\n\n- 10 separate self-contained 1 bedroom and 2 bedrooms units\n- Each unit has an en-suite, kitchenette, TV, built-in robe, furniture and furnishings\n- Available for overnight stays, short stays or extended stays\n- Lovely accommodation with garden, covered outdoor area, BBQ area, swimming pool and gym\n\n## Amenities and Location\n\n- Shared accommodation with lift access\n- 10 private suites with 10 bathrooms\n- Large shared living, gaming and barbecuing areas\n- 24/7 staff support\n- Beautiful garden\n- Transport: 2 minute walk to public train station\n- Convenience: 3-minute walk to grocery store, chemist, Australia Post and medical centre\n- Community: Fun house to live in with friendly and active housemates and staff\n- Healthcare: Only 5km to the nearest hospital\n- 563m to the nearest train station at Chatswood, Railway Street\n- 745m to the nearest bus stop and shopping centre\n\n## Activities\n\n### Indoor Activities\n- Daily meals served in room (breakfast, lunch, dinner, morning and afternoon tea)\n- Morning exercise in the gym\n- TV, games, and painting in the living room\n- Chess, board games, and puzzles\n- Barbecuing and swimming\n\n### Outdoor Activities\n- Hydrotherapy and aquatic physiotherapy\n- Amusement centre and adventure park\n- Nature reserve exploration\n- Casual dining and restaurants\n- Golf resorts and Aqua Golf\n- Bowling and fishing\n\n## Good to Know\n\n- Disability Day programs: 5km\n- GP: 2km\n- Health Centre: 3km\n- Community Civic Activities: 5km\n\n## Contact Information\n\nPlease enquire through email: Lucy@edenability.com.au or Kate@edenability.com.au\n\nOr call: 0450 016 874\n\nAvailable weekdays, Monday to Friday, 3-5pm",
    details: {
      bedrooms: 2,
      bathrooms: 2,
      toilets: 2,
      parking: 2,
      accessibleParking: 1,
      bedroomsAvailable: 2,
    },
    pricing: {
      rent: "$0 per week",
      notes: ["Plus Commonwealth Rent Assistance", "MTA Funding can be used for this property"],
    },
    availability: "2021-07-15",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Dishwasher" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Intercom" },
      { icon: "Home", label: "Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "Accessible Features" },
      { icon: "Building2", label: "Strong and Robust Construction" },
      { icon: "Wifi", label: "Broadband internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficiency Rating: Low" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift in building" },
    ],
    activities: {
      indoor: [
        "Breakfast, Lunch, Dinner every day served in room",
        "Morning and Afternoon teas served in room",
        "Morning Exercise in the gym",
        "Watching TV or playing games with housemates",
        "Playing Chess or variety of board games",
        "Puzzles in the living room",
        "Barbecuing",
        "Swimming",
      ],
      outdoor: [
        "Hydrotherapy, or aquatic physiotherapy",
        "Amusement centre",
        "Adventure park",
        "Nature Reserve",
        "Casual dining and restaurants",
        "Golf resorts, Aqua Golf",
        "Bowling",
        "Fishing",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Hospital", distance: "5km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Train Station", distance: "563m" },
      { icon: "Building2", label: "Bus Stop", distance: "745m" },
      { icon: "Building2", label: "Shopping Centre", distance: "745m" },
      { icon: "Building2", label: "Medical Centre", distance: "3 min walk" },
      { icon: "Building2", label: "Disability Day programs", distance: "5km" },
      { icon: "Building2", label: "GP", distance: "2km" },
      { icon: "Building2", label: "Health Centre", distance: "3km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Want to share some costs (e.g., meals)",
      ],
      selectionProcess: "Housemates will be selected based on individual needs based assessment.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 3-5pm",
    },
    images: [
      "/properties/chatswood/1.webp",
      "/properties/chatswood/2.webp",
      "/properties/chatswood/3.webp",
      "/properties/chatswood/4.webp",
      "/properties/chatswood/5.webp",
      "/properties/chatswood/6.webp",
    ],
  },
  {
    id: "bondi-apartments",
    slug: "bondi-independent-apartments",
    type: ["SIL", "SDA", "MTA"],
    title: "Apartments in Bondi",
    location: "Bondi, NSW 2022",
    description: "Spectacular Independent Living Disability Accommodation in Bondi with 24/7 Care",
    detailedDescription: "# Accessible Accommodation in Bondi Junction\n\nSummit Housing offers spectacular Shared Supported Accommodation (SIL), Medium Term Accommodation (MTA) and Short Term Accommodation (STA) in Bondi NSW.\n\nEden Ability's Bondi shared supported accommodation includes one bedroom and two bedroom units for Medium-term (MTA), Short-term (STA) and extended stays (SIL). Newly refurbished with plenty of outdoor and indoor spaces to choose from, this is the perfect place to enjoy your stay your way. Choose from loads of super cool programs and our Skills for Life modules to make your stay a fun, exciting and educational experience.\n\n## Property Features\n\n- 10 separate self-contained 1 bedroom and 2 bedrooms units\n- Each unit has an en-suite, kitchenette, TV, built-in robe, furniture and furnishings\n- Available for overnight stays, short stays or extended stays\n- Lovely accommodation with garden, covered outdoor area, BBQ area, swimming pool and gym\n\n## Amenities and Location\n\n- Shared accommodation with lift access\n- 10 private suites with 10 bathrooms\n- Large shared living, gaming and barbecuing areas\n- 24/7 staff support\n- Beautiful garden\n- Transport: 2 minute walk to public train station\n- Convenience: 3-minute walk to grocery store, chemist, Australia Post and medical centre\n- Community: Fun house to live in with friendly and active housemates and staff\n- Healthcare: Only 5km to the nearest hospital\n- 745m to the nearest train station at Bondi Junction\n- 745m to the nearest bus stop and shopping centre\n\n## Activities\n\n### Indoor Activities\n- Daily meals served in room (breakfast, lunch, dinner, morning and afternoon tea)\n- Morning exercise in the gym\n- TV, games, and painting in the living room\n- Chess, board games, and puzzles\n- Barbecuing and swimming\n\n### Outdoor Activities\n- Hydrotherapy and aquatic physiotherapy\n- Amusement centre and adventure park\n- Nature reserve exploration\n- Casual dining and restaurants\n- Golf resorts and Aqua Golf\n- Bowling and fishing\n\n## Good to Know\n\n- Disability Day programs: 5km\n- GP: 2km\n- Health Centre: 3km\n- Community Civic Activities: 5km\n\n## Contact Information\n\nPlease enquire through email: Lucy@edenability.com.au or Kate@edenability.com.au\n\nOr call: 0450 016 874\n\nAvailable weekdays, Monday to Friday, 3-5pm",
    details: {
      bedrooms: 2,
      bathrooms: 2,
      toilets: 2,
      parking: 2,
      accessibleParking: 1,
      bedroomsAvailable: 2,
    },
    pricing: {
      rent: "$0 per week",
      notes: ["Plus Commonwealth Rent Assistance", "MTA Funding can be used for this property"],
    },
    availability: "2021-07-15",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Dishwasher" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Intercom" },
      { icon: "Home", label: "Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "Accessible Features" },
      { icon: "Building2", label: "Strong and Robust Construction" },
      { icon: "Wifi", label: "Broadband internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficiency Rating: Low" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift in building" },
    ],
    activities: {
      indoor: [
        "Breakfast, Lunch, Dinner every day served in room",
        "Morning and Afternoon teas served in room",
        "Morning Exercise in the gym",
        "Watching TV or playing games with housemates",
        "Playing Chess or variety of board games",
        "Puzzles in the living room",
        "Barbecuing",
        "Swimming",
      ],
      outdoor: [
        "Hydrotherapy, or aquatic physiotherapy",
        "Amusement centre",
        "Adventure park",
        "Nature Reserve",
        "Casual dining and restaurants",
        "Golf resorts, Aqua Golf",
        "Bowling",
        "Fishing",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Hospital", distance: "5km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Train Station", distance: "745m" },
      { icon: "Building2", label: "Bus Stop", distance: "745m" },
      { icon: "Building2", label: "Shopping Centre", distance: "745m" },
      { icon: "Building2", label: "Medical Centre", distance: "3 min walk" },
      { icon: "Building2", label: "Disability Day programs", distance: "5km" },
      { icon: "Building2", label: "GP", distance: "2km" },
      { icon: "Building2", label: "Health Centre", distance: "3km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Want to share some costs (e.g., meals)",
      ],
      selectionProcess: "Housemates will be selected based on individual needs based assessment.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 3-5pm",
    },
    images: [
      "/properties/bondi/1.webp",
      "/properties/bondi/2.webp",
      "/properties/bondi/3.webp",
      "/properties/bondi/4.webp",
      "/properties/bondi/5.webp",
      "/properties/bondi/6.webp",
      "/properties/bondi/7.webp",
      "/properties/bondi/8.webp",
      "/properties/bondi/9.webp",
      "/properties/bondi/10.webp",
    ],
  },
  {
    id: "mittagong-apartments",
    slug: "mittagong-independent-living",
    type: ["SIL", "SDA", "MTA"],
    title: "Apartments in Mittagong",
    location: "Mittagong, NSW 2575",
    description: "Spectacular Supported Independent Living Accommodation in Mittagong with 24/7 Care",
    detailedDescription: "# Accessible Accommodation in Mittagong\n\nSummit Housing offers spectacular Shared Supported Accommodation (SIL), Medium Term Accommodation (MTA) and Short Term Accommodation (STA) in Mittagong NSW.\n\nEden Ability's Mittagong shared supported accommodation includes suites for Medium-term (MTA), Short-term (STA) and extended stays (SIL). Newly refurbished with plenty of outdoor and indoor spaces to choose from, this is the perfect place to enjoy your stay your way. Choose from loads of super cool programs and our Skills for Life modules to make your stay a fun, exciting and educational experience.\n\n## Property Features\n\n- 2 bedroom, 3 bedroom and four bedroom units\n- Each unit has an en-suite, kitchenette, TV, built-in robe, furniture and furnishings\n- Available for overnight stays, short stays or extended stays\n- Lovely home with garden, outdoor area, and BBQ area\n- Beautiful large green area right at the back of the house\n\n## Amenities and Location\n\n- Shared accommodation with ramp access\n- Comfortable outdoor and indoor sitting areas\n- 24/7 staff support\n- Beautiful garden\n- Transport: 1 minute walk to public train station\n- Convenience: 1-minute walk to grocery store, chemist, Australia Post and medical centre\n- Train station: Mittagong train station just a 1 min walk away\n- Community: Fun house to live in with friendly and active housemates and staff\n- Healthcare: Only 2km to the nearest hospital\n- 283m to the nearest train station, shopping centre, hospital, park, and medical practice (GP)\n\n## Activities\n\n### Indoor Activities\n- Daily meals served in room (breakfast, lunch, dinner, morning and afternoon tea)\n- TV, games, and painting with housemates\n- Chess, board games, and puzzles in the communal area\n- Barbecuing\n\n### Outdoor Activities\n- Hydrotherapy and aquatic physiotherapy\n- Amusement centre and adventure park\n- Nature reserve exploration\n- Casual dining and restaurants\n- Golf resorts and Aqua Golf\n- Bowling and fishing\n\n## Good to Know\n\n- Disability Day programs: 1km\n- GP: 1km\n- Health Centre: 1km\n- Community Civic Activities: 1km\n\n## Contact Information\n\nIf you would like to register your interest and be part of this exciting opportunity, please contact Eden Ability on 0451 437 451 or email info@edenability.com.au.\n\nIf you think you would be a great match for this amazing accommodation opportunity, please call to arrange a meet and greet with the current applicants.",
    details: {
      bedrooms: 2,
      bathrooms: 2,
      toilets: 2,
      parking: 2,
      accessibleParking: 1,
      bedroomsAvailable: 2,
    },
    pricing: {
      rent: "$0 per week",
      notes: ["Plus Commonwealth Rent Assistance", "MTA Funding can be used for this property"],
    },
    availability: "2021-04-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Dishwasher" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Intercom" },
      { icon: "Home", label: "Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "Accessible Features" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Lightbulb", label: "Energy Efficiency Rating: High" },
    ],
    activities: {
      indoor: [
        "Breakfast, Lunch, Dinner every day served in room",
        "Morning and Afternoon teas served in room",
        "Watching TV or playing games with housemates",
        "Playing Chess or variety of board games",
        "Puzzles in the communal area",
        "Barbecuing",
      ],
      outdoor: [
        "Hydrotherapy, or aquatic physiotherapy",
        "Amusement centre",
        "Adventure park",
        "Nature Reserve",
        "Casual dining and restaurants",
        "Golf resorts, Aqua Golf",
        "Bowling",
        "Fishing",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Hospital", distance: "2km" },
      { icon: "Building2", label: "Grocery Store", distance: "1 min walk" },
      { icon: "Building2", label: "Train Station", distance: "283m" },
      { icon: "Building2", label: "Shopping Centre", distance: "283m" },
      { icon: "Building2", label: "Hospital", distance: "283m" },
      { icon: "Building2", label: "Park", distance: "283m" },
      { icon: "Building2", label: "Medical Practice (GP)", distance: "283m" },
      { icon: "Building2", label: "Disability Day programs", distance: "1km" },
      { icon: "Building2", label: "Health Centre", distance: "1km" },
      { icon: "Building2", label: "Community Civic Activities", distance: "1km" },
    ],
    housemateInfo: {
      currentTenants: 6,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Want to share some costs (e.g., meals)",
      ],
      selectionProcess: "Housemates will be selected based on individual needs based assessment.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 9am-5pm",
    },
    images: [
      "/properties/mittagong/1.webp",
      "/properties/mittagong/2.webp",
      "/properties/mittagong/3.webp",
      "/properties/mittagong/4.webp",
      "/properties/mittagong/5.webp",
      "/properties/mittagong/6.webp",
    ],
  },
  {
    id: "mascot-apartments",
    slug: "mascot-accessible-units",
    type: ["SIL", "SDA", "MTA"],
    title: "Accessible Units in Mascot",
    location: "Mascot, NSW 2020",
    description: "Spectacular Accessible Units in Mascot with Access to 24/7 Support",
    detailedDescription: `# Accessible Accommodation in Mascot

Summit Housing offers spectacular Shared Supported Accommodation (SIL), Medium Term Accommodation (MTA) and Short Term Accommodation (STA) in Mascot NSW.

Eden Ability's Mascot shared supported accommodation includes one bedroom and two bedroom units suitable for Medium-term (MTA), Short-term (STA) and extended stays (SIL). Newly refurbished with modern amenities and accessibility features.

## Property Features

- 10 separate self-contained units with accessible features for mobility difficulties
- Large living spaces with maximum circulation area
- Door width and accessible features for wheelchairs
- Hospital beds, hoists and other mobility aids support
- Each unit has an en-suite, kitchenette, TV, built-in robe
- Fully furnished with quality furniture and furnishings

## Amenities and Location

- Shared accommodation with lift access
- 10 private suites with large shared living areas
- 24/7 staff support
- Beautiful garden and rooftop area
- Transport: 2 minute walk to public train station
- Convenience: 3-minute walk to grocery store, chemist, and medical centre
- Community: Fun house to live in with friendly and active housemates and staff
- Healthcare: Hospital in close proximity

## Activities

### Indoor Activities
- Daily meals served in room (breakfast, lunch, dinner, morning and afternoon tea)
- Morning exercise in the gym
- TV, games, and entertainment in communal areas
- Chess, board games, and puzzles
- Barbecuing and swimming

### Outdoor Activities
- Hydrotherapy and aquatic physiotherapy
- Amusement centre
- Casual dining and restaurants
- Golf resorts and Aqua Golf
- Bowling and fishing
- Walking distance to Art Graphic clubs

## Good to Know

- Disability Day programs: 5 min away
- GP: 5 min away
- Health Centre: 3km
- Community Civic Activities: 5km
- Shopping Centre: 1km

## Contact Information

Please enquire through email: Eliot@summitsda.com.au

Or call: 0450 016 874

Available weekdays, Monday to Friday, 3-5pm`,
    details: {
      bedrooms: 1,
      bathrooms: 1,
      toilets: 1,
      parking: 1,
      accessibleParking: 1,
      bedroomsAvailable: 1,
    },
    pricing: {
      rent: "$0 per week",
      notes: ["Plus Commonwealth Rent Assistance", "MTA Funding can be used for this property"],
    },
    availability: "2023-11-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Dishwasher" },
      { icon: "DoorOpen", label: "Automatic Doors" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Intercom" },
      { icon: "Home", label: "Pets allowed" },
      { icon: "Home", label: "Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "Accessible Features" },
      { icon: "Building2", label: "Strong and Robust Construction" },
      { icon: "Wifi", label: "Broadband internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Flame", label: "Emergency Power Backup" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficiency Rating: Low" },
      { icon: "Lift", label: "Lift in building" },
    ],
    activities: {
      indoor: [
        "Breakfast, Lunch, Dinner every day served in room",
        "Morning and Afternoon teas served in room",
        "Morning Exercise in the gym",
        "Watching TV or playing games in communal areas",
        "Playing Chess or variety of board games, puzzles",
        "Barbecuing",
        "Swimming",
      ],
      outdoor: [
        "Hydrotherapy, or aquatic physiotherapy",
        "Amusement centre",
        "Casual dining and restaurants",
        "Golf resorts, Aqua Golf",
        "Bowling",
        "Fishing",
        "Walking distance to Art Graphic clubs",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Hospital", distance: "Close proximity" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Train Station", distance: "5 min walk" },
      { icon: "Building2", label: "Shopping Centre", distance: "1km" },
      { icon: "Building2", label: "Medical Centre", distance: "3 min walk" },
      { icon: "Building2", label: "Disability Day programs", distance: "5 min" },
      { icon: "Building2", label: "GP", distance: "5 min" },
      { icon: "Building2", label: "Health Centre", distance: "3km" },
      { icon: "Building2", label: "Community Civic Activities", distance: "5 km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Want to share some costs (e.g., meals)",
      ],
      selectionProcess: "Housemates will be selected based on individual needs based assessment.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 3-5pm",
    },
    images: [
      "/properties/mascot/1.webp",
      "/properties/mascot/2.webp",
      "/properties/mascot/3.webp",
      "/properties/mascot/4.webp",
      "/properties/mascot/5.webp",
      "/properties/mascot/6.webp",
      "/properties/mascot/7.webp",
      "/properties/mascot/8.webp",
      "/properties/mascot/9.webp",
      "/properties/mascot/10.webp",
      "/properties/mascot/11.webp",
    ],
  },
  {
    id: "parramatta-apartments",
    slug: "parramatta-independent-living",
    type: ["SIL", "SDA", "MTA"],
    title: "Apartments in Parramatta",
    location: "Parramatta, NSW 2150",
    description: "Spectacular Independent Living Accommodation in Parramatta with 24/7 Care",
    detailedDescription: "# Accessible Accommodation in Parramatta\n\nSummit Housing offers spectacular Shared Supported Accommodation (SIL), Medium Term Accommodation (MTA) and Short Term Accommodation (STA) in Parramatta NSW.\n\nEden Ability's Parramatta shared supported accommodation includes one bedroom and two bedroom units for Medium-term (MTA), Short-term (STA) and extended stays (SIL). Newly refurbished with plenty of outdoor and indoor spaces to choose from, this is the perfect place to enjoy your stay your way. Choose from loads of super cool programs and our Skills for Life modules to make your stay a fun, exciting and educational experience.\n\n## Property Features\n\n- 10 separate self-contained 1 bedroom and 2 bedrooms units\n- Each unit has an en-suite, kitchenette, TV, built-in robe, furniture and furnishings\n- Available for overnight stays, short stays or extended stays\n- Lovely home with garden, covered outdoor area, BBQ area, swimming pool and gym\n- Beautiful large green area right at the back of the house\n\n## Amenities and Location\n\n- Shared accommodation with lift access\n- 10 private suites with 10 bathrooms\n- Large shared living, gaming and barbecuing areas\n- 24/7 staff support\n- Beautiful garden\n- Transport: 2 minute walk to public train station\n- Convenience: 3-minute walk to grocery store, chemist, Australia Post and medical centre\n- Train station: The closest train station is Parramatta, a 5-min drive away\n- Community: Fun house to live in with friendly and active housemates and staff\n- Healthcare: Only 5km to the nearest hospital\n\n## Activities\n\n### Indoor Activities\n- Daily meals served in room (breakfast, lunch, dinner, morning and afternoon tea)\n- Morning exercise in the gym\n- TV, games, and painting in the living room\n- Chess, board games, and puzzles\n- Barbecuing and swimming\n\n### Outdoor Activities\n- Hydrotherapy and aquatic physiotherapy\n- Amusement centre and adventure park\n- Nature reserve exploration\n- Casual dining and restaurants\n- Golf resorts and Aqua Golf\n- Bowling and fishing\n\n## Good to Know\n\n- Disability Day programs: 5km\n- GP: 1km\n- Health Centre: 3km\n- Community Civic Activities: 5km\n\n## Contact Information\n\nPlease enquire through email: Lucy@edenability.com.au or Kate@edenability.com.au\n\nOr call: 0450 016 874\n\nAvailable weekdays, Monday to Friday, 3-5pm",
    details: {
      bedrooms: 2,
      bathrooms: 2,
      toilets: 2,
      parking: 2,
      accessibleParking: 1,
      bedroomsAvailable: 2,
    },
    pricing: {
      rent: "$0 per week",
      notes: ["Plus Commonwealth Rent Assistance", "MTA Funding can be used for this property"],
    },
    availability: "2020-09-08",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Dishwasher" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Intercom" },
      { icon: "Home", label: "Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "Accessible Features" },
      { icon: "Building2", label: "Strong and Robust Construction" },
      { icon: "Wifi", label: "Broadband internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficiency Rating: Low" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift in building" },
    ],
    activities: {
      indoor: [
        "Breakfast, Lunch, Dinner every day served in room",
        "Morning and Afternoon teas served in room",
        "Morning Exercise in the gym",
        "Watching TV or playing games with housemates",
        "Playing Chess or variety of board games",
        "Puzzles in the living room",
        "Barbecuing",
        "Swimming",
      ],
      outdoor: [
        "Hydrotherapy, or aquatic physiotherapy",
        "Amusement centre",
        "Adventure park",
        "Nature Reserve",
        "Casual dining and restaurants",
        "Golf resorts, Aqua Golf",
        "Bowling",
        "Fishing",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Hospital", distance: "5km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Train Station", distance: "5 min drive" },
      { icon: "Building2", label: "Medical Centre", distance: "3 min walk" },
      { icon: "Building2", label: "Park", distance: "105km" },
      { icon: "Building2", label: "Disability Day programs", distance: "5km" },
      { icon: "Building2", label: "GP", distance: "1km" },
      { icon: "Building2", label: "Health Centre", distance: "3km" },
      { icon: "Building2", label: "Community Civic Activities", distance: "5km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Want to share some costs (e.g., meals)",
      ],
      selectionProcess: "Housemates will be selected based on individual needs based assessment.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 3-5pm",
    },
    images: [
      "/properties/parramatta/1.webp",
      "/properties/parramatta/2.webp",
      "/properties/parramatta/3.webp",
      "/properties/parramatta/4.webp",
      "/properties/parramatta/5.webp",
      "/properties/parramatta/6.webp",
      "/properties/parramatta/7.webp",
      "/properties/parramatta/8.webp",
      "/properties/parramatta/9.webp",
      "/properties/parramatta/10.webp",
      "/properties/parramatta/11.webp",
      "/properties/parramatta/12.webp",
      "/properties/parramatta/13.webp",
      "/properties/parramatta/14.webp",
    ],
  },
  {
    id: "north-ryde-apartments",
    slug: "macquarie-park-independent-living",
    type: ["SIL", "SDA", "MTA"],
    title: "Apartments in Macquarie Park",
    location: "North Ryde, NSW 2113",
    description: "Spectacular Independent Living Accommodation in Macquarie Park with 24/7 Care",
    detailedDescription: "# Accessible Accommodation in Macquarie Park\n\nSummit Housing offers spectacular Shared Supported Accommodation (SIL), Medium Term Accommodation (MTA) and Short Term Accommodation (STA) in North Ryde NSW.\n\nEden Ability's North Ryde shared supported accommodation includes one bedroom and two bedroom units for Medium-term (MTA), Short-term (STA) and extended stays (SIL). Newly refurbished with plenty of outdoor and indoor spaces to choose from, this is the perfect place to enjoy your stay your way. Choose from loads of super cool programs and our Skills for Life modules to make your stay a fun, exciting and educational experience.\n\n## Property Features\n\n- 10 separate self-contained 1 bedroom and 2 bedrooms units\n- Each unit has an en-suite, kitchenette, TV, built-in robe, furniture and furnishings\n- Available for overnight stays, short stays or extended stays\n- Lovely home with garden, covered outdoor area, BBQ area, swimming pool and gym\n- Beautiful large green area right at the back of the house\n\n## Amenities and Location\n\n- Shared accommodation with lift access\n- 10 private suites with 10 bathrooms\n- Large shared living, gaming and barbecuing areas\n- 24/7 staff support\n- Beautiful garden\n- Transport: 7 minute walk to public train station\n- Convenience: 3-minute walk to grocery store, chemist, Australia Post and medical centre\n- Train station: The closest train station is North Ryde, a 5-min drive away\n- Community: Fun house to live in with friendly and active housemates and staff\n- Healthcare: Only 5km to the nearest hospital\n- 2km to Macquarie Shopping Centre\n\n## Activities\n\n### Indoor Activities\n- Daily meals served in room (breakfast, lunch, dinner, morning and afternoon tea)\n- Morning exercise in the gym\n- TV, games, and painting in the living room\n- Chess, board games, and puzzles\n- Barbecuing and swimming\n\n### Outdoor Activities\n- Hydrotherapy and aquatic physiotherapy\n- Amusement centre and adventure park\n- Nature reserve exploration\n- Casual dining and restaurants\n- Golf resorts and Aqua Golf\n- Bowling and fishing\n\n## Good to Know\n\n- Disability Day programs: 5km\n- GP: 1km\n- Health Centre: 3km\n- Community Civic Activities: 5km\n\n## Contact Information\n\nPlease enquire through email: Lucy@edenability.com.au or Kate@edenability.com.au\n\nOr call: 0450 016 874\n\nAvailable weekdays, Monday to Friday, 3-5pm",
    details: {
      bedrooms: 2,
      bathrooms: 2,
      toilets: 2,
      parking: 2,
      accessibleParking: 1,
      bedroomsAvailable: 2,
    },
    pricing: {
      rent: "$0 per week",
      notes: ["Plus Commonwealth Rent Assistance", "MTA Funding can be used for this property"],
    },
    availability: "2020-09-08",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Dishwasher" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Intercom" },
      { icon: "Home", label: "Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "Accessible Features" },
      { icon: "Building2", label: "Strong and Robust Construction" },
      { icon: "Wifi", label: "Broadband internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficiency Rating: Low" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift in building" },
    ],
    activities: {
      indoor: [
        "Breakfast, Lunch, Dinner every day served in room",
        "Morning and Afternoon teas served in room",
        "Morning Exercise in the gym",
        "Watching TV or playing games with housemates",
        "Playing Chess or variety of board games",
        "Puzzles in the living room",
        "Barbecuing",
        "Swimming",
      ],
      outdoor: [
        "Hydrotherapy, or aquatic physiotherapy",
        "Amusement centre",
        "Adventure park",
        "Nature Reserve",
        "Casual dining and restaurants",
        "Golf resorts, Aqua Golf",
        "Bowling",
        "Fishing",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Hospital", distance: "5km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Train Station", distance: "7 min walk" },
      { icon: "Building2", label: "Shopping Centre", distance: "2km" },
      { icon: "Building2", label: "Medical Centre", distance: "3 min walk" },
      { icon: "Building2", label: "Park", distance: "105km" },
      { icon: "Building2", label: "Disability Day programs", distance: "5km" },
      { icon: "Building2", label: "GP", distance: "1km" },
      { icon: "Building2", label: "Health Centre", distance: "3km" },
      { icon: "Building2", label: "Community Civic Activities", distance: "5km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Want to socialise and spend time together",
        "Enjoy an active and social home",
        "Want to share some costs (e.g., meals)",
      ],
      selectionProcess: "Housemates will be selected based on individual needs based assessment.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 3-5pm",
    },
    images: [
      "/properties/north-ryde/1.webp",
      "/properties/north-ryde/2.webp",
      "/properties/north-ryde/3.webp",
      "/properties/north-ryde/4.webp",
      "/properties/north-ryde/5.webp",
    ],
  },
]

export const properties = PropertySchema.array().parse(rawProperties)

export function generatePropertySEO(property: PropertyData): PropertySEOData {
  const plainTextDescription = property.metaDescription || 
    (property.description.length > 155 
      ? property.description.substring(0, 155) + '...' 
      : property.description);
  
  return {
    metaTitle: `${property.title} | Summit`,
    metaDescription: plainTextDescription,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      name: property.title,
      description: property.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: property.location,
        addressCountry: "AU"
      },
      image: property.images?.[0] || "/placeholder.svg",
      numberOfRooms: property.details.bedrooms,
      amenityFeature: property.features.map(f => ({
        "@type": "LocationFeatureSpecification",
        name: f.label
      })),
      accommodationCategory: property.type,
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: property.details.bedrooms
      }
    }
  }
}

export function getProperties() {
  if (process.env.NODE_ENV === 'development') {
    console.log('Property images:');
    properties.forEach(property => {
      console.log(`${property.title}: ${JSON.stringify(property.images)}`);
    });
  }
  return properties;
}

