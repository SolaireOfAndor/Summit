import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { ServiceCard } from "@/components/features/service-card"
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

// Topic Navigation Cards for Detailed Pages
const topicCards = [
  {
    title: "Budget Categories Deep Dive",
    description: "Understand the 3 NDIS budget categories and how they work together",
    href: "/learn/funding/budget-categories",
    icon: Layers,
    difficulty: "Essential",
    readTime: "6 min read",
    priority: "high",
    keyPoints: ["Core Support flexibility", "Capital Support specifics", "Capacity Building goals"]
  },
  {
    title: "Core Support Guide",
    description: "Master your most flexible funding - daily life, transport, consumables",
    href: "/learn/funding/core-support-guide", 
    icon: Heart,
    difficulty: "Important",
    readTime: "5 min read",
    priority: "high",
    keyPoints: ["Daily living support", "Transport options", "Community participation"]
  },
  {
    title: "Capital Support Explained",
    description: "Equipment, assistive technology, home and vehicle modifications for independence",
    href: "/learn/funding/capital-support",
    icon: Building2,
    difficulty: "Important", 
    readTime: "5 min read",
    priority: "high",
    keyPoints: ["Assistive technology", "Home modifications", "Vehicle modifications"]
  },
  {
    title: "Capacity Building Guide",
    description: "Build skills and independence with goal-focused supports",
    href: "/learn/funding/capacity-building",
    icon: TrendingUp,
    difficulty: "Important",
    readTime: "5 min read",
    priority: "high",
    keyPoints: ["Skills development", "Employment support", "Health & wellbeing"]
  },
  {
    title: "Plan Management Options", 
    description: "Choose the right management approach for your funding",
    href: "/learn/funding/plan-management",
    icon: Settings,
    difficulty: "Practical",
    readTime: "4 min read", 
    priority: "medium",
    keyPoints: ["Self-managed", "Plan managed", "NDIA managed"]
  },
  {
    title: "Budget Maximization",
    description: "Strategies to get the most value from your NDIS funding",
    href: "/learn/funding/budget-maximization",
    icon: Target,
    difficulty: "Practical",
    readTime: "5 min read",
    priority: "medium",
    keyPoints: ["Smart planning", "Value strategies", "Avoiding mistakes"]
  }
]

// Quick Overview Stats
const fundingStats = [
  {
    number: "610,000+",
    label: "NDIS Participants",
    description: "People receiving NDIS funding across Australia",
    icon: Users
  },
  {
    number: "$35B+",
    label: "Annual Investment",
    description: "Total NDIS funding invested annually",
    icon: CircleDollarSign
  },
  {
    number: "3",
    label: "Budget Categories", 
    description: "Core, Capital, and Capacity Building supports",
    icon: Layers
  }
]

// NDIS Support Categories Overview
const supportCategoriesOverview = [
  {
    title: "Core Support",
    description: "Your essential daily disability-related supports including personal care, transport, and community participation",
    icon: Heart,
    percentage: "85%",
    color: "bg-[hsl(var(--lighter-orange))]",
    flexibility: "High flexibility - funds can move between Core Support types"
  },
  {
    title: "Capital Support", 
    description: "Equipment, assistive technology, home and vehicle modifications for independence",
    icon: Building2,
    percentage: "8%",
    color: "bg-[hsl(var(--light-orange))]",
    flexibility: "Specific item funding only - requires quotes and assessments"
  },
  {
    title: "Capacity Building",
    description: "Goal-focused supports that help you build skills, independence, and connections",
    icon: TrendingUp,
    percentage: "7%",
    color: "bg-[hsl(var(--background))]",
    flexibility: "Time-limited investments focused on long-term outcomes"
  }
]

// Quick Start Pathways
const quickStartPaths = [
  {
    title: "New to NDIS Funding?",
    description: "Start with understanding budget basics and categories",
    steps: ["Learn budget basics", "Understand 3 categories", "Choose plan management"],
    startHref: "#budget-basics",
    nextHref: "/learn/funding/budget-categories"
  },
  {
    title: "Managing Your Plan?",
    description: "You have funding and want to use it effectively",
    steps: ["Review management options", "Learn spending strategies", "Maximize your budget"],
    startHref: "/learn/funding/plan-management",
    nextHref: "/learn/funding/budget-maximization"
  },
  {
    title: "Need Specific Support?",
    description: "Looking for information about particular support types",
    steps: ["Identify support category", "Review detailed guides", "Contact providers"],
    startHref: "/learn/funding/core-support-guide",
    nextHref: "/properties"
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

      {/* Quick Stats */}
      <section className="py-8 bg-[hsl(var(--background))]" aria-label="NDIS funding statistics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {fundingStats.map((stat, index) => (
                <Card key={index} className="text-center bg-[hsl(var(--pure-white))] shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-3 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
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

      {/* What is NDIS Funding */}
      <section id="budget-basics" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="NDIS budget basics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Understanding Your Budget
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How Your NDIS Funding Works
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Your NDIS plan includes funding to purchase supports and services that help you achieve your goals. 
                Understanding how this funding works is crucial for making the most of your plan.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    Your NDIS funding is calculated based on your individual needs, goals, and circumstances. 
                    No two participants have identical funding - it's tailored specifically to what you need 
                    to live your best life.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <CircleDollarSign className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Individual Budget</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Personalized funding amount based on your specific needs and goals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Timer className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">12-Month Plans</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Most plans last for 12 months, giving you yearly budget to work with</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Scale className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Reasonable & Necessary</h3>
                      <p className="text-[hsl(var(--body))] text-sm">All supports must be reasonable, necessary, and help achieve your goals</p>
                    </div>
                  </div>
                </div>
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
                <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-lg border max-w-xs">
                  <p className="text-[hsl(var(--body))] text-sm">
                    <strong className="text-[hsl(var(--heading))]">Did you know?</strong> The average NDIS plan value is around 
                    $71,000 per year, but this varies greatly based on individual needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories Overview */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="NDIS support categories overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                The Big Picture
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                3 NDIS Budget Categories
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Your NDIS funding is divided into three categories, each serving different purposes. 
                Understanding these categories is essential for planning and using your funding effectively.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {supportCategoriesOverview.map((category, index) => (
                <Card key={index} className={`${category.color} border-[hsl(var(--light-orange))]`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                        <category.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-[hsl(var(--heading))]">{category.title}</h3>
                          <Badge className="text-xs bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                            {category.percentage}
                          </Badge>
                        </div>
                        <p className="text-[hsl(var(--body))] text-sm mb-3">{category.description}</p>
                        <p className="text-[hsl(var(--body))] text-xs bg-[hsl(var(--pure-white))] p-2 rounded">
                          <strong>Flexibility:</strong> {category.flexibility}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/funding/budget-categories">
                  Learn More About Budget Categories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Navigation Cards */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="NDIS funding topic navigation">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Detailed Guides
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Master Your NDIS Funding
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Choose the topics most relevant to your situation. Each guide provides comprehensive information 
                you can use to make informed decisions about your funding.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topicCards.map((topic, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <topic.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs bg-[hsl(var(--lighter-orange))] text-[hsl(var(--body))]">
                          {topic.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {topic.readTime}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] group-hover:text-[hsl(var(--primary))] transition-colors">
                      {topic.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-[hsl(var(--body))] text-sm">{topic.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2 text-sm">Key Topics:</h4>
                      <div className="space-y-1">
                        {topic.keyPoints.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                            <span className="text-[hsl(var(--body))] text-xs">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild variant="outline" className="w-full border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--text-white))]">
                      <Link href={topic.href}>
                        Read Full Guide
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="NDIS funding quick start guide">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Quick Start
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Where Should You Start?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Choose your learning path based on where you are in your NDIS funding journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {quickStartPaths.map((path, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-[hsl(var(--heading))] mb-3">{path.title}</h3>
                    <p className="text-[hsl(var(--body))] text-sm mb-4">{path.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {path.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-[hsl(var(--primary))] text-xs font-bold">{stepIndex + 1}</span>
                          </div>
                          <span className="text-[hsl(var(--body))] text-xs">{step}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                      <Link href={path.startHref}>
                        Get Started
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Related NDIS resources">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Related Information
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
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