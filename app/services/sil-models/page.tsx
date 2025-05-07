import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import Image from "next/image"
import { Metadata } from "next"
import {
  Users2,
  Home,
  Clock,
  Wrench,
  CheckCircle2,
  MessageSquare,
  ArrowRightCircle,
  ArrowRight,
  Calendar,
  UserPlus,
  Settings,
  Building,
  MapPin,
  HeartHandshake,
  FileCheck,
  Pencil,
  Sparkles,
  HelpingHand,
  ClipboardList,
  Shield,
  Lightbulb,
  Compass,
  Star,
  Coffee,
  Heart,
  Leaf,
  HelpCircle,
  Home as HomeIcon,
  User,
  Clock3,
  Hammer,
  Award,
  Target,
  AlarmCheck,
} from "lucide-react"
import Link from "next/link"

// SEO metadata export
export const metadata: Metadata = {
  title: "SIL Models | EDEN Independence Supported Living Options",
  description: "Explore our range of Supported Independent Living (SIL) models including shared living, private rental support, drop-in support, and customized SIL homes.",
  keywords: "supported independent living, SIL, disability accommodation, NDIS, shared living, supported accommodation, independent living support",
}

const silModels = [
  {
    title: "Shared Living Arrangement",
    description:
      "24/7 supported accommodation in EDEN-owned properties, offering purpose-built homes with various bedroom configurations suitable for different care levels.",
    icon: Users2,
    href: "/services/shared-accommodations",
    features: ["24/7 Support", "Purpose-built Homes", "Shared Living"],
    image: "/header/page-header-12.webp",
    alt: "EDEN shared living accommodation with support staff and residents",
  },
  {
    title: "Private Rental Support",
    description:
      "Comprehensive support services for properties leased by families, with personalized care plans and professional staff management.",
    icon: HomeIcon,
    href: "/services/sil-models#private-rental",
    features: ["Family Managed", "Personalized Care", "Home Modifications"],
    image: "/header/page-header-13.webp",
    alt: "Support worker assisting client in family-leased accommodation",
  },
  {
    title: "Drop-in Support",
    description:
      "Flexible assistance in your own home, available 24/7 with varying levels of support to match your independence goals.",
    icon: Clock3,
    href: "/services/sil-models#drop-in",
    features: ["Flexible Hours", "Independent Living", "Personalized Care"],
    image: "/18.webp",
    alt: "Support worker providing drop-in assistance to client in their home",
  },
  {
    title: "Customized SIL Homes",
    description:
      "An innovative approach allowing participants and families to develop the right housing solution, tailored to specific needs and preferences.",
    icon: Hammer,
    href: "/services/sil-models#customized",
    features: ["Tailored Design", "Location Choice", "Matched Housemates"],
    image: "/house-image/9.webp",
    alt: "Design meeting for customized SIL housing solutions with participants and family",
  },
]

const privateRentalSupport = [
  {
    title: "24/7 Support Roster",
    description: "Developing comprehensive weekly rosters with quality support staff providing required assistance.",
    icon: AlarmCheck,
  },
  {
    title: "Personalized Programs",
    description:
      "Working closely with participants to develop routines and programs that match their lifestyle and goals.",
    icon: ClipboardList,
  },
  {
    title: "Matched Support Staff",
    description: "Providing highly trained and experienced support workers chosen to suit your specific needs.",
    icon: HeartHandshake,
  },
  {
    title: "Household Management",
    description: "Supporting daily life expenses, household costs, and personal expenses management.",
    icon: Settings,
  },
  {
    title: "Property Assistance",
    description: "Help with tenancy agreements, home modifications, and smart home technology installation.",
    icon: Building,
  },
]

const customizedSILSteps = [
  {
    title: "Location Selection",
    description:
      "Take a look at the announced locations and select the area that is the most suitable for you. Register your interest and be part of this exciting opportunity.",
    icon: Compass,
  },
  {
    title: "Meet Potential Housemates",
    description:
      "Meet other applicants and find your matches among people who have registered their interests. This helps identify sustainable matches for your future home.",
    icon: Users2,
  },
  {
    title: "Needs Assessment",
    description:
      "We'll have a conversation with you, your families, and future housemates to understand individual needs and make final decisions on housing features, location, and support levels.",
    icon: Lightbulb,
  },
  {
    title: "Development Process",
    description:
      "EDEN will manage the organization and development of your new home, keeping you informed throughout the process to ensure your satisfaction.",
    icon: Target,
  },
]

const customizedSILOutcomes = [
  {
    title: "Matched Housemates",
    description: "Find your sustainable match and like-minded housemates.",
    icon: HeartHandshake,
  },
  {
    title: "Location Choice",
    description: "Participate in your home site investigation and choose where to live.",
    icon: MapPin,
  },
  {
    title: "Custom Design",
    description: "The house will be designed specially to your taste and needs.",
    icon: Award,
  },
]

export default function SILModelsPage() {
  return (
    <>
      <PageHero
        title="EDEN Independence SIL Models"
        description="Our unique Supported Independent Living models give you more choice and control over your living options, helping you choose the type of support you need, when and where you need it."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        heroImage={{
          src: "/header/page-header-14.webp",
          alt: "EDEN Independence SIL Models"
        }}
        breadcrumbs={[
          { title: "Services", href: "/services" },
          { title: "Eden Independence", href: "/services/eden-independence" },
          { title: "SIL Models", href: "/services/sil-models" },
        ]}
      />

      {/* Introduction Section with teal accents */}
      <section className="relative py-6   md:py-12 bg-gradient-to-b from-primary/5 to-white" aria-label="Introduction">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]" />
        <div className="container relative px-6 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              EDEN Supported Independent Living Services offers a wide range of flexible supports and services,
              providing you with the opportunity to live the way you want. We help you to be independent, develop your
              living skills, connect with your community, and help you live the life you want.
            </p>
          </div>
        </div>
      </section>

      {/* SIL Models Grid with purple accents */}
      <section className="relative py-2 md:py-4 bg-white" aria-label="SIL Models">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#692b74_1px,transparent_1px),linear-gradient(-45deg,#692b74_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.02]" />
        <div className="container relative px-6 sm:px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-8 text-secondary">Our SIL Models</h2>
          <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-8 sm:mb-12">
            Explore our range of supported living options designed to match your unique needs and preferences, 
            from shared accommodation to customized housing solutions.
          </p>
          
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-2">
            {silModels.map((model) => (
              <Link
                key={model.title}
                href={model.href}
                className="group block"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg border-secondary/10 hover:border-primary bg-white overflow-hidden">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-secondary/5 group-hover:bg-primary/5 transition-colors"></div>
                    <Image
                      src={model.image}
                      alt={model.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col gap-4 sm:gap-6">
                      {/* Icon and Title */}
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-2.5 sm:p-3.5 rounded-xl bg-secondary/10 group-hover:bg-primary/10 transition-colors shrink-0">
                          <model.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary group-hover:text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
                            {model.title}
                          </h3>
                          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                            {model.description}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-2">
                        {model.features.map((feature) => (
                          <Badge 
                            key={feature} 
                            variant="secondary"
                            className="bg-secondary/5 hover:bg-secondary/10 text-secondary border border-secondary/20 text-xs xs:text-xs font-medium"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      {/* Arrow Icon */}
                      <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-secondary text-sm sm:text-base font-medium transition-colors group-hover:text-primary">
                        <span>Learn more</span>
                        <ArrowRightCircle className="w-4 h-4 sm:w-5 sm:h-5 transition-all group-hover:translate-x-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Living Section with gold accents */}
      <section
        className="relative py-12 md:py-24 bg-gradient-to-b from-white to-accent/[0.02]"
        id="shared-living"
        aria-label="Shared Living"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#caae3a_1px,transparent_1px),linear-gradient(to_bottom,#caae3a_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]" />
        <SectionSeparator variant="accent" className="top-0" />
        <div className="container relative px-6 sm:px-6 max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-2.5 rounded-xl bg-accent/10 shrink-0">
                  <Users2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Shared Living Arrangement</h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground">
                  This is a common Model of SIL in which the service provider owns the property. The accommodation is
                  owned or leased by EDEN Independence and can be rented by NDIS participants or self-funded individuals.
                </p>
                <div className="grid gap-4 sm:gap-6">
                  <Card>
                    <CardContent className="p-4 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">24/7 Support Available</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Our shared living arrangements provide round-the-clock support with staff members onsite all
                            day, every day.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Purpose-built Homes</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            We offer purpose-built homes with 2-5 bedrooms suitable for different levels of care,
                            categorized into Low, Moderate, and High Support need homes.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Trained Support Staff</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Our staff are highly trained to provide complex physical supports to maximize independence
                            with personal care, household decision making, and domestic duties.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center mt-6 sm:mt-8">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/services/shared-accommodations">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Image for Shared Living Section */}
            <div className="relative order-1 lg:order-2 h-56 sm:h-80 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/78.webp"
                alt="EDEN shared living accommodation with common area and support"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Private Rental Support Section with teal accents */}
      <section
        className="relative py-12 md:py-24 bg-primary/[0.02]"
        id="private-rental"
        aria-label="Private Rental Support"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]" />
        <SectionSeparator variant="primary" className="top-0" />
        <SectionSeparator variant="primary" className="bottom-0" />
        <div className="container relative px-6 sm:px-6 max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
            {/* Image for Private Rental Support Section */}
            <div className="relative h-56 sm:h-80 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/56.webp"
                alt="Family and participant discussing rental options with EDEN staff"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-2.5 rounded-xl bg-primary/10 shrink-0">
                  <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Private Rental Support</h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                In this model, Shared Supported Properties are leased by families of NDIS Participants, and EDEN
                Independence delivers 24/7 support. The support arrangements are managed and specified through cooperation
                with participants' families.
              </p>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                {privateRentalSupport.map((support, index) => (
                  <Card key={index} className="group transition-all hover:border-primary">
                    <CardContent className="p-4 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="p-2 sm:p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                          <support.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">{support.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">{support.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drop-in Support Section with purple accents */}
      <section className="relative py-12 md:py-24 bg-secondary/[0.02]" id="drop-in" aria-label="Drop-in Support">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#692b74_1px,transparent_1px),linear-gradient(-45deg,#692b74_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.02]" />
        <SectionSeparator variant="secondary" className="top-0" />
        <SectionSeparator variant="secondary" className="bottom-0" />
        <div className="container relative px-6 sm:px-6 max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-2.5 rounded-xl bg-secondary/10 shrink-0">
                  <Clock3 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Drop-in Support</h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground">
                  Drop-In Support Model assists people with disability to live independently in their own homes. We
                  provide you with support staff in your own home, and you can choose when and how much support you need.
                </p>
                <div className="grid gap-4 sm:gap-6">
                  <Card>
                    <CardContent className="p-4 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Flexible Support Options</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Our in-home assistance is available 24 hours a day, 7 days a week, with three levels of
                            support: Low, Moderate, or High Support need.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Personalized Staff Matching</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            We invest time in matching you with the right support worker who can work with you and help
                            you through your lifestyle, so you can live an independent life the way you want.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <HelpingHand className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <p className="font-medium text-sm sm:text-base">Comprehensive Support</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Our staff are highly trained to provide complex physical supports to maximize independence
                            with personal care, household decision making, and domestic duties.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            {/* Image for Drop-in Support Section */}
            <div className="relative order-1 lg:order-2 h-56 sm:h-80 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/42.webp"
                alt="Support worker assisting a participant in their own home"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customized SIL Homes Section with gold accents */}
      <section
        className="relative py-12 md:py-24 bg-gradient-to-b from-white to-accent/[0.02]"
        id="customized"
        aria-label="Customized SIL Homes"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#caae3a_1px,transparent_1px),linear-gradient(to_bottom,#caae3a_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]" />
        <SectionSeparator variant="accent" className="top-0" />
        <div className="container relative px-6 sm:px-6 max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-start">
            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-2.5 rounded-xl bg-accent/10 shrink-0">
                  <Hammer className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Customized SIL Homes</h2>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg text-muted-foreground">
                    EDEN Independence Specialists and NDIS Participants families work together to create and tailor the
                    home to the needs of the participants. This innovative SIL model allows participants and their
                    families to participate in developing the right housing and choosing the right supports.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    We understand the demand for shared supported living arrangements is high, and spaces are limited. Our
                    Innovative Customised SIL Model addresses the lack of appropriate housing by allowing participants to
                    help create their ideal living environment.
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg h-48 sm:h-72 lg:h-80">
                  <Image 
                    src="/40.webp"
                    alt="Collaborative design process for customized SIL homes"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Outcomes */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-semibold">Outcomes</h3>
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
                    {customizedSILOutcomes.map((outcome, index) => (
                      <Card key={index} className="group transition-all hover:border-primary">
                        <CardContent className="p-4 sm:pt-6">
                          <div className="flex sm:flex-col items-center sm:items-center sm:text-center gap-3 sm:gap-4">
                            <div className="p-2 sm:p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                              <outcome.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">{outcome.title}</h4>
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{outcome.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Steps */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold">The Customized SIL Journey</h3>
              <div className="grid gap-3 sm:gap-4">
                {customizedSILSteps.map((step, index) => (
                  <Card key={index} className="group transition-all hover:border-primary">
                    <CardContent className="p-4 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent/10 text-accent font-medium text-xs sm:text-sm shrink-0">
                          {index + 1}
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                            <h4 className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">{step.title}</h4>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="relative rounded-xl overflow-hidden mt-6 sm:mt-8 h-48 sm:h-80">
                <Image 
                  src="/50.webp"
                  alt="Completed customized SIL home with residents and family"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section with CTASection component */}
      
      <CTASection
        title="Ready to Explore Your SIL Options?"
        description="Let us help you find the perfect Supported Independent Living model that matches your unique needs, preferences, and goals for independent living."
        primaryButtonText="Contact Us Now"
        primaryButtonLink="/contact"
        secondaryButtonText="View SIL Vacancies"
        secondaryButtonLink="/services/sil-vacancies"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="EDEN Independence staff discussing living options with a client"
        footerText="Want to learn more about supported independent living? Check our"
        footerLinkText="SIL Guide"
        footerLinkHref="/resources/about-sil"
      />
    </>
  )
}

