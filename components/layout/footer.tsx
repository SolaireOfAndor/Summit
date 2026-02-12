import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

/**
 * @component Footer
 * @description The main site footer for SummitSDA, containing contact information, navigation links, service details, accessibility information, and social media links. Appears at the bottom of all pages.
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 *
 * @category Layout
 * @usedIn All pages via the RootLayout
 * @returns {JSX.Element}
 */
export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--deep-brown))/0.3] py-12 bg-[hsl(var(--deep-brown))] text-[hsl(var(--text-white))]">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <h3 className="font-bold text-[hsl(var(--primary))]">SummitSDA</h3>
          <p className="text-sm text-[hsl(var(--text-white))/0.9]">Empowering NDIS participants across NSW with high-quality, participant-centered support and accommodation.</p>
          <div className="space-y-2 text-sm text-[hsl(var(--text-white))/0.8]">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[hsl(var(--primary))]" />
              <p>Sydney, NSW 2000</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[hsl(var(--primary))]" />
              <a href="tel:0450016874" className="text-[hsl(var(--text-white))/0.9] hover:text-[hsl(var(--primary))] transition-colors">
                0450 016 874
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[hsl(var(--primary))]" />
              <a href="mailto:Eliot@summitsda.com.au" className="text-[hsl(var(--text-white))/0.9] hover:text-[hsl(var(--primary))] transition-colors break-all">
                Eliot@summitsda.com.au
              </a>
            </div>
          </div>
          <div className="flex gap-4 pt-2 social-links">
            <Link href="https://www.facebook.com/SummitSDA" className="text-[hsl(var(--text-white))/0.8] hover:text-[hsl(var(--primary))] transition-colors" aria-label="SummitSDA Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/summitsda/" className="text-[hsl(var(--text-white))/0.8] hover:text-[hsl(var(--primary))] transition-colors" aria-label="SummitSDA Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/company/summitsda/" className="text-[hsl(var(--text-white))/0.8] hover:text-[hsl(var(--primary))] transition-colors" aria-label="SummitSDA LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[hsl(var(--primary))]">About</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/about/summit-vision" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                Summit Vision
              </Link>
            </li>
            <li>
              <Link href="/about/about-summit" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                About SummitSDA
              </Link>
            </li>
            <li>
              <Link href="/about/feedback" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                Feedback & Complaints
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[hsl(var(--primary))]">Learn</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/learn" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                Learning Hub
              </Link>
            </li>
            <li>
              <Link href="/learn/funding" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                NDIS Funding
              </Link>
            </li>
            <li>
              <Link href="/learn/about-sda" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                About SDA
              </Link>
            </li>
            <li>
              <Link href="/learn/about-sil" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                About SIL
              </Link>
            </li>
            <li>
              <Link href="/learn/about-sta" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                About STA
              </Link>
            </li>
            <li>
              <Link href="/learn/about-mta" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                About MTA
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="font-semibold mb-4 text-[hsl(var(--primary))]">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/supported-accommodations" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                  Supported Accommodations
                </Link>
              </li>
              <li>
                <Link href="/drop-in-support" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                  Drop-in Support
                </Link>
              </li>
              <li>
                <Link href="/community-participation" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                  Community Participation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-[hsl(var(--primary))]">Properties</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/properties" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                  Available Properties
                </Link>
              </li>
              <li>
                <Link href="/properties/sda-vacancies" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                  SDA Vacancies
                </Link>
              </li>
              <li>
                <Link href="/properties/sil-vacancies" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                  SIL Vacancies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[hsl(var(--primary))]">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--primary))]">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-[hsl(var(--text-white))/0.1]">
        <div className="text-center text-sm text-[hsl(var(--text-white))/0.8]">
          <p>Registered NDIS Provider | ABN 12 345 678 901</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} SummitSDA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

