import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

/**
 * @component EnhancedIcon
 * @description An enhanced icon component that adds animations, visual effects, and consistent styling to Lucide icons
 * 
 * @example
 * ```tsx
 * <EnhancedIcon 
 *   icon={HomeIcon} 
 *   variant="primary" 
 *   effect="pulse" 
 *   size="md" 
 * />
 * ```
 * 
 * @category UI
 * @usedIn Throughout the application for enhanced icon presentation
 */

export type IconVariant = 
  | "primary" 
  | "secondary" 
  | "accent" 
  | "muted" 
  | "default";

export type IconEffect = 
  | "none" 
  | "pulse" 
  | "bounce" 
  | "spin" 
  | "wiggle" 
  | "glow";

export type IconSize = 
  | "xs" 
  | "sm" 
  | "md" 
  | "lg" 
  | "xl";

interface EnhancedIconProps {
  /** The Lucide icon component to render */
  icon: LucideIcon;
  /** Color variant for the icon and its container */
  variant?: IconVariant;
  /** Visual effect to apply to the icon */
  effect?: IconEffect;
  /** Size of the icon */
  size?: IconSize;
  /** Additional CSS classes to apply */
  className?: string;
  /** Whether to display the icon in a circular container */
  withBackground?: boolean;
  /** Additional CSS classes for the background container */
  backgroundClassName?: string;
  /** Whether to apply a hover effect */
  withHoverEffect?: boolean;
  /** Whether the effect should play only on hover */
  effectOnHover?: boolean;
  /** Additional props to pass to the SVG element */
  svgProps?: React.SVGProps<SVGSVGElement>;
}

export function EnhancedIcon({
  icon: Icon,
  variant = "default",
  effect = "none",
  size = "md",
  className,
  withBackground = false,
  backgroundClassName,
  withHoverEffect = false,
  effectOnHover = false,
  svgProps,
  ...props
}: EnhancedIconProps) {
  // Size mappings
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  };

  // Variant mappings
  const variantClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    muted: "text-muted-foreground",
    default: "text-foreground",
  };

  // Background mappings
  const backgroundVariantClasses = {
    primary: "bg-primary/10 group-hover:bg-primary/20",
    secondary: "bg-secondary/10 group-hover:bg-secondary/20",
    accent: "bg-accent/10 group-hover:bg-accent/20",
    muted: "bg-muted/30 group-hover:bg-muted/50",
    default: "bg-muted/20 group-hover:bg-muted/40",
  };

  // Animation effect classes
  const effectClasses = {
    none: "",
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    spin: "animate-spin",
    wiggle: "animate-wiggle",
    glow: "animate-glow",
  };

  // Build the CSS classes for the icon
  const iconClasses = cn(
    variantClasses[variant],
    sizeClasses[size],
    effectOnHover ? "" : effectClasses[effect],
    className
  );

  // Build the CSS classes for the container
  const containerClasses = cn(
    "flex-shrink-0 inline-flex items-center justify-center transition-all duration-300",
    withBackground && [
      "rounded-full",
      backgroundVariantClasses[variant],
      size === "xs" && "p-1",
      size === "sm" && "p-1.5",
      size === "md" && "p-2",
      size === "lg" && "p-2.5",
      size === "xl" && "p-3",
    ],
    withHoverEffect && "group-hover:scale-110",
    backgroundClassName
  );

  // If we want effects only on hover
  const hoverEffectClasses = effectOnHover ? `group-hover:${effectClasses[effect]}` : "";

  return (
    <div className={containerClasses} {...props}>
      <Icon className={cn(iconClasses, hoverEffectClasses)} {...svgProps} />
    </div>
  );
}

// Add keyframe animations to global CSS
const globalStyles = `
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes glow {
  0%, 100% { filter: drop-shadow(0 0 0.5em currentColor); opacity: 0.75; }
  50% { filter: drop-shadow(0 0 0 currentColor); opacity: 1; }
}

.animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}

.animate-glow {
  animation: glow 1.5s ease-in-out infinite;
}
`;

// Inject the global styles into a style tag at runtime if this component is used
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.textContent = globalStyles;
  document.head.appendChild(styleTag);
} 