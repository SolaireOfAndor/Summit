"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { EdenButton } from "@/components/ui/eden-button"

/**
 * @component EdenHousingSection
 * @description A comprehensive section showcasing Eden's housing services and options.
 * Features property highlights, accommodation types, eligibility information,
 * and visual elements. Designed to inform visitors about SDA and SIL housing options.
 * 
 * @example
 * ```tsx
 * <EdenHousingSection />
 * ```
 * 
 * @category Section
 * @usedIn Homepage, Housing services page, and SDA information pages
 */
export function EdenHousingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="py-12 md:py-24 overflow-hidden"
      aria-label="Eden Housing services section"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Content Container */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Heading group */}
            <div
              className={cn(
                "space-y-4 opacity-0 -translate-x-[100px] transition-all duration-700 delay-300 ease-out",
                isVisible && "opacity-100 translate-x-0",
              )}
            >
              <div className="inline-flex items-center space-x-2 text-accent">
                <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
                <span className="text-sm font-medium uppercase tracking-wider">Specialist Housing</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Eden Housing
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Specialist Disability Accommodation designed for your needs
              </p>
            </div>

            {/* Text content */}
            <div
              className={cn(
                "space-y-4 opacity-0 -translate-x-[150px] transition-all duration-700 delay-500 ease-out",
                "p-6 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-primary/[0.03] border border-accent/5",
                isVisible && "opacity-100 translate-x-0",
              )}
            >
              <p className="text-base md:text-lg text-muted-foreground">
                Eden Housing provides high-quality Specialist Disability Accommodation (SDA) that goes beyond just a
                place to live. Our properties are thoughtfully designed to support independence, comfort, and dignity
                for NDIS participants.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Whether you're looking for short-term stays or a permanent home, our range of accommodation options
                ensures that you'll find the perfect match for your requirements and lifestyle preferences.
              </p>
            </div>

            {/* Buttons */}
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 translate-y-10 transition-all duration-700 delay-700 ease-out",
                isVisible && "opacity-100 translate-y-0",
              )}
            >
              <EdenButton 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90"
                aria-label="View available SDA vacancies"
              >
                <Link href="/services/sda-vacancies">View SDA Vacancies</Link>
              </EdenButton>
              <EdenButton
                asChild
                variant="outline"
                size="lg"
                className="border-accent/20 hover:bg-accent/5 transition-colors"
                aria-label="Explore short term accommodation options"
              >
                <Link href="/services/sta">Explore Short Term Options</Link>
              </EdenButton>
            </div>
          </div>

          {/* Image Box */}
          <div
            className={cn(
              "relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden order-1 lg:order-2 opacity-0 translate-x-[200px] transition-all duration-1000 ease-out",
              "before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent/10 before:to-primary/10 before:z-10",
              "after:absolute after:inset-0 after:border-2 after:border-accent/10 after:rounded-3xl after:z-20",
              isVisible && "opacity-100 translate-x-0",
            )}
          >
            <Image
              src="/2.webp"
              alt="Eden Housing specialist disability accommodation showing accessible living spaces"
              fill
              className="object-cover z-0"
              sizes="(min-width: 1024px) 50vw, (min-width: 768px) 75vw, 100vw"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

