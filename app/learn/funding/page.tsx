import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { ServiceCard } from "@/components/features/service-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { 
  DollarSign,
  PieChart,
  Calculator,
  TrendingUp,
  CreditCard,
  Wallet,
  Target,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Info,
  AlertCircle,
  HelpCircle,
  Clock,
  Calendar,
  Banknote,
  Receipt,
  ShoppingCart,
  Building2,
  Home,
  Users,
  Heart,
  Shield,
  Lightbulb,
  Settings,
  FileText,
  BarChart3,
  LineChart,
  RefreshCw,
  Zap,
  Star,
  Eye,
  Lock,
  Unlock,
  Plus,
  Minus,
  ArrowUpCircle,
  ArrowDownCircle,
  Activity,
  Gauge,
  MapPin,
  Phone,
  MessageSquare,
  Scale,
  CheckCircle,
  X,
  Timer,
  Coins,
  HandCoins,
  BadgeDollarSign,
  CreditCard as CardIcon,
  PiggyBank,
  TrendingDown,
  BarChart,
  CircleDollarSign,
  Percent,
  Hash,
  Package,
  Boxes,
  Layers,
  Grid3X3,
  Navigation,
  Compass,
  Route,
  ArrowUpRight,
  ExternalLink,
  UserCheck,
  Handshake
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Guide to NDIS Funding | Understanding Your NDIS Budget & Categories",
  description: "Comprehensive guide to NDIS funding - understand your budget categories, how funding works, planning your supports, managing your plan, and maximizing your NDIS funding effectively.",
  keywords: "NDIS funding, NDIS budget, Core Support, Capital Support, Capacity Building, NDIS plan management, NDIS categories, disability funding, NDIS explained, plan management, NDIS supports",
  openGraph: {
    title: "Complete Guide to NDIS Funding | Understanding Your NDIS Budget",
    description: "Everything you need to know about NDIS funding - from budget categories to plan management and making the most of your supports.",
    type: "article",
    images: [
      {
        url: "/header/page-header-4.webp",
        width: 1200,
        height: 630,
        alt: "NDIS participant reviewing funding plan with support coordinator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide to NDIS Funding | Understanding Your NDIS Budget",
    description: "Comprehensive educational guide covering all aspects of NDIS funding and budget management",
  },
  alternates: {
    canonical: "/learn/funding"
  }
}

// Quick Navigation Data
const quickNavigation = [
  { title: "NDIS Budget Basics", href: "#budget-basics", icon: DollarSign },
  { title: "The 3 Support Categories", href: "#support-categories", icon: Layers },
  { title: "Core Support Budget", href: "#core-support", icon: Heart },
  { title: "Capital Support Budget", href: "#capital-support", icon: Building2 },
  { title: "Capacity Building Budget", href: "#capacity-building", icon: TrendingUp },
  { title: "Plan Management Options", href: "#plan-management", icon: Settings },
  { title: "Using Your Funding", href: "#using-funding", icon: ShoppingCart },
  { title: "Maximizing Your Budget", href: "#maximizing-budget", icon: Target },
  { title: "Common Funding Questions", href: "#funding-faq", icon: HelpCircle }
]

// NDIS Funding Statistics
const fundingStats = [
  {
    number: "610,000+",
    label: "NDIS Participants",
    description: "People receiving NDIS funding across Australia",
    icon: Users,
    color: "text-[hsl(var(--primary))]"
  },
  {
    number: "$35B+",
    label: "Annual Investment",
    description: "Total NDIS funding invested annually",
    icon: CircleDollarSign,
    color: "text-[hsl(var(--primary))]"
  },
  {
    number: "3",
    label: "Budget Categories",
    description: "Core, Capital, and Capacity Building supports",
    icon: Layers,
    color: "text-[hsl(var(--primary))]"
  },
  {
    number: "15+",
    label: "Support Types",
    description: "Different types of supports you can purchase",
    icon: Package,
    color: "text-[hsl(var(--primary))]"
  }
]

// NDIS Support Categories
const supportCategories = [
  {
    title: "Core Support",
    subtitle: "Your Essential Daily Supports",
    description: "Funding for your everyday disability-related support needs including assistance with daily activities, consumables, and transport.",
    icon: Heart,
    percentage: "85%",
    percentageNote: "of total NDIS funding",
    color: "bg-[hsl(var(--lighter-orange))] border-[hsl(var(--light-orange))]",
    iconColor: "text-[hsl(var(--primary))]",
    includes: [
      "Assistance with Daily Life",
      "Transport",
      "Consumables & Equipment",
      "Assistance with Social & Community Participation"
    ],
    features: [
      { icon: RefreshCw, text: "Most flexible budget category" },
      { icon: ArrowUpCircle, text: "Funds can move between Core Support types" },
      { icon: Clock, text: "Use throughout your plan period" },
      { icon: Users, text: "Includes support worker costs" }
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
    ]
  }
]

// Core Support Breakdown
const coreSupportTypes = [
  {
    title: "Assistance with Daily Life",
    description: "Personal care, domestic assistance, and daily living support",
    icon: Home,
    examples: ["Personal care", "Meal preparation", "Cleaning", "Shopping assistance"],
    flexibility: "High",
    typical: "40-60% of Core budget"
  },
  {
    title: "Transport",
    description: "Getting to appointments, community activities, and social events",
    icon: Navigation,
    examples: ["Taxi vouchers", "Specialised transport", "Public transport training", "Support worker travel"],
    flexibility: "High",
    typical: "10-20% of Core budget"
  },
  {
    title: "Consumables",
    description: "Disability-related items you use regularly and need to replace",
    icon: Package,
    examples: ["Continence aids", "Wound care", "Nutrition supplements", "Low-cost assistive technology"],
    flexibility: "High",
    typical: "5-15% of Core budget"
  },
  {
    title: "Social & Community",
    description: "Support to participate in community, social, and recreational activities",
    icon: Users,
    examples: ["Community access support", "Social skills development", "Recreation activities", "Peer support"],
    flexibility: "High",
    typical: "15-30% of Core budget"
  }
]

// Plan Management Options
const planManagementOptions = [
  {
    title: "Self-Managed",
    subtitle: "You control everything",
    description: "You manage all aspects of your NDIS funding, including hiring support workers, paying invoices, and keeping records.",
    icon: UserCheck,
    pros: [
      "Maximum choice and control",
      "Can hire anyone as support worker",
      "Direct relationships with providers",
      "Flexible service arrangements"
    ],
    cons: [
      "Significant administrative responsibility",
      "Must keep detailed records",
      "Handle all payments and invoices",
      "Responsible for worker compliance"
    ],
    bestFor: "People who want maximum control and have time/skills to manage administration",
    cost: "No additional cost to your plan"
  },
  {
    title: "Plan Managed",
    subtitle: "Professional support with flexibility",
    description: "A registered plan manager handles the administrative tasks while you retain choice and control over your supports.",
    icon: Handshake,
    pros: [
      "Professional handles administration",
      "Can use non-registered providers",
      "Monthly reports provided",
      "Support with budgeting"
    ],
    cons: [
      "Uses some of your plan funding",
      "Less direct control than self-management",
      "Relies on plan manager quality",
      "May have some service restrictions"
    ],
    bestFor: "People who want flexibility with professional administrative support",
    cost: "Plan management fees come from your plan"
  },
  {
    title: "NDIA Managed",
    subtitle: "NDIS handles the administration",
    description: "The NDIS pays your providers directly. You choose from registered providers and approved supports.",
    icon: Shield,
    pros: [
      "No administrative burden",
      "NDIS handles all payments",
      "Guaranteed provider registration",
      "Simple and straightforward"
    ],
    cons: [
      "Limited to registered providers only",
      "Less flexibility in arrangements",
      "Slower payment processes",
      "Limited choice of supports"
    ],
    bestFor: "People who want simplicity and don't need unregistered providers",
    cost: "No cost to your plan"
  }
]

// Funding Tips and Strategies
const fundingTips = [
  {
    category: "Budget Planning",
    icon: Calculator,
    tips: [
      {
        title: "Review your budget regularly",
        description: "Check your spending monthly to ensure you're on track and identify any adjustments needed.",
        icon: BarChart3
      },
      {
        title: "Plan for seasonal variations",
        description: "Some supports cost more at certain times - plan for holidays, school terms, and weather changes.",
        icon: Calendar
      },
      {
        title: "Keep receipts and records",
        description: "Maintain good records for plan reviews and to track your spending patterns.",
        icon: Receipt
      }
    ]
  },
  {
    category: "Getting Value",
    icon: Target,
    tips: [
      {
        title: "Compare provider prices",
        description: "Shop around for services - prices can vary significantly between providers.",
        icon: ShoppingCart
      },
      {
        title: "Group similar activities",
        description: "Combine errands or activities to make the most of support worker time and transport costs.",
        icon: Boxes
      },
      {
        title: "Invest in capacity building",
        description: "Use capacity building funding to develop skills that reduce future support needs.",
        icon: TrendingUp
      }
    ]
  },
  {
    category: "Plan Reviews",
    icon: RefreshCw,
    tips: [
      {
        title: "Document your outcomes",
        description: "Keep track of how supports are helping you achieve your goals for plan review discussions.",
        icon: FileText
      },
      {
        title: "Identify changing needs",
        description: "Note any changes in your support needs to discuss funding adjustments at plan review.",
        icon: TrendingUp
      },
      {
        title: "Prepare for meetings",
        description: "Come to plan review meetings with evidence, examples, and specific requests for changes.",
        icon: Lightbulb
      }
    ]
  }
]

// Common Funding Mistakes
const commonMistakes = [
  {
    title: "Not understanding budget categories",
    description: "Trying to use funding from the wrong budget category for supports",
    solution: "Learn which supports come from which budget category",
    icon: AlertCircle,
    severity: "High"
  },
  {
    title: "Not planning for the full year",
    description: "Spending funding too quickly early in the plan period",
    solution: "Create a 12-month budget breakdown and monitor spending monthly",
    icon: Calendar,
    severity: "High"
  },
  {
    title: "Not keeping proper records",
    description: "Poor record-keeping makes plan reviews and claims difficult",
    solution: "Use apps or systems to track spending and outcomes consistently",
    icon: FileText,
    severity: "Medium"
  },
  {
    title: "Not using capacity building",
    description: "Focusing only on daily support without building independence",
    solution: "Invest in training, therapy, and skill-building supports",
    icon: TrendingUp,
    severity: "Medium"
  },
  {
    title: "Not reviewing regularly",
    description: "Waiting until plan review to address funding issues",
    solution: "Monitor budget monthly and request reviews when needed",
    icon: Eye,
    severity: "Medium"
  }
]

// FAQ Data
const faqData = [
  {
    question: "How much NDIS funding will I receive?",
    answer: "Your NDIS funding amount depends on your individual needs, goals, and circumstances. It's based on assessments of your functional capacity, informal supports, and what's reasonable and necessary to help you achieve your goals. Funding can range from a few thousand to over $100,000 annually."
  },
  {
    question: "Can I spend my NDIS funding on anything I want?",
    answer: "NDIS funding must be spent on supports that are reasonable, necessary, and related to your disability. You can't use it for everyday living costs like rent, food, or bills that everyone has. The supports must help you achieve your NDIS goals."
  },
  {
    question: "What happens if I don't use all my funding?",
    answer: "Generally, unused funding doesn't carry over to your next plan. However, some funding may be able to carry over in certain circumstances. It's important to use your funding appropriately throughout your plan period."
  },
  {
    question: "Can I change how my plan is managed?",
    answer: "Yes, you can request to change your plan management at any time. You might need to wait for your next plan review, or you can request a plan review specifically for this change."
  },
  {
    question: "How do I know if a support is covered by NDIS?",
    answer: "NDIS supports must be reasonable, necessary, relate to your disability, help you achieve your goals, represent value for money, and not be the responsibility of another service system (like health or education)."
  },
  {
    question: "What's the difference between Core and Capacity Building supports?",
    answer: "Core supports help with your daily disability-related needs (like personal care), while Capacity Building supports help you develop skills and independence. Core funding is more flexible, while Capacity Building is goal-focused and time-limited."
  },
  {
    question: "Can I use different plan management types for different parts of my plan?",
    answer: "Yes, you can have different management types for different budget categories. For example, you might self-manage your Core supports but have Capital supports NDIA-managed."
  },
  {
    question: "How often can I review my NDIS plan?",
    answer: "Your plan is automatically reviewed before it expires (usually annually). However, you can request an unscheduled review at any time if your circumstances or needs change significantly."
  },
  {
    question: "What should I do if my funding runs out early?",
    answer: "Contact your support coordinator or the NDIA immediately. You may be able to request additional funding if your needs have increased, or you might need to adjust your supports for the remainder of your plan."
  },
  {
    question: "How do I prove I'm using my funding appropriately?",
    answer: "Keep receipts, invoices, and records showing how supports help you achieve your goals. Document outcomes and progress. Good record-keeping helps with plan reviews and demonstrates appropriate use of funding."
  }
]

export default function NDISFundingPage() {
  return (
    <>
      <PageHero
        title="Complete Guide to NDIS Funding"
        description="Master your NDIS budget with our comprehensive guide covering everything from support categories to plan management and maximizing your funding effectively."
        backgroundPattern="grid"
        alignment="center"
        className="bg-gradient-to-br from-[hsl(var(--light-orange))] to-[hsl(var(--lighter-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "NDIS Funding", href: "/learn/funding" }
        ]}
        heroImage={{
          src: "/header/page-header-4.webp",
          alt: "NDIS participant reviewing funding plan with support coordinator"
        }}
        ctaText="Get Funding Help"
        ctaHref="/contact"
      />

      {/* Quick Stats Section */}
      <section className="py-12 bg-[hsl(var(--background))]" aria-label="NDIS funding statistics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {fundingStats.map((stat, index) => (
                <Card key={index} className="text-center bg-[hsl(var(--pure-white))] shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-opacity-10 flex items-center justify-center ${stat.color.replace('text-', 'bg-').replace('600', '100')}`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-[hsl(var(--heading))] mb-1">{stat.number}</div>
                    <div className="font-medium text-[hsl(var(--heading))] mb-1">{stat.label}</div>
                    <div className="text-xs text-[hsl(var(--body))]">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-[hsl(var(--light-orange))] border-b border-[hsl(var(--lighter-orange))]" aria-label="Quick navigation">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg font-semibold text-[hsl(var(--heading))] mb-6 text-center">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {quickNavigation.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-[hsl(var(--pure-white))] rounded-lg hover:bg-[hsl(var(--primary))]/5 hover:shadow-sm transition-all group"
                >
                  <item.icon className="w-6 h-6 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-[hsl(var(--heading))] text-center leading-tight">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NDIS Budget Basics */}
      <section id="budget-basics" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="NDIS budget basics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Foundation Knowledge
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                NDIS Budget Basics: How Your Funding Works
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Your NDIS plan includes funding to purchase supports and services that help you achieve your goals. 
                Understanding how this funding works is crucial for making the most of your plan.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <Card className="bg-[hsl(var(--pure-white))] shadow-lg border-l-4 border-l-[hsl(var(--primary))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CircleDollarSign className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Your Individual Budget</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      Your NDIS funding is calculated based on your individual needs, goals, and circumstances. 
                      No two participants have identical funding - it's tailored specifically to what you need 
                      to live your best life.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Personalized amount</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Goal-focused</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Regularly reviewed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Evidence-based</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[hsl(var(--pure-white))] shadow-lg border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Timer className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Plan Duration</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      Most NDIS plans last for 12 months, giving you a yearly budget to work with. 
                      You can use your funding at any time during this period, but it's important 
                      to pace your spending across the full year.
                    </p>
                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded-lg">
                      <p className="text-sm text-[hsl(var(--body))]">
                        <strong>Planning Tip:</strong> Divide your annual budget by 12 to get a rough 
                        monthly spending guide, but remember some months may cost more than others.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/png/1.webp"
                    alt="NDIS participant discussing funding plan with support coordinator"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <Card className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 shadow-lg border max-w-xs">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
                      <span className="font-semibold text-[hsl(var(--heading))]">Did You Know?</span>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">
                      The average NDIS plan value is around $71,000 per year, but this varies greatly 
                      based on individual needs and circumstances.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Key Principles */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                    <Scale className="w-8 h-8 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-3">Reasonable & Necessary</h3>
                  <p className="text-[hsl(var(--body))] text-sm">
                    All NDIS supports must be reasonable in cost, necessary for your disability, 
                    and help you achieve your goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-3">Goal-Focused</h3>
                  <p className="text-[hsl(var(--body))] text-sm">
                    Your funding should directly support achieving the goals in your NDIS plan 
                    and improving your independence.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-3">Value for Money</h3>
                  <p className="text-[hsl(var(--body))] text-sm">
                    Supports should provide good value and be the most cost-effective way 
                    to meet your needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories Deep Dive */}
      <section id="support-categories" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="NDIS support categories">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                The Big Picture
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                The 3 NDIS Support Categories Explained
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Your NDIS funding is divided into three categories, each serving different purposes. 
                Understanding these categories is essential for planning and using your funding effectively.
              </p>
            </div>

            <div className="space-y-12">
              {supportCategories.map((category, index) => (
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
                        
                        <div className="space-y-3">
                          <h4 className="font-semibold text-[hsl(var(--heading))]">Key Features:</h4>
                          {category.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <feature.icon className="w-4 h-4 text-[hsl(var(--primary))]" />
                              <span className="text-[hsl(var(--body))] text-sm">{feature.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* What's Included */}
                      <div className="lg:col-span-2 p-8">
                        <h4 className="text-xl font-bold text-[hsl(var(--heading))] mb-6">What's Included in {category.title}:</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          {category.includes.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg shadow-sm">
                              <CheckCircle2 className="w-5 h-5 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                              <div>
                                <h5 className="font-semibold text-[hsl(var(--heading))] mb-1">{item}</h5>
                                <p className="text-[hsl(var(--body))] text-sm">
                                  {item === "Assistance with Daily Life" && "Personal care, domestic assistance, meal preparation, shopping support"}
                                  {item === "Transport" && "Getting to appointments, community access, public transport training"}
                                  {item === "Consumables & Equipment" && "Continence aids, wound care, low-cost assistive technology"}
                                  {item === "Assistance with Social & Community Participation" && "Community access support, social activities, peer support"}
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Support Deep Dive */}
      <section id="core-support" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Core support detailed breakdown">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Deep Dive: Core Support
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                Understanding Your Core Support Budget
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Core Support is your most flexible funding category, covering your essential disability-related 
                daily support needs. Here's how to make the most of this crucial part of your plan.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {coreSupportTypes.map((type, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                        <type.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <CardTitle className="text-[hsl(var(--heading))]">{type.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">Flexibility: {type.flexibility}</Badge>
                          <Badge variant="secondary" className="text-xs">{type.typical}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">Common Examples:</h4>
                    <div className="grid grid-cols-2 gap-2">
                                              {type.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full"></div>
                            <span className="text-[hsl(var(--body))] text-sm">{example}</span>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <RefreshCw className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[hsl(var(--heading))] mb-4">
                      Core Support Flexibility Advantage
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      Unlike other budget categories, Core Support funding can move between different 
                      Core Support types. This means if you need more transport funding one month and 
                      less personal care, you can adjust without needing plan approval.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))] text-sm">Move funding between Core Support types freely</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))] text-sm">Adapt to changing monthly needs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))] text-sm">No approval needed for internal changes</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))] text-sm">Maximum choice and control over daily supports</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plan Management Options */}
      <section id="plan-management" className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Plan management options">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Managing Your Plan
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                Plan Management Options: Choose Your Level of Control
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                How you manage your NDIS plan affects your choice of providers, administrative responsibilities, 
                and level of control. Choose the option that best fits your preferences and capabilities.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {planManagementOptions.map((option, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-all">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                      <option.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--heading))]">{option.title}</CardTitle>
                    <p className="text-[hsl(var(--primary))] font-medium">{option.subtitle}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-[hsl(var(--body))] text-sm leading-relaxed">{option.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[hsl(var(--primary))]" />
                        Advantages
                      </h4>
                      <ul className="space-y-2">
                        {option.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-start gap-2 text-sm">
                            <Plus className="w-3 h-3 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                            <span className="text-[hsl(var(--body))]">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-3 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-[hsl(var(--primary))]" />
                        Considerations
                      </h4>
                      <ul className="space-y-2">
                        {option.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-start gap-2 text-sm">
                            <Minus className="w-3 h-3 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                            <span className="text-[hsl(var(--body))]">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[hsl(var(--lighter-orange))] p-4 rounded-lg space-y-2">
                      <div>
                        <span className="font-semibold text-[hsl(var(--heading))]">Best for: </span>
                        <span className="text-[hsl(var(--body))] text-sm">{option.bestFor}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[hsl(var(--heading))]">Cost: </span>
                        <span className="text-[hsl(var(--body))] text-sm">{option.cost}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))]">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[hsl(var(--heading))] mb-4">
                      Hybrid Management: Best of Both Worlds
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      You can mix management types for different budget categories. For example, you might choose:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-[hsl(var(--pure-white))] rounded-lg">
                        <Heart className="w-5 h-5 text-[hsl(var(--primary))]" />
                        <div>
                          <div className="font-semibold text-[hsl(var(--heading))] text-sm">Core Support</div>
                          <div className="text-[hsl(var(--body))] text-xs">Plan Managed</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[hsl(var(--pure-white))] rounded-lg">
                        <Building2 className="w-5 h-5 text-[hsl(var(--primary))]" />
                        <div>
                          <div className="font-semibold text-[hsl(var(--heading))] text-sm">Capital Support</div>
                          <div className="text-[hsl(var(--body))] text-xs">NDIA Managed</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[hsl(var(--pure-white))] rounded-lg">
                        <TrendingUp className="w-5 h-5 text-[hsl(var(--primary))]" />
                        <div>
                          <div className="font-semibold text-[hsl(var(--heading))] text-sm">Capacity Building</div>
                          <div className="text-[hsl(var(--body))] text-xs">Self Managed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maximizing Your Budget */}
      <section id="maximizing-budget" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Maximizing your NDIS budget">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Smart Strategies
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                Maximizing Your NDIS Budget
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Get the most value from your NDIS funding with proven strategies for smart planning, 
                effective spending, and long-term budget management.
              </p>
            </div>

            <div className="space-y-12">
              {fundingTips.map((tipCategory, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(var(--heading))] flex items-center gap-3">
                      <tipCategory.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {tipCategory.category} Strategies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {tipCategory.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="p-4 bg-[hsl(var(--light-orange))] rounded-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <tip.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                            <h4 className="font-semibold text-[hsl(var(--heading))]">{tip.title}</h4>
                          </div>
                          <p className="text-[hsl(var(--body))] text-sm">{tip.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Common Mistakes to Avoid */}
            <Card className="mt-12 bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
              <CardHeader>
                <CardTitle className="text-xl text-[hsl(var(--heading))] flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-[hsl(var(--primary))]" />
                  Common Funding Mistakes to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {commonMistakes.map((mistake, index) => (
                                          <div key={index} className="p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[hsl(var(--primary))]/10">
                            <mistake.icon className="w-4 h-4 text-[hsl(var(--primary))]" />
                          </div>
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2 text-xs border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                              {mistake.severity} Risk
                            </Badge>
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">{mistake.title}</h4>
                        </div>
                      </div>
                      <p className="text-[hsl(var(--body))] text-sm mb-3">{mistake.description}</p>
                                              <div className="bg-[hsl(var(--lighter-orange))] p-3 rounded border-l-4 border-[hsl(var(--primary))]">
                          <p className="text-[hsl(var(--body))] text-xs">
                            <strong>Solution:</strong> {mistake.solution}
                          </p>
                        </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Using Your Funding */}
      <section id="using-funding" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Using your NDIS funding">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Practical Guide
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                How to Use Your NDIS Funding
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Understanding the practical steps for accessing and using your NDIS funding effectively.
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-[hsl(var(--primary))]" />
                      Payment Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-[hsl(var(--light-orange))] rounded-lg">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Self-Managed</h4>
                      <p className="text-[hsl(var(--body))] text-sm">You pay providers directly and claim reimbursement from NDIS</p>
                    </div>
                    <div className="p-3 bg-[hsl(var(--light-orange))] rounded-lg">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Plan Managed</h4>
                      <p className="text-[hsl(var(--body))] text-sm">Plan manager pays providers on your behalf</p>
                    </div>
                    <div className="p-3 bg-[hsl(var(--light-orange))] rounded-lg">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">NDIA Managed</h4>
                      <p className="text-[hsl(var(--body))] text-sm">NDIS pays registered providers directly</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <Receipt className="w-6 h-6 text-[hsl(var(--primary))]" />
                      Documentation Required
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                      <span className="text-[hsl(var(--body))] text-sm">Original receipts and invoices</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                      <span className="text-[hsl(var(--body))] text-sm">Service agreements or quotes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                      <span className="text-[hsl(var(--body))] text-sm">Progress notes (for therapy)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                      <span className="text-[hsl(var(--body))] text-sm">Proof of outcomes achieved</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                      <span className="text-[hsl(var(--body))] text-sm">Bank statements for reimbursements</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Info className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))] mb-4">
                        What Can't You Buy with NDIS Funding?
                      </h3>
                      <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                        NDIS funding cannot be used for everyday living costs that everyone has, or services that 
                        are the responsibility of other systems. Understanding these limits helps you plan better.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Not Covered:</h4>
                          <ul className="space-y-1 text-sm text-[hsl(var(--body))]">
                            <li>• Rent, mortgage, or utility bills</li>
                            <li>• Food, groceries, or regular household items</li>
                            <li>• Health services covered by Medicare</li>
                            <li>• Education services (school, university)</li>
                            <li>• Gambling, alcohol, or tobacco</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Sometimes Covered:</h4>
                          <ul className="space-y-1 text-sm text-[hsl(var(--body))]">
                            <li>• Special dietary requirements (disability-related)</li>
                            <li>• Modified clothing (if disability-specific)</li>
                            <li>• Technology (if assistive technology)</li>
                            <li>• Travel (if for disability supports)</li>
                            <li>• Training (if capacity building focused)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="funding-faq" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="NDIS funding frequently asked questions">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Common Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                NDIS Funding Questions & Answers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Find answers to the most frequently asked questions about NDIS funding and budget management.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
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

      {/* Related Resources */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Related NDIS resources">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Related Information
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                Learn More About NDIS Supports
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Explore specific NDIS support types to understand how your funding can be used effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                title="About SDA"
                description="Specialist Disability Accommodation funding for accessible housing"
                icon={Building2}
                href="/learn/about-sda"
              />
              <ServiceCard
                title="About SIL"
                description="Supported Independent Living for daily support services"
                icon={Home}
                href="/learn/about-sil"
              />
              <ServiceCard
                title="About MTA"
                description="Medium Term Accommodation for transition periods"
                icon={Clock}
                href="/learn/about-mta"
              />
              <ServiceCard
                title="About STA"
                description="Short Term Accommodation for respite and emergency needs"
                icon={Calendar}
                href="/learn/about-sta"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Help With Your NDIS Funding?"
        description="Our experienced team can help you understand your funding, plan your budget, and make the most of your NDIS supports to achieve your goals."
        primaryButtonText="Get Funding Support"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/properties"
        imageSrc="/png/2.webp"
        mobileImageSrc="/png/1.webp"
        imageAlt="NDIS support coordinator helping participant with funding plan"
        footerText="Ready to maximize your NDIS funding? Our team"
        footerLinkText="can help you get started"
        footerLinkHref="/contact"
      />
    </>
  )
} 