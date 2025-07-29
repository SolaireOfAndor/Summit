import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/sections/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { 
  Heart,
  Home,
  Navigation,
  Package,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Clock,
  Calculator,
  Target,
  TrendingUp,
  Info,
  Lightbulb,
  ArrowUpCircle,
  ShoppingCart,
  Calendar,
  Timer,
  AlertCircle,
  BookOpen,
  Boxes
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Core Support Guide | How to Use Your Most Flexible NDIS Funding",
  description: "Master Core Support - your most flexible NDIS funding category. Learn about daily living support, transport, consumables, and community participation funding with practical usage strategies.",
  keywords: "Core Support, NDIS Core Support, daily living support, NDIS transport, consumables funding, community participation, flexible NDIS funding, Core Support guide",
  openGraph: {
    title: "Complete Core Support Guide | How to Use Your Most Flexible NDIS Funding",
    description: "Comprehensive guide to using Core Support funding effectively - from daily living to community participation. Maximize your most flexible NDIS budget category.",
    type: "article",
    images: [
      {
        url: "/header/page-header-4.webp",
        width: 1200,
        height: 630,
        alt: "NDIS participant using Core Support funding for daily activities with support worker"
      }
    ]
  },
  alternates: {
    canonical: "/learn/funding/core-support-guide"
  }
}

// Core Support Types Detail
const coreSupportTypes = [
  {
    title: "Assistance with Daily Life",
    description: "Personal care, domestic assistance, and daily living support",
    icon: Home,
    percentage: "40-60%",
    percentageNote: "of typical Core budget",
    examples: ["Personal care assistance", "Meal preparation", "Cleaning and household tasks", "Shopping assistance", "Medication management", "Companionship support"],
    flexibility: "Very High",
    flexibilityNote: "Can adjust hours and types of support as needed",
    bestFor: [
      "People who need help with personal care tasks",
      "Those requiring domestic assistance",
      "Participants who need support with daily routines"
    ],
    usageTips: [
      "Can be used for both ongoing daily support and one-off assistance",
      "Includes both hands-on support and supervision/prompting",
      "Can combine different types of daily living support",
      "Flexible timing - use when you need it most"
    ]
  },
  {
    title: "Transport", 
    description: "Getting to appointments, community activities, and social events",
    icon: Navigation,
    percentage: "10-20%",
    percentageNote: "of typical Core budget",
    examples: ["Taxi vouchers", "Specialized transport services", "Public transport training", "Support worker travel time", "Accessible vehicle hire", "Travel to appointments"],
    flexibility: "Very High",
    flexibilityNote: "Use for any reasonable transport need related to your disability",
    bestFor: [
      "People who cannot use standard public transport",
      "Those needing support to travel safely",
      "Participants in areas with limited accessible transport"
    ],
    usageTips: [
      "Combine errands and appointments to maximize efficiency",
      "Include support worker travel time if needed",
      "Can be used for both essential and social travel",
      "Consider training in public transport use for independence"
    ]
  },
  {
    title: "Consumables",
    description: "Disability-related items you use regularly and need to replace",
    icon: Package,
    percentage: "5-15%",
    percentageNote: "of typical Core budget",
    examples: ["Continence aids", "Wound care supplies", "Nutritional supplements", "Low-cost assistive technology", "Communication aids", "Sensory support items"],
    flexibility: "High",
    flexibilityNote: "Must be disability-related but wide range of eligible items",
    bestFor: [
      "People with ongoing consumable needs",
      "Those requiring specialized dietary supplements",
      "Participants needing regular replacement items"
    ],
    usageTips: [
      "Buy in bulk when possible for better value",
      "Keep receipts for all consumable purchases",
      "Focus on items that directly support your independence",
      "Consider low-cost assistive technology options"
    ]
  },
  {
    title: "Social & Community Participation",
    description: "Support to participate in community, social, and recreational activities",
    icon: Users,
    percentage: "15-30%",
    percentageNote: "of typical Core budget",
    examples: ["Community access support", "Social skills development", "Recreation activities", "Peer support programs", "Group activities", "Educational courses"],
    flexibility: "Very High",
    flexibilityNote: "Wide range of community and social activities supported",
    bestFor: [
      "People wanting to increase community involvement",
      "Those developing social skills and relationships",
      "Participants seeking recreational opportunities"
    ],
    usageTips: [
      "Focus on activities that build long-term social connections",
      "Combine with other participants to share costs",
      "Use to try new activities and discover interests",
      "Document how activities support your NDIS goals"
    ]
  }
]

// Core Support Flexibility Advantages
const flexibilityAdvantages = [
  {
    title: "Move Funds Between Core Types",
    description: "Unlike other categories, you can move funding between different Core Support types without NDIS approval",
    example: "Need more transport funding this month and less personal care? You can adjust without paperwork.",
    icon: RefreshCw
  },
  {
    title: "Adapt to Changing Needs",
    description: "Your support needs might vary month to month - Core Support flexibility allows you to respond",
    example: "Winter months might need more domestic support, summer more community access funding.",
    icon: Calendar
  },
  {
    title: "No Prior Approval Required",
    description: "Most Core Support services can be accessed immediately without waiting for NDIS approval",
    example: "Find a new support worker or service? Start using them right away within your Core budget.",
    icon: Timer
  },
  {
    title: "Combine Services Creatively",
    description: "Mix and match different Core Support types to create the exact support package you need",
    example: "Combine personal care, transport, and community access in one outing for efficiency.",
    icon: Boxes
  }
]

// Smart Budgeting Strategies
const budgetingStrategies = [
  {
    category: "Monthly Planning",
    icon: Calculator,
    tips: [
      {
        title: "Track your spending patterns",
        description: "Monitor how much you spend on each Core Support type monthly to identify trends",
        actionStep: "Create a simple spreadsheet or use an app to track monthly spending by category"
      },
      {
        title: "Plan for seasonal variations",
        description: "Some months cost more than others - plan for holidays, weather changes, health variations",
        actionStep: "Set aside 10-15% of monthly budget for unexpected needs or seasonal increases"
      },
      {
        title: "Review and adjust regularly",
        description: "Check your spending monthly and adjust the balance between Core Support types",
        actionStep: "Monthly review: What worked well? What would you change next month?"
      }
    ]
  },
  {
    category: "Maximizing Value",
    icon: Target,
    tips: [
      {
        title: "Group activities for efficiency",
        description: "Combine errands, appointments, and social activities to maximize support worker time",
        actionStep: "Plan weekly outings that combine shopping, appointments, and social activities"
      },
      {
        title: "Build independence over time",
        description: "Use Core Support to practice skills that gradually reduce your need for paid support",
        actionStep: "Work with support workers on skill development, not just task completion"
      },
      {
        title: "Compare provider costs",
        description: "Core Support providers have different rates - shop around for value",
        actionStep: "Get quotes from multiple providers for regular services like cleaning or personal care"
      }
    ]
  },
  {
    category: "Long-term Success",
    icon: TrendingUp,
    tips: [
      {
        title: "Document outcomes for plan reviews",
        description: "Keep records of how Core Support helps you achieve your goals",
        actionStep: "Monthly notes on progress towards independence, skills gained, and quality of life improvements"
      },
      {
        title: "Build backup support options",
        description: "Have multiple providers or support options to ensure continuity of care",
        actionStep: "Identify 2-3 reliable providers for each type of Core Support you use"
      },
      {
        title: "Prepare for plan reviews",
        description: "Use your Core Support experience to advocate for appropriate funding in future plans",
        actionStep: "Compile 6-12 months of spending data and outcomes before plan review meetings"
      }
    ]
  }
]

// Common Core Support Scenarios
const commonScenarios = [
  {
    title: "High Daily Support Needs",
    description: "Participants requiring significant personal care and domestic assistance",
    typicalSplit: { daily: "60-70%", transport: "10-15%", consumables: "10-15%", community: "10-15%" },
    focusAreas: ["Personal care routines", "Meal preparation and nutrition", "Household management", "Essential transport"],
    tips: ["Focus on skill development within personal care", "Streamline domestic tasks for efficiency", "Combine errands with personal care visits"]
  },
  {
    title: "Community-Focused Lifestyle",
    description: "Participants prioritizing social engagement and community participation",
    typicalSplit: { daily: "30-40%", transport: "20-25%", consumables: "5-10%", community: "35-45%" },
    focusAreas: ["Regular community activities", "Social skill development", "Recreational pursuits", "Transport to social venues"],
    tips: ["Join group activities to share costs", "Use transport strategically for social activities", "Document social outcomes for plan reviews"]
  },
  {
    title: "Independence Building",
    description: "Participants working towards greater independence",
    typicalSplit: { daily: "40-50%", transport: "15-20%", consumables: "10-15%", community: "20-25%" },
    focusAreas: ["Skill development", "Gradual reduction in support", "Community integration", "Learning opportunities"],
    tips: ["Set specific independence goals", "Practice skills with support worker guidance", "Gradually increase unsupported activities"]
  }
]

// FAQ for Core Support
const coreSupportFAQ = [
  {
    question: "Can I change how I use my Core Support funding during my plan?",
    answer: "Yes! This is the main advantage of Core Support. You can move funding between different Core Support types (daily life, transport, consumables, community participation) without needing NDIS approval. However, you cannot move Core Support funding to Capital Support or Capacity Building categories."
  },
  {
    question: "What if I need more Core Support than my plan provides?",
    answer: "If your Core Support needs increase significantly, you can request an unscheduled plan review. Document how your needs have changed and provide evidence from healthcare professionals if relevant. You may also consider using some Capacity Building funding for skill development that could reduce Core Support needs."
  },
  {
    question: "Can I use Core Support funding for one-off purchases or just ongoing support?",
    answer: "Core Support can be used for both ongoing services (like regular personal care) and one-off needs (like help with spring cleaning or support during illness). The key is that it must be disability-related and help with daily living activities."
  },
  {
    question: "How do I know if something should come from Core Support or Capital Support?",
    answer: "Generally, if it's an ongoing service or support, it comes from Core Support. If it's equipment or modifications that last years, it's Capital Support. For example: personal care is Core Support, but a shower chair is Capital Support. When in doubt, ask your plan manager."
  },
  {
    question: "Can I hire family members as Core Support workers?",
    answer: "This depends on your plan management type. If you're self-managed, you generally can hire family members. If plan-managed or NDIA-managed, there are restrictions on hiring family members. Check with your plan manager for your specific situation."
  },
  {
    question: "What records do I need to keep for Core Support spending?",
    answer: "Keep all receipts, invoices, and service agreements. If self-managed, you'll need detailed records for claiming. Also document how services help achieve your NDIS goals - this is valuable for plan reviews and shows appropriate use of funding."
  }
]

export default function CoreSupportGuidePage() {
  return (
    <>
      <PageHero
        title="Complete Core Support Guide"
        description="Master your most flexible NDIS funding category. Learn how to use Core Support for daily living, transport, consumables, and community participation with proven strategies and tips."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "NDIS Funding", href: "/learn/funding" },
          { title: "Core Support Guide", href: "/learn/funding/core-support-guide" }
        ]}
        heroImage={{
          src: "/header/page-header-4.webp",
          alt: "NDIS participant using Core Support funding for daily activities with support worker"
        }}
        ctaText="Get Core Support Help"
        ctaHref="/contact"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/funding/budget-categories">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Budget Categories
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/funding/capital-support">
                  Next: Capital Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Core Support overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Your Most Flexible Funding
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Why Core Support is Your Most Valuable Category
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Core Support typically represents 85% of your NDIS funding and offers the highest flexibility. 
                Understanding how to use it effectively is crucial for getting the most from your plan.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-[hsl(var(--pure-white))] shadow-lg border-l-4 border-l-[hsl(var(--primary))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Maximum Flexibility</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      Unlike other NDIS categories, Core Support lets you move funding between different 
                      support types without approval. Need more transport this month? Less personal care? 
                      You can adjust instantly.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Move funds freely</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">No approval needed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Adapt to changing needs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Start services immediately</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Calculator className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Smart Budgeting</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      With great flexibility comes responsibility. Learn to track spending, plan ahead, 
                      and make strategic decisions about how to use your Core Support funding most effectively.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/png/1.webp"
                    alt="NDIS participant using Core Support with support worker for daily activities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-lg border max-w-xs">
                  <p className="text-[hsl(var(--body))] text-sm">
                    <strong className="text-[hsl(var(--heading))]">85% of funding:</strong> Core Support is typically 
                    your largest budget category, making it crucial to use effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Support Types Breakdown */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Core Support types breakdown">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                The Four Types
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Understanding the 4 Core Support Types
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Core Support is divided into four main types. Each serves different needs but you can move funding 
                between them freely to match your changing requirements.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {coreSupportTypes.map((type, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                        <type.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-[hsl(var(--heading))]">{type.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">Flexibility: {type.flexibility}</Badge>
                          <Badge variant="secondary" className="text-xs">{type.percentage}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{type.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Common Examples:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {type.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full"></div>
                            <span className="text-[hsl(var(--body))] text-sm">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Best for:</h4>
                      {type.bestFor.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-[hsl(var(--body))] text-xs">• {item}</p>
                      ))}
                    </div>

                    <div className="bg-[hsl(var(--background))] p-3 rounded border-l-4 border-[hsl(var(--primary))]">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Usage Tips:</h4>
                      {type.usageTips.map((tip, tipIndex) => (
                        <p key={tipIndex} className="text-[hsl(var(--body))] text-xs mb-1">• {tip}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flexibility Advantages */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Core Support flexibility advantages">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Unique Benefits
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Why Core Support Flexibility Matters
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                The flexibility of Core Support gives you real control over your daily support. 
                Here's how to make the most of this unique advantage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {flexibilityAdvantages.map((advantage, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                        <advantage.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[hsl(var(--heading))] mb-2">{advantage.title}</h3>
                        <p className="text-[hsl(var(--body))] text-sm mb-3">{advantage.description}</p>
                        <div className="bg-[hsl(var(--lighter-orange))] p-3 rounded">
                          <p className="text-[hsl(var(--body))] text-xs">
                            <strong>Example:</strong> {advantage.example}
                          </p>
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

      {/* Smart Budgeting Strategies */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Core Support budgeting strategies">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Smart Strategies
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Core Support Budgeting Strategies
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Learn proven strategies to maximize your Core Support funding and ensure it lasts your full plan period.
              </p>
            </div>

            <div className="space-y-8">
              {budgetingStrategies.map((strategy, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(var(--heading))] flex items-center gap-3">
                      <strategy.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {strategy.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {strategy.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="p-4 bg-[hsl(var(--lighter-orange))] rounded-lg">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">{tip.title}</h4>
                          <p className="text-[hsl(var(--body))] text-sm mb-3">{tip.description}</p>
                          <div className="bg-[hsl(var(--pure-white))] p-2 rounded border-l-4 border-[hsl(var(--primary))]">
                            <p className="text-[hsl(var(--body))] text-xs">
                              <strong>Action:</strong> {tip.actionStep}
                            </p>
                          </div>
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

      {/* Common Scenarios */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Common Core Support scenarios">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Real Examples
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Common Core Support Scenarios
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                See how different participants typically split their Core Support funding based on their needs and goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {commonScenarios.map((scenario, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))]">{scenario.title}</CardTitle>
                    <p className="text-[hsl(var(--body))] text-sm">{scenario.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Typical Budget Split:</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-[hsl(var(--body))]">Daily Life:</span>
                          <span className="font-medium text-[hsl(var(--heading))]">{scenario.typicalSplit.daily}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[hsl(var(--body))]">Transport:</span>
                          <span className="font-medium text-[hsl(var(--heading))]">{scenario.typicalSplit.transport}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[hsl(var(--body))]">Consumables:</span>
                          <span className="font-medium text-[hsl(var(--heading))]">{scenario.typicalSplit.consumables}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[hsl(var(--body))]">Community:</span>
                          <span className="font-medium text-[hsl(var(--heading))]">{scenario.typicalSplit.community}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Focus Areas:</h4>
                      <div className="space-y-1">
                        {scenario.focusAreas.map((area, areaIndex) => (
                          <div key={areaIndex} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                            <span className="text-[hsl(var(--body))] text-sm">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Key Tips:</h4>
                      {scenario.tips.map((tip, tipIndex) => (
                        <p key={tipIndex} className="text-[hsl(var(--body))] text-xs mb-1">• {tip}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Core Support FAQ">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Common Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Core Support Questions & Answers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Find answers to frequently asked questions about using Core Support funding effectively.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {coreSupportFAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border shadow-sm">
                  <AccordionTrigger className="text-[hsl(var(--heading))] font-medium text-left hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[hsl(var(--body))] leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Topics Navigation */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Related funding topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                What's Next?
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Explore Other Funding Categories
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Now that you understand Core Support, learn about the other NDIS funding categories.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Package className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Capital Support</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Equipment and modification funding guide</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/funding/capital-support">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Capacity Building</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Skills and independence building guide</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/funding/capacity-building">
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
        title="Need Help Optimizing Your Core Support?"
        description="Our experienced team can help you develop strategies to make the most of your Core Support funding and achieve your independence goals."
        primaryButtonText="Get Core Support Help"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/properties"
        imageSrc="/png/2.webp"
        mobileImageSrc="/png/1.webp"
        imageAlt="NDIS participant working with support coordinator on Core Support strategies"
        footerText="Ready to maximize your Core Support? Our team"
        footerLinkText="can help you get started"
        footerLinkHref="/contact"
      />
    </>
  )
} 