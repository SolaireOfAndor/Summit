import { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesOverview } from "@/components/sections/services-overview"
import { WebsiteFeatures } from "@/components/sections/website-features"
import { PropertiesHighlight } from "@/components/sections/properties-highlight"
import { WhyChooseSummit } from "@/components/sections/why-choose-summit"
import { SectionSeparator } from "@/components/ui/section-separator"

export const metadata: Metadata = {
  title: "Summit | NDIS Support Services & SDA Properties NSW",
  description: "Summit delivers participant-centered NDIS support and high-quality accommodation across NSW. Explore our SDA properties, SIL services, learning resources, and comprehensive disability support services.",
  keywords: [
    "NDIS support services",
    "SDA properties NSW",
    "Supported Independent Living",
    "Specialist Disability Accommodation",
    "disability support Sydney",
    "NDIS provider NSW",
    "accessible housing",
    "daily living support",
    "participant empowerment",
    "NDIS education",
    "MTA accommodation",
    "STA respite care"
  ],
  openGraph: {
    title: "Summit | NDIS Support Services & SDA Properties NSW",
    description: "Summit delivers participant-centered NDIS support and high-quality accommodation across NSW. Empowering your journey to independence.",
    type: "website",
    locale: "en_AU",
    siteName: "Summit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit | NDIS Support Services & SDA Properties NSW",
    description: "Summit delivers participant-centered NDIS support and high-quality accommodation across NSW. Empowering your journey to independence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
}

export default function LandingPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      
      <SectionSeparator />
      
      <ServicesOverview />
      
      <SectionSeparator />
      
      <WebsiteFeatures />
      
      <SectionSeparator />
      
      <PropertiesHighlight />
      
      <SectionSeparator />
      
      <WhyChooseSummit />
    </main>
  )
}

