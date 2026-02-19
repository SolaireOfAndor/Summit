import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { silLocations, getLocationBySlug } from "@/lib/sil-locations"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import {
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
  Heart,
  Shield,
  Clock,
  Users,
  Home,
  Activity,
  Target,
  Stethoscope,
  Brain,
  Accessibility,
  HelpCircle,
  Train,
} from "lucide-react"

type PageProps = {
  params: Promise<{ location: string }>
}

export const generateStaticParams = async () => {
  return silLocations.map((location) => ({
    location: location.slug,
  }))
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { location: slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    return { title: "Location Not Found" }
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: `SIL provider ${location.name}, Supported Independent Living ${location.name}, NDIS SIL ${location.name}, 24/7 SIL care ${location.region}, disability support ${location.name}, SIL vacancies ${location.name}`,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: "website",
      locale: "en_AU",
      siteName: "Summit",
    },
    twitter: {
      card: "summary_large_image",
      title: location.metaTitle,
      description: location.metaDescription,
    },
    alternates: {
      canonical: `/sil/${location.slug}`,
    },
  }
}

const specialistServices = [
  {
    title: "Acquired Brain Injury (ABI)",
    description:
      "Specialist SIL support for participants with acquired brain injury, including cognitive rehabilitation support, memory aids, and structured daily routines.",
    icon: Brain,
  },
  {
    title: "Spinal Cord Injury",
    description:
      "Expert care for participants with spinal cord injuries, including pressure care, mobility support, and coordination with medical specialists.",
    icon: Stethoscope,
  },
  {
    title: "Physical Disability & High Intensity",
    description:
      "Complex care and high-intensity support for participants with physical disabilities requiring comprehensive daily assistance.",
    icon: Accessibility,
  },
  {
    title: "Psychosocial & Mental Health",
    description:
      "Supportive SIL environments for participants with psychosocial disabilities, focused on recovery, routine, and community connection.",
    icon: Heart,
  },
  {
    title: "Intellectual Disability",
    description:
      "Person-centred SIL support for participants with intellectual disabilities, building life skills and fostering independence at each person's own pace.",
    icon: Target,
  },
]

const silCoreServices = [
  {
    title: "24/7 Rostered Care",
    description: "Round-the-clock support tailored to your individual Roster of Care (ROC)",
    icon: Clock,
  },
  {
    title: "Personal Care Support",
    description: "Assistance with hygiene, medication management, and health monitoring",
    icon: Heart,
  },
  {
    title: "Household & Daily Living",
    description: "Help with cooking, cleaning, laundry, and maintaining a comfortable home",
    icon: Home,
  },
  {
    title: "Community Access",
    description: "Support to participate in social activities, events, and local community life",
    icon: Users,
  },
  {
    title: "Skills Development",
    description: "Building independence through life skills training aligned with your NDIS goals",
    icon: Activity,
  },
  {
    title: "Safety & Wellbeing",
    description: "Ensuring a safe, supportive environment with on-call emergency support",
    icon: Shield,
  },
]

const SILLocationPage = async ({ params }: PageProps) => {
  const { location: slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://summitsda.com.au/sil/${location.slug}/#localbusiness`,
    name: `Summit — Supported Independent Living ${location.name}`,
    description: location.metaDescription,
    url: `https://summitsda.com.au/sil/${location.slug}`,
    image: "https://summitsda.com.au/og-image.jpg",
    priceRange: "NDIS Funded",
    areaServed: {
      "@type": "Place",
      name: `${location.name}, ${location.region}`,
    },
    parentOrganization: {
      "@id": "https://summitsda.com.au/#organization",
    },
    serviceType: "Supported Independent Living",
    category: "Disability Support Services",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://summitsda.com.au",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Supported Independent Living (SIL)",
        item: "https://summitsda.com.au/supported-accommodations/sil",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `SIL ${location.name}`,
        item: `https://summitsda.com.au/sil/${location.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        title={location.heroTitle}
        description={location.heroDescription}
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "SIL Services", href: "/supported-accommodations/sil" },
          { title: location.name, href: `/sil/${location.slug}` },
        ]}
        ctaText="Contact Us About SIL"
        ctaHref="/contact"
      />

      {/* About SIL in this Location */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--background))]"
        aria-label={`About SIL in ${location.name}`}
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Supported Independent Living
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Personalised SIL in {location.name}
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                {location.localContent}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10">
                      <MapPin className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--heading))]">
                      Nearby Suburbs We Serve
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbySuburbs.map((suburb) => (
                      <Badge
                        key={suburb}
                        variant="secondary"
                        className="bg-[hsl(var(--light-orange))] text-[hsl(var(--heading))]"
                      >
                        {suburb}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10">
                      <Train className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--heading))]">
                      Transport & Accessibility
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] text-sm leading-relaxed">
                    {location.transportInfo}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Card className="bg-[hsl(var(--lighter-orange))] border-[hsl(var(--primary))]/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Stethoscope className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">
                        Local Healthcare Access
                      </h3>
                      <p className="text-[hsl(var(--body))] text-sm leading-relaxed">
                        {location.landmarks}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <SectionSeparator variant="primary" className="bottom-0" />
      </section>

      {/* Core SIL Services */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]"
        aria-label="SIL Support Services"
      >
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              24/7 Support Services
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Our SIL Services in {location.name}
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Summit provides comprehensive 24/7 Supported Independent Living with rostered care
              personalised to each participant&apos;s individual Roster of Care (ROC).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {silCoreServices.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                      <service.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-[hsl(var(--heading))]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* Specialist Support */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--background))]"
        aria-label="Specialist SIL Support"
      >
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Specialist Expertise
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              Specialist SIL Support in {location.name}
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Summit specialises in delivering expert SIL care for participants with complex
              support needs. Our trained support workers provide tailored, person-centred
              assistance for a range of conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specialistServices.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))] border-l-4 border-l-[hsl(var(--primary))]"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                      <service.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-base text-[hsl(var(--heading))]">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SectionSeparator variant="accent" className="bottom-0" />
      </section>

      {/* Why Choose Summit in This Location */}
      <section
        className="relative py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/10"
        aria-label={`Why choose Summit in ${location.name}`}
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] hover:bg-[hsl(var(--primary-hover))]">
                Why Summit
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Why Choose Summit for SIL in {location.name}
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Summit takes a participant-first approach to Supported Independent Living. We
                don&apos;t assign you to a vacancy — we work with you to find the right home
                and build the right support team.
              </p>
            </div>

            <div className="space-y-4">
              {location.whyChoosePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--primary))] flex-shrink-0 mt-0.5" />
                  <p className="text-[hsl(var(--body))]">{point}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))] shadow-md"
              >
                <Link href="/properties/sil-vacancies">
                  <Home className="mr-2 h-5 w-5" />
                  View SIL Vacancies
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10"
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Speak to Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <SectionSeparator variant="primary" className="bottom-0" />
      </section>

      {/* FAQ Section */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--light-orange))]"
        aria-label={`SIL FAQs for ${location.name}`}
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                <HelpCircle className="w-3 h-3 mr-1" />
                Frequently Asked Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                SIL Questions for {location.name}
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {location.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-[hsl(var(--pure-white))] rounded-lg border px-4"
                >
                  <AccordionTrigger className="text-left text-[hsl(var(--heading))] font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[hsl(var(--body))] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* Other Locations */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--background))]"
        aria-label="Other SIL locations"
      >
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              More Locations
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
              SIL Services Across Sydney & NSW
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Summit provides Supported Independent Living across Sydney and regional NSW.
              Explore our other service areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {silLocations
              .filter((loc) => loc.slug !== location.slug)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/sil/${loc.slug}`}
                  className="group"
                  aria-label={`View SIL services in ${loc.name}`}
                  tabIndex={0}
                >
                  <Card className="h-full hover:shadow-md transition-all bg-[hsl(var(--pure-white))] group-hover:border-[hsl(var(--primary))]/30">
                    <CardContent className="p-4 flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <div>
                        <p className="font-medium text-[hsl(var(--heading))] text-sm">
                          {loc.name}
                        </p>
                        <p className="text-[hsl(var(--body))] text-xs">{loc.region}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[hsl(var(--primary))] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-[hsl(var(--body))] text-sm mb-4">
              Don&apos;t see your area listed? Summit provides SIL across all of NSW.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10"
            >
              <Link href="/contact">
                Contact Us About Your Location
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default SILLocationPage
