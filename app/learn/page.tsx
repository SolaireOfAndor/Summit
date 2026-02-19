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
  BookOpen, 
  Users, 
  Heart, 
  Clock, 
  Building2,
  CheckCircle2, 
  ArrowRight,
  Calendar,
  Star,
  Target,
  MapPin,
  Phone,
  DollarSign,
  Lightbulb,
  Info,
  HelpCircle,
  FileText,
  Compass,
  GraduationCap,
  Brain,
  Shield,
  TrendingUp,
  Home
} from "lucide-react"

export const metadata: Metadata = {
  title: "NDIS Learning Hub | SIL, SDA & Disability Support Guides — Summit",
  description: "Expert educational resources about Supported Independent Living (SIL), SDA, NDIS funding & disability support services. Trusted guides for participants, families & support coordinators in NSW.",
  keywords: "NDIS learning hub, what is SIL, SIL guide, SDA information, NDIS funding explained, disability support education, SIL vs SDA, choosing SIL provider, NDIS participant resources",
  openGraph: {
    title: "NDIS Learning Hub | SIL, SDA & Disability Support Guides — Summit",
    description: "Expert educational resources about Supported Independent Living (SIL), SDA, NDIS funding & disability support. Trusted guides for participants and families.",
    type: "website",
    images: [
      {
        url: "/header/page-header-5.webp",
        width: 1200,
        height: 630,
        alt: "Summit NDIS learning hub — SIL, SDA and disability support guides"
      }
    ]
  },
  alternates: {
    canonical: "/learn",
  },
}

const learningTopics = [
  {
    title: "NDIS Funding Guide",
    subtitle: "Understanding Your Budget & Categories",
    description: "Comprehensive guide to NDIS funding including budget categories, plan management options, and strategies for maximizing your funding effectively.",
    icon: DollarSign,
    href: "/learn/funding",
    difficulty: "Beginner Friendly",
    readTime: "15 min read",
    topics: [
      "Core Support Budget",
      "Capital Support Budget", 
      "Capacity Building Budget",
      "Plan Management Options",
      "Budget Maximization Tips"
    ],
    color: "bg-[hsl(var(--light-orange))]",
    image: "/png/1.webp"
  },
  {
    title: "About SDA",
    subtitle: "Specialist Disability Accommodation",
    description: "Everything you need to know about SDA including design categories, eligibility requirements, and how to access purpose-built accessible housing.",
    icon: Building2,
    href: "/learn/about-sda",
    difficulty: "Comprehensive",
    readTime: "12 min read",
    topics: [
      "SDA Design Categories",
      "Eligibility Requirements",
      "Application Process",
      "Quality Standards",
      "Available Properties"
    ],
    color: "bg-[hsl(var(--lighter-orange))]",
    image: "/house-image/8.webp"
  },
  {
    title: "About SIL",
    subtitle: "Supported Independent Living",
    description: "Learn about SIL services, how they work with SDA, support levels available, and how to access daily living assistance that helps you live independently.",
    icon: Users,
    href: "/learn/about-sil",
    difficulty: "Intermediate", 
    readTime: "10 min read",
    topics: [
      "Support Service Types",
      "24/7 Support Options",
      "Independent Living Skills",
      "Community Participation",
      "Personal Care Services"
    ],
    color: "bg-[hsl(var(--background))]",
    image: "/house-image/6.webp"
  },
  {
    title: "About MTA",
    subtitle: "Medium Term Accommodation",
    description: "Understanding MTA services for transitional periods, emergency accommodation, and short to medium-term housing solutions with support.",
    icon: Clock,
    href: "/learn/about-mta",
    difficulty: "Beginner Friendly",
    readTime: "8 min read",
    topics: [
      "Transition Support",
      "Emergency Accommodation",
      "Support Services Included",
      "Duration & Flexibility",
      "Planning Your Next Step"
    ],
    color: "bg-[hsl(var(--pure-white))]",
    image: "/house-image/5.webp"
  },
  {
    title: "About STA",
    subtitle: "Short Term Accommodation",
    description: "Learn about respite accommodation services, emergency support options, and how STA helps participants and families with short-term needs.",
    icon: Calendar,
    href: "/learn/about-sta", 
    difficulty: "Beginner Friendly",
    readTime: "6 min read",
    topics: [
      "Respite Care Options",
      "Emergency Accommodation",
      "Family Support",
      "Booking & Flexibility",
      "Quality & Safety"
    ],
    color: "bg-[hsl(var(--light-orange))]",
    image: "/house-image/9.webp"
  }
]

const learningBenefits = [
  {
    title: "Make Informed Decisions",
    description: "Understanding your options helps you make the best choices for your situation",
    icon: Lightbulb
  },
  {
    title: "Maximize Your NDIS Plan",
    description: "Learn how to get the most value from your NDIS funding and supports",
    icon: Target
  },
  {
    title: "Know Your Rights",
    description: "Understand your rights and responsibilities as an NDIS participant",
    icon: Shield
  },
  {
    title: "Plan for the Future",
    description: "Make informed decisions about your long-term support and accommodation needs",
    icon: TrendingUp
  },
  {
    title: "Navigate Services",
    description: "Understand how different NDIS services work together to support your goals",
    icon: Compass
  },
  {
    title: "Build Confidence",
    description: "Knowledge empowers you to advocate for yourself and achieve your goals",
    icon: Brain
  }
]

const quickStart = [
  {
    title: "New to NDIS?",
    description: "Start with our funding guide to understand how NDIS works",
    icon: GraduationCap,
    href: "/learn/funding"
  },
  {
    title: "Looking for Housing?", 
    description: "Learn about SDA for specialized accessible accommodation",
    icon: Home,
    href: "/learn/about-sda"
  },
  {
    title: "Need Daily Support?",
    description: "Discover SIL services for independent living assistance",
    icon: Heart,
    href: "/learn/about-sil"
  },
  {
    title: "Temporary Accommodation?",
    description: "Explore MTA and STA options for short-term needs",
    icon: Clock,
    href: "/learn/about-mta"
  }
]

export default function LearnPage() {
  return (
    <>
      <PageHero
        title="Learn About NDIS Services"
        description="Comprehensive educational resources to help you understand NDIS supports, funding, and accommodation options. Empower yourself with knowledge to make informed decisions about your support journey."
        backgroundPattern="grid"
        alignment="center"
        className="bg-gradient-to-br from-[hsl(var(--light-orange))] to-[hsl(var(--lighter-orange))]"
        heroImage={{
          src: "/header/page-header-5.webp",
          alt: "Educational resources and NDIS learning materials"
        }}
        ctaText="Start Learning"
        ctaHref="#learning-topics"
      />

      {/* Why Learn Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Why learn about NDIS">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Knowledge is Power
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
              Why Learn About NDIS Services?
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
              Understanding your NDIS options empowers you to make informed decisions, maximize your funding, 
              and access the right supports to achieve your goals. Knowledge gives you confidence and control 
              over your support journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningBenefits.map((benefit, index) => (
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

      {/* Quick Start Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Quick start guide">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Quick Start
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
              Where Should You Start?
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Not sure where to begin? Use these quick start guides based on your current situation and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {quickStart.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all bg-[hsl(var(--pure-white))] border-2 border-transparent hover:border-[hsl(var(--primary))]/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">{item.title}</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">{item.description}</p>
                  <Button asChild variant="outline" size="sm" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10">
                    <Link href={item.href}>
                      Start Here
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SectionSeparator variant="secondary" className="bottom-0" />
      </section>

      {/* Learning Topics Section */}
      <section id="learning-topics" className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Learning topics">
        <div className="container px-8 sm:px-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
              Educational Resources
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
              Comprehensive Learning Topics
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
              Dive deep into specific NDIS topics with our detailed guides. Each resource is designed to give you 
              practical knowledge you can use to make informed decisions about your supports.
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {learningTopics.map((topic, index) => (
              <Card key={index} className={`shadow-xl overflow-hidden ${topic.color}`}>
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Topic Info */}
                  <div className="lg:col-span-2 p-8 bg-[hsl(var(--pure-white))]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <topic.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-xs border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                            {topic.difficulty}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {topic.readTime}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-[hsl(var(--heading))] mb-1">{topic.title}</h3>
                        <p className="text-[hsl(var(--primary))] font-medium mb-4">{topic.subtitle}</p>
                        <p className="text-[hsl(var(--body))] leading-relaxed mb-6">{topic.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">What You'll Learn:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {topic.topics.map((topicItem, topicIndex) => (
                              <div key={topicIndex} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                                <span className="text-[hsl(var(--body))] text-sm">{topicItem}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                          <Link href={topic.href}>
                            Start Learning
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:col-span-1 relative min-h-[300px]">
                    <Image
                      src={topic.image}
                      alt={`${topic.title} educational content`}
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
        <SectionSeparator variant="accent" className="bottom-0" />
      </section>

      {/* Help Section */}
      <section className="relative py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Need help learning">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] hover:bg-[hsl(var(--primary-hover))]">
              Need Help?
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
              Have Questions About NDIS Services?
            </h2>
            <p className="text-[hsl(var(--body))] text-lg leading-relaxed mb-8">
              Our experienced team is here to help you understand your options and make informed decisions. 
              Get personalized guidance about NDIS services, funding, and support options.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Speak to Our Team</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Get personalized advice about your NDIS journey and support options</p>
                  <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">View Available Properties</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Browse our current accommodation options and find your perfect home</p>
                  <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10">
                    <Link href="/properties">Browse Properties</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">
                      Still Have Questions?
                    </h3>
                    <p className="text-[hsl(var(--body))] mb-4">
                      Learning about NDIS services can feel overwhelming at first. Our team has years of experience 
                      helping people navigate their NDIS journey. We're here to provide clear, practical advice 
                      tailored to your specific situation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                        <Link href="/contact">
                          <Phone className="mr-2 h-4 w-4" />
                          Get Personalized Help
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10">
                        <Link href="/about">
                          Learn About Summit
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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