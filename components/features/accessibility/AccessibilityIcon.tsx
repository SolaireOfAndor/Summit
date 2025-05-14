"use client";

import { Accessibility } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccessibilityIconProps extends React.HTMLAttributes<HTMLButtonElement> {
  iconSize?: number;
}

/**
 * @component AccessibilityIcon
 * @description A button component displaying an accessibility icon.
 *
 * @example
 * <AccessibilityIcon onClick={handleOpenMenu} />
 *
 * @param {AccessibilityIconProps} props - The props for the component.
 * @param {() => void} [props.onClick] - Optional click handler.
 * @param {string} [props.className] - Optional additional class names.
 * @param {number} [props.iconSize=24] - Optional size for the icon.
 * @returns {JSX.Element}
 */
export const AccessibilityIcon = ({
  className,
  iconSize = 24,
  ...props
}: AccessibilityIconProps): JSX.Element => {
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