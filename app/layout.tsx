import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ColorBlindModeProvider } from "@/contexts/color-blind-context"
import { DarkModeProvider } from "@/contexts/dark-mode-context"
import { ReadableFontModeProvider } from "@/contexts/readable-font-context"
import { ScrollProgress } from "@/components/common/scroll-progress"
import { ScrollToTop } from "@/components/navigation/scroll-to-top"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Summit | SIL Provider Sydney — Supported Independent Living NSW",
    template: "%s | Summit"
  },
  description: "Summit is a registered NDIS SIL provider delivering 24/7 Supported Independent Living across Sydney & NSW. Specialising in ABI, spinal cord injury & high-intensity care. Participant-first approach — we find the right home and support for you.",
  keywords: [
    "SIL provider Sydney",
    "Supported Independent Living NSW",
    "NDIS SIL provider",
    "24/7 SIL support Sydney",
    "SIL vacancies Sydney",
    "disability support Sydney",
    "NDIS registered provider",
    "ABI support Sydney",
    "spinal cord injury SIL",
    "high intensity SIL NSW",
    "SIL Eastern Suburbs",
    "SIL Parramatta",
    "SIL Manly Northern Beaches",
  ],
  authors: [{ name: "Summit" }],
  creator: "Summit",
  publisher: "Summit",
  metadataBase: new URL("https://summitsda.com.au"),
  icons: {
    icon: [
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon-32.png',
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://summitsda.com.au",
    siteName: "Summit",
    title: "Summit | SIL Provider Sydney — Supported Independent Living NSW",
    description: "Summit is a registered NDIS SIL provider delivering 24/7 Supported Independent Living across Sydney & NSW. Specialising in ABI, spinal cord injury & high-intensity care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Summit — Supported Independent Living (SIL) Provider Sydney & NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit | SIL Provider Sydney — Supported Independent Living NSW",
    description: "Summit is a registered NDIS SIL provider delivering 24/7 Supported Independent Living across Sydney & NSW. Specialising in ABI, spinal cord injury & high-intensity care.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "google9c17074d3dab8932",
  },
}

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://summitsda.com.au/#organization",
      "name": "Summit",
      "alternateName": "Summit Supported Independent Living",
      "url": "https://summitsda.com.au",
      "logo": {
        "@type": "ImageObject",
        "url": "https://summitsda.com.au/Logo/logo.png",
        "width": 300,
        "height": 100
      },
      "image": "https://summitsda.com.au/og-image.jpg",
      "description": "Summit is a registered NDIS Supported Independent Living (SIL) provider delivering 24/7 personalised care across Sydney and NSW. Specialising in acquired brain injury, spinal cord injury, physical disability, and psychosocial support.",
      "foundingDate": "2020",
      "priceRange": "NDIS Funded",
      "areaServed": [
        {
          "@type": "City",
          "name": "Sydney",
          "containedInPlace": {
            "@type": "State",
            "name": "New South Wales"
          }
        },
        {
          "@type": "State",
          "name": "New South Wales",
          "containedInPlace": {
            "@type": "Country",
            "name": "Australia"
          }
        }
      ],
      "serviceArea": [
        { "@type": "Place", "name": "Eastern Suburbs Sydney" },
        { "@type": "Place", "name": "Sydney CBD" },
        { "@type": "Place", "name": "Manly and Northern Beaches" },
        { "@type": "Place", "name": "Parramatta and Western Sydney" },
        { "@type": "Place", "name": "Mascot and Inner South Sydney" },
        { "@type": "Place", "name": "Wollongong and Illawarra" },
        { "@type": "Place", "name": "Newcastle and Hunter" },
        { "@type": "Place", "name": "Central Coast NSW" }
      ],
      "knowsAbout": [
        "Supported Independent Living",
        "NDIS Support Services",
        "Acquired Brain Injury Care",
        "Spinal Cord Injury Support",
        "High Intensity Disability Support",
        "Psychosocial Disability Support",
        "24/7 Rostered Care",
        "NDIS Roster of Care",
        "Disability Support Sydney"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-450-016-874",
        "email": "Eliot@summitsda.com.au",
        "contactType": "customer service",
        "areaServed": "AU",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      "sameAs": [
        "https://www.facebook.com/summitsda",
        "https://www.linkedin.com/company/summitsda"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://summitsda.com.au/#website",
      "url": "https://summitsda.com.au",
      "name": "Summit — Supported Independent Living",
      "description": "Summit is a registered NDIS SIL provider delivering 24/7 Supported Independent Living across Sydney and NSW. Participant-first approach to personalised disability support.",
      "publisher": {
        "@id": "https://summitsda.com.au/#organization"
      },
      "inLanguage": "en-AU"
    },
    {
      "@type": "Service",
      "@id": "https://summitsda.com.au/#sil-service",
      "name": "Supported Independent Living (SIL)",
      "description": "Summit delivers personalised 24/7 Supported Independent Living (SIL) with rostered care tailored to each participant. Specialising in acquired brain injury, spinal cord injury, physical disability, intellectual disability, and psychosocial support across Sydney and NSW.",
      "provider": {
        "@id": "https://summitsda.com.au/#organization"
      },
      "areaServed": [
        { "@type": "City", "name": "Sydney" },
        { "@type": "State", "name": "New South Wales" }
      ],
      "serviceType": "Supported Independent Living",
      "category": "Disability Care",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "SIL Support Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "24/7 Rostered SIL Care",
              "description": "Round-the-clock personalised support based on each participant's individual Roster of Care"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Acquired Brain Injury SIL Support",
              "description": "Specialist SIL support for participants with acquired brain injury in Sydney and NSW"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Spinal Cord Injury SIL Support",
              "description": "Expert SIL care for participants with spinal cord injuries requiring high-intensity support"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "High Intensity SIL Support",
              "description": "Complex care and high-intensity SIL for participants with physical disabilities"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Psychosocial SIL Support",
              "description": "Supported Independent Living for participants with psychosocial and mental health conditions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Shared Living SIL",
              "description": "Shared living arrangements with dedicated 24/7 support staff in a community environment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Individual SIL Support",
              "description": "One-on-one personalised SIL support in the participant's own home or chosen property"
            }
          }
        ]
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "NDIS Participants requiring Supported Independent Living"
      },
      "termsOfService": "https://summitsda.com.au/learn/about-sil"
    },
    {
      "@type": "Service",
      "@id": "https://summitsda.com.au/#sda-service",
      "name": "Specialist Disability Accommodation (SDA)",
      "description": "Purpose-built, accessible housing designed for people with extreme functional impairment or high support needs across NSW.",
      "provider": {
        "@id": "https://summitsda.com.au/#organization"
      },
      "areaServed": {
        "@type": "State",
        "name": "New South Wales"
      },
      "serviceType": "Specialist Disability Accommodation"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        <DarkModeProvider>
          <ColorBlindModeProvider>
            <ReadableFontModeProvider>
              <div className="relative flex min-h-screen flex-col">
                <ScrollProgress />
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <ScrollToTop />
              </div>
            </ReadableFontModeProvider>
          </ColorBlindModeProvider>
        </DarkModeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}