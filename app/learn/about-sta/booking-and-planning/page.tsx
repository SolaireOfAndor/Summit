import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Calendar, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  ArrowLeft,
  Clock,
  FileText,
  AlertCircle,
  Luggage,
  Star,
  Info,
  User,
  Shield,
  Timer,
  CalendarDays,
  PhoneCall,
  MapPin
} from "lucide-react"

export const metadata: Metadata = {
  title: "STA Booking & Planning Process | Short Term Accommodation Guide",
  description: "Complete guide to booking STA including timeline requirements, information needed, planning checklist, and booking strategies for successful stays.",
  keywords: "book STA, STA booking process, STA planning, when to book STA, STA booking timeline, STA planning checklist",
  openGraph: {
    title: "STA Booking & Planning Process Guide",
    description: "Master the STA booking process with our comprehensive planning guide",
    type: "article"
  },
  alternates: {
    canonical: "/learn/about-sta/booking-and-planning"
  }
}

// Booking timeline requirements
const bookingTimelines = [
  {
    type: "Emergency STA",
    timeline: "24-48 hours notice",
    urgency: "Immediate",
    icon: AlertCircle,
    color: "bg-red-500",
    description: "Crisis accommodation available with minimal notice",
    availability: "Limited but prioritized",
    requirements: [
      "Emergency contact details",
      "Basic support needs information",
      "Crisis situation explanation",
      "Accept available accommodation"
    ],
    tips: [
      "Contact multiple providers",
      "Be flexible with location",
      "Have emergency kit ready",
      "Prioritize safety over preferences"
    ]
  },
  {
    type: "Regular Respite",
    timeline: "2-4 weeks advance",
    urgency: "Planned",
    icon: Calendar,
    color: "bg-blue-500",
    description: "Planned family respite and regular breaks",
    availability: "Good with advance booking",
    requirements: [
      "Preferred dates and duration",
      "Support needs assessment",
      "Previous stay feedback",
      "Regular booking arrangements"
    ],
    tips: [
      "Book recurring dates early",
      "Build relationships with providers",
      "Plan around provider availability",
      "Consider seasonal demand"
    ]
  },
  {
    type: "Holiday & Recreation",
    timeline: "4-8 weeks advance",
    urgency: "Planned",
    icon: Star,
    color: "bg-purple-500",
    description: "Holiday accommodation and recreational stays",
    availability: "Seasonal and location dependent",
    requirements: [
      "Destination preferences",
      "Activity and program interests",
      "Group or individual preferences",
      "Special accommodation needs"
    ],
    tips: [
      "Book popular destinations early",
      "Consider off-peak periods",
      "Research destination accessibility",
      "Plan activities in advance"
    ]
  },
  {
    type: "Trial Accommodation",
    timeline: "2-6 weeks advance",
    urgency: "Assessment",
    icon: FileText,
    color: "bg-green-500",
    description: "Trial stays to assess accommodation options",
    availability: "Good with provider cooperation",
    requirements: [
      "Assessment objectives",
      "Trial duration needs",
      "Comparison criteria",
      "Future housing timeline"
    ],
    tips: [
      "Plan multiple trial stays",
      "Document experiences",
      "Involve support team",
      "Compare different options"
    ]
  }
]

// Booking process steps
const bookingSteps = [
  {
    step: 1,
    title: "Identify Your Needs",
    description: "Determine the type, duration, and timing of STA you require",
    icon: Lightbulb,
    tasks: [
      "Define purpose of stay (respite, emergency, holiday, trial)",
      "Determine preferred dates and duration",
      "Identify support needs and preferences",
      "Consider location and transport requirements",
      "Set budget expectations"
    ],
    timeframe: "1-2 weeks before booking"
  },
  {
    step: 2,
    title: "Research Providers",
    description: "Find and evaluate suitable STA providers in your area",
    icon: FileText,
    tasks: [
      "Use NDIS provider finder tool",
      "Ask for recommendations from support coordinator",
      "Research provider websites and reviews",
      "Check provider registration and quality ratings",
      "Contact providers for initial information"
    ],
    timeframe: "1 week before booking"
  },
  {
    step: 3,
    title: "Make Initial Contact",
    description: "Contact providers to check availability and discuss needs",
    icon: Phone,
    tasks: [
      "Call or email preferred providers",
      "Discuss availability for your dates",
      "Explain your support needs and preferences",
      "Ask about facilities, activities, and costs",
      "Request facility tour if possible"
    ],
    timeframe: "When ready to book"
  },
  {
    step: 4,
    title: "Complete Booking",
    description: "Finalize your booking and provide necessary information",
    icon: CheckCircle2,
    tasks: [
      "Complete booking forms and assessments",
      "Provide support plans and medical information",
      "Arrange payment or funding authorization",
      "Confirm booking details and dates",
      "Receive booking confirmation"
    ],
    timeframe: "At time of booking"
  },
  {
    step: 5,
    title: "Pre-Stay Preparation",
    description: "Prepare for your stay and confirm final details",
    icon: Luggage,
    tasks: [
      "Complete pre-arrival forms",
      "Pack personal items and medications",
      "Confirm arrival time and transport",
      "Review accommodation rules and procedures",
      "Prepare emergency contacts list"
    ],
    timeframe: "1-2 weeks before stay"
  }
]

// Information required for booking
const bookingInformation = [
  {
    category: "Personal Information",
    icon: User,
    required: true,
    items: [
      "NDIS participant number and plan details",
      "Full name, date of birth, and contact details",
      "Emergency contact information",
      "Medicare and health insurance details",
      "Cultural, religious, or dietary requirements",
      "Preferred communication methods"
    ]
  },
  {
    category: "Support Needs",
    icon: Shield,
    required: true,
    items: [
      "Current support plan and goals",
      "Personal care needs and preferences",
      "Medication list and administration requirements",
      "Mobility and accessibility needs",
      "Behavioral support plans if applicable",
      "Communication support requirements"
    ]
  },
  {
    category: "Medical Information",
    icon: FileText,
    required: true,
    items: [
      "Current medical conditions and diagnoses",
      "Medication allergies and reactions",
      "Healthcare provider contact details",
      "Recent medical reports if relevant",
      "Therapy schedules and requirements",
      "Medical equipment and supply needs"
    ]
  },
  {
    category: "Preferences & Goals",
    icon: Star,
    required: false,
    items: [
      "Activity and interest preferences",
      "Social interaction comfort levels",
      "Room and accommodation preferences",
      "Goals for the stay",
      "Previous STA experience feedback",
      "Specific requests or concerns"
    ]
  }
]

// Planning checklist
const planningChecklist = [
  {
    category: "2-3 Months Before",
    icon: CalendarDays,
    tasks: [
      "Identify need for STA and discuss with support team",
      "Research potential providers and accommodation types",
      "Check NDIS plan funding allocation",
      "Begin discussions with preferred providers",
      "Consider any special requirements or timing"
    ]
  },
  {
    category: "1 Month Before",
    icon: Phone,
    tasks: [
      "Confirm booking with chosen provider",
      "Complete assessment and booking forms",
      "Provide support plans and medical information",
      "Arrange funding authorization if required",
      "Schedule facility tour if desired"
    ]
  },
  {
    category: "2 Weeks Before",
    icon: FileText,
    tasks: [
      "Complete pre-arrival paperwork",
      "Confirm arrival and departure arrangements",
      "Prepare medication and care plans",
      "Pack personal items and comfort objects",
      "Brief family and support team"
    ]
  },
  {
    category: "1 Week Before",
    icon: CheckCircle2,
    tasks: [
      "Final confirmation of booking details",
      "Check transport arrangements",
      "Prepare emergency contact list",
      "Review accommodation rules and procedures",
      "Discuss any last-minute concerns"
    ]
  }
]

export default function STABookingPlanningPage() {
  return (
    <>
      <PageHero
        title="STA Booking & Planning Process"
        description="Complete guide to booking Short Term Accommodation including timeline requirements, booking steps, information needed, and planning strategies for successful stays."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About STA", href: "/learn/about-sta" },
          { title: "Booking & Planning", href: "/learn/about-sta/booking-and-planning" }
        ]}
        heroImage={{
          src: "/house-image/5.webp",
          alt: "Person planning STA booking with calendar and accommodation brochures"
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

      {/* Booking Timeline Guide */}
      <section className="py-12 bg-[hsl(var(--background))]" aria-label="Booking timeline guide">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Booking Timeline
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How Far in Advance to Book STA
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Booking timeframes vary significantly based on the type of STA and your specific circumstances.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {bookingTimelines.map((timeline, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-full ${timeline.color} text-white`}>
                        <timeline.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-[hsl(var(--heading))]">{timeline.type}</CardTitle>
                        <Badge variant="outline" className="text-[hsl(var(--primary))]">
                          {timeline.timeline}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{timeline.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {timeline.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2">Booking Tips:</h4>
                      <ul className="space-y-1">
                        {timeline.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <Star className="w-3 h-3 text-amber-500 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>Availability:</strong> {timeline.availability}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Booking Process */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Booking process steps">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Step-by-Step Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                The STA Booking Process
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Follow these steps to successfully book your STA accommodation.
              </p>
            </div>

            <div className="space-y-8">
              {bookingSteps.map((step, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <step.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                          <h3 className="text-xl font-semibold text-[hsl(var(--heading))]">{step.title}</h3>
                        </div>
                        <p className="text-[hsl(var(--body))] mb-3">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-[hsl(var(--heading))] mb-2">Key Tasks:</h4>
                            <ul className="space-y-1">
                              {step.tasks.map((task, taskIndex) => (
                                <li key={taskIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                                  <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                            <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Timeframe:</h4>
                            <p className="text-[hsl(var(--body))] text-sm">{step.timeframe}</p>
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

      {/* Information Required */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Information required">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Required Information
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Information You'll Need for Booking
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Prepare this information in advance to make the booking process smooth and efficient.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {bookingInformation.map((info, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <info.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {info.category}
                      {info.required && (
                        <Badge variant="destructive" className="text-xs">Required</Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {info.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planning Checklist */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Planning checklist">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Planning Checklist
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                STA Planning Timeline Checklist
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Use this timeline to ensure you're prepared and organized for your STA booking and stay.
              </p>
            </div>

            <div className="space-y-6">
              {planningChecklist.map((phase, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <phase.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {phase.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Successful Booking */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Booking tips">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Expert Tips
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Tips for Successful STA Booking
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Star className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Before Booking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Research multiple providers and compare options
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Read reviews and ask for references
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Visit facilities if possible before booking
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Understand cancellation policies
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Confirm NDIS funding allocation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[hsl(var(--primary))]" />
                    During Booking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Be honest about your support needs
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Ask questions about facilities and services
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Get all agreements in writing
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Discuss any special requirements early
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      Keep copies of all booking documentation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Related Topics */}
      <section className="py-12 bg-[hsl(var(--lighter-orange))]" aria-label="Related STA topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-6 text-center">
              Continue Learning About STA
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/funding-and-costs" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Funding & Costs
                  </div>
                  <span className="text-xs opacity-90">Understand STA costs and funding</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/accommodation-options" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Accommodation Options
                  </div>
                  <span className="text-xs opacity-90">Explore facility types</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/rights-and-advocacy" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Rights & Advocacy
                  </div>
                  <span className="text-xs opacity-90">Know your rights</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 