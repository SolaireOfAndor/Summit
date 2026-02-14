'use client'

import { Search, MessageCircle, Home, ArrowRight } from "lucide-react"
import { SummitButton } from "@/components/ui/summit-button"
import Link from "next/link"

/**
 * @component ParticipantFirstCTA
 * @description Highlights Summit's unique participant-first SIL model where
 * the team finds the right property for the participant rather than the
 * participant choosing from existing listings. Placed directly after the
 * PropertiesHighlight section on the landing page.
 *
 * @example
 * ```tsx
 * <ParticipantFirstCTA />
 * ```
 *
 * @category Section
 * @usedIn Landing Page (app/page.tsx)
 */

const steps = [
  {
    icon: MessageCircle,
    title: "We Listen",
    description: "Share your needs, goals, and preferences with our team.",
  },
  {
    icon: Search,
    title: "We Search",
    description: "We find the ideal home tailored specifically to you.",
  },
  {
    icon: Home,
    title: "You Thrive",
    description: "Move in with personalised support from day one.",
  },
]

export function ParticipantFirstCTA() {
  return (
    <section
      className="py-16 lg:py-20 bg-[hsl(var(--lighter-orange))]"
      aria-labelledby="participant-first-title"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary))] bg-[hsl(var(--pure-white))] px-4 py-2 rounded-full mb-5">
            <Search className="w-4 h-4" />
            <span>Participant-First Approach</span>
          </div>
          <h2
            id="participant-first-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[hsl(var(--heading))] mb-4"
          >
            Can&apos;t Find the Right Property?
          </h2>
          <p className="text-base sm:text-lg text-[hsl(var(--body))] max-w-2xl mx-auto">
            You don&apos;t have to choose from what&apos;s available. Our team finds the
            perfect home based on <strong className="text-[hsl(var(--heading))]">your</strong> needs.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10 lg:mb-14">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center p-6 rounded-xl bg-[hsl(var(--pure-white))] shadow-[0_4px_24px_0_hsl(var(--orange-shadow))] hover:shadow-[0_8px_32px_0_hsl(var(--orange-shadow))] transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[hsl(var(--primary))] text-white text-xs font-bold flex items-center justify-center shadow-md">
                {index + 1}
              </div>
              <div className="p-3 rounded-xl bg-[hsl(var(--primary))]/10 mb-4 mt-2">
                <step.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--heading))] mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-[hsl(var(--body))] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <SummitButton
            asChild
            size="lg"
            className="shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]"
          >
            <Link href="/contact">
              Tell Us What You Need
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </SummitButton>
        </div>
      </div>
    </section>
  )
}
