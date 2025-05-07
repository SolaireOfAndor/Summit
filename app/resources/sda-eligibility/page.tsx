import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, FileText, Users, ClipboardCheck, FileCheck, Home, Stethoscope, Lightbulb, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "SDA Eligibility Test | Check Your SDA Qualification",
  description:
    "Understand and test your eligibility for Specialist Disability Accommodation (SDA). Learn about the criteria, required evidence, and application process.",
  openGraph: {
    title: "SDA Eligibility Test | Check Your SDA Qualification",
    description:
      "Understand and test your eligibility for Specialist Disability Accommodation (SDA). Learn about the criteria, required evidence, and application process.",
    type: "website",
  },
}

const eligibilitySteps = [
  {
    title: "Learn SDA Eligibility Criteria",
    description: "Understand the requirements and pathways for SDA eligibility",
    icon: FileText,
  },
  {
    title: "Develop Housing Goals",
    description: "Work with your coordinator to establish clear housing objectives",
    icon: Home,
  },
  {
    title: "Choose Support Team",
    description: "Select qualified professionals to support your application",
    icon: Users,
  },
  {
    title: "Develop Housing Plan",
    description: "Create a comprehensive plan aligned with your needs",
    icon: ClipboardCheck,
  },
  {
    title: "Obtain Assessments",
    description: "Get required professional assessments and reports",
    icon: FileCheck,
  },
  {
    title: "Submit Documentation",
    description: "Provide your plan and evidence to NDIS planner",
    icon: FileText,
  },
]

const professionals = [
  {
    title: "Occupational Therapists",
    description: "Assess daily living skills and functional requirements",
    icon: Stethoscope,
  },
  {
    title: "Behaviour Therapists",
    description: "Evaluate behavioral support needs and interventions",
    icon: Lightbulb,
  },
  {
    title: "Psychologists",
    description: "Assess cognitive and psychological support requirements",
    icon: Stethoscope,
  },
  {
    title: "Speech Therapists",
    description: "Evaluate communication needs and supports",
    icon: Stethoscope,
  },
  {
    title: "Physiotherapists",
    description: "Assess mobility and physical support requirements",
    icon: Stethoscope,
  },
]

export default function SDAEligibilityPage() {
  return (
    <>
      <PageHero
        title="SDA Eligibility Test"
        description="Understand your eligibility for Specialist Disability Accommodation and get support for your application process."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "Resources", href: "/resources" },
          { title: "SDA Eligibility", href: "/resources/sda-eligibility" },
        ]}
        heroImage={{
          src: "/header/page-header-4.webp",
          alt: "Person reviewing SDA eligibility documents",
        }}
      />

      {/* Process Overview */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white" aria-label="Process Overview">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]" />
        <div className="container relative px-8 sm:px-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Eligibility Process</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How can I test my SDA eligibility?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Follow our step-by-step process to determine your eligibility and prepare your application for SDA
              funding. Understanding the requirements early can significantly improve your chances of approval.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-primary/10">
              <div className="relative aspect-[2/1]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-dJvvHYRIKQ54NQuLcbD369YJGHmnWH.png"
                  alt="SDA Application Process Steps"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Flowchart */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-muted/30" aria-label="Eligibility Flowchart">
        <SectionSeparator variant="primary" className="top-0" />
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Decision Flowchart</Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">SDA Eligibility Criteria</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                This flowchart helps visualize the decision-making process used to determine SDA eligibility.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-primary/10">
              <div className="relative aspect-[2/1]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-3ogb9Vd3gc6L5wgY62IH2Y8rjPCa7t.png"
                  alt="SDA Eligibility Criteria Flowchart"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Process */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-muted/30 to-white" aria-label="Application Steps">
        <SectionSeparator variant="secondary" className="top-0" />
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Application Journey</Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">SDA Application Process</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                Understanding the complete application process will help you prepare effectively for each step.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eligibilitySteps.map((step, index) => (
                <Card key={step.title} className="relative group hover:border-secondary hover:shadow-md transition-all overflow-hidden">
                  <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold py-1 px-2 rounded-full">
                    Step {index + 1}
                  </div>
                  <CardContent className="pt-12">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="p-3 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                        <step.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-secondary transition-colors">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Allied Health Professionals */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-primary/5" aria-label="Health Professionals">
        <SectionSeparator variant="primary" className="top-0" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.02]" />
        <div className="container relative px-8 sm:px-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Stethoscope className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Expert Support</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Allied Health Professionals</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              NDIA requires assessments from qualified professionals to support your SDA application. Choose
              professionals with experience in disability support and knowledge of NDIS requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {professionals.map((professional) => (
              <Card key={professional.title} className="relative group hover:border-primary hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <professional.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{professional.title}</h3>
                    <p className="text-sm text-muted-foreground">{professional.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Coordinator Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white" aria-label="Support Coordinator">
        <SectionSeparator variant="secondary" className="top-0" />
        <div className="container px-8 sm:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Application Support</Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Choosing a Support Coordinator</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A good support coordinator is crucial for your SDA journey. They should understand your needs and be
                able to effectively advocate on your behalf throughout the application process.
              </p>
              <div className="space-y-4 mt-8">
                {[
                  "Experience working with people with disability",
                  "Knowledge of NDIS Act and SDA Rules",
                  "Strong negotiation skills",
                  "Ability to develop comprehensive housing plans",
                  "Understanding of support needs assessment",
                ].map((quality) => (
                  <div key={quality} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-secondary/10 hover:border-secondary/30 hover:shadow-sm transition-all">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{quality}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <Card className="overflow-hidden hover:border-secondary hover:shadow-md transition-all">
                <div className="bg-secondary/10 p-4">
                  <h3 className="text-xl font-semibold text-secondary">Housing Plan Development</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Your support coordinator will help you develop a comprehensive housing plan that demonstrates why
                    SDA is the most appropriate housing solution for your needs, even after considering alternatives
                    like home modifications or assistive technology.
                  </p>
                  <div className="flex items-center mt-4 pt-4 border-t">
                    <FileText className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-sm font-medium">Comprehensive documentation is essential</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:border-secondary hover:shadow-md transition-all">
                <div className="bg-secondary/10 p-4">
                  <h3 className="text-xl font-semibold text-secondary">Evidence Collection</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    They'll help coordinate assessments and gather evidence to support your SDA application, ensuring
                    all documentation meets NDIS requirements and presents a compelling case for your needs.
                  </p>
                  <div className="flex items-center mt-4 pt-4 border-t">
                    <ClipboardCheck className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-sm font-medium">Quality of evidence matters</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Start Your SDA Journey?"
        description="Let us help you navigate the SDA eligibility process and connect you with the right professionals to support your application."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="View SDA Toolkit"
        secondaryButtonLink="/resources/sda-toolkit"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="Person reviewing SDA eligibility documents"
        footerText="Want to see our available SDA properties? Check our"
        footerLinkText="SDA Vacancies"
        footerLinkHref="/services/sda-vacancies"
      />
    </>
  )
}

