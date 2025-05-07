import { Skeleton } from "@/components/ui/skeleton"
import { PageHero } from "@/components/sections/page-hero"

export default function Loading() {
  return (
    <>
      <PageHero
        title="Loading Property"
        description="Please wait while we fetch the property details..."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
      />
      
      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tags and Basic Info Skeleton */}
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-32 rounded-full" />
            </div>
            
            {/* Image Gallery Skeleton */}
            <Skeleton className="aspect-[16/9] w-full rounded-lg" />
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="aspect-[4/3] rounded-lg" />
              ))}
            </div>
            
            {/* Content Skeletons */}
            <div className="space-y-6">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-40 w-full rounded-lg" />
            </div>
          </div>
          
          {/* Right Column Skeleton */}
          <div>
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </>
  )
}
  
  