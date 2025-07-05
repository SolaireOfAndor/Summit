"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { AccessibilityIcon } from "./AccessibilityIcon";
import { AccessibilityOptionsList } from "./AccessibilityOptionsList";

interface DesktopAccessibilityBarProps {
  isVisible: boolean; // Used by parent to signal when this bar (and its menu) should be considered hidden
}

/**
 * @component DesktopAccessibilityBar
 * @description Expandable bar for desktop, providing access to icon-based accessibility options.
 * Closes on scroll or click outside. Parent controls overall sliding visibility.
 *
 * @example
 * <DesktopAccessibilityBar isVisible={true} />
 *
 * @returns {JSX.Element}
 */
export const DesktopAccessibilityBar = ({ isVisible }: DesktopAccessibilityBarProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleCloseExpand = useCallback(() => {
    setIsExpanded(false);
  }, []);

  // Effect to close expand if parent hides the whole header block
  useEffect(() => {
    if (!isVisible && isExpanded) {
      handleCloseExpand();
    }
  }, [isVisible, isExpanded, handleCloseExpand]);

  // Effect for scroll to close
  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const handleScroll = () => {
      handleCloseExpand();
    };

    // Add listener that fires once
    window.addEventListener('scroll', handleScroll, { once: true });

    return () => {
      // Clean up listener if component unmounts or isExpanded changes before scroll
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isExpanded, handleCloseExpand]);

  // Effect for click outside to close
  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(event.target as Node)) {
        handleCloseExpand();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded, handleCloseExpand]);

  return (
    <div
      ref={barRef}
      className={cn(
        "hidden md:block w-full bg-[hsl(var(--background))] border-b border-[hsl(var(--border-gray))] shadow-sm overflow-hidden",
        "transition-all duration-300 ease-in-out", // For height transition
        isExpanded ? "h-auto py-2" : "h-6", // Expanded: py-2. Collapsed: h-6.
      )}
    >
      <div className="container mx-auto flex flex-col px-4">
        {/* Control row: Only the toggle icon, aligned to the right */}
        <div className="h-6 flex items-center justify-end"> 
          <button
            type="button"
            onClick={handleToggleExpand}
            aria-label="Toggle accessibility options"
            aria-expanded={isExpanded}
            className="p-1 -m-1 rounded-md hover:bg-[hsl(var(--primary-transparent))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--focus-ring))] focus:ring-offset-1 focus:ring-offset-[hsl(var(--background))]"
          >
            <AccessibilityIcon asChild iconSize={18} className="text-[hsl(var(--primary))]" />
          </button>
        </div>

        {/* Options list, only shown when expanded */}
        {isExpanded && (
          <div className="pt-1 pb-2"> {/* Added specific padding around options list */}
            <AccessibilityOptionsList />
          </div>
        )}
      </div>
    </div>
  );
}; 