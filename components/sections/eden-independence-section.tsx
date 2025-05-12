"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { SummitButton } from "@/components/ui/eden-button"

/**
 * @component SummitIndependenceSection
 * @description A feature-rich section highlighting SummitSDA's independence support services. Showcases Summit's approach to promoting client independence, available support programs, and service benefits with visual elements and testimonials.
 * 
 * @example
 * ```tsx
 * <SummitIndependenceSection />
 * ```
 * 
 * @category Section
 * @usedIn Homepage, Services overview page, and About page
 */
export function SummitIndependenceSection() {
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
    <section ref={sectionRef} className="py-12 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Image Box with enhanced styling */}
          <div
            className={cn(
              "relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden opacity-0 -translate-x-[200px] transition-all duration-1000 ease-out",
              "before:absolute before:inset-0 before:bg-gradient-to-br before:from-secondary/10 before:to-primary/10 before:z-10",
              "after:absolute after:inset-0 after:border-2 after:border-secondary/10 after:rounded-3xl after:z-20",
              isVisible && "opacity-100 translate-x-0",
            )}
          >
            <Image
              src="/71.webp"
              alt="Summit Independence"
              fill
              className="object-cover z-0"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>

          {/* Content Container with enhanced styling */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Heading group */}
            <div
              className={cn(
                "space-y-4 opacity-0 translate-x-[100px] transition-all duration-700 delay-300 ease-out",
                isVisible && "opacity-100 translate-x-0",
              )}
            >
              <div className="inline-flex items-center space-x-2 text-secondary">
                <span className="h-px w-8 bg-secondary/60" />
                <span className="text-sm font-medium uppercase tracking-wider">Independence Living</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                Summit Independence
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">Supporting your journey to independent living</p>
            </div>

            {/* Text content with enhanced styling */}
            <div
              className={cn(
                "space-y-4 opacity-0 translate-x-[150px] transition-all duration-700 delay-500 ease-out",
                "p-6 rounded-2xl bg-gradient-to-br from-secondary/[0.03] to-primary/[0.03] border border-secondary/5",
                isVisible && "opacity-100 translate-x-0",
              )}
            >
              <p className="text-base md:text-lg text-muted-foreground">
                At SummitSDA, we believe everyone deserves the opportunity to live life on their own terms. Our comprehensive supported independent living services are designed to empower NDIS participants to achieve their goals and maintain their independence.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                From shared accommodations to personalized support packages, we work closely with each individual to create a living environment that meets their unique needs and aspirations.
              </p>
            </div>

            {/* Buttons with enhanced styling */}
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 translate-y-10 transition-all duration-700 delay-700 ease-out",
                isVisible && "opacity-100 translate-y-0",
              )}
            >
              <SummitButton asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link href="/services/sil-vacancies">View SIL Vacancies</Link>
              </SummitButton>
              <SummitButton
                asChild
                variant="outline"
                size="lg"
                className="border-secondary/20 hover:bg-secondary/5 transition-colors"
              >
                <Link href="/services/sil-models">Learn More</Link>
              </SummitButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

