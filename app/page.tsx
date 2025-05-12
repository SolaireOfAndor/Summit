import { Hero } from "@/components/sections/hero"
import { SummitIndependenceSection } from "@/components/sections/eden-independence-section"
import { SummitHousingSection } from "@/components/sections/eden-housing-section"
import { SummitLifestyleSection } from "@/components/sections/eden-lifestyle-section"
import { SectionSeparator } from "@/components/ui/section-separator"

export default function Home() {
  return (
    <>
      <Hero />

      {/* Commitment section with teal accent */}
      <div className="relative bg-gradient-to-b from-primary/5 to-white py-12">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]" />
        <div className="container relative">
          <div className="max-w-[500px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-accent px-5 py-2 rounded-full shadow-md">
              Our Commitment
            </div>
            <p className="text-base md:text-lg text-muted-foreground">
              Creating spaces where everyone can thrive, with comprehensive support services designed for your
              independence.
            </p>
          </div>
        </div>
      </div>

      {/* Independence section with purple background */}
      <div className="relative bg-secondary/[0.02] py-16">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#692b74_1px,transparent_1px),linear-gradient(-45deg,#692b74_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.02]" />
        <SectionSeparator variant="secondary" className="top-0" />
        <SectionSeparator variant="secondary" className="bottom-0" />
        <SummitIndependenceSection />
      </div>

      {/* Housing section with gold accents */}
      <div className="relative bg-gradient-to-b from-white to-accent/[0.02] py-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#caae3a_1px,transparent_1px),linear-gradient(to_bottom,#caae3a_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]" />
        <SectionSeparator variant="accent" className="top-0" />
        <SummitHousingSection />
      </div>

      {/* Lifestyle section with teal accents */}
      <div className="relative bg-gradient-to-b from-accent/[0.02] to-white py-16">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.02]" />
        <SectionSeparator variant="accent" className="top-0" />
        <SectionSeparator variant="accent" className="bottom-0" />
        <SummitLifestyleSection />
      </div>
    </>
  )
}

