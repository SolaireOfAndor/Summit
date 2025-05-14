import { Hero } from "@/components/sections/hero"
import { SummitIndependenceSection } from "@/components/sections/eden-independence-section"
import { SummitHousingSection } from "@/components/sections/eden-housing-section"
import { SummitLifestyleSection } from "@/components/sections/eden-lifestyle-section"
import { SectionSeparator } from "@/components/ui/section-separator"

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      {/* Other sections will be added here */}
    </main>
  )
}

