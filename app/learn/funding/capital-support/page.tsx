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
  Building2,
  Settings,
  Home,
  Car,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Lock,
  Scale,
  Shield,
  Lightbulb,
  DollarSign,
  FileText,
  Clock,
  AlertCircle,
  Info,
  Target,
  TrendingUp,
  Stethoscope,
  Accessibility,
  Laptop,
  Phone
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Capital Support Guide | NDIS Equipment & Modifications Funding",
  description: "Master Capital Support funding for assistive technology, home modifications, and equipment. Learn the approval process, costs, and strategies for accessing NDIS Capital Support.",
  keywords: "Capital Support, NDIS equipment, assistive technology, home modifications, vehicle modifications, NDIS Capital Support, disability equipment funding",
  openGraph: {
    title: "Complete Capital Support Guide | NDIS Equipment & Modifications",
    description: "Comprehensive guide to Capital Support funding - from assistive technology to home modifications. Navigate the approval process and maximize your equipment funding.",
    type: "article",
    images: [
      {
        url: "/header/page-header-4.webp",
        width: 1200,
        height: 630,
        alt: "NDIS participant reviewing assistive technology options with occupational therapist"
      }
    ]
  },
  alternates: {
    canonical: "/learn/funding/capital-support"
  }
}

// Capital Support Categories
const capitalCategories = [
  {
    title: "Assistive Technology",
    description: "Equipment and devices that help you participate more fully in daily activities",
    icon: Laptop,
    examples: [
      "Wheelchairs (manual and electric)",
      "Communication devices",
      "Hearing aids and assistive listening",
      "Vision aids and magnification",
      "Computer access equipment",
      "Daily living aids",
      "Mobility equipment",
      "Environmental control systems"
    ],
    considerations: [
      "Must be specifically for disability-related needs",
      "Requires occupational therapy assessment",
      "May need trial period before purchase",
      "Consider maintenance and warranty"
    ],
    typicalCosts: "$500 - $50,000+",
    approvalProcess: "OT assessment → quotes → NDIS approval"
  },
  {
    title: "Home Modifications",
    description: "Changes to your home environment to improve accessibility and independence",
    icon: Home,
    examples: [
      "Ramps and accessible pathways", 
      "Bathroom modifications (grab rails, accessible shower)",
      "Kitchen modifications (accessible benches, cupboards)",
      "Doorway widening",
      "Accessible door handles and locks",
      "Stair lifts and platform lifts",
      "Lighting improvements",
      "Flooring changes for accessibility"
    ],
    considerations: [
      "Must own or have long-term lease",
      "Requires building approvals",
      "Professional installation usually required",
      "May affect property value"
    ],
    typicalCosts: "$1,000 - $100,000+",
    approvalProcess: "Home assessment → quotes → building approvals → NDIS approval"
  },
  {
    title: "Vehicle Modifications",
    description: "Modifications to vehicles to enable safe and independent transport",
    icon: Car,
    examples: [
      "Hand controls for driving",
      "Wheelchair hoists and tie-downs",
      "Swivel seats and transfer boards",
      "Pedal extensions or modifications",
      "Steering wheel knobs",
      "Mirrors and visibility aids",
      "Accessible entry systems",
      "Vehicle conversion to wheelchair accessible"
    ],
    considerations: [
      "Must have or be getting driver's license",
      "Vehicle must be registered in your name",
      "Professional installation required",
      "May need driving assessment"
    ],
    typicalCosts: "$2,000 - $80,000+",
    approvalProcess: "Driving assessment → vehicle assessment → quotes → NDIS approval"
  },
  {
    title: "Specialist Disability Accommodation (SDA)",
    description: "Purpose-built accessible housing for people with extreme functional impairment",
    icon: Building2,
    examples: [
      "Fully accessible apartments",
      "Robust housing for behavioral needs",
      "High physical support housing",
      "Improved liveability housing",
      "Group homes with accessibility features",
      "Villa-style accessible units"
    ],
    considerations: [
      "Must meet extreme functional impairment criteria",
      "Requires comprehensive assessment",
      "Long-term housing solution",
      "Separate from SIL funding"
    ],
    typicalCosts: "$100,000 - $600,000+ annually",
    approvalProcess: "Functional assessment → housing assessment → NDIS approval"
  }
]

// Capital Support Process Steps
const approvalProcess = [
  {
    step: "1",
    title: "Assessment and Recommendation",
    description: "Get professional assessment from qualified practitioner",
    timeframe: "2-4 weeks",
    requirements: [
      "Occupational therapy assessment",
      "Functional needs evaluation", 
      "Equipment trial if appropriate",
      "Environmental assessment if needed"
    ],
    tips: "Choose an OT experienced with NDIS and your specific needs"
  },
  {
    step: "2",
    title: "Quotation and Documentation",
    description: "Gather quotes and supporting documentation",
    timeframe: "1-2 weeks",
    requirements: [
      "At least 2-3 competitive quotes",
      "Detailed product specifications",
      "Supplier credentials and warranties",
      "Installation and delivery costs"
    ],
    tips: "Get quotes from NDIS-registered suppliers when possible"
  },
  {
    step: "3", 
    title: "NDIS Application",
    description: "Submit formal request to NDIS for approval",
    timeframe: "4-8 weeks",
    requirements: [
      "Completed assessment report",
      "All supporting quotes",
      "Evidence of reasonable and necessary",
      "Installation timeline if applicable"
    ],
    tips: "Ensure all documentation clearly links to NDIS goals"
  },
  {
    step: "4",
    title: "Purchase and Installation",
    description: "Once approved, purchase and install equipment",
    timeframe: "2-12 weeks",
    requirements: [
      "Purchase from approved supplier",
      "Professional installation if required",
      "Delivery and setup coordination",
      "Documentation and warranties"
    ],
    tips: "Keep all receipts and documentation for future reference"
  }
]

// Cost Factors and Planning
const costFactors = [
  {
    category: "Assessment Costs",
    description: "Professional evaluations required before purchase",
    typical: "$200 - $800",
    factors: ["OT assessment fees", "Home/vehicle assessment", "Trial equipment costs", "Follow-up consultations"],
    funding: "Usually comes from Capacity Building budget"
  },
  {
    category: "Equipment Costs",
    description: "The actual cost of assistive technology or modifications",
    typical: "$500 - $100,000+",
    factors: ["Brand and quality", "Customization needed", "Technology level", "Durability requirements"],
    funding: "Comes from Capital Support budget"
  },
  {
    category: "Installation Costs",
    description: "Professional installation and setup expenses",
    typical: "$200 - $20,000+",
    factors: ["Complexity of installation", "Building permits needed", "Professional certifications", "Time required"],
    funding: "Usually included in Capital Support approval"
  },
  {
    category: "Ongoing Costs",
    description: "Maintenance, repairs, and replacement over time",
    typical: "$100 - $5,000+ annually",
    factors: ["Warranty terms", "Maintenance requirements", "Replacement timeline", "Insurance considerations"],
    funding: "May need separate budget allocation"
  }
]

// Smart Strategies
const capitalStrategies = [
  {
    title: "Plan for the Long Term",
    description: "Capital items should provide benefits for years",
    tips: [
      "Choose equipment that will grow with changing needs",
      "Consider future maintenance and upgrade costs",
      "Invest in quality for durability and reliability",
      "Think about technology advancement timelines"
    ]
  },
  {
    title: "Get Expert Advice",
    description: "Professional assessment is crucial for success",
    tips: [
      "Work with OTs experienced in your disability type",
      "Get second opinions for expensive items",
      "Ask about trial periods before purchase",
      "Understand all available options before deciding"
    ]
  },
  {
    title: "Compare Options Thoroughly",
    description: "NDIS requires evidence of value for money",
    tips: [
      "Get multiple quotes from different suppliers",
      "Compare features, warranties, and support",
      "Consider total cost of ownership",
      "Research user reviews and outcomes"
    ]
  },
  {
    title: "Document Everything",
    description: "Good documentation supports approval and future needs",
    tips: [
      "Keep all assessment reports and recommendations",
      "Document how equipment improves independence",
      "Maintain records of maintenance and repairs",
      "Track outcomes for plan reviews"
    ]
  }
]

// Capital Support FAQ
const capitalFAQ = [
  {
    question: "How long does Capital Support approval take?",
    answer: "The approval process typically takes 6-12 weeks from initial assessment to final approval. Simple items under $1,500 may be approved faster, while complex home modifications or expensive equipment can take longer due to additional assessments and approvals required."
  },
  {
    question: "Can I choose any brand or supplier for Capital Support items?",
    answer: "You can generally choose from any supplier, but the NDIS must approve the specific item and cost. Some plan managers may have preferred suppliers. Always get quotes from multiple suppliers and ensure they can provide appropriate warranties and support."
  },
  {
    question: "What if my Capital Support item breaks or needs repair?",
    answer: "Repairs and maintenance may be covered depending on your plan and the warranty terms. Keep all documentation about warranty coverage. Major repairs or replacements may require new Capital Support approval if not covered by warranty."
  },
  {
    question: "Can I upgrade my Capital Support equipment?",
    answer: "Upgrades are possible but require new assessment and approval. You'll need to demonstrate that your needs have changed or that new technology provides significant benefits. The NDIS may consider trade-in value of existing equipment."
  },
  {
    question: "What happens to Capital Support items when I move?",
    answer: "Portable items like wheelchairs and communication devices move with you. Home modifications may need to be left behind or removed. Vehicle modifications transfer with the vehicle. Consider portability when choosing Capital Support items."
  },
  {
    question: "How much Capital Support funding will I get?",
    answer: "Capital Support funding is based on assessed need, not a set amount. The NDIS approves specific items that are reasonable and necessary for your goals. Some participants may have no Capital Support needs, while others may receive significant funding for complex modifications."
  }
]

export default function CapitalSupportPage() {
  return (
    <>
      <PageHero
        title="Complete Capital Support Guide"
        description="Master NDIS Capital Support funding for assistive technology, home modifications, and equipment. Learn the approval process, costs, and strategies for accessing equipment funding."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "NDIS Funding", href: "/learn/funding" },
          { title: "Capital Support", href: "/learn/funding/capital-support" }
        ]}
        heroImage={{
          src: "/header/page-header-4.webp",
          alt: "NDIS participant reviewing assistive technology options with occupational therapist"
        }}
        ctaText="Get Capital Support Help"
        ctaHref="/contact"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/funding/core-support-guide">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Core Support
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/funding/capacity-building">
                  Next: Capacity Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Capital Support overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Equipment & Modifications
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Understanding Capital Support Funding
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Capital Support provides funding for equipment, assistive technology, and modifications that help you 
                live more independently. Unlike Core Support, every item requires specific approval.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-[hsl(var(--pure-white))] shadow-lg border-l-4 border-l-[hsl(var(--primary))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Lock className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Specific Item Funding</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      Capital Support is very different from Core Support. Each item must be individually assessed, 
                      quoted, and approved by the NDIS. You cannot simply decide to purchase equipment.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Requires assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Multiple quotes needed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">6-12 week process</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Long-term solutions</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Focus on Independence</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      Capital Support items should reduce your reliance on other supports over time. The NDIS 
                      looks for equipment that provides long-term independence benefits, not just convenience.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/png/2.webp"
                    alt="NDIS participant using assistive technology equipment for independence"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-lg border max-w-xs">
                  <p className="text-[hsl(var(--body))] text-sm">
                    <strong className="text-[hsl(var(--heading))]">8% of funding:</strong> Capital Support is typically 
                    a smaller but crucial part of NDIS plans, focused on long-term independence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Support Categories */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Capital Support categories">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Four Main Categories
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Types of Capital Support
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Capital Support covers four main areas, each with different requirements and approval processes.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {capitalCategories.map((category, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-[hsl(var(--heading))]">{category.title}</CardTitle>
                        <p className="text-[hsl(var(--body))] text-sm">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Common Examples:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {category.examples.slice(0, 6).map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full"></div>
                            <span className="text-[hsl(var(--body))] text-sm">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Key Considerations:</h4>
                      {category.considerations.map((consideration, considerationIndex) => (
                        <p key={considerationIndex} className="text-[hsl(var(--body))] text-xs mb-1">• {consideration}</p>
                      ))}
                    </div>

                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="font-semibold text-[hsl(var(--heading))]">Typical Costs: </span>
                        <span className="text-[hsl(var(--body))]">{category.typicalCosts}</span>
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--background))] p-3 rounded border-l-4 border-[hsl(var(--primary))]">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>Process:</strong> {category.approvalProcess}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approval Process */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Capital Support approval process">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Step-by-Step Process
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Capital Support Approval Process
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Understanding the approval process helps you plan ahead and increases your chances of success.
              </p>
            </div>

            <div className="space-y-8">
              {approvalProcess.map((step, index) => (
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
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Requirements:</h4>
                            <div className="space-y-1">
                              {step.requirements.map((requirement, reqIndex) => (
                                <div key={reqIndex} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                                  <span className="text-[hsl(var(--body))] text-sm">{requirement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                            <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Pro Tip:</h4>
                            <p className="text-[hsl(var(--body))] text-sm">{step.tips}</p>
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

      {/* Cost Planning */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Capital Support cost planning">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Planning Your Investment
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Understanding Capital Support Costs
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Capital Support involves more than just equipment costs. Plan for the full investment including assessments, installation, and ongoing maintenance.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {costFactors.map((factor, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-[hsl(var(--primary))]" />
                      {factor.category}
                    </CardTitle>
                    <p className="text-[hsl(var(--body))] text-sm">{factor.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-[hsl(var(--heading))]">Typical Range:</span>
                      <span className="text-[hsl(var(--primary))] font-bold">{factor.typical}</span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Cost Factors:</h4>
                      <div className="space-y-1">
                        {factor.factors.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full"></div>
                            <span className="text-[hsl(var(--body))] text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--lighter-orange))] p-3 rounded">
                      <p className="text-[hsl(var(--body))] text-sm">
                        <strong>Funding Source:</strong> {factor.funding}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Strategies */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Capital Support strategies">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Expert Strategies
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Smart Capital Support Strategies
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Learn proven strategies to navigate the Capital Support process successfully and get the best outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {capitalStrategies.map((strategy, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))]">{strategy.title}</CardTitle>
                    <p className="text-[hsl(var(--body))] text-sm">{strategy.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {strategy.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-3 p-3 bg-[hsl(var(--light-orange))] rounded">
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Capital Support FAQ">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Common Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Capital Support Questions & Answers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Find answers to frequently asked questions about Capital Support funding and the approval process.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {capitalFAQ.map((faq, index) => (
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
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Related funding topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Related Topics
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Continue Your Funding Journey
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Explore other aspects of NDIS funding to build your complete understanding.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Capacity Building</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Skills and independence building guide</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/funding/capacity-building">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Settings className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Plan Management</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Choose the right management approach</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/funding/plan-management">
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
        title="Need Help with Capital Support Applications?"
        description="Our experienced team can help you navigate the Capital Support process, from initial assessment to final approval and installation."
        primaryButtonText="Get Capital Support Help"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/properties"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="NDIS participant working with occupational therapist on equipment assessment"
        footerText="Ready to access Capital Support? Our team"
        footerLinkText="can guide you through the process"
        footerLinkHref="/contact"
      />
    </>
  )
} 