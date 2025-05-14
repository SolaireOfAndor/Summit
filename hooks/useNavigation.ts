"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function useNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState("Summit Independence")
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [])

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setMobileMenuOpen(false)
  }

  return {
    mobileMenuOpen,
    setMobileMenuOpen,
    activeService,
    setActiveService,
    handleNavigation,
  }
}

