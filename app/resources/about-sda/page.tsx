import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { SectionSeparator } from "@/components/ui/section-separator"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import {
  Home,
  Users,
  CheckCircle2,
  HelpCircle,
  Wallet,
  Building,
  Building2,
  Brain,
  HeartHandshake,
  Shield,
  Accessibility,
  LayoutGrid,
  FileText,
  MessageSquare,
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
  Search,
  Key,
  BuildingIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Specialist Disability Accommodation (SDA) | EdenAbility",
  description:
    "Understanding SDA and how it can provide you with purpose-built housing that meets your needs through the National Disability Insurance Scheme (NDIS).",
  openGraph: {
    title: "Specialist Disability Accommodation (SDA) | EdenAbility",
    description:
      "Understanding SDA and how it can provide you with purpose-built housing that meets your needs through the National Disability Insurance Scheme (NDIS).",
    type: "website",
    url: "https://edenability.com.au/resources/about-sda",
  },
}

export default function AboutSDAPage() {
  return (
    <>
      <PageHero
        title={<span className="font-heading">Specialist Disability Accommodation (SDA)</span>}
        description="Understanding SDA and how it can provide you with purpose-built housing that meets your needs."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "Resources", href: "/resources" },
          { title: "About SDA", href: "/resources/about-sda" },
        ]}
        heroImage={{
          src: "/header/page-header-12.webp",
          alt: "Modern SDA living space featuring accessible design with a person in wheelchair enjoying the communal area overlooking residential units",
        }}
      />

      {/* Introduction Section */}
      <section className="relative py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none bg-primary/5">
              <CardContent className="pt-6 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you have a disability and you are not happy with the place you live in and your current housing is
                  making it difficult for you to access your community and health centres, participating in work or
                  study and is causing you extra trouble in your daily life you might consider getting yourself more
                  acquainted with the National Disability Insurance Scheme (NDIS) and Specialist Disability
                  Accommodation (SDA).
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Inappropriate housing can make life difficult and Specialist Disability Accommodation (SDA) could be a
                  good opportunity for you to look for more suitable housing which is designed specially to suit your
                  personal needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <SectionSeparator className="bottom-0" />
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="space-y-4">
              {/* What is SDA */}
              <AccordionItem value="what-is-sda" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xl font-semibold">What is Specialist Disability Accommodation?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                      <Image
                        src="/house-image/1.webp"
                        alt="Specialist Disability Accommodation Example"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Specialist Disability Accommodation (SDA) refers to accommodation and purpose-built houses for
                        people who require specialist housing solutions in the National Disability Insurance Scheme
                        (NDIS).
                      </p>
                      <p className="text-muted-foreground">
                        Specialist disability accommodation (SDA) is specially designed or modified to suit the needs of
                        people with disability who have 'extreme functional impairment' or 'very high support needs'.
                      </p>
                      <p className="text-muted-foreground">
                        This includes assisting with the delivery of supports that cater for their extreme functional
                        impairment or very high support needs. SDA does not refer to the support services, but the homes
                        in which these are delivered.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Is SDA for everyone */}
              <AccordionItem value="sda-for-all" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-xl font-semibold">Is SDA a housing for all people with disability?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-6 pt-4">
                    <p className="text-muted-foreground">
                      It is important to note that SDA is not housing for all people with a disability.
                    </p>
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <p className="text-lg font-medium mb-2">Key Statistics</p>
                      <p className="text-muted-foreground">
                        The NDIA expects that around 6% of participants will meet the requirements for SDA funding.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Who are eligible */}
              <AccordionItem value="eligibility" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/10">
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-xl font-semibold">Who are eligible for SDA?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-4">
                      <h4 className="font-medium text-lg">People with Extreme Functional Impairment</h4>
                      <p className="text-muted-foreground">
                        Even with home modifications or assistive technology, they still need support with their daily
                        activities such as:
                      </p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Getting in and out of bed</li>
                        <li>Getting dressed</li>
                        <li>Moving around</li>
                        <li>Preparing meals</li>
                        <li>Accessing the community</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-lg">People with Very High Support Needs</h4>
                      <p className="text-muted-foreground">This applies to people who:</p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Cannot have their personal care needs met by informal support like family and friends</li>
                        <li>Have spent a long time in Residential Age Care or Group homes</li>
                        <li>Have behaviors that may pose a risk to themselves or others</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Eligibility Criteria */}
              <AccordionItem value="eligibility-criteria" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xl font-semibold">How to determine SDA eligibility criteria?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      NDIA relies on the advice and professional judgement of allied health practitioners to determine
                      whether NDIS participants receive funding for Specialist Disability Accommodation (SDA), and the
                      type and level of this funding.
                    </p>
                    <p className="text-muted-foreground">
                      A housing assessment from an allied health professional familiar with the SDA rules and specialist
                      assessment report will assist to determine whether or not the person meets the SDA eligibility
                      criteria. If the person does not have an 'extreme functional impairment' or 'very high support
                      needs' then they are unlikely to be eligible for SDA.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* SDA Payments */}
              <AccordionItem value="sda-payments" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <Wallet className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-xl font-semibold">How SDA Payments Work?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      SDA payments are made by NDIS to SDA providers for the cost of housing a person with an extreme
                      functional impairment or very high support needs. The payment is for the actual property and is
                      separated from the cost of support.
                    </p>
                    <p className="text-muted-foreground">
                      SDA payments is indicated as a 'capital support' in your NDIS Plan. You can also see information
                      about the SDA dwelling type, SDA Design Category and the location funded in your NDIS Plan.
                    </p>
                    <p className="text-muted-foreground">
                      When you have signed a tenancy or occupancy agreement with your SDA provider and moved into your
                      SDA property, the NDIS will make SDA payments directly to the provider of the SDA.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Design Categories */}
              <AccordionItem value="design-categories" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/10">
                      <Building className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-xl font-semibold">What are SDA design categories?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                    <Card className="bg-primary/5">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-background">
                            <Home className="h-5 w-5 text-primary" />
                          </div>
                          <h4 className="font-medium">Basic design</h4>
                        </div>
                        <div className="space-y-2">
                          <p className="text-muted-foreground text-sm">
                            Housing without specialist design features but with a location or other features that cater
                            for the needs of people with disability and assist with the delivery of support services.
                          </p>
                          <p className="text-muted-foreground text-sm">
                            This type of SDA is for existing housing and is for participants who would like to remain in
                            their current group home.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-secondary/5">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-background">
                            <Users className="h-5 w-5 text-secondary" />
                          </div>
                          <h4 className="font-medium">Improved liveability design</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Housing that has been designed to improve 'liveability' for people with Sensory, Intellectual
                          or Cognitive Impairment.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-accent/5">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-background">
                            <Building2 className="h-5 w-5 text-accent" />
                          </div>
                          <h4 className="font-medium">Fully accessible design</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Housing that has been designed to for people with significant physical impairment. This can
                          include wheelchair users.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 md:col-span-2 lg:col-span-1">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-background">
                            <Shield className="h-5 w-5 text-primary" />
                          </div>
                          <h4 className="font-medium">Robust design</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Housing that has been designed for people with complex behaviours and may be a risk for
                          themselves or community. This type of housings is usually designed with safeguards, secure
                          windows and doors, laminated glass and soundproof.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-secondary/5 md:col-span-2 lg:col-span-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-background">
                            <Accessibility className="h-5 w-5 text-secondary" />
                          </div>
                          <h4 className="font-medium">High physical support design</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Housing that has been designed to incorporate a high level of physical access provision for
                          people with significant physical impairment and requiring very high levels of support.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Building Types */}
              <AccordionItem value="building-types" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xl font-semibold">What are SDA building types?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                    <Card className="bg-primary/5">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-background">
                            <Building className="h-5 w-5 text-primary" />
                          </div>
                          <h4 className="font-medium">Apartments</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Self-contained units occupying only part of a larger residential building. Apartments are
                          typically classified as Building Class 2 under the Building Code of Australia.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-secondary/5">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-background">
                            <Home className="h-5 w-5 text-secondary" />
                          </div>
                          <h4 className="font-medium">Duplexes, Villas and Townhouses</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Separate but semi-attached properties within a single land or area. The dwellings will be
                          separated from one or more adjoining dwellings by a fire-resisting wall. Each villa, duplex or
                          townhouse must have a separate and reasonably accessible entry.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-accent/5">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-background">
                            <Building2 className="h-5 w-5 text-accent" />
                          </div>
                          <h4 className="font-medium">Houses</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Detached low-rise dwellings with garden or courtyard areas. To be a house, the dwelling must
                          be located on a separate piece of land and must not share a wall, roof, entry area, driveway,
                          car parking or outdoor area with any dwelling other than an additional villa, townhouse,
                          duplex with no more than one resident.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-primary/5 md:col-span-1 lg:col-span-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-background">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <h4 className="font-medium">Group homes</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Houses that are enrolled or will be enrolled to house four or five long-term residents.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-secondary/5 md:col-span-1">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-background">
                            <LayoutGrid className="h-5 w-5 text-secondary" />
                          </div>
                          <h4 className="font-medium">Larger dwellings</h4>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Properties enrolled or will be enrolled to house more than five long-term residents.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Sensory and Cognitive Impairment */}
              <AccordionItem value="impairment-types" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <Brain className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-xl font-semibold">What is Sensory and Cognitive Impairment?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-4">
                      <h4 className="font-medium text-lg">Sensory Impairments</h4>
                      <p className="text-muted-foreground">
                        When one of your senses is no longer normal and it includes:
                      </p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Sight</li>
                        <li>Hearing</li>
                        <li>Smell</li>
                        <li>Touch</li>
                        <li>Taste</li>
                        <li>Spatial Awareness Impairment</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-lg">Cognitive Impairment</h4>
                      <p className="text-muted-foreground">
                        When a person has trouble remembering, learning new things, concentrating, or making decisions
                        that affect their everyday life. This may include:
                      </p>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Alzheimer's</li>
                        <li>Down Syndrome</li>
                        <li>Dyslexia</li>
                        <li>Psychosis</li>
                        <li>Intellectual impairments</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Rent Contribution */}
              <AccordionItem value="rent-contribution" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/10">
                      <Wallet className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-xl font-semibold">What is a Reasonable Rent Contribution?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      SDA funding is paid directly to your SDA provider. In addition to your SDA funding, SDA pricing
                      assumes the SDA tenant pays a Reasonable Rent Contribution (RRC) to SDA Provider which comprises:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>25% of Disability Support Pension, plus</li>
                      <li>100% of Commonwealth Rent Assistance</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* EDEN Housing Help */}
              <AccordionItem value="eden-housing-help" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <HeartHandshake className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xl font-semibold">How EDEN Housing could help me with my SDA?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-4">
                      <h4 className="font-medium text-lg">Property Services</h4>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Specific EDEN Housing Accommodation</li>
                        <li>Renting SDA property</li>
                        <li>Purchasing your own SDA Property</li>
                        <li>Building your own SDA and customising your new home to meet your individual needs</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-medium text-lg">Support Services</h4>
                      <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Test your Eligibility for SDA</li>
                        <li>Undertake SDA Eligibility Assessments</li>
                        <li>Develop your Housing Preferences</li>
                        <li>Prepare your Housing Plan</li>
                        <li>Submitting your SDA Application</li>
                        <li>Developing your Knowledge around SDA</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <SectionSeparator className="bottom-0" />
      </section>

      {/* What's Next Section */}
      <section className="relative py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What's Next?</h2>

            <div className="space-y-6">
              {/* Current Housing Issues */}
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10 mt-1">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">
                        I have a Disability and I am not happy with my Current Housing
                      </h3>
                      <p className="text-muted-foreground">
                        If you have a disability and inappropriate housing is preventing you from living your daily
                        life. If you have difficulty participating in communities and accessing your work or study due
                        to your current housing features and you are considering to build your knowledge around
                        Specialist Disability Accommodation SDA and how National Disability Insurance NDIS could assist
                        you with your disability housing, the following resource could help you decide where and how to
                        start your SDA journey.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Link
                          href="/resources/sda-toolkit"
                          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          EDEN Housing SDA Toolkit
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-2 text-sm font-medium text-primary hover:bg-primary/10"
                        >
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Considering SDA Plan */}
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-secondary/10 mt-1">
                      <ClipboardCheck className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">I am considering to get SDA in my Plan</h3>
                      <p className="text-muted-foreground">
                        If you are in the process of SDA application and you need more information about your SDA
                        Eligibility. If you want to know what documents and evidence you need to get SDA funding in your
                        plan and who can assist you with developing your plans and reports, the following resources
                        could help you with your SDA funding.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Link
                          href="/resources/sda-pathways"
                          className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/90"
                        >
                          <ArrowRight className="mr-2 h-4 w-4" />
                          EDEN Housing SDA Pathway
                        </Link>
                        <Link
                          href="/resources/sda-eligibility"
                          className="inline-flex items-center justify-center rounded-md border border-secondary px-6 py-2 text-sm font-medium text-secondary hover:bg-secondary/10"
                        >
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          EDEN Housing SDA Eligibility Test
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Already Have SDA Plan */}
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-accent/10 mt-1">
                      <CheckCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">I already have SDA in my Plan</h3>
                      <p className="text-muted-foreground">
                        If you already have SDA funding in your plan and you want to make the most of your SDA payments.
                        If SDA payments are included in your Plan, you might consider looking into SDA properties that
                        are already built or finding the best match who you could live with in SDA property. You also
                        might want to find out whether SDA payments could provide you with a pathway to home ownership.
                        Or you may want to go further and would like to talk to developers and SDA providers who could
                        work with you to build your own customised housing to best suit your needs.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Link
                          href="/about/signature-housing"
                          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
                        >
                          <BuildingIcon className="mr-2 h-4 w-4" />
                          EDEN Signature Housing
                        </Link>
                        <Link
                          href="/services/sda-vacancies"
                          className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-2 text-sm font-medium text-accent hover:bg-accent/10"
                        >
                          <Search className="mr-2 h-4 w-4" />
                          EDEN Housing SDA Vacancies
                        </Link>
                        <Link
                          href="/resources/sda-ownership"
                          className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-2 text-sm font-medium text-accent hover:bg-accent/10"
                        >
                          <Key className="mr-2 h-4 w-4" />
                          EDEN Housing SDA Ownership
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <SectionSeparator className="bottom-0" />
      </section>

      {/* Custom CTA Section */}
      <CTASection 
        title="Discover Your SDA Housing Options"
        description="Our team can help you navigate the SDA application process and find the perfect housing solution that meets your specific needs and preferences."
        primaryButtonText="Contact Our SDA Experts"
        primaryButtonLink="/contact"
        secondaryButtonText="View SDA Vacancies"
        secondaryButtonLink="/services/sda-vacancies"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="EDEN Housing SDA accommodation"
        footerText="Want to learn more about support services? Check our"
        footerLinkText="SIL Guide"
        footerLinkHref="/resources/about-sil"
      />
    </>
  )
}

