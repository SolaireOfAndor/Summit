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
  Building2,
  Users,
  Shield,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Lightbulb,
  DollarSign,
  FileText,
  Home,
  Scale,
  Accessibility,
  HeartHandshake,
  TrendingUp,
  Star,
  Info,
  Clock,
  Calendar,
  ExternalLink,
  BookOpen,
  Target,
  HelpCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Guide to Specialist Disability Accommodation (SDA) | What is SDA?",
  description: "Comprehensive guide to Specialist Disability Accommodation (SDA) - understand eligibility, design categories, funding, and how SDA works. Expert information for NDIS participants with extreme functional impairment.",
  keywords: "SDA, Specialist Disability Accommodation, NDIS SDA, disability housing, accessible housing, SDA explained, SDA categories, NDIS housing, SDA vs SIL, extreme functional impairment",
  openGraph: {
    title: "Complete Guide to Specialist Disability Accommodation (SDA)",
    description: "Everything you need to know about SDA - from eligibility and design categories to funding and choosing the right housing. Comprehensive educational resource.",
    type: "article",
    images: [
      {
        url: "/header/page-header-8.webp",
        width: 1200,
        height: 630,
        alt: "Modern accessible SDA housing with wheelchair accessibility features"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide to Specialist Disability Accommodation (SDA)",
    description: "Comprehensive educational guide covering all aspects of SDA housing for NDIS participants",
  },
  alternates: {
    canonical: "/learn/about-sda"
  }
}

// Topic Navigation Cards
const topicCards = [
  {
    title: "Check Your Eligibility",
    description: "Find out if you qualify for SDA and understand the assessment process",
    href: "/learn/about-sda/eligibility-requirements",
    icon: UserCheck,
    difficulty: "Essential",
    readTime: "5 min read",
    priority: "high",
    keyPoints: ["Extreme functional impairment", "Housing need assessment", "NDIS participant status"]
  },
  {
    title: "Design Categories Explained",
    description: "Learn about the 4 SDA design types and which one suits your needs",
    href: "/learn/about-sda/design-categories-explained", 
    icon: Building2,
    difficulty: "Important",
    readTime: "8 min read",
    priority: "high",
    keyPoints: ["Improved Liveability", "Fully Accessible", "Robust", "High Physical Support"]
  },
  {
    title: "Funding & Costs Guide",
    description: "Understand SDA funding, pricing, and your financial responsibilities",
    href: "/learn/about-sda/funding-and-costs",
    icon: DollarSign,
    difficulty: "Important", 
    readTime: "6 min read",
    priority: "high",
    keyPoints: ["Capital Support budget", "Rent contributions", "Location-based pricing"]
  },
  {
    title: "Application Process",
    description: "Step-by-step guide to applying for and accessing SDA housing",
    href: "/learn/about-sda/application-process",
    icon: FileText,
    difficulty: "Practical",
    readTime: "7 min read",
    priority: "medium",
    keyPoints: ["Assessment planning", "Housing search", "Move-in process"]
  },
  {
    title: "Housing Selection Guide", 
    description: "How to choose the right SDA housing for your needs and preferences",
    href: "/learn/about-sda/housing-selection-guide",
    icon: Home,
    difficulty: "Practical",
    readTime: "6 min read", 
    priority: "medium",
    keyPoints: ["Location factors", "Compatibility", "Provider reputation"]
  },
  {
    title: "Rights & Support",
    description: "Your rights as an SDA resident, myths vs facts, and support resources",
    href: "/learn/about-sda/rights-and-support",
    icon: Scale,
    difficulty: "Reference",
    readTime: "5 min read",
    priority: "low",
    keyPoints: ["Tenancy rights", "Quality standards", "Complaints process"]
  }
]

// Quick Overview Stats
const sdaStats = [
  {
    number: "28,000+",
    label: "NDIS Participants",
    description: "Currently supported in SDA housing across Australia",
    icon: Users
  },
  {
    number: "4",
    label: "Design Categories", 
    description: "Different SDA types to meet varying support needs",
    icon: Building2
  },
  {
    number: "$100K+", 
    label: "Average Annual Funding",
    description: "Typical SDA funding amount for high support needs",
    icon: DollarSign
  }
]

// Design Categories Overview
const designCategoriesOverview = [
  {
    title: "Improved Liveability",
    description: "Enhanced amenity and design for sensory, intellectual or cognitive impairments",
    icon: Lightbulb,
    suitability: "Better lighting, reduced noise, visual cues",
    color: "bg-[hsl(var(--lighter-orange))]"
  },
  {
    title: "Fully Accessible", 
    description: "Complete wheelchair accessibility meeting Platinum standards",
    icon: Accessibility,
    suitability: "Wheelchair users, mobility equipment",
    color: "bg-[hsl(var(--light-orange))]"
  },
  {
    title: "Robust",
    description: "Durable design for people who may damage property",
    icon: Shield,
    suitability: "Reinforced materials, secure spaces",
    color: "bg-[hsl(var(--background))]"
  },
  {
    title: "High Physical Support",
    description: "Clinical features for very high support needs",
    icon: HeartHandshake,
    suitability: "Ceiling hoists, emergency power, clinical care",
    color: "bg-[hsl(var(--lighter-orange))]"
  }
]

// Quick Start Pathways
const quickStartPaths = [
  {
    title: "New to SDA?",
    description: "Start with understanding what SDA is and eligibility",
    steps: ["Learn SDA basics", "Check eligibility", "Understand funding"],
    startHref: "#what-is-sda",
    nextHref: "/learn/about-sda/eligibility-requirements"
  },
  {
    title: "Ready to Apply?",
    description: "You understand SDA and want to start the process",
    steps: ["Review application process", "Prepare documentation", "Contact NDIS"],
    startHref: "/learn/about-sda/application-process",
    nextHref: "/contact"
  },
  {
    title: "Choosing Housing?",
    description: "You have SDA approval and need to find housing",
    steps: ["Understand options", "Research providers", "Visit properties"],
    startHref: "/learn/about-sda/housing-selection-guide",
    nextHref: "/properties"
  }
]

export default function AboutSDAPage() {
  return (
    <>
      <PageHero
        title="Complete Guide to Specialist Disability Accommodation (SDA)"
        description="Everything you need to know about SDA - from understanding design categories to accessing housing. Start your journey with our comprehensive guide designed for NDIS participants."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About SDA", href: "/learn/about-sda" }
        ]}
        heroImage={{
          src: "/header/page-header-8.webp",
          alt: "Modern accessible SDA apartment building with wheelchair access and contemporary design"
        }}
        ctaText="View SDA Properties"
        ctaHref="/properties"
      />

      {/* Quick Stats */}
      <section className="py-8 bg-[hsl(var(--background))]" aria-label="SDA quick statistics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {sdaStats.map((stat, index) => (
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

      {/* What is SDA Section */}
      <section id="what-is-sda" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="What is SDA">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Understanding SDA
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What is Specialist Disability Accommodation?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                SDA is purpose-built housing designed specifically for NDIS participants with extreme functional 
                impairment who require specialized housing solutions that cannot be met through standard accommodation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    Unlike regular housing, SDA incorporates accessibility features, assistive technology, and 
                    design elements specifically designed to reduce reliance on paid and informal supports while 
                    enabling greater independence and community participation.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Building2 className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Purpose-Built Design</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Housing specifically designed to meet accessibility and support requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Accessibility className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Enhanced Independence</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Features that enable greater independence and reduce reliance on formal support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Users className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Community Integration</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Located in mainstream areas with access to community facilities and transport</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/house-image/1.webp"
                    alt="Modern SDA apartment building with accessible design features"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-lg border max-w-xs">
                  <p className="text-[hsl(var(--body))] text-sm">
                    <strong className="text-[hsl(var(--heading))]">Did you know?</strong> SDA supports approximately 
                    28,000 NDIS participants across Australia in purpose-built accessible housing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Categories Overview */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="SDA design categories overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Design Categories
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                4 SDA Design Categories
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                SDA includes four design categories, each addressing different types of functional impairment and support needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {designCategoriesOverview.map((category, index) => (
                <Card key={index} className={`${category.color} border-[hsl(var(--light-orange))]`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                        <category.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[hsl(var(--heading))] mb-2">{category.title}</h3>
                        <p className="text-[hsl(var(--body))] text-sm mb-3">{category.description}</p>
                        <p className="text-[hsl(var(--body))] text-xs bg-[hsl(var(--pure-white))] p-2 rounded">
                          <strong>Best for:</strong> {category.suitability}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/about-sda/design-categories-explained">
                  Learn More About Design Categories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Navigation Cards */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA topic navigation">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Detailed Guides
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Explore SDA Topics in Detail
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Choose the topics most relevant to your situation. Each guide provides comprehensive information 
                you can use to make informed decisions about your SDA journey.
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
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="SDA quick start guide">
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
                Choose your learning path based on where you are in your SDA journey.
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

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore SDA Options?"
        description="If you think SDA might be right for you, or if you want to learn more about accessing specialized housing, we're here to help you understand your options."
        primaryButtonText="Get Information"
        primaryButtonLink="/contact"
        secondaryButtonText="View SDA Properties"
        secondaryButtonLink="/properties"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="NDIS participant in modern accessible SDA apartment"
        footerText="Looking for SDA housing options? Browse our"
        footerLinkText="Property Listings"
        footerLinkHref="/properties"
      />
    </>
  )
} 