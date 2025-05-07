import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Users2,
  HeartHandshake,
  Sparkles,
  HelpCircle,
  Home,
  Building,
  ArrowRightCircle,
  FileText,
  MessageSquare,
  Shield,
  Wallet,
  ClipboardCheck,
} from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { EnhancedIcon } from "@/components/ui/enhanced-icon"
import { IconFeature, IconFeatureGroup } from "@/components/ui/icon-feature"
import { IconStack, FeatureIconGrid } from "@/components/ui/icon-stack"

export const metadata: Metadata = {
  title: "Supported Independent Living (SIL) | EDEN Independence",
  description:
    "Understanding SIL and how it can support your journey to independent living through the National Disability Insurance Scheme (NDIS).",
  openGraph: {
    title: "Supported Independent Living (SIL) | EDEN Independence",
    description:
      "Understanding SIL and how it can support your journey to independent living through the National Disability Insurance Scheme (NDIS).",
    type: "website",
    url: "https://edenindependence.com.au/resources/about-sil",
  },
}

const supportLevels = [
  {
    title: "Lower Needs",
    description: "Provides regular supervision of living arrangements.",
    icon: Clock,
  },
  {
    title: "Standard Needs",
    description:
      "Provides 24/7 active assistance and/or supervision of most daily tasks and includes overnight sleepovers.",
    icon: Users2,
  },
  {
    title: "Higher Needs",
    description:
      "Provides 24/7 continual and frequent active assistance with all daily tasks and management of challenging active behaviours and complex medical needs. Includes overnight sleepovers.",
    icon: HeartHandshake,
  },
]

const quotingSteps = [
  "Testing your Eligibility for Supported Independent Living (SIL)",
  "Gathering Information about you and your support needs at home",
  "Preparing reports and assessments from your specialists",
  "Finding home and housemate to move in with",
  "Submitting your SIL Quote to the NDIA for Approval",
  "SIL Approval by National Disability Insurance Agency (NDIA)",
]

const includedSupports = [
  "Assistance with personal care routines such as showering and dressing",
  "Assistance with household tasks such as shopping, cleaning, meal preparation and nutrition",
  "Assistance with household budgeting and money management",
  "Assistance with daily skills training",
  "Assistance with medication",
  "Learning to catch public transport",
  "Social outings with other housemates",
  "Assistance with attending to medical appointments and recreation activities",
  "Active overnight and/or sleepover support",
]

const notIncludedCosts = [
  "Rental for the home",
  "Day-to-day living expenses such as food, activities",
  "Utilities charges such as gas, water, electricity",
  "Costs covered in other sections of the NDIS price guide like capital costs",
]

const edenServices = [
  {
    title: "Shared Supported Accommodation",
    description: "Range of shared accommodation for groups of two or more.",
    href: "/services/shared-accommodations",
    icon: Home,
  },
  {
    title: "Unique SIL Models",
    description: "More choice and control over your Supported Independent living options.",
    href: "/services/sil-models",
    icon: Building,
  },
  {
    title: "Customised SIL Homes",
    description: "Innovative approach for NDIS participants to develop the right home.",
    href: "/services/sil-models",
    icon: HeartHandshake,
  },
  {
    title: "In-Home Support",
    description: "Assistance to live independently in your own home.",
    href: "/services/sil-models",
    icon: Users2,
  },
]

export default function AboutSILPage() {
  return (
    <>
      <PageHero
        title={<span className="font-heading">Supported Independent Living (SIL)</span>}
        description="Understanding SIL and how it can support your journey to independent living."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "Resources", href: "/resources" },
          { title: "About SIL", href: "/resources/about-sil" },
        ]}
        heroImage={{
          src: "/header/page-header-4.webp",
          alt: "Modern supported living space featuring accessible design with a person in wheelchair enjoying the communal area overlooking residential units",
        }}
      />

      {/* Introduction Section */}
      <section className="relative py-8 md:py-12 bg-background">
        <div className="container px-8 sm:px-24">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none bg-primary/5">
              <CardContent className="pt-6 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Supported Independent Living (SIL) is a NDIS funded support that provides services for people with
                  disability in a shared living arrangement. SIL is help with and/or supervision of daily tasks to develop
                  the skills of an individual to live as independently as possible. These supports can be provided in a
                  shared or individual arrangement.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SIL supports people with disability that require assistance with daily life tasks. Supports provided in
                  shared living arrangements of 2 to 7 NDIS participants are often 24/7 and can assist each resident with
                  their daily life. Assistance provided to a participant will be included as part of their plan depending on
                  the level of support they require to live independently in the housing option of their choice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <SectionSeparator variant="primary" className="bottom-0" />
      </section>

      {/* Overview and Eligibility Section */}
      <section className="relative py-8 md:py-12 bg-background">
        <div className="container px-8 sm:px-24">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Eligibility Criteria */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-5">Eligibility Criteria</h2>
              <div className="space-y-3">
                <IconFeature 
                  icon={CheckCircle2}
                  description="You are over the age of 18."
                  variant="primary"
                  iconEffect="none"
                  effectOnHover={true}
                />
                <IconFeature 
                  icon={CheckCircle2}
                  description="You need support to live independently."
                  variant="primary"
                  iconEffect="none"
                  effectOnHover={true}
                />
                <IconFeature 
                  icon={CheckCircle2}
                  description="You require access to 24/7 support."
                  variant="primary"
                  iconEffect="none"
                  effectOnHover={true}
                />
              </div>

              <div className="mt-6 bg-primary/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Required Evidence:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Functional Assessment Report undertaken by an Allied Health professional</li>
                  <li>Exploring Housing Solution's report provided by a Support Coordinator</li>
                </ul>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative h-[300px] md:h-[350px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/13.webp"
                alt="Person receiving support in their home environment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* Support Levels Section */}
      <section className="relative py-8 md:py-12 bg-muted/20">
        <div className="container px-8 sm:px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Support Levels</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {supportLevels.map((level) => (
              <Card key={level.title} className="relative overflow-hidden group border-primary/10">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <EnhancedIcon 
                      icon={level.icon} 
                      variant="primary" 
                      effect="pulse"
                      effectOnHover={true}
                      withBackground 
                      withHoverEffect
                    />
                    <h3 className="text-lg font-semibold">{level.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{level.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 pt-4 max-w-3xl mx-auto">
            <IconFeature
              icon={Shield}
              title="Tailored to Individual Needs"
              description="Each SIL plan is uniquely tailored to meet the specific support requirements of individuals, 
                ensuring that everyone receives the right level of assistance to maximize their independence."
              variant="primary"
              iconSize="lg"
              iconEffect="glow"
              effectOnHover={true}
              className="p-3"
            />
          </div>
        </div>
        <SectionSeparator variant="accent" className="bottom-0" />
      </section>

      {/* SIL Process and Quotes */}
      <section className="relative py-8 md:py-12 bg-background">
        <div className="container px-8 sm:px-24">
          <div className="grid md:grid-cols-5 gap-8">
            {/* SIL Quoting Process */}
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">SIL Quoting Process</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quotingSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg transition-colors hover:bg-muted/50"
                  >
                    <Badge variant="outline" className="h-6 w-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      {index + 1}
                    </Badge>
                    <p className="text-base text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Understanding SIL Quotes</h3>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    SIL funding is personalised for each person and is based on their individual needs. The important
                    information and evidence about your support needs and the funding that is required to support you are
                    listed in a document called a SIL quote.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    The SIL quote is developed based on a SIL Tool which is developed by the NDIA. The quote then informs
                    SIL funding the participant receives from the NDIS.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="md:col-span-2">
              <div className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/16.webp"
                  alt="Person reviewing NDIS documentation with a support worker"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/10">
                <IconFeature
                  icon={HelpCircle}
                  title="Important Note:"
                  description="Every person receiving SIL funding requires a SIL Quote. You can receive your SIL funding once the
                  National Disability Insurance Agency (NDIA) approves your SIL Quote."
                  variant="accent"
                  iconSize="sm"
                  effectOnHover={true}
                />
              </div>
            </div>
          </div>
        </div>
        <SectionSeparator variant="primary" className="bottom-0" />
      </section>

      {/* What's Included & Not Included */}
      <section className="relative py-8 md:py-12 bg-muted/20">
        <div className="container px-8 sm:px-24">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Included Supports */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What Supports are Included?</h2>
              <IconFeatureGroup variant="primary" withBackground>
                {includedSupports.map((support, index) => (
                  <IconFeature
                    key={index}
                    icon={Sparkles}
                    description={support}
                    iconEffect="wiggle"
                    effectOnHover={true}
                    withHoverEffect
                  />
                ))}
              </IconFeatureGroup>
            </div>
            
            {/* Not Included Costs */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What's Not Included?</h2>
              <IconFeatureGroup variant="primary" withBackground>
                {notIncludedCosts.map((cost, index) => (
                  <IconFeature
                    key={index}
                    icon={HelpCircle}
                    description={cost}
                    iconEffect="none"
                    effectOnHover={true}
                    withHoverEffect
                  />
                ))}
              </IconFeatureGroup>
              
              <div className="mt-6 relative h-[200px] md:h-[220px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/header/page-header-15.webp"
                  alt="Representative image of a supported living environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="mt-4 text-sm text-muted-foreground">
                To learn more about what costs are covered by NDIS, visit the{" "}
                <a
                  href="https://www.ndis.gov.au/participants/housing-and-ndis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  NDIS website
                </a>.
              </div>
            </div>
          </div>
        </div>
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* EDEN Services Section */}
      <section className="relative py-8 md:py-12 bg-background">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">How can EDEN Independence help?</h2>
            <p className="text-center text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              EDEN Independence offers comprehensive SIL services tailored to your needs. We can assist with eligibility
              testing, assessments, and finding the perfect housing solution.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {edenServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block p-4 bg-background rounded-xl border border-muted transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <EnhancedIcon 
                      icon={service.icon} 
                      variant="primary" 
                      effect="pulse"
                      effectOnHover={true}
                      withBackground 
                      withHoverEffect
                      size="md"
                    />
                    <div className="flex-1">
                      <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <EnhancedIcon 
                      icon={ArrowRightCircle} 
                      variant="primary" 
                      size="xs"
                      className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" 
                    />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-10 bg-primary/5 p-5 rounded-lg">
              <IconFeature
                icon={Wallet}
                title="SIL Funding Support"
                description="Our team can help you navigate the complex process of securing SIL funding approval. We work closely with NDIS participants
                to ensure all documentation and evidence is properly prepared for successful applications."
                variant="primary"
                iconSize="lg"
                iconEffect="pulse"
                effectOnHover={true}
              />
            </div>
          </div>
        </div>
        <SectionSeparator variant="accent" className="bottom-0" />
      </section>

      {/* FAQ Section */}
      <section className="relative py-8 md:py-12 bg-muted/20">
        <div className="container px-8 sm:px-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="item-1" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-4">
                  <div className="flex items-center gap-3">
                    <EnhancedIcon 
                      icon={Home} 
                      variant="primary" 
                      effect="bounce"
                      effectOnHover={true}
                      withBackground 
                      size="sm"
                    />
                    <span className="text-base md:text-lg font-medium">Does SIL funding depend on where I live?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-muted-foreground">
                    SIL funding does not depend on where you live. As an NDIS participant you might be eligible for SIL
                    funding, whether you own your own home, share home with others, rent privately, or live in
                    Specialist Disability Accommodation (SDA).
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-4">
                  <div className="flex items-center gap-3">
                    <EnhancedIcon 
                      icon={Building} 
                      variant="secondary" 
                      effect="bounce"
                      effectOnHover={true}
                      withBackground 
                      size="sm"
                    />
                    <span className="text-base md:text-lg font-medium">What are the differences between SIL and SDA?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <p className="text-muted-foreground">
                      SDA is the specialised building you live in. SIL is the supports you receive from people paid to
                      help you live independently. While many people will receive SIL funding only, a minority of
                      participants will receive SDA and SIL together.
                    </p>
                    <p className="text-muted-foreground">
                      National Disability Insurance Scheme (NDIS) has separated the funding for an accessible house and
                      in-home supports. SDA and SIL are now funded separately in a participant's plan. Separate funding
                      gives people with disability more choice and control over where they live and the services they use.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-4">
                  <div className="flex items-center gap-3">
                    <EnhancedIcon 
                      icon={HeartHandshake} 
                      variant="accent" 
                      effect="bounce"
                      effectOnHover={true}
                      withBackground 
                      size="sm"
                    />
                    <span className="text-base md:text-lg font-medium">If I have SDA funding in my Plan, am I eligible for SIL?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-muted-foreground">
                    If you are eligible for Specialist Disability Housing (SDA) funding, then you automatically receive
                    SIL funding as well. When you are living in an SDA home, the SIL provider for that home provides a
                    quote based on your support needs for each day of the week.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-4">
                  <div className="flex items-center gap-3">
                    <EnhancedIcon 
                      icon={ClipboardCheck} 
                      variant="primary" 
                      effect="bounce"
                      effectOnHover={true}
                      withBackground 
                      size="sm"
                    />
                    <span className="text-base md:text-lg font-medium">What are the next steps if I'm eligible for SIL?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="rounded-full w-5 h-5 flex items-center justify-center p-0">1</Badge>
                      <p className="text-muted-foreground">Start to find a home to move in</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="rounded-full w-5 h-5 flex items-center justify-center p-0">2</Badge>
                      <p className="text-muted-foreground">Find a housemate</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="rounded-full w-5 h-5 flex items-center justify-center p-0">3</Badge>
                      <p className="text-muted-foreground">Start process of submission for SIL funding</p>
                    </div>
                    <div className="mt-3">
                      <Button asChild variant="outline" size="sm">
                        <Link href="/services/sil-vacancies">View Current SIL Vacancies</Link>
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <SectionSeparator variant="primary" className="bottom-0" />
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}

