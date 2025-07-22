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
  Home, 
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
  Utensils,
  ShoppingCart,
  Car,
  Building,
  Handshake
} from "lucide-react"

export const metadata: Metadata = {
  title: "Supported Independent Living (SIL) | SummitSDA NDIS Services",
  description: "Discover how SummitSDA's Supported Independent Living (SIL) services empower participants to live independently while receiving personalized support. NDIS registered provider delivering participant-centered care across NSW.",
  keywords: "SIL, Supported Independent Living, NDIS, disability support, independent living, SummitSDA, NSW disability services, participant-centered care",
  openGraph: {
    title: "Supported Independent Living (SIL) | SummitSDA",
    description: "Empowering independence through personalized support. SummitSDA's SIL services help participants live independently while receiving the support they need.",
    type: "website",
    images: [
      {
        url: "/header/page-header-7.webp",
        width: 1200,
        height: 630,
        alt: "SummitSDA SIL services - supporting independent living"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Supported Independent Living (SIL) | SummitSDA",
    description: "Empowering independence through personalized support",
  }
}

const silFeatures = [
  {
    title: "Personal Care Support",
    description: "Assistance with daily personal care activities including hygiene, medication management, and health monitoring.",
    icon: Heart,
    category: "Daily Living"
  },
  {
    title: "Household Tasks",
    description: "Help with cleaning, laundry, meal preparation, and maintaining a safe, comfortable living environment.",
    icon: Home,
    category: "Home Management"
  },
  {
    title: "Community Access",
    description: "Support to participate in community activities, social events, and pursue personal interests and hobbies.",
    icon: Users,
    category: "Social Participation"
  },
  {
    title: "Skills Development",
    description: "Building independence skills, life skills training, and achieving personal goals and aspirations.",
    icon: Target,
    category: "Capacity Building"
  },
  {
    title: "Transport Support",
    description: "Assistance with getting around the community, accessing services, and maintaining social connections.",
    icon: Car,
    category: "Community Access"
  },
  {
    title: "24/7 On-Call Support",
    description: "Round-the-clock support availability for emergencies and peace of mind for participants and families.",
    icon: Clock,
    category: "Safety & Security"
  }
]

const supportModels = [
  {
    title: "Shared Living",
    description: "Live with other participants in a shared home environment with dedicated support staff and shared common areas.",
    icon: Users,
    benefits: ["Cost-effective support", "Social connections", "Shared activities", "24/7 staff availability"]
  },
  {
    title: "Individual Support",
    description: "One-on-one support in your own home or apartment, providing personalized care tailored to your specific needs.",
    icon: Home,
    benefits: ["Complete privacy", "Personalized care", "Flexible scheduling", "Your own space"]
  },
  {
    title: "Drop-in Support",
    description: "Flexible support hours that can be scheduled around your routine and specific needs as they arise.",
    icon: Clock,
    benefits: ["Flexible timing", "Cost-effective", "Maintains independence", "As-needed support"]
  }
]

const processSteps = [
  {
    step: "1",
    title: "Initial Consultation",
    description: "Meet with our team to discuss your needs, goals, and preferred living arrangements.",
    icon: Coffee
  },
  {
    step: "2", 
    title: "Assessment & Planning",
    description: "We work with you to develop a personalized support plan that aligns with your NDIS goals.",
    icon: CheckCircle2
  },
  {
    step: "3",
    title: "Matching & Setup",
    description: "Find the right accommodation and support team that matches your preferences and needs.",
    icon: Handshake
  },
  {
    step: "4",
    title: "Ongoing Support",
    description: "Regular reviews and adjustments to ensure your support continues to meet your evolving needs.",
    icon: Activity
  }
]

const relatedServices = [
  {
    title: "Specialist Disability Accommodation (SDA)",
    description: "High-quality, purpose-built accommodation designed for people with extreme functional impairment.",
    icon: Building,
    href: "/supported-accommodations/sda",
    hasVacancies: true,
    vacancyHref: "/properties/sda-vacancies"
  },
  {
    title: "Short Term Accommodation (STA)",
    description: "Respite and short-term accommodation options for participants and their families.",
    icon: Calendar,
    href: "/supported-accommodations/sta",
    hasVacancies: false
  },
  {
    title: "Medium Term Accommodation (MTA)",
    description: "Flexible medium-term housing solutions during transitions or temporary needs.",
    icon: MapPin,
    href: "/supported-accommodations/mta",
    hasVacancies: false
  }
]

export default function SILPage() {
  return (
    <>
      <PageHero
        title="Supported Independent Living (SIL)"
        description="Empowering you to live independently while receiving the personalized support you need to achieve your goals and thrive in your community."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Supported Accommodations", href: "/supported-accommodations" },
          { title: "SIL", href: "/supported-accommodations/sil" }
        ]}
        heroImage={{
          src: "/header/page-header-7.webp",
          alt: "Person in wheelchair cooking in an accessible kitchen with support worker nearby"
        }}
        ctaText="View Available Properties"
        ctaHref="/properties/sil-vacancies"
      />

      {/* What is SIL Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="What is SIL">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Understanding SIL
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What is Supported Independent Living?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Supported Independent Living (SIL) provides support to help you live as independently as possible, 
                while having assistance with daily tasks when you need it. It's about empowering you to make choices 
                about your life while ensuring you have the support necessary to achieve your goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <UserCheck className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Participant Choice & Control</h3>
                      <p className="text-[hsl(var(--body))] text-sm">You decide how, when, and where you receive support, maintaining control over your daily life.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Target className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Goal-Focused Support</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Support is designed around your NDIS goals and personal aspirations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Home className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Your Home Environment</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Live in your chosen accommodation while receiving the support you need.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/house-image/5.webp"
                  alt="Modern accessible living room showing independent living environment"
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

      {/* SIL Features Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="SIL Support Features">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Support Services
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Comprehensive SIL Support
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Our SIL services cover all aspects of daily living, helping you maintain independence while ensuring 
              you have support when and where you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {silFeatures.map((feature) => (
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
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* Support Models Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SIL Support Models">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Support Options
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Flexible Support Models
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Choose the support model that best fits your lifestyle, preferences, and support needs. 
              We offer flexible options to ensure you receive the right level of support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportModels.map((model) => (
              <Card key={model.title} className="group relative overflow-hidden hover:shadow-lg transition-all bg-[hsl(var(--pure-white))]">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 rounded-xl bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors w-fit">
                    <model.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                  </div>
                  <CardTitle className="text-xl text-[hsl(var(--heading))]">{model.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[hsl(var(--body))] text-center">{model.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-[hsl(var(--heading))] text-sm">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {model.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-[hsl(var(--body))]">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SectionSeparator variant="accent" className="bottom-0" />
      </section>

      {/* Vacancies Highlight Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/10" aria-label="Available SIL Properties">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] hover:bg-[hsl(var(--primary-hover))]">
              Available Now
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Find Your Perfect SIL Home
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed mb-8">
              Browse our current SIL vacancies and discover supportive living environments across NSW. 
              Each property is carefully selected to provide comfort, accessibility, and community connections.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))] border-[hsl(var(--primary))]/20">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Multiple Locations</h3>
                  <p className="text-[hsl(var(--body))] text-sm">Properties available across Sydney and regional NSW areas</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))] border-[hsl(var(--primary))]/20">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Shared & Individual Options</h3>
                  <p className="text-[hsl(var(--body))] text-sm">Choose from shared living arrangements or individual support</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))] shadow-md">
                <Link href="/properties/sil-vacancies">
                  <Home className="mr-2 h-5 w-5" />
                  Browse SIL Properties
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

      {/* Process Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Getting Started Process">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Getting Started
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Your Journey to Independent Living
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Starting your SIL journey with SummitSDA is straightforward. We guide you through every step 
              to ensure you feel comfortable and confident in your new living arrangement.
            </p>
          </div>

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
                      <h3 className="font-semibold text-[hsl(var(--heading))]">{step.title}</h3>
                      <p className="text-[hsl(var(--body))] text-sm">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))] shadow-md">
                <Link href="/properties/sil-vacancies">
                  <Home className="mr-2 h-4 w-4" />
                  Browse Available Properties
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 shadow-md">
                <Link href="/contact">
                  Start Your SIL Journey
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
              Other Accommodation Options
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Discover our full range of accommodation and support services designed to meet diverse needs and preferences.
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
                          <Building className="mr-2 h-4 w-4" />
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