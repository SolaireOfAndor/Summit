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
  Scale,
  Shield,
  Home,
  Star,
  Wrench,
  MessageSquare,
  Phone,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  X,
  Check,
  Users,
  DollarSign,
  UserCheck,
  Heart,
  Info,
  AlertTriangle,
  HelpCircle,
  FileText,
  ExternalLink,
  Building2,
  HeartHandshake,
  Clock,
  Target,
  TrendingUp,
  Book,
  Lightbulb
} from "lucide-react"

export const metadata: Metadata = {
  title: "SDA Participant Rights & Support | Your Rights in Specialist Disability Accommodation",
  description: "Complete guide to your rights as an SDA participant. Learn about tenancy rights, quality standards, complaints processes, myths vs facts, and available support resources.",
  keywords: "SDA participant rights, SDA tenancy rights, SDA complaints, SDA quality standards, disability housing rights, SDA support resources",
  openGraph: {
    title: "SDA Participant Rights & Support | Your Rights in Specialist Disability Accommodation",
    description: "Comprehensive guide to SDA participant rights, quality standards, and support resources available to residents.",
    type: "article",
    images: [
      {
        url: "/header/page-header-8.webp",
        width: 1200,
        height: 630,
        alt: "NDIS participant discussing rights and support options with advocate"
      }
    ]
  },
  alternates: {
    canonical: "/learn/about-sda/rights-and-support"
  }
}

// Participant Rights
const participantRights = [
  {
    title: "Housing Choice",
    description: "You have the right to choose where you live and who you live with, subject to availability.",
    icon: Home,
    details: [
      "Choose your preferred location within available options",
      "Express preferences about housemates and living arrangements",
      "Request different housing if your current arrangement isn't suitable",
      "Have input into house rules and living arrangements"
    ],
    protections: "Protected under NDIS principles of choice and control"
  },
  {
    title: "Quality Standards",
    description: "Your SDA housing must meet strict design and quality standards set by the NDIS.",
    icon: Star,
    details: [
      "Housing must comply with approved SDA design category standards",
      "Regular quality audits and compliance checks",
      "All accessibility features must be maintained in working order",
      "Provider must meet NDIS Quality and Safeguards requirements"
    ],
    protections: "Monitored by NDIS Quality and Safeguards Commission"
  },
  {
    title: "Maintenance & Repairs",
    description: "SDA providers must maintain your housing to appropriate standards at no cost to you.",
    icon: Wrench,
    details: [
      "Prompt response to maintenance requests",
      "Emergency repairs available 24/7",
      "Regular maintenance of accessibility features",
      "No cost to you for standard maintenance and repairs"
    ],
    protections: "Provider responsibilities outlined in SDA agreements"
  },
  {
    title: "Privacy & Dignity",
    description: "You have the right to privacy in your home and to be treated with dignity and respect.",
    icon: Shield,
    details: [
      "Privacy in your own room and personal spaces",
      "Right to have visitors and guests",
      "Respectful treatment by providers and support staff",
      "Freedom from discrimination and harassment"
    ],
    protections: "Protected under human rights and disability discrimination laws"
  },
  {
    title: "Tenancy Rights",
    description: "You have standard tenancy rights and protections under residential tenancy laws.",
    icon: Scale,
    details: [
      "Security of tenure and lease protections",
      "Fair notice periods for any changes",
      "Right to dispute unfair treatment",
      "Protection from illegal rent increases"
    ],
    protections: "State and territory residential tenancy legislation"
  },
  {
    title: "Complaints Process",
    description: "You can make complaints about your housing and have them addressed promptly.",
    icon: MessageSquare,
    details: [
      "Right to complain without fear of retaliation",
      "Multiple complaint pathways available",
      "Independent review and appeal processes",
      "Advocacy support available if needed"
    ],
    protections: "NDIS complaints framework and external review bodies"
  }
]

// Myths vs Facts
const mythsAndFacts = [
  {
    myth: "SDA is only for people with the highest support needs",
    fact: "SDA is for people with extreme functional impairment, which includes various disability types and support levels.",
    icon: Users,
    explanation: "While SDA requires extreme functional impairment, this can relate to different types of disabilities and doesn't necessarily mean you need the highest level of support services."
  },
  {
    myth: "You have to live with other people in SDA",
    fact: "SDA includes individual apartments and housing options where you can live alone if preferred.",
    icon: Home,
    explanation: "Many SDA options include individual living arrangements. Shared housing is one option, but not a requirement for all SDA participants."
  },
  {
    myth: "SDA housing is institutional and clinical",
    fact: "Modern SDA is designed to look and feel like regular homes while incorporating necessary accessibility features.",
    icon: Heart,
    explanation: "Contemporary SDA focuses on creating home-like environments that happen to include specialized accessibility features, not institutional settings."
  },
  {
    myth: "Once you're in SDA, you can't move",
    fact: "You can request to move to different SDA housing if your needs change or you're not satisfied.",
    icon: ArrowRight,
    explanation: "While SDA is intended for long-term use, you're not locked in permanently. You can request different housing if circumstances change."
  },
  {
    myth: "SDA funding is very limited and hard to get",
    fact: "If you meet the eligibility criteria and there's housing available, SDA funding is your entitlement.",
    icon: DollarSign,
    explanation: "SDA is an NDIS entitlement for eligible participants. The challenge is often housing availability rather than funding approval."
  },
  {
    myth: "SDA providers control your daily life",
    fact: "SDA providers only provide housing - your support services and daily routines are separate arrangements.",
    icon: UserCheck,
    explanation: "SDA providers are responsible for housing only. Your support services, daily activities, and lifestyle choices remain under your control."
  }
]

// Support Resources
const supportResources = [
  {
    category: "NDIS Official Support",
    icon: Shield,
    services: [
      {
        name: "NDIS Quality and Safeguards Commission",
        description: "For complaints about SDA housing and providers",
        contact: "Phone: 1800 035 544 | Email: complaints@ndiscommission.gov.au",
        website: "ndiscommission.gov.au"
      },
      {
        name: "NDIS Contact Centre",
        description: "General NDIS queries and plan information",
        contact: "Phone: 1800 800 110 | Email: enquiries@ndis.gov.au",
        website: "ndis.gov.au"
      }
    ]
  },
  {
    category: "Legal & Advocacy",
    icon: Scale,
    services: [
      {
        name: "Disability Advocacy Organizations",
        description: "Independent advocacy support for disability rights",
        contact: "Contact your local disability advocacy service",
        website: "Various state-based organizations"
      },
      {
        name: "Legal Aid Services",
        description: "Free legal advice for tenancy and disability discrimination issues",
        contact: "Contact your state Legal Aid office",
        website: "legalaid.gov.au"
      }
    ]
  },
  {
    category: "Tenancy Support",
    icon: Home,
    services: [
      {
        name: "Residential Tenancy Tribunals",
        description: "For tenancy disputes and rights protection",
        contact: "Contact your state tenancy tribunal",
        website: "State-specific tenancy authority websites"
      },
      {
        name: "Tenancy Advice Services",
        description: "Free advice about tenancy rights and responsibilities",
        contact: "State-based tenancy advice hotlines",
        website: "Various state tenancy authorities"
      }
    ]
  },
  {
    category: "Community Support",
    icon: Users,
    services: [
      {
        name: "Peer Support Groups",
        description: "Connect with other SDA residents and share experiences",
        contact: "Local disability organizations and community centers",
        website: "Various community organizations"
      },
      {
        name: "Independent Living Centers",
        description: "Support for independent living and community participation",
        contact: "Contact your local Independent Living Centre",
        website: "ilcaustralia.org.au"
      }
    ]
  }
]

// Frequently Asked Questions
const faqData = [
  {
    question: "What can I do if my SDA provider isn't maintaining the property properly?",
    answer: "First, document the issues and contact your provider directly with a written maintenance request. If they don't respond appropriately, you can complain to the NDIS Quality and Safeguards Commission, contact your state tenancy tribunal, or seek advocacy support. Keep records of all communications and take photos of maintenance issues."
  },
  {
    question: "Can my SDA provider restrict who can visit me?",
    answer: "SDA providers cannot unreasonably restrict your visitors. You have the right to have guests in your home, though reasonable house rules about visitor hours and behavior may apply. Any restrictions must be clearly outlined in your tenancy agreement and must be reasonable and justified."
  },
  {
    question: "What happens if I'm not compatible with my housemates?",
    answer: "If you're having serious compatibility issues with housemates, contact your SDA provider to discuss the situation. They should work to resolve conflicts or consider alternative arrangements. You may be able to request a move to different housing if the situation cannot be resolved."
  },
  {
    question: "Can my rent contribution be increased without notice?",
    answer: "Rent increases must follow proper procedures including adequate notice (usually 60 days) and compliance with tenancy laws. Increases should be reasonable and in line with market rates. You can dispute unreasonable rent increases through your state tenancy tribunal."
  },
  {
    question: "What rights do I have if my SDA provider wants me to move out?",
    answer: "You have the same tenancy rights as any other tenant, including proper notice periods and grounds for eviction. Providers cannot evict you without proper legal grounds and must follow correct procedures. Seek legal advice or advocacy support if you believe you're being unfairly treated."
  },
  {
    question: "How do I complain about my SDA housing or provider?",
    answer: "You can complain directly to your provider first. If that doesn't resolve the issue, contact the NDIS Quality and Safeguards Commission on 1800 035 544. You can also contact your state tenancy tribunal for tenancy-related issues or seek advocacy support to help with the complaint process."
  },
  {
    question: "Can I modify my SDA housing to meet my specific needs?",
    answer: "Minor modifications may be possible with provider agreement, but major changes are typically not allowed as SDA properties are designed to meet specific standards. Discuss any modification needs with your provider first. If your needs have changed significantly, you may need to request different SDA housing."
  },
  {
    question: "What support is available if I'm having problems with my SDA housing?",
    answer: "Multiple support options are available including disability advocacy services, legal aid, tenancy advice services, and the NDIS Quality and Safeguards Commission. Many services are free and can provide advice, advocacy, or practical assistance with housing issues."
  }
]

export default function SDARightsSupportPage() {
  return (
    <>
      <PageHero
        title="SDA Participant Rights & Support"
        description="Understand your rights as an SDA participant, learn about quality standards, complaints processes, and discover the support resources available to protect your interests and ensure quality housing."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About SDA", href: "/learn/about-sda" },
          { title: "Rights & Support", href: "/learn/about-sda/rights-and-support" }
        ]}
        heroImage={{
          src: "/header/page-header-8.webp",
          alt: "NDIS participant discussing rights and support with disability advocate"
        }}
        ctaText="Get Support"
        ctaHref="/contact"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/about-sda/housing-selection-guide">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back: Housing Selection
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/about-sda">
                  SDA Overview
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Rights and support overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Your Rights
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Understanding Your Rights as an SDA Participant
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                As an SDA participant, you have comprehensive rights and protections to ensure you receive quality 
                housing and are treated with dignity and respect. Knowing your rights empowers you to advocate for yourself.
              </p>
            </div>

            <Card className="mb-8 bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">
                      Your Voice Matters
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      SDA is YOUR home, and you have the right to be heard, treated with respect, and receive quality 
                      housing and services. If something isn't right, speak up. Multiple support systems exist to help 
                      protect your rights and resolve issues. Don't hesitate to seek help when you need it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Participant Rights */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="SDA participant rights">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Your Rights
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Your 6 Fundamental Rights in SDA
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                These rights are protected by law and NDIS policies. Understanding them helps you advocate for quality housing and treatment.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {participantRights.map((right, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <right.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <CardTitle className="text-lg text-[hsl(var(--heading))]">{right.title}</CardTitle>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{right.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">This includes:</h4>
                      <div className="space-y-1">
                        {right.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                            <span className="text-[hsl(var(--body))] text-xs">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded border-l-4 border-[hsl(var(--primary))]">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>Protected by:</strong> {right.protections}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Support resources">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Support Network
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Support Resources Available to You
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Multiple organizations and services exist to support your rights and help resolve any issues with your SDA housing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {supportResources.map((category, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-3">
                      <category.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="p-3 bg-[hsl(var(--light-orange))] rounded">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">{service.name}</h4>
                          <p className="text-[hsl(var(--body))] text-sm mb-2">{service.description}</p>
                          <p className="text-[hsl(var(--body))] text-xs mb-1">
                            <strong>Contact:</strong> {service.contact}
                          </p>
                          <p className="text-[hsl(var(--body))] text-xs">
                            <strong>Website:</strong> {service.website}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">
                      24/7 Crisis Support
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      If you're experiencing an emergency or crisis situation in your SDA housing, contact emergency 
                      services (000) immediately. For urgent non-emergency support, contact the NDIS Quality and 
                      Safeguards Commission or your local police.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-[hsl(var(--heading))]">Emergency:</strong> 000
                      </div>
                      <div>
                        <strong className="text-[hsl(var(--heading))]">NDIS Commission:</strong> 1800 035 544
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="SDA myths vs facts">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Myth Busting
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                SDA Myths vs Facts
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Clear up common misconceptions about SDA to make informed decisions based on accurate information.
              </p>
            </div>

            <div className="space-y-6">
              {mythsAndFacts.map((item, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-5 gap-4 items-start">
                      <div className="lg:col-span-1 flex justify-center">
                        <item.icon className="w-12 h-12 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-2">
                          <X className="w-5 h-5 text-red-500" />
                          <h3 className="font-semibold text-red-700">Myth</h3>
                        </div>
                        <p className="text-[hsl(var(--body))] text-sm">{item.myth}</p>
                      </div>
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Check className="w-5 h-5 text-green-600" />
                          <h3 className="font-semibold text-green-700">Fact</h3>
                        </div>
                        <p className="text-[hsl(var(--body))] text-sm mb-3">{item.fact}</p>
                        <div className="bg-[hsl(var(--lighter-orange))] p-2 rounded">
                          <p className="text-[hsl(var(--body))] text-xs">{item.explanation}</p>
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA rights and support FAQ">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Common Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Rights & Support Questions & Answers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Find answers to frequently asked questions about your rights and available support as an SDA participant.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
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

      {/* SDA Journey Complete */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Complete SDA guide">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Journey Complete
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                You Now Have Complete SDA Knowledge
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                You've learned about eligibility, design categories, funding, application process, housing selection, 
                and your rights. You're now equipped to make informed decisions about your SDA journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="text-center bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6">
                  <UserCheck className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Eligibility</h3>
                  <p className="text-[hsl(var(--body))] text-sm">✓ Complete</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6">
                  <Building2 className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Design Types</h3>
                  <p className="text-[hsl(var(--body))] text-sm">✓ Complete</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Funding</h3>
                  <p className="text-[hsl(var(--body))] text-sm">✓ Complete</p>
                </CardContent>
              </Card>
              
              <Card className="text-center bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6">
                  <Scale className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Rights</h3>
                  <p className="text-[hsl(var(--body))] text-sm">✓ Complete</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-[hsl(var(--heading))] mb-4">Ready for Your Next Step?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                  <Link href="/properties">
                    <Building2 className="mr-2 h-4 w-4" />
                    Explore SDA Properties
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                  <Link href="/contact">
                    <HeartHandshake className="mr-2 h-4 w-4" />
                    Get Personal Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Know Your Rights, Get the Support You Deserve"
        description="Understanding your rights is the foundation of a positive SDA experience. Our team is here to support you in accessing quality housing and advocating for your needs."
        primaryButtonText="Get Rights Support"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore SDA Options"
        secondaryButtonLink="/properties"
        imageSrc="/png/support-1120755_1920.jpg"
        mobileImageSrc="/png/1.webp"
        imageAlt="NDIS participant receiving advocacy support and rights information"
        footerText="Need advocacy or support with your SDA rights? Our team"
        footerLinkText="is here to help"
        footerLinkHref="/contact"
      />
    </>
  )
} 