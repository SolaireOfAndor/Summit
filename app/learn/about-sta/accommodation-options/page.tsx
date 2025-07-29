import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  Building2, 
  Home, 
  Users2, 
  Bed,
  CheckCircle2, 
  ArrowRight,
  ArrowLeft,
  Star,
  AlertCircle,
  Wifi,
  Car,
  Coffee,
  Utensils,
  Activity,
  TreePine,
  Accessibility,
  Shield,
  Phone,
  Clock
} from "lucide-react"

export const metadata: Metadata = {
  title: "STA Accommodation Options & Facilities | Short Term Accommodation Guide",
  description: "Complete guide to STA accommodation types - purpose-built facilities, host families, independent units, and group accommodation. Learn about facilities, support levels, and what to expect.",
  keywords: "STA accommodation options, STA facilities, purpose-built STA, host families, independent STA units, group accommodation, STA amenities",
  openGraph: {
    title: "STA Accommodation Options & Facilities Guide",
    description: "Discover different types of STA accommodation and facilities available",
    type: "article"
  },
  alternates: {
    canonical: "/learn/about-sta/accommodation-options"
  }
}

// Accommodation types with detailed information
const accommodationTypes = [
  {
    title: "Purpose-Built STA Facilities",
    description: "Dedicated facilities designed specifically for short-term accommodation with disability support and accessibility features.",
    icon: Building2,
    capacity: "Individual rooms to group settings",
    support: "24/7 support available",
    priceRange: "$150-350 per night",
    features: [
      "Fully accessible design throughout",
      "On-site support staff 24/7",
      "Shared common areas and facilities",
      "Structured activity programs",
      "Disability-specific equipment",
      "Emergency response systems",
      "Meal preparation services",
      "Laundry facilities"
    ],
    amenities: [
      "Accessible bathrooms and showers",
      "Wheelchair accessible throughout",
      "Sensory spaces and quiet areas",
      "Outdoor accessible gardens",
      "Activity and therapy rooms",
      "Dining areas and kitchens",
      "Parking and transport access",
      "Wi-Fi and entertainment systems"
    ],
    benefits: [
      "Professional disability support",
      "Safe and secure environment",
      "Social interaction opportunities",
      "Structured daily programs",
      "Specialized equipment available",
      "Proven quality and reliability"
    ],
    considerations: [
      "More institutional feel",
      "Limited privacy",
      "Shared spaces with others",
      "Structured routines",
      "Higher cost",
      "May feel clinical"
    ],
    bestFor: "People who need regular support, enjoy social interaction, or require specialized equipment and facilities."
  },
  {
    title: "Host Family Arrangements",
    description: "Stay with trained and approved families who provide accommodation and support in their family home environment.",
    icon: Home,
    capacity: "1-2 individuals",
    support: "Family-based support",
    priceRange: "$80-180 per night",
    features: [
      "Home-like environment",
      "Family atmosphere and interaction",
      "Personal attention and care",
      "Community integration",
      "Flexible meal arrangements",
      "Shared family activities",
      "Cultural and language matching",
      "Pet-friendly options available"
    ],
    amenities: [
      "Private or shared bedroom",
      "Access to family living areas",
      "Home-cooked meals",
      "Backyard and outdoor spaces",
      "Family transportation",
      "Household amenities",
      "Local community access",
      "Family pets and atmosphere"
    ],
    benefits: [
      "Warm, homely environment",
      "Personal relationships",
      "Cultural experiences",
      "Flexible arrangements",
      "Lower cost option",
      "Community connections"
    ],
    considerations: [
      "Less professional support",
      "Family rules and routines",
      "Potential personality clashes",
      "Limited specialized equipment",
      "Dependent on family availability",
      "Less structured programs"
    ],
    bestFor: "People who prefer home environments, enjoy family life, or want to experience different cultures and communities."
  },
  {
    title: "Supported Independent Units",
    description: "Self-contained accommodation units with support staff available as needed, offering more independence and privacy.",
    icon: Bed,
    capacity: "1-2 people",
    support: "Support available as needed",
    priceRange: "$120-280 per night",
    features: [
      "Private self-contained unit",
      "Own kitchen and bathroom",
      "Support staff on-call",
      "Independence focus",
      "Flexible support hours",
      "Privacy and autonomy",
      "Modern accommodation",
      "Urban locations often available"
    ],
    amenities: [
      "Fully equipped kitchen",
      "Private bathroom and shower",
      "Living and sleeping areas",
      "Laundry facilities",
      "Air conditioning/heating",
      "Internet and TV",
      "Parking space",
      "Private outdoor space"
    ],
    benefits: [
      "Complete privacy",
      "Independence practice",
      "Flexible daily routine",
      "Modern amenities",
      "Self-catering option",
      "Professional support available"
    ],
    considerations: [
      "Higher cost",
      "More responsibility required",
      "Support not always immediate",
      "Can feel isolated",
      "Need independence skills",
      "Limited social interaction"
    ],
    bestFor: "People with good independence skills who value privacy and want to practice self-care in a supported environment."
  },
  {
    title: "Group Accommodation",
    description: "Shared accommodation with other NDIS participants, offering social opportunities and cost-effective support.",
    icon: Users2,
    capacity: "3-8 residents",
    support: "Shared support staff",
    priceRange: "$100-200 per night",
    features: [
      "Shared living with peers",
      "Private bedrooms",
      "Shared common areas",
      "Group activities and outings",
      "Peer support opportunities",
      "Cost-effective option",
      "Social interaction focus",
      "Structured group routines"
    ],
    amenities: [
      "Private bedroom space",
      "Shared kitchen and dining",
      "Common lounge areas",
      "Shared bathroom facilities",
      "Group activity spaces",
      "Outdoor areas",
      "Transport for group outings",
      "Entertainment systems"
    ],
    benefits: [
      "Social connections",
      "Peer learning",
      "Cost-effective",
      "Group activities",
      "Shared experiences",
      "Built-in companionship"
    ],
    considerations: [
      "Less privacy",
      "Group dynamics",
      "Shared facilities",
      "Need compatibility with others",
      "Group rules and schedules",
      "Potential conflicts"
    ],
    bestFor: "People who enjoy social interaction, want to make friends, or prefer shared living arrangements and group activities."
  }
]

// Common facilities and services
const commonFacilities = [
  {
    category: "Accessibility Features",
    icon: Accessibility,
    items: [
      "Wheelchair accessible entrances and pathways",
      "Accessible bathrooms with grab rails",
      "Height-adjustable beds and furniture",
      "Visual and hearing support systems",
      "Sensory-friendly spaces",
      "Emergency call systems",
      "Accessible parking spaces",
      "Ramps and lifts where needed"
    ]
  },
  {
    category: "Support Services",
    icon: Shield,
    items: [
      "Personal care assistance",
      "Medication management",
      "24/7 support availability",
      "Emergency response procedures",
      "Allied health coordination",
      "Transport assistance",
      "Activity coordination",
      "Meal preparation support"
    ]
  },
  {
    category: "Recreation & Activities",
    icon: Activity,
    items: [
      "Group activities and outings",
      "Art and craft sessions",
      "Entertainment systems",
      "Exercise and wellness programs",
      "Social events and celebrations",
      "Educational workshops",
      "Community participation",
      "Individual activity support"
    ]
  },
  {
    category: "Essential Amenities",
    icon: Coffee,
    items: [
      "Meals and dietary accommodation",
      "Laundry services and facilities",
      "Wi-Fi and communication access",
      "Climate control systems",
      "Secure personal storage",
      "Visitor areas and parking",
      "Kitchen and dining facilities",
      "Cleaning and housekeeping"
    ]
  }
]

export default function STAAccommodationOptionsPage() {
  return (
    <>
      <PageHero
        title="STA Accommodation Options & Facilities"
        description="Comprehensive guide to different types of STA accommodation including purpose-built facilities, host families, independent units, and group settings. Learn about facilities, support levels, and what to expect."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About STA", href: "/learn/about-sta" },
          { title: "Accommodation Options", href: "/learn/about-sta/accommodation-options" }
        ]}
        heroImage={{
          src: "/house-image/4.webp",
          alt: "Modern STA accommodation facility with accessible features and comfortable living spaces"
        }}
      />

      {/* Back to STA Overview */}
      <section className="py-6 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <Button asChild variant="ghost" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))]">
            <Link href="/learn/about-sta" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to STA Overview
            </Link>
          </Button>
        </div>
      </section>

      {/* Accommodation Types Comparison */}
      <section className="py-12 bg-[hsl(var(--background))]" aria-label="Accommodation types comparison">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Quick Comparison
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                STA Accommodation Options at a Glance
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-[hsl(var(--pure-white))] rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b border-[hsl(var(--light-orange))]">
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Accommodation Type</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Capacity</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Support Level</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Price Range</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {accommodationTypes.map((type, index) => (
                    <tr key={index} className="border-b border-[hsl(var(--light-orange))]/30">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <type.icon className="w-4 h-4 text-[hsl(var(--primary))]" />
                          <strong className="text-[hsl(var(--heading))]">{type.title}</strong>
                        </div>
                      </td>
                      <td className="p-4 text-[hsl(var(--body))] text-sm">{type.capacity}</td>
                      <td className="p-4 text-[hsl(var(--body))] text-sm">{type.support}</td>
                      <td className="p-4 text-[hsl(var(--body))] text-sm">{type.priceRange}</td>
                      <td className="p-4 text-[hsl(var(--body))] text-sm">{type.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Accommodation Types */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Detailed accommodation types">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Detailed Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Complete Guide to STA Accommodation Types
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Each accommodation type offers different experiences, support levels, and amenities. Choose based on your preferences and needs.
              </p>
            </div>

            <div className="space-y-12">
              {accommodationTypes.map((type, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-full bg-[hsl(var(--primary))]/10">
                        <type.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[hsl(var(--heading))]">{type.title}</h3>
                        <p className="text-[hsl(var(--body))] text-lg">{type.description}</p>
                      </div>
                    </div>

                    {/* Key Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="text-center p-3 bg-[hsl(var(--light-orange))] rounded">
                        <div className="font-semibold text-[hsl(var(--heading))]">Capacity</div>
                        <div className="text-sm text-[hsl(var(--body))]">{type.capacity}</div>
                      </div>
                      <div className="text-center p-3 bg-[hsl(var(--light-orange))] rounded">
                        <div className="font-semibold text-[hsl(var(--heading))]">Support</div>
                        <div className="text-sm text-[hsl(var(--body))]">{type.support}</div>
                      </div>
                      <div className="text-center p-3 bg-[hsl(var(--light-orange))] rounded">
                        <div className="font-semibold text-[hsl(var(--heading))]">Price Range</div>
                        <div className="text-sm text-[hsl(var(--body))]">{type.priceRange}</div>
                      </div>
                      <div className="text-center p-3 bg-[hsl(var(--light-orange))] rounded">
                        <div className="font-semibold text-[hsl(var(--heading))]">Best For</div>
                        <div className="text-sm text-[hsl(var(--body))]">{type.bestFor}</div>
                      </div>
                    </div>

                    {/* Detailed Information */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                          Features
                        </h4>
                        <ul className="space-y-1">
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-[hsl(var(--body))] text-sm flex items-start gap-2">
                              <div className="w-1 h-1 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Amenities */}
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-3 flex items-center gap-2">
                          <Star className="w-4 h-4 text-[hsl(var(--primary))]" />
                          Amenities
                        </h4>
                        <ul className="space-y-1">
                          {type.amenities.map((amenity, amenityIndex) => (
                            <li key={amenityIndex} className="text-[hsl(var(--body))] text-sm flex items-start gap-2">
                              <div className="w-1 h-1 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                              {amenity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          Benefits
                        </h4>
                        <ul className="space-y-1">
                          {type.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-[hsl(var(--body))] text-sm flex items-start gap-2">
                              <div className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Considerations */}
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-600" />
                          Considerations
                        </h4>
                        <ul className="space-y-1">
                          {type.considerations.map((consideration, considerationIndex) => (
                            <li key={considerationIndex} className="text-[hsl(var(--body))] text-sm flex items-start gap-2">
                              <div className="w-1 h-1 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                              {consideration}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Facilities */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Common facilities">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Standard Features
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Common Facilities & Services
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Most STA accommodations provide these essential facilities and services, though specific offerings may vary by provider.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {commonFacilities.map((facility, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <facility.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {facility.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid gap-2">
                      {facility.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="What to expect">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Your Stay Experience
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What to Expect During Your STA Stay
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Understanding what happens during your stay helps you prepare and make the most of your STA experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Daily Routine & Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-[hsl(var(--lighter-orange))] rounded">
                    <p className="text-[hsl(var(--body))] text-sm">
                      <strong>Flexible Structure:</strong> Most STA provides structure while respecting your preferences and routine.
                    </p>
                  </div>
                  <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Regular meal times with dietary accommodation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Optional participation in group activities
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Personal care support as needed
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Quiet time and rest periods
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Social activities and outings
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Support & Safety
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-[hsl(var(--lighter-orange))] rounded">
                    <p className="text-[hsl(var(--body))] text-sm">
                      <strong>Professional Care:</strong> Trained staff available to provide appropriate support and ensure your safety.
                    </p>
                  </div>
                  <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      24/7 staff availability for emergencies
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Medication management and reminders
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Emergency response procedures
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Regular check-ins and welfare monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Access to healthcare professionals
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Related Topics */}
      <section className="py-12 bg-[hsl(var(--background))]" aria-label="Related STA topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-6 text-center">
              Next Steps in Your STA Journey
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/booking-and-planning" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Booking & Planning
                  </div>
                  <span className="text-xs opacity-90">Learn how to book your stay</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/funding-and-costs" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Funding & Costs
                  </div>
                  <span className="text-xs opacity-90">Understand what's included</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/types-and-when-to-use" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Types & When to Use
                  </div>
                  <span className="text-xs opacity-90">Choose the right STA type</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 