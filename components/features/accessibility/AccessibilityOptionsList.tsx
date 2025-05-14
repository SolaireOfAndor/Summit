"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Moon,
  Contrast,
  ALargeSmall,
} from "lucide-react";

interface AccessibilityOption {
  id: string;
  label: string;
  icon: React.ElementType;
  action: () => void;
}

/**
 * @component AccessibilityOptionsList
 * @description Renders a horizontal list of new accessibility option icon buttons with tooltips.
 *
 * @example
 * <AccessibilityOptionsList />
 *
 * @returns {JSX.Element}
 */
export const AccessibilityOptionsList = (): JSX.Element => {
  // Placeholder actions
  const handleToggleDarkMode = () => console.log("Toggle Dark Mode");
  const handleToggleColorBlindMode = () => console.log("Toggle Color Blind Mode");
  const handleToggleReadableFont = () => console.log("Toggle Readable Font");

  const options: AccessibilityOption[] = [
    {
      id: "dark-mode",
      label: "Dark Mode",
      icon: Moon,
      action: handleToggleDarkMode,
    },
    {
      id: "color-blind-mode",
      label: "Color Blind Mode",
      icon: Contrast,
      action: handleToggleColorBlindMode,
    },
    {
      id: "toggle-readable-font",
      label: "Toggle Readable Font",
      icon: ALargeSmall,
      action: handleToggleReadableFont,
    },
  ];

  return (
    <div className="flex items-center justify-center space-x-2 py-1">
      {options.map((option) => {
        const IconComponent = option.icon;
        return (
          <Button
            key={option.id}
            variant="outline"
            size="icon"
            onClick={option.action}
            title={option.label}
            aria-label={option.label}
            className={cn(
              "rounded-full w-9 h-9 p-2",
              "text-[hsl(var(--body))] hover:bg-[hsl(var(--primary-transparent))] hover:text-[hsl(var(--primary))] focus:ring-[hsl(var(--focus-ring))]"
            )}
          >
            <IconComponent size={18} />
          </Button>
        );
      })}
    </div>
  );
}; 