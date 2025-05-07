# Component Documentation

This documentation is automatically generated from JSDoc comments in component files.

## Table of Contents

- [Layout](#layout)
  - [Footer](#footer)
  - [Header](#header)
- [Feature](#feature)
  - [PropertyCard](#propertycard)
  - [PropertyCardSkeleton](#propertycardskeleton)
  - [PropertyFilters](#propertyfilters)
  - [PropertyPage](#propertypage)
  - [ServiceCard](#servicecard)
- [Common](#common)
  - [withErrorBoundary](#witherrorboundary)
  - [ScrollProgress](#scrollprogress)
  - [useTheme](#usetheme)
  - [ThemeProvider](#themeprovider)
- [Form](#form)
  - [ContactForm](#contactform)
  - [FeedbackForm](#feedbackform)
- [Section](#section)
  - [CTASection](#ctasection)
  - [EdenHousingSection](#edenhousingsection)
  - [EdenIndependenceSection](#edenindependencesection)
  - [PageHero](#pagehero)
- [Navigation](#navigation)
  - [MainNav](#mainnav)
  - [MobileNav](#mobilenav)
  - [ScrollToTop](#scrolltotop)

# Layout

## Footer

The main site footer containing contact information, navigation links, service details, accessibility information, and social media links. Appears at the bottom of all pages.

### Example

```tsx
<Footer />
```

## Header

The main navigation header component that appears at the top of all pages. Contains the logo, main navigation links, and mobile menu for responsive design.

### Example

```tsx
<Header />
```

# Feature

## PropertyCard

A card component for displaying property information including type, details, features, and an image. Includes interactive elements like tooltips and navigation.

**Used in:** Property listings, Property search pages /

import Link from "next/link"
import { Badge } from "

### Example

```tsx
<PropertyCardtype = "SDA"title = "Modern Apartment"location = "Brisbane, QLD"description = "Spacious property with modern amenities"image = "/images/properties/apartment.jpg"bedrooms = {2}bathrooms = {1}vacancy = {1}features = { ["Air conditioning", "Wheelchair access"] }designCategory = "Improved Liveability"buildingType = "Apartment"href = "/properties/modern-apartment"/>
```

## PropertyCardSkeleton

A loading skeleton version of the PropertyCard component. Used while property data is being fetched to provide a visual placeholder and improve perceived performance.

### Example

```tsx
<PropertyCardSkeleton />
```

## PropertyFilters

A component that provides filtering options for property listings. Allows users to filter properties by location, type, features, and other criteria to find suitable accommodations.

### Example

```tsx
<PropertyFilters onFilterChange = {handleFilterChange} />
```

## PropertyPage

A comprehensive page component for displaying detailed property information. Includes property images, details, amenities, location information, and vacancy status. This component serves as the main content for individual property listings.

### Example

```tsx
<PropertyPageproperty = {propertyData}similarProperties = {similarPropertiesData}/>
```

## ServiceCard

A card component that displays information about a specific service offered. Features an icon, title, description, and optional link. Used to showcase various disability support services in a consistent, visually appealing format.

### Example

```tsx
<ServiceCardicon = {<HomeIcon />}title = "Supported Independent Living"description = "Support services to help you live independently"href = "/services/sil"/>
```

# Common

## withErrorBoundary

A component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of crashing the whole application. Provides error reporting and recovery options.

**Used in:** Throughout the application to handle and display errors gracefully /
export class NavigationErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = initialState

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to error reporting service
    console.error("Navigation Error:", error)
    console.error("Error Info:", errorInfo)

    // Call onError prop if provided
    this.props.onError?.(error, errorInfo)
  }

  private handleReset = () => {
    this.setState(initialState)
  }

  private handleReload = () => {
    window.location.reload()
  }

  public render() {
    const { hasError, error } = this.state
    const { children, fallback } = this.props

    if (hasError) {
      if (fallback) {
        return fallback
      }

      return (
        <ErrorFallback
          error={error}
          onReset={this.handleReset}
          onReload={this.handleReload}
        />
      )
    }

    return (
      <React.Suspense fallback={<NavigationLoadingFallback />}>
        {children}
      </React.Suspense>
    )
  }
}

interface ErrorFallbackProps {
  error: Error | null
  onReset: () => void
  onReload: () => void
}

/   Error fallback component with retry options /
function ErrorFallback({ error, onReset, onReload }: ErrorFallbackProps) {
  // Report error to error tracking service
  useEffect(() => {
    // Example: reportError(error)
    console.error("Navigation Error:", error)
  }, [error])

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="p-6 rounded-lg bg-destructive/5 text-center"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold text-destructive">
          Navigation Error
        </h2>
        <p className="text-muted-foreground max-w-md">
          We encountered an issue while loading the navigation.
          {process.env.NODE_ENV === "development" && error && (
            <span className="block mt-2 text-sm text-destructive/80">
              {error.message}
            </span>
          )}
        </p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={onReset}
            className="min-w-[100px]"
          >
            Try Again
          </Button>
          <Button
            onClick={onReload}
            className="min-w-[100px]"
          >
            Reload Page
          </Button>
        </div>
      </div>
    </div>
  )
}

/   Loading state component for navigation /
function NavigationLoadingFallback() {
  return (
    <div
      role="status"
      aria-label="Loading navigation"
      className="p-4 text-center animate-pulse"
    >
      <div className="h-6 w-32 bg-muted rounded mx-auto" />
    </div>
  )
}

/   HOC to wrap components with error boundary /
/

### Example

```tsx
<ErrorBoundary fallback = {<ErrorFallback />}><YourComponent /></ErrorBoundary>
```

## ScrollProgress

A visual progress indicator that shows how far the user has scrolled down the page. Appears as a thin line at the top of the viewport that fills from left to right as the user scrolls down the page, providing visual feedback on reading progress.

### Example

```tsx
<ScrollProgress />
```

## useTheme

[ADD DESCRIPTION] - What does this component do?

### Example

```tsx
<useTheme PROPS />
```

## ThemeProvider

A provider component that manages the application's theme state. Utilizes next-themes to handle theme persistence, system preferences, and theme switching functionality. Supports light, dark, and system themes.

### Example

```tsx
<ThemeProviderattribute = "class"defaultTheme = "system"enableSystem><App /></ThemeProvider>
```

# Form

## ContactForm

A comprehensive contact form component that collects user information and query details. Features form validation, error handling, and submission feedback. Used for general inquiries, support requests, and service information.

### Example

```tsx
<ContactForm redirectUrl = "/thank-you" />
```

## FeedbackForm

A form component for collecting user feedback about services, experiences, and satisfaction. Includes rating options, comment fields, and structured feedback categories. Helps improve service quality through direct user input.

### Example

```tsx
<FeedbackFormserviceId = "sil-123"onSubmitSuccess = {handleSuccess}/>
```

# Section

## CTASection

A call-to-action section with customizable content, buttons, and an optional image. This component is designed to encourage user interaction and drive conversions by providing clear next steps for the user.

**Used in:** Various pages including About SIL, About SDA, and other landing pages /


import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { EdenButton } from "

### Example

```tsx
<CTASectiontitle = "Get Started Today"description = "Join our community and discover how we can help you achieve your goals."primaryButtonText = "Sign Up Now"primaryButtonLink = "/signup"/>
```

## EdenHousingSection

A comprehensive section showcasing Eden's housing services and options. Features property highlights, accommodation types, eligibility information, and visual elements. Designed to inform visitors about SDA and SIL housing options.

### Example

```tsx
<EdenHousingSection />
```

## EdenIndependenceSection

A feature-rich section highlighting Eden's independence support services. Showcases the organization's approach to promoting client independence, available support programs, and service benefits with visual elements and testimonials.

### Example

```tsx
<EdenIndependenceSection />
```

## PageHero

A versatile hero section component for interior pages. Features a title, subtitle, background image with overlay, and optional action buttons. Provides consistent page introductions across the site with customizable content.

### Example

```tsx
<PageHerotitle = "About Our Services"subtitle = "Supporting independence through innovative care solutions"imageSrc = "/images/hero-about.jpg"buttons = { [{ text: "Learn More", href: "#services", variant: "primary" },{ text: "Contact Us", href: "/contact", variant: "secondary" }] }/>
```

# Navigation

## MainNav

The primary navigation component for desktop viewports. Provides links to main site sections, dropdown menus for sub-pages, and interactive elements for a complete navigation experience.

### Example

```tsx
<MainNav />
```

## MobileNav

Responsive navigation component optimized for mobile and tablet devices. Features a hamburger menu, slide-out navigation panel, accordion-style submenus, and touch-friendly interactive elements for easy mobile navigation.

### Example

```tsx
<MobileNavservices = {servicesData}resources = {resourcesData}about = {aboutData}onNavigate = {handleNavigation}/>
```

## ScrollToTop

A utility navigation component that provides a button to smoothly scroll back to the top of the page. Appears once the user has scrolled down a certain distance and includes animation effects for smooth appearance and disappearance.

### Example

```tsx
<ScrollToTop />
```

