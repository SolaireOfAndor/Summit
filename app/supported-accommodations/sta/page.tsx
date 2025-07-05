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
  Calendar, 
  Clock, 
  Heart, 
  Users, 
  Home, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  Coffee,
  MapPin,
  Phone,
  Star,
  Activity,
  Handshake,
  Building,
  Accessibility,
  TreePine,
  Gamepad2,
  Utensils,
  Bed,
  Car,
  Zap,
  Target,
  Lightbulb,
  Eye,
  Headphones
} from "lucide-react"

export const metadata: Metadata = {
  title: "Short Term Accommodation (STA) & Respite Care | SummitSDA NDIS Services",
  description: "Discover SummitSDA's Short Term Accommodation (STA) and respite care services. Providing temporary accommodation and support for NDIS participants and relief for families and carers across NSW.",
  keywords: "STA, Short Term Accommodation, respite care, NDIS respite, temporary accommodation, carer relief, disability respite, SummitSDA, NSW respite services, planned respite",
  openGraph: {
    title: "Short Term Accommodation (STA) & Respite Care | SummitSDA",
    description: "Quality respite and short-term accommodation providing relief for families and new experiences for participants.",
    type: "website",
    images: [
      {
        url: "/header/page-header-6.webp",
        width: 1200,
        height: 630,
        alt: "SummitSDA STA respite accommodation - comfortable, welcoming environments"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Short Term Accommodation (STA) & Respite Care | SummitSDA",
    description: "Quality respite and short-term accommodation for NDIS participants and families",
  }
}

const staTypes = [
  {
    title: "Planned Respite",
    description: "Scheduled short-term stays that allow carers to take breaks while participants enjoy new experiences and social opportunities.",
    icon: Calendar,
    category: "Scheduled Care",
    features: ["Advance booking", "Regular respite cycles", "Holiday periods", "Special occasions"]
  },
  {
    title: "Emergency Respite",
    description: "Immediate accommodation when unexpected situations arise, providing urgent relief for families in crisis.",
    icon: Zap,
    category: "Crisis Support",
    features: ["24/7 availability", "Rapid response", "Crisis intervention", "Family emergencies"]
  },
  {
    title: "Own Home Respite",
    description: "Support provided in the participant's own home, maintaining familiar routines while giving carers time away.",
    icon: Home,
    category: "In-Home Support",
    features: ["Familiar environment", "Routine maintenance", "Flexible hours", "Personalized care"]
  },
  {
    title: "Community Respite",
    description: "Group-based respite activities and day programs that provide social interaction and community engagement.",
    icon: Users,
    category: "Social Programs",
    features: ["Group activities", "Social skills", "Community outings", "Peer interaction"]
  }
]

const staFeatures = [
  {
    title: "Comfortable Accommodation",
    description: "High-quality, accessible accommodation designed to feel like a home away from home.",
    icon: Bed,
    category: "Accommodation Quality"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock care and support ensuring participants are safe and comfortable at all times.",
    icon: Shield,
    category: "Care & Safety"
  },
  {
    title: "Engaging Activities",
    description: "Diverse recreational and therapeutic activities tailored to individual interests and abilities.",
    icon: Gamepad2,
    category: "Recreation"
  },
  {
    title: "Nutritious Meals",
    description: "Freshly prepared meals accommodating dietary requirements and personal preferences.",
    icon: Utensils,
    category: "Dining"
  },
  {
    title: "Transport Services",
    description: "Safe, accessible transport for community outings and appointments when required.",
    icon: Car,
    category: "Mobility"
  },
  {
    title: "Specialized Care",
    description: "Support for complex needs including medical care, behavioral support, and assistive technology.",
    icon: Activity,
    category: "Specialized Support"
  }
]

const benefitsForFamilies = [
  {
    title: "Carer Relief",
    description: "Essential breaks for primary carers to rest, work, attend appointments, or simply have personal time.",
    icon: Heart
  },
  {
    title: "Peace of Mind",
    description: "Confidence that your loved one is receiving quality care in a safe, supportive environment.",
    icon: Shield
  },
  {
    title: "Flexibility",
    description: "Various respite options from a few hours to several weeks, adapting to your family's needs.",
    icon: Clock
  },
  {
    title: "Professional Support",
    description: "Access to experienced disability support workers and allied health professionals.",
    icon: UserCheck
  }
]

const benefitsForParticipants = [
  {
    title: "New Experiences",
    description: "Opportunities to try new activities, meet new people, and develop independence skills.",
    icon: Star
  },
  {
    title: "Social Connections",
    description: "Build friendships and social skills through interaction with peers and support workers.",
    icon: Users
  },
  {
    title: "Skill Development",
    description: "Practice daily living skills, communication, and independence in a supportive environment.",
    icon: Target
  },
  {
    title: "Fun & Recreation",
    description: "Enjoy recreational activities, outings, and entertainment tailored to personal interests.",
    icon: Gamepad2
  }
]

const processSteps = [
  {
    step: "1",
    title: "Assessment & Planning",
    description: "We assess your needs and discuss respite options that work best for you and your family.",
    icon: Coffee
  },
  {
    step: "2", 
    title: "NDIS Plan Check",
    description: "Confirm STA funding is available in your NDIS plan and understand your budget allocation.",
    icon: CheckCircle2
  },
  {
    step: "3",
    title: "Booking & Preparation",
    description: "Schedule your respite stay and prepare personalized care plans and activity preferences.",
    icon: Calendar
  },
  {
    step: "4",
    title: "Respite Experience",
    description: "Enjoy your respite stay with quality care, engaging activities, and ongoing family communication.",
    icon: Handshake
  }
]

const relatedServices = [
  {
    title: "Supported Independent Living (SIL)",
    description: "Ongoing daily support for participants who want to live independently in their own home.",
    icon: Home,
    href: "/supported-accommodations/sil",
    hasVacancies: true,
    vacancyHref: "/vacancies/sil-vacancies"
  },
  {
    title: "Specialist Disability Accommodation (SDA)",
    description: "Purpose-built accessible housing for participants with extreme functional impairment.",
    icon: Building,
    href: "/supported-accommodations/sda",
    hasVacancies: true,
    vacancyHref: "/vacancies/sda-vacancies"
  },
  {
    title: "Medium Term Accommodation (MTA)",
    description: "Temporary housing solutions during transitions or while waiting for permanent accommodation.",
    icon: Clock,
    href: "/supported-accommodations/mta",
    hasVacancies: false
  }
]

export default function STAPage() {
  return (
    <>
      <PageHero
        title="Short Term Accommodation (STA) & Respite Care"
        description="Quality respite and short-term accommodation providing essential relief for families and carers while offering participants new experiences, social connections, and skill development opportunities."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Supported Accommodations", href: "/supported-accommodations" },
          { title: "STA", href: "/supported-accommodations/sta" }
        ]}
        heroImage={{
          src: "/header/page-header-6.webp",
          alt: "Comfortable STA respite accommodation with welcoming, home-like environment"
        }}
        ctaText="Enquire About Respite"
        ctaHref="/contact"
      />

      {/* What is STA Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="What is STA">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Understanding STA
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What is Short Term Accommodation?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Short Term Accommodation (STA) provides temporary accommodation and support for NDIS participants, 
                offering essential respite for families and carers while giving participants opportunities for new 
                experiences, social connections, and skill development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Heart className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Family Relief</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Essential breaks for primary carers and families, providing time to rest, work, or handle personal matters.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Star className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">New Experiences</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Opportunities for participants to try new activities, meet new people, and develop independence skills.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Clock className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Flexible Duration</h3>
                      <p className="text-[hsl(var(--body))] text-sm">From a few hours to several weeks, with both planned and emergency respite options available.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/house-image/6.webp"
                  alt="Welcoming STA accommodation showing comfortable living spaces and recreational areas"
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

      {/* Types of STA Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Types of STA">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Respite Options
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Types of Short Term Accommodation
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              We offer various STA options to meet different needs, from planned respite for regular breaks 
              to emergency accommodation when unexpected situations arise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {staTypes.map((type) => (
              <Card key={type.title} className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                      <type.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <Badge variant="secondary" className="text-xs">{type.category}</Badge>
                  </div>
                  <CardTitle className="text-lg text-[hsl(var(--heading))]">{type.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[hsl(var(--body))] text-sm leading-relaxed">{type.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-[hsl(var(--heading))] text-sm">Available Options:</h4>
                    <ul className="space-y-1">
                      {type.features.map((feature) => (
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

      {/* STA Features Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="STA Features">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Quality Features
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              What Makes Our STA Special
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Our STA services combine comfortable accommodation with engaging activities and professional 
              support to create positive experiences for everyone involved.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {staFeatures.map((feature) => (
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

      {/* Benefits Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="STA Benefits">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Mutual Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Benefits for Families & Participants
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              STA provides valuable benefits for both participants and their families, creating positive 
              outcomes that strengthen family relationships and promote personal growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Benefits for Families */}
            <div>
              <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-6 text-center">For Families & Carers</h3>
              <div className="space-y-4">
                {benefitsForFamilies.map((benefit) => (
                  <Card key={benefit.title} className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">{benefit.title}</h4>
                          <p className="text-[hsl(var(--body))] text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits for Participants */}
            <div>
              <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-6 text-center">For Participants</h3>
              <div className="space-y-4">
                {benefitsForParticipants.map((benefit) => (
                  <Card key={benefit.title} className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">{benefit.title}</h4>
                          <p className="text-[hsl(var(--body))] text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SectionSeparator variant="primary" className="bottom-0" />
      </section>

      {/* Process Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="STA Process">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Getting Started
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              How to Access STA Services
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Our simple four-step process makes it easy to access respite services when you need them, 
              whether for planned breaks or emergency situations.
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
                      <h4 className="font-semibold text-[hsl(var(--heading))]">{step.title}</h4>
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
                <Link href="/contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Respite Stay
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 shadow-md">
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Ask Questions
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
              Other Accommodation Options
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Explore our full range of accommodation services to find the perfect long-term or 
              temporary housing solution for your needs.
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