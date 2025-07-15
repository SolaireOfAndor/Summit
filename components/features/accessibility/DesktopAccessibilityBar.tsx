"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { AccessibilityIcon } from "./AccessibilityIcon";
import { AccessibilityOptionsList } from "./AccessibilityOptionsList";

interface DesktopAccessibilityBarProps {
  isVisible: boolean; // Used by parent to signal when this component should be considered hidden
}

/**
 * @component DesktopAccessibilityBar
 * @description Floating accessibility button for desktop that opens a dropdown menu with accessibility options.
 * Positioned in the top-right corner without taking up vertical space in the main header.
 *
 * @example
 * <DesktopAccessibilityBar isVisible={true} />
 *
 * @returns {JSX.Element}
 */
export const DesktopAccessibilityBar = ({ isVisible }: DesktopAccessibilityBarProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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
      ref={containerRef}
      className={cn(
        "hidden lg:block fixed right-4 z-40",
        "transition-all duration-300 ease-in-out",
        isVisible ? "top-24 opacity-100" : "top-4 opacity-0 pointer-events-none"
      )}
    >
      {/* Floating Accessibility Button */}
      <div className="relative">
        <button
          type="button"
          onClick={handleToggleExpand}
          aria-label="Toggle accessibility options"
          aria-expanded={isExpanded}
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-200",
            "bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] hover:shadow-xl",
            "focus:outline-none focus:ring-2 focus:ring-[hsl(var(--focus-ring))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]",
            "transform hover:scale-105 active:scale-95",
            isExpanded && "bg-[hsl(var(--primary-hover))] shadow-xl scale-105"
          )}
        >
          <AccessibilityIcon 
            asChild 
            iconSize={20} 
            className="text-[hsl(var(--text-white))]" 
          />
        </button>

        {/* Dropdown Menu */}
        {isExpanded && (
          <div className="absolute top-full right-0 mt-2 min-w-[280px] bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-lg shadow-xl overflow-hidden z-50">
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-[hsl(var(--heading))]">Accessibility Options</h3>
                <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full"></div>
              </div>
              
              <div className="space-y-3">
                <AccessibilityOptionsList />
                
                <div className="pt-2 border-t border-[hsl(var(--border))] text-center">
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">
                    Use these tools to enhance your browsing experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tooltip for collapsed state */}
        {!isExpanded && (
          <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-[hsl(var(--deep-brown))] text-[hsl(var(--text-white))] text-xs rounded-md shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Accessibility Options
          </div>
        )}
      </div>
    </div>
  );
}; 