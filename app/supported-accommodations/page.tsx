import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import Link from "next/link"
import Image from "next/image"
import { 
  Building2, 
  Users, 
  Heart, 
  Clock, 
  Home,
  CheckCircle2, 
  ArrowRight,
  Calendar,
  Star,
  Target,
  MapPin
} from "lucide-react"

export const metadata: Metadata = {
  title: "NDIS Accommodation & SIL Services Sydney | Summit",
  description: "Explore Summit's NDIS accommodation and Supported Independent Living services across Sydney & NSW. From SIL and SDA to STA and MTA — comprehensive disability support tailored to your needs. 24/7 personalised care.",
  keywords: "NDIS accommodation Sydney, SIL services NSW, Supported Independent Living, SDA housing, disability accommodation, accessible housing, supported living Sydney, NDIS provider",
  openGraph: {
    title: "NDIS Accommodation & SIL Services Sydney | Summit",
    description: "Explore Summit's NDIS accommodation and Supported Independent Living services across Sydney & NSW. Comprehensive disability support tailored to your needs.",
    type: "website",
    images: [
      {
        url: "/header/page-header-6.webp",
        width: 1200,
        height: 630,
        alt: "Summit NDIS accommodation and SIL services overview"
      }
    ]
  },
  alternates: {
    canonical: "/supported-accommodations",
  },
}

const accommodationTypes = [
  {
    title: "Specialist Disability Accommodation (SDA)",
    subtitle: "Purpose-Built Accessible Housing",
    description: "High-quality, purpose-built homes designed specifically for people with extreme functional impairment, featuring specialized accessibility features and technology.",
    icon: Building2,
    href: "/supported-accommodations/sda",
    vacancyHref: "/properties/sda-vacancies",
    hasVacancies: true,
    features: [
      "Purpose-built accessible design",
      "High physical support features",
      "Robust construction standards",
      "Assistive technology integration"
    ],
    color: "bg-[hsl(var(--light-orange))]",
    eligibility: "People with extreme functional impairment requiring specialist housing"
  },
  {
    title: "Supported Independent Living (SIL)",
    subtitle: "Daily Living Support Services",
    description: "Personalized support to help you live independently in your own home, with assistance tailored to your daily living needs and personal goals.",
    icon: Users,
    href: "/supported-accommodations/sil",
    vacancyHref: "/properties/sil-vacancies",
    hasVacancies: true,
    features: [
      "24/7 support available",
      "Personal care assistance",
      "Community participation support",
      "Skill development programs"
    ],
    color: "bg-[hsl(var(--lighter-orange))]",
    eligibility: "NDIS participants requiring daily living support"
  },
  {
    title: "Medium Term Accommodation (MTA)",
    subtitle: "Transitional Housing Solutions",
    description: "Temporary accommodation with support for up to 90 days, ideal for transitions between housing arrangements or during emergencies.",
    icon: Clock,
    href: "/supported-accommodations/mta",
    vacancyHref: null,
    hasVacancies: false,
    features: [
      "Short to medium-term stays",
      "Transition planning support",
      "Flexible arrangements",
      "Emergency accommodation"
    ],
    color: "bg-[hsl(var(--background))]",
    eligibility: "People requiring temporary accommodation during transitions"
  },
  {
    title: "Short Term Accommodation (STA)",
    subtitle: "Respite & Emergency Support",
    description: "Short-term respite accommodation providing relief for participants and their families, available for planned respite or emergency situations.",
    icon: Calendar,
    href: "/supported-accommodations/sta",
    vacancyHref: null,
    hasVacancies: false,
    features: [
      "Planned respite care",
      "Emergency accommodation",
      "Family support",
      "Flexible booking"
    ],
    color: "bg-[hsl(var(--pure-white))]",
    eligibility: "NDIS participants and their families requiring respite support"
  }
]

const whyChooseUs = [
  {
    title: "Quality Standards",
    description: "All our accommodations meet or exceed NDIS quality and safety standards",
    icon: Star
  },
  {
    title: "Person-Centered Approach",
    description: "Every service is tailored to your individual needs, goals, and preferences",
    icon: Target
  },
  {
    title: "Strategic Locations",
    description: "Properties located near transport, services, and community facilities",
    icon: MapPin
  },
  {
    title: "Experienced Team",
    description: "Qualified and experienced support staff committed to your success",
    icon: Heart
  }
]

export default function SupportedAccommodationsPage() {
  return (
    <>
      <PageHero
        title="Supported Accommodations"
        description="Discover our comprehensive range of NDIS housing and support solutions designed to help you live independently and achieve your goals. From specialist disability accommodation to supported living services."
        backgroundPattern="dots"
        alignment="center"
        className="bg-gradient-to-br from-[hsl(var(--light-orange))] to-[hsl(var(--lighter-orange))]"
        heroImage={{
          src: "/header/page-header-6.webp",
          alt: "Summit supported accommodations overview showing accessible housing options"
        }}
        ctaText="View Available Properties"
        ctaHref="/properties"
      />

      {/* Overview Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Accommodation overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Complete Solutions
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
              Your Path to Independent Living
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
              Whether you need specialized housing, daily support services, or temporary accommodation, 
              we provide comprehensive solutions to help you live your best life. Our range of supported 
              accommodations ensures there's an option that fits your unique needs and circumstances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow bg-[hsl(var(--pure-white))]">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors rounded-full flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">{reason.title}</h3>
                  <p className="text-[hsl(var(--body))] text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SectionSeparator variant="primary" className="bottom-0" />
      </section>

      {/* Accommodation Types Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Accommodation types">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Our Services
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
              Accommodation Types & Support Services
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Explore our full range of supported accommodation options, each designed to meet different 
              support needs and life circumstances.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {accommodationTypes.map((type, index) => (
              <Card key={index} className={`shadow-xl overflow-hidden ${type.color}`}>
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Main Info */}
                  <div className="lg:col-span-2 p-8 bg-[hsl(var(--pure-white))]">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(var(--heading))] mb-1">{type.title}</h3>
                        <p className="text-[hsl(var(--primary))] font-medium mb-3">{type.subtitle}</p>
                        <p className="text-[hsl(var(--body))] leading-relaxed mb-4">{type.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">Key Features:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {type.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                                <span className="text-[hsl(var(--body))] text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-[hsl(var(--light-orange))] p-3 rounded-lg mb-6">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-1 text-sm">Eligibility:</h4>
                          <p className="text-[hsl(var(--body))] text-sm">{type.eligibility}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                            <Link href={type.href}>
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          {type.hasVacancies && type.vacancyHref && (
                            <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10">
                              <Link href={type.vacancyHref}>
                                <Home className="mr-2 h-4 w-4" />
                                View Vacancies
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:col-span-1 relative min-h-[300px]">
                    <Image
                      src={`/house-image/${index + 1}.webp`}
                      alt={`${type.title} accommodation example`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
} 