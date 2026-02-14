"use client"

import type React from "react"

import type { PropertyData } from "@/lib/properties"
import { PageHero } from "@/components/sections/page-hero"
import { Badge } from "@/components/ui/badge"
import { SummitButton } from "@/components/ui/summit-button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { ContactForm } from "@/components/forms/contact-form"
import { SectionSeparator } from "@/components/ui/section-separator"
import {
  Flame,
  MoveUpIcon as Lift,
  Thermometer,
  Wind,
  Utensils,
  DoorOpen,
  BookOpen,
  Dumbbell,
  TreePine,
  Lock,
  Home,
  ShipWheelIcon as Wheelchair,
  Building2,
  Wifi,
  Ruler,
  Lightbulb,
  Calendar,
  Users2,
  MapPin,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ImageIcon,
  Share2,
  Maximize2,
  X,
  ChevronLeft
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useMemo, useEffect } from "react"
import { getProperties } from "@/lib/properties"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// Create the same icon map as in property-filters.tsx
const iconMap = {
  Flame,
  Lift,
  Thermometer,
  Wind,
  Utensils,
  DoorOpen,
  BookOpen,
  Dumbbell,
  TreePine,
  Lock,
  Home,
  Wheelchair,
  Building2,
  Wifi,
  Ruler,
  Lightbulb,
  Calendar,
  Users2,
  MapPin,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ImageIcon,
  Share2,
  // Add any other icons that might be used in your property data
}

function PropertyGallery({ images, title }: { images: string[], title: string }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  // Process image paths to ensure they're valid
  const validImages = useMemo(() => {
    if (!images || images.length === 0) return ["/placeholder.svg"];
    
    // Process each image path to ensure they're valid
    return images.map(img => {
      if (!img) return "/placeholder.svg";
      
      // If it's already an absolute URL or starts with /, use it as is
      if (img.startsWith('http') || img.startsWith('/')) return img;
      
      // Otherwise, add a leading / to make it relative to the public folder
      return `/${img}`;
    });
  }, [images]);
  
  // Simplified navigation functions without animation special cases
  const goToPrevious = () => {
    setSelectedImage(prev => (prev === 0 ? validImages.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setSelectedImage(prev => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  // Go to specific image without direction handling
  const goToImage = (index: number) => {
    if (index === selectedImage) return;
    setSelectedImage(index);
  };

  // Touch swipe handlers
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToNext();
    }
    
    if (isRightSwipe) {
      goToPrevious();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: KeyboardEvent) => {
    if (isFullscreen) {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    }
  };

  // Add and remove keyboard event listener
  useEffect(() => {
    if (isFullscreen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling when in fullscreen
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener('keydown', handleKeyDown);
      // Restore scrolling when exiting fullscreen
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  return (
    <div className="w-full pt-4 pb-6 bg-muted/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Main image with navigation */}
          <div 
            className="relative rounded-lg overflow-hidden shadow-md bg-muted"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left/Right navigation buttons */}
            <button 
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm transition-all"
              aria-label="Previous image"
            >
              <ChevronRight className="h-5 w-5 text-gray-800 rotate-180" />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 text-gray-800" />
            </button>
            
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              {/* Simple gallery with opacity transitions instead of slides */}
              <div className="w-full h-full">
                {validImages.map((image, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out",
                      index === selectedImage ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${title} - property view ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === selectedImage}
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 896px"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image}`);
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Fullscreen button */}
              <div className="absolute bottom-4 right-4 z-10">
                <SummitButton 
                  size="icon" 
                  variant="secondary" 
                  className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-md"
                  onClick={() => setIsFullscreen(true)}
                  aria-label="View fullscreen gallery"
                >
                  <Maximize2 className="h-4 w-4 text-gray-800" />
                </SummitButton>
              </div>
        
              {/* Image counter */}
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium z-10">
                {selectedImage + 1} / {validImages.length}
              </div>
            </div>
          </div>
      
          {/* Thumbnails */}
          <div className="mt-4 overflow-x-auto pb-2">
            <div className="flex gap-2 justify-center">
              {validImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={cn(
                    "relative h-14 w-14 md:h-16 md:w-16 flex-shrink-0 rounded-md overflow-hidden transition-all shadow-sm",
                    selectedImage === index
                      ? "ring-2 ring-primary ring-offset-1 scale-[1.02]"
                      : "opacity-70 hover:opacity-100 hover:scale-[1.02]",
                  )}
                >
                  <Image 
                    src={image} 
                    alt={`Property view ${index + 1}`} 
                    fill 
                    className="object-cover"
                    sizes="64px"
                    quality={75}
                    onError={(e) => {
                      console.error(`Failed to load thumbnail: ${image}`);
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Fullscreen Gallery Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div 
            className="w-full h-full relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button 
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
              aria-label="Close fullscreen view"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Fullscreen navigation buttons - larger for better UX */}
            <button 
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            {/* Fullscreen image slider with opacity transitions */}
            <div className="w-full h-full">
              {validImages.map((image, index) => (
                <div 
                  key={index}
                  className={cn(
                    "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out",
                    index === selectedImage ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={image}
                      alt={`${title} - property view ${index + 1}`}
                      fill
                      className="object-contain"
                      quality={100}
                      sizes="100vw"
                      onError={(e) => {
                        console.error(`Failed to load image: ${image}`);
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Fullscreen image counter */}
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black/50 text-white text-sm font-medium z-10">
              {selectedImage + 1} / {validImages.length}
            </div>
            
            {/* Fullscreen thumbnails */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center">
              <div className="px-4 py-3 bg-black/50 backdrop-blur-sm rounded-lg flex gap-2 overflow-x-auto max-w-full">
                {validImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={cn(
                      "relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden transition-all",
                      selectedImage === index
                        ? "ring-2 ring-white ring-offset-1 ring-offset-black scale-[1.05]"
                        : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image 
                      src={image} 
                      alt={`Property view ${index + 1}`} 
                      fill 
                      className="object-cover"
                      sizes="64px"
                      quality={75}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function PropertyFeatureCard({ icon, label, className }: { icon: any; label: string; className?: string }) {
  // Get the correct icon component based on string name or use the icon directly if it's a component
  let IconComponent: any = null;
  
  if (typeof icon === 'string' && icon in iconMap) {
    IconComponent = iconMap[icon as keyof typeof iconMap];
  } else if (typeof icon === 'function') {
    IconComponent = icon;
  } else if (icon && typeof icon === 'object' && 'name' in icon) {
    // Handle cases where icon might be an object with a name property
    const iconName = icon.name;
    if (typeof iconName === 'string' && iconName in iconMap) {
      IconComponent = iconMap[iconName as keyof typeof iconMap];
    }
  }
  
  return (
    <div className={cn("flex items-center gap-2 p-1.5 rounded-md transition-all hover:bg-primary/5 group", className)}>
      <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
        {IconComponent ? (
          <IconComponent className="h-4 w-4 text-primary" />
        ) : (
          // Fallback icon if none is found
          <div className="h-4 w-4 bg-primary/30 rounded-full" /> 
        )}
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <h2 className="text-2xl font-bold">{children}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}

interface PropertyPageProps {
  property: PropertyData
}

function PropertyJsonLd({ property }: { property: PropertyData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    name: property.title,
    description: property.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
      addressCountry: "AU"
    },
    image: property.images?.[0] || "/placeholder.svg",
    numberOfRooms: property.details.bedrooms,
    amenityFeature: property.features.map(f => ({
      "@type": "LocationFeatureSpecification",
      name: typeof f === "string" ? f : f.label
    })),
    accommodationCategory: property.type,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: property.details.bedrooms
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Property Card Component for Similar Properties
function SimilarPropertyCard({ property }: { property: PropertyData }) {
  return (
    <Link href={`/properties/${property.slug}`} className="group">
      <Card className="overflow-hidden h-full transition-all hover:shadow-md">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image 
            src={property.images?.[0] || "/placeholder.svg"} 
            alt={property.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 384px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex gap-2 mb-2">
              {property.type.map((type) => (
                <Badge
                  key={type}
                  variant={type === "SDA" ? "default" : type === "SIL" ? "secondary" : "outline"}
                  className="text-xs"
                >
                  {type}
                </Badge>
              ))}
            </div>
            <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
              {property.title}
            </h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              {property.location}
            </p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
              <div className="flex items-center gap-1">
                <Users2 className="h-3 w-3" />
                <span>{property.details.bedrooms} bed</span>
              </div>
              <div className="flex items-center gap-1">
                <Home className="h-3 w-3" />
                <span>{property.details.bathrooms} bath</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

/**
 * @component PropertyPage
 * @description Displays detailed information about a Summit property, including images, features, activities, and enquiry options. Used for NDIS accommodation detail pages.
 *
 * @example
 * ```tsx
 * <PropertyPage property={propertyData} />
 * ```
 *
 * @category Feature
 * @usedIn Property detail pages
 * @param {PropertyData} property - The property data to display
 * @returns {JSX.Element}
 */
export function PropertyPage({ property }: PropertyPageProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  // Use the detailed description from the property data or generate a fallback
  const detailedDescription = useMemo(() => {
    if (property.detailedDescription) return property.detailedDescription;
    
    // Fallback if no detailed description is provided
    return `${property.description} This property offers a comfortable and accessible living environment designed specifically for individuals with disabilities. Located in ${property.location}, it provides easy access to essential amenities and services. 
    
    The ${property.details.bedrooms}-bedroom accommodation features ${property.details.bathrooms} bathrooms and ${property.details.toilets} toilets, with ${property.details.bedroomsAvailable} bedroom(s) currently available. The property includes ${property.details.parking} standard parking space and ${property.details.accessibleParking} accessible parking space.
    
    This home is designed with accessibility in mind, featuring wheelchair access throughout, robust construction for durability, and modern amenities to ensure comfort and independence. The property is available from ${new Date(property.availability).toLocaleDateString()}.
    
    Residents will enjoy a range of indoor and outdoor activities, with nearby facilities including hospitals, grocery stores, public transport, and medical centers all within easy reach.`;
  }, [property]);
  
  // Truncate the description for the collapsed view
  const truncatedDescription = useMemo(() => {
    const maxLength = 180;
    if (detailedDescription.length <= maxLength) return detailedDescription;
    return detailedDescription.substring(0, maxLength) + '...';
  }, [detailedDescription]);

  if (process.env.NODE_ENV === 'development') {
    console.log('Property features:', property.features);
    property.features.forEach(feature => {
      console.log(`Feature: ${feature.label}, Icon type: ${typeof feature.icon}, Icon:`, feature.icon);
    });
  }

  // Find similar properties
  const similarProperties = useMemo(() => {
    const allProperties = getProperties();
    
    // Filter out the current property
    const otherProperties = allProperties.filter(p => p.id !== property.id);
    
    // Find properties with similar type or location
    const sameTypeOrLocation = otherProperties.filter(p => 
      p.type.some(type => property.type.includes(type)) || 
      p.location.split(',')[0] === property.location.split(',')[0]
    );
    
    // Sort by similarity (more matching types = higher similarity)
    const sortedByRelevance = sameTypeOrLocation.sort((a, b) => {
      const aMatchingTypes = a.type.filter(type => property.type.includes(type)).length;
      const bMatchingTypes = b.type.filter(type => property.type.includes(type)).length;
      return bMatchingTypes - aMatchingTypes;
    });
    
    // Return top 3 similar properties, or fewer if not enough matches
    return sortedByRelevance.slice(0, 3);
  }, [property]);

  return (
    <>
      <PropertyJsonLd property={property} />
      
      {/* Breadcrumbs at the very top */}
      <div className="container pt-24 md:pt-20">
        <div className="py-2">
          <div className="flex items-center text-xs text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 mx-1 flex-shrink-0" />
            <Link href="/properties" className="hover:text-primary transition-colors">Properties</Link>
            <ChevronRight className="h-3 w-3 mx-1 flex-shrink-0" />
            {property.type.includes("SIL") ? (
              <>
                <Link href="/properties/sil-vacancies" className="hover:text-primary transition-colors">SIL Vacancies</Link>
                <ChevronRight className="h-3 w-3 mx-1 flex-shrink-0" />
              </>
            ) : property.type.includes("SDA") ? (
              <>
                <Link href="/properties/sda-vacancies" className="hover:text-primary transition-colors">SDA Vacancies</Link>
                <ChevronRight className="h-3 w-3 mx-1 flex-shrink-0" />
              </>
            ) : null}
            <span className="text-foreground font-medium">{property.title}</span>
          </div>
        </div>
      </div>
      
      {/* Gallery - now with less top padding since breadcrumbs are above */}
      <PropertyGallery images={property.images || []} title={property.title} />
      
      {/* Header section with title and description */}
      <div className="container">
        <div className="pt-6 pb-6 border-b">
          {/* Property title and description with improved spacing */}
          <div className="space-y-3 mb-5">
            <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>
            <p className="text-sm text-muted-foreground max-w-3xl">{property.description}</p>
          </div>

          {/* Tags and Basic Info with improved layout */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex flex-wrap gap-2">
                {property.type.map((type) => (
                  <Badge
                    key={type}
                    variant={type === "SDA" ? "default" : type === "SIL" ? "secondary" : "outline"}
                  className="text-xs"
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            <Separator orientation="vertical" className="h-4 mx-1" />
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
                <span>{property.location}</span>
              </div>
            <Separator orientation="vertical" className="h-4 mx-1" />
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
                <span>Available {new Date(property.availability).toLocaleDateString()}</span>
            </div>
          </div>
              </div>
            </div>

      {/* Main Content */}
      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Overview */}
            <div className="space-y-3">
              <SectionTitle>Property Overview</SectionTitle>
              
              {/* Property Details with Description */}
              <Card className="bg-gradient-to-br from-background to-muted/50">
                <CardContent className="pt-6 pb-4">
                  {/* Property Details - Moved above description */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6 pb-4 border-b">
                    {Object.entries(property.details).map(([key, value]) => {
                      // Map property details to appropriate icons
                      let iconToUse = "Calendar"; // Default icon
                      if (key.includes("bed")) iconToUse = "Users2";
                      else if (key.includes("bath")) iconToUse = "Users2";
                      else if (key.includes("toilet")) iconToUse = "Home";
                      else if (key.includes("parking")) iconToUse = "Building2";
                      
                      return (
                        <PropertyFeatureCard
                          key={key}
                          icon={iconToUse}
                          label={`${value} ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                        />
                      );
                    })}
                  </div>
                  
                  {/* Description with Read More - Now with better formatting */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-base">About This Property</h3>
                    <div className="text-base leading-relaxed text-foreground">
                      {isDescriptionExpanded ? (
                        <div className="prose max-w-none">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {detailedDescription}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        truncatedDescription
                      )}
                    </div>
                    {detailedDescription.length > 180 && (
                      <SummitButton 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs text-primary hover:text-primary/80 p-0 h-auto font-medium"
                        onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                      >
                        {isDescriptionExpanded ? "Read Less" : "Read More"}
                      </SummitButton>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <SectionTitle>Property Features</SectionTitle>
              <Card>
                <CardContent className="pt-4 pb-3 px-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {property.features.map((feature) => (
                      <PropertyFeatureCard 
                        key={feature.label} 
                        icon={typeof feature.icon === 'function' ? feature.icon.name : feature.icon} 
                        label={feature.label} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activities */}
            <div className="space-y-3">
              <SectionTitle>Activities & Lifestyle</SectionTitle>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Indoor Activities */}
                <Card className="bg-gradient-to-br from-background to-primary/5">
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Indoor Activities</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {property.activities.indoor.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 group">
                          <ChevronRight className="h-5 w-5 text-primary mt-0.5 transition-transform group-hover:translate-x-1" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Outdoor Activities */}
                <Card className="bg-gradient-to-br from-background to-secondary/5">
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Outdoor Activities</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {property.activities.outdoor.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 group">
                          <ChevronRight className="h-5 w-5 text-secondary mt-0.5 transition-transform group-hover:translate-x-1" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
            </div>
          </div>

          {/* Right Column - Contact and Notes */}
          <div className="space-y-6">
            {/* Pricing */}
            <Card className="bg-gradient-to-br from-background to-primary/5 sticky top-24">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Rent</p>
                    <p className="text-3xl font-bold text-primary">{property.pricing.rent}</p>
                    <div className="space-y-2 pt-2">
                      {property.pricing.notes.map((note, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Contact */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Expression of Interest</h3>
                    <SummitButton asChild className="w-full" size="lg">
                      <Link href="/contact">
                        Enquire Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </SummitButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Section Separator at the end of Activities section */}
      <div className="relative mt-8 pt-4">
                <SectionSeparator variant="accent" className="opacity-100" />
              </div>                
      {/* Contact Form Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-background to-accent/20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Express Your Interest</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our team will get back to you with more information about this property.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Similar Properties Section */}
      {similarProperties.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Similar Properties</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover more properties that might suit your needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProperties.map((similarProperty) => (
                  <SimilarPropertyCard 
                    key={similarProperty.id} 
                    property={similarProperty} 
                  />
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <SummitButton asChild size="lg">
                  <Link href="/properties">
                    View All Properties
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </SummitButton>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

