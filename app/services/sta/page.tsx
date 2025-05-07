import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Home, Calendar, CheckCircle2, Battery, Sparkles } from "lucide-react"

const features = [
  {
    title: "Flexible Stays",
    description:
      "Book stays from a few days up to a few weeks, perfect for respite care or trying out supported living.",
    icon: Clock,
  },
  {
    title: "Purpose-Built Spaces",
    description: "Modern, accessible accommodations designed to meet various support needs and requirements.",
    icon: Home,
  },
  {
    title: "Scheduled Support",
    description: "Planned support services to ensure your stay is comfortable and meets your needs.",
    icon: Calendar,
  },
]

const purposes = [
  {
    title: "Respite Care",
    description: "Short breaks for both participants and carers",
    icon: Battery,
  },
  {
    title: "Trial Living",
    description: "Experience supported living before making a long-term commitment",
    icon: Home,
  },
  {
    title: "Skills Development",
    description: "Practice independent living skills in a supported environment",
    icon: Sparkles,
  },
]

export default function STAPage() {
  return (
    <>
      <PageHero
        title="Short Term Accommodation"
        description="Flexible short-stay options providing respite care and supported living experiences."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "Services", href: "/services" },
          { title: "Eden Housing", href: "/services/eden-housing" },
          { title: "STA", href: "/services/sta" },
        ]}
        heroImage={{
            src: "/header/page-header-8.webp",
            alt: "EDEN Short Term Accommodation facility showing welcoming and accessible spaces",
        }}
      />

      {/* Introduction Section */}
      <section className="relative py-12 md:py-16 bg-background">
        <SectionSeparator variant="primary" className="top-0" />
        <div className="container px-12 sm:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Short Term Accommodation (STA) provides flexible, short-stay options for NDIS participants who need
                temporary supported accommodation. Whether you're looking for respite care, wanting to try supported
                living, or need a short-term stay while transitioning between homes, our STA services offer comfortable
                and fully supported accommodation options.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our properties are staffed by experienced support workers who ensure your stay is comfortable, safe, and
                aligned with your goals and needs. With various locations and support levels available, we can
                accommodate different preferences and requirements.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/house-image/1.webp"
                alt="EDEN STA Living Space"
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
              <h2 className="text-2xl md:text-3xl font-bold">Available Options</h2>
              <p className="text-muted-foreground">
                Our STA properties offer various accommodation types to suit your needs:
              </p>
              <div className="grid gap-4">
                {[
                  "Private rooms in shared houses",
                  "Self-contained units",
                  "Fully accessible apartments",
                  "Support staff available 24/7",
                  "Shared living spaces and facilities",
                  "Accessible bathrooms and amenities",
                ].map((option) => (
                  <div key={option} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{option}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/house-image/5.webp"
                alt="EDEN STA Accommodation Types"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="relative py-12 md:py-16 bg-muted/30">
        <SectionSeparator variant="secondary" className="top-0" />
        <SectionSeparator variant="secondary" className="bottom-0" />
        <div className="container px-12 sm:px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {purposes.map((purpose) => (
              <Card key={purpose.title} className="relative group hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <purpose.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {purpose.title}
                    </h3>
                    <p className="text-muted-foreground">{purpose.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Book Your Short Term Stay?"
        description="Whether you need respite care, want to try supported living, or are looking for a short-term stay, our STA services provide comfortable and fully supported accommodation options tailored to your needs."
        primaryButtonText="Enquire Now"
        primaryButtonLink="/contact"
        secondaryButtonText="View Available Properties"
        secondaryButtonLink="/services/sda-vacancies"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="EDEN Short Term Accommodation facility showing welcoming and accessible spaces"
        footerText="Want to learn more about short term accommodation? Check our"
        footerLinkText="STA Guide"
        footerLinkHref="/resources/about-sta"
      />
    </>
  )
}

