import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Scale, 
  Shield, 
  CheckCircle2, 
  ArrowLeft,
  Phone,
  MessageSquare,
  Star,
  UserCheck,
  Heart,
  Eye,
  FileText,
  AlertCircle,
  Info,
  ShieldCheck,
  Users,
  Lightbulb,
  PhoneCall,
  Mail,
  Globe,
  Clock,
  Target
} from "lucide-react"

export const metadata: Metadata = {
  title: "STA Rights & Advocacy | Participant Rights & Quality Standards",
  description: "Know your rights during STA stays including quality standards, complaints processes, advocacy services, and how to ensure safe, dignified accommodation and support.",
  keywords: "STA rights, participant rights, STA quality standards, STA complaints, disability advocacy, NDIS rights, accommodation rights",
  openGraph: {
    title: "STA Rights & Advocacy Guide",
    description: "Know your rights and access advocacy support for quality STA accommodation",
    type: "article"
  },
  alternates: {
    canonical: "/learn/about-sta/rights-and-advocacy"
  }
}

// Fundamental participant rights
const participantRights = [
  {
    title: "Right to Choice and Control",
    description: "You have the right to make decisions about your accommodation, support, and daily activities",
    icon: UserCheck,
    details: [
      "Choose your STA provider and accommodation type",
      "Make decisions about your daily routine and activities",
      "Refuse support or services you don't want",
      "Change providers if you're not satisfied",
      "Have your preferences respected and accommodated",
      "Participate in planning your support"
    ],
    examples: [
      "Choosing when to wake up and go to bed",
      "Deciding what activities to participate in",
      "Selecting your own clothing and personal items",
      "Having input into meal preferences"
    ]
  },
  {
    title: "Right to Dignity and Respect",
    description: "All support must be provided with dignity, respect for your privacy, and cultural sensitivity",
    icon: Heart,
    details: [
      "Be treated with courtesy and respect at all times",
      "Have your cultural, religious, and personal beliefs respected",
      "Receive support in a way that maintains your dignity",
      "Have your personal space and belongings respected",
      "Be spoken to appropriately and included in conversations",
      "Have your individual needs and preferences acknowledged"
    ],
    examples: [
      "Staff knocking before entering your room",
      "Being addressed by your preferred name",
      "Having cultural dietary requirements met",
      "Receiving support without judgment or criticism"
    ]
  },
  {
    title: "Right to Safety and Security",
    description: "You have the right to feel safe and secure in your accommodation with appropriate protective measures",
    icon: Shield,
    details: [
      "Live in a safe, secure environment",
      "Be protected from abuse, neglect, and exploitation",
      "Have emergency procedures and safety plans in place",
      "Access appropriate medical care when needed",
      "Report safety concerns without fear of retaliation",
      "Have trained staff available to respond to emergencies"
    ],
    examples: [
      "Secure locks on bedroom doors",
      "Emergency call systems available",
      "Staff trained in first aid and emergency response",
      "Clear evacuation procedures"
    ]
  },
  {
    title: "Right to Privacy and Confidentiality",
    description: "Your personal information, communications, and private spaces must be protected and respected",
    icon: Eye,
    details: [
      "Have your personal information kept confidential",
      "Privacy in your bedroom and personal spaces",
      "Confidential handling of medical and support information",
      "Right to private conversations and communications",
      "Control over who has access to your information",
      "Secure storage of your personal belongings"
    ],
    examples: [
      "Medical information shared only with authorized people",
      "Private phone calls without staff listening",
      "Personal mail and packages handled confidentially",
      "Bedroom privacy respected by staff and other residents"
    ]
  },
  {
    title: "Right to Quality Support",
    description: "You have the right to receive high-quality, professional support that meets your individual needs",
    icon: Star,
    details: [
      "Receive support from qualified, trained staff",
      "Have support provided according to your care plan",
      "Access appropriate equipment and resources",
      "Receive timely assistance when needed",
      "Have support adjusted based on your changing needs",
      "Access allied health and specialized services"
    ],
    examples: [
      "Staff with current qualifications and training",
      "Support provided consistently according to your plan",
      "Access to mobility aids and assistive technology",
      "Prompt response to requests for assistance"
    ]
  },
  {
    title: "Right to Feedback and Complaints",
    description: "You can provide feedback, make complaints, and access advocacy without fear of negative consequences",
    icon: MessageSquare,
    details: [
      "Make complaints about your accommodation or support",
      "Access independent advocacy services",
      "Provide feedback about services and staff",
      "Have complaints investigated and resolved",
      "No retaliation for making legitimate complaints",
      "Support to understand and exercise your rights"
    ],
    examples: [
      "Formal complaint procedures available",
      "Access to independent advocates",
      "Regular opportunities to provide feedback",
      "Support to understand your rights"
    ]
  }
]

// Quality standards and expectations
const qualityStandards = [
  {
    area: "Accommodation Standards",
    icon: Shield,
    standards: [
      "Clean, safe, and well-maintained facilities",
      "Accessible design and equipment where needed",
      "Appropriate heating, cooling, and ventilation",
      "Safe storage for personal belongings",
      "Adequate lighting and comfortable sleeping areas",
      "Regular cleaning and maintenance schedules"
    ]
  },
  {
    area: "Staff Standards",
    icon: Users,
    standards: [
      "Current qualifications and training",
      "Background checks and clearances",
      "Professional conduct and behavior",
      "Respectful communication and interaction",
      "Appropriate response to support needs",
      "Ongoing professional development"
    ]
  },
  {
    area: "Support Standards",
    icon: Target,
    standards: [
      "Person-centered support planning",
      "Consistent and reliable service delivery",
      "Appropriate response times",
      "Medication management protocols",
      "Emergency response procedures",
      "Regular review and adjustment of support"
    ]
  },
  {
    area: "Safety Standards",
    icon: ShieldCheck,
    standards: [
      "Comprehensive safety policies and procedures",
      "Regular safety audits and inspections",
      "Emergency evacuation plans",
      "Incident reporting and management",
      "Risk assessment and management",
      "Safe handling of personal information"
    ]
  }
]

// Complaints process steps
const complaintsProcess = [
  {
    step: 1,
    title: "Try to Resolve Directly",
    description: "First, try to resolve the issue directly with the accommodation provider",
    icon: MessageSquare,
    timeframe: "Immediate to 1 week",
    actions: [
      "Speak with staff or manager about your concerns",
      "Document the issue and any conversations",
      "Give the provider opportunity to resolve the problem",
      "Set reasonable timeframes for resolution",
      "Keep records of all communications"
    ],
    when: "For minor issues or misunderstandings that can be quickly resolved"
  },
  {
    step: 2,
    title: "Formal Complaint to Provider",
    description: "If direct resolution doesn't work, make a formal written complaint",
    icon: FileText,
    timeframe: "1-2 weeks",
    actions: [
      "Write formal complaint outlining the issues",
      "Include specific details, dates, and impacts",
      "Request specific actions or outcomes",
      "Submit through provider's complaint process",
      "Keep copies of all documentation"
    ],
    when: "When direct approaches haven't resolved the issue or for more serious concerns"
  },
  {
    step: 3,
    title: "NDIS Quality Commission",
    description: "Contact the NDIS Quality and Safeguards Commission if issues remain unresolved",
    icon: Shield,
    timeframe: "Ongoing support",
    actions: [
      "Contact the Commission by phone or online",
      "Provide details of the issue and provider response",
      "Cooperate with any investigation process",
      "Continue to document ongoing issues",
      "Follow up on investigation outcomes"
    ],
    when: "For serious issues, provider failures, or unresolved complaints"
  },
  {
    step: 4,
    title: "Access Advocacy Support",
    description: "Get independent advocacy support to help navigate the complaints process",
    icon: Users,
    timeframe: "Throughout process",
    actions: [
      "Contact disability advocacy services",
      "Explain your situation and support needs",
      "Work with advocates to develop strategy",
      "Use advocacy support in meetings and processes",
      "Get help understanding your rights and options"
    ],
    when: "When you need independent support or feel overwhelmed by the process"
  }
]

// Advocacy services and support
const advocacyServices = [
  {
    service: "Disability Advocacy Network Australia (DANA)",
    contact: "www.dana.org.au",
    description: "National network connecting people to local advocacy services",
    services: [
      "Systemic advocacy for disability rights",
      "Connections to local advocacy services",
      "Information about advocacy options",
      "Resources for self-advocacy"
    ],
    bestFor: "Finding local advocacy services and understanding advocacy options"
  },
  {
    service: "National Disability Advocacy Program",
    contact: "www.disabilityadvocacyfinder.dss.gov.au",
    description: "Government-funded advocacy services across Australia",
    services: [
      "Individual advocacy support",
      "Legal advocacy assistance",
      "Systemic advocacy for system changes",
      "Self-advocacy training and support"
    ],
    bestFor: "Accessing government-funded advocacy services in your area"
  },
  {
    service: "NDIS Quality and Safeguards Commission",
    contact: "1800 035 544",
    description: "Official complaints and quality oversight body for NDIS services",
    services: [
      "Complaint investigation and resolution",
      "Provider registration and monitoring",
      "Quality and safety oversight",
      "Information about your rights"
    ],
    bestFor: "Formal complaints about NDIS providers and services"
  },
  {
    service: "State Disability Services",
    contact: "Varies by state",
    description: "State-based disability services and advocacy support",
    services: [
      "State-specific advocacy services",
      "Community visitor programs",
      "Disability rights information",
      "Local support and resources"
    ],
    bestFor: "State-specific advocacy and local disability support services"
  }
]

// Red flags and warning signs
const warningSignsContorl = [
  {
    category: "Staff Behavior",
    icon: AlertCircle,
    signs: [
      "Staff speaking rudely or dismissively",
      "Not respecting your privacy or personal space",
      "Ignoring your requests or preferences",
      "Making decisions without consulting you",
      "Inappropriate personal relationships with residents",
      "Staff appearing under the influence of substances"
    ]
  },
  {
    category: "Accommodation Issues",
    icon: Shield,
    signs: [
      "Unsafe or unsanitary conditions",
      "Broken safety equipment or systems",
      "Inadequate food or nutrition",
      "Inappropriate temperature control",
      "Lack of privacy or security",
      "Poor maintenance and cleanliness"
    ]
  },
  {
    category: "Support Concerns",
    icon: Users,
    signs: [
      "Support not provided according to your plan",
      "Medication errors or poor management",
      "Delayed response to requests for help",
      "Lack of qualified or trained staff",
      "No emergency procedures or planning",
      "Pressure to accept unwanted services"
    ]
  },
  {
    category: "Rights Violations",
    icon: Scale,
    signs: [
      "Not being allowed to make choices",
      "Discrimination based on disability, culture, or beliefs",
      "Financial exploitation or inappropriate charges",
      "Restriction of visitors or communications",
      "Retaliation for complaints or feedback",
      "Denial of access to advocacy services"
    ]
  }
]

export default function STARightsAdvocacyPage() {
  return (
    <>
      <PageHero
        title="STA Rights & Advocacy"
        description="Know your rights during STA stays including quality standards, complaints processes, advocacy services, and how to ensure you receive safe, dignified accommodation and support."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About STA", href: "/learn/about-sta" },
          { title: "Rights & Advocacy", href: "/learn/about-sta/rights-and-advocacy" }
        ]}
        heroImage={{
          src: "/house-image/10.webp",
          alt: "Person advocating for their rights with support worker listening respectfully"
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

      {/* Your Rights Overview */}
      <section className="py-12 bg-[hsl(var(--background))]" aria-label="Rights overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Your Rights
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Your Fundamental Rights During STA Stays
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Understanding your rights ensures you receive quality support and can advocate for yourself when needed.
              </p>
            </div>

            <div className="grid gap-8">
              {participantRights.map((right, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                        <right.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[hsl(var(--heading))] mb-2">{right.title}</h3>
                        <p className="text-[hsl(var(--body))] text-lg">{right.description}</p>
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">What This Means:</h4>
                        <ul className="space-y-2">
                          {right.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-[hsl(var(--light-orange))] p-4 rounded-lg">
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">Examples in Practice:</h4>
                        <ul className="space-y-2">
                          {right.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                              <Lightbulb className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Quality standards">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Quality Standards
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Quality Standards You Can Expect
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                NDIS registered providers must meet specific quality standards to ensure safe, appropriate accommodation and support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {qualityStandards.map((standard, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <standard.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {standard.area}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {standard.standards.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                          <Star className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
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

      {/* Complaints Process */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Complaints process">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Making Complaints
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How to Make a Complaint
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                If you're not satisfied with your STA accommodation or support, you have the right to make a complaint and get it resolved.
              </p>
            </div>

            <div className="space-y-6">
              {complaintsProcess.map((step, index) => (
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
                          <Badge variant="outline" className="text-xs">
                            {step.timeframe}
                          </Badge>
                        </div>
                        <p className="text-[hsl(var(--body))] mb-4">{step.description}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-[hsl(var(--heading))] mb-2">Action Steps:</h4>
                            <ul className="space-y-1">
                              {step.actions.map((action, actionIndex) => (
                                <li key={actionIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                                  <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                                  {action}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                            <h4 className="font-medium text-[hsl(var(--heading))] mb-1">When to Use:</h4>
                            <p className="text-[hsl(var(--body))] text-xs">{step.when}</p>
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

      {/* Advocacy Services */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Advocacy services">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Advocacy Support
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Advocacy Services and Support
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Independent advocacy services can help you understand your rights, navigate complaints processes, and ensure you receive quality support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {advocacyServices.map((service, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] text-lg">{service.service}</CardTitle>
                    <div className="flex items-center gap-2 text-[hsl(var(--primary))]">
                      {service.contact.includes('www') ? (
                        <Globe className="w-4 h-4" />
                      ) : (
                        <Phone className="w-4 h-4" />
                      )}
                      <span className="text-sm font-medium">{service.contact}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-[hsl(var(--body))] text-sm">{service.description}</p>
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2">Services Provided:</h4>
                      <ul className="space-y-1">
                        {service.services.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[hsl(var(--lighter-orange))] p-3 rounded">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>Best for:</strong> {service.bestFor}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Warning signs">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">
                Warning Signs
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Red Flags to Watch For
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Be aware of these warning signs that may indicate poor quality accommodation or potential rights violations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {warningSignsContorl.map((category, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] border-l-4 border-amber-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <category.icon className="w-6 h-6 text-amber-600" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.signs.map((sign, signIndex) => (
                        <li key={signIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                          <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-red-50 border-2 border-red-500">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  If You Notice Warning Signs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">Immediate Actions:</h4>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        Document what you observe
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        Speak up about your concerns
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        Contact support coordinator if available
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        Call NDIS Commission if serious: 1800 035 544
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">Get Support:</h4>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        Contact advocacy services
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        Tell trusted family or friends
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        Keep records of incidents
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        Know your right to leave if unsafe
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Contact Information */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Key contacts">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Important Contacts
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Key Contact Information
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Save these important contact numbers for complaints, advocacy, and emergency situations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[hsl(var(--primary))]" />
                    NDIS Quality & Safeguards Commission
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[hsl(var(--primary))] mb-1">1800 035 544</div>
                    <p className="text-[hsl(var(--body))] text-sm">For complaints and quality concerns</p>
                  </div>
                  <Button asChild className="w-full">
                    <a href="tel:1800035544">Call NDIS Commission</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Users className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Disability Advocacy Finder
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <p className="text-[hsl(var(--body))] text-sm mb-2">Find local advocacy services</p>
                    <p className="text-sm text-[hsl(var(--primary))] font-medium">www.disabilityadvocacyfinder.dss.gov.au</p>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://www.disabilityadvocacyfinder.dss.gov.au" target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Related Topics */}
      <section className="py-12 bg-[hsl(var(--background))]" aria-label="Related STA topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-6 text-center">
              Complete Your STA Knowledge
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/types-and-when-to-use" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Types & When to Use
                  </div>
                  <span className="text-xs opacity-90">Choose the right STA type</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/booking-and-planning" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4" />
                    Booking & Planning
                  </div>
                  <span className="text-xs opacity-90">Master the booking process</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    STA Overview
                  </div>
                  <span className="text-xs opacity-90">Return to main STA guide</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 