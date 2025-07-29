import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { 
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Stethoscope,
  Home,
  Calendar,
  Info,
  AlertTriangle,
  FileText,
  Users,
  Phone,
  HelpCircle,
  Target,
  Clock,
  Scale,
  Building2,
  DollarSign
} from "lucide-react"

export const metadata: Metadata = {
  title: "SDA Eligibility Requirements | Who Qualifies for Specialist Disability Accommodation",
  description: "Complete guide to SDA eligibility requirements. Understand who qualifies for Specialist Disability Accommodation, the assessment process, and how to demonstrate extreme functional impairment.",
  keywords: "SDA eligibility, who qualifies for SDA, extreme functional impairment, SDA assessment, NDIS SDA requirements, disability housing eligibility",
  openGraph: {
    title: "SDA Eligibility Requirements | Who Qualifies for Specialist Disability Accommodation",
    description: "Comprehensive guide to understanding SDA eligibility criteria and the assessment process for accessing specialized disability housing.",
    type: "article",
    images: [
      {
        url: "/header/page-header-8.webp",
        width: 1200,
        height: 630,
        alt: "NDIS assessment meeting for SDA eligibility"
      }
    ]
  },
  alternates: {
    canonical: "/learn/about-sda/eligibility-requirements"
  }
}

// Eligibility requirements for SDA
const eligibilityRequirements = [
  {
    title: "Extreme Functional Impairment",
    description: "You must have extreme functional impairment or very high support needs in self-care, mobility, or self-management.",
    icon: Stethoscope,
    details: "Assessed using functional capacity tools that measure your ability to perform daily activities independently.",
    examples: [
      "Require significant assistance with personal care activities",
      "Need support with mobility due to physical impairments",
      "Require assistance with decision-making and self-management",
      "Have cognitive impairments affecting daily functioning"
    ],
    assessment: "Occupational therapy assessment and functional capacity evaluation"
  },
  {
    title: "Housing Need",
    description: "Current housing is inappropriate and cannot be modified to meet your disability-related needs.",
    icon: Home,
    details: "Your current accommodation lacks essential accessibility features that cannot be reasonably added.",
    examples: [
      "Current home cannot accommodate wheelchair access",
      "Stairs or steps that cannot be modified with ramps",
      "Bathroom facilities that cannot be made accessible",
      "Layout unsuitable for assistive technology needs"
    ],
    assessment: "Housing assessment by qualified occupational therapist"
  },
  {
    title: "NDIS Participant",
    description: "You must be an eligible NDIS participant with SDA included in your plan.",
    icon: CheckCircle2,
    details: "SDA funding must be specifically allocated in your NDIS plan following comprehensive assessment.",
    examples: [
      "Current NDIS participant with active plan",
      "Meet NDIS eligibility criteria",
      "SDA specifically approved and included in plan",
      "Plan review confirms ongoing SDA need"
    ],
    assessment: "NDIS planning meeting with comprehensive needs assessment"
  },
  {
    title: "Long-term Housing Need",
    description: "You require housing that will meet your needs for an extended period (typically 3+ years).",
    icon: Calendar,
    details: "SDA is for permanent housing solutions, not short-term or temporary accommodation needs.",
    examples: [
      "Stable or progressive disability requiring ongoing support",
      "Housing needs unlikely to decrease significantly",
      "Alternative housing options have been explored",
      "Long-term support arrangements in place"
    ],
    assessment: "Medical and allied health reports confirming long-term needs"
  }
]

// Assessment Process Steps
const assessmentProcess = [
  {
    step: "1",
    title: "Initial NDIS Planning",
    description: "Discuss SDA needs during your NDIS planning conversation or plan review.",
    timeframe: "1-2 meetings",
    requirements: [
      "Current NDIS plan or eligibility",
      "Medical reports and assessments",
      "Housing needs documentation",
      "Goal setting for independent living"
    ]
  },
  {
    step: "2",
    title: "Functional Capacity Assessment",
    description: "Comprehensive assessment by occupational therapist to evaluate your functional abilities.",
    timeframe: "2-4 weeks",
    requirements: [
      "Occupational therapy assessment",
      "Daily living skills evaluation",
      "Assistive technology needs assessment",
      "Environmental barriers identification"
    ]
  },
  {
    step: "3",
    title: "Housing Assessment",
    description: "Evaluation of current housing and identification of necessary features for SDA.",
    timeframe: "1-2 weeks",
    requirements: [
      "Current home accessibility audit",
      "Modification feasibility assessment",
      "SDA design category recommendation",
      "Location and preference considerations"
    ]
  },
  {
    step: "4",
    title: "NDIS Decision",
    description: "NDIS reviews assessments and makes decision on SDA funding approval.",
    timeframe: "6-12 weeks",
    requirements: [
      "All assessment reports submitted",
      "Medical evidence supporting need",
      "Reasonable and necessary criteria met",
      "Plan amendment or new plan created"
    ]
  }
]

// Common Eligibility Scenarios
const eligibilityScenarios = [
  {
    title: "High Physical Support Needs",
    description: "Participants requiring significant daily physical assistance",
    examples: [
      "Use of ceiling hoists for transfers",
      "Require emergency backup power for medical equipment",
      "Need 24/7 support worker presence",
      "Require clinical care facilities in home"
    ],
    likelyOutcome: "High Physical Support SDA category",
    icon: Stethoscope
  },
  {
    title: "Wheelchair Users",
    description: "Participants requiring full wheelchair accessibility",
    examples: [
      "Use manual or power wheelchair daily",
      "Require wide doorways and corridors",
      "Need accessible bathroom and kitchen facilities",
      "Require level access throughout home"
    ],
    likelyOutcome: "Fully Accessible SDA category",
    icon: UserCheck
  },
  {
    title: "Behavioral Support Needs",
    description: "Participants who may damage property unintentionally",
    examples: [
      "Property damage due to disability-related behaviors",
      "Need for reinforced fixtures and fittings",
      "Require secure outdoor spaces",
      "Impact-resistant materials needed"
    ],
    likelyOutcome: "Robust SDA category",
    icon: Home
  },
  {
    title: "Sensory or Cognitive Impairments",
    description: "Participants needing enhanced design features",
    examples: [
      "Visual or hearing impairments requiring design modifications",
      "Cognitive impairments benefiting from visual cues",
      "Need for reduced auditory distractions",
      "Require enhanced lighting and ventilation"
    ],
    likelyOutcome: "Improved Liveability SDA category",
    icon: Users
  }
]

// Frequently Asked Questions
const eligibilityFAQ = [
  {
    question: "What is considered 'extreme functional impairment'?",
    answer: "Extreme functional impairment means you have significant difficulties with self-care, mobility, or self-management that cannot be overcome with standard supports or equipment. This is assessed through functional capacity evaluations that measure your ability to perform daily activities independently."
  },
  {
    question: "Can I apply for SDA if I live with family?",
    answer: "Yes, you can apply for SDA even if you currently live with family. The assessment will consider whether your current housing arrangement meets your disability-related needs and whether SDA would provide greater independence and appropriate support."
  },
  {
    question: "How long does the SDA assessment process take?",
    answer: "The assessment process typically takes 3-6 months from initial discussion to NDIS decision. This includes time for occupational therapy assessments, housing evaluations, report preparation, and NDIS review of your application."
  },
  {
    question: "What if my SDA application is rejected?",
    answer: "If your SDA application is rejected, you can request a review of the decision, provide additional evidence, or seek an independent assessment. You also have the right to appeal to the Administrative Appeals Tribunal if you disagree with the NDIS decision."
  },
  {
    question: "Can my SDA eligibility change over time?",
    answer: "Yes, SDA eligibility can change based on changes in your functional capacity, support needs, or housing circumstances. Regular plan reviews allow for reassessment of your SDA requirements and potential changes to your design category or funding level."
  },
  {
    question: "Do I need to choose a specific SDA design category?",
    answer: "The design category is typically recommended by your occupational therapist based on your assessed needs. However, you can discuss preferences and ensure the recommended category aligns with your goals for independence and quality of life."
  }
]

export default function SDAEligibilityPage() {
  return (
    <>
      <PageHero
        title="SDA Eligibility Requirements"
        description="Understand who qualifies for Specialist Disability Accommodation and learn about the comprehensive assessment process for accessing specialized housing through the NDIS."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About SDA", href: "/learn/about-sda" },
          { title: "Eligibility Requirements", href: "/learn/about-sda/eligibility-requirements" }
        ]}
        heroImage={{
          src: "/header/page-header-8.webp",
          alt: "NDIS assessment meeting for SDA eligibility determination"
        }}
        ctaText="Check Your Eligibility"
        ctaHref="#eligibility-requirements"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/about-sda">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to SDA Overview
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/about-sda/design-categories-explained">
                  Next: Design Categories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA eligibility overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Eligibility Overview
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Who Qualifies for SDA?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                SDA eligibility requires meeting specific criteria related to functional impairment and housing need. 
                Understanding these requirements helps you prepare for the assessment process.
              </p>
            </div>

            <Card className="mb-8 bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">
                      Key Point: SDA is for Extreme Functional Impairment
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      SDA is specifically designed for NDIS participants with extreme functional impairment who require 
                      specialized housing features that cannot be provided through standard accommodation or home modifications. 
                      This is not general housing support - it's for very specific disability-related housing needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section id="eligibility-requirements" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="SDA eligibility requirements">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Essential Requirements
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                The 4 Essential SDA Eligibility Requirements
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                You must meet all four requirements to be eligible for SDA funding. Each requirement is thoroughly 
                assessed during the evaluation process.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {eligibilityRequirements.map((requirement, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                        <requirement.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                          Requirement {index + 1}
                        </Badge>
                        <CardTitle className="text-lg text-[hsl(var(--heading))]">{requirement.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{requirement.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>Assessment Details:</strong> {requirement.details}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Examples include:</h4>
                      <div className="space-y-1">
                        {requirement.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                            <span className="text-[hsl(var(--body))] text-xs">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--background))] p-3 rounded border-l-4 border-[hsl(var(--primary))]">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>How it's assessed:</strong> {requirement.assessment}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA assessment process">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Assessment Process
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                The SDA Assessment Process
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Understanding the assessment process helps you prepare and increases your chances of a successful application.
              </p>
            </div>

            <div className="space-y-8">
              {assessmentProcess.map((step, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-[hsl(var(--heading))]">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">{step.timeframe}</Badge>
                        </div>
                        <p className="text-[hsl(var(--body))] mb-4">{step.description}</p>
                        
                        <div>
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Requirements for this step:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {step.requirements.map((requirement, reqIndex) => (
                              <div key={reqIndex} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                                <span className="text-[hsl(var(--body))] text-sm">{requirement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Common eligibility scenarios">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Real Examples
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Common SDA Eligibility Scenarios
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                See how different types of functional impairment might qualify for different SDA design categories.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {eligibilityScenarios.map((scenario, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <scenario.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <CardTitle className="text-lg text-[hsl(var(--heading))]">{scenario.title}</CardTitle>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{scenario.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Typical situations include:</h4>
                      <div className="space-y-1">
                        {scenario.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[hsl(var(--body))] text-sm">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--lighter-orange))] p-3 rounded border-l-4 border-[hsl(var(--primary))]">
                      <p className="text-[hsl(var(--body))] text-sm">
                        <strong>Likely outcome:</strong> {scenario.likelyOutcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA eligibility FAQ">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Common Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                SDA Eligibility Questions & Answers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Find answers to frequently asked questions about SDA eligibility requirements and the assessment process.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {eligibilityFAQ.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border shadow-sm">
                  <AccordionTrigger className="text-[hsl(var(--heading))] font-medium text-left hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[hsl(var(--body))] leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Topics Navigation */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Related SDA topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                What's Next?
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Continue Your SDA Learning Journey
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Now that you understand eligibility, explore other important SDA topics.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Design Categories</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Learn about the 4 SDA design types and their features</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/design-categories-explained">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Funding & Costs</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Understand SDA funding and your financial responsibilities</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/funding-and-costs">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Application Process</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Step-by-step guide to applying for SDA</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/application-process">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Think You Might Be Eligible for SDA?"
        description="Our experienced team can help you understand your eligibility and guide you through the assessment process. Get personalized advice about your SDA options."
        primaryButtonText="Get Eligibility Assessment"
        primaryButtonLink="/contact"
        secondaryButtonText="View SDA Properties"
        secondaryButtonLink="/properties"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="NDIS participant discussing SDA eligibility with support coordinator"
        footerText="Need help with your SDA application? Our team"
        footerLinkText="can guide you through the process"
        footerLinkHref="/contact"
      />
    </>
  )
} 