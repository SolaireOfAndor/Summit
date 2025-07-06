/**
 * Components index file
 * This file makes it easier to import components from their respective folders
 */

// Layout Components
export { Header } from './layout/header';
export { Footer } from './layout/footer';

// Navigation Components
export { MobileNav } from './navigation/mobile-nav';
export { MainNav } from './navigation/main-nav';
export { ScrollToTop } from './navigation/scroll-to-top';
export { withErrorBoundary } from './common/error-boundary';

// Section Components
export { Hero } from './sections/hero';
export { PageHero } from './sections/page-hero';
export { default as CTASection } from './sections/cta-section';

// Feature Components
export { PropertyCard } from './features/property-card';
export { PropertyFilters } from './features/property-filters';
export { PropertyPage } from './features/property-page';
export { ServiceCard } from './features/service-card';

// Form Components
export { ContactForm } from './forms/contact-form';
export { FeedbackForm } from './forms/feedback-form';

// Common Components
export { ThemeProvider } from './common/theme-provider';
export { ScrollProgress } from './common/scroll-progress';

/**
 * Re-export UI components for convenience
 * Note: Not all UI components are re-exported here to keep bundle size manageable.
 * Import specific UI components directly from the ui/ folder when needed.
 */
export { Button } from './ui/button';
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
export { Badge } from './ui/badge';
export { NavigationMenu } from './ui/navigation-menu';
export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './ui/collapsible'; 