/**
 * @component PropertyCard
 * @description A card component for displaying property information including type, details, 
 * features, and an image. Includes interactive elements like tooltips and navigation.
 * 
 * @example
 * ```tsx
 * <PropertyCard
 *   type="SDA"
 *   title="Modern Apartment"
 *   location="Brisbane, QLD"
 *   description="Spacious property with modern amenities"
 *   image="/images/properties/apartment.jpg"
 *   bedrooms={2}
 *   bathrooms={1}
 *   vacancy={1}
 *   features={["Air conditioning", "Wheelchair access"]}
 *   designCategory="Improved Liveability"
 *   buildingType="Apartment"
 *   href="/properties/modern-apartment"
 * />
 * ```
 * 
 * @category Feature
 * @usedIn Property listings, Property search pages
 */
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { SummitButton } from "@/components/ui/summit-button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Bed, Bath, Users, MapPin } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Skeleton } from "@/components/ui/skeleton"

/**
 * Props for the PropertyCard component
 */
interface PropertyCardProps {
  /** Property type (e.g., SDA, SIL) */
  type: string
  /** Name of the property */
  title: string
  /** Geographic location of the property */
  location: string
  /** Brief description of the property */
  description: string
  /** URL to the property image */
  image: string
  /** Number of bedrooms in the property */
  bedrooms: number
  /** Number of bathrooms in the property */
  bathrooms: number
  /** Number of vacancies available */
  vacancy: number
  /** List of property features/amenities */
  features: string[]
  /** SDA design category (e.g., "Improved Liveability", "Fully Accessible") */
  designCategory?: string
  /** Type of building (e.g., "House", "Apartment", "Villa") */
  buildingType?: string
  /** URL to the property details page */
  href: string
}

/**
 * Component for displaying a property with its details in a card format
 * 
 * @param props - The PropertyCard component props
 * @returns A React component displaying property information
 */
export function PropertyCard({
  type,
  title,
  location,
  description,
  image,
  bedrooms,
  bathrooms,
  vacancy,
  features,
  designCategory,
  buildingType,
  href,
}: PropertyCardProps) {
  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('Property card image path:', image);
  }

  return (
    <Card className="overflow-hidden group flex flex-col">
      <Link href={href} onClick={handleNavigation} aria-label={`View details for ${title} in ${location}`}>
        <div className="aspect-[16/10] relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="default" className="bg-primary/90 hover:bg-primary">
              {type}
            </Badge>
            {designCategory && (
              <Badge variant="secondary" className="bg-secondary/90 hover:bg-secondary">
                {designCategory}
              </Badge>
            )}
          </div>
        </div>
      </Link>

      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-semibold text-lg leading-tight hover:text-primary transition-colors">
              <Link href={href} onClick={handleNavigation}>
                {title}
              </Link>
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground mt-1">
              <MapPin className="h-3.5 w-3.5" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          {buildingType && (
            <Badge variant="outline" className="shrink-0">
              {buildingType}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <TooltipProvider>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1.5 cursor-help">
                  <Bed className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span>{bedrooms}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {bedrooms} Bedroom{bedrooms !== 1 ? "s" : ""}
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1.5 cursor-help">
                  <Bath className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span>{bathrooms}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {bathrooms} Bathroom{bathrooms !== 1 ? "s" : ""}
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1.5 cursor-help">
                  <Users className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span>{vacancy}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {vacancy} Vacanc{vacancy !== 1 ? "ies" : "y"} Available
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>

        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <Badge key={feature} variant="secondary" className="bg-secondary/80 text-secondary-foreground hover:bg-secondary/20 hover:text-secondary">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="mt-auto">
        <SummitButton asChild className="w-full">
          <Link href={href} onClick={handleNavigation}>
            View Details
          </Link>
        </SummitButton>
      </CardFooter>
    </Card>
  )
}

/**
 * @component PropertyCardSkeleton
 * @description A loading skeleton version of the PropertyCard component.
 * Used while property data is being fetched to provide a visual placeholder
 * and improve perceived performance.
 * 
 * @example
 * ```tsx
 * <PropertyCardSkeleton />
 * ```
 * 
 * @category Feature
 * @usedIn Property listings during loading states
 */
export function PropertyCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-[16/10] w-full" />
      <CardContent className="space-y-4">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-3 w-[150px]" />
        <div className="flex gap-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
      </CardContent>
    </Card>
  )
}

