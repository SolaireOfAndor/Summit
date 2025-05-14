'use client'

/**
 * @component Hero
 * @description Main hero section for the SummitSDA landing page. Features a prominent
 * call-to-action, descriptive text about SummitSDA\'s mission, and an illustrative image.
 * Uses GSAP for entrance animations.
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
          "-=0.5" // Start slightly after title
        )
      }
      if (buttonsRef.current?.children) {
        tl.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
          "-=0.4" // Start slightly after paragraph
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
          "-=0.8" // Start in parallel with text animations
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
      {/* Subtle decorative background using pseudo-elements or SVGs - to be designed later */}
      <div 
        className="absolute inset-0 opacity-50"
        aria-hidden="true" 
      >
        {/* Example: Soft gradient spark, can be animated with GSAP */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[hsl(var(--primary))]/5 via-[hsl(var(--background))] to-[hsl(var(--light-orange))]/10" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 
                id="hero-title"
                ref={titleRef}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-[hsl(var(--heading))]"
              >
                Empowering Your Journey to Independence
              </h1>
              <p 
                ref={paragraphRef}
                className="text-lg sm:text-xl lg:text-2xl text-[hsl(var(--body))] max-w-2xl mx-auto lg:mx-0"
              >
                SummitSDA delivers participant-centered NDIS support and high-quality accommodation, guiding you towards greater autonomy and a fulfilling life across NSW.
              </p>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <SummitButton asChild size="lg" className="shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <Link href="/vacancies/sda-vacancies">Explore SDA Vacancies</Link>
              </SummitButton>
              <SummitButton asChild variant="outline" size="lg" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-transparent))] hover:text-[hsl(var(--primary-hover))]">
                <Link href="/contact">Get in Touch</Link>
              </SummitButton>
            </div>

            <div ref={statsRef} className="pt-6 sm:pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10">
                <div className="text-center sm:text-left">
                  <p className="text-3xl sm:text-4xl font-bold text-[hsl(var(--heading))]">Sydney-Based</p>
                  <p className="text-sm sm:text-base text-[hsl(var(--body))]">With NSW-Wide Reach</p>
                </div>
                <div className="h-10 w-px bg-[hsl(var(--medium-brown))]/30 hidden sm:block" />
                <div className="text-center sm:text-left">
                  <p className="text-3xl sm:text-4xl font-bold text-[hsl(var(--heading))]">Participant-First</p>
                  <p className="text-sm sm:text-base text-[hsl(var(--body))]">Tailored NDIS Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative lg:col-span-5 xl:col-span-6 lg:h-[650px] h-[400px] sm:h-[500px]">
            <Image
              src="/properties/sydney-cbd/exterior-day.webp" // Placeholder, replace with a more suitable hero image
              alt="A modern, accessible home representing SummitSDA's quality accommodations"
              fill
              className="object-cover rounded-2xl shadow-2xl shadow-[hsl(var(--orange-shadow))]"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              // Consider adding blurDataURL for better perceived performance
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

