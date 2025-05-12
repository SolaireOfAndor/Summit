"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { SummitButton } from "@/components/ui/summit-button"
import { ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface Breadcrumb {
  title: string
  href: string
}

interface PageHeroProps {
  title: string | React.ReactNode
  description?: string
  backgroundPattern?: "dots" | "grid" | "none"
  breadcrumbs?: Breadcrumb[]
  alignment?: "left" | "center"
  className?: string
  ctaText?: string
  ctaHref?: string
  heroImage?: {
    src: string
    alt: string
  }
}

// Separate Breadcrumbs component for better organization
function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-foreground transition-colors">
        Home
      </Link>
      {items.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <Link
            href={breadcrumb.href}
            className={cn(
              "hover:text-foreground transition-colors",
              index === items.length - 1 && "text-foreground font-medium"
            )}
            aria-current={index === items.length - 1 ? "page" : undefined}
          >
            {breadcrumb.title}
          </Link>
        </div>
      ))}
    </nav>
  )
}

// Background pattern component for better performance
function BackgroundPattern({ pattern }: { pattern: "dots" | "grid" | "none" }) {
  if (pattern === "none") return null

  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        pattern === "dots" && 
          "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50",
        pattern === "grid" && 
          "[background-image:linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] [background-size:64px_64px] opacity-30"
      )}
      aria-hidden="true"
    />
  )
}

/**
 * @component PageHero
 * @description A versatile hero section component for interior pages. Features
 * a title, subtitle, background image with overlay, and optional action buttons.
 * Provides consistent page introductions across the site with customizable content.
 * 
 * @example
 * ```tsx
 * <PageHero
 *   title="About Our Services"
 *   subtitle="Supporting independence through innovative care solutions"
 *   imageSrc="/images/hero-about.jpg"
 *   buttons={[
 *     { text: "Learn More", href: "#services", variant: "primary" },
 *     { text: "Contact Us", href: "/contact", variant: "secondary" }
 *   ]}
 * />
 * ```
 * 
 * @category Section
 * @usedIn Various interior pages including About, Services, Resources, and Contact
 */
export function PageHero({
  title,
  description,
  backgroundPattern = "dots",
  breadcrumbs,
  alignment = "left",
  className,
  ctaText,
  ctaHref,
  heroImage,
}: PageHeroProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        rootMargin: "50px",
        threshold: 0.1
      }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className={cn(
        "hero relative overflow-hidden pt-28 md:pt-32",
        !heroImage && "bg-muted/30",
        heroImage && "min-h-[600px]",
        className
      )}
    >
      {/* Background Pattern */}
      {!heroImage && <BackgroundPattern pattern={backgroundPattern} />}

      {/* Hero Image with Gradient Overlay */}
      {heroImage && isVisible && (
        <div className="absolute inset-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className={cn(
              "object-cover transition-opacity duration-500",
              isImageLoaded ? "opacity-100" : "opacity-0"
            )}
            priority={true}
            sizes="100vw"
            onLoad={() => setIsImageLoaded(true)}
            quality={90}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Content Container */}
      <div className="container relative">
        <div
          className={cn(
            "flex flex-col gap-4 py-16 md:py-24",
            alignment === "center" && "items-center text-center",
            alignment === "left" && "items-start text-left"
          )}
        >
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumbs items={breadcrumbs} />
          )}

          {/* Main Content */}
          <div
            className={cn(
              "max-w-[800px] space-y-4",
              alignment === "center" && "mx-auto",
              heroImage && "relative z-10"
            )}
          >
            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                {description}
              </p>
            )}

            {/* CTA Button */}
            {ctaText && ctaHref && (
              <div className="pt-4">
                <SummitButton asChild size="lg">
                  <Link href={ctaHref}>
                    {ctaText}
                  </Link>
                </SummitButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

