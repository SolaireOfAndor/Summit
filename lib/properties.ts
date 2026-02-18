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

const SUMMIT_SERVICE_NOTE = `\n\n> **Looking for something different?** Summit SDA is not limited to the properties listed here. Our primary service is Supported Independent Living (SIL), and we work directly with each participant to find the perfect home based on their unique needs, goals, and preferences. Whether you require a specific location, particular accessibility features, or a tailored support arrangement, our team will help you find the most suitable housing with optimal support. Contact us today to start the conversation.\n\n`

const rawProperties: PropertyData[] = [
  {
    id: "bossley-park-villas",
    slug: "bossley-park-independent-villas",
    type: ["SIL", "SDA"],
    title: "Villas in Bossley Park",
    location: "Bossley Park, NSW 2176",
    description: "Supported Independent Living (SIL) villas in the heart of Bossley Park, offering personalised 24/7 care in a welcoming residential neighbourhood.",
    detailedDescription: `# Supported Independent Living in Bossley Park

Summit Housing provides quality Supported Independent Living (SIL) and Specialist Disability Accommodation (SDA) in Bossley Park, a friendly residential suburb in Western Sydney.

Our Bossley Park villas offer two and three bedroom layouts designed for comfortable, supported living. Each villa provides a home-like environment where participants can build their independence while receiving tailored 24/7 support from our experienced team.
${SUMMIT_SERVICE_NOTE}
## Property Highlights

- Self-contained 2–3 bedroom villas with private and shared living spaces
- Each bedroom includes a TV, built-in wardrobe, and quality furnishings
- Beautiful garden and outdoor areas for relaxation
- Suitable for long-term SIL placements and medium-term stays

## Support and Amenities

- 24/7 on-site support staff
- Personalised care plans tailored to each participant
- Communal living areas for socialising with housemates
- Fully equipped kitchen and laundry facilities
- Secure property with intercom access

## Location Benefits

Bossley Park is a quiet, family-friendly suburb with easy access to essential services. You will find grocery stores, a chemist, Australia Post, and a medical centre all within a short walk. Public transport connections via bus link you to Fairfield Station and the wider Sydney network. Fairfield Hospital is approximately 5 km away, and there are several disability day programs and community activities nearby.

## Activities

### Indoor Activities
- Shared meals and social dining with housemates
- TV, games, and arts and crafts in communal areas
- Board games, puzzles, and card games
- Cooking and life skills development

### Outdoor Activities
- Visits to local parks and green spaces
- Community outings and social events
- Casual dining at nearby restaurants
- Bowling, swimming, and recreational activities
- Nature walks and exploration

## Contact Information

For enquiries or to arrange a viewing, please get in touch:

**Email:** Eliot@summitsda.com.au
**Phone:** 0450 016 874

We are available on weekdays, Monday to Friday, 9am–5pm.`,
    metaDescription: "Supported Independent Living (SIL) villas in Bossley Park, NSW. Summit Housing provides 24/7 personalised disability support in a comfortable residential setting.",
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
      notes: ["Funded through NDIS SIL and SDA packages", "Commonwealth Rent Assistance may apply"],
    },
    availability: "2025-01-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Fully Equipped Kitchen" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "TreePine", label: "Garden and Outdoor Area" },
      { icon: "Lock", label: "Secure Intercom Access" },
      { icon: "Home", label: "Fully Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "Robust SDA Construction" },
      { icon: "Wifi", label: "High-Speed Internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
    ],
    activities: {
      indoor: [
        "Shared meals and social dining with housemates",
        "TV, games, and arts and crafts in communal areas",
        "Board games, puzzles, and card games",
        "Cooking and life skills workshops",
        "Music and relaxation sessions",
      ],
      outdoor: [
        "Visits to local parks and green spaces",
        "Community outings and social events",
        "Casual dining at nearby restaurants",
        "Bowling and recreational activities",
        "Nature walks and exploration",
        "Swimming and aquatic therapy",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Fairfield Hospital", distance: "5km" },
      { icon: "Building2", label: "Grocery Store", distance: "5 min walk" },
      { icon: "Building2", label: "Bus Stop", distance: "3 min walk" },
      { icon: "Building2", label: "Medical Centre", distance: "1km" },
      { icon: "Building2", label: "Disability Day Programs", distance: "5km" },
      { icon: "Building2", label: "Chemist and Post Office", distance: "5 min walk" },
    ],
    housemateInfo: {
      currentTenants: 2,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Enjoy socialising and spending time with housemates",
        "Like an active and supportive home environment",
        "Prefer quiet time and personal space",
        "Happy to share meals and communal activities",
      ],
      selectionProcess: "Housemates are carefully matched based on individual needs, preferences, and compatibility assessments.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding for SIL and/or SDA"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 9am-5pm",
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
    description: "Supported Independent Living (SIL) apartments in the Sutherland Shire, offering a coastal lifestyle with 24/7 personalised support.",
    detailedDescription: `# Supported Independent Living in Cronulla

Summit Housing provides quality Supported Independent Living (SIL), Specialist Disability Accommodation (SDA), and Medium Term Accommodation (MTA) in Cronulla, one of Sydney's most desirable beachside suburbs in the Sutherland Shire.

Our Cronulla apartments offer self-contained one and two bedroom units that have been thoughtfully designed and refurbished to meet SDA standards. Participants enjoy a coastal lifestyle with the freedom to build independence while receiving tailored 24/7 support.
${SUMMIT_SERVICE_NOTE}
## Property Highlights

- Self-contained 1 and 2 bedroom units with modern finishes
- Each unit includes an ensuite, kitchenette, TV, built-in wardrobe, and quality furnishings
- Shared amenities including garden, covered outdoor area, BBQ, swimming pool, and gym
- Lift access throughout the building for full accessibility
- Suitable for SIL, MTA, and short-term stays

## Support and Amenities

- 24/7 on-site support staff
- Personalised care plans for every participant
- Large shared living and social areas
- Fully equipped communal kitchen and individual kitchenettes
- Secure building with intercom entry

## Location Benefits

Cronulla is a vibrant coastal suburb known for its beautiful beaches, relaxed atmosphere, and excellent amenities. Cronulla train station is just a short walk away, providing direct access to the Sydney rail network. You will find grocery stores, a chemist, cafes, and medical services all within walking distance. Sutherland Hospital is approximately 5 km away, and the area offers a wide range of community activities and services.

## Activities

### Indoor Activities
- Shared meals and social dining
- Morning exercise sessions in the gym
- TV, games, and creative activities in communal areas
- Board games, puzzles, and social events
- Swimming in the on-site pool

### Outdoor Activities
- Beach walks along Cronulla Beach and the coastal walk
- Community outings and local events
- Dining at beachside cafes and restaurants
- Bowling and recreational activities
- Aquatic therapy and hydrotherapy
- Fishing and nature exploration

## Contact Information

For enquiries or to arrange a viewing, please get in touch:

**Email:** Eliot@summitsda.com.au
**Phone:** 0450 016 874

We are available on weekdays, Monday to Friday, 9am–5pm.`,
    metaDescription: "Supported Independent Living (SIL) apartments in Cronulla, Sutherland Shire. Summit Housing offers 24/7 disability support in a beachside setting with modern accessible units.",
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
      notes: ["Funded through NDIS SIL, SDA, and MTA packages", "Commonwealth Rent Assistance may apply"],
    },
    availability: "2025-01-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Kitchenette" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study Area" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Garden and Outdoor Area" },
      { icon: "Lock", label: "Secure Intercom Access" },
      { icon: "Home", label: "Fully Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "SDA-Compliant Design" },
      { icon: "Building2", label: "Robust Construction" },
      { icon: "Wifi", label: "High-Speed Internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficient" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift Access" },
    ],
    activities: {
      indoor: [
        "Shared meals and social dining with housemates",
        "Morning exercise sessions in the gym",
        "TV, games, and creative activities in communal areas",
        "Board games, puzzles, and social events",
        "Swimming in the on-site pool",
        "Cooking and life skills development",
      ],
      outdoor: [
        "Beach walks along Cronulla Beach and the coastal walk",
        "Community outings and local events",
        "Dining at beachside cafes and restaurants",
        "Bowling and recreational activities",
        "Aquatic therapy and hydrotherapy",
        "Fishing and nature exploration",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Sutherland Hospital", distance: "5km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Cronulla Train Station", distance: "5 min walk" },
      { icon: "Building2", label: "Cronulla Beach", distance: "5 min walk" },
      { icon: "Building2", label: "Medical Centre", distance: "3 min walk" },
      { icon: "Building2", label: "Disability Day Programs", distance: "5km" },
      { icon: "Building2", label: "Chemist", distance: "3 min walk" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Enjoy socialising and spending time with housemates",
        "Like an active and social home environment",
        "Happy to share communal spaces and activities",
      ],
      selectionProcess: "Housemates are carefully matched based on individual needs, preferences, and compatibility assessments.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding for SIL, SDA, and/or MTA"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 9am-5pm",
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
    description: "Supported Independent Living (SIL) apartments in the heart of Sydney CBD, offering city living with 24/7 personalised disability support.",
    detailedDescription: `# Supported Independent Living in Sydney CBD

Summit Housing provides quality Supported Independent Living (SIL), Specialist Disability Accommodation (SDA), and Medium Term Accommodation (MTA) right in the heart of Sydney's Central Business District.

Our Sydney CBD apartments offer self-contained one and two bedroom units in a prime city location. Participants enjoy unmatched access to Sydney's world-class amenities, public transport, and healthcare services while receiving tailored 24/7 support from our dedicated team.
${SUMMIT_SERVICE_NOTE}
## Property Highlights

- Self-contained 1 and 2 bedroom units with modern, accessible design
- Each unit includes an ensuite, kitchenette, TV, built-in wardrobe, and quality furnishings
- Shared amenities including communal living areas, outdoor spaces, and gym facilities
- Lift access throughout the building
- Suitable for SIL, MTA, and short-term stays

## Support and Amenities

- 24/7 on-site support staff
- Personalised care plans for every participant
- Large shared living and social areas
- Fully equipped communal kitchen and individual kitchenettes
- Secure building with intercom entry

## Location Benefits

Living in Sydney CBD means everything is at your doorstep. Multiple train stations including Town Hall and Central are within walking distance, along with extensive bus and light rail networks. Major hospitals such as St Vincent's Hospital and Royal Prince Alfred Hospital are easily accessible. The area offers an abundance of shops, restaurants, parks, and cultural attractions. Hyde Park, Darling Harbour, and the Royal Botanic Gardens are all nearby.

## Activities

### Indoor Activities
- Shared meals and social dining with housemates
- Gym and fitness sessions
- TV, games, and creative activities in communal areas
- Board games, puzzles, and social events
- Cooking and life skills development

### Outdoor Activities
- Walks through Hyde Park and the Royal Botanic Gardens
- Visits to Darling Harbour and the waterfront
- Cultural outings to museums and galleries
- Dining at a wide variety of restaurants and cafes
- Community events and social outings
- Shopping and city exploration

## Contact Information

For enquiries or to arrange a viewing, please get in touch:

**Email:** Eliot@summitsda.com.au
**Phone:** 0450 016 874

We are available on weekdays, Monday to Friday, 9am–5pm.`,
    metaDescription: "Supported Independent Living (SIL) apartments in Sydney CBD. Summit Housing offers 24/7 disability support in the heart of the city with modern accessible units.",
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
      notes: ["Funded through NDIS SIL, SDA, and MTA packages", "Commonwealth Rent Assistance may apply"],
    },
    availability: "2025-01-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Kitchenette" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study Area" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Secure Intercom Access" },
      { icon: "Home", label: "Fully Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "SDA-Compliant Design" },
      { icon: "Building2", label: "Robust Construction" },
      { icon: "Wifi", label: "High-Speed Internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficient" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift Access" },
    ],
    activities: {
      indoor: [
        "Shared meals and social dining with housemates",
        "Gym and fitness sessions",
        "TV, games, and creative activities in communal areas",
        "Board games, puzzles, and social events",
        "Cooking and life skills development",
      ],
      outdoor: [
        "Walks through Hyde Park and the Royal Botanic Gardens",
        "Visits to Darling Harbour and the waterfront",
        "Cultural outings to museums and galleries",
        "Dining at a wide variety of restaurants and cafes",
        "Community events and social outings",
        "Shopping and city exploration",
      ],
    },
    location_features: [
      { icon: "Building2", label: "St Vincent's Hospital", distance: "2km" },
      { icon: "Building2", label: "Grocery Store", distance: "2 min walk" },
      { icon: "Building2", label: "Town Hall Station", distance: "5 min walk" },
      { icon: "Building2", label: "Central Station", distance: "10 min walk" },
      { icon: "Building2", label: "Medical Centre", distance: "5 min walk" },
      { icon: "Building2", label: "Hyde Park", distance: "5 min walk" },
      { icon: "Building2", label: "Disability Day Programs", distance: "3km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Enjoy socialising and spending time with housemates",
        "Like an active and social home environment",
        "Happy to share communal spaces and activities",
      ],
      selectionProcess: "Housemates are carefully matched based on individual needs, preferences, and compatibility assessments.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding for SIL, SDA, and/or MTA"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 9am-5pm",
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
    description: "Supported Independent Living (SIL) apartments on Sydney's Lower North Shore, offering a vibrant urban lifestyle with 24/7 personalised support.",
    detailedDescription: `# Supported Independent Living in Chatswood

Summit Housing provides quality Supported Independent Living (SIL), Specialist Disability Accommodation (SDA), and Medium Term Accommodation (MTA) in Chatswood, one of Sydney's most well-connected and vibrant suburbs on the Lower North Shore.

Our Chatswood apartments offer self-contained one and two bedroom units, thoughtfully refurbished to meet SDA standards. Participants benefit from an excellent location with outstanding transport links, shopping, dining, and healthcare facilities all within easy reach.
${SUMMIT_SERVICE_NOTE}
## Property Highlights

- Self-contained 1 and 2 bedroom units with modern accessible design
- Each unit includes an ensuite, kitchenette, TV, built-in wardrobe, and quality furnishings
- Shared amenities including communal living areas, garden, BBQ area, swimming pool, and gym
- Lift access throughout the building
- Suitable for SIL, MTA, and short-term stays

## Support and Amenities

- 24/7 on-site support staff
- Personalised care plans for every participant
- Large shared living and social areas
- Fully equipped communal kitchen and individual kitchenettes
- Secure building with intercom entry

## Location Benefits

Chatswood is a thriving suburb known for its excellent shopping centres, diverse dining options, and strong transport connections. Chatswood train station is just a short walk away, providing access to the Sydney Metro and T1 North Shore Line. Westfield Chatswood and Chatswood Chase offer extensive shopping and entertainment. Royal North Shore Hospital is approximately 3 km away, and there are numerous medical services and community facilities in the area.

## Activities

### Indoor Activities
- Shared meals and social dining with housemates
- Morning exercise sessions in the gym
- TV, games, and creative activities in communal areas
- Board games, puzzles, and social events
- Swimming in the on-site pool
- Cooking and life skills development

### Outdoor Activities
- Walks in nearby parks and reserves
- Shopping at Westfield Chatswood and Chatswood Chase
- Dining at a diverse range of restaurants and cafes
- Community outings and local events
- Bowling and recreational activities
- Cultural outings and social events

## Contact Information

For enquiries or to arrange a viewing, please get in touch:

**Email:** Eliot@summitsda.com.au
**Phone:** 0450 016 874

We are available on weekdays, Monday to Friday, 9am–5pm.`,
    metaDescription: "Supported Independent Living (SIL) apartments in Chatswood, Lower North Shore. Summit Housing offers 24/7 disability support with excellent transport and shopping access.",
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
      notes: ["Funded through NDIS SIL, SDA, and MTA packages", "Commonwealth Rent Assistance may apply"],
    },
    availability: "2025-01-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Kitchenette" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study Area" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Garden and Outdoor Area" },
      { icon: "Lock", label: "Secure Intercom Access" },
      { icon: "Home", label: "Fully Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "SDA-Compliant Design" },
      { icon: "Building2", label: "Robust Construction" },
      { icon: "Wifi", label: "High-Speed Internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficient" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift Access" },
    ],
    activities: {
      indoor: [
        "Shared meals and social dining with housemates",
        "Morning exercise sessions in the gym",
        "TV, games, and creative activities in communal areas",
        "Board games, puzzles, and social events",
        "Swimming in the on-site pool",
        "Cooking and life skills development",
      ],
      outdoor: [
        "Walks in nearby parks and reserves",
        "Shopping at Westfield Chatswood and Chatswood Chase",
        "Dining at a diverse range of restaurants and cafes",
        "Community outings and local events",
        "Bowling and recreational activities",
        "Cultural outings and social events",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Royal North Shore Hospital", distance: "3km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Chatswood Train Station", distance: "5 min walk" },
      { icon: "Building2", label: "Westfield Chatswood", distance: "5 min walk" },
      { icon: "Building2", label: "Bus Stop", distance: "2 min walk" },
      { icon: "Building2", label: "Medical Centre", distance: "5 min walk" },
      { icon: "Building2", label: "Disability Day Programs", distance: "5km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Enjoy socialising and spending time with housemates",
        "Like an active and social home environment",
        "Happy to share communal spaces and activities",
      ],
      selectionProcess: "Housemates are carefully matched based on individual needs, preferences, and compatibility assessments.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding for SIL, SDA, and/or MTA"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 9am-5pm",
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
    description: "Supported Independent Living (SIL) apartments in Sydney's iconic Eastern Suburbs, offering a vibrant coastal lifestyle with 24/7 personalised support.",
    detailedDescription: `# Supported Independent Living in Bondi

Summit Housing provides quality Supported Independent Living (SIL), Specialist Disability Accommodation (SDA), and Medium Term Accommodation (MTA) in Bondi, one of Sydney's most iconic and sought-after Eastern Suburbs.

Our Bondi apartments offer self-contained one and two bedroom units in a fantastic location close to world-famous Bondi Beach. Participants enjoy a vibrant coastal lifestyle while receiving tailored 24/7 support to build their independence and confidence.
${SUMMIT_SERVICE_NOTE}
## Property Highlights

- Self-contained 1 and 2 bedroom units with modern, accessible design
- Each unit includes an ensuite, kitchenette, TV, built-in wardrobe, and quality furnishings
- Shared amenities including communal living areas, garden, BBQ area, swimming pool, and gym
- Lift access throughout the building
- Suitable for SIL, MTA, and short-term stays

## Support and Amenities

- 24/7 on-site support staff
- Personalised care plans for every participant
- Large shared living and social areas
- Fully equipped communal kitchen and individual kitchenettes
- Secure building with intercom entry

## Location Benefits

Bondi is a world-renowned suburb famous for its beautiful beach, coastal walks, and lively community atmosphere. Bondi Junction train station is nearby, connecting you to the wider Sydney rail network. Westfield Bondi Junction offers extensive shopping and entertainment options. Prince of Wales Hospital is approximately 3 km away, and you will find medical centres, grocery stores, and chemists all within walking distance.

## Activities

### Indoor Activities
- Shared meals and social dining with housemates
- Morning exercise sessions in the gym
- TV, games, and creative activities in communal areas
- Board games, puzzles, and social events
- Swimming in the on-site pool
- Cooking and life skills development

### Outdoor Activities
- Beach walks along Bondi Beach and the Bondi to Coogee coastal walk
- Swimming and surfing at Bondi Beach
- Dining at beachside cafes and restaurants
- Community outings and local events
- Visits to nearby parks and reserves
- Cultural events and markets

## Contact Information

For enquiries or to arrange a viewing, please get in touch:

**Email:** Eliot@summitsda.com.au
**Phone:** 0450 016 874

We are available on weekdays, Monday to Friday, 9am–5pm.`,
    metaDescription: "Supported Independent Living (SIL) apartments in Bondi, Eastern Suburbs. Summit Housing offers 24/7 disability support near Bondi Beach with modern accessible units.",
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
      notes: ["Funded through NDIS SIL, SDA, and MTA packages", "Commonwealth Rent Assistance may apply"],
    },
    availability: "2025-01-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Kitchenette" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study Area" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Secure Intercom Access" },
      { icon: "Home", label: "Fully Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "SDA-Compliant Design" },
      { icon: "Building2", label: "Robust Construction" },
      { icon: "Wifi", label: "High-Speed Internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficient" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift Access" },
    ],
    activities: {
      indoor: [
        "Shared meals and social dining with housemates",
        "Morning exercise sessions in the gym",
        "TV, games, and creative activities in communal areas",
        "Board games, puzzles, and social events",
        "Swimming in the on-site pool",
        "Cooking and life skills development",
      ],
      outdoor: [
        "Beach walks along Bondi Beach and the coastal walk",
        "Swimming and surfing at Bondi Beach",
        "Dining at beachside cafes and restaurants",
        "Community outings and local events",
        "Visits to nearby parks and reserves",
        "Cultural events and weekend markets",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Prince of Wales Hospital", distance: "3km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Bondi Junction Station", distance: "10 min walk" },
      { icon: "Building2", label: "Bondi Beach", distance: "10 min walk" },
      { icon: "Building2", label: "Westfield Bondi Junction", distance: "10 min walk" },
      { icon: "Building2", label: "Medical Centre", distance: "5 min walk" },
      { icon: "Building2", label: "Disability Day Programs", distance: "5km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Enjoy socialising and spending time with housemates",
        "Like an active and social home environment",
        "Happy to share communal spaces and activities",
      ],
      selectionProcess: "Housemates are carefully matched based on individual needs, preferences, and compatibility assessments.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding for SIL, SDA, and/or MTA"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 9am-5pm",
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
    description: "Supported Independent Living (SIL) accommodation in the peaceful Southern Highlands, offering a relaxed country lifestyle with 24/7 personalised support.",
    detailedDescription: `# Supported Independent Living in Mittagong

Summit Housing provides quality Supported Independent Living (SIL), Specialist Disability Accommodation (SDA), and Medium Term Accommodation (MTA) in Mittagong, a charming town in the NSW Southern Highlands.

Our Mittagong accommodation offers comfortable suites in a peaceful, natural setting. Participants enjoy the relaxed pace of country living while receiving tailored 24/7 support. The property is ideally located with Mittagong train station, shops, medical services, and the local hospital all within easy walking distance.
${SUMMIT_SERVICE_NOTE}
## Property Highlights

- 2, 3, and 4 bedroom units designed for comfortable supported living
- Each unit includes an ensuite, kitchenette, TV, built-in wardrobe, and quality furnishings
- Beautiful garden, outdoor sitting areas, and BBQ area
- Ramp access for full wheelchair accessibility
- Suitable for SIL, MTA, and short-term stays

## Support and Amenities

- 24/7 on-site support staff
- Personalised care plans for every participant
- Comfortable indoor and outdoor communal areas
- Fully equipped kitchen and laundry facilities
- Secure property

## Location Benefits

Mittagong is a picturesque Southern Highlands town known for its natural beauty, fresh air, and strong sense of community. Almost everything you need is within a few minutes' walk — Mittagong train station, grocery stores, a chemist, the local hospital, and a GP are all just 200–300 metres away. The Southern Highlands offers stunning scenery, national parks, wineries, and a range of community events and activities throughout the year.

## Activities

### Indoor Activities
- Shared meals and social dining with housemates
- TV, games, and creative activities in communal areas
- Board games, puzzles, and card games
- Cooking and life skills development
- BBQ sessions in the outdoor area

### Outdoor Activities
- Walks and nature trails in the Southern Highlands
- Visits to local parks, gardens, and lookouts
- Community outings and local markets
- Dining at local cafes and restaurants
- Bowling, fishing, and recreational activities
- Exploring wineries and local attractions

## Contact Information

For enquiries or to arrange a viewing, please get in touch:

**Email:** Eliot@summitsda.com.au
**Phone:** 0450 016 874

We are available on weekdays, Monday to Friday, 9am–5pm.`,
    metaDescription: "Supported Independent Living (SIL) accommodation in Mittagong, Southern Highlands. Summit Housing offers 24/7 disability support in a peaceful country setting.",
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
      notes: ["Funded through NDIS SIL, SDA, and MTA packages", "Commonwealth Rent Assistance may apply"],
    },
    availability: "2025-01-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Fully Equipped Kitchen" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study Area" },
      { icon: "TreePine", label: "Garden and Outdoor Area" },
      { icon: "Lock", label: "Secure Access" },
      { icon: "Home", label: "Fully Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "SDA-Compliant Design" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Lightbulb", label: "Energy Efficient" },
    ],
    activities: {
      indoor: [
        "Shared meals and social dining with housemates",
        "TV, games, and creative activities in communal areas",
        "Board games, puzzles, and card games",
        "Cooking and life skills development",
        "BBQ sessions in the outdoor area",
      ],
      outdoor: [
        "Walks and nature trails in the Southern Highlands",
        "Visits to local parks, gardens, and lookouts",
        "Community outings and local markets",
        "Dining at local cafes and restaurants",
        "Bowling, fishing, and recreational activities",
        "Exploring wineries and local attractions",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Southern Highlands Hospital", distance: "300m" },
      { icon: "Building2", label: "Grocery Store", distance: "1 min walk" },
      { icon: "Building2", label: "Mittagong Train Station", distance: "300m" },
      { icon: "Building2", label: "Shopping Centre", distance: "300m" },
      { icon: "Building2", label: "Local Park", distance: "300m" },
      { icon: "Building2", label: "GP / Medical Practice", distance: "300m" },
      { icon: "Building2", label: "Disability Day Programs", distance: "1km" },
      { icon: "Building2", label: "Community Activities", distance: "1km" },
    ],
    housemateInfo: {
      currentTenants: 6,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Enjoy socialising and spending time with housemates",
        "Like a relaxed and supportive home environment",
        "Happy to share communal spaces and activities",
      ],
      selectionProcess: "Housemates are carefully matched based on individual needs, preferences, and compatibility assessments.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding for SIL, SDA, and/or MTA"],
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
    description: "Supported Independent Living (SIL) accessible units in Mascot, offering modern city-fringe living with 24/7 personalised disability support.",
    detailedDescription: `# Supported Independent Living in Mascot

Summit Housing provides quality Supported Independent Living (SIL), Specialist Disability Accommodation (SDA), and Medium Term Accommodation (MTA) in Mascot, a well-connected inner-south suburb close to Sydney's CBD.

Our Mascot units are purpose-designed for accessibility, featuring wide doorways, generous circulation spaces, and specialist equipment support. Participants enjoy modern, comfortable accommodation with 24/7 tailored support from our dedicated team.
${SUMMIT_SERVICE_NOTE}
## Property Highlights

- Self-contained accessible units designed specifically for participants with mobility needs
- Wide doorways (950mm+), spacious layouts with maximum circulation area
- Support for hospital beds, hoists, and other mobility equipment
- Each unit includes an ensuite, kitchenette, TV, built-in wardrobe, and quality furnishings
- Communal areas, garden, and rooftop space
- Lift access throughout the building
- Suitable for SIL, MTA, and short-term stays

## Support and Amenities

- 24/7 on-site support staff
- Personalised care plans for every participant
- Large shared living and social areas
- Automatic doors and emergency power backup
- Fully equipped communal facilities
- Secure building with intercom entry
- Pets welcome (subject to agreement)

## Location Benefits

Mascot is a vibrant inner-south suburb with excellent transport connections. Mascot train station is a short walk away, providing direct access to the Sydney CBD, airport, and wider rail network. You will find grocery stores, medical centres, and everyday services within walking distance. Major hospitals including Prince of Wales and Royal Prince Alfred are easily accessible. Eastgardens Shopping Centre is nearby for a wider range of shops and entertainment.

## Activities

### Indoor Activities
- Shared meals and social dining with housemates
- Gym and fitness sessions
- TV, games, and creative activities in communal areas
- Board games, puzzles, and social events
- Swimming and relaxation

### Outdoor Activities
- Community outings and local events
- Dining at nearby restaurants and cafes
- Art and creative workshops
- Bowling and recreational activities
- Aquatic therapy and hydrotherapy
- Visits to local parks and green spaces

## Contact Information

For enquiries or to arrange a viewing, please get in touch:

**Email:** Eliot@summitsda.com.au
**Phone:** 0450 016 874

We are available on weekdays, Monday to Friday, 9am–5pm.`,
    metaDescription: "Supported Independent Living (SIL) accessible units in Mascot, Sydney. Summit Housing offers 24/7 disability support with purpose-designed accessible accommodation.",
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
      notes: ["Funded through NDIS SIL, SDA, and MTA packages", "Commonwealth Rent Assistance may apply"],
    },
    availability: "2025-01-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Kitchenette" },
      { icon: "DoorOpen", label: "Automatic Doors" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study Area" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Outdoor Area" },
      { icon: "Lock", label: "Secure Intercom Access" },
      { icon: "Home", label: "Pets Welcome" },
      { icon: "Home", label: "Fully Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "SDA-Compliant Design" },
      { icon: "Building2", label: "Robust Construction" },
      { icon: "Wifi", label: "High-Speed Internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Flame", label: "Emergency Power Backup" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficient" },
      { icon: "Lift", label: "Lift Access" },
    ],
    activities: {
      indoor: [
        "Shared meals and social dining with housemates",
        "Gym and fitness sessions",
        "TV, games, and creative activities in communal areas",
        "Board games, puzzles, and social events",
        "Swimming and relaxation",
      ],
      outdoor: [
        "Community outings and local events",
        "Dining at nearby restaurants and cafes",
        "Art and creative workshops",
        "Bowling and recreational activities",
        "Aquatic therapy and hydrotherapy",
        "Visits to local parks and green spaces",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Prince of Wales Hospital", distance: "5km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Mascot Train Station", distance: "5 min walk" },
      { icon: "Building2", label: "Eastgardens Shopping Centre", distance: "3km" },
      { icon: "Building2", label: "Medical Centre", distance: "3 min walk" },
      { icon: "Building2", label: "Disability Day Programs", distance: "5 min drive" },
      { icon: "Building2", label: "GP", distance: "5 min walk" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Enjoy socialising and spending time with housemates",
        "Like an active and social home environment",
        "Happy to share communal spaces and activities",
      ],
      selectionProcess: "Housemates are carefully matched based on individual needs, preferences, and compatibility assessments.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding for SIL, SDA, and/or MTA"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 9am-5pm",
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
    description: "Supported Independent Living (SIL) apartments in Western Sydney's major hub, offering excellent amenities and 24/7 personalised disability support.",
    detailedDescription: `# Supported Independent Living in Parramatta

Summit Housing provides quality Supported Independent Living (SIL), Specialist Disability Accommodation (SDA), and Medium Term Accommodation (MTA) in Parramatta, the thriving heart of Western Sydney.

Our Parramatta apartments offer self-contained one and two bedroom units in a central location with outstanding access to transport, shopping, dining, and healthcare. Participants benefit from living in one of Sydney's fastest-growing centres while receiving tailored 24/7 support.
${SUMMIT_SERVICE_NOTE}
## Property Highlights

- Self-contained 1 and 2 bedroom units with modern, accessible design
- Each unit includes an ensuite, kitchenette, TV, built-in wardrobe, and quality furnishings
- Shared amenities including communal living areas, garden, BBQ area, swimming pool, and gym
- Lift access throughout the building
- Suitable for SIL, MTA, and short-term stays

## Support and Amenities

- 24/7 on-site support staff
- Personalised care plans for every participant
- Large shared living and social areas
- Fully equipped communal kitchen and individual kitchenettes
- Secure building with intercom entry

## Location Benefits

Parramatta is Western Sydney's central business district and a major transport hub. Parramatta train station is a short drive away, with buses and the new Parramatta Light Rail providing excellent connectivity across Sydney. Westfield Parramatta offers extensive shopping and entertainment, and there is no shortage of dining options. Westmead Hospital, one of Sydney's largest, is approximately 3 km away. Parks including Parramatta Park and the historic Old Government House are within easy reach.

## Activities

### Indoor Activities
- Shared meals and social dining with housemates
- Morning exercise sessions in the gym
- TV, games, and creative activities in communal areas
- Board games, puzzles, and social events
- Swimming in the on-site pool
- Cooking and life skills development

### Outdoor Activities
- Walks in Parramatta Park and along the Parramatta River
- Shopping at Westfield Parramatta
- Dining at a wide range of restaurants and cafes
- Community outings and cultural events
- Bowling and recreational activities
- Visits to museums and heritage sites

## Contact Information

For enquiries or to arrange a viewing, please get in touch:

**Email:** Eliot@summitsda.com.au
**Phone:** 0450 016 874

We are available on weekdays, Monday to Friday, 9am–5pm.`,
    metaDescription: "Supported Independent Living (SIL) apartments in Parramatta, Western Sydney. Summit Housing offers 24/7 disability support in a central location with excellent amenities.",
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
      notes: ["Funded through NDIS SIL, SDA, and MTA packages", "Commonwealth Rent Assistance may apply"],
    },
    availability: "2025-01-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Kitchenette" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study Area" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Garden and Outdoor Area" },
      { icon: "Lock", label: "Secure Intercom Access" },
      { icon: "Home", label: "Fully Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "SDA-Compliant Design" },
      { icon: "Building2", label: "Robust Construction" },
      { icon: "Wifi", label: "High-Speed Internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficient" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift Access" },
    ],
    activities: {
      indoor: [
        "Shared meals and social dining with housemates",
        "Morning exercise sessions in the gym",
        "TV, games, and creative activities in communal areas",
        "Board games, puzzles, and social events",
        "Swimming in the on-site pool",
        "Cooking and life skills development",
      ],
      outdoor: [
        "Walks in Parramatta Park and along the Parramatta River",
        "Shopping at Westfield Parramatta",
        "Dining at a wide range of restaurants and cafes",
        "Community outings and cultural events",
        "Bowling and recreational activities",
        "Visits to museums and heritage sites",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Westmead Hospital", distance: "3km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Parramatta Train Station", distance: "5 min drive" },
      { icon: "Building2", label: "Westfield Parramatta", distance: "5 min drive" },
      { icon: "Building2", label: "Medical Centre", distance: "5 min walk" },
      { icon: "Building2", label: "Parramatta Park", distance: "5 min drive" },
      { icon: "Building2", label: "Disability Day Programs", distance: "5km" },
      { icon: "Building2", label: "GP", distance: "1km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Enjoy socialising and spending time with housemates",
        "Like an active and social home environment",
        "Happy to share communal spaces and activities",
      ],
      selectionProcess: "Housemates are carefully matched based on individual needs, preferences, and compatibility assessments.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding for SIL, SDA, and/or MTA"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 9am-5pm",
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
    description: "Supported Independent Living (SIL) apartments near Macquarie Park, offering a leafy suburban lifestyle with 24/7 personalised disability support.",
    detailedDescription: `# Supported Independent Living in Macquarie Park

Summit Housing provides quality Supported Independent Living (SIL), Specialist Disability Accommodation (SDA), and Medium Term Accommodation (MTA) in North Ryde, close to the thriving Macquarie Park precinct.

Our apartments offer self-contained one and two bedroom units in a green, well-connected suburb. Participants enjoy a balance of suburban tranquillity and easy access to major shopping, transport, and healthcare facilities while receiving tailored 24/7 support.
${SUMMIT_SERVICE_NOTE}
## Property Highlights

- Self-contained 1 and 2 bedroom units with modern, accessible design
- Each unit includes an ensuite, kitchenette, TV, built-in wardrobe, and quality furnishings
- Shared amenities including communal living areas, garden, BBQ area, swimming pool, and gym
- Lift access throughout the building
- Suitable for SIL, MTA, and short-term stays

## Support and Amenities

- 24/7 on-site support staff
- Personalised care plans for every participant
- Large shared living and social areas
- Fully equipped communal kitchen and individual kitchenettes
- Secure building with intercom entry

## Location Benefits

North Ryde and Macquarie Park offer a leafy, suburban environment with excellent connections to central Sydney via the Sydney Metro. Macquarie Park Metro Station is a short walk away, and buses run frequently throughout the area. Macquarie Centre, one of Sydney's largest shopping centres, is approximately 2 km away. Macquarie University Hospital is nearby, and there are numerous medical services, parks, and community facilities in the area. Lane Cove National Park is also close by for those who enjoy nature walks.

## Activities

### Indoor Activities
- Shared meals and social dining with housemates
- Morning exercise sessions in the gym
- TV, games, and creative activities in communal areas
- Board games, puzzles, and social events
- Swimming in the on-site pool
- Cooking and life skills development

### Outdoor Activities
- Walks in Lane Cove National Park
- Shopping at Macquarie Centre
- Dining at a variety of restaurants and cafes
- Community outings and local events
- Bowling and recreational activities
- Nature exploration and bushwalks

## Contact Information

For enquiries or to arrange a viewing, please get in touch:

**Email:** Eliot@summitsda.com.au
**Phone:** 0450 016 874

We are available on weekdays, Monday to Friday, 9am–5pm.`,
    metaDescription: "Supported Independent Living (SIL) apartments in Macquarie Park / North Ryde. Summit Housing offers 24/7 disability support in a green suburban setting with excellent transport.",
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
      notes: ["Funded through NDIS SIL, SDA, and MTA packages", "Commonwealth Rent Assistance may apply"],
    },
    availability: "2025-01-01",
    features: [
      { icon: "Thermometer", label: "Heating" },
      { icon: "Wind", label: "Cooling" },
      { icon: "Utensils", label: "Kitchenette" },
      { icon: "DoorOpen", label: "Ensuite" },
      { icon: "BookOpen", label: "Study Area" },
      { icon: "Dumbbell", label: "Gym" },
      { icon: "TreePine", label: "Garden and Outdoor Area" },
      { icon: "Lock", label: "Secure Intercom Access" },
      { icon: "Home", label: "Fully Furnished" },
      { icon: "Wheelchair", label: "Wheelchair Accessible" },
      { icon: "Building2", label: "SDA-Compliant Design" },
      { icon: "Building2", label: "Robust Construction" },
      { icon: "Wifi", label: "High-Speed Internet" },
      { icon: "DoorOpen", label: "Built-in Wardrobes" },
      { icon: "Ruler", label: "Doorway Widths > 950mm" },
      { icon: "Lightbulb", label: "Energy Efficient" },
      { icon: "Flame", label: "Fire Sprinklers" },
      { icon: "Lift", label: "Lift Access" },
    ],
    activities: {
      indoor: [
        "Shared meals and social dining with housemates",
        "Morning exercise sessions in the gym",
        "TV, games, and creative activities in communal areas",
        "Board games, puzzles, and social events",
        "Swimming in the on-site pool",
        "Cooking and life skills development",
      ],
      outdoor: [
        "Walks in Lane Cove National Park",
        "Shopping at Macquarie Centre",
        "Dining at a variety of restaurants and cafes",
        "Community outings and local events",
        "Bowling and recreational activities",
        "Nature exploration and bushwalks",
      ],
    },
    location_features: [
      { icon: "Building2", label: "Macquarie University Hospital", distance: "2km" },
      { icon: "Building2", label: "Grocery Store", distance: "3 min walk" },
      { icon: "Building2", label: "Macquarie Park Metro Station", distance: "7 min walk" },
      { icon: "Building2", label: "Macquarie Centre", distance: "2km" },
      { icon: "Building2", label: "Medical Centre", distance: "5 min walk" },
      { icon: "Building2", label: "Lane Cove National Park", distance: "3km" },
      { icon: "Building2", label: "Disability Day Programs", distance: "5km" },
      { icon: "Building2", label: "GP", distance: "1km" },
    ],
    housemateInfo: {
      currentTenants: 8,
      ageRange: "ALL",
      genders: ["Man", "Woman", "Rather not answer"],
      preferences: [
        "Enjoy socialising and spending time with housemates",
        "Like an active and social home environment",
        "Happy to share communal spaces and activities",
      ],
      selectionProcess: "Housemates are carefully matched based on individual needs, preferences, and compatibility assessments.",
    },
    eligibility: ["Currently receiving a Disability Support Pension", "Receiving NDIS funding for SIL, SDA, and/or MTA"],
    contact: {
      phone: "0450016874",
      email: "Eliot@summitsda.com.au",
      hours: "Weekdays, Monday to Friday, 9am-5pm",
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
