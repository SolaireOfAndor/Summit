import type { Metadata, Viewport } from "next"
import { Outfit, Montserrat } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type React from "react"
import { ScrollProgress } from "@/components/common/scroll-progress"
import { ScrollToTop } from "@/components/navigation/scroll-to-top"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading" })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://edenability.com.au'),
  title: "EDENABILITY - Specialist Disability Accommodations",
  description: "Creating cleaner, healthier spaces so you can focus on what matters most.",
  generator: 'v0.dev',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://edenability.com.au',
    siteName: 'EDENABILITY',
    title: 'EDENABILITY - Specialist Disability Accommodations',
    description: 'Creating cleaner, healthier spaces so you can focus on what matters most.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EDENABILITY',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDENABILITY - Specialist Disability Accommodations',
    description: 'Creating cleaner, healthier spaces so you can focus on what matters most.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${montserrat.variable} font-sans min-h-screen flex flex-col`}>
        <ScrollProgress />
        <ScrollToTop />
        <Header />
        <main className="flex-1 [&>*:first-child:not(:has(.hero))]:pt-28 md:[&>*:first-child:not(:has(.hero))]:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'