"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Moon,
  Sun,
  Contrast,
  ALargeSmall,
} from "lucide-react";
import { useDarkMode } from "@/contexts/dark-mode-context";
import { useColorBlindMode } from "@/contexts/color-blind-context";
import { useReadableFontMode } from "@/contexts/readable-font-context";

interface AccessibilityOption {
  id: string;
  label: string;
  icon: React.ElementType;
  activeIcon?: React.ElementType;
  action: () => void;
  isActive?: boolean;
}

/**
 * @component AccessibilityOptionsList
 * @description Renders a horizontal list of accessibility option icon buttons with dark mode toggle functionality.
 *
 * @example
 * <AccessibilityOptionsList />
 *
 * @returns {JSX.Element}
 */
export const AccessibilityOptionsList = (): JSX.Element => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { isColorBlindMode, toggleColorBlindMode } = useColorBlindMode();
  const { isReadableFontMode, toggleReadableFontMode } = useReadableFontMode();

  const options: AccessibilityOption[] = [
    {
      id: "dark-mode",
      label: isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode",
      icon: isDarkMode ? Sun : Moon,
      action: toggleDarkMode,
      isActive: isDarkMode,
    },
    {
      id: "color-blind-mode",
      label: isColorBlindMode ? "Disable Color Blind Mode" : "Enable Color Blind Mode",
      icon: Contrast,
      action: toggleColorBlindMode,
      isActive: isColorBlindMode,
    },
    {
      id: "toggle-readable-font",
      label: isReadableFontMode ? "Disable Readable Font" : "Enable Readable Font",
      icon: ALargeSmall,
      action: toggleReadableFontMode,
      isActive: isReadableFontMode,
    },
  ];

  return (
    <div className="flex items-center justify-center gap-3 py-2" role="group" aria-label="Accessibility options">
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
            aria-pressed={option.isActive}
            className={cn(
              "rounded-lg w-12 h-12 p-3 transition-all duration-200",
              "focus:ring-[hsl(var(--focus-ring))] focus:ring-2 focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]",
              "hover:shadow-md hover:scale-105 active:scale-95",
              option.isActive
                ? "bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] border-[hsl(var(--primary))] shadow-md"
                : "text-[hsl(var(--body))] hover:bg-[hsl(var(--primary-transparent))] hover:text-[hsl(var(--primary))] hover:border-[hsl(var(--primary))/0.3] border-[hsl(var(--border))]"
            )}
          >
            <IconComponent size={20} aria-hidden="true" />
          </Button>
        );
      })}
    </div>
  );
}; 