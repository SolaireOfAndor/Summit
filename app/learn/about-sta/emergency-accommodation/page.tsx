import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  AlertCircle, 
  Shield, 
  CheckCircle2, 
  ArrowLeft,
  Phone,
  Clock,
  Home,
  Users,
  FileText,
  Heart,
  Lightbulb,
  Info,
  PhoneCall,
  Timer,
  MapPin,
  Star,
  Building
} from "lucide-react"

export const metadata: Metadata = {
  title: "Emergency STA Accommodation | Crisis Response & Immediate Support",
  description: "Critical guide to accessing emergency Short Term Accommodation including crisis response, immediate booking procedures, safety planning, and emergency support services.",
  keywords: "emergency STA, crisis accommodation, immediate STA, emergency disability accommodation, crisis response, emergency booking STA, safety planning",
  openGraph: {
    title: "Emergency STA Accommodation Guide",
    description: "Get immediate help with emergency accommodation when you need it most",
    type: "article"
  },
  alternates: {
    canonical: "/learn/about-sta/emergency-accommodation"
  }
}

// Emergency situations requiring STA
const emergencySituations = [
  {
    title: "Home Damage or Loss",
    description: "When your usual accommodation becomes uninhabitable",
    icon: Home,
    urgency: "Immediate",
    examples: [
      "Fire, flood, or storm damage",
      "Gas leak or electrical hazards",
      "Structural damage requiring repairs",
      "Burst pipes or water damage",
      "Break-in or security concerns",
      "Heating/cooling system failure in extreme weather"
    ],
    immediateSteps: [
      "Ensure immediate safety",
      "Contact emergency services if needed",
      "Document damage with photos",
      "Contact insurance provider",
      "Arrange temporary accommodation"
    ]
  },
  {
    title: "Family Crisis or Breakdown",
    description: "When family circumstances suddenly change",
    icon: Users,
    urgency: "Within 24 hours",
    examples: [
      "Family carer sudden illness or hospitalization",
      "Domestic violence or abuse situations",
      "Family relationship breakdown",
      "Death of primary carer",
      "Unexpected family emergency",
      "Mental health crisis in household"
    ],
    immediateSteps: [
      "Ensure personal safety",
      "Contact support coordinator",
      "Reach out to family/friends if safe",
      "Contact emergency services if in danger",
      "Gather essential personal items"
    ]
  },
  {
    title: "Accommodation Provider Issues",
    description: "When your current accommodation provider can't continue",
    icon: Building,
    urgency: "24-48 hours",
    examples: [
      "Provider closure or service withdrawal",
      "Serious safety concerns at current accommodation",
      "Provider unable to meet support needs",
      "Conflict with other residents requiring immediate move",
      "Provider breach of standards or obligations",
      "Eviction from current accommodation"
    ],
    immediateSteps: [
      "Document issues and concerns",
      "Contact NDIS Quality and Safeguards Commission",
      "Inform support coordinator immediately",
      "Secure personal belongings",
      "Begin emergency accommodation search"
    ]
  },
  {
    title: "Medical Emergency Impact",
    description: "When medical situations affect your housing",
    icon: Heart,
    urgency: "Immediate to 48 hours",
    examples: [
      "Hospital discharge requiring different accommodation",
      "New medical equipment needs accommodation changes",
      "Infection control requiring isolation",
      "Recovery needs requiring specialized support",
      "Mental health crisis requiring different environment",
      "Medical emergency affecting household members"
    ],
    immediateSteps: [
      "Coordinate with hospital discharge team",
      "Assess new accommodation requirements",
      "Gather medical documentation",
      "Contact NDIS planner for urgent review",
      "Arrange temporary medical support"
    ]
  }
]

// Emergency booking process
const emergencyBookingSteps = [
  {
    step: 1,
    title: "Immediate Safety First",
    description: "Ensure your immediate safety and contact emergency services if needed",
    icon: Shield,
    timeframe: "Immediate",
    actions: [
      "Call 000 if in immediate danger",
      "Move to a safe location",
      "Contact trusted family/friends",
      "Secure essential medications and documents",
      "Take photos of any damage or issues"
    ]
  },
  {
    step: 2,
    title: "Contact Support Network",
    description: "Reach out to your support team and emergency contacts",
    icon: Phone,
    timeframe: "Within 1 hour",
    actions: [
      "Call your support coordinator",
      "Contact current accommodation provider",
      "Notify family or emergency contacts",
      "Call NDIS emergency line if available",
      "Contact local disability advocacy service"
    ]
  },
  {
    step: 3,
    title: "Begin Accommodation Search",
    description: "Start contacting STA providers for emergency placement",
    icon: MapPin,
    timeframe: "Within 2-4 hours",
    actions: [
      "Call multiple STA providers in your area",
      "Explain emergency situation clearly",
      "Provide basic support needs information",
      "Accept first available suitable option",
      "Arrange transport to accommodation"
    ]
  },
  {
    step: 4,
    title: "Arrange Immediate Support",
    description: "Ensure you have necessary support and resources",
    icon: Users,
    timeframe: "First 24 hours",
    actions: [
      "Confirm support staff arrangements",
      "Ensure medication access",
      "Arrange delivery of personal items",
      "Set up communication with family",
      "Begin planning next steps"
    ]
  }
]

// Emergency contact information
const emergencyContacts = [
  {
    service: "Emergency Services",
    number: "000",
    when: "Immediate danger, fire, medical emergency",
    available: "24/7"
  },
  {
    service: "Police Assistance Line",
    number: "131 444",
    when: "Non-emergency police assistance",
    available: "24/7"
  },
  {
    service: "Crisis Support Services",
    number: "13 11 14",
    when: "Mental health crisis, suicide prevention",
    available: "24/7"
  },
  {
    service: "1800RESPECT",
    number: "1800 737 732",
    when: "Domestic violence, sexual assault",
    available: "24/7"
  },
  {
    service: "NDIS Quality and Safeguards Commission",
    number: "1800 035 544",
    when: "Provider issues, safety concerns",
    available: "Business hours"
  },
  {
    service: "Disability Advocacy Finder",
    number: "Visit website",
    when: "Advocacy support and assistance",
    available: "Varies by service"
  }
]

// Emergency preparation checklist
const emergencyPreparation = [
  {
    category: "Essential Documents",
    icon: FileText,
    items: [
      "NDIS plan and participant card",
      "Medicare card and health insurance",
      "Identification documents",
      "Emergency contact list",
      "Medical information and care plans",
      "Medication list and prescriptions",
      "Support provider contact details",
      "Insurance policy information"
    ]
  },
  {
    category: "Emergency Kit",
    icon: Shield,
    items: [
      "Essential medications (3-7 days supply)",
      "Change of clothes and personal items",
      "Phone charger and important phone numbers",
      "Small amount of cash",
      "Comfort items (photos, favorite objects)",
      "Assistive equipment or aids",
      "Glasses or contact lenses",
      "Basic toiletries"
    ]
  },
  {
    category: "Information Ready",
    icon: Info,
    items: [
      "Current support needs summary",
      "Dietary requirements and allergies",
      "Emergency contact list with relationships",
      "Preferred STA providers list",
      "Communication preferences",
      "Cultural or religious requirements",
      "Mobility and accessibility needs",
      "Behavioral support information"
    ]
  }
]

export default function EmergencySTAPage() {
  return (
    <>
      <PageHero
        title="Emergency STA Accommodation"
        description="Critical guide to accessing emergency Short Term Accommodation including crisis response procedures, immediate booking, safety planning, and emergency support services when you need help urgently."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About STA", href: "/learn/about-sta" },
          { title: "Emergency Accommodation", href: "/learn/about-sta/emergency-accommodation" }
        ]}
        heroImage={{
          src: "/house-image/8.webp",
          alt: "Emergency accommodation support showing safety and immediate care"
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

      {/* Emergency Alert */}
      <section className="py-8 bg-red-50 border-l-4 border-red-500" aria-label="Emergency alert">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-800 mb-2">In Immediate Danger?</h2>
                <p className="text-red-700 mb-4">
                  If you are in immediate danger or experiencing a life-threatening emergency, call <strong>000</strong> immediately.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <a href="tel:000" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call 000 Emergency
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    <a href="tel:131444" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call 131 444 Police
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Situations */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Emergency situations">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Crisis Situations
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                When You Might Need Emergency STA
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Emergency STA is available for various crisis situations that require immediate alternative accommodation.
              </p>
            </div>

            <div className="space-y-8">
              {emergencySituations.map((situation, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg border-l-4 border-[hsl(var(--primary))]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                        <situation.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-1">{situation.title}</h3>
                        <p className="text-[hsl(var(--body))] mb-2">{situation.description}</p>
                        <Badge variant="destructive" className="text-xs">
                          Response needed: {situation.urgency}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Example Situations:</h4>
                        <ul className="space-y-1">
                          {situation.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                              <AlertCircle className="w-3 h-3 text-amber-600 flex-shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Immediate Steps:</h4>
                        <ol className="space-y-1">
                          {situation.immediateSteps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                              <span className="w-4 h-4 rounded-full bg-[hsl(var(--primary))] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                                {stepIndex + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Booking Process */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Emergency booking process">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Emergency Response
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Emergency STA Booking Process
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Follow these steps to secure emergency accommodation quickly and safely.
              </p>
            </div>

            <div className="space-y-6">
              {emergencyBookingSteps.map((step, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <step.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                          <h3 className="text-xl font-semibold text-[hsl(var(--heading))]">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {step.timeframe}
                          </Badge>
                        </div>
                        <p className="text-[hsl(var(--body))] mb-4">{step.description}</p>
                        <div>
                          <h4 className="font-medium text-[hsl(var(--heading))] mb-2">Action Steps:</h4>
                          <ul className="space-y-1">
                            {step.actions.map((action, actionIndex) => (
                              <li key={actionIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                                <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                                {action}
                              </li>
                            ))}
                          </ul>
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

      {/* Emergency Contacts */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Emergency contacts">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Emergency Contacts
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Important Emergency Contact Numbers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Save these numbers in your phone and keep them easily accessible for emergency situations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] text-lg flex items-center gap-2">
                      <PhoneCall className="w-5 h-5 text-[hsl(var(--primary))]" />
                      {contact.service}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[hsl(var(--primary))] mb-1">
                        {contact.number}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {contact.available}
                      </Badge>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm text-center">
                      <strong>When to call:</strong> {contact.when}
                    </p>
                    {contact.number !== "Visit website" && (
                      <Button asChild className="w-full" size="sm">
                        <a href={`tel:${contact.number.replace(/\s/g, '')}`}>
                          Call Now
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Preparation */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Emergency preparation">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Be Prepared
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Emergency Preparation Checklist
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Being prepared helps you respond quickly and effectively in emergency situations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {emergencyPreparation.map((prep, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <prep.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {prep.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {prep.items.map((item, itemIndex) => (
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

            <Card className="mt-8 bg-[hsl(var(--pure-white))] border-2 border-amber-500">
              <CardHeader>
                <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                  Emergency Preparation Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      Keep a "go bag" packed with essentials
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      Store important documents digitally in cloud storage
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      Practice your emergency plan with support team
                    </li>
                  </ul>
                  <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      Research emergency STA providers in your area
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      Share emergency plan with trusted contacts
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      Review and update emergency information regularly
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation to Related Topics */}
      <section className="py-12 bg-[hsl(var(--background))]" aria-label="Related STA topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-6 text-center">
              Other STA Information
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/types-and-when-to-use" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4" />
                    Types & When to Use
                  </div>
                  <span className="text-xs opacity-90">Explore all STA types</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/booking-and-planning" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Booking & Planning
                  </div>
                  <span className="text-xs opacity-90">Learn normal booking process</span>
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