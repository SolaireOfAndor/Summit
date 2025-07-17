import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { ServiceCard } from "@/components/features/service-card"
import Link from "next/link"
import Image from "next/image"
import { 
  Home, 
  Users, 
  Heart, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  Building,
  GraduationCap,
  Award,
  Target,
  HandHeart,
  Accessibility,
  MapPin,
  Star,
  Lightbulb,
  HeartHandshake,
  Zap,
  Phone,
  Calendar,
  BookOpen,
  Settings,
  TreePine,
  Building2,
  UserPlus,
  Activity,
  Navigation,
  Clock,
  MessageSquare,
  TrendingUp
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Summit | SummitSDA - NDIS Accommodation & Support Services NSW",
  description: "Learn about Summit's mission to provide participant-centered NDIS support services including SIL, SDA, and comprehensive disability support across NSW. Empowering independence through quality care.",
  keywords: "About Summit, SummitSDA, NDIS provider, SIL, SDA, disability support, NSW accommodation, participant-centered care, independent living",
  openGraph: {
    title: "About Summit | SummitSDA - NDIS Accommodation & Support Services",
    description: "Discover Summit's commitment to participant-centered NDIS support, quality accommodation, and empowering independence across NSW.",
    type: "website",
    images: [
      {
        url: "/header/page-header-3.webp",
        width: 1200,
        height: 630,
        alt: "Summit team providing quality NDIS support services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Summit | SummitSDA - NDIS Support Services",
    description: "Empowering independence through participant-centered NDIS support and quality accommodation",
  }
}

// Core Services Data
const coreServices = [
  {
    title: "Supported Independent Living (SIL)",
    description: "Personalized support services to help you live independently while maintaining choice and control over your daily life.",
    icon: UserCheck,
    href: "/supported-accommodations/sil",
    highlights: [
      "Daily living support",
      "Skill development",
      "Community participation", 
      "Flexible support levels"
    ]
  },
  {
    title: "Specialist Disability Accommodation (SDA)",
    description: "Purpose-built, accessible housing designed specifically for people with extreme functional impairment or high support needs.",
    icon: Building,
    href: "/supported-accommodations/sda",
    highlights: [
      "Purpose-built design",
      "Assistive technology",
      "Safety & accessibility",
      "Quality locations"
    ]
  },
  {
    title: "Personal Support & Daily Living",
    description: "Comprehensive support services to assist with personal care, household tasks, and daily activities.",
    icon: Heart,
    href: "/drop-in-support/assistant-with-daily-life",
    highlights: [
      "Personal care assistance",
      "Household support",
      "Meal preparation",
      "Administrative help"
    ]
  },
  {
    title: "Community Access & Engagement",
    description: "Support to participate in community activities, maintain relationships, and engage in meaningful activities.",
    icon: Users,
    href: "/community-participation",
    highlights: [
      "Social connections",
      "Recreation activities",
      "Transport support",
      "Community integration"
    ]
  },
  {
    title: "NDIS Education & Guidance",
    description: "Clear information and guidance to help you understand and navigate your NDIS plan effectively.",
    icon: BookOpen,
    href: "/learn",
    highlights: [
      "Plan understanding",
      "Service navigation",
      "Goal planning",
      "Ongoing guidance"
    ]
  },
  {
    title: "Accommodation Solutions",
    description: "Comprehensive housing solutions including MTA, STA, and general housing to meet diverse accommodation needs.",
    icon: Home,
    href: "/properties",
    highlights: [
      "Medium term accommodation",
      "Short term & respite",
      "Housing assistance",
      "Transitional support"
    ]
  }
]

// Core Values Data
const coreValues = [
  {
    title: "Participant Empowerment",
    description: "We believe in your right to make choices about your life and support. Our role is to empower, not control.",
    icon: UserPlus,
    category: "Choice & Control"
  },
  {
    title: "Exceeding Standards",
    description: "We don't just meet industry standards - we actively work to exceed them and set new benchmarks for quality.",
    icon: Award,
    category: "Quality Excellence"
  },
  {
    title: "Individualized Support",
    description: "Every person is unique. Our support is meticulously tailored to your specific needs, goals, and preferences.",
    icon: Target,
    category: "Personalized Care"
  },
  {
    title: "Continuous Learning",
    description: "We invest in ongoing staff education and training to ensure you receive the highest quality of support.",
    icon: GraduationCap,
    category: "Professional Development"
  },
  {
    title: "Community Connection",
    description: "We help you build and maintain meaningful relationships within your community and support networks.",
    icon: HeartHandshake,
    category: "Social Inclusion"
  },
  {
    title: "Innovation & Accessibility",
    description: "We embrace technology and innovative approaches to enhance accessibility and independence.",
    icon: Zap,
    category: "Forward Thinking"
  }
]

// Quality Commitment Features
const qualityFeatures = [
  {
    title: "NDIS Registered Provider",
    description: "Fully registered and compliant with NDIS Quality and Safeguards Commission standards.",
    icon: Shield
  },
  {
    title: "Experienced Team",
    description: "Dedicated professionals committed to delivering person-centered support with expertise and compassion.",
    icon: Users
  },
  {
    title: "NSW-Wide Reach",
    description: "Sydney-based with the capacity to extend services throughout New South Wales.",
    icon: MapPin
  },
  {
    title: "Continuous Improvement",
    description: "Regular quality assessments and feedback integration to enhance our services continuously.",
    icon: TrendingUp
  }
]

export default function AboutSummitPage() {
  return (
    <>
      <PageHero
        title="About Summit"
        description="Summit is a registered NDIS service provider dedicated to delivering participant-centered support and quality accommodation services across NSW. We empower individuals to achieve their goals and enhance their independence through personalized, high-quality care."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "About", href: "/about" },
          { title: "About Summit", href: "/about/about-summit" }
        ]}
        heroImage={{
          src: "/header/page-header-3.webp",
          alt: "Summit team providing quality NDIS support services to participants"
        }}
        ctaText="Contact Our Team"
        ctaHref="/contact"
      />

      {/* Mission & Vision Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Our mission and vision">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Our Purpose
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Empowering Independence Through Quality Support
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                At Summit, we believe that everyone deserves the opportunity to live independently and pursue their goals. 
                Our mission is to provide exceptional NDIS support services that empower participants to take control 
                of their lives while receiving the assistance they need.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-3 flex items-center gap-3">
                    <Target className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Our Mission
                  </h3>
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    To deliver participant-centered NDIS support services that exceed industry standards, 
                    focusing on empowerment, choice, and individualized care. We are committed to helping 
                    each participant achieve their goals and live their best life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-3 flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Our Vision
                  </h3>
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    A community where every person with disability has access to high-quality support services 
                    and accommodation that enables them to live independently, participate fully in their 
                    community, and pursue their aspirations without barriers.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/png/thumbs-up-2649310_960_720.webp"
                  alt="Person giving thumbs up, representing empowerment and positive outcomes"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Core Services Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Our core services">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Our Services
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Comprehensive NDIS Support Services
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                From supported independent living to specialist accommodation, we provide a complete range 
                of NDIS services designed to meet your unique needs and support your independence journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service) => (
                <Card key={service.title} className="group hover:shadow-lg transition-all bg-[hsl(var(--pure-white))]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <service.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] mb-2">{service.title}</CardTitle>
                    <p className="text-[hsl(var(--body))] text-sm leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-4">
                      {service.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-[hsl(var(--body))]">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))] transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Core Values Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Our core values">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Our Values
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What Drives Our Commitment
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Our values guide every interaction and decision we make. They ensure that our support 
                is always participant-centered, respectful, and focused on empowering your independence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value) => (
                <Card key={value.title} className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <value.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                      </div>
                      <Badge variant="secondary" className="text-xs">{value.category}</Badge>
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--heading))]">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[hsl(var(--body))] text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Quality Commitment Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Our quality commitment">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Quality Assurance
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Our Commitment to Excellence
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Quality isn't just a goal at Summit - it's our foundation. We are committed to exceeding 
                industry standards and continuously improving our services to ensure you receive the 
                highest level of support and care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {qualityFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[hsl(var(--primary))]/10">
                    <feature.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--heading))] mb-2">{feature.title}</h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[hsl(var(--pure-white))] rounded-lg p-8 shadow-sm">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-[hsl(var(--body))] mb-6 max-w-2xl mx-auto">
                  Whether you're looking for supported independent living, specialist accommodation, 
                  or comprehensive support services, we're here to help you achieve your goals and 
                  live independently.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] px-6 py-3 rounded-lg hover:bg-[hsl(var(--primary-hover))] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Us Today
                  </Link>
                  <Link 
                    href="/properties"
                    className="inline-flex items-center justify-center gap-2 border border-[hsl(var(--primary))] text-[hsl(var(--primary))] px-6 py-3 rounded-lg hover:bg-[hsl(var(--primary-transparent))] transition-colors"
                  >
                    <Building2 className="w-4 h-4" />
                    View Properties
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Take the Next Step?"
        description="Connect with our experienced team to learn more about how Summit can support your independence journey. We're here to answer your questions and help you explore your options."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Our Services"
        secondaryButtonLink="/learn"
        imageSrc="/png/support-1120755_1920.jpg"
        mobileImageSrc="/png/support-1120755_1920.jpg"
        imageAlt="Summit support worker helping participant with daily living activities"
      />
    </>
  )
} 