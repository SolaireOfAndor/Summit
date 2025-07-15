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
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-bold text-[hsl(var(--accent))]">SummitSDA</h3>
          <p className="text-sm text-[hsl(var(--text-white))/0.9]">Empowering NDIS participants across NSW with high-quality, participant-centered support and accommodation.</p>
          <div className="space-y-2 text-sm text-[hsl(var(--text-white))/0.8]">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[hsl(var(--accent))]" />
              <p>Sydney, NSW 2000</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[hsl(var(--accent))]" />
              <p>1300 000 000</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[hsl(var(--accent))]" />
              <p>contact@summitsda.com.au</p>
            </div>
          </div>
          <div className="flex gap-4 pt-2 social-links">
            <Link href="https://www.facebook.com/SummitSDA" className="text-[hsl(var(--text-white))/0.8] hover:text-[hsl(var(--accent))] transition-colors" aria-label="SummitSDA Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/summitsda/" className="text-[hsl(var(--text-white))/0.8] hover:text-[hsl(var(--accent))] transition-colors" aria-label="SummitSDA Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/company/summitsda/" className="text-[hsl(var(--text-white))/0.8] hover:text-[hsl(var(--accent))] transition-colors" aria-label="SummitSDA LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[hsl(var(--accent))]">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/services/summit-housing" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                Summit Housing
              </Link>
            </li>
            <li>
              <Link href="/services/summit-independence" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                Summit Independence
              </Link>
            </li>
            <li>
              <Link href="/services/summit-lifestyle" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                Summit Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/services/sda-vacancies" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                SDA Vacancies
              </Link>
            </li>
            <li>
              <Link href="/services/sil-vacancies" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                SIL Vacancies
              </Link>
            </li>
            <li>
              <Link href="/services/sta" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                Short Term Accommodation
              </Link>
            </li>
            <li>
              <Link href="/services/mta" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                Medium Term Accommodation
              </Link>
            </li>
            <li>
              <Link href="/services/sil-models" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                SIL Models
              </Link>
            </li>
            <li>
              <Link href="/services/shared-accommodations" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                Shared Accommodations
              </Link>
            </li>
            <li>
              <Link href="/services/community-packs" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                Community Packs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[hsl(var(--accent))]">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                All Resources
              </Link>
            </li>
            <li>
              <Link href="/resources/about-sda" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                About SDA
              </Link>
            </li>
            <li>
              <Link href="/resources/about-sil" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                About SIL
              </Link>
            </li>
            <li>
              <Link href="/resources/sda-eligibility" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                SDA Eligibility
              </Link>
            </li>
            <li>
              <Link href="/resources/sda-toolkit" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                SDA Toolkit
              </Link>
            </li>
            <li>
              <Link href="/resources/sda-pathways" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                SDA Pathways
              </Link>
            </li>
            <li>
              <Link href="/resources/sda-ownership" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                SDA Ownership
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="font-semibold mb-4 text-[hsl(var(--accent))]">About & Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/signature-housing" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                  Signature Housing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/about/feedback" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                  Feedback & Complaints
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-[hsl(var(--text-white))/0.9] transition-colors hover:text-[hsl(var(--accent))]">
                  Available Properties
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal section temporarily disabled
          <div>
            <h4 className="font-semibold mb-4 text-accent">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-white/80 transition-colors hover:text-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-white/80 transition-colors hover:text-accent">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/ndis-terms" className="text-white/80 transition-colors hover:text-accent">
                  NDIS Terms
                </Link>
              </li>
            </ul>
          </div>
          */}
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

