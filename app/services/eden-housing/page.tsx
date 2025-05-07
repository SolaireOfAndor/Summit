import { PageHero } from "@/components/sections/page-hero"
import { ServiceCard } from "@/components/features/service-card"
import { SectionSeparator } from "@/components/ui/section-separator"
import { Building2, Clock, CalendarClock, Shield } from "lucide-react"

const services = [
  {
    title: "SDA Vacancies",
    description:
      "Explore our available Specialist Disability Accommodation properties. Purpose-built homes designed to support your independence and lifestyle needs.",
    icon: Building2,
    href: "/services/sda-vacancies",
  },
  {
    title: "Short Term Accommodation (STA)",
    description:
      "Flexible short-term stays in fully supported environments. Perfect for respite care or trying out supported living arrangements.",
    icon: Clock,
    href: "/services/sta",
  },
  {
    title: "Medium Term Accommodation (MTA)",
    description:
      "Transitional housing solutions while you wait for long-term SDA or during home modifications. Extended stay options with full support.",
    icon: CalendarClock,
    href: "/services/mta",
  },
]

const standards = [
  {
    title: "High Physical Support",
    description: "Accommodation designed for participants with significant physical support needs",
  },
  {
    title: "Robust",
    description: "Accommodation that is resilient and designed to be safe and secure",
  },
  {
    title: "Fully Accessible",
    description: "Accommodation that meets high accessibility requirements",
  },
  {
    title: "Improved Liveability",
    description: "Accommodation with enhanced features for easier living",
  },
]

export default function EdenHousingPage() {
  return (
    <>
      <PageHero
        title="Eden Housing"
        description="Specialist Disability Accommodation designed to support independence, comfort, and dignity in everyday living."
        breadcrumbs={[
          { title: "Services", href: "/services" },
          { title: "Eden Housing", href: "/services/eden-housing" },
        ]}
        heroImage={{
          src: "/header/page-header-9.webp",
          alt: "Modern specialist disability accommodation building",
        }}
      />

      {/* Introduction Section with teal accents */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white" aria-label="Introduction">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]" />
        <div className="container relative px-8 sm:px-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Quality Housing Solutions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Eden Housing provides high-quality Specialist Disability Accommodation that goes beyond just a place to
              live. Our properties are thoughtfully designed to support independence, comfort, and dignity for NDIS
              participants, with options ranging from short-term stays to permanent homes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {[
                { number: "200+", label: "Properties" },
                { number: "4", label: "Design Categories" },
                { number: "50+", label: "Locations" },
                { number: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with purple accents */}
      <section className="relative py-16 md:py-24 bg-secondary/[0.02]" aria-label="Services">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#692b74_1px,transparent_1px),linear-gradient(-45deg,#692b74_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.02]" />
        <SectionSeparator variant="secondary" className="top-0" />
        <SectionSeparator variant="secondary" className="bottom-0" />
        <div className="container relative px-12 sm:px-24">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Design Standards Section with gold accents */}
      <section
        className="relative py-16 md:py-24 bg-gradient-to-b from-white to-accent/[0.02]"
        aria-label="Design Standards"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#caae3a_1px,transparent_1px),linear-gradient(to_bottom,#caae3a_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]" />
        <SectionSeparator variant="accent" className="top-0" />
        <div className="container relative px-12 sm:px-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">SDA Design Standards</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Built to the Highest Standards</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our properties are built and maintained to meet the highest standards of Specialist Disability
                Accommodation. Each property is carefully designed to cater to different support needs and preferences,
                ensuring comfort, safety, and independence for all residents.
              </p>
              <div className="grid gap-6 mt-8">
                {standards.map((standard) => (
                  <div key={standard.title} className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{standard.title}</h3>
                      <p className="text-sm text-muted-foreground">{standard.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src="/house-image/10.webp"
                alt="SDA Design Standards Illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Features Section with purple accents */}
      <section className="relative py-16 md:py-24 bg-secondary/[0.02]" aria-label="Property Features">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#692b74_1px,transparent_1px),linear-gradient(-45deg,#692b74_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.02]" />
        <SectionSeparator variant="secondary" className="top-0" />
        <SectionSeparator variant="secondary" className="bottom-0" />
        <div className="container relative px-12 sm:px-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Premium Property Features</h2>
            <p className="text-lg text-muted-foreground">
              Our properties are equipped with state-of-the-art features and amenities designed to enhance your comfort
              and independence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Home Technology",
                description:
                  "Voice-activated controls, automated lighting, and climate control systems for enhanced independence.",
                icon: "🏠",
              },
              {
                title: "Accessible Design",
                description:
                  "Wide doorways, level thresholds, and spacious rooms designed for easy mobility and comfort.",
                icon: "♿",
              },
              {
                title: "Safety Features",
                description: "24/7 emergency response systems, secure entry, and monitored fire safety systems.",
                icon: "🛡️",
              },
              {
                title: "Modern Amenities",
                description: "High-quality fixtures, durable materials, and contemporary design elements throughout.",
                icon: "✨",
              },
              {
                title: "Outdoor Spaces",
                description: "Accessible gardens, patios, or balconies for outdoor enjoyment and relaxation.",
                icon: "🌿",
              },
              {
                title: "Support Areas",
                description: "Dedicated spaces for support workers and medical equipment storage when needed.",
                icon: "👥",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="relative group p-6 bg-white rounded-xl border border-secondary/10 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all"
              >
                <div className="space-y-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section with teal accents */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary/[0.02]" aria-label="Locations">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]" />
        <SectionSeparator variant="primary" className="top-0" />
        <div className="container relative px-12 sm:px-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted order-2 lg:order-1">
              <img
                src="/house-image/4.webp"
                alt="Map of Eden Housing Locations"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Strategically Located Properties</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our properties are thoughtfully located to ensure easy access to community facilities, healthcare
                services, and public transport. We understand the importance of location in maintaining independence and
                community connection.
              </p>
              <ul className="space-y-4">
                {[
                  "Close to public transport",
                  "Near medical facilities",
                  "Easy access to shopping centers",
                  "Community facilities within reach",
                  "Safe and established neighborhoods",
                ].map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

