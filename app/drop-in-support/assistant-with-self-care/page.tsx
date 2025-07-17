import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { ServiceCard } from "@/components/features/service-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { 
  Heart, 
  Clock, 
  CheckCircle2, 
  UserCheck,
  Lightbulb,
  Calendar,
  Target,
  Activity,
  Sparkles,
  Shield,
  Award,
  HelpCircle,
  ArrowRight,
  Users,
  HeartHandshake,
  User,
  Stethoscope,
  ShowerHead,
  Shirt,
  Pill,
  Eye,
  Accessibility,
  Smartphone,
  MessageSquare,
  Timer,
  Star,
  UserCog,
  Settings,
  Zap,
  BookOpen,
  UserPlus,
  Headphones
} from "lucide-react"

export const metadata: Metadata = {
  title: "Assistance with Self Care Services | Personal Care Support | SummitSDA",
  description: "Professional NDIS self-care assistance including personal hygiene, grooming, dressing, medication management, and mobility support. Dignified, person-centered care that promotes independence.",
  keywords: "assistance with self care, NDIS personal care, self care support, personal hygiene assistance, grooming support, dressing assistance, medication management, mobility support, disability self care",
  openGraph: {
    title: "Assistance with Self Care Services | SummitSDA",
    description: "Professional NDIS self-care support promoting dignity, independence, and personal well-being through personalized assistance.",
    type: "website",
    images: [
      {
        url: "/header/page-header-11.webp",
        width: 1200,
        height: 630,
        alt: "Support worker providing dignified personal care assistance"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistance with Self Care Services | SummitSDA",
    description: "Dignified NDIS self-care support promoting independence and personal well-being",
  },
  alternates: {
    canonical: "/drop-in-support/assistant-with-self-care"
  }
}

const selfCareServices = [
  {
    icon: ShowerHead,
    title: "Personal Hygiene",
    description: "Dignified assistance with bathing, showering, oral care, and maintaining personal cleanliness and health.",
    href: "#hygiene-support"
  },
  {
    icon: Shirt,
    title: "Dressing & Grooming",
    description: "Support with selecting, putting on clothing, grooming, hair care, and maintaining personal presentation.",
    href: "#dressing-support"
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Assistance with medication reminders, organization, administration support, and health monitoring.",
    href: "#medication-support"
  },
  {
    icon: Accessibility,
    title: "Mobility Support",
    description: "Help with transferring, positioning, using mobility aids, and maintaining physical well-being.",
    href: "#mobility-support"
  },
  {
    icon: Smartphone,
    title: "Assistive Technology",
    description: "Training and support in using adaptive equipment and technology to enhance independence.",
    href: "#technology-support"
  },
  {
    icon: MessageSquare,
    title: "Self-Advocacy Skills",
    description: "Building confidence to communicate needs, make decisions, and advocate for personal preferences.",
    href: "#advocacy-support"
  }
]

const benefits = [
  {
    icon: Heart,
    title: "Dignity & Respect",
    description: "All personal care is provided with the utmost respect for your privacy, dignity, and personal preferences."
  },
  {
    icon: UserCheck,
    title: "Person-Centered Care",
    description: "Support tailored to your specific needs, routines, and goals for maintaining independence and well-being."
  },
  {
    icon: Shield,
    title: "Professional Standards",
    description: "Highly trained support workers who understand the importance of safe, professional personal care practices."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Support available when you need it most, respecting your routine and personal schedule preferences."
  },
  {
    icon: Target,
    title: "Independence Focus",
    description: "Support designed to maintain and enhance your ability to manage self-care tasks independently where possible."
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Regular monitoring and quality checks to ensure you receive the highest standard of personal care support."
  }
]

export default function AssistantWithSelfCarePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Assistance with Self Care"
        description="Professional, dignified NDIS self-care support that respects your privacy and promotes independence. Our trained support workers provide personalized assistance with personal hygiene, grooming, and health management."
        heroImage={{
          src: "/header/page-header-11.webp",
          alt: "Support worker providing respectful personal care assistance in a comfortable setting"
        }}
        breadcrumbs={[
          { title: "Drop-in Support", href: "/drop-in-support" },
          { title: "Assistance with Self Care", href: "/drop-in-support/assistant-with-self-care" }
        ]}
        ctaText="Get Personal Care Support"
        ctaHref="/contact"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="text-[hsl(var(--primary))] border-[hsl(var(--primary))]">
              NDIS Personal Care
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))]">
              Dignified Personal Care That Promotes Independence
            </h2>
            <p className="text-lg text-[hsl(var(--body))] leading-relaxed">
              Our assistance with self-care services provide professional, respectful support that maintains your dignity 
              while helping you manage personal care tasks. From personal hygiene to medication management, our trained 
              support workers understand the sensitive nature of personal care and provide assistance that promotes both 
              independence and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[hsl(var(--light-orange))]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))] mb-4">
              Our Self Care Support Services
            </h2>
            <p className="text-lg text-[hsl(var(--body))] max-w-3xl mx-auto">
              Comprehensive personal care assistance designed to maintain your dignity, privacy, and independence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selfCareServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                className="bg-[hsl(var(--pure-white))] hover:shadow-[0_8px_30px_0_hsl(var(--orange-shadow))]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))] mb-4">
              Why Choose SummitSDA for Self Care Support?
            </h2>
            <p className="text-lg text-[hsl(var(--body))] max-w-3xl mx-auto">
              We understand that personal care is deeply personal. Our approach prioritizes your comfort, dignity, and independence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-[hsl(var(--pure-white))] border-none shadow-[0_4px_24px_0_hsl(var(--orange-shadow))] hover:shadow-[0_8px_30px_0_hsl(var(--orange-shadow))] transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-[hsl(var(--primary))]" />
                  </div>
                  <CardTitle className="text-xl text-[hsl(var(--heading))]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] text-center leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Detailed Information Section */}
      <section className="py-16 bg-[hsl(var(--lighter-orange))]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))] mb-4">
                Our Approach to Personal Care Support
              </h2>
              <p className="text-lg text-[hsl(var(--body))]">
                Understanding how we deliver respectful, professional self-care assistance.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="privacy" className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span className="font-semibold text-[hsl(var(--heading))]">Privacy & Dignity First</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--body))] pt-4">
                  We understand that personal care is intimate and private. Our support workers are trained to maintain 
                  your dignity at all times, respecting your preferences for privacy, cultural considerations, and personal 
                  boundaries. We always ask for consent and explain what we're doing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training" className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <UserCheck className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span className="font-semibold text-[hsl(var(--heading))]">Professional Training & Qualifications</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--body))] pt-4">
                  All our support workers receive comprehensive training in personal care techniques, infection control, 
                  manual handling, and maintaining dignity in care. They hold relevant qualifications and undergo regular 
                  professional development to ensure the highest standards of care.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="personalized" className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span className="font-semibold text-[hsl(var(--heading))]">Personalized Care Plans</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--body))] pt-4">
                  We work with you to develop a personalized care plan that reflects your specific needs, preferences, 
                  routines, and goals. This includes your preferred times for care, specific techniques that work best 
                  for you, and any cultural or religious considerations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="independence" className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span className="font-semibold text-[hsl(var(--heading))]">Promoting Independence</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--body))] pt-4">
                  Our goal is to support you in maintaining and developing your independence wherever possible. We provide 
                  assistance that empowers you to do as much as you can for yourself, while ensuring you receive the help 
                  you need in a safe and supportive manner.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))] mb-4">
                Comprehensive Self Care Support Areas
              </h2>
              <p className="text-lg text-[hsl(var(--body))]">
                Professional assistance across all aspects of personal care and self-management.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Personal Hygiene */}
              <Card className="bg-[hsl(var(--pure-white))] border-none shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center">
                      <ShowerHead className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--heading))]">Personal Hygiene</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Bathing and showering assistance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Oral hygiene and dental care</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Hair washing and styling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Skin care and moisturizing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Dressing & Grooming */}
              <Card className="bg-[hsl(var(--pure-white))] border-none shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center">
                      <Shirt className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--heading))]">Dressing & Grooming</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Clothing selection and dressing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Hair care and styling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Nail care and grooming</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Personal presentation assistance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Health Management */}
              <Card className="bg-[hsl(var(--pure-white))] border-none shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center">
                      <Stethoscope className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--heading))]">Health Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Medication reminders and organization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Health appointment support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Vital signs monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Assistance with medical equipment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Mobility & Technology */}
              <Card className="bg-[hsl(var(--pure-white))] border-none shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center">
                      <Accessibility className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--heading))]">Mobility & Technology</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Transfer and positioning assistance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Mobility aid training and support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Assistive technology training</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Communication device support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 bg-[hsl(var(--light-orange))]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))]">
              Ready to Experience Dignified Self Care Support?
            </h2>
            <p className="text-lg text-[hsl(var(--body))] leading-relaxed">
              Take the first step towards professional, respectful personal care assistance. Our experienced team 
              understands the sensitive nature of self-care support and is committed to maintaining your dignity 
              while promoting your independence and well-being.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[hsl(var(--primary))]">1</span>
                </div>
                <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Confidential Consultation</h3>
                <p className="text-[hsl(var(--body))] text-sm">Discuss your personal care needs in a private, respectful setting</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[hsl(var(--primary))]">2</span>
                </div>
                <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Personalized Care Plan</h3>
                <p className="text-[hsl(var(--body))] text-sm">We'll create a care plan that respects your preferences and routines</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[hsl(var(--primary))]">3</span>
                </div>
                <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Dignified Care</h3>
                <p className="text-[hsl(var(--body))] text-sm">Begin receiving professional, respectful personal care support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Experience Personal Care with Dignity and Respect"
        description="Join NDIS participants who trust SummitSDA for professional, compassionate personal care support. Our trained team provides assistance that maintains your dignity while promoting independence and well-being."
        primaryButtonText="Discuss Your Needs"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Daily Life Support"
        secondaryButtonLink="/drop-in-support/assistant-with-daily-life"
        imageSrc="/png/nurse-walking-with-senior-patient-wheelchair.webp"
        mobileImageSrc="/png/beautiful-19075_1920.jpg"
        imageAlt="Professional support worker providing respectful personal care assistance"
        footerText="Want to understand your NDIS funding for personal care? Check our"
        footerLinkText="NDIS Funding Guide"
        footerLinkHref="/learn/funding"
      />
    </main>
  )
} 