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
  Target,
  TrendingUp,
  Calculator,
  BarChart3,
  ShoppingCart,
  Calendar,
  Receipt,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Lightbulb,
  Clock,
  DollarSign,
  Eye,
  RefreshCw,
  Boxes,
  Users,
  Info,
  Zap,
  Award,
  Settings,
  Timer
} from "lucide-react"

export const metadata: Metadata = {
  title: "NDIS Budget Maximization Guide | Get Maximum Value from Your Funding",
  description: "Master NDIS budget maximization with proven strategies, smart planning tips, and common mistake avoidance. Learn to stretch your funding further and achieve better outcomes.",
  keywords: "NDIS budget maximization, maximize NDIS funding, NDIS value for money, budget strategies, NDIS planning tips, avoid NDIS mistakes, stretch NDIS budget",
  openGraph: {
    title: "NDIS Budget Maximization Guide | Get Maximum Value from Your Funding",
    description: "Comprehensive guide to maximizing your NDIS budget. Learn proven strategies, planning tips, and how to avoid common mistakes to get the most from your funding.",
    type: "article",
    images: [
      {
        url: "/header/page-header-4.webp",
        width: 1200,
        height: 630,
        alt: "NDIS participant working with advisor on budget maximization strategies"
      }
    ]
  },
  alternates: {
    canonical: "/learn/funding/budget-maximization"
  }
}

// Budget Maximization Strategies
const maximizationStrategies = [
  {
    category: "Smart Planning",
    icon: Calculator,
    description: "Strategic approaches to planning your NDIS budget for maximum impact",
    strategies: [
      {
        title: "Create a 12-month budget breakdown",
        detail: "Plan your spending across the full year to avoid running out early",
        actionSteps: [
          "Divide annual funding by 12 for monthly guides",
          "Account for seasonal variations (higher costs in winter/holidays)",
          "Reserve 10-15% for unexpected needs",
          "Review and adjust monthly"
        ],
        impact: "Prevents overspending early and ensures year-round support"
      },
      {
        title: "Align spending with your goals",
        detail: "Every dollar should work toward achieving your NDIS plan goals",
        actionSteps: [
          "Review your plan goals regularly",
          "Evaluate how each support contributes to goals",
          "Prioritize supports with multiple goal benefits",
          "Document outcomes for plan reviews"
        ],
        impact: "Ensures funding is used effectively and supports plan renewal"
      },
      {
        title: "Plan for equipment lifecycle",
        detail: "Understand when equipment needs replacement or upgrades",
        actionSteps: [
          "Track warranty periods and maintenance schedules",
          "Plan for equipment replacement in advance",
          "Consider upgrade timing to maximize value",
          "Budget for maintenance costs"
        ],
        impact: "Avoids equipment failures and emergency replacements"
      }
    ]
  },
  {
    category: "Value Strategies",
    icon: Target,
    description: "Tactics to get better value and outcomes from your spending",
    strategies: [
      {
        title: "Compare provider costs and quality",
        detail: "Shop around for services while maintaining quality standards",
        actionSteps: [
          "Get quotes from multiple providers",
          "Compare hourly rates and service packages",
          "Check references and service quality",
          "Negotiate better rates for regular services"
        ],
        impact: "Can save 15-30% on service costs while maintaining quality"
      },
      {
        title: "Group activities for efficiency",
        detail: "Combine multiple activities to maximize support worker time",
        actionSteps: [
          "Plan combined errands and appointments",
          "Schedule multiple activities in one outing",
          "Coordinate with other participants for shared costs",
          "Use transport efficiently"
        ],
        impact: "Reduces per-activity costs and maximizes independence outcomes"
      },
      {
        title: "Invest in capacity building strategically",
        detail: "Use skills development to reduce future support needs",
        actionSteps: [
          "Identify skills that could reduce Core Support needs",
          "Invest in training that builds permanent abilities",
          "Focus on independence-building activities",
          "Track skill development progress"
        ],
        impact: "Reduces long-term support costs and increases independence"
      }
    ]
  },
  {
    category: "Long-term Optimization",
    icon: TrendingUp,
    description: "Building strategies that provide ongoing benefits and savings",
    strategies: [
      {
        title: "Build informal support networks",
        detail: "Develop family and community connections to complement paid supports",
        actionSteps: [
          "Strengthen relationships with family and friends",
          "Connect with community groups and activities",
          "Develop peer support relationships",
          "Build skills for mutual assistance"
        ],
        impact: "Reduces reliance on paid supports and improves quality of life"
      },
      {
        title: "Document everything for plan reviews",
        detail: "Keep detailed records to justify funding levels and increases",
        actionSteps: [
          "Track outcomes and progress toward goals",
          "Keep receipts and spending records",
          "Document how supports improve independence",
          "Prepare evidence for plan review meetings"
        ],
        impact: "Supports requests for maintained or increased funding"
      },
      {
        title: "Stay informed about NDIS changes",
        detail: "Keep up with policy changes that might affect your funding",
        actionSteps: [
          "Follow official NDIS communications",
          "Join participant information sessions",
          "Connect with other participants and advocates",
          "Understand your rights and entitlements"
        ],
        impact: "Ensures you don't miss opportunities or face unexpected changes"
      }
    ]
  }
]

// Common Budget Mistakes and Solutions
const commonMistakes = [
  {
    mistake: "Front-loading spending",
    description: "Using too much funding early in the plan period",
    consequences: ["Running out of funds before plan ends", "Reduced support when most needed", "Emergency plan reviews"],
    solution: "Create monthly spending targets and stick to them",
    prevention: [
      "Divide annual budget by 12 for monthly guides",
      "Track spending weekly against targets",
      "Build in buffer for unexpected costs",
      "Review and adjust spending patterns monthly"
    ],
    severity: "High Risk"
  },
  {
    mistake: "Not understanding budget categories",
    description: "Trying to use funds from wrong budget categories",
    consequences: ["Funding requests denied", "Delays in accessing supports", "Confusion about what's covered"],
    solution: "Learn which supports come from each category",
    prevention: [
      "Study your plan document thoroughly",
      "Ask questions about category restrictions",
      "Work with support coordinator to understand rules",
      "Keep a reference guide for common purchases"
    ],
    severity: "Medium Risk"
  },
  {
    mistake: "Poor record keeping",
    description: "Not maintaining proper documentation and receipts",
    consequences: ["Difficulties with plan reviews", "Problems claiming reimbursements", "Unable to track spending patterns"],
    solution: "Use apps or systems to track all expenses",
    prevention: [
      "Choose a record-keeping method that works for you",
      "Take photos of receipts immediately",
      "Set up regular filing and organization time",
      "Use digital tools for automatic tracking"
    ],
    severity: "Medium Risk"
  },
  {
    mistake: "Ignoring capacity building opportunities",
    description: "Focusing only on daily supports without skill development",
    consequences: ["Missed opportunities for independence", "Higher long-term support costs", "Limited progress toward goals"],
    solution: "Invest in training and therapy that builds skills",
    prevention: [
      "Regularly review capacity building goals",
      "Identify skills that could reduce support needs",
      "Work with therapists on independence goals",
      "Track skill development progress"
    ],
    severity: "Low Risk"
  },
  {
    mistake: "Not reviewing spending regularly",
    description: "Waiting until plan review to address funding issues",
    consequences: ["Problems identified too late", "Overspending without realizing", "Missed opportunities for adjustments"],
    solution: "Monitor budget monthly and request reviews when needed",
    prevention: [
      "Set up monthly budget review meetings",
      "Use budgeting apps for real-time tracking",
      "Schedule quarterly comprehensive reviews",
      "Know when and how to request plan reviews"
    ],
    severity: "Medium Risk"
  }
]

// Budget Optimization Tools and Techniques
const optimizationTools = [
  {
    category: "Digital Tools",
    description: "Apps and software to help track and manage your budget",
    tools: [
      {
        name: "NDIS Apps",
        purpose: "Official and unofficial apps for tracking spending",
        benefits: ["Real-time budget monitoring", "Category breakdowns", "Receipt storage"],
        cost: "Free to $10/month"
      },
      {
        name: "Expense Tracking Apps",
        purpose: "General budgeting apps adapted for NDIS use",
        benefits: ["Automatic categorization", "Photo receipt storage", "Spending reports"],
        cost: "Free to $15/month"
      },
      {
        name: "Calendar Integration",
        purpose: "Planning and scheduling support services",
        benefits: ["Service coordination", "Reminder systems", "Cost planning"],
        cost: "Usually free"
      }
    ]
  },
  {
    category: "Planning Systems",
    description: "Organizational methods for budget management",
    tools: [
      {
        name: "Monthly Budget Templates",
        purpose: "Structured planning for each month's spending",
        benefits: ["Clear spending targets", "Visual progress tracking", "Easy adjustments"],
        cost: "Free"
      },
      {
        name: "Goal Tracking Sheets",
        purpose: "Monitor progress toward NDIS plan goals",
        benefits: ["Evidence for plan reviews", "Outcome documentation", "Progress motivation"],
        cost: "Free"
      },
      {
        name: "Provider Comparison Charts",
        purpose: "Compare costs and quality across providers",
        benefits: ["Better value decisions", "Quality benchmarking", "Negotiation support"],
        cost: "Free"
      }
    ]
  },
  {
    category: "Professional Support",
    description: "Expert assistance for budget optimization",
    tools: [
      {
        name: "Support Coordination",
        purpose: "Professional guidance on funding use",
        benefits: ["Expert advice", "Provider connections", "Plan optimization"],
        cost: "Funded by NDIS"
      },
      {
        name: "Financial Counseling",
        purpose: "Specialized budgeting and financial planning",
        benefits: ["Professional budgeting skills", "Long-term planning", "Crisis prevention"],
        cost: "$100-200/session"
      },
      {
        name: "Plan Management",
        purpose: "Professional administration of your funding",
        benefits: ["Reduced admin burden", "Expert knowledge", "Professional reporting"],
        cost: "Funded by NDIS"
      }
    ]
  }
]

// Seasonal Budget Considerations
const seasonalConsiderations = [
  {
    season: "Summer (Dec-Feb)",
    considerations: [
      "Higher transport costs for air-conditioned vehicles",
      "Increased community activities and social events",
      "Holiday period - some services may be limited",
      "Swimming and water activity support needs"
    ],
    budgetTips: [
      "Plan for holiday season service gaps",
      "Budget extra for cooling and transport",
      "Take advantage of community summer programs",
      "Consider respite options during school holidays"
    ]
  },
  {
    season: "Autumn (Mar-May)",
    considerations: [
      "Return to routine after holidays",
      "School term activities resume",
      "Mild weather - good for outdoor activities",
      "Flu season preparation"
    ],
    budgetTips: [
      "Resume regular service schedules",
      "Plan for health and wellness activities",
      "Use mild weather for capacity building activities",
      "Review and adjust year-to-date spending"
    ]
  },
  {
    season: "Winter (Jun-Aug)",
    considerations: [
      "Higher heating and comfort costs",
      "Increased indoor activities",
      "Higher risk of illness and health issues",
      "Reduced outdoor and transport activities"
    ],
    budgetTips: [
      "Budget for winter heating and comfort needs",
      "Plan indoor alternatives for activities",
      "Consider health and wellness investments",
      "Prepare for mid-year plan reviews"
    ]
  },
  {
    season: "Spring (Sep-Nov)",
    considerations: [
      "Renewed energy for activities and goals",
      "Good weather for outdoor activities",
      "Plan review season for many participants",
      "Year-end budget considerations"
    ],
    budgetTips: [
      "Use spring energy for capacity building",
      "Prepare documentation for plan reviews",
      "Plan end-of-year spending carefully",
      "Consider equipment purchases before plan ends"
    ]
  }
]

// Budget Maximization FAQ
const budgetFAQ = [
  {
    question: "How can I tell if I'm getting good value from my NDIS funding?",
    answer: "Good value means your funding is helping you achieve your goals effectively. Track outcomes like increased independence, skill development, and quality of life improvements. Compare costs between providers for similar services, and regularly assess whether your supports are meeting your needs efficiently."
  },
  {
    question: "What's the best way to track my NDIS spending?",
    answer: "Use a combination of digital tools and simple organization. Take photos of receipts immediately, use budgeting apps that can categorize NDIS expenses, and review your spending weekly. Many participants find success with simple spreadsheets or specialized NDIS tracking apps."
  },
  {
    question: "How much should I keep in reserve for unexpected costs?",
    answer: "A good rule of thumb is to keep 10-15% of your annual budget as a buffer for unexpected needs. This might include equipment repairs, additional support during illness, or opportunities for beneficial but unplanned activities."
  },
  {
    question: "Is it worth switching providers to save money?",
    answer: "Consider the total value, not just cost. A slightly more expensive provider might offer better outcomes, reliability, or convenience that provides better overall value. However, if you can get the same quality service for less, switching can free up funding for other priorities."
  },
  {
    question: "How do I avoid overspending early in my plan?",
    answer: "Create monthly spending targets by dividing your annual budget by 12, then adjust for seasonal variations. Track your spending weekly and set up alerts when you're approaching monthly limits. Having a clear spending plan prevents impulsive decisions that can deplete your budget."
  },
  {
    question: "What should I do if I'm consistently underspending my budget?",
    answer: "Underspending might indicate unmet needs or opportunities for additional supports. Consider whether you could benefit from more capacity building, equipment upgrades, or increased community participation. Discuss with your support coordinator about optimizing your funding use."
  }
]

export default function BudgetMaximizationPage() {
  return (
    <>
      <PageHero
        title="NDIS Budget Maximization Guide"
        description="Master proven strategies to get maximum value from your NDIS funding. Learn smart planning, value optimization, and how to avoid common budget mistakes for better outcomes."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "NDIS Funding", href: "/learn/funding" },
          { title: "Budget Maximization", href: "/learn/funding/budget-maximization" }
        ]}
        heroImage={{
          src: "/header/page-header-4.webp",
          alt: "NDIS participant working with advisor on budget maximization strategies"
        }}
        ctaText="Get Budget Help"
        ctaHref="/contact"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/funding/plan-management">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Plan Management
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/funding">
                  Complete: Back to Overview
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Budget maximization overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Maximize Your Investment
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Get Maximum Value from Every Dollar
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Your NDIS funding is an investment in your independence and quality of life. Learn proven strategies 
                to stretch your budget further, avoid common mistakes, and achieve better outcomes.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-[hsl(var(--pure-white))] shadow-lg border-l-4 border-l-[hsl(var(--primary))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Strategic Approach</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      Budget maximization isn't about spending less - it's about spending smarter. Every dollar 
                      should work toward your goals and provide the maximum benefit for your independence and quality of life.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Smart planning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Value optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Regular monitoring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Better outcomes</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Long-term Thinking</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      The best budget strategies provide benefits that extend beyond your current plan. 
                      Focus on investments that build skills, relationships, and independence over time.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/png/1.webp"
                    alt="NDIS participant reviewing budget optimization strategies with support coordinator"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-lg border max-w-xs">
                  <p className="text-[hsl(var(--body))] text-sm">
                    <strong className="text-[hsl(var(--heading))]">Smart spending:</strong> Participants who actively 
                    manage their budgets typically achieve 25-40% better outcomes from the same funding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maximization Strategies */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Budget maximization strategies">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Proven Strategies
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Three Pillars of Budget Maximization
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Master these three strategic approaches to get maximum value from your NDIS funding.
              </p>
            </div>

            <div className="space-y-12">
              {maximizationStrategies.map((pillar, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(var(--heading))] flex items-center gap-3">
                      <pillar.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {pillar.category}
                    </CardTitle>
                    <p className="text-[hsl(var(--body))] text-sm">{pillar.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {pillar.strategies.map((strategy, strategyIndex) => (
                        <div key={strategyIndex} className="p-6 bg-[hsl(var(--light-orange))] rounded-lg">
                          <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">{strategy.title}</h3>
                          <p className="text-[hsl(var(--body))] mb-4">{strategy.detail}</p>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Action Steps:</h4>
                              <div className="space-y-1">
                                {strategy.actionSteps.map((step, stepIndex) => (
                                  <div key={stepIndex} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                                    <span className="text-[hsl(var(--body))] text-sm">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="bg-[hsl(var(--pure-white))] p-4 rounded border-l-4 border-[hsl(var(--primary))]">
                              <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Expected Impact:</h4>
                              <p className="text-[hsl(var(--body))] text-sm">{strategy.impact}</p>
                            </div>
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

      {/* Common Mistakes and Solutions */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Common budget mistakes">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Avoid These Mistakes
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Common Budget Mistakes and How to Avoid Them
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Learn from the most common budget mistakes to protect your funding and ensure it lasts your full plan period.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {commonMistakes.map((mistake, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <div>
                        <CardTitle className="text-lg text-[hsl(var(--heading))]">{mistake.mistake}</CardTitle>
                        <Badge variant="outline" className={`text-xs mt-1 ${
                          mistake.severity === 'High Risk' ? 'border-red-500 text-red-600' :
                          mistake.severity === 'Medium Risk' ? 'border-orange-500 text-orange-600' :
                          'border-yellow-500 text-yellow-600'
                        }`}>
                          {mistake.severity}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{mistake.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Potential Consequences:</h4>
                      <div className="space-y-1">
                        {mistake.consequences.map((consequence, consIndex) => (
                          <div key={consIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[hsl(var(--body))] text-sm">{consequence}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Solution:</h4>
                      <p className="text-[hsl(var(--body))] text-sm">{mistake.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Prevention Steps:</h4>
                      <div className="space-y-1">
                        {mistake.prevention.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                            <span className="text-[hsl(var(--body))] text-xs">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Tools */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Budget optimization tools">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Helpful Tools
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Tools and Resources for Budget Optimization
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Use these tools and resources to make budget management easier and more effective.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {optimizationTools.map((toolCategory, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-3">
                      <Settings className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {toolCategory.category}
                    </CardTitle>
                    <p className="text-[hsl(var(--body))] text-sm">{toolCategory.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {toolCategory.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="p-3 bg-[hsl(var(--lighter-orange))] rounded">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-[hsl(var(--heading))] text-sm">{tool.name}</h4>
                            <span className="text-[hsl(var(--primary))] text-xs font-medium">{tool.cost}</span>
                          </div>
                          <p className="text-[hsl(var(--body))] text-xs mb-2">{tool.purpose}</p>
                          <div className="space-y-1">
                            {tool.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                                <span className="text-[hsl(var(--body))] text-xs">{benefit}</span>
                              </div>
                            ))}
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

      {/* Seasonal Considerations */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Seasonal budget considerations">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Year-Round Planning
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Seasonal Budget Considerations
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Your support needs and costs may vary throughout the year. Plan for seasonal changes to optimize your budget year-round.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {seasonalConsiderations.map((season, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {season.season}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Key Considerations:</h4>
                      <div className="space-y-1">
                        {season.considerations.map((consideration, consIndex) => (
                          <div key={consIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[hsl(var(--body))] text-sm">{consideration}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Budget Tips:</h4>
                      <div className="space-y-1">
                        {season.budgetTips.map((tip, tipIndex) => (
                          <div key={tipIndex} className="flex items-start gap-2">
                            <Lightbulb className="w-3 h-3 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                            <span className="text-[hsl(var(--body))] text-xs">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Budget maximization FAQ">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Common Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Budget Maximization Questions & Answers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Find answers to frequently asked questions about maximizing your NDIS budget and getting better value.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {budgetFAQ.map((faq, index) => (
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

      {/* Completion & Next Steps */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Complete funding journey">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Journey Complete
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Congratulations! You've Mastered NDIS Funding
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                You now have comprehensive knowledge of NDIS funding. Apply these strategies to maximize your 
                independence, achieve your goals, and get the most from your plan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Start Optimizing</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Apply what you've learned to your current plan</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">
                      Get Implementation Help
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Explore Our Services</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">See how we can support your NDIS journey</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/properties">
                      View Our Properties
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
        title="Ready to Maximize Your NDIS Budget?"
        description="Our experienced team can help you implement these strategies and optimize your NDIS funding to achieve better outcomes and greater independence."
        primaryButtonText="Get Budget Optimization Help"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/properties"
        imageSrc="/png/2.webp"
        mobileImageSrc="/png/1.webp"
        imageAlt="NDIS participant celebrating budget optimization success with support team"
        footerText="Ready to transform your NDIS budget? Our team"
        footerLinkText="can guide you every step of the way"
        footerLinkHref="/contact"
      />
    </>
  )
} 