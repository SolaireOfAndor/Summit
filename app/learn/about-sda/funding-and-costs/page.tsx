import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/sections/cta-section"
import Link from "next/link"
import Image from "next/image"
import { 
  DollarSign,
  Building2,
  MapPin,
  Calculator,
  PieChart,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Info,
  AlertTriangle,
  Lightbulb,
  Accessibility,
  Shield,
  HeartHandshake,
  Banknote,
  Receipt,
  CreditCard,
  Percent,
  BarChart3,
  Target,
  HelpCircle,
  Layers,
  FileText
} from "lucide-react"

export const metadata: Metadata = {
  title: "SDA Funding & Costs Guide | Understanding Specialist Disability Accommodation Pricing",
  description: "Complete guide to SDA funding and costs. Understand how SDA pricing works, your rent contribution, Capital Support budget, and location-based pricing differences.",
  keywords: "SDA funding, SDA costs, SDA pricing, how much does SDA cost, capital support budget, SDA rent contribution, disability housing costs",
  openGraph: {
    title: "SDA Funding & Costs Guide | Understanding Specialist Disability Accommodation Pricing",
    description: "Comprehensive guide to SDA funding, pricing structures, and participant financial responsibilities in specialized disability housing.",
    type: "article",
    images: [
      {
        url: "/header/page-header-8.webp",
        width: 1200,
        height: 630,
        alt: "NDIS participant reviewing SDA funding and costs with support coordinator"
      }
    ]
  },
  alternates: {
    canonical: "/learn/about-sda/funding-and-costs"
  }
}

// Funding Details
const fundingDetails = [
  {
    title: "Capital Support Budget",
    description: "SDA funding comes from a separate Capital Support budget, not your Core Support funding.",
    icon: Building2,
    details: "Covers the cost of accessible housing features and design elements specific to your needs.",
    calculation: "Based on design category and location",
    examples: [
      "Wheelchair accessibility features",
      "Ceiling hoist systems",
      "Emergency backup power",
      "Reinforced construction materials",
      "Enhanced lighting and ventilation"
    ],
    keyPoint: "This funding is separate from your daily support funding and specifically covers housing-related accessibility costs."
  },
  {
    title: "Reasonable Rent Contribution",
    description: "You pay a reasonable rent contribution (typically 25-30% of your income) toward housing costs.",
    icon: DollarSign,
    details: "Similar to rent assistance, this contribution helps cover general housing costs beyond accessibility features.",
    calculation: "Percentage of disability pension or income",
    examples: [
      "25% of Disability Support Pension",
      "Maximum of 30% of total income",
      "Includes utilities in most cases",
      "Similar to general rental market",
      "Adjusted for shared accommodation"
    ],
    keyPoint: "Your rent contribution covers the general housing costs that any tenant would pay, not the specialized SDA features."
  },
  {
    title: "Location-Based Pricing",
    description: "SDA pricing varies by location, with higher rates in capital cities and lower rates in regional areas.",
    icon: MapPin,
    details: "Reflects local construction costs and housing market conditions in different geographic areas.",
    calculation: "Metro, regional, or remote pricing zones",
    examples: [
      "Sydney/Melbourne: Highest rates",
      "Other capital cities: High rates", 
      "Regional centers: Moderate rates",
      "Remote areas: Lower rates",
      "Annual price adjustments"
    ],
    keyPoint: "Location significantly impacts SDA pricing, with metropolitan areas commanding premium rates due to higher construction and land costs."
  },
  {
    title: "Design Category Pricing",
    description: "Higher support design categories receive increased funding to cover additional accessibility features.",
    icon: Layers,
    details: "High Physical Support commands the highest rates, followed by Robust, Fully Accessible, and Improved Liveability.",
    calculation: "Tiered pricing by category complexity",
    examples: [
      "High Physical Support: Premium rates",
      "Robust: Higher than standard rates",
      "Fully Accessible: Enhanced rates",
      "Improved Liveability: Base rates",
      "Additional features may increase costs"
    ],
    keyPoint: "More complex design categories with specialized features receive higher funding to cover the additional construction and equipment costs."
  }
]

// Pricing Examples by Category
const pricingExamples = [
  {
    category: "Improved Liveability",
    icon: Lightbulb,
    dailyRate: "$45-65",
    annualRange: "$16,000-24,000",
    features: ["Enhanced lighting", "Noise reduction", "Visual cues", "Quality fixtures"],
    locations: {
      metro: "$55-65/day",
      regional: "$45-55/day", 
      remote: "$40-50/day"
    }
  },
  {
    category: "Fully Accessible", 
    icon: Accessibility,
    dailyRate: "$65-85",
    annualRange: "$24,000-31,000",
    features: ["Wheelchair access", "Wide doorways", "Accessible bathrooms", "Level surfaces"],
    locations: {
      metro: "$75-85/day",
      regional: "$65-75/day",
      remote: "$55-65/day"
    }
  },
  {
    category: "Robust",
    icon: Shield, 
    dailyRate: "$85-110",
    annualRange: "$31,000-40,000",
    features: ["Reinforced construction", "Impact-resistant materials", "Secure areas", "Durable fixtures"],
    locations: {
      metro: "$95-110/day",
      regional: "$85-95/day",
      remote: "$75-85/day"
    }
  },
  {
    category: "High Physical Support",
    icon: HeartHandshake,
    dailyRate: "$120-160",
    annualRange: "$44,000-58,000", 
    features: ["Ceiling hoists", "Emergency power", "Clinical facilities", "24/7 support space"],
    locations: {
      metro: "$140-160/day",
      regional: "$120-140/day",
      remote: "$100-120/day"
    }
  }
]

// Cost Breakdown Components
const costBreakdown = [
  {
    component: "SDA Payment",
    percentage: "70-85%",
    description: "NDIS funding for accessibility features and design elements",
    paidBy: "NDIS Capital Support",
    covers: ["Accessible design features", "Specialized equipment", "Enhanced construction", "Assistive technology integration"]
  },
  {
    component: "Rent Contribution", 
    percentage: "25-30%",
    description: "Participant contribution toward general housing costs",
    paidBy: "Participant",
    covers: ["Basic accommodation costs", "Utilities", "General maintenance", "Property management"]
  },
  {
    component: "Additional Costs",
    percentage: "Variable",
    description: "Optional services or upgrades not covered by standard SDA",
    paidBy: "Participant (optional)",
    covers: ["Premium location upgrades", "Additional support services", "Personal modifications", "Extra amenities"]
  }
]

// Financial Planning Tips
const financialTips = [
  {
    title: "Budget Planning",
    icon: Calculator,
    tips: [
      "Calculate your maximum rent contribution (25-30% of income)",
      "Factor in utility costs and whether they're included",
      "Consider location impact on both SDA rates and living costs",
      "Plan for potential annual price adjustments"
    ]
  },
  {
    title: "Funding Optimization",
    icon: Target,
    tips: [
      "Ensure your design category matches your actual needs",
      "Consider shared accommodation to reduce individual costs",
      "Explore different locations if flexible on area",
      "Understand what's included vs. additional costs"
    ]
  },
  {
    title: "Long-term Considerations",
    icon: TrendingUp,
    tips: [
      "Plan for potential changes in support needs",
      "Consider impact of income changes on contributions",
      "Factor in location preferences vs. cost differences",
      "Understand lease terms and moving costs"
    ]
  }
]

export default function SDAFundingCostsPage() {
  return (
    <>
      <PageHero
        title="SDA Funding & Costs Guide"
        description="Understand how SDA funding works, what you'll pay, and how pricing varies by design category and location. Complete guide to the financial aspects of Specialist Disability Accommodation."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About SDA", href: "/learn/about-sda" },
          { title: "Funding & Costs", href: "/learn/about-sda/funding-and-costs" }
        ]}
        heroImage={{
          src: "/header/page-header-8.webp",
          alt: "NDIS participant reviewing SDA funding documentation with support coordinator"
        }}
        ctaText="View SDA Properties"
        ctaHref="/properties"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/about-sda/design-categories-explained">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back: Design Categories
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/about-sda/application-process">
                  Next: Application Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA funding overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Funding Overview
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How SDA Funding Works
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                SDA funding is designed to cover the additional costs of specialized accessibility features while 
                requiring a reasonable contribution from participants toward general housing costs.
              </p>
            </div>

            <Card className="mb-8 bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">
                      Key Principle: Shared Cost Model
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      SDA uses a shared cost model where the NDIS pays for specialized accessibility features and 
                      design elements, while participants contribute toward general housing costs that any tenant 
                      would pay. This ensures sustainability while making specialized housing affordable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding Components */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="SDA funding components">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Funding Components
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Understanding SDA Funding Components
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                SDA funding has several components that work together to provide affordable specialized housing.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {fundingDetails.map((detail, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                        <detail.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                          {detail.calculation}
                        </Badge>
                        <CardTitle className="text-lg text-[hsl(var(--heading))]">{detail.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{detail.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>How it works:</strong> {detail.details}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Examples include:</h4>
                      <div className="space-y-1">
                        {detail.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                            <span className="text-[hsl(var(--body))] text-xs">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--background))] p-3 rounded border-l-4 border-[hsl(var(--primary))]">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>Key Point:</strong> {detail.keyPoint}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA cost breakdown">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Cost Breakdown
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Who Pays for What in SDA?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Understanding the cost breakdown helps you budget and plan for your SDA housing costs.
              </p>
            </div>

            <div className="space-y-6">
              {costBreakdown.map((component, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="font-bold text-[hsl(var(--heading))] mb-1">{component.component}</h3>
                        <div className="text-2xl font-bold text-[hsl(var(--primary))]">{component.percentage}</div>
                      </div>
                      <div>
                        <p className="text-[hsl(var(--body))] text-sm mb-2">{component.description}</p>
                        <Badge variant="outline" className="text-xs">{component.paidBy}</Badge>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 text-sm">Covers:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {component.covers.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-[hsl(var(--primary))] rounded-full"></div>
                              <span className="text-[hsl(var(--body))] text-xs">{item}</span>
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

      {/* Pricing Examples */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="SDA pricing examples">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Pricing Examples
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                SDA Pricing by Design Category
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Actual pricing examples showing how design category and location affect SDA funding rates.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {pricingExamples.map((example, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <example.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <div>
                        <CardTitle className="text-lg text-[hsl(var(--heading))]">{example.category}</CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge className="text-xs bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                            {example.dailyRate}/day
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {example.annualRange}/year
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {example.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                            <span className="text-[hsl(var(--body))] text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--lighter-orange))] p-3 rounded">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 text-sm">Location Pricing:</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-[hsl(var(--body))] text-xs">Metropolitan:</span>
                          <span className="font-semibold text-[hsl(var(--heading))] text-xs">{example.locations.metro}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[hsl(var(--body))] text-xs">Regional:</span>
                          <span className="font-semibold text-[hsl(var(--heading))] text-xs">{example.locations.regional}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[hsl(var(--body))] text-xs">Remote:</span>
                          <span className="font-semibold text-[hsl(var(--heading))] text-xs">{example.locations.remote}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calculator className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">
                      Calculate Your Costs
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      To estimate your total housing costs, add your rent contribution (25-30% of income) to any 
                      additional costs not covered by SDA funding, such as personal items, food, and optional services.
                    </p>
                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <p className="text-[hsl(var(--body))] text-sm">
                        <strong>Example:</strong> Disability Support Pension ($1,000/month) × 25% = $250/month rent contribution + 
                        SDA funding covers accessibility features = Total affordable housing solution.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Planning Tips */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Financial planning tips">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Financial Planning
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Smart Financial Planning for SDA
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Plan ahead to make the most of your SDA funding and ensure sustainable housing costs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {financialTips.map((tipCategory, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-3">
                      <tipCategory.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {tipCategory.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tipCategory.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                          <span className="text-[hsl(var(--body))] text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics Navigation */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Related SDA topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Continue Learning
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Next Steps in Your SDA Journey
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Now that you understand funding, learn about the practical steps to access SDA housing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Application Process</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Step-by-step guide to applying for SDA</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/application-process">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Housing Selection</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">How to choose the right SDA housing</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/housing-selection-guide">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Receipt className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Rights & Support</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Your rights and available support resources</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/rights-and-support">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore SDA Funding Options?"
        description="Understanding SDA funding is the first step toward accessing specialized housing. Our team can help you navigate the funding process and find suitable options within your budget."
        primaryButtonText="Get Funding Guidance"
        primaryButtonLink="/contact"
        secondaryButtonText="View SDA Properties"
        secondaryButtonLink="/properties"
        imageSrc="/png/business-19148_1920.jpg"
        mobileImageSrc="/png/1.webp"
        imageAlt="NDIS participant reviewing SDA funding options with financial advisor"
        footerText="Need help understanding your SDA funding? Our team"
        footerLinkText="can provide expert guidance"
        footerLinkHref="/contact"
      />
    </>
  )
} 