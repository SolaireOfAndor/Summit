import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { 
  Layers,
  Heart,
  Building2,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  RefreshCw,
  Lock,
  Target,
  Users,
  Home,
  Navigation,
  Package,
  Settings,
  Info,
  AlertCircle,
  Lightbulb,
  Scale,
  Calendar,
  Clock,
  ArrowUpCircle,
  ArrowDownCircle,
  Shield,
  Star,
  Eye
} from "lucide-react"

export const metadata: Metadata = {
  title: "NDIS Budget Categories Explained | Core, Capital & Capacity Building Support",
  description: "Complete guide to the 3 NDIS budget categories - Core Support, Capital Support, and Capacity Building. Understand how each category works, funding flexibility, and smart usage strategies.",
  keywords: "NDIS budget categories, Core Support, Capital Support, Capacity Building, NDIS funding categories, budget flexibility, NDIS supports, disability funding types",
  openGraph: {
    title: "NDIS Budget Categories Explained | Core, Capital & Capacity Building",
    description: "Master the 3 NDIS budget categories with our comprehensive guide covering flexibility, usage rules, and optimization strategies.",
    type: "article",
    images: [
      {
        url: "/header/page-header-4.webp",
        width: 1200,
        height: 630,
        alt: "NDIS participant learning about budget categories with support coordinator"
      }
    ]
  },
  alternates: {
    canonical: "/learn/funding/budget-categories"
  }
}

// Detailed Support Categories
const detailedCategories = [
  {
    title: "Core Support",
    subtitle: "Your Essential Daily Supports",
    description: "Funding for your everyday disability-related support needs including assistance with daily activities, consumables, and transport.",
    icon: Heart,
    percentage: "85%",
    percentageNote: "of total NDIS funding",
    color: "bg-[hsl(var(--lighter-orange))] border-[hsl(var(--light-orange))]",
    iconColor: "text-[hsl(var(--primary))]",
    flexibility: "High",
    flexibilityDescription: "Funds can move freely between different Core Support types without approval",
    includes: [
      "Assistance with Daily Life",
      "Transport",
      "Consumables & Equipment", 
      "Social & Community Participation"
    ],
    features: [
      { icon: RefreshCw, text: "Most flexible budget category" },
      { icon: ArrowUpCircle, text: "Funds can move between Core Support types" },
      { icon: Clock, text: "Use throughout your plan period" },
      { icon: Users, text: "Includes support worker costs" }
    ],
    usageTips: [
      "Monitor spending monthly to stay on track",
      "Adjust funding between types based on changing needs",
      "Use for both ongoing and one-off supports",
      "Perfect for variable monthly expenses"
    ]
  },
  {
    title: "Capital Support",
    subtitle: "Your Equipment & Home Solutions", 
    description: "Funding for assistive technology, equipment, home modifications, and vehicle modifications that help you live independently.",
    icon: Building2,
    percentage: "8%",
    percentageNote: "of total NDIS funding",
    color: "bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]",
    iconColor: "text-[hsl(var(--primary))]",
    flexibility: "Low",
    flexibilityDescription: "Specific item funding only - requires quotes, assessments, and approval",
    includes: [
      "Assistive Technology",
      "Home Modifications",
      "Vehicle Modifications",
      "Specialist Disability Accommodation (SDA)"
    ],
    features: [
      { icon: Lock, text: "Specific item funding only" },
      { icon: Scale, text: "Requires quotes and assessments" },
      { icon: Shield, text: "Long-lasting solutions" },
      { icon: Lightbulb, text: "Innovation and technology focus" }
    ],
    usageTips: [
      "Get multiple quotes for expensive items",
      "Plan purchases well in advance",
      "Keep all documentation and receipts",
      "Consider maintenance and warranty costs"
    ]
  },
  {
    title: "Capacity Building",
    subtitle: "Your Skills & Independence Building",
    description: "Funding for supports that help you build skills, independence, and connections to achieve your goals and increase your capabilities.",
    icon: TrendingUp,
    percentage: "7%",
    percentageNote: "of total NDIS funding", 
    color: "bg-[hsl(var(--background))] border-[hsl(var(--light-orange))]",
    iconColor: "text-[hsl(var(--primary))]",
    flexibility: "Medium",
    flexibilityDescription: "Goal-focused funding with specific outcomes - time-limited investments",
    includes: [
      "Improved Living Arrangements",
      "Increased Social & Community Participation",
      "Finding & Keeping a Job",
      "Improved Relationships",
      "Improved Health & Wellbeing",
      "Improved Learning"
    ],
    features: [
      { icon: Target, text: "Goal-focused supports" },
      { icon: TrendingUp, text: "Builds long-term independence" },
      { icon: Star, text: "Skills development focus" },
      { icon: Eye, text: "Time-limited investments" }
    ],
    usageTips: [
      "Focus on long-term outcomes and goals",
      "Document progress and skill development",
      "Use strategically to reduce future support needs",
      "Combine with other supports for maximum impact"
    ]
  }
]

// Category Comparison Points
const comparisonPoints = [
  {
    aspect: "Flexibility",
    core: "Very High - move funds between types freely",
    capital: "Very Low - specific items only",
    capacity: "Medium - goal-focused usage"
  },
  {
    aspect: "Approval Required",
    core: "No - for moving between Core types",
    capital: "Yes - for most purchases over $1,500",
    capacity: "Sometimes - depends on service type"
  },
  {
    aspect: "Time Limits",
    core: "Use anytime during plan period",
    capital: "No time limits once approved",
    capacity: "Often time-limited programs"
  },
  {
    aspect: "Typical Uses",
    core: "Daily support, transport, consumables",
    capital: "Equipment, home mods, technology",
    capacity: "Therapy, training, skill building"
  },
  {
    aspect: "Documentation",
    core: "Basic receipts and records",
    capital: "Quotes, assessments, detailed records",
    capacity: "Progress reports, outcome measures"
  }
]

// Smart Usage Strategies
const usageStrategies = [
  {
    category: "Maximizing Core Support",
    icon: Heart,
    strategies: [
      {
        title: "Balance your spending across the year",
        description: "Core Support is flexible but you need to pace spending across 12 months",
        tip: "Divide annual Core budget by 12 for monthly guide"
      },
      {
        title: "Use flexibility to adapt to changing needs", 
        description: "Move funds between daily life, transport, and community participation as needed",
        tip: "More transport in winter, more community access in summer"
      },
      {
        title: "Combine supports for efficiency",
        description: "Group activities to make the most of support worker time and transport",
        tip: "Grocery shopping + medical appointments in one trip"
      }
    ]
  },
  {
    category: "Optimizing Capital Support",
    icon: Building2,
    strategies: [
      {
        title: "Plan major purchases carefully",
        description: "Capital items should last years and provide ongoing independence benefits",
        tip: "Consider total cost of ownership including maintenance"
      },
      {
        title: "Get multiple quotes and assessments",
        description: "NDIS requires evidence of need and value for money for Capital purchases",
        tip: "Occupational therapy assessment often required"
      },
      {
        title: "Think long-term independence",
        description: "Choose items that reduce reliance on paid supports over time",
        tip: "Equipment that enables self-care reduces Core Support needs"
      }
    ]
  },
  {
    category: "Leveraging Capacity Building",
    icon: TrendingUp,
    strategies: [
      {
        title: "Focus on skill development with lasting impact",
        description: "Invest in training and therapy that builds independence permanently",
        tip: "Skills learned reduce future support needs"
      },
      {
        title: "Set clear, measurable goals",
        description: "Capacity Building is outcome-focused - define what success looks like",
        tip: "Work with providers to set SMART goals"
      },
      {
        title: "Combine with other categories strategically",
        description: "Use with Core and Capital supports to maximize independence outcomes",
        tip: "Equipment + training = better independence results"
      }
    ]
  }
]

// Frequently Asked Questions
const categoryFAQ = [
  {
    question: "Can I move funding between the three main categories?",
    answer: "No, you cannot move funding between Core Support, Capital Support, and Capacity Building categories without NDIS approval. However, within Core Support, you can freely move funds between different Core Support types like daily living, transport, and community participation."
  },
  {
    question: "What happens if I run out of funding in one category?",
    answer: "If you exhaust funding in one category, you generally cannot use funding from other categories. You may need to request a plan review to adjust your funding allocation, or wait until your next planned review to discuss changes."
  },
  {
    question: "How do I know which category a support comes from?",
    answer: "Each support item in your plan is categorized specifically. Your plan document shows which category each line item comes from. When in doubt, check with your plan manager, support coordinator, or the NDIS directly."
  },
  {
    question: "Why is Capital Support funding so restrictive?",
    answer: "Capital Support items are typically expensive, long-lasting purchases. The NDIS requires careful assessment to ensure items are necessary, provide value for money, and will genuinely increase your independence. This prevents inappropriate spending on unnecessary equipment."
  },
  {
    question: "Can I save Capacity Building funding for later in my plan?",
    answer: "While you can use Capacity Building funding anytime during your plan period, many Capacity Building supports are time-limited programs. It's often better to use this funding early to build skills that benefit you throughout your plan period."
  },
  {
    question: "What if I need something that doesn't clearly fit one category?",
    answer: "Some supports might seem to fit multiple categories. Discuss with your plan manager or support coordinator to determine the correct category. The key is understanding the primary purpose - daily support (Core), equipment/modifications (Capital), or skill building (Capacity)."
  }
]

export default function BudgetCategoriesPage() {
  return (
    <>
      <PageHero
        title="NDIS Budget Categories Explained"
        description="Master the three NDIS budget categories - Core Support, Capital Support, and Capacity Building. Understand how each works, their flexibility levels, and smart usage strategies."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "NDIS Funding", href: "/learn/funding" },
          { title: "Budget Categories", href: "/learn/funding/budget-categories" }
        ]}
        heroImage={{
          src: "/header/page-header-4.webp",
          alt: "NDIS participant learning about budget categories with support coordinator"
        }}
        ctaText="Get Funding Help"
        ctaHref="/contact"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/funding">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Funding Overview
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/funding/core-support-guide">
                  Next: Core Support Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Budget categories overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                The Foundation
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Understanding the 3 Budget Categories
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Your NDIS funding is divided into three distinct categories, each with different rules, flexibility levels, 
                and purposes. Understanding these differences is crucial for effective budget management.
              </p>
            </div>

            <Card className="mb-8 bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">
                      Key Point: Different Rules for Different Categories
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      Each category has different flexibility levels and usage rules. Core Support is highly flexible, 
                      Capital Support is very specific, and Capacity Building is goal-focused. You cannot move funding 
                      between categories without NDIS approval.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Categories */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Detailed budget categories">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Deep Dive
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Each Category Explained in Detail
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Learn how each category works, what's included, and how to use them most effectively.
              </p>
            </div>

            <div className="space-y-12">
              {detailedCategories.map((category, index) => (
                <Card key={index} className={`shadow-xl overflow-hidden ${category.color}`}>
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Category Overview */}
                      <div className="lg:col-span-1 p-8 bg-[hsl(var(--pure-white))]">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-full bg-opacity-10 flex items-center justify-center ${category.iconColor.replace('text-', 'bg-').replace('600', '100')}`}>
                            <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                          </div>
                          <div>
                            <Badge className={`mb-2 ${category.iconColor.replace('text-', 'bg-').replace('600', '100')} ${category.iconColor} border-none`}>
                              {category.percentage} {category.percentageNote}
                            </Badge>
                            <h3 className="text-2xl font-bold text-[hsl(var(--heading))]">{category.title}</h3>
                            <p className="text-[hsl(var(--primary))] font-medium">{category.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-[hsl(var(--body))] leading-relaxed mb-6">{category.description}</p>
                        
                        <div className="space-y-3 mb-6">
                          <h4 className="font-semibold text-[hsl(var(--heading))]">Key Features:</h4>
                          {category.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <feature.icon className="w-4 h-4 text-[hsl(var(--primary))]" />
                              <span className="text-[hsl(var(--body))] text-sm">{feature.text}</span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-[hsl(var(--light-orange))] p-3 rounded-lg">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Flexibility Level: {category.flexibility}</h4>
                          <p className="text-[hsl(var(--body))] text-xs">{category.flexibilityDescription}</p>
                        </div>
                      </div>

                      {/* What's Included */}
                      <div className="lg:col-span-2 p-8">
                        <h4 className="text-xl font-bold text-[hsl(var(--heading))] mb-6">What's Included in {category.title}:</h4>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          {category.includes.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg shadow-sm">
                              <CheckCircle2 className="w-5 h-5 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                              <div>
                                <h5 className="font-semibold text-[hsl(var(--heading))] mb-1">{item}</h5>
                                <p className="text-[hsl(var(--body))] text-sm">
                                  {item === "Assistance with Daily Life" && "Personal care, domestic assistance, meal preparation, shopping support"}
                                  {item === "Transport" && "Getting to appointments, community access, public transport training"}
                                  {item === "Consumables & Equipment" && "Continence aids, wound care, low-cost assistive technology"}
                                  {item === "Social & Community Participation" && "Community access support, social activities, peer support"}
                                  {item === "Assistive Technology" && "Equipment like wheelchairs, communication devices, hearing aids"}
                                  {item === "Home Modifications" && "Ramps, bathroom modifications, accessible doorways, lighting"}
                                  {item === "Vehicle Modifications" && "Hand controls, wheelchair hoists, accessible entry systems"}
                                  {item === "Specialist Disability Accommodation (SDA)" && "Purpose-built accessible housing with specific design features"}
                                  {item === "Improved Living Arrangements" && "Support coordination, specialist support coordination"}
                                  {item === "Increased Social & Community Participation" && "Group programs, community connector, peer support"}
                                  {item === "Finding & Keeping a Job" && "Employment support, job coaching, workplace assessments"}
                                  {item === "Improved Relationships" && "Relationship counseling, family support, social skills training"}
                                  {item === "Improved Health & Wellbeing" && "Allied health therapies, psychology, exercise physiology"}
                                  {item === "Improved Learning" && "Educational support, tutoring, learning programs"}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-[hsl(var(--background))] p-4 rounded-lg border-l-4 border-[hsl(var(--primary))]">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Smart Usage Tips:</h4>
                          <div className="space-y-1">
                            {category.usageTips.map((tip, tipIndex) => (
                              <div key={tipIndex} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-[hsl(var(--body))] text-sm">{tip}</span>
                              </div>
                            ))}
                          </div>
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

      {/* Category Comparison */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Budget category comparison">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Side by Side
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Quick Comparison Guide
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                See how the three categories compare across key aspects to help you understand which category to use for different needs.
              </p>
            </div>

            <Card className="bg-[hsl(var(--pure-white))] shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[hsl(var(--light-orange))]">
                      <tr>
                        <th className="p-4 text-left font-semibold text-[hsl(var(--heading))]">Aspect</th>
                        <th className="p-4 text-left font-semibold text-[hsl(var(--heading))]">
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-[hsl(var(--primary))]" />
                            Core Support
                          </div>
                        </th>
                        <th className="p-4 text-left font-semibold text-[hsl(var(--heading))]">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                            Capital Support
                          </div>
                        </th>
                        <th className="p-4 text-left font-semibold text-[hsl(var(--heading))]">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" />
                            Capacity Building
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonPoints.map((point, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-[hsl(var(--background))]" : "bg-[hsl(var(--pure-white))]"}>
                          <td className="p-4 font-medium text-[hsl(var(--heading))]">{point.aspect}</td>
                          <td className="p-4 text-[hsl(var(--body))] text-sm">{point.core}</td>
                          <td className="p-4 text-[hsl(var(--body))] text-sm">{point.capital}</td>
                          <td className="p-4 text-[hsl(var(--body))] text-sm">{point.capacity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Usage Strategies */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Smart budget usage strategies">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Expert Strategies
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Smart Usage Strategies for Each Category
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Learn proven strategies to maximize the value and effectiveness of each budget category.
              </p>
            </div>

            <div className="space-y-8">
              {usageStrategies.map((strategyGroup, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(var(--heading))] flex items-center gap-3">
                      <strategyGroup.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {strategyGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {strategyGroup.strategies.map((strategy, strategyIndex) => (
                        <div key={strategyIndex} className="p-4 bg-[hsl(var(--lighter-orange))] rounded-lg">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">{strategy.title}</h4>
                          <p className="text-[hsl(var(--body))] text-sm mb-3">{strategy.description}</p>
                          <div className="bg-[hsl(var(--pure-white))] p-2 rounded border-l-4 border-[hsl(var(--primary))]">
                            <p className="text-[hsl(var(--body))] text-xs">
                              <strong>Tip:</strong> {strategy.tip}
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Budget categories FAQ">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Common Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Budget Categories Questions & Answers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Find answers to frequently asked questions about how budget categories work and interact.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {categoryFAQ.map((faq, index) => (
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
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Related funding topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                What's Next?
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Explore Specific Category Guides
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Now that you understand the categories, dive deeper into how to use each one effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Core Support Guide</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Master your most flexible funding category</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/funding/core-support-guide">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
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
        title="Need Help Managing Your NDIS Budget Categories?"
        description="Our experienced team can help you understand how to use each category effectively and develop strategies to maximize your funding outcomes."
        primaryButtonText="Get Budget Help"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/properties"
        imageSrc="/png/2.webp"
        mobileImageSrc="/png/1.webp"
        imageAlt="NDIS participant reviewing budget categories with support coordinator"
        footerText="Ready to optimize your NDIS budget? Our team"
        footerLinkText="can help you get started"
        footerLinkHref="/contact"
      />
    </>
  )
} 