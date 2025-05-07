import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PropertiesNotFound() {
  return (
    <div className="container py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">No Properties Found</h2>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        We couldn't find any properties matching your criteria. Try adjusting your search filters or browse all our available properties.
      </p>
      <Button asChild>
        <Link href="/properties">View All Properties</Link>
      </Button>
    </div>
  )
} 