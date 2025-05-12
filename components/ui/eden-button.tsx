"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import type { ButtonProps } from "@/components/ui/button"

/**
 * @component SummitButton
 * @description Summit-branded button component with custom variants and sizes. Use for all Summit actions and navigation.
 * @example
 * <SummitButton variant="primary" size="lg">Click me</SummitButton>
 * @category UI
 * @usedIn Throughout the application
 * @param {React.ReactNode} children - Button content
 * @param {string} variant - Button style variant
 * @param {string} size - Button size
 */
interface SummitButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "contact"
  size?: "sm" | "default" | "lg"
}

export const SummitButton = forwardRef<HTMLButtonElement, SummitButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const sizes = {
      sm: "h-9 px-3 text-sm",
      default: "h-10 px-4",
      lg: "h-11 px-6",
    }

    const baseStyles = `
      inline-flex items-center justify-center
      font-medium transition-all duration-200
      rounded-md select-none
      disabled:pointer-events-none disabled:opacity-50
      active:translate-y-[1px]
    `

    const variants = {
      default: `
        bg-gradient-to-r from-primary to-primary/90
        text-white shadow-md
        hover:shadow-lg hover:from-primary/95 hover:to-primary
        hover:ring-2 hover:ring-primary/20 hover:ring-offset-1
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
      `,
      secondary: `
        bg-gradient-to-r from-secondary to-secondary/90
        text-white shadow-md
        hover:shadow-lg hover:from-secondary/95 hover:to-secondary
        hover:ring-2 hover:ring-secondary/20 hover:ring-offset-1
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40
      `,
      outline: `
        border-2 border-primary/80 bg-transparent
        text-primary shadow-sm
        hover:bg-primary/5 hover:border-primary
        hover:shadow-md hover:ring-1 hover:ring-primary/20 hover:ring-offset-1
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
      `,
      ghost: `
        text-secondary bg-transparent
        hover:bg-secondary/10 hover:text-secondary
        hover:ring-1 hover:ring-secondary/30 hover:ring-offset-1
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40
      `,
      link: `
        text-primary underline-offset-4 hover:underline
        hover:text-primary/90
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
      `,
      contact: `
        bg-primary
        text-white shadow-lg
        hover:shadow-xl hover:bg-primary/35 hover:text-accent 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
      `
    }

    return (
      <Button ref={ref} className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
        {children}
      </Button>
    )
  },
)

SummitButton.displayName = "SummitButton"

