"use client"

/**
 * @component CTASection
 * @description A call-to-action section with customizable content, buttons, and an optional image.
 * This component is designed to encourage user interaction and drive conversions by providing
 * clear next steps for the user. The component has responsive behavior for mobile and desktop views.
 * 
 * @example
 * ```tsx
 * <CTASection 
 *   title="Get Started Today" 
 *   description="Join our community and discover how we can help you achieve your goals."
 *   primaryButtonText="Sign Up Now"
 *   primaryButtonLink="/signup"
 *   mobileImageSrc="/png/mobile-1.png"
 * />
 * ```
 * 
 * @category Section
 * @usedIn Various pages including About SIL, About SDA, and other landing pages
 */

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { SummitButton } from "@/components/ui/eden-button"
import { useEffect, useState } from "react"

/**
 * Props for the CTASection component
 */
export interface CTASectionProps {
  /** Main heading text for the CTA section */
  title?: string
  /** Descriptive text explaining the call to action */
  description?: string
  /** Text for the primary action button */
  primaryButtonText?: string
  /** URL the primary button links to */
  primaryButtonLink?: string
  /** Text for the secondary action button */
  secondaryButtonText?: string
  /** URL the secondary button links to */
  secondaryButtonLink?: string
  /** Path to the image displayed in the CTA section for desktop view */
  imageSrc?: string
  /** Path to the image displayed in the CTA section for mobile view */
  mobileImageSrc?: string
  /** Alt text for the image (for accessibility) */
  imageAlt?: string
  /** Optional text displayed in the footer of the CTA section */
  footerText?: string
  /** Text for the optional footer link */
  footerLinkText?: string
  /** URL the footer link points to */
  footerLinkHref?: string
  /** Additional CSS classes to apply to the component */
  className?: string
}

/**
 * Call to Action Section component with customizable content and responsive styling
 * Automatically adjusts layout for mobile and desktop views
 */
export default function CTASection({
  title = "Ready to Take the Next Step?",
  description = "We believe that everyone is different, and no two support plans are the same. Let us help you maintain your independence through SummitSDA tailored support services.",
  primaryButtonText = "Contact Us Now",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View SIL Vacancies",
  secondaryButtonLink = "/services/sil-vacancies",
  imageSrc = "/png/1.webp",
  mobileImageSrc = "/png/2.webp",
  imageAlt = "SummitSDA staff member helping a client",
  footerText = "Want to learn more about disability accommodation? Check our",
  footerLinkText = "SDA Guide",
  footerLinkHref = "/resources/about-sda",
  className = "",
}: CTASectionProps) {
  // Use the mobile image source if provided, otherwise fall back to the desktop image
  const actualMobileImageSrc = mobileImageSrc || imageSrc;
  
  // State to track if we're on mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle viewport detection with a resize listener
  useEffect(() => {
    // Initial check
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Content for both mobile and desktop variants are included in the same component
  // for better SEO (search engines will see all content)
  return (
    <section className={`relative py-8 md:py-12 bg-primary/5 ${className}`} aria-labelledby="cta-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Main Content Area - Responsive layout handled with CSS and conditional rendering */}
          <div className="grid md:grid-cols-5 gap-3 items-center">
            {/* Mobile Image - Only shown on mobile */}
            {isMobile && (
              <div className="col-span-full">
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src={actualMobileImageSrc}
                    alt={imageAlt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority={true}
                  />
                </div>
              </div>
            )}
            
            {/* Text and Buttons */}
            <div className={`md:col-span-3 space-y-4 ${isMobile ? 'mt-[-1rem]' : ''}`}>
              <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                {title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <SummitButton asChild size="lg">
                  <Link href={primaryButtonLink}>
                    {primaryButtonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </SummitButton>
                <SummitButton asChild variant="outline" size="lg">
                  <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
                </SummitButton>
              </div>
            </div>
            
            {/* Desktop Image - Only shown on desktop */}
            {!isMobile && (
              <div className="md:col-span-2">
                <div className="relative h-[200px] md:h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority={false}
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Footer Area with Resource Link */}
          {footerText && footerLinkText && footerLinkHref && (
            <div className="flex items-center justify-center mt-8 pt-4 border-t border-primary/10">
              <div className="flex gap-1.5 items-center text-sm text-muted-foreground hover:text-muted-foreground/80 transition-colors">
                <FileText className="h-4 w-4 text-primary" />
                <span>
                  {footerText}{" "}
                  <Link 
                    href={footerLinkHref} 
                    className="text-primary font-medium hover:underline mx-1 transition-all hover:text-primary/80"
                  >
                    {footerLinkText}
                  </Link>
                  for more information.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 