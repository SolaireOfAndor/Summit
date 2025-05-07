import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional height for the skeleton
   */
  height?: number | string
  /**
   * Optional width for the skeleton
   */
  width?: number | string
  /**
   * Whether to show the skeleton in a circle shape
   */
  circle?: boolean
  /**
   * Whether the skeleton is currently loading
   */
  isLoading?: boolean
  /**
   * Content to show when not loading
   */
  children?: React.ReactNode
}

/**
 * Skeleton component for loading states
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ 
    className,
    height,
    width,
    circle = false,
    isLoading = true,
    children,
    style = {},
    ...props
  }, ref) => {
    const styles: React.CSSProperties = {
      height,
      width,
      ...style,
    }

    if (!isLoading) {
      return <>{children}</>
    }

    return (
      <div
        ref={ref}
        data-testid="skeleton"
        style={styles}
        className={cn(
          "animate-pulse rounded-md bg-muted",
          circle && "rounded-full",
          className
        )}
        {...props}
        role="status"
        aria-label="Loading..."
      />
    )
  }
)

Skeleton.displayName = "Skeleton"

/**
 * Skeleton text component for loading text content
 */
export const SkeletonText = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <Skeleton
      ref={ref}
      className={cn("h-4 w-full", className)}
      {...props}
    />
  )
)

SkeletonText.displayName = "SkeletonText"

/**
 * Wrapper component for multiple skeleton lines
 */
export function SkeletonLines({ 
  lines = 3,
  spacing = "space-y-3",
  lastLineWidth = "75%",
}: {
  lines?: number
  spacing?: string
  lastLineWidth?: string
}) {
  return (
    <div className={spacing}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonText
          key={i}
          className={i === lines - 1 ? "w-[75%]" : "w-full"}
        />
      ))}
    </div>
  )
}

/**
 * Skeleton for card-like elements
 */
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-3", className)}>
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <SkeletonLines lines={2} />
    </div>
  )
}

/**
 * Skeleton for avatar/image elements
 */
export function SkeletonAvatar({ 
  size = 40,
  className 
}: { 
  size?: number
  className?: string 
}) {
  return (
    <Skeleton
      circle
      height={size}
      width={size}
      className={className}
    />
  )
}
