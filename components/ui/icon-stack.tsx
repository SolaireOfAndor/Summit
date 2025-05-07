import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { EnhancedIcon, IconVariant } from "./enhanced-icon";

/**
 * @component IconStack
 * @description A component for displaying multiple icons stacked together with visual effects
 * 
 * @example
 * ```tsx
 * <IconStack 
 *   icons={[Shield, Lock, CheckCircle2]} 
 *   variant="primary" 
 *   effect="glow" 
 * />
 * ```
 * 
 * @category UI
 * @usedIn Feature highlights, benefits sections, visual indicators
 */

interface IconStackProps {
  /** Array of Lucide icons to display */
  icons: LucideIcon[];
  /** Color variant for the icons */
  variant?: IconVariant;
  /** Visual effect to apply to the icons */
  effect?: "none" | "pulse" | "bounce" | "spin" | "wiggle" | "glow";
  /** Size of the icons */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Additional CSS classes to apply */
  className?: string;
  /** Whether to show effects only on hover */
  effectOnHover?: boolean;
  /** How to arrange the icons */
  arrangement?: "cascade" | "grid" | "circle" | "overlap";
  /** Label displayed below the stack */
  label?: React.ReactNode;
}

export function IconStack({
  icons,
  variant = "primary",
  effect = "none",
  size = "md",
  className,
  effectOnHover = false,
  arrangement = "cascade",
  label,
}: IconStackProps) {
  if (!icons.length) return null;
  
  // Different arrangements 
  const arrangementClasses = {
    cascade: "flex flex-row",
    grid: "grid grid-cols-2",
    circle: "flex justify-center items-center relative",
    overlap: "flex justify-center items-center relative"
  };

  return (
    <div className={cn("inline-flex flex-col items-center", className)}>
      <div 
        className={cn(
          "group", 
          arrangementClasses[arrangement],
          size === "xs" && "gap-1 p-1",
          size === "sm" && "gap-1.5 p-1",
          size === "md" && "gap-2 p-1.5",
          size === "lg" && "gap-3 p-2",
          size === "xl" && "gap-4 p-3"
        )}
      >
        {icons.map((icon, index) => {
          let positionStyles = {};
          
          // Special positioning for circle arrangement
          if (arrangement === "circle" && icons.length > 1) {
            const angle = (index * (360 / icons.length)) * (Math.PI / 180);
            const radius = size === "xs" ? 8 : size === "sm" ? 12 : size === "md" ? 16 : size === "lg" ? 20 : 28;
            
            positionStyles = {
              position: "absolute",
              transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
            };
          }
          
          // Special positioning for overlap arrangement
          if (arrangement === "overlap" && icons.length > 1) {
            positionStyles = {
              position: "absolute",
              zIndex: icons.length - index,
              transform: `translateX(${index * (size === "xs" ? 3 : size === "sm" ? 4 : size === "md" ? 6 : size === "lg" ? 8 : 10)}px)`,
            };
          }
          
          // Add staggered animation delay for some arrangements
          const animationDelay = (arrangement === "cascade" || arrangement === "circle") 
            ? { animationDelay: `${index * 0.15}s` } 
            : {};
            
          return (
            <div key={index} style={{...positionStyles, ...animationDelay}}>
              <EnhancedIcon
                icon={icon}
                variant={variant}
                effect={effect}
                effectOnHover={effectOnHover}
                size={size}
                withBackground={true}
                withHoverEffect={true}
              />
            </div>
          );
        })}
      </div>
      
      {label && (
        <span className={cn(
          "mt-2 text-center text-muted-foreground",
          size === "xs" && "text-xs",
          size === "sm" && "text-sm",
          size === "md" && "text-base",
          size === "lg" && "text-lg",
          size === "xl" && "text-xl"
        )}>
          {label}
        </span>
      )}
    </div>
  );
}

/**
 * @component FeatureIconGrid
 * @description A grid of feature icons with labels
 * 
 * @example
 * ```tsx
 * <FeatureIconGrid 
 *   features={[
 *     { icon: Shield, label: "Secure" },
 *     { icon: Clock, label: "Fast" },
 *   ]} 
 *   variant="primary" 
 * />
 * ```
 * 
 * @category UI
 * @usedIn Feature summaries, benefit highlights
 */

interface FeatureItem {
  /** The icon to display */
  icon: LucideIcon;
  /** Label text to display */
  label: string;
  /** Optional custom variant for this specific icon */
  variant?: IconVariant;
  /** Optional custom effect for this specific icon */
  effect?: "none" | "pulse" | "bounce" | "spin" | "wiggle" | "glow";
}

interface FeatureIconGridProps {
  /** Array of feature items to display */
  features: FeatureItem[];
  /** Default color variant for all icons */
  variant?: IconVariant;
  /** Default effect for all icons */
  effect?: "none" | "pulse" | "bounce" | "spin" | "wiggle" | "glow";
  /** Size of the icons */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Number of columns in the grid */
  columns?: 2 | 3 | 4 | 5 | 6;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show effects only on hover */
  effectOnHover?: boolean;
}

export function FeatureIconGrid({
  features,
  variant = "primary",
  effect = "none",
  size = "md",
  columns = 3,
  className,
  effectOnHover = true,
}: FeatureIconGridProps) {
  return (
    <div className={cn(
      "grid gap-4",
      columns === 2 && "grid-cols-2",
      columns === 3 && "grid-cols-1 sm:grid-cols-3",
      columns === 4 && "grid-cols-2 sm:grid-cols-4",
      columns === 5 && "grid-cols-2 sm:grid-cols-5",
      columns === 6 && "grid-cols-3 sm:grid-cols-6",
      className
    )}>
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center group transition-transform hover:scale-105">
          <EnhancedIcon
            icon={feature.icon}
            variant={feature.variant || variant}
            effect={feature.effect || effect}
            effectOnHover={effectOnHover}
            size={size}
            withBackground={true}
            withHoverEffect={true}
          />
          <span className={cn(
            "mt-2 font-medium",
            size === "xs" && "text-xs",
            size === "sm" && "text-sm",
            size === "md" && "text-base",
            size === "lg" && "text-lg",
            size === "xl" && "text-xl"
          )}>
            {feature.label}
          </span>
        </div>
      ))}
    </div>
  );
} 