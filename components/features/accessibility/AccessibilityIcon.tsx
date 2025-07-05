"use client";

import { Accessibility } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccessibilityIconProps extends React.HTMLAttributes<HTMLButtonElement> {
  iconSize?: number;
  asChild?: boolean;
}

/**
 * @component AccessibilityIcon
 * @description A button component displaying an accessibility icon, or just the icon when used as a child.
 *
 * @example
 * <AccessibilityIcon onClick={handleOpenMenu} />
 * <AccessibilityIcon asChild iconSize={18} />
 *
 * @param {AccessibilityIconProps} props - The props for the component.
 * @param {() => void} [props.onClick] - Optional click handler.
 * @param {string} [props.className] - Optional additional class names.
 * @param {number} [props.iconSize=24] - Optional size for the icon.
 * @param {boolean} [props.asChild=false] - If true, renders just the icon without button wrapper.
 * @returns {JSX.Element}
 */
export const AccessibilityIcon = ({
  className,
  iconSize = 24,
  asChild = false,
  ...props
}: AccessibilityIconProps): JSX.Element => {
  if (asChild) {
    return (
      <Accessibility 
        size={iconSize} 
        className={cn("text-[hsl(var(--primary))]", className)} 
      />
    );
  }

  return (
    <button
      type="button"
      aria-label="Open accessibility options"
      className={cn(
        "p-2 rounded-md hover:bg-[hsl(var(--primary-transparent))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--focus-ring))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]",
        className
      )}
      {...props}
    >
      <Accessibility size={iconSize} className="text-[hsl(var(--primary))]" />
    </button>
  );
}; 