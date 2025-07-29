import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  DollarSign, 
  PieChart, 
  CheckCircle2, 
  ArrowLeft,
  Info,
  Calculator,
  CreditCard,
  Target,
  TrendingUp,
  AlertCircle,
  Layers,
  Coffee,
  Bed,
  Users,
  Clock,
  Plus,
  Calendar
} from "lucide-react"

export const metadata: Metadata = {
  title: "STA Funding & Costs Guide | NDIS Short Term Accommodation Pricing",
  description: "Complete guide to STA funding including NDIS budget allocation, pricing models, what's included in costs, and strategies for managing your STA budget effectively.",
  keywords: "STA funding, STA costs, NDIS STA budget, STA pricing, what is included in STA, STA cost breakdown, managing STA funding",
  openGraph: {
    title: "STA Funding & Costs Guide",
    description: "Understand STA funding and manage your budget effectively",
    type: "article"
  },
  alternates: {
    canonical: "/learn/about-sta/funding-and-costs"
  }
}

// NDIS funding details
const ndisFlundingDetails = [
  {
    title: "Core Support Budget",
    description: "STA funding comes from your Core Support budget under 'Assistance with Daily Living'",
    icon: PieChart,
    details: "This is the main source of STA funding in your NDIS plan, allocated based on your assessed needs for respite and temporary accommodation.",
    allocation: "Based on individual assessment",
    flexibility: "High - can be used for different STA types"
  },
  {
    title: "Flexible Usage",
    description: "Use your STA funding flexibly for different types of temporary accommodation throughout the year",
    icon: Target,
    details: "Your STA funding can be used for respite care, emergency accommodation, holidays, or trial stays as needed throughout your plan period.",
    allocation: "Total annual amount",
    flexibility: "Very high - adapt to changing needs"
  },
  {
    title: "Plan Reviews",
    description: "STA funding can be adjusted during plan reviews based on usage patterns and changing needs",
    icon: TrendingUp,
    details: "If you need more or less STA funding, discuss this during your plan review with evidence of your usage and needs.",
    allocation: "Reviewed annually or as needed",
    flexibility: "Adjustable with justification"
  }
]

// What's included in STA costs
const includedServices = [
  {
    category: "Accommodation",
    icon: Bed,
    description: "Basic accommodation and facility usage",
    standardInclusions: [
      "Bedroom or sleeping space",
      "Access to bathroom facilities",
      "Common area usage",
      "Basic furniture and bedding",
      "Utilities (electricity, water, heating)",
      "Security and safety systems"
    ],
    premiumInclusions: [
      "Private room with ensuite",
      "Higher quality furnishings",
      "Additional amenities",
      "Premium location access"
    ]
  },
  {
    category: "Meals & Nutrition",
    icon: Coffee,
    description: "Meal provision and dietary support",
    standardInclusions: [
      "Three meals per day",
      "Morning and afternoon tea",
      "Basic dietary requirements",
      "Kitchen access (where appropriate)",
      "Meal preparation assistance",
      "Special diet accommodation"
    ],
    premiumInclusions: [
      "Restaurant-style dining",
      "Extended menu choices",
      "Nutrition counseling",
      "Cooking classes or experiences"
    ]
  },
  {
    category: "Support Services",
    icon: Users,
    description: "Personal care and daily living support",
    standardInclusions: [
      "Personal care assistance",
      "Medication management",
      "24/7 support availability",
      "Emergency response",
      "Basic activity coordination",
      "Transport for essential needs"
    ],
    premiumInclusions: [
      "1:1 support hours",
      "Specialized therapy access",
      "Enhanced activity programs",
      "Flexible transport options"
    ]
  },
  {
    category: "Activities & Programs",
    icon: Target,
    description: "Recreation and social activities",
    standardInclusions: [
      "Group activities",
      "Basic recreation programs",
      "Community access",
      "Social interaction opportunities",
      "Entertainment systems",
      "Basic craft and hobby supplies"
    ],
    premiumInclusions: [
      "Individualized activity planning",
      "Specialized programs",
      "External excursions",
      "Premium entertainment options"
    ]
  }
]

// Pricing models and factors
const pricingFactors = [
  {
    factor: "Support Level Required",
    impact: "High",
    description: "Higher support needs result in higher daily rates",
    examples: [
      "Independent stay: $80-150 per night",
      "Moderate support: $150-250 per night",
      "High support: $250-400 per night",
      "24/7 intensive support: $400+ per night"
    ]
  },
  {
    factor: "Accommodation Type",
    impact: "High",
    description: "Different accommodation types have different cost structures",
    examples: [
      "Host family: $80-180 per night",
      "Group accommodation: $100-200 per night",
      "Independent unit: $120-280 per night",
      "Purpose-built facility: $150-350 per night"
    ]
  },
  {
    factor: "Location & Demand",
    impact: "Medium",
    description: "Urban areas and popular destinations typically cost more",
    examples: [
      "Regional areas: Generally 10-20% lower",
      "Major cities: Standard pricing",
      "Holiday destinations: 20-50% premium",
      "Peak seasons: Additional 10-30% premium"
    ]
  },
  {
    factor: "Duration of Stay",
    impact: "Medium",
    description: "Longer stays may offer better rates",
    examples: [
      "Single night: Full daily rate",
      "Weekly stays: 5-10% discount",
      "Monthly stays: 10-15% discount",
      "Regular bookings: Negotiated rates"
    ]
  }
]

// Budget management strategies
const budgetStrategies = [
  {
    title: "Plan Ahead",
    description: "Book early to secure better rates and availability",
    icon: Calendar,
    strategies: [
      "Book regular respite well in advance",
      "Take advantage of early booking discounts",
      "Plan around off-peak periods for savings",
      "Negotiate rates for regular bookings",
      "Avoid last-minute premium pricing"
    ]
  },
  {
    title: "Choose Wisely",
    description: "Select accommodation types that match your needs and budget",
    icon: Target,
    strategies: [
      "Match support level to actual needs",
      "Consider group accommodation for cost savings",
      "Explore host family options for lower costs",
      "Balance location convenience with cost",
      "Prioritize essential vs nice-to-have features"
    ]
  },
  {
    title: "Monitor Usage",
    description: "Track your STA spending throughout the year",
    icon: TrendingUp,
    strategies: [
      "Keep records of all STA bookings and costs",
      "Monitor remaining budget allocation",
      "Plan major bookings around budget availability",
      "Discuss usage patterns at plan reviews",
      "Adjust future bookings based on spending"
    ]
  },
  {
    title: "Maximize Value",
    description: "Get the most from your STA funding",
    icon: Plus,
    strategies: [
      "Combine multiple purposes in one stay",
      "Take advantage of included activities",
      "Use STA for skill development opportunities",
      "Build relationships with preferred providers",
      "Share costs where appropriate and possible"
    ]
  }
]

export default function STAFundingCostsPage() {
  return (
    <>
      <PageHero
        title="STA Funding & Costs Guide"
        description="Complete guide to STA funding including NDIS budget allocation, pricing models, what's included in costs, and strategies for managing your STA budget effectively."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About STA", href: "/learn/about-sta" },
          { title: "Funding & Costs", href: "/learn/about-sta/funding-and-costs" }
        ]}
        heroImage={{
          src: "/house-image/6.webp",
          alt: "Calculator and NDIS plan documents showing STA funding allocation"
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

      {/* NDIS Funding Overview */}
      <section className="py-12 bg-[hsl(var(--background))]" aria-label="NDIS funding overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                NDIS Funding
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How STA Funding Works in Your NDIS Plan
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Understanding how STA funding is allocated and used helps you plan effectively and make informed decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {ndisFlundingDetails.map((detail, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                        <detail.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <CardTitle className="text-lg text-[hsl(var(--heading))]">{detail.title}</CardTitle>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{detail.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-[hsl(var(--body))] text-xs leading-relaxed">{detail.details}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[hsl(var(--light-orange))] p-2 rounded text-center">
                        <div className="font-semibold text-[hsl(var(--heading))] text-xs">Allocation</div>
                        <div className="text-[hsl(var(--body))] text-xs">{detail.allocation}</div>
                      </div>
                      <div className="bg-[hsl(var(--light-orange))] p-2 rounded text-center">
                        <div className="font-semibold text-[hsl(var(--heading))] text-xs">Flexibility</div>
                        <div className="text-[hsl(var(--body))] text-xs">{detail.flexibility}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in STA Costs */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="What's included">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Cost Breakdown
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What's Included in STA Costs
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Most STA packages include comprehensive services, though specific inclusions vary by provider and accommodation type.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {includedServices.map((service, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <service.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {service.category}
                    </CardTitle>
                    <p className="text-[hsl(var(--body))] text-sm">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        Standard Inclusions
                      </h4>
                      <ul className="space-y-1">
                        {service.standardInclusions.map((inclusion, inclusionIndex) => (
                          <li key={inclusionIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <div className="w-1 h-1 bg-[hsl(var(--primary))] rounded-full"></div>
                            {inclusion}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2 flex items-center gap-2">
                        <Plus className="w-4 h-4 text-amber-600" />
                        Premium Options
                      </h4>
                      <ul className="space-y-1">
                        {service.premiumInclusions.map((premium, premiumIndex) => (
                          <li key={premiumIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                            {premium}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Pricing factors">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Pricing Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Factors That Affect STA Costs
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Several factors influence STA pricing. Understanding these helps you budget effectively and make informed choices.
              </p>
            </div>

            <div className="space-y-8">
              {pricingFactors.map((factor, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge 
                            variant={factor.impact === 'High' ? 'destructive' : factor.impact === 'Medium' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {factor.impact} Impact
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-2">{factor.factor}</h3>
                        <p className="text-[hsl(var(--body))] text-sm">{factor.description}</p>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Example Price Ranges:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {factor.examples.map((example, exampleIndex) => (
                            <div key={exampleIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm p-2 bg-[hsl(var(--light-orange))] rounded">
                              <Calculator className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                              {example}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Budget Management Strategies */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Budget management">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Budget Management
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Strategies for Managing Your STA Budget
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Smart budget management helps you get maximum value from your STA funding and ensures you can access support when needed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {budgetStrategies.map((strategy, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <strategy.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {strategy.title}
                    </CardTitle>
                    <p className="text-[hsl(var(--body))] text-sm">{strategy.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy.strategies.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
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

      {/* Cost Comparison and Tips */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Cost tips">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Money-Saving Tips
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Ways to Reduce STA Costs
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Booking Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Book during off-peak periods for lower rates
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Consider longer stays for volume discounts
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Negotiate rates for regular bookings
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Explore group accommodation options
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Consider host family arrangements
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Target className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Value Maximization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Use STA for multiple purposes in one stay
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Take advantage of all included activities
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Focus on skill development opportunities
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Build ongoing relationships with providers
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Plan around your other NDIS goals
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-[hsl(var(--pure-white))] border-2 border-[hsl(var(--primary))]">
              <CardHeader>
                <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                  <Info className="w-5 h-5 text-[hsl(var(--primary))]" />
                  Important Budget Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-[hsl(var(--body))] text-sm">
                      <strong>Plan ahead:</strong> STA funding doesn't roll over to the next plan period
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-[hsl(var(--body))] text-sm">
                      <strong>Track spending:</strong> Monitor your usage to avoid running out of funding
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-[hsl(var(--body))] text-sm">
                      <strong>Emergency buffer:</strong> Keep some funding available for unexpected needs
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-[hsl(var(--body))] text-sm">
                      <strong>Review regularly:</strong> Discuss usage patterns at plan reviews
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation to Related Topics */}
      <section className="py-12 bg-[hsl(var(--lighter-orange))]" aria-label="Related STA topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-6 text-center">
              Continue Learning About STA
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/booking-and-planning" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Booking & Planning
                  </div>
                  <span className="text-xs opacity-90">Learn the booking process</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/accommodation-options" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4" />
                    Accommodation Options
                  </div>
                  <span className="text-xs opacity-90">Explore facility types</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/types-and-when-to-use" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
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