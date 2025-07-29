'use client'

import { Award, UserPlus, Target, GraduationCap, HeartHandshake, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

/**
 * @component WhyChooseSummit
 * @description Landing page section highlighting Summit's core values and differentiators.
 * 
 * @example
 * ```tsx
 * <WhyChooseSummit />
 * ```
 * 
 * @category Section
 * @usedIn Landing Page (app/page.tsx)
 */

const coreValues = [
  {
    title: "Participant Empowerment",
    description: "Your choices, your life. We empower, not control.",
    icon: UserPlus,
    category: "Choice & Control"
  },
  {
    title: "Exceeding Standards",
    description: "We don't just meet standards - we set new benchmarks.",
    icon: Award,
    category: "Quality Excellence"
  },
  {
    title: "Individualized Support",
    description: "Tailored to your unique needs and goals.",
    icon: Target,
    category: "Personalized Care"
  },
  {
    title: "Continuous Learning",
    description: "Ongoing training ensures the highest quality support.",
    icon: GraduationCap,
    category: "Professional Development"
  },
  {
    title: "Community Connection",
    description: "Building meaningful relationships and support networks.",
    icon: HeartHandshake,
    category: "Social Inclusion"
  },
  {
    title: "Innovation & Accessibility",
    description: "Technology and innovation enhance your independence.",
    icon: Zap,
    category: "Forward Thinking"
  }
]

export function WhyChooseSummit() {
  return (
    <section 
      className="py-20 lg:py-24 bg-[hsl(var(--lighter-orange))]"
      aria-labelledby="why-choose-summit-title"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary))] bg-[hsl(var(--pure-white))] px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4" />
                <span>Why Choose Summit</span>
              </div>
              <h2 
                id="why-choose-summit-title"
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(var(--heading))] mb-6"
              >
                Excellence in NDIS Support
              </h2>
              <p className="text-lg text-[hsl(var(--body))] max-w-xl">
                Our commitment to participant empowerment and quality excellence 
                sets us apart as a trusted NDIS service provider.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {coreValues.map((value, index) => (
                <Card key={value.title} className="bg-[hsl(var(--pure-white))] border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <value.icon className="w-4 h-4 text-[hsl(var(--primary))]" />
                      </div>
                    </div>
                    <CardTitle className="text-sm font-semibold text-[hsl(var(--heading))]">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-[hsl(var(--body))] text-xs leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-[hsl(var(--orange-shadow))]">
              <Image
                src="/png/support-1120755_1920.jpg"
                alt="Summit team providing quality NDIS support services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-[hsl(var(--pure-white))] rounded-xl p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[hsl(var(--primary))]">Sydney-Based</div>
                  <p className="text-xs text-[hsl(var(--body))]">NSW-Wide Reach</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(var(--primary))]">NDIS Registered</div>
                  <p className="text-xs text-[hsl(var(--body))]">Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 