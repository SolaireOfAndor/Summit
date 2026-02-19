import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import Link from "next/link"
import Image from "next/image"
import { 
  Clock, 
  ArrowRight, 
  Home, 
  Users, 
  Shield, 
  CheckCircle2, 
  Calendar,
  Heart,
  Coffee,
  MapPin,
  Phone,
  Star,
  Activity,
  Handshake,
  Building,
  Accessibility,
  RefreshCw,
  ArrowUpDown,
  Compass,
  Target,
  Lightbulb,
  UserCheck,
  Zap,
  TreePine,
  Gamepad2,
  Utensils,
  Bed,
  Car,
  Hospital,
  GraduationCap,
  Briefcase,
  AlertTriangle,
  TrendingUp,
  Route
} from "lucide-react"

export const metadata: Metadata = {
  title: "Medium Term Accommodation (MTA) | Summit NDIS Transitional Housing",
  description: "Discover Summit's Medium Term Accommodation (MTA) services. Providing flexible transitional housing solutions for NDIS participants during life changes, recovery periods, and housing transitions across NSW.",
  keywords: "MTA, Medium Term Accommodation, transitional housing, temporary accommodation, NDIS housing transitions, recovery accommodation, bridge housing, Summit, NSW transitional accommodation, disability housing solutions",
  openGraph: {
    title: "Medium Term Accommodation (MTA) | Summit Transitional Housing",
    description: "Flexible transitional housing solutions during life changes and housing transitions for NDIS participants.",
    type: "website",
    images: [
      {
        url: "/header/page-header-7.webp",
        width: 1200,
        height: 630,
        alt: "Summit MTA transitional accommodation - comfortable temporary housing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Medium Term Accommodation (MTA) | Summit",
    description: "Flexible transitional housing solutions for NDIS participants during life changes",
  }
}

const mtaSituations = [
  {
    title: "Housing Transitions",
    description: "Temporary accommodation while waiting for permanent housing arrangements or SDA properties to become available.",
    icon: Home,
    category: "Housing Bridge",
    features: ["Property search support", "Waiting list management", "Flexible duration", "Location preferences"]
  },
  {
    title: "Post-Hospital Recovery",
    description: "Supported accommodation during recovery periods after hospitalization when returning home isn't immediately possible.",
    icon: Hospital,
    category: "Medical Recovery",
    features: ["Medical support coordination", "Rehabilitation assistance", "Gradual independence building", "Health monitoring"]
  },
  {
    title: "Life Transitions",
    description: "Accommodation during major life changes such as family breakdown, aging parents, or changing support needs.",
    icon: RefreshCw,
    category: "Life Changes",
    features: ["Crisis support", "Emotional assistance", "Planning new arrangements", "Stability during change"]
  },
  {
    title: "Skills Development",
    description: "Temporary housing while developing independent living skills before moving to permanent accommodation.",
    icon: GraduationCap,
    category: "Skill Building",
    features: ["Independence training", "Life skills development", "Goal setting", "Progress monitoring"]
  }
]

const mtaFeatures = [
  {
    title: "Flexible Duration",
    description: "Accommodation periods ranging from weeks to months, adapting to your individual timeline and needs.",
    icon: Clock,
    category: "Timing Flexibility"
  },
  {
    title: "Fully Furnished",
    description: "Complete accommodation with all furniture, appliances, and essential items needed for comfortable living.",
    icon: Bed,
    category: "Move-in Ready"
  },
  {
    title: "Support Coordination",
    description: "Assistance with planning next steps, coordinating services, and preparing for permanent accommodation.",
    icon: Compass,
    category: "Planning Support"
  },
  {
    title: "Daily Living Support",
    description: "Flexible support with daily activities, skill development, and maintaining independence.",
    icon: Activity,
    category: "Personal Support"
  },
  {
    title: "Transport Access",
    description: "Located near transport links or transport support provided for appointments and daily activities.",
    icon: Car,
    category: "Accessibility"
  },
  {
    title: "Professional Network",
    description: "Access to allied health professionals, support coordinators, and specialist services as needed.",
    icon: Users,
    category: "Professional Support"
  }
]

const transitionSupport = [
  {
    title: "Housing Search Assistance",
    description: "Support to find and secure appropriate permanent accommodation that meets your needs and preferences.",
    icon: MapPin
  },
  {
    title: "NDIS Plan Optimization",
    description: "Review and adjust your NDIS plan to ensure it supports your housing goals and transition needs.",
    icon: Target
  },
  {
    title: "Skills Assessment",
    description: "Evaluate current abilities and identify areas for development to ensure successful independent living.",
    icon: CheckCircle2
  },
  {
    title: "Support Network Building",
    description: "Connect with local services, community groups, and ongoing support options in your chosen area.",
    icon: Users
  }
]

const eligibilityScenarios = [
  {
    title: "Waiting for Permanent Housing",
    description: "Need temporary accommodation while waiting for SDA, SIL, or private rental properties to become available.",
    icon: Clock
  },
  {
    title: "Recovery Period",
    description: "Require supported accommodation during recovery from illness, injury, or hospitalization.",
    icon: Heart
  },
  {
    title: "Emergency Situations",
    description: "Need immediate temporary housing due to family breakdown, accommodation loss, or crisis situations.",
    icon: AlertTriangle
  },
  {
    title: "Skill Development Period",
    description: "Want to develop independent living skills in a supported environment before permanent placement.",
    icon: TrendingUp
  }
]

const processSteps = [
  {
    step: "1",
    title: "Assessment & Referral",
    description: "Complete an assessment of your current situation, needs, and timeline for transitional accommodation.",
    icon: Coffee
  },
  {
    step: "2", 
    title: "NDIS Funding Review",
    description: "Check your NDIS plan for MTA funding allocation and discuss any plan review requirements.",
    icon: CheckCircle2
  },
  {
    step: "3",
    title: "Accommodation Placement",
    description: "Secure appropriate MTA accommodation and begin your supported transitional period.",
    icon: Home
  },
  {
    step: "4",
    title: "Transition Planning",
    description: "Work towards your permanent housing goals with ongoing support and regular progress reviews.",
    icon: Route
  }
]

const relatedServices = [
  {
    title: "Supported Independent Living (SIL)",
    description: "Ongoing daily support for participants who want to live independently in long-term accommodation.",
    icon: Home,
    href: "/supported-accommodations/sil",
    hasVacancies: true,
    vacancyHref: "/properties/sil-vacancies"
  },
  {
    title: "Specialist Disability Accommodation (SDA)",
    description: "Purpose-built accessible housing for participants with extreme functional impairment.",
    icon: Building,
    href: "/supported-accommodations/sda",
    hasVacancies: true,
    vacancyHref: "/properties/sda-vacancies"
  },
  {
    title: "Short Term Accommodation (STA)",
    description: "Respite and short-term accommodation for temporary relief and new experiences.",
    icon: Calendar,
    href: "/supported-accommodations/sta",
    hasVacancies: false
  }
]

export default function MTAPage() {
  return (
    <>
      <PageHero
        title="Medium Term Accommodation (MTA)"
        description="Flexible transitional housing solutions providing stability and support during life changes, recovery periods, and housing transitions. Bridge the gap between your current situation and permanent accommodation goals."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Supported Accommodations", href: "/supported-accommodations" },
          { title: "MTA", href: "/supported-accommodations/mta" }
        ]}
        heroImage={{
          src: "/header/page-header-7.webp",
          alt: "Comfortable MTA transitional accommodation providing stability during housing transitions"
        }}
        ctaText="Discuss MTA Options"
        ctaHref="/contact"
      />

      {/* What is MTA Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="What is MTA">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Understanding MTA
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What is Medium Term Accommodation?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Medium Term Accommodation (MTA) provides flexible transitional housing for NDIS participants 
                who need temporary accommodation during life changes, recovery periods, or while waiting for 
                permanent housing arrangements. It bridges the gap between your current situation and long-term goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                                         <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                       <ArrowUpDown className="w-5 h-5 text-[hsl(var(--primary))]" />
                     </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Transitional Bridge</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Provides stability and support while you transition between different living arrangements or life circumstances.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Clock className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Flexible Duration</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Accommodation periods from weeks to months, adapting to your individual timeline and changing needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Target className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Goal-Oriented Support</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Active support to help you achieve your permanent housing goals and develop necessary life skills.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/house-image/7.webp"
                  alt="Comfortable MTA accommodation showing transitional living spaces designed for temporary stays"
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

      {/* MTA Situations Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="MTA Situations">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              When You Need MTA
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Common MTA Situations
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              MTA provides essential accommodation support during various life situations where temporary 
              housing is needed while working towards permanent solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {mtaSituations.map((situation) => (
              <Card key={situation.title} className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                      <situation.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <Badge variant="secondary" className="text-xs">{situation.category}</Badge>
                  </div>
                  <CardTitle className="text-lg text-[hsl(var(--heading))]">{situation.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[hsl(var(--body))] text-sm leading-relaxed">{situation.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-[hsl(var(--heading))] text-sm">Support Includes:</h4>
                    <ul className="space-y-1">
                      {situation.features.map((feature) => (
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

      {/* MTA Features Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="MTA Features">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Quality Features
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              What Makes Our MTA Special
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Our MTA services provide more than just temporary accommodation - we offer comprehensive 
              support to help you successfully transition to your next living arrangement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mtaFeatures.map((feature) => (
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

      {/* Transition Support Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Transition Support">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Transition Planning
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Support for Your Next Steps
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              MTA isn't just about temporary accommodation - it's about preparing you for success 
              in your permanent housing arrangement with comprehensive transition support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {transitionSupport.map((support) => (
              <Card key={support.title} className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex-shrink-0">
                      <support.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">{support.title}</h4>
                      <p className="text-[hsl(var(--body))] text-sm">{support.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SectionSeparator variant="primary" className="bottom-0" />
      </section>

      {/* Eligibility & Process Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="MTA Eligibility and Process">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Getting Started
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              MTA Eligibility & Access Process
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Understanding when MTA is appropriate and how to access these services helps ensure 
              you get the right support during transitional periods.
            </p>
          </div>

          {/* Eligibility Scenarios */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-8 text-center">Common Eligibility Scenarios</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {eligibilityScenarios.map((scenario) => (
                <Card key={scenario.title} className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex-shrink-0">
                        <scenario.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">{scenario.title}</h4>
                        <p className="text-[hsl(var(--body))] text-sm">{scenario.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-8 text-center">Access Process</h3>
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
                <Link href="/contact">
                  <Home className="mr-2 h-4 w-4" />
                  Request MTA Assessment
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 shadow-md">
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Discuss Your Situation
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* Related Services Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Related Services">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Explore More
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Permanent Accommodation Options
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              While MTA provides the bridge, explore our permanent accommodation options for your 
              long-term housing goals and ongoing support needs.
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