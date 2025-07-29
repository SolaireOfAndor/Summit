import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { 
  Heart, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Calendar,
  Eye,
  Plane,
  RefreshCw,
  AlertCircle,
  Clock,
  Target,
  Users,
  Home,
  Lightbulb,
  Info,
  ArrowLeft,
  Timer,
  Sunset,
  Building2,
  DollarSign
} from "lucide-react"

export const metadata: Metadata = {
  title: "Types of STA & When to Use | Short Term Accommodation Guide",
  description: "Complete guide to the 6 main types of NDIS Short Term Accommodation - respite care, emergency accommodation, holiday support, trial stays, and more. Understand eligibility and when each type is appropriate.",
  keywords: "types of STA, respite care, emergency accommodation, holiday STA, trial accommodation, STA eligibility, when to use STA, NDIS short term accommodation types",
  openGraph: {
    title: "Types of STA & When to Use | Complete Guide",
    description: "Understand the 6 main types of STA and when each is appropriate for your needs",
    type: "article"
  },
  alternates: {
    canonical: "/learn/about-sta/types-and-when-to-use"
  }
}

// Types of STA with comprehensive details
const staTypes = [
  {
    title: "Respite Care",
    description: "Planned breaks to give families and carers time to rest, work, or attend to other responsibilities.",
    icon: Sunset,
    duration: "1 night to 2 weeks",
    urgency: "Planned",
    primaryBenefit: "Family carer relief",
    features: [
      "Regular scheduled breaks",
      "Family carer respite",
      "Planned in advance",
      "Recurring arrangements possible",
      "Professional support available",
      "Activities and social programs"
    ],
    whenToUse: [
      "Family carers need regular breaks",
      "Carer illness or hospitalization",
      "Family holidays or events",
      "Work or study commitments",
      "Preventing carer burnout",
      "Maintaining family relationships"
    ],
    bookingAdvance: "2-4 weeks",
    cost: "$$",
    availability: "Good"
  },
  {
    title: "Emergency Accommodation",
    description: "Immediate temporary housing when your usual accommodation becomes unavailable.",
    icon: AlertCircle,
    duration: "1 night to several weeks",
    urgency: "Immediate",
    primaryBenefit: "Crisis response",
    features: [
      "Available at short notice",
      "Crisis response",
      "Flexible duration",
      "Emergency support services",
      "24/7 booking availability",
      "Safety planning included"
    ],
    whenToUse: [
      "Home damage or repairs needed",
      "Family crisis or breakdown",
      "Sudden carer unavailability",
      "Housing loss or eviction",
      "Safety concerns at home",
      "Medical emergencies affecting housing"
    ],
    bookingAdvance: "24-48 hours",
    cost: "$$$",
    availability: "Limited"
  },
  {
    title: "Holiday & Recreation",
    description: "Supported holiday and recreational experiences with or without family.",
    icon: Plane,
    duration: "Weekend to 2 weeks",
    urgency: "Planned",
    primaryBenefit: "Recreation and social experiences",
    features: [
      "Tourism and recreation focus",
      "Group or individual holidays",
      "Accessible destinations",
      "Recreational activities",
      "Social interaction opportunities",
      "Cultural experiences"
    ],
    whenToUse: [
      "Want holiday experiences with support",
      "Family holidays with assistance",
      "Group recreational activities",
      "Exploring new places",
      "Social interaction opportunities",
      "Cultural or educational trips"
    ],
    bookingAdvance: "4-8 weeks",
    cost: "$$$",
    availability: "Seasonal"
  },
  {
    title: "Trial Accommodation",
    description: "Opportunity to experience different accommodation types before making permanent decisions.",
    icon: Eye,
    duration: "Few days to weeks",
    urgency: "Planned",
    primaryBenefit: "Informed decision making",
    features: [
      "Experience different housing types",
      "Test support arrangements",
      "Assess compatibility",
      "Inform future decisions",
      "Various accommodation styles",
      "Different support levels"
    ],
    whenToUse: [
      "Considering permanent accommodation changes",
      "Evaluating SDA options",
      "Testing independence levels",
      "Assessing support needs",
      "Comparing providers",
      "Planning housing transitions"
    ],
    bookingAdvance: "2-6 weeks",
    cost: "$$",
    availability: "Good"
  },
  {
    title: "Transitional Support",
    description: "Bridge accommodation during transitions between permanent housing arrangements.",
    icon: RefreshCw,
    duration: "Weeks to months",
    urgency: "Planned",
    primaryBenefit: "Smooth transitions",
    features: [
      "Housing transition support",
      "Time to find permanent housing",
      "Adjustment support",
      "Planning assistance",
      "Skill development",
      "Goal-oriented support"
    ],
    whenToUse: [
      "Moving between permanent homes",
      "Waiting for SDA availability",
      "Aging out of family home",
      "Relationship changes",
      "Financial circumstances change",
      "Support needs reassessment"
    ],
    bookingAdvance: "4-12 weeks",
    cost: "$$",
    availability: "Moderate"
  },
  {
    title: "Assessment & Recovery",
    description: "Supported accommodation during health recovery or assessment periods.",
    icon: Heart,
    duration: "2 weeks to 3 months",
    urgency: "Medical need",
    primaryBenefit: "Health support and recovery",
    features: [
      "Health recovery focus",
      "Allied health access",
      "Medication management",
      "Assessment support",
      "Professional care",
      "Rehabilitation services"
    ],
    whenToUse: [
      "Post-hospital discharge",
      "Mental health recovery",
      "Rehabilitation needs",
      "Assessment requirements",
      "Therapy intensives",
      "Health stabilization"
    ],
    bookingAdvance: "1-4 weeks",
    cost: "$$$",
    availability: "Limited"
  }
]

// Eligibility requirements
const eligibilityRequirements = [
  {
    title: "NDIS Participant",
    description: "You must be an eligible NDIS participant with STA funding in your plan.",
    icon: CheckCircle2,
    details: "STA funding is allocated in your Core Support budget based on assessed need for respite or temporary accommodation."
  },
  {
    title: "Reasonable & Necessary",
    description: "The STA must be reasonable and necessary to achieve your NDIS goals.",
    icon: Target,
    details: "Must support your independence, social participation, or provide essential respite for family carers."
  },
  {
    title: "Temporary Need",
    description: "STA is for temporary accommodation needs, not permanent housing solutions.",
    icon: Clock,
    details: "Designed for stays ranging from one night to several months, depending on your circumstances and plan."
  },
  {
    title: "Support Requirements",
    description: "You may need some level of support during your stay, or be able to stay independently.",
    icon: Users,
    details: "STA can provide various support levels from minimal assistance to 24/7 care, depending on your needs."
  }
]

// Decision making framework
const decisionFramework = [
  {
    question: "How urgent is your need?",
    immediate: {
      answer: "I need accommodation within 24-48 hours",
      recommendation: "Emergency Accommodation",
      icon: AlertCircle,
      nextSteps: ["Contact STA providers immediately", "Provide basic emergency information", "Accept available accommodation"]
    },
    planned: {
      answer: "I can plan weeks or months ahead",
      recommendation: "Consider all STA types based on purpose",
      icon: Calendar,
      nextSteps: ["Identify your specific goals", "Research appropriate STA types", "Book well in advance"]
    }
  },
  {
    question: "What is your primary purpose?",
    respite: {
      answer: "Family carer needs a break",
      recommendation: "Respite Care",
      icon: Heart,
      nextSteps: ["Plan regular respite schedule", "Find suitable providers", "Book recurring arrangements"]
    },
    trial: {
      answer: "Want to try different accommodation",
      recommendation: "Trial Accommodation",
      icon: Eye,
      nextSteps: ["Research accommodation options", "Book trial stays", "Compare experiences"]
    }
  },
  {
    question: "How long do you need accommodation?",
    short: {
      answer: "1-7 nights",
      recommendation: "Respite Care or Emergency",
      icon: Clock,
      nextSteps: ["Book appropriate short-term option", "Prepare for brief stay", "Plan next steps"]
    },
    extended: {
      answer: "Weeks to months",
      recommendation: "Transitional or Assessment Support",
      icon: Timer,
      nextSteps: ["Consider medium-term options", "Plan transition goals", "Prepare for extended stay"]
    }
  }
]

export default function STATypesPage() {
  return (
    <>
      <PageHero
        title="Types of STA & When to Use"
        description="Comprehensive guide to the 6 main types of Short Term Accommodation, when each is appropriate, and how to determine which type best suits your needs."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About STA", href: "/learn/about-sta" },
          { title: "Types & When to Use", href: "/learn/about-sta/types-and-when-to-use" }
        ]}
        heroImage={{
          src: "/header/page-header-7.webp",
          alt: "Different types of STA accommodation options for various needs and circumstances"
        }}
      />

      {/* Back to STA Overview */}
      <section className="py-6 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <Button asChild variant="ghost" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))]">
            <Link href="/learn/about-sta" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to STA Overview
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Decision Framework */}
      <section className="py-12 bg-[hsl(var(--background))]" aria-label="Quick decision framework">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Quick Decision Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Which Type of STA Do You Need?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Answer these simple questions to identify the most appropriate STA type for your situation.
              </p>
            </div>

            <div className="space-y-6">
              {decisionFramework.map((framework, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
                      {framework.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(framework)
                        .filter(([key]) => key !== 'question')
                        .map(([key, option]) => (
                        <div key={key} className="p-4 bg-[hsl(var(--light-orange))] rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <option.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                            <h3 className="font-semibold text-[hsl(var(--heading))]">{option.answer}</h3>
                          </div>
                          <p className="text-[hsl(var(--primary))] font-medium mb-2">→ {option.recommendation}</p>
                          <ul className="text-sm text-[hsl(var(--body))] space-y-1">
                            {option.nextSteps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed STA Types */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Detailed STA types">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Complete Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                6 Main Types of Short Term Accommodation
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Each type of STA serves different purposes and circumstances. Understanding the details helps you choose the right option.
              </p>
            </div>

            <div className="space-y-8">
              {staTypes.map((type, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Header */}
                      <div className="lg:col-span-3">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                            <type.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[hsl(var(--heading))]">{type.title}</h3>
                            <p className="text-[hsl(var(--body))] text-lg">{type.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mb-6">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {type.duration}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {type.urgency}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Book {type.bookingAdvance} ahead
                          </Badge>
                          <Badge variant="outline">
                            Cost: {type.cost}
                          </Badge>
                          <Badge variant="outline">
                            Availability: {type.availability}
                          </Badge>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* When to Use */}
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">When to Use:</h4>
                        <ul className="space-y-2">
                          {type.whenToUse.map((use, useIndex) => (
                            <li key={useIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                              <Target className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                              {use}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Primary Benefit */}
                      <div className="bg-[hsl(var(--light-orange))] p-4 rounded-lg">
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Primary Benefit:</h4>
                        <p className="text-[hsl(var(--body))] font-medium">{type.primaryBenefit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="STA eligibility">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Eligibility Requirements
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Who Can Access STA?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                STA is available to NDIS participants who meet specific criteria and have demonstrated need for temporary accommodation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {eligibilityRequirements.map((requirement, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex-shrink-0">
                        <requirement.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">{requirement.title}</h3>
                        <p className="text-[hsl(var(--body))] text-sm mb-3">{requirement.description}</p>
                        <p className="text-[hsl(var(--body))] text-xs leading-relaxed bg-[hsl(var(--light-orange))] p-3 rounded">
                          <strong>Details:</strong> {requirement.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-[hsl(var(--pure-white))]">
              <CardHeader>
                <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                  <Info className="w-5 h-5 text-[hsl(var(--primary))]" />
                  Getting STA in Your NDIS Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-[hsl(var(--heading))] mb-3">During Plan Development</h4>
                    <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                        Discuss your respite and accommodation needs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                        Explain family carer circumstances
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                        Identify potential emergency needs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                        Discuss holiday and recreation goals
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Plan Reviews</h4>
                    <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                        Request STA if not currently funded
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                        Adjust funding based on usage patterns
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                        Provide evidence of need if required
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                        Document benefits from previous STA use
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation to Related Topics */}
      <section className="py-12 bg-[hsl(var(--light-orange))]" aria-label="Related STA topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-6 text-center">
              Continue Learning About STA
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/accommodation-options" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Accommodation Options
                  </div>
                  <span className="text-xs opacity-90">Explore different facility types</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/booking-and-planning" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Booking & Planning
                  </div>
                  <span className="text-xs opacity-90">Learn the booking process</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/funding-and-costs" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Funding & Costs
                  </div>
                  <span className="text-xs opacity-90">Understand STA funding</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 