/**
 * @deprecated This file is kept for backward compatibility.
 * Please import from 'common/error-boundary' instead.
 */

/**
 * @component NavigationErrorBoundary
 * @description A specialized error boundary component for navigation elements.
 * Catches and handles errors specifically within navigation components to prevent
 * total navigation failure while allowing the rest of the application to function.
 * 
 * @example
 * ```tsx
 * <NavigationErrorBoundary>
 *   <MainNav />
 * </NavigationErrorBoundary>
 * ```
 * 
 * @category Navigation
 * @usedIn Header and other navigation containers
 */

export { NavigationErrorBoundary } from './../common/error-boundary';
