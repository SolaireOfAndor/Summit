import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Home, CalendarCheck, Users2, HeartHandshake, CheckCircle2, MapPin } from "lucide-react"
import CTASection from "@/components/sections/cta-section"

const features = [
  {
    title: "Flexible Duration",
    description:
      "Stay for periods typically ranging from 3 months up to 12 months while waiting for permanent housing solutions.",
    icon: Clock,
  },
  {
    title: "Purpose-Built Spaces",
    description: "Modern, accessible accommodations designed to meet various support needs and requirements.",
    icon: Home,
  },
  {
    title: "Transition Support",
    description: "Comprehensive support to help you prepare for your move to permanent accommodation.",
    icon: CalendarCheck,
  },
]

const supportServices = [
  {
    title: "24/7 Support Available",
    description: "Access to round-the-clock care and assistance when needed",
    icon: Users2,
  },
  {
    title: "Personalized Care Plans",
    description: "Tailored support plans designed around your specific needs and goals",
    icon: HeartHandshake,
  },
  {
    title: "Location Options",
    description: "Properties available in various locations to suit your preferences",
    icon: MapPin,
  },
]

export default function MTAPage() {
  return (
    <>
      <PageHero
        title="Medium Term Accommodation"
        description="Flexible housing solutions while you transition to permanent accommodation or wait for home modifications."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "Services", href: "/services" },
          { title: "Eden Housing", href: "/services/eden-housing" },
          { title: "MTA", href: "/services/mta" },
        ]}
        heroImage={{
          src: "/header/page-header-11.webp",
          alt: "EDEN Medium Term Accommodation facility showing modern accessible living spaces",
        }}
      />

      {/* Introduction Section */}
      <section className="relative py-12 md:py-16 bg-background">
        <SectionSeparator variant="primary" className="top-0" />
        <div className="container px-12 sm:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Medium Term Accommodation (MTA) provides a transitional housing solution for NDIS participants who are
                waiting for permanent housing arrangements or home modifications to be completed. Our MTA options offer
                comfortable, accessible living spaces with the support you need during this transition period.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're waiting for your SDA property to be ready or for modifications to your existing home, our
                MTA services ensure you have a safe and supportive environment during this interim period.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/house-image/8.webp"
                alt="EDEN MTA Living Space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-12 md:py-16 bg-muted/30">
        <SectionSeparator variant="secondary" className="top-0" />
        <SectionSeparator variant="secondary" className="bottom-0" />
        <div className="container px-12 sm:px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="relative group hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Types Section */}
      <section className="relative py-12 md:py-16 bg-background">
        <SectionSeparator variant="accent" className="top-0" />
        <div className="container px-12 sm:px-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Accommodation Options</h2>
              <p className="text-muted-foreground">
                Our MTA properties come in various configurations to suit different needs and circumstances:
              </p>
              <div className="grid gap-4">
                {["Self-contained apartments", "Shared supported accommodation", "Villa units", "Modified houses"].map(
                  (option) => (
                    <div key={option} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{option}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/house-image/9.webp"
                alt="EDEN MTA Accommodation Types"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="relative py-12 md:py-16 bg-muted/30">
        <SectionSeparator variant="secondary" className="top-0" />
        <SectionSeparator variant="secondary" className="bottom-0" />
        <div className="container px-12 sm:px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Support Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {supportServices.map((service) => (
              <Card key={service.title} className="relative group hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Medium Term Accommodation?"
        description="Contact us to discuss your MTA needs and find out about our available properties. We'll help you find the right transitional housing solution that meets your requirements."
        primaryButtonText="Enquire Now"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Properties"
        secondaryButtonLink="/services/sda-vacancies"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="EDEN Medium Term Accommodation interior view"
        footerText="Want to learn more about MTA? Check our"
        footerLinkText="MTA Guide"
        footerLinkHref="/resources/about-mta"
      />
    </>
  )
}

