import { ComponentType } from 'react';

/**
 * Component category types
 */
export enum ComponentCategory {
  LAYOUT = 'layout',
  UI = 'ui',
  FEATURE = 'feature',
  COMMON = 'common',
  FORM = 'form',
  SECTION = 'section',
  NAVIGATION = 'navigation',
}

/**
 * Component registry entry type
 */
export interface ComponentRegistryEntry {
  /** Component name */
  name: string;
  /** Path to the component file */
  path: string;
  /** Category the component belongs to */
  category: ComponentCategory;
  /** Brief description of what the component does */
  description: string;
  /** Where the component is being used (pages/features) */
  usedIn: string[];
  /** Props the component accepts (optional documentation) */
  props?: Record<string, string>;
  /** Components used within this component */
  dependencies?: string[];
  /** If the component is deprecated, when and why */
  deprecated?: { since: string; reason: string; alternative?: string };
}

/**
 * Registry of all components in the application
 * This helps with:
 * - Documentation
 * - Finding components
 * - Understanding dependencies
 * - Tracking usage
 */
export const componentRegistry: ComponentRegistryEntry[] = [
  // Layout Components
  {
    name: 'Header',
    path: 'components/layout/header.tsx',
    category: ComponentCategory.LAYOUT,
    description: 'Main SummitSDA header component with logo, navigation, and responsive mobile menu.',
    usedIn: ['All pages'],
    props: {},
    dependencies: ['MainNav', 'MobileNav', 'SummitButton', 'Sheet'],
  },
  {
    name: 'Footer',
    path: 'components/layout/footer.tsx',
    category: ComponentCategory.LAYOUT,
    description: 'Main SummitSDA footer with contact info, navigation, and social links. Appears on all pages.',
    usedIn: ['All pages'],
    props: {},
    dependencies: ['Link', 'Icons'],
  },

  // Navigation Components
  {
    name: 'MobileNav',
    path: 'components/navigation/mobile-nav.tsx',
    category: ComponentCategory.NAVIGATION,
    description: 'SummitSDA mobile/tablet navigation with slide-out panel and accordion submenus.',
    usedIn: ['Header'],
    props: {
      onNavigate: 'Callback for navigation actions',
    },
    dependencies: ['Link', 'ChevronDown'],
  },
  {
    name: 'MainNav',
    path: 'components/navigation/main-nav.tsx',
    category: ComponentCategory.NAVIGATION,
    description: 'Primary SummitSDA navigation for desktop, with dropdowns and links to all main site sections.',
    usedIn: ['Header'],
    props: {
      className: 'Optional additional class names',
      onNavigate: 'Callback for navigation actions',
    },
    dependencies: ['NavigationMenu', 'SupportedAccommodationsMenu', 'DropInSupportMenu', 'ResourcesMenu', 'AboutMenu'],
  },
  {
    name: 'ScrollToTop',
    path: 'components/navigation/scroll-to-top.tsx',
    category: ComponentCategory.NAVIGATION,
    description: 'SummitSDA utility button to scroll back to the top of the page.',
    usedIn: ['Layout'],
    props: {},
    dependencies: ['Button', 'ArrowUp'],
  },

  // Section Components
  {
    name: 'Hero',
    path: 'components/sections/hero.tsx',
    category: ComponentCategory.SECTION,
    description: 'Hero section for homepage',
    usedIn: ['HomePage'],
  },
  {
    name: 'PageHero',
    path: 'components/sections/page-hero.tsx',
    category: ComponentCategory.SECTION,
    description: 'Hero section for inner pages',
    usedIn: ['Various pages'],
  },
  {
    name: 'CTASection',
    path: 'components/sections/cta-section.tsx',
    category: ComponentCategory.SECTION,
    description: 'Call-to-action section',
    usedIn: ['Various pages'],
  },

  // Feature Components
  {
    name: 'PropertyCard',
    path: 'components/features/property-card.tsx',
    category: ComponentCategory.FEATURE,
    description: 'A card component for displaying Summit property information including type, details, features, and image. Used in property listings and search.',
    usedIn: ['Property listings', 'Property search'],
    props: {
      type: 'Property type (e.g., SDA, SIL)',
      title: 'Name of the property',
      location: 'Geographic location of the property',
      description: 'Brief description of the property',
      image: 'URL to the property image',
      bedrooms: 'Number of bedrooms in the property',
      bathrooms: 'Number of bathrooms in the property',
      vacancy: 'Number of vacancies available',
      features: 'List of property features/amenities',
      designCategory: 'SDA design category (optional)',
      buildingType: 'Type of building (optional)',
      href: 'URL to the property details page',
    },
    dependencies: ['Card', 'Badge', 'SummitButton', 'Image', 'Tooltip'],
  },
  {
    name: 'PropertyFilters',
    path: 'components/features/property-filters.tsx',
    category: ComponentCategory.FEATURE,
    description: 'Summit property search filters for building type, SDA design category, and more. Used on property listing/search pages.',
    usedIn: ['Property search page'],
    props: {
      buildingTypes: 'List of available building types',
      designCategories: 'Optional list of SDA design categories',
      onFilterChange: 'Callback when filters change',
      className: 'Optional additional class names',
    },
    dependencies: ['Select', 'Checkbox', 'Button', 'Badge', 'Popover', 'Command'],
  },
  {
    name: 'PropertyPage',
    path: 'components/features/property-page.tsx',
    category: ComponentCategory.FEATURE,
    description: 'Displays detailed information about a Summit property, including images, features, activities, and enquiry options.',
    usedIn: ['Property detail page'],
    props: {
      property: 'The property data to display',
    },
    dependencies: ['Card', 'Badge', 'SummitButton', 'Image', 'ContactForm', 'SectionSeparator'],
  },
  {
    name: 'ServiceCard',
    path: 'components/features/service-card.tsx',
    category: ComponentCategory.FEATURE,
    description: 'Card displaying Summit service information with icon, title, description, and link. Used to showcase NDIS support services.',
    usedIn: ['Services page', 'Homepage', 'Service category pages'],
    props: {
      title: 'Service name',
      description: 'Service summary',
      icon: 'Icon representing the service',
      href: 'Link to service details',
      className: 'Optional additional class names',
    },
    dependencies: ['Card', 'SummitButton', 'Icon'],
  },

  // Form Components
  {
    name: 'ContactForm',
    path: 'components/forms/contact-form.tsx',
    category: ComponentCategory.FORM,
    description: 'Summit contact form for general enquiries, support requests, and NDIS service information. Includes validation, feedback, and accessibility.',
    usedIn: ['Contact page', 'Service enquiry sections', 'Support pages'],
    props: {},
    dependencies: ['Form', 'Input', 'Textarea', 'Select', 'SummitButton', 'Alert'],
  },
  {
    name: 'FeedbackForm',
    path: 'components/forms/feedback-form.tsx',
    category: ComponentCategory.FORM,
    description: 'Summit feedback form for collecting user feedback about services, experiences, and satisfaction. Includes rating, comments, and feedback categories.',
    usedIn: ['Service pages', 'After-service follow-ups', 'Client portal'],
    props: {},
    dependencies: ['Form', 'Input', 'Textarea', 'Select', 'Checkbox', 'SummitButton'],
  },

  // Common Components
  {
    name: 'ThemeProvider',
    path: 'components/common/theme-provider.tsx',
    category: ComponentCategory.COMMON,
    description: 'Provider for theme context',
    usedIn: ['Layout (root)'],
  },

  {
    name: 'ScrollProgress',
    path: 'components/common/scroll-progress.tsx',
    category: ComponentCategory.COMMON,
    description: 'Progress bar showing scroll position',
    usedIn: ['Blog pages', 'Long-form content'],
  },


];

/**
 * Helper functions for working with the component registry
 */

/**
 * Get all components in a specific category
 */
export function getComponentsByCategory(category: ComponentCategory): ComponentRegistryEntry[] {
  return componentRegistry.filter(component => component.category === category);
}

/**
 * Find components by name (fuzzy search)
 */
export function findComponentsByName(name: string): ComponentRegistryEntry[] {
  const searchTerm = name.toLowerCase();
  return componentRegistry.filter(component => 
    component.name.toLowerCase().includes(searchTerm)
  );
}

/**
 * Find components used on a specific page/feature
 */
export function findComponentsByUsage(usedIn: string): ComponentRegistryEntry[] {
  const searchTerm = usedIn.toLowerCase();
  return componentRegistry.filter(component => 
    component.usedIn.some(location => 
      location.toLowerCase().includes(searchTerm)
    )
  );
}

/**
 * Check if a component is deprecated
 */
export function isDeprecated(componentName: string): boolean {
  const component = componentRegistry.find(c => c.name === componentName);
  return !!component?.deprecated;
}

export default componentRegistry; 