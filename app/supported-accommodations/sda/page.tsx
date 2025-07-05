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
  Building, 
  Users, 
  Heart, 
  Clock, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  Lightbulb,
  MapPin,
  Phone,
  Calendar,
  Star,
  Target,
  Activity,
  Coffee,
  Handshake,
  Home,
  Accessibility,
  Zap,
  Wrench,
  Eye,
  Volume2,
  Thermometer,
  Car
} from "lucide-react"

export const metadata: Metadata = {
  title: "Specialist Disability Accommodation (SDA) | SummitSDA NDIS Services",
  description: "Discover SummitSDA's Specialist Disability Accommodation (SDA) - purpose-built, high-quality housing designed for participants with extreme functional impairment. Find your perfect accessible home across NSW.",
  keywords: "SDA, Specialist Disability Accommodation, NDIS housing, accessible accommodation, disability housing, SummitSDA, NSW disability accommodation, purpose-built housing",
  openGraph: {
    title: "Specialist Disability Accommodation (SDA) | SummitSDA",
    description: "Purpose-built, accessible housing designed for your unique needs. Discover SummitSDA's premium SDA properties across NSW.",
    type: "website",
    images: [
      {
        url: "/header/page-header-8.webp",
        width: 1200,
        height: 630,
        alt: "SummitSDA SDA properties - accessible and purpose-built accommodation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialist Disability Accommodation (SDA) | SummitSDA",
    description: "Purpose-built, accessible housing designed for your unique needs",
  }
}

const sdaDesignCategories = [
  {
    title: "High Physical Support",
    description: "Designed for participants requiring significant physical support with ceiling hoists, wider doorways, and wheelchair accessibility.",
    icon: Accessibility,
    category: "Physical Support",
    features: ["Ceiling hoists", "Level access", "Emergency call systems"]
  },
  {
    title: "Robust",
    description: "Built with reinforced materials to withstand high-impact use while maintaining a home-like environment.",
    icon: Shield,
    category: "Durability",
    features: ["Reinforced fixtures", "Impact-resistant surfaces", "Secure environments"]
  },
  {
    title: "Fully Accessible",
    description: "Complete accessibility features for participants using mobility aids or requiring step-free access.",
    icon: UserCheck,
    category: "Accessibility",
    features: ["Wheelchair accessible", "Accessible bathrooms", "Height-adjustable fixtures"]
  },
  {
    title: "Improved Liveability",
    description: "Enhanced design features that improve comfort and quality of life for participants with sensory or intellectual disabilities.",
    icon: Lightbulb,
    category: "Comfort",
    features: ["Better acoustics", "Improved lighting", "Sensory-friendly design"]
  }
]

const sdaFeatures = [
  {
    title: "Purpose-Built Design",
    description: "Every SDA property is specifically designed and constructed to meet the unique needs of people with disability.",
    icon: Building,
    category: "Design Excellence"
  },
  {
    title: "Assistive Technology",
    description: "Integrated smart home technology and assistive devices to enhance independence and safety.",
    icon: Zap,
    category: "Technology"
  },
  {
    title: "Maintenance & Support",
    description: "Comprehensive property maintenance and technical support to ensure your home remains in perfect condition.",
    icon: Wrench,
    category: "Property Management"
  },
  {
    title: "Location & Transport",
    description: "Strategic locations near public transport, services, and community facilities for better connectivity.",
    icon: MapPin,
    category: "Community Access"
  },
  {
    title: "Safety & Security",
    description: "Advanced security systems, emergency response capabilities, and safety features throughout the property.",
    icon: Shield,
    category: "Safety"
  },
  {
    title: "Quality Standards",
    description: "All properties meet or exceed NDIS design standards and undergo regular quality assessments.",
    icon: Star,
    category: "Compliance"
  }
]

const eligibilityRequirements = [
  {
    title: "Extreme Functional Impairment",
    description: "You have an extreme functional impairment in self-care, self-management, or mobility requiring specialist accommodation.",
    icon: UserCheck
  },
  {
    title: "NDIS Participant",
    description: "You are an eligible NDIS participant with SDA funding included in your NDIS plan.",
    icon: CheckCircle2
  },
  {
    title: "Housing Need",
    description: "You require specialist accommodation that is not available in the general housing market.",
    icon: Home
  },
  {
    title: "Assessment Complete",
    description: "You have completed the required SDA assessments and have approval for SDA funding.",
    icon: Activity
  }
]

const processSteps = [
  {
    step: "1",
    title: "SDA Assessment",
    description: "Complete an occupational therapy assessment to determine your SDA eligibility and design category needs.",
    icon: Coffee
  },
  {
    step: "2", 
    title: "NDIS Plan Review",
    description: "Work with your planner to include SDA funding in your NDIS plan based on your assessment.",
    icon: CheckCircle2
  },
  {
    step: "3",
    title: "Property Search",
    description: "Browse available SDA properties that match your design category and location preferences.",
    icon: Home
  },
  {
    step: "4",
    title: "Move In & Settle",
    description: "Complete your application, sign agreements, and receive ongoing support to settle into your new home.",
    icon: Handshake
  }
]

const relatedServices = [
  {
    title: "Supported Independent Living (SIL)",
    description: "Support services to help you live independently in your SDA home with personalized care.",
    icon: Users,
    href: "/supported-accommodations/sil",
    hasVacancies: true,
    vacancyHref: "/vacancies/sil-vacancies"
  },
  {
    title: "Short Term Accommodation (STA)",
    description: "Respite and short-term accommodation options for you and your family.",
    icon: Calendar,
    href: "/supported-accommodations/sta",
    hasVacancies: false
  },
  {
    title: "Medium Term Accommodation (MTA)",
    description: "Temporary accommodation during transitions or while waiting for long-term housing.",
    icon: Clock,
    href: "/supported-accommodations/mta",
    hasVacancies: false
  }
]

export default function SDAPage() {
  return (
    <>
      <PageHero
        title="Specialist Disability Accommodation (SDA)"
        description="Purpose-built, accessible housing designed specifically for people with extreme functional impairment. Discover high-quality SDA properties that meet your unique needs and enhance your independence."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Supported Accommodations", href: "/supported-accommodations" },
          { title: "SDA", href: "/supported-accommodations/sda" }
        ]}
        heroImage={{
          src: "/header/page-header-8.webp",
          alt: "Modern accessible SDA property with wheelchair ramps and purpose-built features"
        }}
        ctaText="View Available Properties"
        ctaHref="/vacancies/sda-vacancies"
      />

      {/* What is SDA Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="What is SDA">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Understanding SDA
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What is Specialist Disability Accommodation?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Specialist Disability Accommodation (SDA) provides purpose-built housing for people with extreme 
                functional impairment who require specialist accommodation. These homes are designed with specific 
                features to meet complex support needs and enhance independence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Building className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Purpose-Built Design</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Specifically designed and constructed to meet the unique needs of people with extreme functional impairment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Accessibility className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Enhanced Accessibility</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Features like ceiling hoists, wider doorways, and specialized technology not found in regular housing.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Star className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">NDIS Quality Standards</h3>
                      <p className="text-[hsl(var(--body))] text-sm">All properties meet or exceed NDIS design standards and building requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/house-image/8.webp"
                  alt="Modern SDA property showing accessible features and purpose-built design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
        <SectionSeparator variant="primary" className="bottom-0" />
      </section>

      {/* SDA Design Categories Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="SDA Design Categories">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Design Categories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              SDA Design Categories
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              SDA properties are categorized by design features to match your specific support needs. 
              Each category provides different levels of accessibility and specialized features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {sdaDesignCategories.map((category) => (
              <Card key={category.title} className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                      <category.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <Badge variant="secondary" className="text-xs">{category.category}</Badge>
                  </div>
                  <CardTitle className="text-lg text-[hsl(var(--heading))]">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[hsl(var(--body))] text-sm leading-relaxed">{category.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-[hsl(var(--heading))] text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[hsl(var(--body))]">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* SDA Features Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA Features">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Premium Features
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              What Makes Our SDA Properties Special
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Every SummitSDA property is built to the highest standards with features designed to enhance 
              your independence, safety, and quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sdaFeatures.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <Badge variant="secondary" className="text-xs">{feature.category}</Badge>
                  </div>
                  <CardTitle className="text-lg text-[hsl(var(--heading))]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SectionSeparator variant="accent" className="bottom-0" />
      </section>

      {/* Vacancies Highlight Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/10" aria-label="Available SDA Properties">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] hover:bg-[hsl(var(--primary-hover))]">
              Available Now
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Find Your Perfect SDA Home
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed mb-8">
              Browse our current SDA vacancies featuring purpose-built properties across NSW. 
              Each property is designed to meet specific functional requirements and enhance your independence.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))] border-[hsl(var(--primary))]/20">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">All Design Categories</h3>
                  <p className="text-[hsl(var(--body))] text-sm">Properties available across all SDA design categories to match your needs</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))] border-[hsl(var(--primary))]/20">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Premium Locations</h3>
                  <p className="text-[hsl(var(--body))] text-sm">Strategically located near transport, services, and community facilities</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))] shadow-md">
                <Link href="/vacancies/sda-vacancies">
                  <Building className="mr-2 h-5 w-5" />
                  Browse SDA Properties
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak to Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <SectionSeparator variant="primary" className="bottom-0" />
      </section>

      {/* Eligibility & Process Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="SDA Eligibility and Process">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Getting Started
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              SDA Eligibility & Application Process
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Understanding SDA eligibility requirements and the application process helps ensure 
              you can access the specialist accommodation you need.
            </p>
          </div>

          {/* Eligibility Requirements */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-8 text-center">Eligibility Requirements</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {eligibilityRequirements.map((requirement) => (
                <Card key={requirement.title} className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex-shrink-0">
                        <requirement.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">{requirement.title}</h4>
                        <p className="text-[hsl(var(--body))] text-sm">{requirement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-8 text-center">Application Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))] h-full">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="relative">
                        <div className="mx-auto w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-6 -right-6 w-12 h-px bg-[hsl(var(--primary))]/20" />
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 w-fit mx-auto">
                          <step.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                        </div>
                        <h4 className="font-semibold text-[hsl(var(--heading))]">{step.title}</h4>
                        <p className="text-[hsl(var(--body))] text-sm">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))] shadow-md">
                <Link href="/vacancies/sda-vacancies">
                  <Building className="mr-2 h-4 w-4" />
                  Browse Available Properties
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 shadow-md">
                <Link href="/contact">
                  Start Your SDA Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* Related Services Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Related Services">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Explore More
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Complete Your Support Package
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              SDA properties work best when combined with appropriate support services. 
              Explore our full range of accommodation and support options.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedServices.map((service) => (
              <Card key={service.title} className="group relative overflow-hidden hover:shadow-lg transition-all bg-[hsl(var(--pure-white))]">
                <CardHeader className="space-y-1">
                  <div className="flex items-center space-x-4">
                    <div 
                      className="rounded-full bg-[hsl(var(--primary))]/10 p-2.5 transition-colors group-hover:bg-[hsl(var(--primary))]/20"
                      aria-hidden="true"
                    >
                      <service.icon className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--heading))]">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[hsl(var(--body))] text-base">{service.description}</p>
                  <div className="flex flex-col gap-2">
                    <Button 
                      asChild 
                      variant="link" 
                      className="h-auto p-0 font-medium hover:no-underline justify-start"
                    >
                      <Link 
                        href={service.href}
                        className="flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]/80"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    {service.hasVacancies && service.vacancyHref && (
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm"
                        className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10"
                      >
                        <Link href={service.vacancyHref}>
                          <Home className="mr-2 h-4 w-4" />
                          View Vacancies
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}