import { PageHero } from "@/components/sections/page-hero"
import { ServiceCard } from "@/components/features/service-card"
import { SectionSeparator } from "@/components/ui/section-separator"
import { Users, Activity, Coffee, Heart, Calendar } from "lucide-react"
import CTASection from "@/components/sections/cta-section"

const services = [
  {
    title: "Community Packs",
    description:
      "Access comprehensive resources and support packages designed to help you integrate and thrive in your local community.",
    icon: Users,
    href: "/services/community-packs",
  },
  {
    title: "Social Activities",
    description:
      "Join our vibrant community events, outings, and group activities designed to foster connections and create memorable experiences.",
    icon: Calendar,
    href: "/services/social-activities",
  },
  {
    title: "Wellbeing Programs",
    description:
      "Participate in tailored programs focused on physical, mental, and emotional wellbeing to enhance your quality of life.",
    icon: Heart,
    href: "/services/wellbeing-programs",
  },
  {
    title: "Skill Development",
    description:
      "Develop new skills and interests through our specialized workshops and training programs designed for all ability levels.",
    icon: Activity,
    href: "/services/skill-development",
  },
]

export default function EdenLifestylePage() {
  return (
    <>
      <PageHero
        title="Eden Lifestyle"
        description="Enriching lives through community engagement, social activities, and personalized lifestyle support."
        breadcrumbs={[
          { title: "Services", href: "/services" },
          { title: "Eden Lifestyle", href: "/services/eden-lifestyle" },
        ]}
        heroImage={{
          src: "/header/page-header-4.webp",
          alt: "People enjoying lifestyle activities",
        }}
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background" aria-label="Our lifestyle services">
        <div className="container px-6 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Lifestyle Services</h2>
            <p className="text-muted-foreground text-lg">
              Discover our range of lifestyle services designed to enhance your independence, social connections, and overall wellbeing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Activities Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden" aria-label="Activities and programs">
        <SectionSeparator variant="primary" className="top-0" />
        <SectionSeparator variant="primary" className="bottom-0" />
        <div className="container relative px-6 sm:px-6 max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Engaging Activities and Programs</h2>
              <p className="text-lg text-muted-foreground">
                Our lifestyle programs are designed to provide meaningful engagement, foster social connections, and enhance your quality of life. We believe that everyone deserves to live a rich, fulfilling life with access to activities they enjoy.
              </p>
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/10">
                  <h3 className="text-xl font-semibold text-primary mb-3">Community Participation</h3>
                  <p className="text-muted-foreground">
                    We facilitate opportunities for you to engage with your local community through organized events, volunteer work, and social gatherings tailored to your interests.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/10">
                  <h3 className="text-xl font-semibold text-primary mb-3">Recreational Activities</h3>
                  <p className="text-muted-foreground">
                    From art classes and cooking workshops to sports and fitness programs, we offer a diverse range of recreational activities to suit various preferences and abilities.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-primary/10">
                  <h3 className="text-xl font-semibold text-primary mb-3">Personal Development</h3>
                  <p className="text-muted-foreground">
                    Our skill-building workshops and educational programs help you develop new abilities, explore interests, and achieve personal growth goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src="/52.webp"
                alt="People engaging in activities"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white" aria-label="Lifestyle benefits">
        <div className="container px-6 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Lifestyle Programs</h2>
            <p className="text-muted-foreground text-lg">
              Our holistic approach to lifestyle support provides numerous advantages for participants seeking a more fulfilling and connected life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Social Connections",
                description: "Build meaningful relationships and reduce isolation through regular social interaction and community engagement.",
                icon: "👥",
              },
              {
                title: "Improved Mental Wellbeing",
                description: "Boost your mood, confidence, and overall mental health through purposeful activities and social engagement.",
                icon: "🧠",
              },
              {
                title: "Physical Health Benefits",
                description: "Stay active and healthy with physical activities tailored to your abilities and preferences.",
                icon: "💪",
              },
              {
                title: "Skill Development",
                description: "Learn new skills and develop existing ones through structured programs and workshops.",
                icon: "🎯",
              },
              {
                title: "Greater Independence",
                description: "Gain confidence in your abilities and become more self-reliant through our supportive programs.",
                icon: "🚀",
              },
              {
                title: "Fun and Enjoyment",
                description: "Experience joy and satisfaction through engaging in activities you love with people who share your interests.",
                icon: "🎉",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="relative group p-6 bg-white rounded-xl border border-accent/10 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="space-y-4">
                  <div className="text-3xl">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-accent/5 relative overflow-hidden" aria-label="Testimonials">
        <SectionSeparator variant="accent" className="top-0" />
        <SectionSeparator variant="accent" className="bottom-0" />
        <div className="container relative px-6 sm:px-6 max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted order-2 lg:order-1">
              <img
                src="/51.webp"
                alt="Participant enjoying community activities"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">What Our Participants Say</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-accent/10 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute -top-4 -left-4 text-accent/20"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p className="text-lg mb-6">
                  Since joining Eden's lifestyle programs, my life has completely transformed. I've made new friends, discovered talents I never knew I had, and feel more confident in myself. The team truly cares about creating experiences that matter to us.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-accent/10">
                    <img
                      src="/avatar/1.webp"
                      alt="Sarah T."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah T.</h4>
                    <p className="text-sm text-muted-foreground">Program participant for 2 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <CTASection
        title="Enhance Your Lifestyle Journey"
        description="Join our vibrant community programs and discover new opportunities for social connection, personal growth, and meaningful engagement."
        primaryButtonText="Contact Us Today"
        primaryButtonLink="/contact"
        secondaryButtonText="View Upcoming Activities"
        secondaryButtonLink="/services/social-activities"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="Group of people enjoying community activities"
        footerText="Want to learn more about our community integration? Check our"
        footerLinkText="Community Packs Guide"
        footerLinkHref="/services/community-packs"
      />
    </>
  )
} 