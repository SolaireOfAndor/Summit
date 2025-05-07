import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

/**
 * @component Footer
 * @description The main site footer containing contact information, navigation links, service details, 
 * accessibility information, and social media links. Appears at the bottom of all pages.
 * 
 * @example
 * ```tsx
 * <Footer />
 * ```
 * 
 * @category Layout
 * @usedIn All pages via the RootLayout
 */
export function Footer() {
  return (
    <footer className="border-t border-secondary/30 py-12 bg-gradient-to-b from-secondary/95 to-secondary text-white">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-bold text-accent">EDENABILITY</h3>
          <p className="text-sm text-white/80">Creating cleaner, healthier spaces for NDIS participants across NSW.</p>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <p>Sydney, NSW 2000</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <p>1300 123 456</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <p>contact@edenability.com.au</p>
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            <Link href="https://www.facebook.com/EdenAbility.ltd" className="text-white/70 hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/edenability/" className="text-white/70 hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/company/edenability/?originalSubdomain=au" className="text-white/70 hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="text-white/80 transition-colors hover:text-accent">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/services/eden-housing" className="text-white/80 transition-colors hover:text-accent">
                Eden Housing
              </Link>
            </li>
            <li>
              <Link href="/services/eden-independence" className="text-white/80 transition-colors hover:text-accent">
                Eden Independence
              </Link>
            </li>
            <li>
              <Link href="/services/eden-lifestyle" className="text-white/80 transition-colors hover:text-accent">
                Eden Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/services/sda-vacancies" className="text-white/80 transition-colors hover:text-accent">
                SDA Vacancies
              </Link>
            </li>
            <li>
              <Link href="/services/sil-vacancies" className="text-white/80 transition-colors hover:text-accent">
                SIL Vacancies
              </Link>
            </li>
            <li>
              <Link href="/services/sta" className="text-white/80 transition-colors hover:text-accent">
                Short Term Accommodation
              </Link>
            </li>
            <li>
              <Link href="/services/mta" className="text-white/80 transition-colors hover:text-accent">
                Medium Term Accommodation
              </Link>
            </li>
            <li>
              <Link href="/services/sil-models" className="text-white/80 transition-colors hover:text-accent">
                SIL Models
              </Link>
            </li>
            <li>
              <Link href="/services/shared-accommodations" className="text-white/80 transition-colors hover:text-accent">
                Shared Accommodations
              </Link>
            </li>
            <li>
              <Link href="/services/community-packs" className="text-white/80 transition-colors hover:text-accent">
                Community Packs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-accent">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/resources" className="text-white/80 transition-colors hover:text-accent">
                All Resources
              </Link>
            </li>
            <li>
              <Link href="/resources/about-sda" className="text-white/80 transition-colors hover:text-accent">
                About SDA
              </Link>
            </li>
            <li>
              <Link href="/resources/about-sil" className="text-white/80 transition-colors hover:text-accent">
                About SIL
              </Link>
            </li>
            <li>
              <Link href="/resources/sda-eligibility" className="text-white/80 transition-colors hover:text-accent">
                SDA Eligibility
              </Link>
            </li>
            <li>
              <Link href="/resources/sda-toolkit" className="text-white/80 transition-colors hover:text-accent">
                SDA Toolkit
              </Link>
            </li>
            <li>
              <Link href="/resources/sda-pathways" className="text-white/80 transition-colors hover:text-accent">
                SDA Pathways
              </Link>
            </li>
            <li>
              <Link href="/resources/sda-ownership" className="text-white/80 transition-colors hover:text-accent">
                SDA Ownership
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="font-semibold mb-4 text-accent">About & Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/80 transition-colors hover:text-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/signature-housing" className="text-white/80 transition-colors hover:text-accent">
                  Signature Housing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 transition-colors hover:text-accent">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/about/feedback" className="text-white/80 transition-colors hover:text-accent">
                  Feedback & Complaints
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-white/80 transition-colors hover:text-accent">
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

      <div className="container mt-8 pt-8 border-t border-white/10">
        <div className="text-center text-sm text-white/70">
          <p>Registered NDIS Provider | ABN 12 345 678 901</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} EDENABILITY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

