import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import Link from "next/link"
import Image from "next/image"
import CTASection from "@/components/sections/cta-section"
import {
  Heart,
  Target,
  Users,
  Star,
  Award,
  Shield,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Crown,
  UserCheck,
  Gem,
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About EDEN Ability | Specialist Disability Support Services",
  description:
    "EDEN Ability is a leading disability support organisation and NDIS service provider, dedicated to supporting our clients' goals and optimising their potential in a homelike environment.",
  openGraph: {
    title: "About EDEN Ability | Specialist Disability Support Services",
    description:
      "EDEN Ability is a leading disability support organisation and NDIS service provider, dedicated to supporting our clients' goals and optimising their potential in a homelike environment.",
    type: "website",
  },
}

const purposes = [
  {
    title: "Excellence",
    description: "We believe in achieving Excellence in what we do",
    icon: Star,
  },
  {
    title: "Distinguished",
    description: "Our works effect change and make a difference",
    icon: Award,
  },
  {
    title: "Expert",
    description: "We deliver via a team of professionals with a wealth of experience",
    icon: Shield,
  },
  {
    title: "Nobility",
    description: "We put our clients first at all times",
    icon: Crown,
  },
]

const approaches = [
  "Respecting people's Values and putting people at the centre of care",
  "Taking into account people's preferences and expressed needs",
  "Providing Directions on People's targets and goals",
  "Focusing on what people want, the support they need and how they can get it",
  "Promoting Client Participation and Resulting in creativity and innovation",
]

const reasons = [
  "Promote client participation and innovation",
  "Provide direction on targets for person centred approaches",
  "Put you at the centre of the planning",
  "Listen deeply to you and your family and friends",
  "Respecting your values and putting you at the centre of care",
  "Taking into account your preferences and expressed needs",
  "Coordinating and integrating care",
  "Working together to ensure good communication",
  "Making sure you are physically comfortable and safe",
  "Providing emotional support",
  "Involving family and friends",
  "Ensuring continuity between services",
  "Guaranteeing access to appropriate care",
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About EDEN Ability"
        description="Supporting our clients' goals and optimising their potential to grow in a homelike environment."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        heroImage={{
          src: "/header/page-header-6.webp",
          alt: "EDEN Ability team supporting clients in a welcoming environment",
        }}
      />

      {/* Who We Are Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-background to-primary/5 relative">
        <div className="absolute inset-0 w-full h-full opacity-5">
          <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-2xl -top-12 right-1/4"></div>
        </div>
        <div className="container px-8 sm:px-24 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-primary px-5 py-2 rounded-full shadow-md">
                  <Users className="w-4 h-4" />
                  <span>Who We Are</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Welcome to EDEN Ability</h2>
                <div className="space-y-4 text-muted-foreground backdrop-blur-sm bg-white/30 rounded-xl p-5 border border-primary/10 shadow-sm">
                  <p>
                    EDEN Ability is a disability support organisation and NDIS service provider. We support our client's
                    goals and optimise their potential to grow and become who they aim to be in a homelike environment.
                  </p>
                  <p>
                    We endeavour to connect our clients to the most preferred services which can support them to achieve
                    their goals and empower their skills.
                  </p>
                  <p>
                    We are passionate about our participants, their families and communities. We are continually looking
                    for ways to improve our communities where we can optimize our clients shared sense of belongings and
                    support their aspirations.
                  </p>
                </div>
                <div className="pt-4">
                  <Button asChild className="bg-primary hover:bg-primary/90 shadow-md">
                    <Link href="/services">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-lg border border-primary/10 transform hover:scale-[1.02] transition-all duration-500">
                <Image
                  src="/63.webp"
                  alt="EDEN Ability Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="mt-16 bg-gradient-to-br from-blue-50 to-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8 shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">Our Principles</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The heart of our work is providing high physical support homes for people with special needs. Respecting diverse perspectives, we seek to work constructively with all relevant stakeholders to develop sustainable, mature specialist disability housing that meets the expressed needs and preferences of people with disability.
                </p>
                <p className="text-muted-foreground">
                  We constructively engage with specialist disability professionals, investors and participants to support the growth of diverse and sustainable NDIS Specialist Disability Accommodation (SDA).
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="flex items-start gap-3 bg-white/70 p-4 rounded-lg shadow-sm">
                  <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                    <Home className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Quality Housing</h4>
                    <p className="text-sm text-muted-foreground">Providing exceptional accommodations tailored to needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/70 p-4 rounded-lg shadow-sm">
                  <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Person-Centered</h4>
                    <p className="text-sm text-muted-foreground">Focusing on individual preferences and requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/70 p-4 rounded-lg shadow-sm">
                  <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Sustainable Growth</h4>
                    <p className="text-sm text-muted-foreground">Building partnerships for long-term disability support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Our Name & Purpose Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-5">
          <div className="absolute w-96 h-96 rounded-full bg-primary/30 blur-3xl -top-24 -left-24"></div>
          <div className="absolute w-96 h-96 rounded-full bg-secondary/30 blur-3xl -bottom-24 -right-24"></div>
        </div>
        <div className="container px-8 sm:px-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-primary px-5 py-2 rounded-full shadow-md">
              <Sparkles className="w-4 h-4" />
              <span>Our Name & Purpose</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">The Meaning of EDEN</h2>
            <div className="space-y-4 px-4 py-6 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm border border-primary/10">
              <p className="text-lg text-muted-foreground">
                EDEN means a state of great delight, happiness and contentment. It is also called Garden of EDEN, the
                garden which Adam and Eve first lived at the creation.
              </p>
              <p className="text-lg text-muted-foreground">
                EDEN is a place of pleasure and this is exactly what EDEN projects create, edenic places to call home.
              </p>
            </div>
            <p className="text-xl font-medium mt-6">
              Each letter in <span className="text-primary font-bold">EDEN</span> represents a core value that drives our purpose forward:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {purposes.map((purpose, index) => {
              const letter = "EDEN".charAt(index);
              const colors = [
                { bg: "from-blue-500 to-cyan-400", light: "bg-blue-100", border: "border-blue-200" },
                { bg: "from-purple-500 to-pink-400", light: "bg-purple-100", border: "border-purple-200" },
                { bg: "from-emerald-500 to-teal-400", light: "bg-emerald-100", border: "border-emerald-200" },
                { bg: "from-amber-500 to-yellow-400", light: "bg-amber-100", border: "border-amber-200" },
              ];
              return (
                <Card 
                  key={purpose.title} 
                  className={`relative group hover:shadow-lg transition-all duration-300 overflow-hidden border-2 ${colors[index].border} hover:scale-105`}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors[index].bg}`}></div>
                  <CardContent className="pt-10 pb-6">
                    <div className="flex flex-col items-center text-center gap-5">
                      <div className={`flex items-center justify-center w-20 h-20 rounded-full mb-3 ${colors[index].light} group-hover:scale-110 transition-transform duration-300`}>
                        <span className={`text-5xl font-bold bg-gradient-to-r ${colors[index].bg} bg-clip-text text-transparent`}>
                          {letter}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{purpose.title}</h3>
                      <p className="text-muted-foreground">{purpose.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Our Vision Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-5">
          <div className="absolute w-96 h-96 rounded-full bg-secondary/30 blur-3xl top-1/4 -right-20"></div>
          <div className="absolute w-72 h-72 rounded-full bg-primary/30 blur-2xl bottom-10 left-10"></div>
        </div>
        <div className="container px-8 sm:px-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-primary px-5 py-2 rounded-full shadow-md">
              <Gem className="w-4 h-4" />
              <span>Our Vision</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Creating Equal Opportunities</h2>
            <div className="space-y-6 backdrop-blur-sm bg-white/50 rounded-xl p-6 border border-primary/10 shadow-md">
              <p className="text-lg text-muted-foreground">
                We don't see any reason that people with disability should have less opportunity in life than the rest
                of the population.
              </p>
              <p className="text-lg text-muted-foreground">
                Our Vision is to help people with disability to Achieve their goals and Live as independently and as
                equal as other citizens.
              </p>
              <div className="pt-4">
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator variant="accent" />

      {/* Our Approach Section */}
      <section className="py-12 md:py-20 bg-gradient-to-tl from-background to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-5">
          <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-2xl -bottom-12 -left-12"></div>
        </div>
        <div className="container px-8 sm:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-primary px-5 py-2 rounded-full shadow-md">
                <UserCheck className="w-4 h-4" />
                <span>Our Approach</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Person Centred Approach</h2>
              <div className="backdrop-blur-sm bg-white/40 rounded-xl p-6 border border-primary/10 shadow-sm">
                <p className="text-muted-foreground">
                  EDEN Ability Person Centred Approach puts the person with disability at the centre of the planning,
                  listens deeply to them and their family and friends, learns over time what it is they want for their
                  life now and in the future, and then acts on this.
                </p>
              </div>
              <div className="space-y-4 mt-2">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-primary/5 shadow-sm hover:shadow-md hover:border-primary/10 transition-all duration-300">
                    <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground pt-1">{approach}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-lg border border-primary/10 transform hover:scale-[1.02] transition-all duration-500">
              <Image
                src="/69.webp"
                alt="Our Person Centred Approach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Why Choose Us Section */}
      <section className="py-10 md:py-14 bg-gradient-to-r from-muted/20 to-muted/40 relative">
        <div className="container px-8 sm:px-24">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-primary px-5 py-2 rounded-full shadow-sm">
              <Heart className="w-4 h-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent">What Sets Us Apart</h2>
          </div>

          <div className="max-w-4xl mx-auto border border-primary/10 rounded-xl overflow-hidden shadow-sm bg-white/90">
            <div className="grid sm:grid-cols-2 gap-0">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-3.5 ${index % 2 === 0 ? 'border-r border-r-primary/10' : ''} ${index < reasons.length - 2 ? 'border-b border-b-primary/10' : ''}`}
                >
                  <div className="p-1.5 rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator variant="secondary" />

      

      <SectionSeparator variant="primary" />

      {/* CTA Section */}
      <CTASection
        title="Experience the EDEN Difference"
        description="After learning about our values and approach, discover how we can support you or your loved ones with our specialized disability services and accommodation solutions."
        primaryButtonText="Get In Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Housing"
        secondaryButtonLink="/services/eden-housing"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="EDEN Ability staff providing supportive care"
        footerText="Interested in learning more about our support services? View our"
        footerLinkText="SIL Options"
        footerLinkHref="/services/sil-models"
      />
    </>
  )
}

