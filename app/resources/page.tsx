import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { 
  ArrowRight, 
  FileText, 
  FileCheck, 
  Users, 
  Home, 
  ClipboardCheck,
  Book,
  Lightbulb,
  Building,
  Key,
  CheckCircle2,
  Compass,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Resources | Eden Ability",
  description: "Discover our comprehensive resource library with guides, tools, and information about SDA and SIL services to help you navigate disability support options.",
}

const resourceCards = [
  {
    title: "About SDA",
    description: "Learn about Specialist Disability Accommodation, how it works, and who it's designed for.",
    icon: Building,
    isPrimary: true,
    href: "/resources/about-sda",
    image: "/house-image/10.webp",
  },
  {
    title: "About SIL",
    description: "Understand Supported Independent Living services and how they can enhance your independence.",
    icon: Home,
    isPrimary: false,
    href: "/resources/about-sil",
    image: "/house-image/7.webp",
  },
  {
    title: "SDA Eligibility Test",
    description: "Learn about eligibility criteria for SDA funding and how to prepare your application.",
    icon: CheckCircle2,
    isPrimary: true,
    href: "/resources/sda-eligibility",
    image: "/house-image/3.webp",
  },
  {
    title: "SDA Toolkit",
    description: "Access our comprehensive set of tools and resources to help with your SDA journey.",
    icon: FileCheck,
    isPrimary: false,
    href: "/resources/sda-toolkit",
    image: "/house-image/6.webp",
  },
  {
    title: "SDA Pathways",
    description: "Explore different pathways to accessing Specialist Disability Accommodation.",
    icon: Compass,
    isPrimary: true,
    href: "/resources/sda-pathways",
    image: "/house-image/4.webp",
  },
  {
    title: "SDA Ownership",
    description: "Understand the options for SDA property ownership and investment.",
    icon: Key,
    isPrimary: false,
    href: "/resources/sda-ownership",
    image: "/house-image/2.webp",
  },
]

const featuredResources = [
  {
    title: "Complete SDA Guide",
    description: "Our comprehensive guide to understanding Specialist Disability Accommodation and navigating the NDIS process.",
    icon: Book,
    type: "primary",
    href: "/resources/about-sda",
  },
  {
    title: "SIL Support Models",
    description: "Learn about different Supported Independent Living models and find the one that best suits your needs.",
    icon: Users,
    type: "secondary",
    href: "/resources/about-sil",
  },
  {
    title: "Application Checklist",
    description: "A detailed checklist to help you prepare a successful SDA application with all required documentation.",
    icon: ClipboardCheck,
    type: "accent",
    href: "/resources/sda-toolkit",
  },
]

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        description="Comprehensive guides and tools to help you understand disability accommodation and support options."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        heroImage={{
          src: "/header/page-header-4.webp",
          alt: "Person reviewing disability resources and documents",
        }}
      />

      {/* Introduction Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white" aria-label="Introduction">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]" />
        <div className="container relative px-8 sm:px-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Lightbulb className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Knowledge Center</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Empowering Through Knowledge</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our resource library is designed to help you navigate disability accommodation options, 
              understand funding pathways, and make informed decisions about your support needs.
              Whether you're looking for information about SDA, SIL, or application processes, you'll find 
              comprehensive guides and tools here.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-muted/30" aria-label="Featured Resources">
        <SectionSeparator variant="primary" className="top-0" />
        <div className="container px-8 sm:px-24">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Featured Resources</Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Essential Guides</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              These comprehensive resources are designed to help you understand key aspects of disability support and accommodation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredResources.map((resource) => (
              <Card 
                key={resource.title} 
                className={cn(
                  "group hover:shadow-md transition-all overflow-hidden",
                  resource.type === "primary" && "hover:border-primary",
                  resource.type === "secondary" && "hover:border-secondary",
                  resource.type === "accent" && "hover:border-accent"
                )}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className={cn(
                      "p-3 rounded-xl transition-colors",
                      resource.type === "primary" && "bg-primary/10 group-hover:bg-primary/20",
                      resource.type === "secondary" && "bg-secondary/10 group-hover:bg-secondary/20",
                      resource.type === "accent" && "bg-accent/10 group-hover:bg-accent/20"
                    )}>
                      <resource.icon className={cn(
                        "w-8 h-8",
                        resource.type === "primary" && "text-primary",
                        resource.type === "secondary" && "text-secondary",
                        resource.type === "accent" && "text-accent"
                      )} />
                    </div>
                    <h3 className={cn(
                      "text-xl font-semibold transition-colors",
                      resource.type === "primary" && "group-hover:text-primary",
                      resource.type === "secondary" && "group-hover:text-secondary",
                      resource.type === "accent" && "group-hover:text-accent"
                    )}>
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground">{resource.description}</p>
                    <Button 
                      asChild 
                      variant="link" 
                      className={cn(
                        resource.type === "primary" && "text-primary",
                        resource.type === "secondary" && "text-secondary",
                        resource.type === "accent" && "text-accent"
                      )}
                    >
                      <Link href={resource.href}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-muted/30 to-white" aria-label="All Resources">
        <SectionSeparator variant="secondary" className="top-0" />
        <div className="container px-8 sm:px-24">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Resource Library</Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Explore All Resources</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Browse our complete collection of resources to find the information you need for your disability support journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceCards.map((resource) => (
              <Card 
                key={resource.title} 
                className={cn(
                  "group overflow-hidden hover:shadow-md transition-all",
                  resource.isPrimary ? "hover:border-primary" : "hover:border-secondary"
                )}
              >
                <div className="relative h-48 bg-muted">
                  <Image 
                    src={resource.image} 
                    alt={resource.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={cn(
                    "absolute top-4 left-4 text-white text-xs font-semibold py-1 px-2 rounded-full",
                    resource.isPrimary ? "bg-primary" : "bg-secondary"
                  )}>
                    Resource
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className={cn(
                      "mb-4 p-2.5 w-fit rounded-lg transition-colors",
                      resource.isPrimary ? "bg-primary/10 group-hover:bg-primary/20" : "bg-secondary/10 group-hover:bg-secondary/20"
                    )}>
                      <resource.icon className={cn(
                        "h-6 w-6",
                        resource.isPrimary ? "text-primary" : "text-secondary"
                      )} />
                    </div>
                    <h3 className={cn(
                      "text-xl font-semibold mb-2 transition-colors",
                      resource.isPrimary ? "group-hover:text-primary" : "group-hover:text-secondary"
                    )}>
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {resource.description}
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      className={cn(
                        "w-full",
                        resource.isPrimary 
                          ? "group-hover:border-primary group-hover:text-primary"
                          : "group-hover:border-secondary group-hover:text-secondary"
                      )}
                    >
                      <Link href={resource.href}>
                        View Resource
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Need Help Understanding Your Options?"
        description="Our team is ready to guide you through the resources and help you understand which options best suit your unique needs and goals."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="Eden staff member helping a client understand housing options"
        footerText="Looking for our available properties? View our"
        footerLinkText="SDA Vacancies"
        footerLinkHref="/services/sda-vacancies"
      />
    </>
  )
} 