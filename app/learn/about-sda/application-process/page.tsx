import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/sections/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { 
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  Users,
  Phone,
  MapPin,
  Home,
  Target,
  Lightbulb,
  AlertTriangle,
  Info,
  Stethoscope,
  ClipboardList,
  UserCheck,
  Building2,
  Timer,
  MessageSquare,
  TrendingUp,
  Scale,
  HelpCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "SDA Application Process | Step-by-Step Guide to Accessing Specialist Disability Accommodation",
  description: "Complete step-by-step guide to applying for SDA. Learn the application process, timeline, required documents, and tips for successful SDA approval.",
  keywords: "SDA application process, how to apply for SDA, SDA approval process, specialist disability accommodation application, NDIS SDA application",
  openGraph: {
    title: "SDA Application Process | Step-by-Step Guide to Accessing Specialist Disability Accommodation",
    description: "Comprehensive guide to the SDA application process with timelines, requirements, and practical tips for success.",
    type: "article",
    images: [
      {
        url: "/header/page-header-8.webp",
        width: 1200,
        height: 630,
        alt: "NDIS participant completing SDA application with support coordinator"
      }
    ]
  },
  alternates: {
    canonical: "/learn/about-sda/application-process"
  }
}

// Application Process Steps
const applicationSteps = [
  {
    step: "1",
    title: "Initial NDIS Planning Discussion",
    description: "Discuss SDA needs during your NDIS planning conversation or request a plan review.",
    timeframe: "1-2 weeks",
    icon: MessageSquare,
    requirements: [
      "Current NDIS plan or eligibility",
      "Medical reports documenting disability",
      "Current housing situation assessment",
      "Support needs documentation"
    ],
    tips: [
      "Be specific about current housing challenges",
      "Bring photos of accessibility barriers",
      "Document daily living difficulties",
      "Involve family/advocates in discussions"
    ],
    outcomes: "NDIS planner agrees to explore SDA eligibility and arranges assessments"
  },
  {
    step: "2",
    title: "Comprehensive Functional Assessment",
    description: "Occupational therapist conducts detailed assessment of your functional capacity and needs.",
    timeframe: "2-4 weeks",
    icon: Stethoscope,
    requirements: [
      "Occupational therapy assessment",
      "Functional capacity evaluation",
      "Daily living skills assessment",
      "Environmental barriers analysis"
    ],
    tips: [
      "Be honest about your daily challenges",
      "Demonstrate actual difficulties you face",
      "Discuss safety concerns in current housing",
      "Explain how issues impact independence"
    ],
    outcomes: "OT report documenting functional impairment level and SDA recommendation"
  },
  {
    step: "3",
    title: "Housing Needs Assessment",
    description: "Evaluation of current housing and identification of required SDA features.",
    timeframe: "1-3 weeks",
    icon: Home,
    requirements: [
      "Current home accessibility audit",
      "Modification feasibility study",
      "SDA design category assessment",
      "Location preference evaluation"
    ],
    tips: [
      "Allow assessor to see all problem areas",
      "Explain why modifications won't work",
      "Discuss location preferences and needs",
      "Consider future needs and changes"
    ],
    outcomes: "Housing assessment report recommending specific SDA design category"
  },
  {
    step: "4",
    title: "Medical Evidence Compilation",
    description: "Gather supporting medical and allied health evidence for your application.",
    timeframe: "2-6 weeks",
    icon: ClipboardList,
    requirements: [
      "Current medical reports",
      "Specialist assessments",
      "Therapy reports and goals",
      "Prognosis and future needs"
    ],
    tips: [
      "Request reports that specifically address housing needs",
      "Ensure reports are recent (within 12 months)",
      "Ask doctors to comment on long-term prognosis",
      "Include any relevant hospital discharge summaries"
    ],
    outcomes: "Comprehensive medical evidence package supporting SDA application"
  },
  {
    step: "5",
    title: "NDIS Review and Decision",
    description: "NDIS reviews all evidence and makes decision on SDA funding approval.",
    timeframe: "6-16 weeks",
    icon: Scale,
    requirements: [
      "All assessment reports submitted",
      "Medical evidence package",
      "NDIS internal review process",
      "Reasonable and necessary assessment"
    ],
    tips: [
      "Follow up regularly on application status",
      "Provide additional information if requested",
      "Be patient - thorough review takes time",
      "Consider getting advocate support"
    ],
    outcomes: "SDA funding approved in NDIS plan with specific design category and location"
  },
  {
    step: "6",
    title: "Housing Search and Selection",
    description: "Search for available SDA properties that match your approved funding and preferences.",
    timeframe: "1-12 months",
    icon: MapPin,
    requirements: [
      "Approved SDA funding in plan",
      "Matching design category properties",
      "Suitable location options",
      "Compatible housemates (if shared)"
    ],
    tips: [
      "Start searching as soon as funding is approved",
      "Be flexible with location if possible",
      "Visit multiple properties before deciding",
      "Consider both current and future needs"
    ],
    outcomes: "Suitable SDA property identified and housing arrangement confirmed"
  },
  {
    step: "7",
    title: "Move-in and Support Setup",
    description: "Coordinate move to SDA property and establish ongoing support services.",
    timeframe: "2-4 weeks",
    icon: UserCheck,
    requirements: [
      "Tenancy agreement signed",
      "Support services arranged",
      "Utilities and services connected",
      "Moving logistics organized"
    ],
    tips: [
      "Plan move well in advance",
      "Ensure support services start immediately",
      "Have emergency contacts established",
      "Know who to contact for maintenance issues"
    ],
    outcomes: "Successfully living in SDA housing with appropriate supports in place"
  }
]

// Document Checklist
const documentChecklist = [
  {
    category: "Medical Documentation",
    icon: Stethoscope,
    required: true,
    documents: [
      "Current GP reports (within 12 months)",
      "Specialist medical reports",
      "Hospital discharge summaries",
      "Medication lists and medical history",
      "Diagnostic reports and test results"
    ]
  },
  {
    category: "Functional Assessments",
    icon: ClipboardList,
    required: true,
    documents: [
      "Occupational therapy assessment",
      "Physiotherapy reports",
      "Speech therapy assessments (if applicable)",
      "Psychology reports (if applicable)",
      "Functional capacity evaluations"
    ]
  },
  {
    category: "Current Housing Evidence", 
    icon: Home,
    required: true,
    documents: [
      "Photos of accessibility barriers",
      "Home modification quotes (if attempted)",
      "Tenancy agreements or ownership documents",
      "Evidence of housing inappropriateness",
      "Safety incident reports"
    ]
  },
  {
    category: "NDIS Documentation",
    icon: FileText,
    required: true,
    documents: [
      "Current NDIS plan",
      "Previous plan reviews",
      "Support coordination reports", 
      "Service provider reports",
      "Goal achievement documentation"
    ]
  },
  {
    category: "Support Documentation",
    icon: Users,
    required: false,
    documents: [
      "Carer statements or reports",
      "Family support documentation",
      "Community service reports",
      "Advocacy organization letters",
      "Reference letters from professionals"
    ]
  }
]

// Common Application Challenges
const applicationChallenges = [
  {
    challenge: "Insufficient Medical Evidence",
    description: "Not having recent or comprehensive enough medical reports",
    solution: "Request updated reports specifically addressing housing needs and functional impact",
    prevention: "Start gathering medical evidence early in the process",
    icon: AlertTriangle
  },
  {
    challenge: "Unclear Functional Impact",
    description: "Assessments don't clearly demonstrate extreme functional impairment",
    solution: "Provide specific examples of daily living difficulties and safety concerns",
    prevention: "Keep a daily diary of challenges for 2-4 weeks before assessments",
    icon: Target
  },
  {
    challenge: "Housing Modification Alternative",
    description: "NDIS suggests home modifications instead of SDA",
    solution: "Demonstrate why modifications are inappropriate, inadequate, or impossible",
    prevention: "Get professional assessment showing modification limitations",
    icon: Home
  },
  {
    challenge: "Long Processing Times",
    description: "Application taking longer than expected timeline",
    solution: "Follow up regularly and provide additional information promptly",
    prevention: "Submit complete applications with all required documentation",
    icon: Clock
  },
  {
    challenge: "Initial Rejection",
    description: "SDA application denied on first submission",
    solution: "Request review, provide additional evidence, or appeal decision",
    prevention: "Ensure all eligibility criteria clearly addressed in initial application",
    icon: Scale
  }
]

// Success Tips
const successTips = [
  {
    category: "Preparation",
    icon: Target,
    tips: [
      "Start preparing evidence 6-12 months before applying",
      "Keep detailed records of housing challenges and incidents",
      "Engage with support coordinators or advocates early",
      "Research SDA options in your preferred areas"
    ]
  },
  {
    category: "During Assessment",
    icon: UserCheck,
    tips: [
      "Be completely honest about your daily challenges",
      "Demonstrate actual difficulties rather than just describing them",
      "Provide specific examples of safety concerns",
      "Explain how housing impacts your independence goals"
    ]
  },
  {
    category: "Documentation",
    icon: FileText,
    tips: [
      "Ensure all reports are recent and comprehensive",
      "Request reports that specifically address housing needs",
      "Get multiple professional opinions where possible",
      "Include photos and evidence of current housing problems"
    ]
  },
  {
    category: "Follow-up",
    icon: Phone,
    tips: [
      "Maintain regular contact with NDIS planners",
      "Respond quickly to requests for additional information",
      "Keep copies of all correspondence and submissions",
      "Know your review and appeal rights if needed"
    ]
  }
]

export default function SDAApplicationProcessPage() {
  return (
    <>
      <PageHero
        title="SDA Application Process"
        description="Complete step-by-step guide to applying for Specialist Disability Accommodation. Learn the process, timelines, required documents, and tips for successful SDA approval."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About SDA", href: "/learn/about-sda" },
          { title: "Application Process", href: "/learn/about-sda/application-process" }
        ]}
        heroImage={{
          src: "/header/page-header-8.webp",
          alt: "NDIS participant working through SDA application process with support coordinator"
        }}
        ctaText="Get Application Help"
        ctaHref="/contact"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/about-sda/funding-and-costs">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back: Funding & Costs
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/about-sda/housing-selection-guide">
                  Next: Housing Selection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Application process overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Process Overview
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                The SDA Application Journey
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                The SDA application process typically takes 4-8 months from initial discussion to moving into housing. 
                Understanding each step helps you prepare and increases your chances of success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6">
                  <Timer className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">4-8 Months</h3>
                  <p className="text-[hsl(var(--body))] text-sm">Typical timeline from application to approval</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6">
                  <ClipboardList className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">7 Key Steps</h3>
                  <p className="text-[hsl(var(--body))] text-sm">From initial planning to move-in coordination</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">85% Success Rate</h3>
                  <p className="text-[hsl(var(--body))] text-sm">With proper preparation and documentation</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">
                      Key to Success: Thorough Preparation
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      The most successful SDA applications are those with comprehensive documentation clearly 
                      demonstrating extreme functional impairment and housing need. Start gathering evidence 
                      early and work with experienced professionals to strengthen your application.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Detailed application steps">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Step-by-Step Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                The 7-Step SDA Application Process
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Follow this comprehensive guide to navigate each stage of the SDA application process successfully.
              </p>
            </div>

            <div className="space-y-8">
              {applicationSteps.map((step, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-5 gap-6">
                      {/* Step Number and Title */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] flex items-center justify-center font-bold text-xl">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[hsl(var(--heading))]">{step.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">{step.timeframe}</Badge>
                              <step.icon className="w-4 h-4 text-[hsl(var(--primary))]" />
                            </div>
                          </div>
                        </div>
                        <p className="text-[hsl(var(--body))] text-sm">{step.description}</p>
                      </div>

                      {/* Requirements and Tips */}
                      <div className="lg:col-span-3 space-y-4">
                        <div>
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">Requirements:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {step.requirements.map((requirement, reqIndex) => (
                              <div key={reqIndex} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                                <span className="text-[hsl(var(--body))] text-sm">{requirement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">Success Tips:</h4>
                          <div className="space-y-2">
                            {step.tips.map((tip, tipIndex) => (
                              <div key={tipIndex} className="flex items-start gap-2">
                                <Lightbulb className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                                <span className="text-[hsl(var(--body))] text-sm">{tip}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-[hsl(var(--light-orange))] p-3 rounded border-l-4 border-[hsl(var(--primary))]">
                          <p className="text-[hsl(var(--body))] text-sm">
                            <strong>Expected Outcome:</strong> {step.outcomes}
                          </p>
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

      {/* Document Checklist */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Required documents checklist">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Documentation
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Complete Document Checklist
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Ensure you have all required documentation to support a strong SDA application.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentChecklist.map((category, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <category.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      <CardTitle className="text-lg text-[hsl(var(--heading))]">{category.category}</CardTitle>
                      {category.required && (
                        <Badge className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">Required</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.documents.map((document, docIndex) => (
                        <div key={docIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                          <span className="text-[hsl(var(--body))] text-sm">{document}</span>
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

      {/* Common Challenges */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Common application challenges">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Challenge Solutions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Overcoming Common Application Challenges
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Learn from common challenges and how to address them proactively in your application.
              </p>
            </div>

            <div className="space-y-6">
              {applicationChallenges.map((challenge, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-4 gap-4 items-start">
                      <div className="flex items-center gap-3">
                        <challenge.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                        <h3 className="font-bold text-[hsl(var(--heading))]">{challenge.challenge}</h3>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-1 text-sm">Issue:</h4>
                        <p className="text-[hsl(var(--body))] text-sm">{challenge.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-1 text-sm">Solution:</h4>
                        <p className="text-[hsl(var(--body))] text-sm">{challenge.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-1 text-sm">Prevention:</h4>
                        <p className="text-[hsl(var(--body))] text-sm">{challenge.prevention}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Application success tips">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Success Strategies
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Tips for Application Success
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Proven strategies to strengthen your SDA application and improve your chances of approval.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successTips.map((tipCategory, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-3">
                      <tipCategory.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {tipCategory.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tipCategory.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                          <span className="text-[hsl(var(--body))] text-sm">{tip}</span>
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

      {/* Related Topics Navigation */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Related SDA topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                What's Next?
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Continue Your SDA Journey
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Once you understand the application process, learn about choosing the right housing and your rights.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Building2 className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Housing Selection</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">How to choose the right SDA housing for you</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/housing-selection-guide">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Scale className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Rights & Support</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Your rights and available support resources</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/rights-and-support">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <UserCheck className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Check Eligibility</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Review eligibility requirements before applying</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/eligibility-requirements">
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
        title="Ready to Start Your SDA Application?"
        description="The application process can be complex, but you don't have to navigate it alone. Our experienced team can guide you through each step and help strengthen your application."
        primaryButtonText="Get Application Support"
        primaryButtonLink="/contact"
        secondaryButtonText="View SDA Properties"
        secondaryButtonLink="/properties"
        imageSrc="/png/support-1120755_1920.jpg"
        mobileImageSrc="/png/1.webp"
        imageAlt="NDIS participant working with support coordinator on SDA application"
        footerText="Need help with your SDA application? Our team"
        footerLinkText="provides expert guidance"
        footerLinkHref="/contact"
      />
    </>
  )
} 