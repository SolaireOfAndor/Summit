import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { properties } from "@/lib/properties"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { 
  Building2, 
  Users, 
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Home,
  Star
} from "lucide-react"

// Add metadata for the main properties page
export const metadata: Metadata = {
  title: "Available Properties | Summit",
  description: "Find your perfect home from our range of accessible and supported living options."
}



const propertyTypes = [
  {
    title: "SDA Properties",
    subtitle: "Specialist Disability Accommodation",
    description: "Purpose-built accessible housing designed specifically for people with extreme functional impairment, featuring specialized accessibility features and assistive technology.",
    icon: Building2,
    href: "/properties/sda-vacancies",
    features: [
      "Purpose-built accessible design",
      "High physical support features", 
      "Assistive technology integration",
      "Robust construction standards"
    ],
    color: "bg-[hsl(var(--light-orange))]",
    image: "/house-image/1.webp"
  },
  {
    title: "SIL Properties", 
    subtitle: "Supported Independent Living",
    description: "Properties with daily living support services to help you live independently, with personalized assistance tailored to your individual needs and goals.",
    icon: Users,
    href: "/properties/sil-vacancies",
    features: [
      "24/7 support available",
      "Personal care assistance",
      "Community participation support", 
      "Skill development programs"
    ],
    color: "bg-[hsl(var(--lighter-orange))]",
    image: "/house-image/3.webp"
  }
]

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        title="Available Properties"
        description="Find your perfect home from our range of accessible and supported living options. Browse our SDA and SIL properties across NSW."
        backgroundPattern="dots"
        alignment="center"
        className="bg-gradient-to-br from-[hsl(var(--light-orange))] to-[hsl(var(--lighter-orange))]"
        heroImage={{
          src: "/header/page-header-7.webp",
          alt: "Available properties overview showing accessible housing options"
        }}
        ctaText="Browse All Properties"
        ctaHref="#property-types"
      />



      {/* Property Types Section */}
      <section id="property-types" className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Property types">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Browse Properties
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
              Find Your Perfect Property
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Explore our range of accessible properties designed to meet your specific needs. 
              From specialist disability accommodation to supported independent living options.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {propertyTypes.map((type, index) => (
              <Card key={index} className={`shadow-xl overflow-hidden ${type.color}`}>
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Property Type Info */}
                  <div className="lg:col-span-2 p-8 bg-[hsl(var(--pure-white))]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <type.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">

                        <h3 className="text-xl font-bold text-[hsl(var(--heading))] mb-1">{type.title}</h3>
                        <p className="text-[hsl(var(--primary))] font-medium mb-4">{type.subtitle}</p>
                        <p className="text-[hsl(var(--body))] leading-relaxed mb-6">{type.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">Key Features:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {type.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                                <span className="text-[hsl(var(--body))] text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                          <Link href={type.href}>
                            Browse {type.title}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:col-span-1 relative min-h-[300px]">
                    <Image
                      src={type.image}
                      alt={`${type.title} example property`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Contact for properties">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] hover:bg-[hsl(var(--primary-hover))]">
              Need Help?
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed mb-8">
              Our experienced team can help you find the perfect property that meets your specific needs. 
              We're here to guide you through the entire process.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Speak to Our Team</h3>
                  <p className="text-[hsl(var(--body))] text-sm">Get personalized help finding your perfect property</p>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Quality Guaranteed</h3>
                  <p className="text-[hsl(var(--body))] text-sm">All properties meet NDIS quality and safety standards</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))] shadow-md">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Our Team
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10">
                <Link href="/supported-accommodations">
                  Learn About Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}

