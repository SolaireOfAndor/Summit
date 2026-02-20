/**
 * Components index file
 * This file makes it easier to import components from their respective folders
 */

// Layout Components
export { Header } from './layout/header'
export { Footer } from './layout/footer'

// Navigation Components  
export { MainNav } from './navigation/main-nav'
export { MobileNav } from './navigation/mobile-nav'
export { ScrollToTop } from './navigation/scroll-to-top'

// Section Components
export { Hero } from './sections/hero'
export { PageHero } from './sections/page-hero'
export { default as CTASection } from './sections/cta-section'
export { ServicesOverview } from './sections/services-overview'
export { WebsiteFeatures } from './sections/website-features'
export { PropertiesHighlight } from './sections/properties-highlight'
export { WhyChooseSummit } from './sections/why-choose-summit'

// Feature Components
export { ServiceCard } from './features/service-card'
export { PropertyCard } from './features/property-card'
export { PropertyPage } from './features/property-page'

// Form Components
export { ContactForm } from './forms/contact-form'
export { FeedbackForm } from './forms/feedback-form'

// UI Components
export { SummitButton } from './ui/summit-button'
export { Button } from './ui/button'
export { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
export { Input } from './ui/input'
export { Label } from './ui/label'
export { Textarea } from './ui/textarea'
export { Badge } from './ui/badge'
export { Alert, AlertDescription, AlertTitle } from './ui/alert'
export { Skeleton } from './ui/skeleton'
export { Separator } from './ui/separator'
export { SectionSeparator } from './ui/section-separator'

// Accessibility Components
export { AccessibilityIcon } from './features/accessibility/AccessibilityIcon'
export { AccessibilityOptionsList } from './features/accessibility/AccessibilityOptionsList'
export { DesktopAccessibilityBar } from './features/accessibility/DesktopAccessibilityBar'

// Common Components
export { withErrorBoundary } from './common/error-boundary'
export { ScrollProgress } from './common/scroll-progress'
export { ThemeProvider } from './common/theme-provider' 