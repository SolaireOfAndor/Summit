'use client'

import { Search, BookOpen, Home, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SummitButton } from "@/components/ui/summit-button"
import Link from "next/link"
import Image from "next/image"

/**
 * @component WebsiteFeatures
 * @description Landing page section explaining what users can discover, learn, access, and enquire about
 * on the Summit website. Helps with navigation and SEO.
 * 
 * @example
 * ```tsx
 * <WebsiteFeatures />
 * ```
 * 
 * @category Section
 * @usedIn Landing Page (app/page.tsx)
 */

const websiteFeatures = [
  {
    title: "Learn About NDIS",
    description: "Comprehensive guides covering SDA, SIL, funding, and plan optimization.",
    icon: BookOpen,
    href: "/learn",
    features: [
      "NDIS funding explained",
      "Service comparisons", 
      "Eligibility guides"
    ],
    color: "bg-[hsl(var(--light-orange))]",
    image: "/png/1.webp"
  },
  {
    title: "Find Properties",
    description: "Browse available SDA and SIL properties across NSW.",
    icon: Home,
    href: "/properties",
    features: [
      "Current vacancies",
      "Property features",
      "Application process"
    ],
    color: "bg-[hsl(var(--lighter-orange))]",
    image: "/house-image/3.webp"
  },
  {
    title: "Access Support Services",
    description: "Discover our full range of support services and programs.",
    icon: CheckCircle2,
    href: "/supported-accommodations",
    features: [
      "Personal care support",
      "Community programs",
      "Flexible options"
    ],
    color: "bg-[hsl(var(--background))]",
    image: "/png/support-1120755_1920.jpg"
  },
  {
    title: "Get Contact Info",
    description: "Find our service areas and ways to get in touch.",
    icon: MapPin,
    href: "/contact",
    features: [
      "NSW-wide service",
      "Multiple contact methods",
      "Team introductions"
    ],
    color: "bg-[hsl(var(--pure-white))]",
    image: "/png/headsets-1856834_1920.jpg"
  }
]

const quickActions = [
  {
    title: "New to NDIS?",
    description: "Start with our learning center",
    icon: BookOpen,
    href: "/learn/funding",
    buttonText: "Learn NDIS"
  },
  {
    title: "Need Housing?",
    description: "Browse available properties",
    icon: Home,
    href: "/properties/sda-vacancies",
    buttonText: "View Properties"
  },
  {
    title: "Ready to Start?",
    description: "Contact our team today",
    icon: Phone,
    href: "/contact",
    buttonText: "Get in Touch"
  }
]

export function WebsiteFeatures() {
  return (
    <section 
      className="py-20 lg:py-24 bg-[hsl(var(--light-orange))]"
      aria-labelledby="website-features-title"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary))] bg-[hsl(var(--pure-white))] px-4 py-2 rounded-full mb-6">
            <Search className="w-4 h-4" />
            <span>Discover Our Website</span>
          </div>
          <h2 
            id="website-features-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(var(--heading))] mb-6"
          >
            Everything You Need About NDIS
          </h2>
          <p className="text-lg text-[hsl(var(--body))] max-w-2xl mx-auto">
            Your comprehensive resource for NDIS information, property searches, 
            and direct access to our support team.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {websiteFeatures.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={`group transition-all hover:shadow-lg ${feature.color} border-0 overflow-hidden`}
            >
              {/* Feature Image */}
              <div className="relative h-32 lg:h-40">
                <Image
                  src={feature.image}
                  alt={`${feature.title} - Summit website feature`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-[hsl(var(--pure-white))] shadow-md">
                  <feature.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-[hsl(var(--heading))] mb-2">{feature.title}</CardTitle>
                <p className="text-[hsl(var(--body))] text-sm leading-relaxed">{feature.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 mb-4">
                  {feature.features.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-[hsl(var(--body))]">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={feature.href}
                  className="inline-flex items-center gap-2 text-sm text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))] transition-colors"
                >
                  Explore Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-[hsl(var(--pure-white))] rounded-2xl p-8 shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--heading))] mb-4">
              Get Started in 3 Steps
            </h3>
            <p className="text-[hsl(var(--body))] max-w-xl mx-auto">
              Whether you're new to NDIS or looking for specific services, we've made it easy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <div key={action.title} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(var(--primary))]/10 mb-3">
                  <action.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[hsl(var(--heading))] mb-2">
                    {action.title}
                  </h4>
                  <p className="text-sm text-[hsl(var(--body))] mb-4">
                    {action.description}
                  </p>
                  <SummitButton asChild variant="outline" size="sm">
                    <Link href={action.href}>{action.buttonText}</Link>
                  </SummitButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 