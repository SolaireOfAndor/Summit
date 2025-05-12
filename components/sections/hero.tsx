/**
 * @component Hero
 * @description Main hero section displayed on the homepage. Features a prominent call-to-action,
 * descriptive text about SummitSDA's services, and visual elements with a gradient background.
 * 
 * @example
 * ```tsx
 * <Hero />
 * ```
 * 
 * @category Section
 * @usedIn Homepage
 */
import Link from "next/link"
import Image from "next/image"
import { SummitButton } from "@/components/ui/summit-button"

export function Hero() {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-primary/20 via-white to-accent/10"
      aria-label="Hero section"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#692b74_1px,transparent_1px),linear-gradient(to_bottom,#692b74_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.03]"
        aria-hidden="true" 
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
                SummitSDA
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-secondary/90 max-w-xl">
                Empowering independence through thoughtfully designed living spaces and comprehensive NDIS support services across NSW.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <SummitButton asChild size="lg">
                <Link href="/services/sil-vacancies">Explore Vacancies</Link>
              </SummitButton>
              <SummitButton asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </SummitButton>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-8">
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-secondary">50+</p>
                  <p className="text-sm text-muted-foreground">participants supported</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-secondary">98%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-bold text-secondary">24/7</p>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:col-span-8 lg:h-[600px] h-[400px]">
            <Image
              src="/nurse-walking-with-senior-patient-wheelchair.webp"
              alt="A joyful moment showing care and support at SummitSDA"
              fill
              className="object-cover object-bottom rounded-2xl shadow-2xl"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 66vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLi44QjY4NC43OC0tMUE3QjlDRUlKLzZPVU5GTVJLT0j/2wBDAQoLCw8NDx0QEBpJLiYuSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUn/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div 
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

