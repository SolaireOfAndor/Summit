import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { ServiceCard } from "@/components/features/service-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { 
  Home, 
  Users, 
  Heart, 
  Clock, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  Lightbulb,
  MapPin,
  Phone,
  Calendar,
  Star,
  Target,
  Activity,
  Building,
  Handshake,
  BookOpen,
  Award,
  Zap,
  GraduationCap,
  DollarSign,
  HelpCircle,
  AlertCircle,
  TrendingUp,
  MessageSquare,
  Briefcase,
  Stethoscope,
  Wrench,
  X,
  Check,
  Info,
  Clock3,
  PieChart,
  Building2,
  Bed,
  Bath,
  Accessibility,
  ShieldCheck,
  HeartHandshake,
  Plus,
  Settings,
  Eye,
  Layers,
  Navigation,
  Car,
  TreePine,
  Sparkles,
  FileText,
  Scale,
  Banknote,
  WifiIcon as Wifi,
  User,
  Users2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Guide to Specialist Disability Accommodation (SDA) | What is SDA?",
  description: "Comprehensive guide to Specialist Disability Accommodation (SDA) - understand eligibility, design categories, funding, and how SDA works. Expert information for NDIS participants with extreme functional impairment.",
  keywords: "SDA, Specialist Disability Accommodation, NDIS SDA, disability housing, accessible housing, SDA explained, SDA categories, NDIS housing, SDA vs SIL, extreme functional impairment",
  openGraph: {
    title: "Complete Guide to Specialist Disability Accommodation (SDA)",
    description: "Everything you need to know about SDA - from eligibility and design categories to funding and choosing the right housing. Comprehensive educational resource.",
    type: "article",
    images: [
      {
        url: "/header/page-header-8.webp",
        width: 1200,
        height: 630,
        alt: "Modern accessible SDA housing with wheelchair accessibility features"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide to Specialist Disability Accommodation (SDA)",
    description: "Comprehensive educational guide covering all aspects of SDA housing for NDIS participants",
  },
  alternates: {
    canonical: "/learn/about-sda"
  }
}

// Table of Contents Data
const tableOfContents = [
  { title: "What is SDA?", href: "#what-is-sda" },
  { title: "SDA vs Other Support Types", href: "#sda-comparison" },
  { title: "Who is Eligible?", href: "#eligibility" },
  { title: "SDA Design Categories", href: "#design-categories" },
  { title: "SDA Housing Types", href: "#housing-types" },
  { title: "How SDA Works", href: "#how-it-works" },
  { title: "Funding & Costs", href: "#funding" },
  { title: "Choosing SDA Housing", href: "#choosing-housing" },
  { title: "Planning Your Journey", href: "#planning" },
  { title: "Your Rights", href: "#rights" },
  { title: "Myths vs Facts", href: "#myths-facts" },
  { title: "Frequently Asked Questions", href: "#faq" }
]

// SDA Benefits
const sdaBenefits = [
  {
    title: "Purpose-Built Accessibility",
    description: "Housing specifically designed with accessibility features and assistive technology.",
    icon: Accessibility,
    category: "Design",
    details: "Features like wheelchair accessibility, ceiling hoists, emergency backup power, and assistive technology integration."
  },
  {
    title: "Enhanced Independence",
    description: "Live independently with housing that accommodates your specific functional needs.",
    icon: UserCheck,
    category: "Independence",
    details: "Designed to minimize reliance on informal support and maximize your ability to live independently."
  },
  {
    title: "Safety & Security",
    description: "Enhanced safety features including emergency systems and robust construction.",
    icon: Shield,
    category: "Safety",
    details: "Features like emergency call systems, fire safety enhancements, and secure entry systems."
  },
  {
    title: "Community Integration",
    description: "Located in mainstream communities with access to transport and amenities.",
    icon: Users,
    category: "Community",
    details: "Close to public transport, shops, services, and community facilities for full participation."
  },
  {
    title: "Future-Proofed Design",
    description: "Housing designed to accommodate changing needs over time.",
    icon: TrendingUp,
    category: "Adaptability",
    details: "Flexible design that can be modified as your support needs change throughout your life."
  },
  {
    title: "Quality Assurance",
    description: "Built to strict NDIS standards with ongoing quality monitoring.",
    icon: Star,
    category: "Quality",
    details: "Regular inspections and maintenance ensure your housing meets high standards continuously."
  }
]

// Eligibility requirements for SDA
const eligibilityRequirements = [
  {
    title: "Extreme Functional Impairment",
    description: "You must have extreme functional impairment or very high support needs in self-care, mobility, or self-management.",
    icon: Stethoscope,
    details: "Assessed using functional capacity tools that measure your ability to perform daily activities independently."
  },
  {
    title: "Housing Need",
    description: "Current housing is inappropriate and cannot be modified to meet your disability-related needs.",
    icon: Home,
    details: "Your current accommodation lacks essential accessibility features that cannot be reasonably added."
  },
  {
    title: "NDIS Participant",
    description: "You must be an eligible NDIS participant with SDA included in your plan.",
    icon: CheckCircle2,
    details: "SDA funding must be specifically allocated in your NDIS plan following comprehensive assessment."
  },
  {
    title: "Long-term Housing Need",
    description: "You require housing that will meet your needs for an extended period (typically 3+ years).",
    icon: Calendar,
    details: "SDA is for permanent housing solutions, not short-term or temporary accommodation needs."
  }
]

// SDA Design Categories
const designCategories = [
  {
    title: "Improved Liveability",
    description: "Better amenity, design and location for people with sensory, intellectual or cognitive impairment.",
    icon: Lightbulb,
    features: [
      "Good natural light and ventilation",
      "Reduced auditory distractions",
      "Visual cues and wayfinding",
      "Private outdoor space",
      "Quality fixtures and fittings"
    ],
    suitability: "People with sensory, intellectual, or cognitive impairments who benefit from enhanced amenity"
  },
  {
    title: "Fully Accessible",
    description: "Wheelchair accessible design meeting the Livable Housing Australia Platinum standard.",
    icon: Accessibility,
    features: [
      "Step-free access throughout",
      "Wide corridors and doorways",
      "Accessible bathrooms and kitchens",
      "Appropriate floor surfaces",
      "Accessible light switches and controls"
    ],
    suitability: "People who use wheelchairs or mobility equipment requiring full accessibility"
  },
  {
    title: "Robust",
    description: "Durable design and fittings for people who might damage the physical environment.",
    icon: Shield,
    features: [
      "Reinforced walls and fixtures",
      "Impact-resistant materials",
      "Secure outdoor areas",
      "Tamper-proof fittings",
      "Easy-to-clean surfaces"
    ],
    suitability: "People who may unintentionally damage property due to their disability"
  },
  {
    title: "High Physical Support",
    description: "Design for people requiring significant physical assistance from support workers.",
    icon: HeartHandshake,
    features: [
      "Ceiling hoist systems",
      "Emergency backup power",
      "Clinical care facilities",
      "Overnight support accommodation",
      "Accessible van parking"
    ],
    suitability: "People with very high physical support needs requiring significant daily assistance"
  }
]

// SDA Housing Types
const housingTypes = [
  {
    title: "Apartments",
    description: "Purpose-built apartments in apartment complexes with shared common areas.",
    icon: Building2,
    residents: "1-2 residents",
    features: ["Private bedrooms", "Shared living areas", "Building amenities", "Urban locations"],
    considerations: ["Shared spaces", "Building rules", "Neighbor interactions"]
  },
  {
    title: "Duplexes/Villas",
    description: "Semi-detached housing with private outdoor space and separate entries.",
    icon: Home,
    residents: "1-3 residents",
    features: ["Private outdoor space", "Semi-independent living", "Separate entries", "Suburban settings"],
    considerations: ["Maintenance responsibilities", "Limited amenities", "Transport access"]
  },
  {
    title: "Group Homes",
    description: "Purpose-built houses designed for multiple residents with shared living spaces.",
    icon: Users2,
    residents: "3-5 residents",
    features: ["Shared common areas", "Individual bedrooms", "On-site support space", "Community settings"],
    considerations: ["Compatibility with housemates", "Shared routines", "Group dynamics"]
  },
  {
    title: "Legacy Stock",
    description: "Existing NDIS housing stock that meets SDA standards through modification.",
    icon: Building,
    residents: "Varies",
    features: ["Converted properties", "Varied designs", "Established locations", "Cost-effective"],
    considerations: ["Limited availability", "Varied quality", "Potential limitations"]
  }
]

// How SDA Works - Process Steps
const sdaProcess = [
  {
    step: "1",
    title: "Assessment & Planning",
    description: "Comprehensive assessment of your functional capacity and housing needs during NDIS planning.",
    icon: FileText,
    details: "Occupational therapy assessment, housing needs evaluation, and support requirement analysis."
  },
  {
    step: "2", 
    title: "SDA Approval",
    description: "NDIS approves SDA funding in your plan based on assessment outcomes and housing availability.",
    icon: CheckCircle2,
    details: "Plan specifies design category, dwelling type, and funding amount for your SDA entitlement."
  },
  {
    step: "3",
    title: "Housing Search",
    description: "Search for suitable SDA properties that match your approved design category and preferences.",
    icon: MapPin,
    details: "Use NDIS housing finder, work with providers, or engage housing specialists to find options."
  },
  {
    step: "4",
    title: "Move-in & Support",
    description: "Coordinate your move and establish ongoing support services in your new SDA home.",
    icon: Home,
    details: "Arrange SIL support, connect utilities, and settle into your new accessible accommodation."
  }
]

// Funding Information
const fundingDetails = [
  {
    title: "Capital Support Budget",
    description: "SDA funding comes from a separate Capital Support budget, not your Core Support funding.",
    icon: Building2,
    details: "Covers the cost of accessible housing features and design elements specific to your needs.",
    calculation: "Based on design category and location"
  },
  {
    title: "Reasonable Rent Contribution",
    description: "You pay a reasonable rent contribution (typically 25-30% of your income) toward housing costs.",
    icon: DollarSign,
    details: "Similar to rent assistance, this contribution helps cover general housing costs beyond accessibility features.",
    calculation: "Percentage of disability pension"
  },
  {
    title: "Location-Based Pricing",
    description: "SDA pricing varies by location, with higher rates in capital cities and lower rates in regional areas.",
    icon: MapPin,
    details: "Reflects local construction costs and housing market conditions in different geographic areas.",
    calculation: "Metro, regional, or remote pricing"
  },
  {
    title: "Design Category Pricing",
    description: "Higher support design categories receive increased funding to cover additional accessibility features.",
    icon: Layers,
    details: "High Physical Support commands the highest rates, followed by Robust, Fully Accessible, and Improved Liveability.",
    calculation: "Tiered pricing by category"
  }
]

// Choosing SDA Housing Criteria
const housingSelectionCriteria = [
  {
    title: "Design Category Match",
    description: "Ensure the housing matches your approved SDA design category and specific needs.",
    icon: Accessibility,
    importance: "Essential"
  },
  {
    title: "Location & Accessibility",
    description: "Consider proximity to transport, services, family, and community connections.",
    icon: MapPin,
    importance: "Very Important"
  },
  {
    title: "Compatibility with Housemates",
    description: "If sharing, ensure compatibility with other residents in terms of lifestyle and support needs.",
    icon: Users,
    importance: "Important"
  },
  {
    title: "Support Service Integration",
    description: "Consider how well the housing works with your chosen SIL or other support providers.",
    icon: HeartHandshake,
    importance: "Important"
  },
  {
    title: "Provider Reputation",
    description: "Research the SDA provider's reputation, maintenance standards, and participant satisfaction.",
    icon: Star,
    importance: "Practical"
  },
  {
    title: "Long-term Suitability",
    description: "Consider how the housing will meet your needs as they change over time.",
    icon: TrendingUp,
    importance: "Strategic"
  }
]

// Participant Rights
const participantRights = [
  {
    title: "Housing Choice",
    description: "You have the right to choose where you live and who you live with, subject to availability.",
    icon: Home
  },
  {
    title: "Quality Standards",
    description: "Your SDA housing must meet strict design and quality standards set by the NDIS.",
    icon: Star
  },
  {
    title: "Maintenance & Repairs",
    description: "SDA providers must maintain your housing to appropriate standards at no cost to you.",
    icon: Wrench
  },
  {
    title: "Privacy & Dignity",
    description: "You have the right to privacy in your home and to be treated with dignity and respect.",
    icon: Shield
  },
  {
    title: "Tenancy Rights",
    description: "You have standard tenancy rights and protections under residential tenancy laws.",
    icon: Scale
  },
  {
    title: "Complaints Process",
    description: "You can make complaints about your housing and have them addressed promptly.",
    icon: MessageSquare
  }
]

// Myths vs Facts
const mythsAndFacts = [
  {
    myth: "SDA is only for people with the highest support needs",
    fact: "SDA is for people with extreme functional impairment, which includes various disability types and support levels.",
    icon: Users
  },
  {
    myth: "You have to live with other people in SDA",
    fact: "SDA includes individual apartments and housing options where you can live alone if preferred.",
    icon: Home
  },
  {
    myth: "SDA housing is institutional and clinical",
    fact: "Modern SDA is designed to look and feel like regular homes while incorporating necessary accessibility features.",
    icon: Heart
  },
  {
    myth: "Once you're in SDA, you can't move",
    fact: "You can request to move to different SDA housing if your needs change or you're not satisfied.",
    icon: ArrowRight
  },
  {
    myth: "SDA funding is very limited and hard to get",
    fact: "If you meet the eligibility criteria and there's housing available, SDA funding is your entitlement.",
    icon: DollarSign
  },
  {
    myth: "SDA providers control your daily life",
    fact: "SDA providers only provide housing - your support services and daily routines are separate arrangements.",
    icon: UserCheck
  }
]

// FAQ Data
const faqData = [
  {
    question: "How do I know if I'm eligible for SDA?",
    answer: "You're eligible if you have extreme functional impairment in self-care, mobility, or self-management, and your current housing cannot meet your disability-related needs. A comprehensive assessment by NDIS assessors determines eligibility based on your functional capacity and housing requirements."
  },
  {
    question: "What's the difference between SDA and SIL?",
    answer: "SDA is the physical housing with accessibility features, while SIL is the support services you receive. You can have SDA without SIL if you don't need daily support, or SIL without SDA if your current housing meets your needs."
  },
  {
    question: "How long does it take to get SDA?",
    answer: "The timeline varies depending on housing availability in your preferred location and design category. It can range from several months to over a year. The assessment and approval process typically takes 3-6 months, then finding suitable housing depends on local availability."
  },
  {
    question: "Can I choose who I live with in SDA?",
    answer: "Yes, where possible, you can express preferences about housemates. However, compatibility, support needs, and housing availability all influence final arrangements. Many SDA options also include individual living arrangements."
  },
  {
    question: "What if the SDA housing doesn't meet my needs?",
    answer: "If your SDA housing isn't suitable, you can request a review of your accommodation. This might involve modifications to existing housing, relocation to more suitable housing, or reassessment of your needs."
  },
  {
    question: "Do I pay rent for SDA housing?",
    answer: "Yes, you pay a reasonable rent contribution (typically 25-30% of your income) similar to rent assistance. The NDIS SDA funding covers the additional costs related to accessibility features and design elements."
  },
  {
    question: "Can I have guests or visitors in SDA housing?",
    answer: "Yes, SDA housing is your home, and you have the right to have visitors and guests according to your tenancy agreement and house rules. This includes overnight guests and family visits."
  },
  {
    question: "What happens if I want to move to a different area?",
    answer: "You can request to move to different SDA housing, but this depends on availability in your preferred location and your ongoing eligibility. You'll need to work with your NDIS planner and potential new providers."
  },
  {
    question: "How often is SDA housing maintained?",
    answer: "SDA providers are responsible for maintaining the property to appropriate standards. This includes regular maintenance, repairs, and ensuring all accessibility features continue to function properly. Emergency repairs should be addressed immediately."
  },
  {
    question: "Can my family help me choose SDA housing?",
    answer: "Absolutely. Your family, friends, or advocates can help you research options, visit properties, and make decisions about your housing. You maintain the final choice, but support in decision-making is encouraged."
  }
]

export default function AboutSDAPage() {
  return (
    <>
      <PageHero
        title="Complete Guide to Specialist Disability Accommodation (SDA)"
        description="Everything you need to know about SDA - from understanding design categories to accessing housing. Comprehensive, educational information for NDIS participants with extreme functional impairment."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About SDA", href: "/learn/about-sda" }
        ]}
        heroImage={{
          src: "/header/page-header-8.webp",
          alt: "Modern accessible SDA apartment building with wheelchair access and contemporary design"
        }}
        ctaText="View SDA Properties"
        ctaHref="/properties"
      />

      {/* Table of Contents */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]" aria-label="Table of contents">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-[hsl(var(--heading))] mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {tableOfContents.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))] text-sm py-1 px-2 rounded hover:bg-[hsl(var(--primary))]/5 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is SDA Section */}
      <section id="what-is-sda" className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="What is SDA">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Understanding SDA
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What is Specialist Disability Accommodation?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Specialist Disability Accommodation (SDA) is purpose-built housing designed specifically for NDIS participants 
                with extreme functional impairment or very high support needs who require specialized housing solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    SDA is housing with specific design features that enable people with significant functional impairment 
                    to live more independently and safely. Unlike regular housing, SDA incorporates accessibility features, 
                    assistive technology, and design elements that cannot be easily added to standard accommodation.
                  </p>
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    The accommodation is designed to reduce reliance on paid and informal supports over time, enabling 
                    greater independence and community participation. SDA funding is separate from other NDIS supports 
                    and specifically covers the additional costs of these specialized housing features.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Building2 className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Purpose-Built Design</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Housing specifically designed and built to meet accessibility and support requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Accessibility className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Enhanced Independence</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Features that enable greater independence and reduce reliance on formal and informal support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Users className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Community Integration</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Located in mainstream residential areas with access to community facilities and transport</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/house-image/1.webp"
                    alt="Modern SDA apartment building with accessible design features and contemporary architecture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-lg border max-w-xs">
                  <p className="text-[hsl(var(--body))] text-sm">
                    <strong className="text-[hsl(var(--heading))]">Did you know?</strong> SDA supports approximately 
                    28,000 NDIS participants across Australia in purpose-built accessible housing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDA Comparison Section */}
      <section id="sda-comparison" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="SDA vs other support types">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Comparison Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                SDA vs Other NDIS Support Types
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Understanding how SDA differs from other NDIS support types helps clarify what SDA provides and who it's designed for.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-[hsl(var(--pure-white))] rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b border-[hsl(var(--light-orange))]">
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Support Type</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">What It Provides</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Eligibility Focus</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Budget Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[hsl(var(--light-orange))]/30">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">SDA</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Specialized accessible housing with design features</td>
                    <td className="p-4 text-[hsl(var(--body))]">Extreme functional impairment</td>
                    <td className="p-4 text-[hsl(var(--body))]">Capital Support</td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--light-orange))]/30">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">SIL</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Daily living support services in your home</td>
                    <td className="p-4 text-[hsl(var(--body))]">Need for daily living assistance</td>
                    <td className="p-4 text-[hsl(var(--body))]">Core Support</td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--light-orange))]/30">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">STA</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Short-term respite accommodation</td>
                    <td className="p-4 text-[hsl(var(--body))]">Temporary accommodation needs</td>
                    <td className="p-4 text-[hsl(var(--body))]">Core Support</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">Home Modifications</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Modifications to existing housing</td>
                    <td className="p-4 text-[hsl(var(--body))]">Current housing can be modified</td>
                    <td className="p-4 text-[hsl(var(--body))]">Capital Support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA eligibility">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Eligibility Requirements
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Who is Eligible for SDA?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                SDA eligibility requires extreme functional impairment and a housing need that cannot be met through standard accommodation or home modifications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {eligibilityRequirements.map((requirement, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex-shrink-0">
                        <requirement.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">{requirement.title}</h3>
                        <p className="text-[hsl(var(--body))] text-sm mb-3">{requirement.description}</p>
                        <p className="text-[hsl(var(--body))] text-xs leading-relaxed bg-[hsl(var(--light-orange))] p-3 rounded">
                          <strong>Details:</strong> {requirement.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-[hsl(var(--pure-white))] p-6 rounded-lg border">
              <h3 className="font-semibold text-[hsl(var(--heading))] mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-[hsl(var(--primary))]" />
                Assessment Process for SDA
              </h3>
              <div className="prose prose-sm max-w-none text-[hsl(var(--body))]">
                <p>
                  The NDIS uses comprehensive assessments including occupational therapy evaluations, functional capacity 
                  assessments, and housing needs analysis to determine SDA eligibility. The process examines your current 
                  housing situation, functional limitations, and whether standard housing modifications could meet your needs.
                </p>
                <p>
                  Assessments consider your support requirements, safety needs, and how specialized housing features would 
                  enhance your independence and quality of life. The goal is to ensure SDA funding is only provided when 
                  it's the most appropriate solution for your housing needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Benefits of SDA">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Key Benefits
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How SDA Can Transform Your Living Experience
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                SDA provides specialized housing solutions that enable greater independence, safety, and community participation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdaBenefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))] border-[hsl(var(--light-orange))]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <benefit.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                      </div>
                      <Badge variant="secondary" className="text-xs bg-[hsl(var(--lighter-orange))] text-[hsl(var(--body))]">
                        {benefit.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--heading))]">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[hsl(var(--body))] text-sm mb-3">{benefit.description}</p>
                    <p className="text-[hsl(var(--body))] text-xs leading-relaxed bg-[hsl(var(--lighter-orange))] p-3 rounded">
                      {benefit.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Categories Section */}
      <section id="design-categories" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA design categories">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Design Categories
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                SDA Design Categories Explained
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                SDA includes four design categories, each addressing different types of functional impairment and support needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {designCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <category.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <CardTitle className="text-xl text-[hsl(var(--heading))]">{category.title}</CardTitle>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">{category.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Key Features:</h4>
                      <div className="grid gap-2">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>Best for:</strong> {category.suitability}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Housing Types Section */}
      <section id="housing-types" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="SDA housing types">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Housing Types
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Types of SDA Housing Available
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                SDA housing comes in various forms to suit different preferences, support needs, and living arrangements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {housingTypes.map((type, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <type.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-[hsl(var(--heading))]">{type.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs bg-[hsl(var(--light-orange))] text-[hsl(var(--body))] mt-1">
                          {type.residents}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">{type.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2 flex items-center gap-1">
                        <Check className="w-4 h-4 text-green-600" />
                        Features
                      </h4>
                      <ul className="space-y-1">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-[hsl(var(--body))] text-sm flex items-center gap-2">
                            <div className="w-1 h-1 bg-[hsl(var(--primary))] rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        Considerations
                      </h4>
                      <ul className="space-y-1">
                        {type.considerations.map((consideration, considerationIndex) => (
                          <li key={considerationIndex} className="text-[hsl(var(--body))] text-sm flex items-center gap-2">
                            <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="How SDA works">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Process Overview
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How Does SDA Work? Step-by-Step Guide
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Understanding the SDA process from initial assessment to moving into your specialized accommodation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                {sdaProcess.map((step, index) => (
                  <div key={index} className="bg-[hsl(var(--pure-white))] p-6 rounded-lg shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--heading))] text-lg mb-2">{step.title}</h3>
                        <p className="text-[hsl(var(--body))] text-sm mb-3">{step.description}</p>
                        <div className="bg-[hsl(var(--light-orange))] p-3 rounded text-xs text-[hsl(var(--body))]">
                          <strong>Process:</strong> {step.details}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/house-image/2.webp"
                    alt="NDIS participant viewing accessible SDA apartment with support coordinator"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <Card className="bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
                      SDA Journey Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Start planning early - SDA housing can have waiting lists in some areas</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Consider your long-term needs when choosing design categories</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Location is important - consider transport, services, and community connections</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Visit potential housing options and meet potential housemates if applicable</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section id="funding" className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="SDA funding information">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Funding Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Understanding SDA Funding & Costs
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Learn how SDA funding works, what it covers, and your financial responsibilities as an SDA resident.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {fundingDetails.map((detail, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <detail.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-[hsl(var(--heading))]">{detail.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs bg-[hsl(var(--lighter-orange))] text-[hsl(var(--body))] mt-1">
                          {detail.calculation}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{detail.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[hsl(var(--body))] text-xs leading-relaxed bg-[hsl(var(--lighter-orange))] p-3 rounded">
                      {detail.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-[hsl(var(--pure-white))] p-6 rounded-lg">
              <h3 className="font-semibold text-[hsl(var(--heading))] mb-4 text-xl">SDA Funding Examples by Design Category</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-[hsl(var(--lighter-orange))] rounded">
                  <Lightbulb className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Improved Liveability</h4>
                  <p className="text-[hsl(var(--body))] text-sm">Base funding level</p>
                  <p className="text-[hsl(var(--body))] text-xs">Enhanced amenity features</p>
                </div>
                <div className="text-center p-4 bg-[hsl(var(--lighter-orange))] rounded">
                  <Accessibility className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Fully Accessible</h4>
                  <p className="text-[hsl(var(--body))] text-sm">Higher funding</p>
                  <p className="text-[hsl(var(--body))] text-xs">Full wheelchair accessibility</p>
                </div>
                <div className="text-center p-4 bg-[hsl(var(--lighter-orange))] rounded">
                  <Shield className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Robust</h4>
                  <p className="text-[hsl(var(--body))] text-sm">Premium funding</p>
                  <p className="text-[hsl(var(--body))] text-xs">Reinforced construction</p>
                </div>
                <div className="text-center p-4 bg-[hsl(var(--lighter-orange))] rounded">
                  <HeartHandshake className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-1">High Physical Support</h4>
                  <p className="text-[hsl(var(--body))] text-sm">Highest funding</p>
                  <p className="text-[hsl(var(--body))] text-xs">Clinical care features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing Housing Section */}
      <section id="choosing-housing" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Choosing SDA housing">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Housing Selection
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How to Choose the Right SDA Housing
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Selecting the right SDA housing involves considering multiple factors to ensure it meets your current and future needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {housingSelectionCriteria.map((criteria, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex-shrink-0">
                        <criteria.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-[hsl(var(--heading))]">{criteria.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {criteria.importance}
                          </Badge>
                        </div>
                        <p className="text-[hsl(var(--body))] text-sm">{criteria.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-[hsl(var(--pure-white))]">
              <CardHeader>
                <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[hsl(var(--primary))]" />
                  Questions to Ask When Viewing SDA Housing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-[hsl(var(--heading))]">Property Features</h4>
                    <ul className="space-y-1 text-sm text-[hsl(var(--body))]">
                      <li>• Are all accessibility features working properly?</li>
                      <li>• What maintenance and repair services are included?</li>
                      <li>• Are there any additional accessibility modifications available?</li>
                      <li>• What emergency systems are in place?</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-[hsl(var(--heading))]">Living Arrangements</h4>
                    <ul className="space-y-1 text-sm text-[hsl(var(--body))]">
                      <li>• Who are the other residents (if shared housing)?</li>
                      <li>• What are the house rules and expectations?</li>
                      <li>• How are conflicts between residents resolved?</li>
                      <li>• Can family and friends visit freely?</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section id="planning" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Planning your SDA journey">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Journey Planning
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Planning Your SDA Journey
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Successful SDA placement requires careful planning and consideration of your current and future needs.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                    <Target className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Preparation Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-[hsl(var(--heading))]">Before Assessment</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                          <p className="text-[hsl(var(--body))] text-sm">Document your current housing challenges</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                          <p className="text-[hsl(var(--body))] text-sm">Gather medical and therapy reports</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                          <p className="text-[hsl(var(--body))] text-sm">Identify your preferred locations</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                          <p className="text-[hsl(var(--body))] text-sm">Consider your support needs</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-[hsl(var(--heading))]">After Approval</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                          <p className="text-[hsl(var(--body))] text-sm">Research available SDA properties</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                          <p className="text-[hsl(var(--body))] text-sm">Visit potential housing options</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                          <p className="text-[hsl(var(--body))] text-sm">Organize support services</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                          <p className="text-[hsl(var(--body))] text-sm">Plan your transition timeline</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[hsl(var(--primary))]" />
                      Timeline Expectations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-xs font-medium">1-3M</div>
                        <div>
                          <p className="text-[hsl(var(--heading))] font-medium">Assessment & Approval</p>
                          <p className="text-[hsl(var(--body))] text-xs">NDIS planning and SDA eligibility determination</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-xs font-medium">3-12M</div>
                        <div>
                          <p className="text-[hsl(var(--heading))] font-medium">Housing Search</p>
                          <p className="text-[hsl(var(--body))] text-xs">Finding suitable SDA properties in your preferred area</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-xs font-medium">1-2M</div>
                        <div>
                          <p className="text-[hsl(var(--heading))] font-medium">Move-in Process</p>
                          <p className="text-[hsl(var(--body))] text-xs">Finalizing arrangements and transitioning to new housing</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
                      Success Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-[hsl(var(--light-orange))] rounded">
                        <p className="text-[hsl(var(--body))] text-sm">
                          <strong>Be flexible with location</strong> - Consider multiple areas to increase your housing options
                        </p>
                      </div>
                      <div className="p-3 bg-[hsl(var(--light-orange))] rounded">
                        <p className="text-[hsl(var(--body))] text-sm">
                          <strong>Think long-term</strong> - Choose housing that will meet your needs as they change over time
                        </p>
                      </div>
                      <div className="p-3 bg-[hsl(var(--light-orange))] rounded">
                        <p className="text-[hsl(var(--body))] text-sm">
                          <strong>Get support</strong> - Use support coordinators or advocates to help navigate the process
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section id="rights" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Participant rights">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Your Rights
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Your Rights as an SDA Resident
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Understanding your rights ensures you receive quality housing and can advocate for yourself when needed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {participantRights.map((right, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors flex-shrink-0">
                        <right.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">{right.title}</h3>
                        <p className="text-[hsl(var(--body))] text-sm">{right.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-[hsl(var(--pure-white))]">
              <CardHeader>
                <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[hsl(var(--primary))]" />
                  Support and Advocacy Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-[hsl(var(--heading))] mb-3">NDIS Quality and Safeguards Commission</h4>
                    <p className="text-[hsl(var(--body))] text-sm mb-2">For complaints about SDA housing and providers:</p>
                    <p className="text-[hsl(var(--body))] text-sm">Phone: 1800 035 544</p>
                    <p className="text-[hsl(var(--body))] text-sm">Email: complaints@ndiscommission.gov.au</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Residential Tenancies</h4>
                    <p className="text-[hsl(var(--body))] text-sm mb-2">For tenancy rights and dispute resolution:</p>
                    <p className="text-[hsl(var(--body))] text-sm">Contact your state tenancy tribunal</p>
                    <p className="text-[hsl(var(--body))] text-sm">Free legal advice services available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Myths vs Facts Section */}
      <section id="myths-facts" className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="SDA myths vs facts">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Myth Busting
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                SDA Myths vs Facts
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Let's clear up common misconceptions about Specialist Disability Accommodation to help you make informed decisions.
              </p>
            </div>

            <div className="space-y-6">
              {mythsAndFacts.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <X className="w-5 h-5 text-red-500" />
                          <h3 className="font-semibold text-red-700">Myth</h3>
                        </div>
                        <p className="text-[hsl(var(--body))] text-sm pl-7">{item.myth}</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-600" />
                          <h3 className="font-semibold text-green-700">Fact</h3>
                        </div>
                        <p className="text-[hsl(var(--body))] text-sm pl-7">{item.fact}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SDA frequently asked questions">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Common Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Frequently Asked Questions
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Find answers to the most common questions about Specialist Disability Accommodation.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border">
                  <AccordionTrigger className="text-[hsl(var(--heading))] font-medium text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[hsl(var(--body))] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Related services">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Related Information
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Related NDIS Support Types
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Explore other NDIS support types that often work together with SDA to provide comprehensive support solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Supported Independent Living (SIL)"
                description="Daily living support services that often complement SDA housing to help you live independently."
                icon={Home}
                href="/learn/about-sil"
              />
              <ServiceCard
                title="Short Term Accommodation (STA)"
                description="Respite and short-term accommodation options that can be used alongside your permanent SDA housing."
                icon={Calendar}
                href="/learn/about-sta"
              />
              <ServiceCard
                title="Medium Term Accommodation (MTA)"
                description="Temporary housing solutions that might be used while waiting for suitable SDA housing."
                icon={Clock}
                href="/learn/about-mta"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore SDA Options?"
        description="If you think SDA might be right for you, or if you want to learn more about accessing specialized housing, we're here to help you understand your options."
        primaryButtonText="Get Information"
        primaryButtonLink="/contact"
        secondaryButtonText="View SDA Properties"
        secondaryButtonLink="/properties"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="NDIS participant in modern accessible SDA apartment"
        footerText="Looking for SDA housing options? Browse our"
        footerLinkText="Property Listings"
        footerLinkHref="/properties"
      />
    </>
  )
} 