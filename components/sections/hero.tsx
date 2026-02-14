'use client'

/**
 * @component Hero
 * @description Main hero section for the Summit landing page. Features a prominent
 * call-to-action focused on SIL services and vacancies, descriptive text about
 * Summit's SIL mission, and an illustrative image. Uses GSAP for entrance animations.
 * 
 * @example
 * ```tsx
 * <Hero />
 * ```
 * 
 * @category Section
 * @usedIn Landing Page (app/page.tsx)
 */
import Link from "next/link"
import Image from "next/image"
import { SummitButton } from "@/components/ui/summit-button"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Animate text elements
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
        )
      }
      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
      }
      if (buttonsRef.current?.children) {
        tl.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
          "-=0.4"
        )
      }
       if (statsRef.current?.children) {
        tl.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 },
          "-=0.3"
        )
      }

      // Animate image
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.95, x: 50 },
          { opacity: 1, scale: 1, x: 0, duration: 1 },
          "-=0.8"
        )
      }
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center py-20 lg:py-0 overflow-hidden bg-[hsl(var(--background))]"
      aria-labelledby="hero-title"
    >
      {/* Subtle decorative background */}
      <div 
        className="absolute inset-0 opacity-50"
        aria-hidden="true" 
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[hsl(var(--primary))]/5 via-[hsl(var(--background))] to-[hsl(var(--light-orange))]/10" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-center lg:text-left">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary))] bg-[hsl(var(--primary-transparent))] px-4 py-2 rounded-full">
                <span>Supported Independent Living</span>
              </div>
              <h1 
                id="hero-title"
                ref={titleRef}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-[hsl(var(--heading))]"
              >
                Live Independently with the Right Support
              </h1>
              <p 
                ref={paragraphRef}
                className="text-base sm:text-lg lg:text-xl text-[hsl(var(--body))] max-w-2xl mx-auto lg:mx-0"
              >
                Summit provides personalised Supported Independent Living (SIL) services across NSW — helping you build the skills, confidence, and daily routines for a fulfilling, independent life.
              </p>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <SummitButton asChild size="lg" className="shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <Link href="/properties/sil-vacancies">Browse SIL Vacancies</Link>
              </SummitButton>
              <SummitButton asChild variant="outline" size="lg" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-transparent))] hover:text-[hsl(var(--primary-hover))]">
                <Link href="/supported-accommodations/sil">Learn About SIL</Link>
              </SummitButton>
            </div>

            <div ref={statsRef} className="pt-4 sm:pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10">
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[hsl(var(--heading))]">24/7</p>
                  <p className="text-sm sm:text-base text-[hsl(var(--body))]">Support Available</p>
                </div>
                <div className="h-10 w-px bg-[hsl(var(--medium-brown))]/30 hidden sm:block" />
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[hsl(var(--heading))]">NSW-Wide</p>
                  <p className="text-sm sm:text-base text-[hsl(var(--body))]">SIL Properties</p>
                </div>
                <div className="h-10 w-px bg-[hsl(var(--medium-brown))]/30 hidden sm:block" />
                <div className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-[hsl(var(--heading))]">Participant-First</p>
                  <p className="text-sm sm:text-base text-[hsl(var(--body))]">Tailored SIL Plans</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative lg:col-span-5 xl:col-span-6 lg:h-[650px] h-[400px] sm:h-[500px]">
            <Image
              src="/house-image/1.webp"
              alt="A welcoming SIL property representing Summit's supported independent living services"
              fill
              className="object-cover rounded-2xl shadow-2xl shadow-[hsl(var(--orange-shadow))]"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
            <div 
              className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

