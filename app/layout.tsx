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

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Summit | NDIS Support Services & SDA Properties NSW",
    template: "%s | Summit"
  },
  description: "Summit delivers participant-centered NDIS support and high-quality accommodation across NSW. Explore our SDA properties, SIL services, learning resources, and comprehensive disability support services.",
  keywords: [
    "NDIS support services",
    "SDA properties NSW", 
    "Supported Independent Living",
    "Specialist Disability Accommodation",
    "disability support Sydney",
    "NDIS provider NSW"
  ],
  authors: [{ name: "Summit" }],
  creator: "Summit",
  publisher: "Summit",
  metadataBase: new URL("https://summitsda.com.au"),
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://summitsda.com.au",
    siteName: "Summit",
    title: "Summit | NDIS Support Services & SDA Properties NSW",
    description: "Summit delivers participant-centered NDIS support and high-quality accommodation across NSW. Empowering your journey to independence.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Summit - NDIS Support Services & SDA Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit | NDIS Support Services & SDA Properties NSW",
    description: "Summit delivers participant-centered NDIS support and high-quality accommodation across NSW. Empowering your journey to independence.",
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
    google: "your-google-verification-code",
  },
}

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://summitsda.com.au/#organization",
      "name": "Summit",
      "alternateName": "SummitSDA",
      "url": "https://summitsda.com.au",
      "logo": {
        "@type": "ImageObject",
        "url": "https://summitsda.com.au/Logo/logo.png",
        "width": 300,
        "height": 100
      },
      "description": "Summit is a registered NDIS service provider delivering participant-centered support and high-quality accommodation services across NSW.",
      "foundingDate": "2020",
      "areaServed": {
        "@type": "State",
        "name": "New South Wales",
        "containedInPlace": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": -33.8688,
          "longitude": 151.2093
        },
        "geoRadius": "500000"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-2-XXXX-XXXX",
        "contactType": "customer service",
        "areaServed": "AU",
        "availableLanguage": "English"
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
      "name": "Summit",
      "description": "Summit delivers participant-centered NDIS support and high-quality accommodation across NSW.",
      "publisher": {
        "@id": "https://summitsda.com.au/#organization"
      },
      "inLanguage": "en-AU"
    },
    {
      "@type": "Service",
      "@id": "https://summitsda.com.au/#sda-service",
      "name": "Specialist Disability Accommodation (SDA)",
      "description": "Purpose-built, accessible housing designed specifically for people with extreme functional impairment or high support needs.",
      "provider": {
        "@id": "https://summitsda.com.au/#organization"
      },
      "areaServed": {
        "@type": "State",
        "name": "New South Wales"
      },
      "serviceType": "Specialist Disability Accommodation"
    },
    {
      "@type": "Service", 
      "@id": "https://summitsda.com.au/#sil-service",
      "name": "Supported Independent Living (SIL)",
      "description": "Personalized support services to help you live independently while maintaining choice and control over your daily life.",
      "provider": {
        "@id": "https://summitsda.com.au/#organization"
      },
      "areaServed": {
        "@type": "State",
        "name": "New South Wales"
      },
      "serviceType": "Supported Independent Living"
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
      </body>
    </html>
  )
}