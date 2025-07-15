"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ColorBlindModeContextType {
  isColorBlindMode: boolean;
  toggleColorBlindMode: () => void;
  setColorBlindMode: (enabled: boolean) => void;
}

const ColorBlindModeContext = createContext<ColorBlindModeContextType | undefined>(undefined);

export const useColorBlindMode = () => {
  const context = useContext(ColorBlindModeContext);
  if (context === undefined) {
    throw new Error('useColorBlindMode must be used within a ColorBlindModeProvider');
  }
  return context;
};

interface ColorBlindModeProviderProps {
  children: ReactNode;
}

export const ColorBlindModeProvider = ({ children }: ColorBlindModeProviderProps) => {
  const [isColorBlindMode, setIsColorBlindMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize color blind mode from localStorage on client side
  useEffect(() => {
    const savedMode = localStorage.getItem('summit-color-blind-mode');
    if (savedMode !== null) {
      setIsColorBlindMode(JSON.parse(savedMode));
    }
    setIsInitialized(true);
  }, []);

  // Apply color blind mode class to document
  useEffect(() => {
    if (!isInitialized) return;

    const root = document.documentElement;
    if (isColorBlindMode) {
      root.classList.add('colorblind');
    } else {
      root.classList.remove('colorblind');
    }

    // Save to localStorage
    localStorage.setItem('summit-color-blind-mode', JSON.stringify(isColorBlindMode));
  }, [isColorBlindMode, isInitialized]);

  const toggleColorBlindMode = () => {
    setIsColorBlindMode(prev => !prev);
  };

  const setColorBlindMode = (enabled: boolean) => {
    setIsColorBlindMode(enabled);
  };

  const value = {
    isColorBlindMode,
    toggleColorBlindMode,
    setColorBlindMode,
  };

  return (
    <ColorBlindModeContext.Provider value={value}>
      {children}
    </ColorBlindModeContext.Provider>
  );
}; 