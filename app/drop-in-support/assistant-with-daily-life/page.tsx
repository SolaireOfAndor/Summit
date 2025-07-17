import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { ServiceCard } from "@/components/features/service-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { 
  Heart, 
  Clock, 
  CheckCircle2, 
  UserCheck,
  Lightbulb,
  Calendar,
  Target,
  Activity,
  Coffee,
  Utensils,
  ShoppingCart,
  Car,
  Building,
  Handshake,
  BookOpen,
  Award,
  GraduationCap,
  HelpCircle,
  ArrowRight,
  Home,
  Users,
  Shield,
  Sparkles,
  HeartHandshake,
  Plus,
  ChefHat,
  Briefcase,
  User
} from "lucide-react"

export const metadata: Metadata = {
  title: "Assistance with Daily Life Services | Professional NDIS Support | SummitSDA",
  description: "Expert assistance with daily life activities through NDIS funding. Professional support workers help with household tasks, personal care, community access, and independent living skills development.",
  keywords: "assistance with daily life, NDIS daily living support, household tasks assistance, personal care support, community access, independent living skills, disability support services, NDIS participant support",
  openGraph: {
    title: "Assistance with Daily Life Services | SummitSDA",
    description: "Professional NDIS support for daily living activities, household management, and independent living skills development.",
    type: "website",
    images: [
      {
        url: "/header/page-header-10.webp",
        width: 1200,
        height: 630,
        alt: "Support worker assisting person with daily living activities"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Assistance with Daily Life Services | SummitSDA",
    description: "Expert NDIS support for daily living, household tasks, and independent living skills",
  },
  alternates: {
    canonical: "/drop-in-support/assistant-with-daily-life"
  }
}

const dailyLifeServices = [
  {
    icon: Home,
    title: "Household Management",
    description: "Support with cleaning, laundry, meal preparation, and maintaining a safe, comfortable living environment.",
    href: "#household-support"
  },
  {
    icon: Utensils,
    title: "Meal Planning & Preparation",
    description: "Assistance with nutritious meal planning, cooking skills, grocery shopping, and dietary management.",
    href: "#meal-support"
  },
  {
    icon: ShoppingCart,
    title: "Community Access",
    description: "Support for shopping, banking, attending appointments, and accessing community services and activities.",
    href: "#community-access"
  },
  {
    icon: User,
    title: "Personal Care",
    description: "Assistance with personal hygiene, grooming, medication management, and health appointments.",
    href: "#personal-care"
  },
  {
    icon: GraduationCap,
    title: "Life Skills Development",
    description: "Building independence through learning budgeting, time management, communication, and problem-solving skills.",
    href: "#life-skills"
  },
  {
    icon: HeartHandshake,
    title: "Social Participation",
    description: "Support to engage in social activities, maintain relationships, and build community connections.",
    href: "#social-support"
  }
]

const benefits = [
  {
    icon: Target,
    title: "Person-Centered Approach",
    description: "Tailored support plans that focus on your individual goals, preferences, and aspirations for independent living."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Support when you need it most, with flexible hours that work around your routine and commitments."
  },
  {
    icon: Award,
    title: "Skilled Support Workers",
    description: "Experienced, qualified staff who understand disability support and are passionate about empowering independence."
  },
  {
    icon: Shield,
    title: "Safe & Professional",
    description: "All staff are thoroughly screened, trained, and insured to provide safe, reliable support services."
  },
  {
    icon: Sparkles,
    title: "Skill Building Focus",
    description: "Support that teaches and empowers you to develop greater independence and confidence in daily activities."
  },
  {
    icon: Heart,
    title: "Dignity & Respect",
    description: "Support delivered with respect for your choices, privacy, and personal dignity at all times."
  }
]

export default function AssistantWithDailyLifePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Assistance with Daily Life"
        description="Professional NDIS support to help you live independently with confidence. Our experienced support workers provide personalized assistance with household tasks, personal care, and community participation."
        heroImage={{
          src: "/header/page-header-10.webp",
          alt: "Support worker helping person with daily living activities in a home setting"
        }}
        breadcrumbs={[
          { title: "Drop-in Support", href: "/drop-in-support" },
          { title: "Assistance with Daily Life", href: "/drop-in-support/assistant-with-daily-life" }
        ]}
        ctaText="Get Support Today"
        ctaHref="/contact"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="text-[hsl(var(--primary))] border-[hsl(var(--primary))]">
              NDIS Core Support
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))]">
              Empowering Independence Through Daily Living Support
            </h2>
            <p className="text-lg text-[hsl(var(--body))] leading-relaxed">
              Our assistance with daily life services help NDIS participants develop the skills and confidence needed 
              for independent living. From household management to community access, our qualified support workers 
              provide personalized assistance that respects your goals and promotes your independence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[hsl(var(--light-orange))]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))] mb-4">
              Our Daily Life Support Services
            </h2>
            <p className="text-lg text-[hsl(var(--body))] max-w-3xl mx-auto">
              Comprehensive support across all areas of daily living, designed to build your independence and confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyLifeServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                className="bg-[hsl(var(--pure-white))] hover:shadow-[0_8px_30px_0_hsl(var(--orange-shadow))]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))] mb-4">
              Why Choose SummitSDA for Daily Life Support?
            </h2>
            <p className="text-lg text-[hsl(var(--body))] max-w-3xl mx-auto">
              We provide more than just assistance – we empower you to achieve your goals and live life on your terms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-[hsl(var(--pure-white))] border-none shadow-[0_4px_24px_0_hsl(var(--orange-shadow))] hover:shadow-[0_8px_30px_0_hsl(var(--orange-shadow))] transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-[hsl(var(--primary))]" />
                  </div>
                  <CardTitle className="text-xl text-[hsl(var(--heading))]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] text-center leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Detailed Information Section */}
      <section className="py-16 bg-[hsl(var(--lighter-orange))]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))] mb-4">
                How Our Daily Life Support Works
              </h2>
              <p className="text-lg text-[hsl(var(--body))]">
                Understanding our approach to personalized daily living assistance.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="assessment" className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <UserCheck className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span className="font-semibold text-[hsl(var(--heading))]">Initial Assessment & Planning</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--body))] pt-4">
                  We begin with a comprehensive assessment of your current abilities, goals, and support needs. 
                  Together, we'll develop a personalized support plan that aligns with your NDIS goals and promotes 
                  your independence while respecting your preferences and lifestyle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="matching" className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Handshake className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span className="font-semibold text-[hsl(var(--heading))]">Support Worker Matching</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--body))] pt-4">
                  We carefully match you with support workers who have the right skills, experience, and personality 
                  to work well with you. Our team considers your cultural background, interests, and communication 
                  preferences to ensure a positive working relationship.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delivery" className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span className="font-semibold text-[hsl(var(--heading))]">Flexible Service Delivery</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--body))] pt-4">
                  Support is delivered at times that work for you, whether that's daily assistance, weekly support, 
                  or as-needed help. Our flexible approach means you can adjust your support as your needs and 
                  confidence levels change over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="review" className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span className="font-semibold text-[hsl(var(--heading))]">Ongoing Review & Adjustment</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(var(--body))] pt-4">
                  We regularly review your progress and adjust support as needed. As you develop new skills and 
                  confidence, we can reduce certain types of support while focusing on new areas that will further 
                  enhance your independence.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))] mb-4">
                Key Areas of Daily Life Support
              </h2>
              <p className="text-lg text-[hsl(var(--body))]">
                Comprehensive assistance across all aspects of independent living.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Household Management */}
              <Card className="bg-[hsl(var(--pure-white))] border-none shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center">
                      <Home className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--heading))]">Household Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Cleaning and organizing living spaces</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Laundry and clothing care</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Home maintenance and safety checks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Organizing household supplies and equipment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Personal Care */}
              <Card className="bg-[hsl(var(--pure-white))] border-none shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--heading))]">Personal Care Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Personal hygiene assistance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Medication management and reminders</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Health appointment support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Grooming and presentation assistance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Community Access */}
              <Card className="bg-[hsl(var(--pure-white))] border-none shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center">
                      <Building className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--heading))]">Community Access</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Shopping and errands assistance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Banking and financial tasks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Public transport training and support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Accessing community services and activities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Life Skills Development */}
              <Card className="bg-[hsl(var(--pure-white))] border-none shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-xl text-[hsl(var(--heading))]">Life Skills Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-[hsl(var(--body))]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Budgeting and money management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Time management and planning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Communication and social skills</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--primary))] flex-shrink-0" />
                      <span>Problem-solving and decision-making</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 bg-[hsl(var(--light-orange))]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--heading))]">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[hsl(var(--body))] leading-relaxed">
              Take the first step towards greater independence with our professional daily life support services. 
              Our experienced team is ready to work with you to create a support plan that meets your unique needs and goals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[hsl(var(--primary))]">1</span>
                </div>
                <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Contact Us</h3>
                <p className="text-[hsl(var(--body))] text-sm">Get in touch to discuss your support needs and goals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[hsl(var(--primary))]">2</span>
                </div>
                <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Assessment</h3>
                <p className="text-[hsl(var(--body))] text-sm">We'll assess your needs and create a personalized support plan</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[hsl(var(--primary))]">3</span>
                </div>
                <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Start Support</h3>
                <p className="text-[hsl(var(--body))] text-sm">Begin receiving tailored support to achieve your goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Transform Your Daily Living Experience"
        description="Join hundreds of NDIS participants who have gained confidence and independence through our professional daily life support services. Let our experienced team help you achieve your goals and live life on your terms."
        primaryButtonText="Start Your Journey"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More About Support"
        secondaryButtonLink="/learn/about-sil"
        imageSrc="/png/support-1120755_1920.jpg"
        mobileImageSrc="/png/thumbs-up-2649310_960_720.webp"
        imageAlt="Happy person with disability living independently with support"
        footerText="Want to understand more about NDIS support categories? Check our"
        footerLinkText="NDIS Guide"
        footerLinkHref="/learn/funding"
      />
    </main>
  )
} 