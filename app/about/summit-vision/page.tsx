import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionSeparator } from "@/components/ui/section-separator"
import Link from "next/link"
import Image from "next/image"
import {
  Eye,
  Heart,
  Users,
  Search,
  MessageCircle,
  Home,
  CheckCircle2,
  Target,
  UserCheck,
  Lightbulb,
  Shield,
  HandHeart,
  Compass,
  Sparkles,
  Building2,
  Phone,
  XCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Summit Vision | Participant-First Approach to Disability Support & Housing",
  description:
    "Discover Summit's participant-first vision: we start with your needs, goals, and preferences — then find the right property and care to match. No fitting people into existing vacancies. Your life, your choice.",
  keywords:
    "Summit vision, participant-first approach, NDIS participant-centered care, disability housing NSW, SIL vision, person-centered support, NDIS goals, disability accommodation Sydney",
  openGraph: {
    title: "Summit Vision | Participant-First Disability Support",
    description:
      "Summit starts with you — not a vacancy list. We listen to your needs, find the right home, and build support around your life.",
    type: "website",
    images: [
      {
        url: "/header/page-header-5.webp",
        width: 1200,
        height: 630,
        alt: "Summit's participant-first vision for disability support and housing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Vision | Participant-First Disability Support",
    description:
      "Summit starts with you — not a vacancy list. We listen, find the right home, and build support around your life.",
  },
  alternates: {
    canonical: "/about/summit-vision",
  },
}

const visionPillars = [
  {
    icon: UserCheck,
    title: "You Come First",
    description:
      "Every decision starts with understanding who you are — your goals, preferences, routines, and aspirations. We never ask you to compromise on what matters most.",
    highlight: "Your goals shape our services",
  },
  {
    icon: Search,
    title: "The Right Home, Found For You",
    description:
      "Instead of showing you a vacancy list, we search for — or create — the living arrangement that genuinely fits your life. Location, housemates, accessibility, and lifestyle all factor in.",
    highlight: "Homes matched to lives",
  },
  {
    icon: HandHeart,
    title: "Support Built Around You",
    description:
      "Your care plan is designed from scratch based on your needs — not adapted from a template. Support workers, routines, and services are chosen to align with your individual requirements.",
    highlight: "Care designed, not recycled",
  },
  {
    icon: Compass,
    title: "Choice & Control Always",
    description:
      "You retain decision-making power at every stage. From selecting your support team to shaping your daily routine, Summit exists to enable your choices — not make them for you.",
    highlight: "Your decisions, our support",
  },
  {
    icon: Users,
    title: "Community On Your Terms",
    description:
      "We help you build and maintain the social connections that matter to you — whether that's family, friends, clubs, or professional networks. Participation is guided by your interests.",
    highlight: "Connections that matter to you",
  },
  {
    icon: Sparkles,
    title: "Growing With You",
    description:
      "As your goals evolve, so does your support. We continuously review and adapt your plan to ensure it keeps pace with your progress and changing aspirations.",
    highlight: "Support that evolves",
  },
]

const traditionalApproach = [
  "Start with available vacancies",
  "Fit the participant into an existing property",
  "Standardised support plans",
  "Limited choice of location and housemates",
  "Services dictated by what's available",
]

const summitApproach = [
  "Start with the participant's needs and goals",
  "Find or create the right property for the person",
  "Individually designed support plans",
  "Participant chooses location, environment, and housemates",
  "Services shaped by what the participant actually needs",
]

const processSteps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "We Listen & Understand",
    description:
      "We meet with you, your family, and your support coordinators to deeply understand your needs, daily routines, preferences, and long-term goals. This conversation is the foundation of everything that follows.",
  },
  {
    icon: Target,
    number: "02",
    title: "We Design Your Support Plan",
    description:
      "Based on what we learn, we build a personalised support plan from the ground up. Staffing, skill development, community access, and daily assistance are all tailored specifically to you.",
  },
  {
    icon: Search,
    number: "03",
    title: "We Find Your Right Home",
    description:
      "We search for a property that matches your requirements — location, accessibility, housemate compatibility, proximity to family, transport, and community. If the right home doesn't exist yet, we work to create it.",
  },
  {
    icon: Home,
    number: "04",
    title: "You Move In & Thrive",
    description:
      "With the right home and the right support in place from day one, you start living on your terms. We continue working alongside you to ensure everything stays aligned with your evolving goals.",
  },
]

const commitments = [
  {
    icon: Shield,
    title: "NDIS Registered & Compliant",
    description:
      "Fully registered with the NDIS Quality and Safeguards Commission, meeting and exceeding all regulatory standards.",
  },
  {
    icon: Heart,
    title: "Genuine Person-Centered Care",
    description:
      "Not just a philosophy on paper — participant-first is embedded in every process, from intake to ongoing reviews.",
  },
  {
    icon: Lightbulb,
    title: "Transparent & Honest",
    description:
      "Clear communication at every step. No hidden processes, no surprises — just honest collaboration focused on your outcomes.",
  },
  {
    icon: Users,
    title: "Experienced, Compassionate Team",
    description:
      "Support workers and coordinators selected not just for qualifications, but for their commitment to empowering participants.",
  },
]

export default function SummitVisionPage() {
  return (
    <>
      <PageHero
        title="Summit Vision"
        description="We don't start with a vacancy list — we start with you. Summit's vision is built on a simple belief: the right home and the right support should be found for the participant, not the other way around."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "About", href: "/about" },
          { title: "Summit Vision", href: "/about/summit-vision" },
        ]}
        heroImage={{
          src: "/header/page-header-5.webp",
          alt: "Summit's participant-first vision — putting people before properties",
        }}
        ctaText="Talk to Our Team"
        ctaHref="/contact"
      />

      {/* Core Vision Statement */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--background))]"
        aria-label="Our core vision"
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Our Vision
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                From Your Needs to Your Home
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Most providers start with their available properties and ask participants to choose
                from what&apos;s on offer. Summit does the opposite. We start by understanding the
                participant — their goals, their preferences, their life — and then find or create
                the housing and support that truly fits.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-3 flex items-center gap-3">
                    <Eye className="w-5 h-5 text-[hsl(var(--primary))]" />
                    The Participant-First Principle
                  </h3>
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    At Summit, &quot;participant-first&quot; isn&apos;t a tagline — it&apos;s the
                    operating model. Every property search, every support plan, and every staffing
                    decision begins with one question:{" "}
                    <strong className="text-[hsl(var(--heading))]">
                      what does this person need to live their best life?
                    </strong>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-3 flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Why This Matters
                  </h3>
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    When people are matched to properties that don&apos;t fit — wrong location,
                    incompatible housemates, unsuitable design — outcomes suffer. Independence
                    stalls. Our vision ensures the environment supports the person, not the other
                    way around.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/59.webp"
                  alt="Summit's participant-first approach to disability support and independent living"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[hsl(var(--deep-brown))]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Traditional vs Summit Approach */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]"
        aria-label="How Summit is different"
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                The Difference
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Property-First vs. Participant-First
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                The traditional model starts with a property and fits people in. Summit flips that
                model entirely — starting with the person and building outward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Traditional Approach */}
              <Card className="border-2 border-[hsl(var(--border-gray))]/50 bg-[hsl(var(--pure-white))] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[hsl(var(--border-gray))]" />
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <Building2 className="w-5 h-5 text-gray-500" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Traditional Model
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-gray-600">
                    Property-First Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--body))] mb-4 italic">
                    &quot;Here&apos;s what we have — does it work for you?&quot;
                  </p>
                  <ul className="space-y-3">
                    {traditionalApproach.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-500">
                        <XCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Summit Approach */}
              <Card className="border-2 border-[hsl(var(--primary))]/30 bg-[hsl(var(--pure-white))] relative overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[hsl(var(--primary))]" />
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10">
                      <UserCheck className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <Badge className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20 text-xs">
                      Summit Model
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-[hsl(var(--heading))]">
                    Participant-First Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--body))] mb-4 italic">
                    &quot;Tell us about your life — we&apos;ll find the right fit.&quot;
                  </p>
                  <ul className="space-y-3">
                    {summitApproach.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-[hsl(var(--body))]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* How It Works — Process Steps */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--background))]"
        aria-label="How our participant-first process works"
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Our Process
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How Participant-First Works in Practice
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                From initial conversation to move-in day, every step is driven by what you need —
                not by what happens to be available.
              </p>
            </div>

            <div className="relative">
              {/* Connecting line (desktop only) */}
              <div
                className="hidden md:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-[hsl(var(--primary))]/20 via-[hsl(var(--primary))]/40 to-[hsl(var(--primary))]/20"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <div key={step.number} className="relative flex flex-col items-center text-center group">
                    {/* Step circle */}
                    <div className="relative z-10 w-20 h-20 rounded-full bg-[hsl(var(--pure-white))] border-2 border-[hsl(var(--primary))]/30 group-hover:border-[hsl(var(--primary))] flex items-center justify-center shadow-[0_4px_24px_0_hsl(var(--orange-shadow))] group-hover:shadow-[0_8px_32px_0_hsl(var(--orange-shadow))] transition-all duration-300 mb-5">
                      <div className="flex flex-col items-center">
                        <step.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] text-xs font-bold flex items-center justify-center shadow-md">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-semibold text-[hsl(var(--heading))] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[hsl(var(--body))] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Vision Pillars */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--light-orange))]"
        aria-label="Pillars of our vision"
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Our Pillars
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What Our Vision Looks Like in Action
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Six principles guide every decision we make — from finding your home to shaping your
                daily support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visionPillars.map((pillar) => (
                <Card
                  key={pillar.title}
                  className="group hover:shadow-lg transition-all bg-[hsl(var(--pure-white))]"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <pillar.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs"
                      >
                        {pillar.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--heading))]">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[hsl(var(--body))] text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Our Commitment Section */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--background))]"
        aria-label="Our commitment to participants"
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Our Commitment
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Backed by Standards, Driven by Care
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Our participant-first vision is supported by rigorous standards, transparent
                practices, and a team that genuinely cares about your outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              {commitments.map((commitment) => (
                <div key={commitment.title} className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-[hsl(var(--primary))]/10 flex-shrink-0">
                    <commitment.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--heading))] mb-2">
                      {commitment.title}
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[hsl(var(--pure-white))] rounded-lg p-8 shadow-sm max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-4">
                  Ready to Experience Participant-First Support?
                </h3>
                <p className="text-[hsl(var(--body))] mb-6 max-w-2xl mx-auto">
                  Whether you&apos;re exploring SIL options, looking for the right SDA property, or
                  simply want to understand how Summit is different — we&apos;re here to listen and
                  help you take the next step.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] px-6 py-3 rounded-lg hover:bg-[hsl(var(--primary-hover))] transition-colors"
                    aria-label="Contact Summit to discuss your needs"
                  >
                    <Phone className="w-4 h-4" />
                    Tell Us What You Need
                  </Link>
                  <Link
                    href="/properties"
                    className="inline-flex items-center justify-center gap-2 border border-[hsl(var(--primary))] text-[hsl(var(--primary))] px-6 py-3 rounded-lg hover:bg-[hsl(var(--primary-transparent))] transition-colors"
                    aria-label="Browse Summit's available properties"
                  >
                    <Building2 className="w-4 h-4" />
                    Browse Properties
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
