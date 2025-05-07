import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import Image from "next/image"
import Link from "next/link"
import CTASection from "@/components/sections/cta-section"
import {
  Users2,
  Compass,
  HeartHandshake,
  ArrowRight,
  SmartphoneCharging,
  Sparkles,
  LayoutDashboard,
  ShipWheelIcon as Wheelchair,
  ShirtIcon,
  Tv,
  MapPin,
  Flower2,
  Lock,
  Sofa,
  Lightbulb,
  Wind,
  Shield,
  Building2,
  Clock,
  UserCircle2,
  Utensils,
  Brain,
  Activity,
  MessageSquare,
  Stethoscope,
  AlertTriangle,
  GraduationCap,
  Heart,
  ClipboardList,
  Users,
  Coffee,
  Palmtree,
  Palette,
  FileCheck,
  PhoneCall,
  MoveRight,
} from "lucide-react" 

const approaches = [
  {
    title: "As a Navigator",
    description:
      "Our expertise is used to match you with the right people who are of a similar age and have similar interests to ensure the best long-term fit for you.",
    icon: Compass,
  },
  {
    title: "As a Supporter",
    description:
      "Our experienced staff support you with regular and planned activities and encourage you to become a part of community whilst retaining your independence.",
    icon: HeartHandshake,
  },
  {
    title: "As a Match Maker",
    description:
      "Our group homes are built and designed to meet different levels of disability support needs. We'll match you with the right Accommodations and the ideal Homes to ensure a constructive environment for you.",
    icon: Users2,
  },
]

const features = [
  { icon: SmartphoneCharging, label: "Smart Homes" },
  { icon: Sparkles, label: "Modern and Deluxe" },
  { icon: LayoutDashboard, label: "Open Plan Designs" },
  { icon: Wheelchair, label: "Accessible Homes" },
  { icon: ShirtIcon, label: "Built-In Wardrobes" },
  { icon: Tv, label: "Entertainment Space" },
  { icon: MapPin, label: "Easy Access Locations" },
  { icon: Flower2, label: "Gardening Space" },
  { icon: Lock, label: "Secure Doors" },
  { icon: Sofa, label: "Separated Living Space" },
  { icon: Lightbulb, label: "Good Lighting" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Shield, label: "Safe Neighbourhood" },
  { icon: Building2, label: "Close to Community Centres" },
  { icon: Clock, label: "24/7 Support" },
]

const staffSkills = [
  { icon: UserCircle2, label: "Personal Care" },
  { icon: Utensils, label: "Meal Plans" },
  { icon: MessageSquare, label: "Communication Needs" },
  { icon: Brain, label: "Skill Building" },
  { icon: Activity, label: "Independence and Confidence Building" },
  { icon: Wheelchair, label: "Wheelchair and Mobility Support" },
  { icon: Shield, label: "Challenging Behaviour" },
  { icon: Brain, label: "Mental Health" },
  { icon: Brain, label: "Intellectual Disability" },
  { icon: Shield, label: "Behaviour Support" },
  { icon: Activity, label: "Diabetes Management" },
  { icon: Stethoscope, label: "AHP Communication" },
  { icon: AlertTriangle, label: "Choking Risks" },
  { icon: GraduationCap, label: "Skill Development" },
  { icon: Heart, label: "Caring and Supportive" },
]

const activities = [
  { icon: ClipboardList, label: "Shared Household Chores and Tasks" },
  { icon: Users, label: "Social Outings with Housemates" },
  { icon: Utensils, label: "Cooking and Preparing Meals" },
  { icon: Users, label: "BBQs with Family and Friends" },
  { icon: Tv, label: "Watching Movies & Listening to Music" },
  { icon: Users, label: "Social and Recreational Activities" },
  { icon: Coffee, label: "Visiting Local Clubs, Cafes and Shopping Centres" },
  { icon: Building2, label: "Participating in Local Community Centre Programs" },
  { icon: Palmtree, label: "Visiting Local Parks, Beaches and Restaurants" },
  { icon: Palette, label: "Participating in Creative Projects in Art Studios" },
]

const steps = [
  {
    title: "Fill in an Expression of Interest Form",
    description:
      "Click the button below to start filling the expression of interest form. This helps us ensure we get the right home for you as fast as possible.",
    icon: FileCheck,
  },
  {
    title: "EDEN Independence Will Contact You",
    description:
      "We take the time to understand your individual needs and once a home that meets your criteria becomes available EDEN Independence will contact you.",
    icon: PhoneCall,
  },
  {
    title: "Move In!",
    description:
      "It is the time to start living in your desired home now. EDEN housing will work with you, your family and your carers to have smooth transition to your new Home.",
    icon: MoveRight,
  },
]

export default function SharedAccommodationsPage() {
  return (
    <>
      <PageHero
        title="Shared Supported Accommodation"
        description="Experience the perfect balance of independence and support in our thoughtfully designed shared living spaces."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        heroImage={{
          src: "/header/page-header-2.webp",
          alt: "EDEN Shared Supported Accommodation",
        }}
        breadcrumbs={[
          { title: "Services", href: "/services" },
          { title: "Eden Independence", href: "/services/eden-independence" },
          { title: "Shared Accommodations", href: "/services/shared-accommodations" },
        ]}
      />

      {/* Introduction Section with teal accents */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-accent/5 to-white" aria-label="Introduction">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]" />
        <div className="container relative px-12 sm:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                EDEN Independence provides a selection of Supported Independent Shared Houses for Groups of two or more.
                Our Shared Supported Arrangements are designed to support participants as they develop their
                independence and engage in a variety of daily programs and participate in social and recreational
                activities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At EDEN shared supported homes whilst your choices and privacy are respected, we ensure you are feeling
                safe and happy and having access to the best quality support available within the disability sector.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At EDEN shared homes, we go beyond to ensure you feel living in a place that you can call home and the
                independence and confidence you were expecting are achieved.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/4.webp"
                alt="EDEN Shared Supported Accommodation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section with purple accents */}
      <section className="relative py-12 md:py-16 bg-secondary/[0.02]" aria-label="Our Approach">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#692b74_1px,transparent_1px),linear-gradient(-45deg,#692b74_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.02]" />
        <SectionSeparator variant="accent" className="top-0" />
        <SectionSeparator variant="secondary" className="bottom-0" />
        <div className="container relative px-12 sm:px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            EDEN Shared Supported Accommodation Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {approaches.map((approach) => (
              <Card key={approach.title} className="relative group hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <approach.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {approach.title}
                    </h3>
                    <p className="text-muted-foreground">{approach.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with gold accents */}
      <section
        className="relative py-12 md:py-16 bg-gradient-to-b from-white to-accent/[0.02]"
        aria-label="Home Features"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#caae3a_1px,transparent_1px),linear-gradient(to_bottom,#caae3a_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]" />
        <SectionSeparator variant="accent" className="top-0" />
        <div className="container relative px-12 sm:px-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">EDEN Shared Supported Homes Features</h2>
            <div className="text-center space-y-4 mb-12">
              <p className="text-lg text-muted-foreground">Take a moment and think about;</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>– What Home features do you like to have in your future accommodation?</li>
                <li>– Which daily activities do you enjoy most?</li>
                <li>– What kind of support do you need in your daily life?</li>
              </ul>
              <p className="text-muted-foreground">
                Based on what you're looking for, what kind of environment makes you happier and who do you like to
                spend your time with, we'll match you to the best accommodation that meets your needs. We'll make the
                process of choosing and moving to a new home easier for you.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                <Image
                  src="/54.webp"
                  alt="EDEN Shared Home Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                <Image
                  src="/64.webp"
                  alt="EDEN Shared Home Exterior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-8 ">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">General Features</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {features.map((feature) => (
                      <div
                        key={feature.label}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <feature.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Staff Skills</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {staffSkills.map((skill) => (
                      <div
                        key={skill.label}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <skill.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm">{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Regular Activities</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {activities.map((activity) => (
                      <div
                        key={activity.label}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <activity.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm">{activity.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section with teal accents */}
      <section className="relative py-12 md:py-16 bg-primary/5" aria-label="Application Process">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]" />
        <SectionSeparator variant="primary" className="top-0" />
        <SectionSeparator variant="primary" className="bottom-0" />
        <div className="container relative px-12 sm:px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">I want to live Here! Where do I Start?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <Card key={step.title} className="relative group hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

