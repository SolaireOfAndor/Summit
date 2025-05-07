"use client"

import { cn } from "@/lib/utils"

interface SectionSeparatorProps {
  variant?: "primary" | "secondary" | "accent"
  className?: string
}

export function SectionSeparator({ variant = "primary", className }: SectionSeparatorProps) {
  const colors = {
    primary: "via-primary/20",
    secondary: "via-secondary/20",
    accent: "via-accent/20",
  }

  return (
    <div
      className={cn(
        "absolute inset-x-0 h-1 bg-gradient-to-r from-transparent to-transparent",
        colors[variant],
        className
      )}
    />
  )
} 