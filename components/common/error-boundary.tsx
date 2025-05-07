"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

const initialState: ErrorBoundaryState = {
  hasError: false,
  error: null,
}

/**
 * @component ErrorBoundary
 * @description A component that catches JavaScript errors anywhere in its child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the whole application.
 * Provides error reporting and recovery options.
 * 
 * @example
 * ```tsx
 * <ErrorBoundary fallback={<ErrorFallback />}>
 *   <YourComponent />
 * </ErrorBoundary>
 * ```
 * 
 * @category Common
 * @usedIn Throughout the application to handle and display errors gracefully
 */
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

/**
 * Error fallback component with retry options
 */
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

/**
 * Loading state component for navigation
 */
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

/**
 * HOC to wrap components with error boundary
 */
/**
 * @component withErrorBoundary
 * @description [ADD DESCRIPTION] - What does this component do?
 * 
 * @example
 * ```tsx
 * <withErrorBoundary PROPS />
 * ```
 * 
 * @category Common
 * @usedIn [ADD USAGE] - Where is this component used?
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<ErrorBoundaryProps>
): React.FC<P> {
  return function WithErrorBoundary(props: P) {
    return (
      <NavigationErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </NavigationErrorBoundary>
    )
  }
}

/**
 * Hook to handle errors in functional components
 */
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null)

  const handleError = React.useCallback((error: Error) => {
    console.error("Handled Error:", error)
    setError(error)
  }, [])

  const resetError = React.useCallback(() => {
    setError(null)
  }, [])

  return {
    error,
    handleError,
    resetError,
  }
}

