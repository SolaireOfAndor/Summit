'use client'

import { Building2, Users, Clock, Calendar, Heart, BookOpen, UserCheck } from "lucide-react"
import { ServiceCard } from "@/components/features/service-card"
import { SummitButton } from "@/components/ui/summit-button"
import Link from "next/link"
import Image from "next/image"

/**
 * @component ServicesOverview
 * @description Landing page section showcasing Summit's core NDIS services in an engaging grid layout.
 * Highlights the main services users can access through the website.
 * 
 * @example
 * ```tsx
 * <ServicesOverview />
 * ```
 * 
 * @category Section
 * @usedIn Landing Page (app/page.tsx)
 */

const coreServices = [
  {
    title: "Specialist Disability Accommodation (SDA)",
    description: "Purpose-built accessible housing with specialized features.",
    icon: Building2,
    href: "/supported-accommodations/sda",
  },
  {
    title: "Supported Independent Living (SIL)",
    description: "Personalized support for independent living.",
    icon: Users,
    href: "/supported-accommodations/sil",
  },
  {
    title: "Medium Term Accommodation (MTA)",
    description: "Transitional housing for up to 90 days.",
    icon: Clock,
    href: "/supported-accommodations/mta",
  },
  {
    title: "Short Term Accommodation (STA)",
    description: "Respite and emergency accommodation support.",
    icon: Calendar,
    href: "/supported-accommodations/sta",
  },
  {
    title: "Daily Living Support",
    description: "Assistance with personal care and household tasks.",
    icon: Heart,
    href: "/drop-in-support/assistant-with-daily-life",
  },
  {
    title: "NDIS Guidance & Education",
    description: "Clear guidance to navigate your NDIS plan.",
    icon: BookOpen,
    href: "/learn",
  },
]

export function ServicesOverview() {
  return (
    <section 
      className="py-20 lg:py-24 bg-[hsl(var(--background))]"
      aria-labelledby="services-overview-title"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--primary))] bg-[hsl(var(--primary-transparent))] px-4 py-2 rounded-full mb-6">
              <UserCheck className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 
              id="services-overview-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(var(--heading))] mb-6"
            >
              Comprehensive NDIS Support Services
            </h2>
            <p className="text-lg text-[hsl(var(--body))] mb-8">
              From accessible housing to daily living support, we provide tailored services 
              that empower you to achieve your goals.
            </p>
            <SummitButton asChild size="lg" className="shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
              <Link href="/about/about-summit">Explore All Services</Link>
            </SummitButton>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-[hsl(var(--orange-shadow))]">
              <Image
                src="/house-image/1.webp"
                alt="Summit SDA property - accessible and modern"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-[hsl(var(--pure-white))] rounded-lg px-4 py-2 shadow-lg">
                <div className="text-sm font-semibold text-[hsl(var(--primary))]">6 Core Services</div>
                <div className="text-xs text-[hsl(var(--body))]">Tailored to Your Needs</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              className="bg-[hsl(var(--pure-white))] shadow-[0_4px_24px_0_hsl(var(--orange-shadow))] hover:shadow-[0_8px_32px_0_hsl(var(--orange-shadow))] transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
} 