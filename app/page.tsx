import { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesOverview } from "@/components/sections/services-overview"
import { PropertiesHighlight } from "@/components/sections/properties-highlight"
import { ParticipantFirstCTA } from "@/components/sections/participant-first-cta"
import { WhyChooseSummit } from "@/components/sections/why-choose-summit"
import { SectionSeparator } from "@/components/ui/section-separator"

export const metadata: Metadata = {
  title: "Summit | SIL Services & Supported Independent Living NSW",
  description: "Summit provides personalised Supported Independent Living (SIL) services and quality accommodation across NSW. Browse SIL vacancies, explore our properties, and find the support you need for independent living.",
  keywords: [
    "Supported Independent Living",
    "SIL services NSW",
    "SIL vacancies",
    "SIL properties Sydney",
    "NDIS support services",
    "independent living support",
    "disability support Sydney",
    "NDIS provider NSW",
    "accessible housing",
    "daily living support",
    "participant empowerment",
    "SDA properties NSW",
  ],
  openGraph: {
    title: "Summit | SIL Services & Supported Independent Living NSW",
    description: "Summit provides personalised SIL services and quality accommodation across NSW. Browse vacancies and find your path to independent living.",
    type: "website",
    locale: "en_AU",
    siteName: "Summit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit | SIL Services & Supported Independent Living NSW",
    description: "Summit provides personalised SIL services and quality accommodation across NSW. Browse vacancies and find your path to independent living.",
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
      
      <PropertiesHighlight />
      
      <ParticipantFirstCTA />
      
      <SectionSeparator />
      
      <ServicesOverview />
      
      <SectionSeparator />
      
      <WhyChooseSummit />
    </main>
  )
}

