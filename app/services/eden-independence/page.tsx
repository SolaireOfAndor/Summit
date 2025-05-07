import { PageHero } from "@/components/sections/page-hero"
import { ServiceCard } from "@/components/features/service-card"
import { SectionSeparator } from "@/components/ui/section-separator"
import { Users, Home, Package2, Users2 } from "lucide-react"

const services = [
  {
    title: "SIL Vacancies",
    description:
      "Explore our current Supported Independent Living openings across various locations. Find the perfect match for your lifestyle and support needs.",
    icon: Home,
    href: "/services/sil-vacancies",
  },
  {
    title: "Eden SIL Models",
    description:
      "Discover our innovative approach to supported living, designed to maximize independence while ensuring the right level of support.",
    icon: Users,
    href: "/services/sil-models",
  },
  {
    title: "Shared Supported Accommodations",
    description:
      "Experience the benefits of communal living with dedicated support staff and a vibrant community of peers.",
    icon: Users2,
    href: "/services/shared-accommodations",
  },
  {
    title: "Community Packs",
    description:
      "Access comprehensive resources and support packages designed to help you integrate and thrive in your local community.",
    icon: Package2,
    href: "/services/community-packs",
  },
]

export default function EdenIndependencePage() {
  return (
    <>
      <PageHero
        title="Eden Independence"
        description="Supporting your journey to independent living through comprehensive supported independent living services."
        breadcrumbs={[
          { title: "Services", href: "/services" },
          { title: "Eden Independence", href: "/services/eden-independence" },
        ]}
        heroImage={{
          src: "/header/page-header-6.webp",
          alt: "Supported independent living environment",
        }}
      />

      {/* Introduction Section with teal accents */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white" aria-label="Introduction">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]" />
        <div className="container relative px-8 sm:px-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Your Path to Independent Living</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Eden Independence, we believe that everyone deserves the opportunity to live life on their own terms.
              Our comprehensive support services are tailored to your individual needs, helping you achieve greater
              independence while ensuring you have the right support when you need it.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {[
                { number: "150+", label: "Supported Individuals" },
                { number: "45+", label: "Locations" },
                { number: "24/7", label: "Support Available" },
                { number: "98%", label: "Satisfaction Rate" },
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
        <div className="container relative px-8 sm:px-24">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                className="hover:bg-secondary/5 transition-all hover:shadow-lg border border-secondary/10"
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- New Section: Premium Property Features --- */}
      <section className="relative py-16 md:py-24 bg-secondary/[0.02]" aria-label="Property Features">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#692b74_1px,transparent_1px),linear-gradient(-45deg,#692b74_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.02]" />
        <SectionSeparator variant="secondary" className="top-0" />
        <SectionSeparator variant="secondary" className="bottom-0" />
        <div className="container relative px-8 sm:px-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Enhanced Independent Living Features</h2>
            <p className="text-lg text-muted-foreground">
              Our unique design integrates smart technology and accessible features to empower you to live independently with ease and confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Home Technology",
                description:
                  "Smart technology that allows you to effortlessly control your environment—voice commands, automated lighting, and climate control to support your autonomous lifestyle.",
                icon: "🏠",
              },
              {
                title: "Accessible Design",
                description:
                  "Thoughtfully designed layouts with wide doorways and level thresholds that ensure seamless mobility and comfort for your independent living.",
                icon: "♿",
              },
              {
                title: "Safety Features",
                description:
                  "Robust safety measures including 24/7 emergency response, secure entry, and vigilant fire safety systems to keep you secure.",
                icon: "🛡️",
              },
              {
                title: "Modern Amenities",
                description:
                  "Modern finishes and durable features that combine style with functionality, supporting your everyday needs.",
                icon: "✨",
              },
              {
                title: "Outdoor Spaces",
                description:
                  "Inviting outdoor areas, from gardens to patios, that encourage relaxation and foster community engagement.",
                icon: "��",
              },
              {
                title: "Support Areas",
                description:
                  "Integrated support spaces that facilitate access to assistance, ensuring both privacy and care whenever required.",
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
      {/* --- End New Section --- */}

      {/* Support Section with gold accents */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-accent/[0.02]" aria-label="Support">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#caae3a_1px,transparent_1px),linear-gradient(to_bottom,#caae3a_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]" />
        <SectionSeparator variant="accent" className="top-0" />
        <div className="container relative px-8 sm:px-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Dedicated Support Team</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our experienced team of support workers and coordinators are committed to helping you achieve your
                goals. We work closely with you to understand your needs, preferences, and aspirations, ensuring that
                you receive the right level of support to maintain your independence.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 on-call support available",
                  "Qualified and experienced support workers",
                  "Regular check-ins and progress reviews",
                  "Flexible support arrangements",
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
                      className="h-5 w-5 text-accent flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src="/51.webp"
                alt="Support Team"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

