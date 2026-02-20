import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import Link from "next/link"
import Image from "next/image"
import {
  Heart,
  Target,
  Users,
  Award,
  Shield,
  CheckCircle2,
  ArrowRight,
  Phone,
  UserCheck,
  Home,
  Building2,
  Search,
  MessageCircle,
  Lightbulb,
  GraduationCap,
  HeartHandshake,
  Zap,
  MapPin,
  Clock,
  BookOpen,
  Eye,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Summit | NDIS SIL Provider — Supported Independent Living Specialists",
  description:
    "Summit is a specialist NDIS Supported Independent Living (SIL) provider serving Sydney & NSW. With expertise in ABI, spinal cord injury & high-intensity care, we put participants first — finding the right home and delivering 24/7 personalised support.",
  keywords:
    "about Summit, NDIS SIL provider, Supported Independent Living specialist, disability support organisation, participant-first approach, ABI care provider, NDIS registered Sydney, 24/7 SIL care NSW",
  openGraph: {
    title: "About Summit | NDIS SIL Provider — Supported Independent Living Specialists",
    description:
      "Summit is a specialist NDIS Supported Independent Living (SIL) provider serving Sydney & NSW. Participant-first approach with 24/7 personalised support.",
    type: "website",
    images: [
      {
        url: "/header/page-header-6.webp",
        width: 1200,
        height: 630,
        alt: "Summit team providing quality NDIS supported independent living services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Summit | NDIS SIL Provider — Supported Independent Living",
    description:
      "Summit is a specialist SIL provider serving Sydney & NSW. We find the right home and support for you — not the other way around.",
  },
  alternates: {
    canonical: "/about",
  },
}

const differentiators = [
  {
    icon: UserCheck,
    title: "Participant-First Model",
    description:
      "We don't start with a vacancy list — we start with you. Your needs, goals, and preferences shape every decision we make.",
  },
  {
    icon: Clock,
    title: "24/7 Rostered Care",
    description:
      "Personalised around-the-clock support built around your individual Roster of Care, not a one-size-fits-all schedule.",
  },
  {
    icon: Shield,
    title: "Specialist Expertise",
    description:
      "Dedicated experience supporting people with acquired brain injury (ABI), spinal cord injury, physical disability, and psychosocial needs.",
  },
  {
    icon: Home,
    title: "Flexible Housing",
    description:
      "SIL in any suitable property — we're not limited to our own buildings. We find or create the right living arrangement for you.",
  },
  {
    icon: MapPin,
    title: "Sydney & NSW Coverage",
    description:
      "Based in Sydney with reach across NSW — Eastern Suburbs, CBD, Northern Beaches, Parramatta, and regional areas.",
  },
  {
    icon: HeartHandshake,
    title: "Genuine Partnerships",
    description:
      "We work alongside participants, families, and support coordinators — building trust through transparent, honest collaboration.",
  },
]

const coreValues = [
  {
    title: "Participant Empowerment",
    description:
      "Your choices, your life. We exist to enable your decisions — not make them for you.",
    icon: UserCheck,
    category: "Choice & Control",
  },
  {
    title: "Exceeding Standards",
    description:
      "We actively work to exceed NDIS standards and set new benchmarks for quality care.",
    icon: Award,
    category: "Quality Excellence",
  },
  {
    title: "Individualised Support",
    description:
      "Every support plan is designed from scratch based on your unique needs and goals.",
    icon: Target,
    category: "Personalised Care",
  },
  {
    title: "Continuous Learning",
    description:
      "We invest in ongoing staff education and training to deliver the highest quality support.",
    icon: GraduationCap,
    category: "Professional Development",
  },
  {
    title: "Community Connection",
    description:
      "We help you build and maintain meaningful relationships within your community.",
    icon: HeartHandshake,
    category: "Social Inclusion",
  },
  {
    title: "Innovation & Accessibility",
    description:
      "We embrace technology and innovative approaches to enhance your independence.",
    icon: Zap,
    category: "Forward Thinking",
  },
]

const processSteps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "We Listen & Understand",
    description:
      "We meet with you, your family, and your support coordinators to deeply understand your needs, routines, preferences, and goals.",
  },
  {
    icon: Target,
    number: "02",
    title: "We Design Your Support",
    description:
      "Based on what we learn, we build a personalised support plan from the ground up — staffing, skill development, and daily assistance tailored to you.",
  },
  {
    icon: Search,
    number: "03",
    title: "We Find Your Home",
    description:
      "We search for a property that matches your requirements — location, accessibility, housemate compatibility, and proximity to what matters to you.",
  },
  {
    icon: Home,
    number: "04",
    title: "You Move In & Thrive",
    description:
      "With the right home and the right support in place from day one, you start living on your terms. We adapt as your goals evolve.",
  },
]

const explorePages = [
  {
    title: "About Summit",
    description:
      "A deeper look at our mission, services, and commitment to quality NDIS support across NSW.",
    href: "/about/about-summit",
    icon: BookOpen,
  },
  {
    title: "Summit Vision",
    description:
      "How our participant-first approach works in practice — and why it leads to better outcomes.",
    href: "/about/summit-vision",
    icon: Eye,
  },
  {
    title: "Feedback & Complaints",
    description:
      "Your voice matters. Share your experiences to help us continuously improve our services.",
    href: "/about/feedback",
    icon: MessageCircle,
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Summit"
        description="Summit is a specialist NDIS Supported Independent Living (SIL) provider. We don't start with a vacancy list — we start with you. Your goals shape our services, and your home is found to fit your life."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[{ title: "About", href: "/about" }]}
        heroImage={{
          src: "/header/page-header-6.webp",
          alt: "Summit team supporting participants in a welcoming SIL environment",
        }}
        ctaText="Get In Touch"
        ctaHref="/contact"
      />

      {/* Who We Are */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--background))]"
        aria-label="Who we are"
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                  Who We Are
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[hsl(var(--heading))]">
                  Specialist SIL Provider Serving Sydney & NSW
                </h2>
                <div className="space-y-4 text-[hsl(var(--body))] leading-relaxed">
                  <p>
                    Summit is a registered NDIS service provider dedicated to delivering
                    participant-centred Supported Independent Living (SIL) across Sydney and New
                    South Wales. Our core expertise is the <strong className="text-[hsl(var(--heading))]">support</strong> — the personalised,
                    24/7 care that empowers people to live independently.
                  </p>
                  <p>
                    With specialist experience in acquired brain injury (ABI), spinal cord injury,
                    physical disability, and psychosocial support, we provide high-intensity care
                    tailored to each participant&apos;s unique circumstances and aspirations.
                  </p>
                  <p>
                    Whether you live in an SDA property, a standard rental, or your own home, Summit
                    delivers the daily support that turns a house into a place where you can thrive.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    href="/supported-accommodations/sil"
                    className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] px-6 py-3 rounded-lg hover:bg-[hsl(var(--primary-hover))] transition-colors"
                    aria-label="Learn about our SIL services"
                  >
                    Explore SIL Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/about/about-summit"
                    className="inline-flex items-center justify-center gap-2 border border-[hsl(var(--primary))] text-[hsl(var(--primary))] px-6 py-3 rounded-lg hover:bg-[hsl(var(--primary-transparent))] transition-colors"
                    aria-label="Learn more about Summit"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/63.webp"
                  alt="Summit support team working with a participant in a supported independent living home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--deep-brown))]/15 to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Mission & Vision */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]"
        aria-label="Our mission and vision"
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Our Purpose
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Empowering Independence Through Quality Support
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                At Summit, we believe everyone deserves the opportunity to live independently and
                pursue their goals. Our mission is to provide exceptional SIL services that put
                participants in control of their lives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-[hsl(var(--pure-white))] shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10">
                      <Target className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-[hsl(var(--heading))]">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    To deliver participant-centred SIL services that exceed industry standards —
                    focusing on empowerment, choice, and individualised care. We help each
                    participant achieve their goals and live their best life, with 24/7 support
                    designed around their needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10">
                      <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-[hsl(var(--heading))]">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    A community where every person with disability has access to high-quality
                    support and accommodation that enables them to live independently, participate
                    fully in their community, and pursue their aspirations without barriers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* What Sets Summit Apart */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--background))]"
        aria-label="What sets Summit apart"
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                The Summit Difference
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Why Participants Choose Summit
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Most providers start with their available properties and ask you to choose from
                what&apos;s on offer. Summit does the opposite — we start with you and build
                outward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((item) => (
                <Card
                  key={item.title}
                  className="group hover:shadow-lg transition-all bg-[hsl(var(--pure-white))]"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <item.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--heading))]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[hsl(var(--body))] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* How It Works — Process */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--light-orange))]"
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
              <div
                className="hidden md:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-[hsl(var(--primary))]/20"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="relative flex flex-col items-center text-center group"
                  >
                    <div className="relative z-10 w-20 h-20 rounded-full bg-[hsl(var(--pure-white))] border-2 border-[hsl(var(--primary))]/30 group-hover:border-[hsl(var(--primary))] flex items-center justify-center shadow-[0_4px_24px_0_hsl(var(--orange-shadow))] group-hover:shadow-[0_8px_32px_0_hsl(var(--orange-shadow))] transition-all duration-300 mb-5">
                      <step.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] text-xs font-bold flex items-center justify-center shadow-md">
                        {index + 1}
                      </span>
                    </div>
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

            <div className="text-center mt-12">
              <Link
                href="/about/summit-vision"
                className="inline-flex items-center gap-2 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))] font-medium transition-colors"
                aria-label="Learn more about Summit's participant-first vision"
              >
                Learn more about our vision
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Core Values */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--background))]"
        aria-label="Our core values"
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Our Values
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What Drives Our Commitment
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Our values guide every interaction and decision. They ensure our support is always
                participant-centred, respectful, and focused on empowering your independence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value) => (
                <Card
                  key={value.title}
                  className="group hover:shadow-md transition-all bg-[hsl(var(--pure-white))]"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <value.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {value.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--heading))]">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[hsl(var(--body))] text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Quality & Compliance */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--lighter-orange))]"
        aria-label="Quality and compliance"
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/69.webp"
                  alt="Summit's quality care approach — supporting participants with compassion and professionalism"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--deep-brown))]/15 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="space-y-6">
                <Badge className="bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                  Quality Assurance
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[hsl(var(--heading))]">
                  Backed by Standards, Driven by Care
                </h2>
                <p className="text-[hsl(var(--body))] leading-relaxed">
                  Quality isn&apos;t just a goal at Summit — it&apos;s our foundation. We are
                  committed to exceeding industry standards and continuously improving our services
                  to ensure you receive the highest level of support.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      title: "NDIS Registered & Compliant",
                      text: "Fully registered with the NDIS Quality and Safeguards Commission, meeting and exceeding all regulatory standards.",
                    },
                    {
                      icon: Users,
                      title: "Experienced, Compassionate Team",
                      text: "Support workers selected not just for qualifications, but for their commitment to empowering participants.",
                    },
                    {
                      icon: Heart,
                      title: "Genuine Person-Centred Care",
                      text: "Participant-first is embedded in every process — from intake to ongoing reviews.",
                    },
                    {
                      icon: Lightbulb,
                      title: "Transparent & Honest",
                      text: "Clear communication at every step. No hidden processes, no surprises — just honest collaboration.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 flex-shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--heading))] text-sm">
                          {item.title}
                        </h3>
                        <p className="text-[hsl(var(--body))] text-sm leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Explore More */}
      <section
        className="relative py-16 md:py-24 bg-[hsl(var(--background))]"
        aria-label="Explore more about Summit"
      >
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Learn More
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Explore More About Summit
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Dive deeper into our approach, our vision, and how we maintain the highest
                standards of care for every participant.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {explorePages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group"
                  aria-label={`Go to ${page.title}`}
                >
                  <Card className="h-full bg-[hsl(var(--pure-white))] hover:shadow-lg transition-all group-hover:border-[hsl(var(--primary))]/30">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors rounded-full flex items-center justify-center">
                        <page.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">
                        {page.title}
                      </h3>
                      <p className="text-[hsl(var(--body))] text-sm leading-relaxed mb-4">
                        {page.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm text-[hsl(var(--primary))] font-medium group-hover:text-[hsl(var(--primary-hover))] transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Experience Participant-First Support?"
        description="Whether you're exploring SIL options, looking for the right home, or simply want to understand how Summit is different — we're here to listen and help you take the next step."
        primaryButtonText="Get In Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="Browse SIL Vacancies"
        secondaryButtonLink="/properties/sil-vacancies"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="Summit staff providing supportive care to a participant"
        footerText="Want to learn more about Supported Independent Living?"
        footerLinkText="Explore SIL Services"
        footerLinkHref="/supported-accommodations/sil"
      />
    </>
  )
}
