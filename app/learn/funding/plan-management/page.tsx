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
  Settings,
  UserCheck,
  Handshake,
  Shield,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Clock,
  Users,
  FileText,
  AlertCircle,
  Info,
  Target,
  Plus,
  Minus,
  Scale,
  Lightbulb,
  Calculator,
  BarChart3
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete NDIS Plan Management Guide | Self, Plan & NDIA Managed Options",
  description: "Master NDIS plan management options - Self-Managed, Plan Managed, and NDIA Managed. Compare benefits, costs, and choose the right approach for your situation.",
  keywords: "NDIS plan management, self-managed NDIS, plan managed, NDIA managed, plan manager, NDIS management options, NDIS administration",
  openGraph: {
    title: "Complete NDIS Plan Management Guide | Choose the Right Management Option",
    description: "Comprehensive guide to NDIS plan management options. Compare self-managed, plan managed, and NDIA managed approaches to find what works best for you.",
    type: "article",
    images: [
      {
        url: "/header/page-header-4.webp",
        width: 1200,
        height: 630,
        alt: "NDIS participant discussing plan management options with support coordinator"
      }
    ]
  },
  alternates: {
    canonical: "/learn/funding/plan-management"
  }
}

// Plan Management Options Detail
const managementOptions = [
  {
    title: "Self-Managed",
    subtitle: "You Control Everything",
    description: "You manage all aspects of your NDIS funding, including hiring support workers, paying invoices, keeping records, and claiming reimbursements.",
    icon: UserCheck,
    controlLevel: "Maximum",
    adminResponsibility: "High",
    flexibility: "Highest",
    cost: "No additional cost",
    suitableFor: "People who want maximum control and have time/skills for administration",
    advantages: [
      "Complete choice and control over supports",
      "Can hire anyone as support worker (including family in some cases)",
      "Direct relationships with all providers",
      "Flexible service arrangements and timing",
      "Access to both registered and unregistered providers",
      "Immediate access to funding (after reimbursement)",
      "Can negotiate prices and service terms directly"
    ],
    disadvantages: [
      "Significant administrative workload",
      "Must handle all invoicing and payments",
      "Responsible for worker compliance and safety",
      "Need to keep detailed financial records",
      "Must understand employment law if hiring workers",
      "Delayed access to funds (reimbursement model)",
      "Full responsibility for any issues or disputes"
    ],
    responsibilities: [
      "Finding and hiring support workers",
      "Managing employment relationships",
      "Paying all invoices and workers",
      "Claiming reimbursements from NDIS",
      "Keeping detailed financial records",
      "Ensuring worker compliance and safety",
      "Managing worker insurance and conditions",
      "Reporting to NDIS as required"
    ],
    tips: [
      "Use accounting software or apps to track expenses",
      "Keep all receipts and maintain good records",
      "Understand your responsibilities as an employer",
      "Consider professional advice for complex situations",
      "Join self-managed participant support groups"
    ]
  },
  {
    title: "Plan Managed",
    subtitle: "Professional Support with Flexibility",
    description: "A registered plan manager handles the administrative tasks while you retain choice and control over your supports and providers.",
    icon: Handshake,
    controlLevel: "High",
    adminResponsibility: "Low",
    flexibility: "High",
    cost: "Funded by NDIS (plan management fees)",
    suitableFor: "People who want flexibility with professional administrative support",
    advantages: [
      "Professional handles all financial administration",
      "Can use both registered and unregistered providers",
      "Plan manager pays providers directly",
      "Regular budget reports and updates provided",
      "Support with budgeting and planning",
      "Reduced administrative burden",
      "Professional expertise and advice available"
    ],
    disadvantages: [
      "Uses some of your plan funding for management fees",
      "Less direct control than self-management",
      "Dependent on plan manager's quality and reliability",
      "May have some restrictions on service arrangements",
      "Need to communicate changes through plan manager",
      "Potential delays if plan manager is overloaded"
    ],
    responsibilities: [
      "Choosing and managing plan manager relationship",
      "Communicating support needs and changes",
      "Reviewing budget reports and statements",
      "Finding and selecting service providers",
      "Ensuring services meet your needs",
      "Participating in plan reviews and meetings"
    ],
    tips: [
      "Choose an experienced, responsive plan manager",
      "Establish clear communication preferences",
      "Review monthly statements and reports",
      "Ask questions about budget and spending",
      "Maintain some involvement in financial oversight"
    ]
  },
  {
    title: "NDIA Managed",
    subtitle: "NDIS Handles Administration",
    description: "The NDIS pays your providers directly. You choose from registered providers and pre-approved supports with minimal administrative responsibility.",
    icon: Shield,
    controlLevel: "Limited",
    adminResponsibility: "Minimal",
    flexibility: "Lower",
    cost: "No additional cost",
    suitableFor: "People who want simplicity and don't need unregistered providers",
    advantages: [
      "No administrative burden or paperwork",
      "NDIS handles all provider payments directly",
      "All providers are registered and verified",
      "Simple and straightforward arrangements",
      "No financial management required",
      "NDIS resolves any payment disputes",
      "Immediate access to services (no upfront costs)"
    ],
    disadvantages: [
      "Limited to registered providers only",
      "Less flexibility in service arrangements",
      "Slower approval processes for changes",
      "Cannot hire family members as workers",
      "Limited choice in support timing and methods",
      "NDIS controls all financial aspects",
      "May face waiting lists for popular services"
    ],
    responsibilities: [
      "Choosing from registered service providers",
      "Communicating with providers about needs",
      "Attending appointments and using services",
      "Reporting issues to NDIS when necessary",
      "Participating in plan reviews",
      "Requesting service changes through NDIS"
    ],
    tips: [
      "Research registered providers in your area",
      "Understand the service request process",
      "Keep records of service satisfaction",
      "Plan ahead for any service changes needed",
      "Know how to contact NDIS for support"
    ]
  }
]

// Hybrid Management Approaches
const hybridOptions = [
  {
    combination: "Core Support: Plan Managed + Capital Support: NDIA Managed",
    reasoning: "Flexibility for daily supports with NDIS oversight for expensive equipment",
    benefits: ["Flexible daily support arrangements", "Secure equipment purchasing process", "Professional admin for complex needs"],
    example: "Personal care and transport plan managed, assistive technology NDIA managed"
  },
  {
    combination: "Core Support: Self-Managed + Capacity Building: Plan Managed", 
    reasoning: "Maximum control over daily supports with professional help for goal-focused services",
    benefits: ["Direct control of daily supports", "Professional guidance for therapy and training", "Reduced overall admin burden"],
    example: "Personal care self-managed, therapy and skill development plan managed"
  },
  {
    combination: "All Categories: Plan Managed",
    reasoning: "Consistent professional management across all funding types",
    benefits: ["Single point of contact", "Comprehensive budget oversight", "Consistent reporting and communication"],
    example: "Full plan management for comprehensive professional support"
  }
]

// Choosing the Right Option
const decisionFactors = [
  {
    factor: "Time & Skills",
    questions: [
      "Do you have time for administrative tasks?",
      "Are you comfortable with financial management?",
      "Do you understand employment and legal requirements?",
      "Are you organized with record keeping?"
    ],
    selfManaged: "Need significant time and administrative skills",
    planManaged: "Minimal time required, professional handles admin",
    ndiaManaged: "Almost no time or skills required"
  },
  {
    factor: "Provider Preferences",
    questions: [
      "Do you want to hire family members as workers?",
      "Do you need unregistered service providers?",
      "Do you want direct relationships with providers?",
      "Are you satisfied with registered providers?"
    ],
    selfManaged: "Access to any provider, including family members",
    planManaged: "Access to registered and unregistered providers",
    ndiaManaged: "Limited to registered providers only"
  },
  {
    factor: "Control & Flexibility",
    questions: [
      "How important is direct control to you?",
      "Do you need flexible service arrangements?",
      "Do you want to negotiate prices and terms?",
      "Are you comfortable with standard arrangements?"
    ],
    selfManaged: "Maximum control and flexibility",
    planManaged: "High flexibility with professional support",
    ndiaManaged: "Standard arrangements with limited flexibility"
  },
  {
    factor: "Support Needs",
    questions: [
      "Do you have complex or unique support needs?",
      "Do you need services at unusual times?",
      "Are your needs likely to change frequently?",
      "Do you need help with budgeting and planning?"
    ],
    selfManaged: "Best for unique or complex arrangements",
    planManaged: "Good for changing needs with professional guidance",
    ndiaManaged: "Suitable for standard, stable support needs"
  }
]

// Management FAQ
const managementFAQ = [
  {
    question: "Can I change my plan management type during my plan?",
    answer: "Yes, you can request to change your plan management type at any time. Some changes can be made immediately, while others might require a plan review. Contact your support coordinator or the NDIS to discuss your options and the process for changing."
  },
  {
    question: "How much does plan management cost?",
    answer: "Plan management fees are funded by the NDIS as part of your plan if you choose plan managed. You don't pay out of pocket, but the fees do use some of your overall NDIS funding. Self-managed and NDIA managed have no additional costs to your plan."
  },
  {
    question: "Can I mix management types for different budget categories?",
    answer: "Yes, you can have different management types for different budget categories. For example, you might self-manage Core Support but have Capital Support NDIA managed. This hybrid approach can give you flexibility where you want it and simplicity where you need it."
  },
  {
    question: "What if I'm not happy with my plan manager?",
    answer: "You can change plan managers at any time. Look for a new registered plan manager, notify them and the NDIS of the change. Your new plan manager will help with the transition process. It's important to choose someone who understands your needs and communicates well."
  },
  {
    question: "Do I need qualifications or training to self-manage?",
    answer: "No formal qualifications are required, but you need to understand your responsibilities including financial management, employment law (if hiring workers), and NDIS requirements. The NDIS provides resources and support groups to help self-managed participants."
  },
  {
    question: "What happens if I make mistakes with self-management?",
    answer: "Minor mistakes can usually be corrected with proper documentation and communication with the NDIS. Serious issues like misuse of funds or non-compliance can result in your plan being changed to NDIA managed. It's important to keep good records and ask for help when needed."
  }
]

export default function PlanManagementPage() {
  return (
    <>
      <PageHero
        title="Complete NDIS Plan Management Guide"
        description="Master the three NDIS plan management options - Self-Managed, Plan Managed, and NDIA Managed. Compare benefits, responsibilities, and choose the right approach for your situation."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "NDIS Funding", href: "/learn/funding" },
          { title: "Plan Management", href: "/learn/funding/plan-management" }
        ]}
        heroImage={{
          src: "/header/page-header-4.webp",
          alt: "NDIS participant discussing plan management options with support coordinator"
        }}
        ctaText="Get Plan Management Help"
        ctaHref="/contact"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/funding/capacity-building">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Capacity Building
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/funding/budget-maximization">
                  Next: Budget Maximization
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Plan management overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Choose Your Approach
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How You Manage Your Plan Affects Everything
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Your plan management choice determines your level of control, administrative responsibilities, 
                provider options, and flexibility. Choose the approach that matches your preferences and capabilities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-[hsl(var(--pure-white))] shadow-lg border-l-4 border-l-[hsl(var(--primary))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Settings className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Three Management Options</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      NDIS offers three ways to manage your plan, each with different levels of control, 
                      flexibility, and responsibility. You can even mix different approaches for different 
                      budget categories.
                    </p>
                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Self-Managed: Maximum control</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Handshake className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Plan Managed: Professional support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">NDIA Managed: Simplicity</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Scale className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">It's About Balance</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      The best choice balances your desire for control with your capacity for administration. 
                      You can always change your management approach if your needs or circumstances change.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/png/2.webp"
                    alt="NDIS participant discussing plan management options with support coordinator"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-lg border max-w-xs">
                  <p className="text-[hsl(var(--body))] text-sm">
                    <strong className="text-[hsl(var(--heading))]">Your choice:</strong> Each management option offers 
                    different benefits - choose what works best for your lifestyle and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Options Detailed */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Plan management options detailed">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Detailed Comparison
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Understanding Each Management Option
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Learn the details of each management approach to make an informed decision about what's right for you.
              </p>
            </div>

            <div className="space-y-12">
              {managementOptions.map((option, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Option Overview */}
                      <div className="lg:col-span-1 p-8 bg-[hsl(var(--background))]">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                            <option.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[hsl(var(--heading))]">{option.title}</h3>
                            <p className="text-[hsl(var(--primary))] font-medium">{option.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-[hsl(var(--body))] leading-relaxed mb-6">{option.description}</p>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-[hsl(var(--body))] text-sm">Control Level:</span>
                            <span className="font-semibold text-[hsl(var(--heading))] text-sm">{option.controlLevel}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[hsl(var(--body))] text-sm">Admin Work:</span>
                            <span className="font-semibold text-[hsl(var(--heading))] text-sm">{option.adminResponsibility}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[hsl(var(--body))] text-sm">Flexibility:</span>
                            <span className="font-semibold text-[hsl(var(--heading))] text-sm">{option.flexibility}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[hsl(var(--body))] text-sm">Cost:</span>
                            <span className="font-semibold text-[hsl(var(--heading))] text-sm">{option.cost}</span>
                          </div>
                        </div>

                        <div className="bg-[hsl(var(--light-orange))] p-4 rounded-lg mt-6">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Best For:</h4>
                          <p className="text-[hsl(var(--body))] text-sm">{option.suitableFor}</p>
                        </div>
                      </div>

                      {/* Pros and Cons */}
                      <div className="lg:col-span-2 p-8">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h4 className="text-lg font-bold text-[hsl(var(--heading))] mb-4 flex items-center gap-2">
                              <Plus className="w-5 h-5 text-[hsl(var(--primary))]" />
                              Advantages
                            </h4>
                            <div className="space-y-2">
                              {option.advantages.map((advantage, advIndex) => (
                                <div key={advIndex} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                                  <span className="text-[hsl(var(--body))] text-sm">{advantage}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold text-[hsl(var(--heading))] mb-4 flex items-center gap-2">
                              <Minus className="w-5 h-5 text-[hsl(var(--primary))]" />
                              Considerations
                            </h4>
                            <div className="space-y-2">
                              {option.disadvantages.map((disadvantage, disIndex) => (
                                <div key={disIndex} className="flex items-start gap-2">
                                  <AlertCircle className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                                  <span className="text-[hsl(var(--body))] text-sm">{disadvantage}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="border-t pt-6">
                          <h4 className="text-lg font-bold text-[hsl(var(--heading))] mb-4">Your Responsibilities:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {option.responsibilities.map((responsibility, respIndex) => (
                              <div key={respIndex} className="p-3 bg-[hsl(var(--light-orange))] rounded">
                                <span className="text-[hsl(var(--body))] text-sm">{responsibility}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-[hsl(var(--background))] p-4 rounded-lg mt-6 border-l-4 border-[hsl(var(--primary))]">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Success Tips:</h4>
                          <div className="space-y-1">
                            {option.tips.map((tip, tipIndex) => (
                              <p key={tipIndex} className="text-[hsl(var(--body))] text-sm">• {tip}</p>
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

      {/* Hybrid Management */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Hybrid plan management">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Mix and Match
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Hybrid Management: Best of Both Worlds
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                You can use different management types for different budget categories. This hybrid approach 
                gives you control where you want it and simplicity where you need it.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {hybridOptions.map((hybrid, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <CardTitle className="text-lg text-[hsl(var(--heading))]">Hybrid Option {index + 1}</CardTitle>
                    </div>
                    <p className="text-[hsl(var(--primary))] font-medium text-sm">{hybrid.combination}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Why This Works:</h4>
                      <p className="text-[hsl(var(--body))] text-sm">{hybrid.reasoning}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Benefits:</h4>
                      <div className="space-y-1">
                        {hybrid.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                            <span className="text-[hsl(var(--body))] text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Example:</h4>
                      <p className="text-[hsl(var(--body))] text-xs">{hybrid.example}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Plan management decision framework">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Decision Framework
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How to Choose the Right Management Option
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Consider these key factors to determine which management approach aligns best with your needs and preferences.
              </p>
            </div>

            <div className="space-y-8">
              {decisionFactors.map((factor, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(var(--heading))] flex items-center gap-3">
                      <Target className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {factor.factor}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-4 gap-6">
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">Ask Yourself:</h4>
                        <div className="space-y-2">
                          {factor.questions.map((question, qIndex) => (
                            <p key={qIndex} className="text-[hsl(var(--body))] text-sm">• {question}</p>
                          ))}
                        </div>
                      </div>
                      <div className="p-3 bg-[hsl(var(--lighter-orange))] rounded">
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 flex items-center gap-2">
                          <UserCheck className="w-4 h-4" />
                          Self-Managed
                        </h4>
                        <p className="text-[hsl(var(--body))] text-sm">{factor.selfManaged}</p>
                      </div>
                      <div className="p-3 bg-[hsl(var(--lighter-orange))] rounded">
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 flex items-center gap-2">
                          <Handshake className="w-4 h-4" />
                          Plan Managed
                        </h4>
                        <p className="text-[hsl(var(--body))] text-sm">{factor.planManaged}</p>
                      </div>
                      <div className="p-3 bg-[hsl(var(--lighter-orange))] rounded">
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4" />
                          NDIA Managed
                        </h4>
                        <p className="text-[hsl(var(--body))] text-sm">{factor.ndiaManaged}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Plan management FAQ">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Common Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Plan Management Questions & Answers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Find answers to frequently asked questions about choosing and managing your NDIS plan management approach.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {managementFAQ.map((faq, index) => (
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
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Related funding topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Complete Your Knowledge
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Optimize Your Entire NDIS Plan
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Now that you understand plan management, learn how to maximize the value of your funding.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Budget Maximization</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Strategies to get the most value from your funding</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/funding/budget-maximization">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calculator className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Budget Categories</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Deep dive into Core, Capital, and Capacity Building</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/funding/budget-categories">
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
        title="Need Help Choosing Plan Management?"
        description="Our experienced team can help you understand your options and choose the plan management approach that best fits your needs and lifestyle."
        primaryButtonText="Get Plan Management Help"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/properties"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="NDIS participant discussing plan management options with support team"
        footerText="Ready to optimize your plan management? Our team"
        footerLinkText="can help you choose the right approach"
        footerLinkHref="/contact"
      />
    </>
  )
} 