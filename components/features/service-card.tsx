import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  className?: string
}

/**
 * @component ServiceCard
 * @description A card component that displays information about a specific Summit service offering. Features an icon, title, description, and link. Used to showcase Summit's NDIS support services in a consistent, accessible format.
 *
 * @example
 * ```tsx
 * <ServiceCard
 *   icon={HomeIcon}
 *   title="Supported Independent Living"
 *   description="Support services to help you live independently."
 *   href="/supported-accommodations/sil"
 * />
 * ```
 *
 * @category Feature
 * @usedIn Services page, homepage, and service category pages
 * @param {string} title - Service name
 * @param {string} description - Service summary
 * @param {LucideIcon} icon - Icon representing the service
 * @param {string} href - Link to service details
 * @param {string} [className] - Optional additional class names
 * @returns {JSX.Element}
 */
export function ServiceCard({ title, description, icon: Icon, href, className }: ServiceCardProps) {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden transition-all hover:shadow-lg", 
        className
      )}
    >
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-4">
          <div 
            className="rounded-full bg-primary/10 p-2.5 transition-colors group-hover:bg-primary/20"
            aria-hidden="true"
          >
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base">{description}</CardDescription>
        <div>
          <Button 
            asChild 
            variant="link" 
            className="h-auto p-0 font-medium hover:no-underline"
          >
            <Link 
              href={href}
              className="flex items-center text-primary hover:text-primary/80"
              aria-label={`Learn more about ${title}`}
            >
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

