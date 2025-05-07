import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { EnhancedIcon, IconVariant } from "./enhanced-icon";

/**
 * @component IconFeature
 * @description A component for displaying feature items with enhanced icons and text
 * 
 * @example
 * ```tsx
 * <IconFeature 
 *   icon={CheckCircle2} 
 *   title="Feature Title" 
 *   description="Feature description text" 
 *   variant="primary" 
 * />
 * ```
 * 
 * @category UI
 * @usedIn Feature lists, benefit sections, and content highlights
 */

interface IconFeatureProps {
  /** The Lucide icon to display */
  icon: LucideIcon;
  /** The title text for the feature */
  title?: string;
  /** The description text for the feature */
  description?: React.ReactNode;
  /** Color variant for the icon/presentation */
  variant?: IconVariant;
  /** CSS classes to apply to the component */
  className?: string;
  /** Whether to add a hover effect to the component */
  withHoverEffect?: boolean;
  /** Icon animation effect */
  iconEffect?: "none" | "pulse" | "bounce" | "spin" | "wiggle" | "glow";
  /** Icon size */
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Whether to activate the icon effect only on hover */
  effectOnHover?: boolean;
  /** Additional content to render after the description */
  children?: React.ReactNode;
}

export function IconFeature({
  icon,
  title,
  description,
  variant = "primary",
  className,
  withHoverEffect = false,
  iconEffect = "none",
  iconSize = "md",
  effectOnHover = false,
  children,
}: IconFeatureProps) {
  return (
    <div 
      className={cn(
        "group flex items-start gap-3 p-3 rounded-lg transition-all duration-300",
        withHoverEffect && "hover:bg-muted/30",
        className
      )}
    >
      <EnhancedIcon 
        icon={icon} 
        variant={variant} 
        effect={iconEffect}
        effectOnHover={effectOnHover}
        size={iconSize}
        withBackground
        withHoverEffect={withHoverEffect}
      />
      
      <div className="flex-1">
        {title && (
          <h3 className={cn(
            "font-medium mb-1", 
            iconSize === "xl" ? "text-lg" : "text-base",
            withHoverEffect && `group-hover:text-${variant}`
          )}>
            {title}
          </h3>
        )}
        
        {description && (
          <div className={cn(
            "text-muted-foreground",
            iconSize === "xs" && "text-xs",
            iconSize === "sm" && "text-sm",
            iconSize === "md" || iconSize === "lg" ? "text-base" : "",
            iconSize === "xl" && "text-lg"
          )}>
            {description}
          </div>
        )}
        
        {children}
      </div>
    </div>
  );
}

/**
 * @component IconFeatureGroup
 * @description A component for grouping multiple IconFeature components with consistent styling
 * 
 * @example
 * ```tsx
 * <IconFeatureGroup variant="primary">
 *   <IconFeature icon={Icon1} title="Feature 1" description="Description 1" />
 *   <IconFeature icon={Icon2} title="Feature 2" description="Description 2" />
 * </IconFeatureGroup>
 * ```
 * 
 * @category UI
 * @usedIn Feature sections, benefit lists
 */

interface IconFeatureGroupProps {
  /** The features to display */
  children: React.ReactNode;
  /** Color variant for all icons in the group */
  variant?: IconVariant;
  /** CSS classes to apply to the component */
  className?: string;
  /** CSS classes to apply to each item in the group */
  itemClassName?: string;
  /** Layout direction */
  direction?: "row" | "column";
  /** Whether to add borders between items */
  withDividers?: boolean;
  /** Whether to add a background to the group */
  withBackground?: boolean;
}

export function IconFeatureGroup({
  children,
  variant = "primary",
  className,
  itemClassName,
  direction = "column", 
  withDividers = false,
  withBackground = false,
}: IconFeatureGroupProps) {
  // Prepare the item className
  const itemClass = cn(
    itemClassName,
    withDividers && direction === "column" && "border-b last:border-b-0 pb-3 last:pb-0",
    withDividers && direction === "row" && "border-r last:border-r-0 pr-3 last:pr-0"
  );

  // Clone children to pass down consistent props
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Only pass props that the component accepts
      const childProps: Record<string, unknown> = {};
      
      if ('variant' in child.props) {
        childProps.variant = variant;
      }
      
      if ('className' in child.props) {
        childProps.className = cn(child.props.className, itemClass);
      } else {
        childProps.className = itemClass;
      }
      
      return React.cloneElement(child, childProps);
    }
    return child;
  });

  return (
    <div className={cn(
      direction === "column" ? "flex flex-col space-y-3" : "flex flex-row flex-wrap gap-3",
      withBackground && "bg-muted/10 p-4 rounded-lg",
      className
    )}>
      {enhancedChildren}
    </div>
  );
} 