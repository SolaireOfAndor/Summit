"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ReadableFontContextType {
  isReadableFontMode: boolean;
  toggleReadableFontMode: () => void;
  setReadableFontMode: (enabled: boolean) => void;
}

const ReadableFontContext = createContext<ReadableFontContextType | undefined>(undefined);

export const useReadableFontMode = () => {
  const context = useContext(ReadableFontContext);
  if (context === undefined) {
    throw new Error('useReadableFontMode must be used within a ReadableFontModeProvider');
  }
  return context;
};

interface ReadableFontModeProviderProps {
  children: ReactNode;
}

export const ReadableFontModeProvider = ({ children }: ReadableFontModeProviderProps) => {
  const [isReadableFontMode, setIsReadableFontMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize readable font mode from localStorage on client side
  useEffect(() => {
    const savedMode = localStorage.getItem('summit-readable-font-mode');
    if (savedMode !== null) {
      setIsReadableFontMode(JSON.parse(savedMode));
    }
    setIsInitialized(true);
  }, []);

  // Apply readable font mode class to document
  useEffect(() => {
    if (!isInitialized) return;

    const root = document.documentElement;
    if (isReadableFontMode) {
      root.classList.add('readable-font');
    } else {
      root.classList.remove('readable-font');
    }

    // Save to localStorage
    localStorage.setItem('summit-readable-font-mode', JSON.stringify(isReadableFontMode));
  }, [isReadableFontMode, isInitialized]);

  const toggleReadableFontMode = () => {
    setIsReadableFontMode(prev => !prev);
  };

  const setReadableFontMode = (enabled: boolean) => {
    setIsReadableFontMode(enabled);
  };

  const value = {
    isReadableFontMode,
    toggleReadableFontMode,
    setReadableFontMode,
  };

  return (
    <ReadableFontContext.Provider value={value}>
      {children}
    </ReadableFontContext.Provider>
  );
}; 