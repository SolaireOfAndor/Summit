import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { ServiceCard } from "@/components/features/service-card"
import Link from "next/link"
import Image from "next/image"
import { 
  Heart, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  HandHeart,
  Home,
  Activity,
  Utensils,
  ShoppingCart,
  Sparkles,
  Phone,
  Calendar,
  Target,
  Smile,
  Coffee,
  Shield
} from "lucide-react"

export const metadata: Metadata = {
  title: "Drop-in Support Services | Summit NDIS Community Support",
  description: "Professional drop-in support services including assistance with daily life and self-care. Flexible NDIS support to help you maintain independence and wellbeing in your community.",
  keywords: "drop-in support, NDIS support services, daily living assistance, self-care support, community support, personal care, domestic assistance, Summit",
  openGraph: {
    title: "Drop-in Support Services | Summit",
    description: "Flexible NDIS support services to help you live independently in your community",
    type: "website",
    images: [
      {
        url: "/header/page-header-12.webp",
        width: 1200,
        height: 630,
        alt: "Summit drop-in support services"
      }
    ]
  }
}

const supportServices = [
  {
    title: "Assistance with Daily Life",
    subtitle: "Everyday Living Support",
    description: "Professional support with daily living tasks including domestic assistance, meal preparation, shopping, and household management to help you maintain independence.",
    icon: Home,
    href: "/drop-in-support/assistant-with-daily-life",
    features: [
      "Meal planning and preparation",
      "Light domestic cleaning",
      "Shopping and errands",
      "Household organization",
      "Personal care assistance",
      "Community access support"
    ],
    color: "bg-[hsl(var(--light-orange))]",
    image: "/house-image/4.webp"
  },
  {
    title: "Assistance with Self-Care",
    subtitle: "Personal Care & Wellbeing",
    description: "Dignified personal care support including hygiene assistance, grooming, medication support, and health management to maintain your wellbeing and confidence.",
    icon: Sparkles,
    href: "/drop-in-support/assistant-with-self-care",
    features: [
      "Personal hygiene assistance",
      "Grooming and dressing support",
      "Medication reminders",
      "Health appointment support",
      "Exercise and mobility assistance",
      "Emotional wellbeing support"
    ],
    color: "bg-[hsl(var(--lighter-orange))]",
    image: "/house-image/7.webp"
  }
]

const benefits = [
  {
    title: "Flexible Scheduling",
    description: "Support when you need it, from a few hours to regular ongoing assistance",
    icon: Clock
  },
  {
    title: "Qualified Staff",
    description: "Experienced, trained, and compassionate support workers",
    icon: Users
  },
  {
    title: "Person-Centered",
    description: "Support tailored to your individual needs, goals, and preferences",
    icon: Target
  },
  {
    title: "Community Focus",
    description: "Helping you stay connected and engaged in your local community",
    icon: Heart
  },
  {
    title: "Dignity & Respect",
    description: "All support provided with dignity, respect, and cultural sensitivity",
    icon: Shield
  },
  {
    title: "Goal Achievement",
    description: "Support focused on helping you achieve your NDIS goals",
    icon: Activity
  }
]

const howItWorks = [
  {
    step: "1",
    title: "Initial Assessment",
    description: "We discuss your needs, goals, and preferences to create a personalized support plan",
    icon: Coffee
  },
  {
    step: "2",
    title: "Support Planning",
    description: "Develop a flexible schedule and support approach that fits your lifestyle",
    icon: Calendar
  },
  {
    step: "3",
    title: "Service Delivery",
    description: "Receive high-quality support from our trained and experienced team",
    icon: HandHeart
  },
  {
    step: "4",
    title: "Ongoing Review",
    description: "Regular check-ins to ensure your support continues to meet your changing needs",
    icon: CheckCircle2
  }
]

export default function DropInSupportPage() {
  return (
    <>
      <PageHero
        title="Drop-in Support Services"
        description="Flexible, person-centered support services to help you live independently in your community. From daily living assistance to personal care support, we're here when you need us."
        backgroundPattern="grid"
        alignment="center"
        className="bg-gradient-to-br from-[hsl(var(--light-orange))] to-[hsl(var(--lighter-orange))]"
        heroImage={{
          src: "/header/page-header-12.webp",
          alt: "Support worker assisting participant with daily activities"
        }}
        ctaText="Get Support Today"
        ctaHref="/contact"
      />

      {/* Overview Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Drop-in support overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Flexible Support
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
              Support When You Need It
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
              Our drop-in support services provide flexible, professional assistance to help you maintain 
              your independence and achieve your goals. Whether you need regular support or occasional 
              assistance, we adapt to your schedule and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow bg-[hsl(var(--pure-white))]">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">{benefit.title}</h3>
                  <p className="text-[hsl(var(--body))] text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SectionSeparator variant="primary" className="bottom-0" />
      </section>

      {/* Support Services Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Drop-in support services">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Our Services
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
              Comprehensive Drop-in Support Services
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Our professional support services are designed to help you maintain independence while 
              providing the assistance you need to live comfortably and confidently.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {supportServices.map((service, index) => (
              <Card key={index} className={`shadow-xl overflow-hidden ${service.color}`}>
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Service Info */}
                  <div className="lg:col-span-2 p-8 bg-[hsl(var(--pure-white))]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[hsl(var(--heading))] mb-1">{service.title}</h3>
                        <p className="text-[hsl(var(--primary))] font-medium mb-4">{service.subtitle}</p>
                        <p className="text-[hsl(var(--body))] leading-relaxed mb-6">{service.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">What We Help With:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                                <span className="text-[hsl(var(--body))] text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                          <Link href={service.href}>
                            Learn More About This Service
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:col-span-1 relative min-h-[300px]">
                    <Image
                      src={service.image}
                      alt={`${service.title} support service`}
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

      {/* How It Works Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="How drop-in support works">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Getting Started
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
              How Our Drop-in Support Works
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Starting your support journey is simple. We work with you to understand your needs 
              and create a flexible support plan that fits your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))] h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="relative">
                      <div className="mx-auto w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      {index < howItWorks.length - 1 && (
                        <div className="hidden lg:block absolute top-6 -right-6 w-12 h-px bg-[hsl(var(--primary))]/20" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 w-fit mx-auto">
                        <step.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <h4 className="font-semibold text-[hsl(var(--heading))]">{step.title}</h4>
                      <p className="text-[hsl(var(--body))] text-sm">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))] shadow-md">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Start Your Support Journey
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10">
                <Link href="/drop-in-support/assistant-with-daily-life">
                  Learn About Daily Life Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <SectionSeparator variant="accent" className="bottom-0" />
      </section>

      {/* Eligibility & Funding Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Eligibility and funding">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                NDIS Funding
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                Eligibility & NDIS Funding
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Our drop-in support services are available through your NDIS plan under Core Support funding.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[hsl(var(--primary))]" />
                    Who Can Access These Services?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2"></div>
                    <span className="text-[hsl(var(--body))] text-sm">NDIS participants with Core Support funding</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2"></div>
                    <span className="text-[hsl(var(--body))] text-sm">People requiring assistance with daily living tasks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2"></div>
                    <span className="text-[hsl(var(--body))] text-sm">Individuals seeking to maintain independence at home</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2"></div>
                    <span className="text-[hsl(var(--body))] text-sm">Those who need flexible, person-centered support</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[hsl(var(--primary))]" />
                    Core Support Funding
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2"></div>
                    <span className="text-[hsl(var(--body))] text-sm">Assistance with Daily Life category</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2"></div>
                    <span className="text-[hsl(var(--body))] text-sm">Assistance with Self-Care category</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2"></div>
                    <span className="text-[hsl(var(--body))] text-sm">Flexible funding that adapts to your needs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2"></div>
                    <span className="text-[hsl(var(--body))] text-sm">No geographic restrictions within our service area</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Smile className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">
                      Ready to Get Started?
                    </h3>
                    <p className="text-[hsl(var(--body))] mb-4">
                      Contact us today to discuss how our drop-in support services can help you achieve 
                      your goals and live more independently. Our team will work with you to create a 
                      support plan that fits your needs and budget.
                    </p>
                    <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                      <Link href="/contact">
                        Contact Our Support Team
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
} 