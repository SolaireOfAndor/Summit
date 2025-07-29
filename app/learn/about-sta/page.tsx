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
  Clock, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Heart, 
  Calendar,
  Users,
  Building2,
  Plane,
  RefreshCw,
  AlertCircle,
  Home,
  Eye,
  HeartHandshake,
  Timer,
  Phone,
  FileText,
  DollarSign,
  BookOpen,
  Scale,
  Info
} from "lucide-react"

export const metadata: Metadata = {
  title: "Short Term Accommodation (STA) Guide | Respite Care & Emergency Housing",
  description: "Complete guide to NDIS Short Term Accommodation (STA) - respite care, emergency accommodation, holiday support, and trial stays. Find STA providers and understand your options.",
  keywords: "STA, Short Term Accommodation, NDIS STA, respite care, emergency accommodation, temporary housing, NDIS respite, disability accommodation, family respite, carer support",
  openGraph: {
    title: "Short Term Accommodation (STA) Guide | NDIS Respite & Emergency Housing",
    description: "Comprehensive guide to STA options including respite care, emergency accommodation, and holiday support for NDIS participants and families.",
    type: "article",
    images: [
      {
        url: "/header/page-header-7.webp",
        width: 1200,
        height: 630,
        alt: "Comfortable STA accommodation for respite care and short-term stays"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete STA Guide | NDIS Respite & Emergency Accommodation",
    description: "Everything you need to know about Short Term Accommodation options and support",
  },
  alternates: {
    canonical: "/learn/about-sta"
  }
}

// Quick stats about STA
const staStats = [
  {
    number: "40,000+",
    label: "NDIS participants use STA annually",
    description: "For respite, emergencies, and holiday experiences"
  },
  {
    number: "1-120",
    label: "nights duration range",
    description: "From emergency overnight to extended holiday stays"
  },
  {
    number: "500+",
    label: "registered STA providers",
    description: "Across Australia offering diverse accommodation options"
  },
  {
    number: "24/7",
    label: "emergency accommodation availability",
    description: "Crisis response when you need it most"
  }
]

// Main STA benefits
const mainBenefits = [
  {
    title: "Family Respite",
    description: "Essential breaks for family carers to rest, recharge, and attend to personal needs while ensuring continued quality care.",
    icon: HeartHandshake,
    stats: "Used by 85% of STA participants"
  },
  {
    title: "Emergency Support", 
    description: "Immediate accommodation when your usual housing becomes unavailable due to emergencies or unexpected circumstances.",
    icon: Shield,
    stats: "Available within 24-48 hours"
  },
  {
    title: "Trial Experiences",
    description: "Opportunity to experience different accommodation types, locations, and support arrangements before long-term commitments.",
    icon: Eye,
    stats: "Helps 70% make informed housing decisions"
  },
  {
    title: "Holiday & Recreation",
    description: "Supported holiday experiences and recreational opportunities with appropriate care and supervision.",
    icon: Plane,
    stats: "Growing 15% annually"
  }
]

// STA topic navigation cards
const staTopics = [
  {
    title: "Types of STA & When to Use",
    description: "Explore the 6 main types of STA including respite care, emergency accommodation, holiday support, and trial stays. Understand eligibility and when each type is most appropriate.",
    icon: Timer,
    href: "/learn/about-sta/types-and-when-to-use",
    topics: ["Respite Care", "Emergency Accommodation", "Holiday Support", "Trial Stays", "Eligibility Requirements"],
    readTime: "8 min read"
  },
  {
    title: "Accommodation Options & Facilities",
    description: "Discover different STA accommodation types from purpose-built facilities to host families and independent units. Learn what facilities and support are available.",
    icon: Building2,
    href: "/learn/about-sta/accommodation-options",
    topics: ["Purpose-Built Facilities", "Host Families", "Independent Units", "Group Accommodation"],
    readTime: "6 min read"
  },
  {
    title: "Booking & Planning Process",
    description: "Master the STA booking process including timeline requirements, information needed, and planning strategies for successful stays.",
    icon: Calendar,
    href: "/learn/about-sta/booking-and-planning",
    topics: ["Booking Timeline", "Planning Checklist", "Information Required", "Preparation Tips"],
    readTime: "7 min read"
  },
  {
    title: "Funding & Costs Guide",
    description: "Understand STA funding from your NDIS plan, what's included in costs, pricing models, and how to maximize your STA budget effectively.",
    icon: DollarSign,
    href: "/learn/about-sta/funding-and-costs",
    topics: ["NDIS Funding", "Cost Breakdown", "What's Included", "Budget Management"],
    readTime: "5 min read"
  },
  {
    title: "Emergency Accommodation",
    description: "Critical information about accessing emergency STA when you need immediate accommodation due to crisis situations or unexpected circumstances.",
    icon: AlertCircle,
    href: "/learn/about-sta/emergency-accommodation",
    topics: ["Crisis Response", "Emergency Booking", "Immediate Support", "Safety Planning"],
    readTime: "4 min read"
  },
  {
    title: "Respite Care Support",
    description: "Comprehensive guide to using STA for family respite including regular breaks, planned respite, and supporting family carer wellbeing.",
    icon: Heart,
    href: "/learn/about-sta/respite-care",
    topics: ["Family Respite", "Regular Breaks", "Carer Support", "Respite Planning"],
    readTime: "6 min read"
  },
  {
    title: "Rights & Advocacy Support",
    description: "Know your rights during STA stays, complaint processes, advocacy resources, and how to ensure quality support and accommodation.",
    icon: Scale,
    href: "/learn/about-sta/rights-and-advocacy",
    topics: ["Participant Rights", "Quality Standards", "Complaints Process", "Advocacy Services"],
    readTime: "5 min read"
  }
]

// Quick start pathways
const quickStartPaths = [
  {
    title: "I need emergency accommodation now",
    description: "Immediate support for crisis situations",
    icon: AlertCircle,
    color: "bg-red-500",
    steps: ["Contact STA providers immediately", "Provide basic information", "Emergency placement within 24-48 hours"],
    cta: "Get Emergency Help",
    href: "/learn/about-sta/emergency-accommodation"
  },
  {
    title: "I want to plan regular family respite",
    description: "Scheduled breaks for family carers",
    icon: Calendar,
    color: "bg-blue-500", 
    steps: ["Identify respite needs", "Find suitable providers", "Book 2-4 weeks in advance"],
    cta: "Plan Respite Care",
    href: "/learn/about-sta/respite-care"
  },
  {
    title: "I want to try different accommodation",
    description: "Trial stays before permanent decisions",
    icon: Eye,
    color: "bg-green-500",
    steps: ["Research accommodation types", "Book trial stays", "Compare experiences"],
    cta: "Explore Options",
    href: "/learn/about-sta/types-and-when-to-use"
  },
  {
    title: "I want supported holiday experiences",
    description: "Recreation and travel with support",
    icon: Plane,
    color: "bg-purple-500",
    steps: ["Choose destinations", "Book holiday accommodation", "Plan activities and support"],
    cta: "Plan Holidays",
    href: "/learn/about-sta/accommodation-options"
  }
]

export default function AboutSTAPage() {
  return (
    <>
      <PageHero
        title="Short Term Accommodation (STA) Guide"
        description="Complete guide to NDIS Short Term Accommodation - from respite care and emergency housing to holiday support and trial stays. Find the right STA solution for your needs."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About STA", href: "/learn/about-sta" }
        ]}
        heroImage={{
          src: "/header/page-header-7.webp",
          alt: "Comfortable and accessible STA accommodation for respite care and short-term stays"
        }}
        ctaText="Find STA Providers"
        ctaHref="/contact"
      />

      {/* Quick Stats Section */}
      <section className="py-12 bg-[hsl(var(--background))]" aria-label="STA key statistics">
        <div className="container px-8 sm:px-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {staStats.map((stat, index) => (
              <Card key={index} className="text-center bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">{stat.number}</div>
                  <div className="font-semibold text-[hsl(var(--heading))] mb-1">{stat.label}</div>
                  <div className="text-sm text-[hsl(var(--body))]">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is STA Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="What is STA">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Understanding STA
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What is Short Term Accommodation?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Short Term Accommodation (STA) provides temporary accommodation and support for NDIS participants 
                for various purposes including respite care, emergency housing, holidays, and trial accommodation experiences.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    STA is designed to provide flexible, temporary accommodation solutions that support both NDIS participants 
                    and their families. Whether you need respite care, emergency accommodation, or want to experience different 
                    living arrangements, STA offers safe, supportive environments with appropriate care and supervision.
                  </p>
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    Unlike permanent accommodation options, STA is specifically designed for short-term stays ranging from 
                    one night to several months, providing opportunities to access professional support, try new experiences, 
                    and give family carers essential breaks.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg shadow-sm">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Clock className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Flexible Duration</h3>
                      <p className="text-[hsl(var(--body))] text-sm">From overnight stays to several months, depending on your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg shadow-sm">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Users className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Various Support Levels</h3>
                      <p className="text-[hsl(var(--body))] text-sm">From independent stays to 24/7 care based on your needs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/house-image/3.webp"
                    alt="Comfortable STA accommodation with accessible bedroom and modern amenities"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-lg border max-w-xs">
                  <p className="text-[hsl(var(--body))] text-sm">
                    <strong className="text-[hsl(var(--heading))]">Did you know?</strong> Over 40,000 NDIS participants 
                    use STA services annually for respite, holidays, and emergency accommodation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="STA benefits">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Key Benefits
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How STA Can Support You and Your Family
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                STA provides essential support for both participants and their families, offering flexibility, safety, and peace of mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mainBenefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <benefit.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-[hsl(var(--heading))]">{benefit.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs bg-[hsl(var(--light-orange))] text-[hsl(var(--body))] mt-1">
                          {benefit.stats}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">{benefit.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Pathways */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Quick start pathways">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Quick Start
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Find Your STA Pathway
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Choose the pathway that best matches your current situation and needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {quickStartPaths.map((path, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-[hsl(var(--pure-white))] overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-full ${path.color} text-white`}>
                        <path.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg text-[hsl(var(--heading))]">{path.title}</CardTitle>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{path.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2">Quick Steps:</h4>
                      <ol className="space-y-1">
                        {path.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <span className="w-5 h-5 rounded-full bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] text-xs flex items-center justify-center font-medium">
                              {stepIndex + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <Button asChild className="w-full group-hover:bg-[hsl(var(--primary-hover))] transition-colors">
                      <Link href={path.href}>
                        {path.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Topics Navigation */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="STA detailed topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Comprehensive Guides
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Explore STA Topics in Detail
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Dive deeper into specific aspects of Short Term Accommodation with our comprehensive topic guides.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {staTopics.map((topic, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-[hsl(var(--pure-white))] h-full">
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <topic.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-[hsl(var(--heading))] group-hover:text-[hsl(var(--primary))] transition-colors">
                          {topic.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs mt-1">
                          {topic.readTime}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm leading-relaxed">{topic.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {topic.topics.map((subtopic, subIndex) => (
                          <Badge key={subIndex} variant="secondary" className="text-xs bg-[hsl(var(--lighter-orange))] text-[hsl(var(--body))]">
                            {subtopic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="w-full group-hover:bg-[hsl(var(--primary-hover))] transition-colors">
                      <Link href={topic.href}>
                        Read Complete Guide
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Related services">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Related Information
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Related NDIS Support Types
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Explore other NDIS support types that might complement your STA usage or provide alternative accommodation solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Specialist Disability Accommodation (SDA)"
                description="Permanent specialized housing that you might trial through STA before making long-term commitments."
                icon={Building2}
                href="/learn/about-sda"
              />
              <ServiceCard
                title="Supported Independent Living (SIL)"
                description="Daily living support services that can complement STA stays or provide ongoing support in your permanent home."
                icon={Home}
                href="/learn/about-sil"
              />
              <ServiceCard
                title="Medium Term Accommodation (MTA)"
                description="Longer-term transitional housing for when you need accommodation for weeks to months during major changes."
                icon={RefreshCw}
                href="/learn/about-mta"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore STA Options?"
        description="Whether you need emergency accommodation, respite care, or want to explore holiday options, we're here to help you understand STA and find suitable providers."
        primaryButtonText="Get STA Information"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Other Services"
        secondaryButtonLink="/learn"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="NDIS participant enjoying activities at STA accommodation"
        footerText="Looking for other accommodation information? Explore our"
        footerLinkText="Learning Resources"
        footerLinkHref="/learn"
      />
    </>
  )
} 