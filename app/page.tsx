import { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesOverview } from "@/components/sections/services-overview"
import { PropertiesHighlight } from "@/components/sections/properties-highlight"
import { ParticipantFirstCTA } from "@/components/sections/participant-first-cta"
import { WhyChooseSummit } from "@/components/sections/why-choose-summit"
import { SectionSeparator } from "@/components/ui/section-separator"

export const metadata: Metadata = {
  title: "Summit | SIL Provider Sydney — Supported Independent Living NSW",
  description: "Summit is a registered NDIS SIL provider delivering 24/7 Supported Independent Living across Sydney & NSW. Specialising in ABI, spinal cord injury & high-intensity care. Participant-first approach — we find the right home and support for you.",
  keywords: [
    "SIL provider Sydney",
    "Supported Independent Living NSW",
    "NDIS SIL provider near me",
    "24/7 SIL support Sydney",
    "SIL vacancies Sydney",
    "SIL Eastern Suburbs Sydney",
    "SIL provider Parramatta",
    "SIL provider Manly",
    "SIL for acquired brain injury",
    "SIL spinal cord injury NSW",
    "high intensity SIL Sydney",
    "NDIS registered provider Sydney",
    "disability support Sydney",
    "shared living SIL NSW",
    "SIL mental health Sydney",
  ],
  openGraph: {
    title: "Summit | SIL Provider Sydney — Supported Independent Living NSW",
    description: "Summit is a registered NDIS SIL provider delivering 24/7 Supported Independent Living across Sydney & NSW. Specialising in ABI, spinal cord injury & high-intensity care.",
    type: "website",
    locale: "en_AU",
    siteName: "Summit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit | SIL Provider Sydney — Supported Independent Living NSW",
    description: "Summit is a registered NDIS SIL provider delivering 24/7 Supported Independent Living across Sydney & NSW. Specialising in ABI, spinal cord injury & high-intensity care.",
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

