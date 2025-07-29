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
  Home,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Users,
  Star,
  Target,
  Eye,
  HeartHandshake,
  Building2,
  Car,
  TrendingUp,
  Clock,
  Phone,
  MessageSquare,
  Calendar,
  Accessibility,
  Shield,
  DollarSign,
  Scale,
  Info,
  HelpCircle,
  UserCheck,
  Settings,
  Activity,
  Heart,
  TreePine,
  ShoppingCart,
  Bus,
  GraduationCap,
  Stethoscope
} from "lucide-react"

export const metadata: Metadata = {
  title: "SDA Housing Selection Guide | How to Choose the Right Specialist Disability Accommodation",
  description: "Complete guide to choosing SDA housing. Learn about selection criteria, questions to ask providers, location factors, and how to find compatible housing that meets your needs.",
  keywords: "choosing SDA housing, SDA housing selection, SDA housing options, specialist disability accommodation choice, SDA provider selection",
  openGraph: {
    title: "SDA Housing Selection Guide | How to Choose the Right Specialist Disability Accommodation",
    description: "Comprehensive guide to selecting the right SDA housing with practical tips for evaluating properties, providers, and compatibility.",
    type: "article",
    images: [
      {
        url: "/header/page-header-8.webp",
        width: 1200,
        height: 630,
        alt: "NDIS participant viewing potential SDA housing options"
      }
    ]
  },
  alternates: {
    canonical: "/learn/about-sda/housing-selection-guide"
  }
}

// Housing Selection Criteria
const selectionCriteria = [
  {
    title: "Design Category Match",
    description: "Ensure the housing matches your approved SDA design category and specific needs.",
    icon: Accessibility,
    importance: "Essential",
    considerations: [
      "Matches your approved design category exactly",
      "Includes all required accessibility features", 
      "Accommodates your specific equipment needs",
      "Supports your independence goals",
      "Allows for future needs changes"
    ],
    questions: [
      "Does this property meet all my approved design category requirements?",
      "Are all the accessibility features I need present and functional?",
      "Can the property accommodate my assistive technology?",
      "Will this housing support my independence goals?"
    ]
  },
  {
    title: "Location & Accessibility",
    description: "Consider proximity to transport, services, family, and community connections.",
    icon: MapPin,
    importance: "Very Important",
    considerations: [
      "Distance to public transport",
      "Access to medical services and specialists",
      "Proximity to family and friends",
      "Community facilities and activities",
      "Shopping and essential services"
    ],
    questions: [
      "Is there accessible public transport nearby?",
      "How close are my doctors and therapy services?",
      "Can family and friends easily visit?",
      "What community activities are available in the area?"
    ]
  },
  {
    title: "Compatibility with Housemates",
    description: "If sharing, ensure compatibility with other residents in terms of lifestyle and support needs.",
    icon: Users,
    importance: "Important",
    considerations: [
      "Similar age groups and interests",
      "Compatible support schedules",
      "Shared lifestyle preferences",
      "Communication styles and needs",
      "Conflict resolution approaches"
    ],
    questions: [
      "Are we compatible in terms of lifestyle and interests?",
      "How will our support schedules work together?",
      "What are the house rules and expectations?",
      "How are conflicts resolved between residents?"
    ]
  },
  {
    title: "Support Service Integration",
    description: "Consider how well the housing works with your chosen SIL or other support providers.",
    icon: HeartHandshake,
    importance: "Important",
    considerations: [
      "Support worker access and facilities",
      "Coordination with existing providers",
      "On-site support availability",
      "Emergency support procedures",
      "Provider relationships and reputation"
    ],
    questions: [
      "Can my current support providers work at this location?",
      "What on-site support is available if needed?",
      "How are emergencies handled?",
      "Are there restrictions on support provider choice?"
    ]
  },
  {
    title: "Provider Reputation",
    description: "Research the SDA provider's reputation, maintenance standards, and participant satisfaction.",
    icon: Star,
    importance: "Practical",
    considerations: [
      "Provider track record and experience",
      "Maintenance response times",
      "Participant satisfaction rates",
      "Financial stability of provider",
      "Communication and responsiveness"
    ],
    questions: [
      "What is the provider's reputation in the community?",
      "How quickly do they respond to maintenance requests?",
      "Can I speak with current or former residents?",
      "What are their policies for rent increases?"
    ]
  },
  {
    title: "Long-term Suitability",
    description: "Consider how the housing will meet your needs as they change over time.",
    icon: TrendingUp,
    importance: "Strategic",
    considerations: [
      "Adaptability for changing needs",
      "Potential for modifications",
      "Lease terms and stability",
      "Provider flexibility",
      "Exit options if needed"
    ],
    questions: [
      "Can this housing adapt if my needs change?",
      "What are the lease terms and security of tenure?",
      "What happens if I need to move?",
      "Are there options for modifications if needed?"
    ]
  }
]

// Types of SDA Housing
const housingTypes = [
  {
    title: "Individual Apartments",
    description: "Private apartments in purpose-built accessible buildings",
    icon: Building2,
    residents: "1 person",
    pros: [
      "Complete privacy and independence",
      "No need to coordinate with housemates",
      "Full control over living environment",
      "Easier to have visitors"
    ],
    cons: [
      "Higher individual cost",
      "May be more isolated",
      "Limited social opportunities within housing",
      "Full responsibility for household management"
    ],
    suitableFor: "People who value privacy and independence above shared living benefits",
    considerations: [
      "Social connection needs",
      "Cost implications",
      "Support coordination",
      "Emergency response"
    ]
  },
  {
    title: "Shared Apartments/Villas",
    description: "2-3 bedroom units shared with 1-2 other residents",
    icon: Home,
    residents: "2-3 people",
    pros: [
      "Shared costs reduce individual contribution",
      "Built-in social interaction and companionship",
      "Shared household responsibilities",
      "Enhanced safety through mutual support"
    ],
    cons: [
      "Need for compatible housemates",
      "Shared spaces and potential conflicts",
      "Coordinating schedules and visitors",
      "Less privacy and independence"
    ],
    suitableFor: "People who enjoy companionship and benefit from shared living arrangements",
    considerations: [
      "Housemate compatibility",
      "Shared space agreements",
      "Visitor policies",
      "Conflict resolution processes"
    ]
  },
  {
    title: "Group Homes",
    description: "Larger houses with 3-5 residents and shared common areas",
    icon: Users,
    residents: "3-5 people",
    pros: [
      "Strong community feel and support network",
      "Lower individual costs",
      "Organized activities and social opportunities",
      "On-site support coordination"
    ],
    cons: [
      "Less privacy and personal space",
      "More complex household dynamics",
      "Need to fit into established routines",
      "Potential for noise and disruption"
    ],
    suitableFor: "People who thrive in community settings with higher support needs",
    considerations: [
      "Group dynamics and compatibility",
      "House rules and structure",
      "Staff presence and support",
      "Activity preferences"
    ]
  },
  {
    title: "Specialist Housing",
    description: "High physical support housing with clinical features",
    icon: Stethoscope,
    residents: "1-2 people",
    pros: [
      "Specialized clinical and technical features",
      "24/7 support availability",
      "Emergency backup systems",
      "Equipment and technology integration"
    ],
    cons: [
      "Higher costs and complexity",
      "More institutional feel",
      "Limited location options",
      "Complex support coordination"
    ],
    suitableFor: "People with very high physical support needs requiring clinical care",
    considerations: [
      "Clinical care requirements",
      "Technology and equipment needs",
      "Support worker accommodation",
      "Emergency procedures"
    ]
  }
]

// Viewing Checklist
const viewingChecklist = [
  {
    category: "Accessibility Features",
    icon: Accessibility,
    items: [
      "All doorways wide enough for mobility equipment",
      "Level access throughout or accessible ramps",
      "Accessible bathroom with grab rails and appropriate fixtures",
      "Kitchen bench heights and accessible storage",
      "Light switches and power points at appropriate heights",
      "Flooring suitable for mobility equipment",
      "Emergency call systems functioning",
      "Parking suitable for accessible vehicles"
    ]
  },
  {
    category: "Living Environment",
    icon: Home,
    items: [
      "Natural light and ventilation quality",
      "Noise levels from neighbors and traffic",
      "Privacy from other units and common areas",
      "Storage space adequate for your needs",
      "Indoor/outdoor flow and garden access",
      "Temperature control and heating/cooling",
      "Internet and communication connectivity",
      "Security features and safe entry/exit"
    ]
  },
  {
    category: "Location & Services",
    icon: MapPin,
    items: [
      "Distance to public transport stops",
      "Accessibility of transport options",
      "Proximity to medical services and pharmacies",
      "Shopping centers and essential services nearby",
      "Community facilities and recreational options",
      "Safety of the neighborhood",
      "Parking availability for visitors",
      "Emergency services accessibility"
    ]
  },
  {
    category: "Provider & Management",
    icon: Star,
    items: [
      "Provider responsiveness to questions",
      "Maintenance request procedures and timeframes",
      "Rent payment processes and policies",
      "Lease terms and conditions",
      "House rules and resident expectations",
      "Complaint and dispute resolution processes",
      "Insurance coverage and responsibilities",
      "Exit procedures if needed"
    ]
  }
]

// Questions to Ask Providers
const providerQuestions = [
  {
    category: "Housing & Maintenance",
    questions: [
      "What is your average response time for maintenance requests?",
      "How do you handle emergency repairs after hours?",
      "What modifications can be made if my needs change?",
      "How often are accessibility features inspected and maintained?",
      "What happens if accessibility equipment breaks down?",
      "Are there backup systems for essential equipment?"
    ]
  },
  {
    category: "Living Arrangements",
    questions: [
      "How do you match residents for compatibility?",
      "What are the house rules and expectations?",
      "Can I have overnight visitors and guests?",
      "How are conflicts between residents resolved?",
      "What happens if a housemate moves out?",
      "Can I request a different housemate if there are issues?"
    ]
  },
  {
    category: "Support Services",
    questions: [
      "Can I choose my own support providers?",
      "Are there any restrictions on support worker access?",
      "How do you coordinate with external support services?",
      "What on-site support is available if needed?",
      "How are medical emergencies handled?",
      "Is there 24/7 support available if required?"
    ]
  },
  {
    category: "Financial & Legal",
    questions: [
      "What are the total costs including utilities and extras?",
      "How often do rent contributions increase?",
      "What insurance do I need and what do you provide?",
      "What are the lease terms and notice periods?",
      "What happens if I need to move quickly due to changed circumstances?",
      "Are there any additional fees or charges?"
    ]
  }
]

export default function SDAHousingSelectionPage() {
  return (
    <>
      <PageHero
        title="SDA Housing Selection Guide"
        description="Complete guide to choosing the right SDA housing for your needs. Learn about selection criteria, housing types, questions to ask providers, and how to make the best choice for your independence and quality of life."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About SDA", href: "/learn/about-sda" },
          { title: "Housing Selection", href: "/learn/about-sda/housing-selection-guide" }
        ]}
        heroImage={{
          src: "/header/page-header-8.webp",
          alt: "NDIS participant viewing potential SDA housing with support coordinator"
        }}
        ctaText="View Available Properties"
        ctaHref="/properties"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/about-sda/application-process">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back: Application Process
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/about-sda/rights-and-support">
                  Next: Rights & Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Housing selection overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Selection Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Choosing the Right SDA Housing
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Selecting SDA housing is one of the most important decisions in your NDIS journey. The right choice 
                supports your independence, community connections, and quality of life for years to come.
              </p>
            </div>

            <Card className="mb-8 bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">
                      Take Your Time to Choose Well
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      Don't rush into the first available option. SDA housing is typically a long-term arrangement, 
                      so it's worth investing time to find housing that truly meets your needs and supports your goals. 
                      Visit multiple options, ask lots of questions, and trust your instincts about what feels right.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Housing Selection Criteria */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Housing selection criteria">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Selection Criteria
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                6 Key Housing Selection Criteria
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Evaluate potential SDA housing using these comprehensive criteria to ensure the best match for your needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {selectionCriteria.map((criteria, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <criteria.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <div>
                        <CardTitle className="text-lg text-[hsl(var(--heading))]">{criteria.title}</CardTitle>
                        <Badge variant="outline" className="text-xs mt-1">{criteria.importance}</Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{criteria.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Key Considerations:</h4>
                      <div className="space-y-1">
                        {criteria.considerations.map((consideration, considerationIndex) => (
                          <div key={considerationIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                            <span className="text-[hsl(var(--body))] text-xs">{consideration}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 text-sm">Questions to Ask:</h4>
                      <div className="space-y-1">
                        {criteria.questions.map((question, questionIndex) => (
                          <p key={questionIndex} className="text-[hsl(var(--body))] text-xs">
                            • {question}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Housing Types Comparison */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA housing types comparison">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Housing Options
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Types of SDA Housing Available
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Compare different SDA housing types to understand which arrangement might work best for your lifestyle and needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {housingTypes.map((type, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <type.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <div>
                        <CardTitle className="text-lg text-[hsl(var(--heading))]">{type.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs mt-1">{type.residents}</Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{type.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 flex items-center gap-1 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          Advantages
                        </h4>
                        <div className="space-y-1">
                          {type.pros.map((pro, proIndex) => (
                            <p key={proIndex} className="text-[hsl(var(--body))] text-xs">• {pro}</p>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 flex items-center gap-1 text-sm">
                          <Target className="w-4 h-4 text-amber-600" />
                          Considerations
                        </h4>
                        <div className="space-y-1">
                          {type.cons.map((con, conIndex) => (
                            <p key={conIndex} className="text-[hsl(var(--body))] text-xs">• {con}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>Best suited for:</strong> {type.suitableFor}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 text-sm">Important to consider:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {type.considerations.map((consideration, considerationIndex) => (
                          <div key={considerationIndex} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-[hsl(var(--primary))] rounded-full"></div>
                            <span className="text-[hsl(var(--body))] text-xs">{consideration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Viewing Checklist */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Property viewing checklist">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Viewing Checklist
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What to Check When Viewing SDA Properties
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Use this comprehensive checklist to evaluate properties systematically and ensure nothing important is missed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {viewingChecklist.map((category, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-3">
                      <category.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                          <span className="text-[hsl(var(--body))] text-sm">{item}</span>
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

      {/* Questions to Ask Providers */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Questions for SDA providers">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Provider Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Essential Questions to Ask SDA Providers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Get the information you need to make an informed decision by asking these important questions.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {providerQuestions.map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border shadow-sm">
                  <AccordionTrigger className="text-[hsl(var(--heading))] font-medium text-left hover:no-underline py-4">
                    {category.category} Questions
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="space-y-2">
                      {category.questions.map((question, questionIndex) => (
                        <div key={questionIndex} className="flex items-start gap-2">
                          <HelpCircle className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                          <span className="text-[hsl(var(--body))] text-sm">{question}</span>
                        </div>
                      ))}
                    </div>
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
                Complete Your Knowledge
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Final Steps in Your SDA Journey
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Now that you know how to choose housing, learn about your rights and explore available properties.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Scale className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Rights & Support</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Understand your rights and available support resources</p>
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
                  <Building2 className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">View Properties</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Browse available SDA properties in your area</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/properties">
                      Browse Properties
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <UserCheck className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Get Personal Help</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Speak with our team about your housing needs</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">
                      Contact Us
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
        title="Ready to Find Your Perfect SDA Housing?"
        description="Choosing the right SDA housing is a significant decision. Our experienced team can help you evaluate options, ask the right questions, and find housing that truly supports your independence and goals."
        primaryButtonText="Get Housing Guidance"
        primaryButtonLink="/contact"
        secondaryButtonText="View Available Properties"
        secondaryButtonLink="/properties"
        imageSrc="/house-image/1.webp"
        mobileImageSrc="/house-image/2.webp"
        imageAlt="Modern SDA housing options with accessible features and contemporary design"
        footerText="Ready to explore your SDA housing options? Browse our"
        footerLinkText="current property listings"
        footerLinkHref="/properties"
      />
    </>
  )
} 