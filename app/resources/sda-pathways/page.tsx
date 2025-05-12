import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionSeparator } from "@/components/ui/section-separator"
import { EdenButton } from "@/components/ui/summit-button"
import Image from "next/image"
import Link from "next/link"
import CTASection from "@/components/sections/cta-section"
import { SdaPathwaySelector } from "@/components/sections/sda-pathway-selector"
import {
  ArrowRight,
  FileCheck,
  Users,
  ClipboardCheck,
  Building2,
  CheckCircle2,
  FileText,
  GraduationCap,
  Brain,
  Stethoscope,
  MessageSquare,
  UserCircle2,
  HeartPulse,
  UserCog,
  ArrowRightCircle,
  Wallet,
  FileQuestion,
  ClipboardList,
  Home,
  HelpCircle,
  Settings,
  Wrench,
  ChevronRight,
  ChevronDown,
} from "lucide-react"

const alliedHealthProfessionals = [
  { title: "Occupational Therapists", icon: UserCog },
  { title: "Speech Pathologists", icon: MessageSquare },
  { title: "Behaviour Therapist", icon: Brain },
  { title: "Psychologists", icon: Brain },
  { title: "Physiotherapists", icon: HeartPulse },
  { title: "Acquired Brain Injury Specialists", icon: Brain },
  { title: "Disability Specialists", icon: UserCircle2 },
  { title: "Social Workers", icon: Users },
  { title: "Nurses", icon: Stethoscope },
  { title: "Rehabilitation Counsellors", icon: GraduationCap },
]

const applicationSteps = [
  {
    title: "Demonstrating SDA Eligibility",
    description: "Provide evidence of extreme functional impairment or high support needs.",
    icon: CheckCircle2,
  },
  {
    title: "Undertaking SDA Assessment",
    description: "Complete assessments and prepare housing plans with professionals.",
    icon: ClipboardCheck,
  },
  {
    title: "Submitting SDA Application",
    description: "Submit all required documentation to NDIS for review.",
    icon: FileCheck,
  },
]

const edenServices = [
  {
    title: "Find Specific Accommodation",
    description: "Browse our available SDA properties",
    href: "/services/sda-vacancies",
  },
  {
    title: "Test Your Eligibility",
    description: "Check if you qualify for SDA funding",
    href: "/resources/sda-eligibility",
  },
  {
    title: "Housing Plan Guide",
    description: "Get help preparing your housing plan",
    href: "/resources/sda-toolkit",
  },
  {
    title: "Custom Build SDA",
    description: "Create a home tailored to your needs",
    href: "/about/signature-housing",
  },
]

export const metadata: Metadata = {
  title: "SDA Pathway Guide | EdenAbility",
  description: "Understanding your journey to Specialist Disability Accommodation funding and finding your perfect home through the National Disability Insurance Scheme (NDIS).",
  openGraph: {
    title: "SDA Pathway Guide | EdenAbility",
    description: "Understanding your journey to Specialist Disability Accommodation funding and finding your perfect home through the National Disability Insurance Scheme (NDIS).",
    type: "website",
    url: "https://edenability.com.au/resources/sda-pathways",
  },
}

export default function SDAPathwaysPage() {
  return (
    <>
      <PageHero
        title="SDA Pathway Guide"
        description="Understanding your journey to Specialist Disability Accommodation funding and finding your perfect home."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "Resources", href: "/resources" },
          { title: "SDA Pathways", href: "/resources/sda-pathways" },
        ]}
        heroImage={{
          src: "/header/page-header-2.webp",
          alt: "Visual representation of the SDA pathway journey",
        }}
      />

      {/* SDA Pathway Journey Section */}
      <SdaPathwaySelector />

      {/* Key Elements Section */}
      <section className="relative py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Key Elements of the SDA Pathway</h2>
          
          {/* Allied Health Professionals */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="p-3 rounded-full bg-primary/10 mb-4">
                      <Stethoscope className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Allied Health Professionals</h3>
                    <p className="text-muted-foreground mb-4">
                      Allied Health professionals play a critical role in helping you access appropriate housing in the NDIS. The NDIA relies on their advice and professional judgement to determine your SDA funding.
                    </p>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        The NDIS may provide up to 50 hours of allied health capacity building funding for assessments.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {alliedHealthProfessionals.map((professional) => (
                        <div key={professional.title} className="flex items-center gap-2 p-3 rounded-lg bg-background">
                          <professional.icon className="h-4 w-4 text-primary" />
                          <span className="text-sm">{professional.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Housing Support Coordinator */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="p-3 rounded-full bg-secondary/10 mb-4">
                      <UserCog className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Housing Support Coordinator</h3>
                    <p className="text-muted-foreground mb-4">
                      Your housing support coordinator works with you to define your housing preferences and write your Housing Plan.
                    </p>
                    <div className="bg-secondary/5 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        The NDIS may provide up to 75 hours of support coordination to assist you.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-background">
                        <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Define housing preferences</li>
                          <li>• Write Housing Plan</li>
                          <li>• Find suitable allied health professionals</li>
                          <li>• Coordinate assessments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SDA Provider */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="p-3 rounded-full bg-accent/10 mb-4">
                      <Building2 className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">SDA Provider</h3>
                    <p className="text-muted-foreground">
                      SDA providers develop high quality housing options for participants with high and complex needs.
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-background">
                        <h4 className="font-semibold mb-2">Provider Responsibilities</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Develop quality housing options</li>
                          <li>• Maximize participant independence</li>
                          <li>• Claim against participant's NDIS SDA funding</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* Application Process Section */}
      <section className="relative py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">The SDA Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {applicationSteps.map((step, index) => (
                <Card key={step.title} className="relative group hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <SectionSeparator variant="accent" className="bottom-0" />
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Wallet className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-base font-semibold">What is Capacity building funding to Explore Housing Options?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground mb-4">
                      Capacity building funding enables you to work with your support coordinator and allied health
                      professionals to write a Housing Plan. If you get capacity building funding in your NDIS Plan to
                      search for housing, it may be in two separate sections:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>
                        Support coordination which allows you to work with your support coordinator to look at your
                        housing options and develop your housing plan.
                      </li>
                      <li>
                        Allied health assessments which allows you to work with allied health professionals to assess your
                        housing and support needs.
                      </li>
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <FileQuestion className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-base font-semibold">How can I make sure if I already have capacity building funding for housing in my plan?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground mb-4">
                      Capacity building funding to explore your housing options may be described in different ways in your
                      NDIS Plan, it might be described as one of the below:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Exploring Housing Options Package</li>
                      <li>Exploring Your Housing Options</li>
                      <li>Investigating Your Housing Solutions, or something similar</li>
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/10">
                      <ClipboardList className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-base font-semibold">What is addressed in Allied Health Professionals Reports?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• SDA Eligibility Criteria (e.g., Extreme functional impairment or very high support needs)</li>
                      <li>• Participant Current supports and pathways</li>
                      <li>• Support model recommendation for participant</li>
                      <li>• SDA design category and building type</li>
                      <li>• Skill development plan if required</li>
                      <li>• Life transition plan if required</li>
                      <li>• Support plan for your preferred housing option if required</li>
                      <li>• Preferred SDA provider or dwelling</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <UserCog className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-base font-semibold">What is the Support Coordinator's role in SDA?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground mb-4">Support Coordinators could assist you with:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Clarifying your need for SDA, the appropriate SDA type and location</li>
                      <li>• Ascertaining the availability of the appropriate SDA type at the appropriate location</li>
                      <li>
                        • Considering other supports such as assistance with daily living or supports that assist you to
                        develop independent living skills
                      </li>
                      <li>
                        • Negotiating, entering into or managing your service agreements with a registered provider in
                        relation to SDA or moving into a dwelling
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <Home className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-base font-semibold">Can I specify my preferred SDA dwelling or provider in my Housing Plan?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground mb-4">
                      The NDIS allows you to specify one or both of the following in your Housing Plan:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Which registered provider is to provide SDA funded for you</li>
                      <li>• The SDA dwelling that will be funded for you</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/10">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-base font-semibold">What should I include in my Housing Plan?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground mb-4">
                      A Housing Plan is a document that is prepared by your support coordinator to help the NDIS
                      understand your housing needs. It includes information about:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Your housing goals</li>
                      <li>• Your community participation, hobbies and work</li>
                      <li>• Your current and previous housing arrangements</li>
                      <li>• Outcome of your search for mainstream housing</li>
                      <li>• Your disability</li>
                      <li>• Your allied health professional assessments and reports</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-base font-semibold">Who prepares the Housing Plan?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Support Coordinators could assist you with preparing Housing Plan. However, you can write your
                      Housing Plan on your own, or with help from your family.
                    </p>
                    <p className="text-muted-foreground mt-4">
                      If the NDIS has not provided you with the funding for support coordination and you want to write
                      your Housing Plan on your own, EDEN Housing Preferences Tool could help you with understanding your
                      housing needs and developing your housing goals.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <Wrench className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-base font-semibold">How can the EDEN Housing Plan guide help me with my SDA?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Whether you want to test your eligibility for Specialist Disability Accommodation funding or you are
                      looking to develop a Housing Plan on behalf of a person with disability, EDEN Housing Plan guide
                      could provide you information on what to include in your plan and to achieve the best possible
                      outcome for your SDA application.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/10">
                      <Settings className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-base font-semibold">What is the EDEN Housing Preferences Tool?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground mb-4">
                      EDEN Housing Tool is the first step in your SDA Pathway. It provides you and your Support
                      Coordinator with essential information which will lead you to identify your housing needs and helps
                      you with preparing your Housing Plan.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      EDEN Housing Preferences help you to tell your story and think about:
                    </p>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• What type of housing you would like to live in?</li>
                      <li>• Where you would like to live?</li>
                      <li>• Who you would like to live with?</li>
                    </ul>
                    <p className="text-muted-foreground">
                      It helps you work out your housing goals and assists you and your Support Coordinator with SDA
                      accommodation and tenancy matching services.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <SectionSeparator className="bottom-0" variant="primary" />
      </section>

      {/* EDEN Services Section */}
      <section className="relative py-12 md:py-16 bg-primary/5">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">How EDEN Housing Can Help</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We offer comprehensive services to support your SDA journey, from eligibility assessment to finding or
            building your perfect home.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {edenServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block p-6 bg-background rounded-xl border transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <ArrowRightCircle className="w-5 h-5 text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <SectionSeparator className="bottom-0" variant="secondary" />
      </section>

      {/* Custom CTA Section */}
      <CTASection 
        title="Begin Your SDA Housing Journey"
        description="Let our expert team guide you through the SDA application process, from eligibility assessment to finding your perfect home that meets your specific needs."
        primaryButtonText="Contact Our SDA Team"
        primaryButtonLink="/contact"
        secondaryButtonText="Check SDA Eligibility"
        secondaryButtonLink="/resources/sda-eligibility"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="EDEN Housing SDA support team member assisting with housing plans"
        footerText="Want to learn more about support services? Check our"
        footerLinkText="SIL Guide"
        footerLinkHref="/resources/about-sil"
        className="relative bg-background"
      />
    </>
  )
}

