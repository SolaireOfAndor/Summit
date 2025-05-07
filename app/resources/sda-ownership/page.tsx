import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import {
  ArrowRight,
  Users,
  Building,
  MessageSquare,
  ClipboardCheck,
  FileCheck,
  Home,
  DollarSign,
  Truck,
  CheckCircle2,
  Presentation,
  Hammer,
  Calculator,
  Construction,
  HeartHandshake,
  ArrowRightCircle,
  Network,
  HandshakeIcon,
  Handshake,
  Briefcase,
  Shield,
  HelpCircle,
  Lightbulb,
} from "lucide-react"

export const metadata: Metadata = {
  title: "SDA Ownership | Pathway to Home Ownership with EDEN Housing",
  description:
    "Learn how to use your NDIS SDA payments to achieve home ownership. EDEN Housing provides comprehensive support for purchasing, building, or customizing your own SDA property.",
  openGraph: {
    title: "SDA Ownership | Pathway to Home Ownership with EDEN Housing",
    description:
      "Learn how to use your NDIS SDA payments to achieve home ownership. EDEN Housing provides comprehensive support for purchasing, building, or customizing your own SDA property.",
    type: "website",
  },
}

const steps = [
  {
    title: "Introductions",
    description:
      "We start by getting to know you and understanding your housing goals. Our passionate team ensures great outcomes from these initial discussions.",
    icon: Users,
  },
  {
    title: "Making Decisions",
    description:
      "Working closely with you and your family to decide on location, accessibility level, and financing options.",
    icon: ClipboardCheck,
  },
  {
    title: "Confirmations",
    description:
      "Finalizing property design, financing, and construction details to ensure compliance with your Housing Plan.",
    icon: FileCheck,
  },
  {
    title: "Consultations",
    description:
      "EDEN Housing manages the organization while keeping you informed and consulted throughout the development.",
    icon: MessageSquare,
  },
  {
    title: "Transition",
    description: "Coordinating with your family and support workers to ensure a well-planned and supported transition.",
    icon: HeartHandshake,
  },
  {
    title: "Move In",
    description:
      "Once your customized home is ready and you're prepared for more independent living, it's time to move in!",
    icon: Home,
  },
]

const collaborationTools = {
  consulting: [
    "Ownership options",
    "Development Options",
    "SIL Approach",
    "AHP Housing Plan Compliance",
    "Accessibility Level",
    "Individualised Needs",
    "Practical Features of Smart Plan",
  ],
  housing: [
    "Site investigation",
    "Design",
    "Development Approvals",
    "Detailed Smart Building Design",
    "LHA Standard Compliance",
    "Construction",
    "Platinum Plus Development",
    "Dwelling Enrolment",
    "LHA Assessments",
    "Organise Building Insurance",
  ],
  financing: [
    "Financial Modelling",
    "Home Loans for Participants",
    "Investment Loans for families",
    "Determine Financial literacy level",
    "Investigate Partnership Options",
    "Approach Financial Institutions",
    "Loan Pre-Approvals",
    "Organise Loan Repayment Protection Insurance",
  ],
  relocating: [
    "Platinum Plus Orientation",
    "Removalist Coordination",
    "Transitional Support",
    "Smart Home Training",
    "Home Safety Training",
    "Community Access Guide",
    "Transportation Guide",
    "Claim SDA Payments",
  ],
}

const ownershipOptions = [
  {
    title: "Rent SDA",
    description: "Looking for a vacancy in existing SDA properties",
    icon: Building,
    href: "/services/sda-vacancies",
  },
  {
    title: "Buy SDA",
    description: "Use SDA payments as a pathway to home ownership",
    icon: DollarSign,
    href: "/contact",
  },
  {
    title: "Build SDA",
    description: "Create your own customized SDA property",
    icon: Construction,
    href: "/about/signature-housing",
  },
]

export default function SDAOwnershipPage() {
  return (
    <>
      <PageHero
        title={<span className="font-heading">Pathway to SDA Ownership</span>}
        description="Use your SDA payments to achieve home ownership and create a living space that's truly yours."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "Resources", href: "/resources" },
          { title: "SDA Ownership", href: "/resources/sda-ownership" },
        ]}
        heroImage={{
          src: "/header/page-header-6.webp",
          alt: "Modern SDA property showing accessible design features for independent living",
        }}
      />

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">SDA BUY</Badge>
            <h2 className="text-2xl md:text-3xl font-bold font-heading">USING SDA PAYMENTS TO HOME OWNERSHIP</h2>
            <p className="text-lg text-muted-foreground">
              If you are receiving SDA payments, you may want to use your payments to purchase or build your own home. This means when SDA payment is included in your NDIS plan, you are in control of choosing where to live and how to use your SDA payments.
            </p>
            <p className="text-lg text-muted-foreground">
              If you are eligible for SDA, National Disability Insurance Scheme (NDIS) is giving you more control over your housing and support. It is also offering individualised options that were not previously available.
            </p>
            <p className="text-lg text-muted-foreground">
              This provides you with an opportunity to develop your customised house to be specially designed to meet your individualised needs.
            </p>
            
          </div>
        </div>
      </section>

      {/* First Main Image Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* Replace placeholder with actual image */}
              <Image 
                src="/content/sda-ownership-1.png" 
                alt="EDEN Housing Pathway to Home Ownership diagram showing relationship between NDIS participants, families, and housing"
                width={1200}
                height={500}
                className="w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator variant="primary" />

      {/* EDEN Housing Pathway Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold font-heading">EDEN HOUSING PATHWAY TO HOME OWNERSHIP</h2>
                <p className="text-muted-foreground">
                  For the majority of people with disability, housing is usually dictated by where their support providers are located and lack of accessible and appropriate housing which could suit their needs has stressed this situation; therefore, EDEN Housing aimed to improve the situation by focusing on options for people receiving NDIS Specialist Disability Accommodation (SDA) payments. One of the options is through EDEN Housing Home Ownership Pathway.
                </p>
                <p className="text-muted-foreground">
                  We understand that moving towards home ownership is not without risks and challenges. We simplify the complex process of home ownership through helping participants and their families to reduce unnecessary expenses and remove developers and contractors. We work collaboratively with participants and their families to help them develop and own their own homes.
                </p>
                <div className="pt-4">
                  <Button asChild>
                    <Link href="/contact">Express Your Interest</Link>
                  </Button>
                </div>
              </div>
              <div>
                {/* Replace placeholder with actual image */}
                <Image 
                  src="/6.webp" 
                  alt="Visual representation of EDEN Housing's pathway to home ownership process"
                  width={600}
                  height={350}
                  className="rounded-xl object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator variant="secondary" />

      {/* Process Steps */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">EDEN HOUSING CUSTOMISED DISABILITY ACCOMMODATION PROCESS</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive process ensures a smooth journey from initial consultation to moving into your new home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <Card key={step.title} className="relative group hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Step {index + 1}: {step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Third Main Image Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* Replace placeholder with actual image */}
              <Image 
                src="/header/page-header-6.webp" 
                alt="EDEN Housing as Communicator and Facilitator diagram showing coordination with stakeholders"
                width={1200}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator variant="secondary" />

      {/* EDEN Housing as Communicator/Facilitator */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading text-center">EDEN HOUSING AS THE COMMUNICATOR</h2>
                <p className="text-lg text-muted-foreground">
                  EDEN Housing has a team of highly experienced professionals in the development, construction, financing and NDIS space. We constantly communicate with participants, service providers and professional partners to ensure that each of the properties are designed and built to achieve excellence in creating a new home to best suit the need of participants.
                </p>
                <p className="text-lg text-muted-foreground">
                  From the very beginning of studying your Housing Preference and discussing possibilities of moving toward Home Ownership to relocating to your new home, we provide you with a pathway to simplify this process; therefore, EDEN Housing has developed a collaboration tool to provide a total administration solution to clarify the process of developing your own customised housing and moving toward Home Ownership.
                </p>
                <p className="text-lg text-muted-foreground">
                  EDEN Housing collaboration tool provides a suite of services which includes:
                </p>
              </div>

              {/* Collaboration Tools */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="group hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10">
                        <Presentation className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Consulting</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {collaborationTools.consulting.map((item) => (
                        <div key={item} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10">
                        <Hammer className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Housing</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {collaborationTools.housing.map((item) => (
                        <div key={item} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10">
                        <Calculator className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Financing</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {collaborationTools.financing.map((item) => (
                        <div key={item} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10">
                        <Truck className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Relocating</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {collaborationTools.relocating.map((item) => (
                        <div key={item} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 pt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading text-center">EDEN HOUSING AS THE FACILITATOR</h2>
                <p className="text-lg text-muted-foreground">
                  When it comes to purchasing a suitable home or partnering with investors to ease achieving home ownership goals, EDEN Housing is a key link between the property owners, investors and the participants.
                </p>
                <p className="text-lg text-muted-foreground">
                  EDEN Housing has developed a networking package which works constructively with Participants and their families and all relevant Specialists to best meet the expressed needs and preferences of participants.
                </p>
                <p className="text-lg text-muted-foreground">
                  EDEN Housing acts as co-ordinating body and brings together a diverse group of experienced professionals and stakeholders including support providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Main Image Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* Replace placeholder with actual image */}
              <Image 
                src="/header/page-header-2.webp" 
                alt="EDEN Housing SDA Ownership Approach showing the pathway to independence"
                width={1200}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <SectionSeparator variant="accent" />

      {/* SDA Ownership Approach */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold font-heading">EDEN HOUSING SDA OWNERSHIP APPROACH</h2>
                <p className="text-lg text-muted-foreground">
                  We don't see any reason people with disability should have less choice and aspiration to enjoy the benefits of home ownership than the rest of the population. We understand that everyone's needs are different and the lack of specialist accommodation could be a barrier to independence.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe the Disability Accommodation should be specifically designed to meet individual needs; therefore, we work with participants and their family to create their own customised accommodations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                <div className="bg-primary/5 p-6 rounded-xl space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Understanding Needs</h3>
                  <p className="text-muted-foreground">We take time to understand participants individualised needs. While we promote quality to achieve Excellence and Innovation.</p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-xl space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Tenancy Matching</h3>
                  <p className="text-muted-foreground">We have a Tenancy Matching System which enables Participants to choose who to live with.</p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-xl space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Choice and Control</h3>
                  <p className="text-muted-foreground">We ensure participants Choice and Control is the main consideration and enables them to govern their own home.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator variant="primary" />

      {/* Ownership Options */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">Explore Your Options</h2>
            <p className="text-lg text-muted-foreground">
              Do you already have SDA payments included in your NDIS Plan and you are thinking how to make the most of it?
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ownershipOptions.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                className="group block p-6 bg-background rounded-xl border transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                  <ArrowRightCircle className="w-5 h-5 text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold font-heading">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground mt-4">
                Learn more about how SDA payments can lead to home ownership
              </p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">What is SDA funding?</h3>
                        <p className="text-muted-foreground mt-2">
                          Specialist Disability Accommodation (SDA) funding is part of the NDIS and provides housing for participants with extreme functional impairment or very high support needs who require specialist housing solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Can I use my SDA payments to purchase a home?</h3>
                        <p className="text-muted-foreground mt-2">
                          Yes, if you receive SDA payments as part of your NDIS plan, you can use these payments to help purchase or build your own home. EDEN Housing can guide you through this process.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">How does EDEN Housing help with the home ownership process?</h3>
                        <p className="text-muted-foreground mt-2">
                          EDEN Housing simplifies the complex process by helping participants and families reduce unnecessary expenses, removing developers and contractors, and working collaboratively to develop and own homes tailored to individual needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <SectionSeparator variant="secondary" />

      {/* CTA Section */}
      <CTASection 
        title="Ready to Start Your Journey to Home Ownership?"
        description="Let us help you explore your options and create a pathway to home ownership that meets your unique needs."
        primaryButtonText="Express Your Interest"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Our Homes" 
        secondaryButtonLink="/about/signature-housing"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="Person exploring housing options with EDEN support coordinator"
        footerText="Want to learn more about SDA accommodations? Check our"
        footerLinkText="SDA Guide"
        footerLinkHref="/resources/about-sda"
      />
    </>
  )
}

