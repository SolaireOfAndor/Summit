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
  Coffee,
  Utensils,
  ShoppingCart,
  Car,
  Building,
  Handshake,
  BookOpen,
  Award,
  Zap,
  GraduationCap,
  DollarSign,
  Sparkles,
  HelpCircle,
  AlertCircle,
  FileText,
  TrendingUp,
  Banknote,
  Scale,
  Eye,
  Settings,
  Layers,
  MessageSquare,
  Navigation,
  Briefcase,
  School,
  Stethoscope,
  ChefHat,
  Wrench,
  X,
  Check,
  Info,
  ArrowUpRight,
  Clock3,
  PieChart,
  User,
  Users2,
  Building2,
  Bed,
  Bath,
  WifiIcon as Wifi,
  Accessibility,
  CarIcon as Transport,
  TreePine,
  ShieldCheck,
  HeartHandshake,
  Plus
} from "lucide-react"

export const metadata: Metadata = {
  title: "What is Supported Independent Living (SIL)? Complete NDIS Guide — Summit",
  description: "Comprehensive guide to Supported Independent Living (SIL) — eligibility, funding, support types, choosing a provider & how SIL works in NSW. Written by NDIS specialists for participants, families & support coordinators.",
  keywords: "what is SIL, Supported Independent Living explained, NDIS SIL eligibility, SIL funding guide, SIL vs SDA difference, choosing SIL provider Sydney, SIL support types, SIL roster of care, 24/7 SIL care, NDIS participant guide, SIL services NSW",
  openGraph: {
    title: "Complete Guide to Supported Independent Living (SIL)",
    description: "Everything you need to know about SIL - from eligibility and funding to daily support and choosing providers. Comprehensive educational resource.",
    type: "article",
    images: [
      {
        url: "/header/page-header-9.webp",
        width: 1200,
        height: 630,
        alt: "Person with disability living independently with support worker assistance"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide to Supported Independent Living (SIL)",
    description: "Comprehensive educational guide covering all aspects of SIL support for NDIS participants",
  },
  alternates: {
    canonical: "/learn/about-sil"
  }
}

// Table of Contents Data
const tableOfContents = [
  { title: "What is SIL?", href: "#what-is-sil" },
  { title: "SIL vs Other Support Types", href: "#sil-comparison" },
  { title: "Who is Eligible?", href: "#eligibility" },
  { title: "Types of Support", href: "#support-types" },
  { title: "Living Arrangements", href: "#living-arrangements" },
  { title: "How SIL Works", href: "#how-it-works" },
  { title: "Funding & Costs", href: "#funding" },
  { title: "Choosing a Provider", href: "#choosing-provider" },
  { title: "Planning Your Support", href: "#planning" },
  { title: "Your Rights", href: "#rights" },
  { title: "Myths vs Facts", href: "#myths-facts" },
  { title: "Frequently Asked Questions", href: "#faq" }
]

// Benefits with more comprehensive details
const silBenefits = [
  {
    title: "Maintain Independence",
    description: "Keep control over your daily life while receiving personalized support when you need it.",
    icon: UserCheck,
    category: "Independence",
    details: "You make your own decisions about how you live, what you do, and when you do it. Support staff assist you rather than taking over."
  },
  {
    title: "Build Life Skills",
    description: "Develop practical skills and confidence to increase your independence over time.",
    icon: GraduationCap,
    category: "Skill Development",
    details: "Learn cooking, budgeting, public transport use, communication skills, and other abilities that enhance your independence."
  },
  {
    title: "Stay Connected",
    description: "Maintain relationships with family, friends, and your community with transport and social support.",
    icon: Users,
    category: "Social Connection",
    details: "Participate in community activities, maintain friendships, visit family, and engage in hobbies and interests."
  },
  {
    title: "Safety & Security",
    description: "Live safely with 24/7 support availability and emergency response when needed.",
    icon: Shield,
    category: "Safety",
    details: "Access to support staff, emergency procedures, and safety planning to ensure you feel secure in your home."
  },
  {
    title: "Flexible Support",
    description: "Receive support that adapts to your changing needs, goals, and circumstances.",
    icon: Zap,
    category: "Flexibility",
    details: "Support can be increased or decreased based on your progress, health changes, or personal preferences."
  },
  {
    title: "Choose Your Home",
    description: "Live where you want - your own home, shared house, or supported accommodation.",
    icon: Home,
    category: "Living Options",
    details: "Various housing options available, from independent apartments to shared houses with other participants."
  }
]

// Comprehensive eligibility criteria
const eligibilityRequirements = [
  {
    title: "NDIS Participant",
    description: "You must be an eligible NDIS participant with an approved plan.",
    icon: CheckCircle2,
    details: "Have a current NDIS plan with SIL funding allocated in your Core Support budget."
  },
  {
    title: "Functional Capacity",
    description: "Require assistance with daily living activities but want to live independently.",
    icon: Activity,
    details: "Need support with activities like personal care, household tasks, or community participation."
  },
  {
    title: "Age Requirements", 
    description: "Generally available for adults 18+ years, with some exceptions for younger participants.",
    icon: Calendar,
    details: "School leavers aged 16-17 may access SIL in specific circumstances with proper transition planning."
  },
  {
    title: "Support Needs Assessment",
    description: "Professional assessment determines your support needs and funding levels.",
    icon: Stethoscope,
    details: "NDIS planners assess your functional capacity and support requirements during plan development."
  }
]

// Comprehensive support types with examples
const supportCategories = [
  {
    title: "Personal Care Support",
    description: "Assistance with personal hygiene, health management, and self-care activities.",
    icon: Heart,
    examples: [
      "Showering and bathing assistance",
      "Medication management and reminders", 
      "Dental and personal hygiene",
      "Dressing and grooming",
      "Health appointment support",
      "Exercise and physical wellbeing"
    ],
    timeframe: "Daily or as needed"
  },
  {
    title: "Household Management",
    description: "Help with domestic tasks and maintaining your living environment.",
    icon: Home,
    examples: [
      "Cleaning and tidying",
      "Laundry and ironing",
      "Meal planning and preparation",
      "Shopping and errands",
      "Home maintenance coordination",
      "Budgeting and bill management"
    ],
    timeframe: "Weekly or bi-weekly"
  },
  {
    title: "Community Participation",
    description: "Support to access community activities and maintain social connections.",
    icon: Users,
    examples: [
      "Transport to activities and appointments",
      "Social events and recreation",
      "Sporting activities and hobbies",
      "Community group participation",
      "Volunteer work support",
      "Cultural and religious activities"
    ],
    timeframe: "As planned or desired"
  },
  {
    title: "Life Skills Development",
    description: "Building practical skills for greater independence and confidence.",
    icon: Lightbulb,
    examples: [
      "Cooking and nutrition education",
      "Public transport training",
      "Communication skills",
      "Technology and internet use",
      "Money management",
      "Goal setting and planning"
    ],
    timeframe: "Ongoing development"
  },
  {
    title: "Employment Support",
    description: "Assistance to maintain employment or pursue education and training.",
    icon: Briefcase,
    examples: [
      "Work preparation and routine",
      "Transport to work or study",
      "Communication with employers",
      "Skill development for work",
      "Career planning support",
      "Workplace adjustment assistance"
    ],
    timeframe: "Work/study schedule"
  },
  {
    title: "Health & Wellbeing",
    description: "Support to maintain physical and mental health.",
    icon: Stethoscope,
    examples: [
      "Medical appointment attendance",
      "Mental health support",
      "Therapy session coordination",
      "Preventive health measures",
      "Wellness activity participation",
      "Crisis support planning"
    ],
    timeframe: "As required"
  }
]

// Living arrangement options
const livingArrangements = [
  {
    title: "Independent Apartment",
    description: "Live alone in your own apartment with support visiting as needed.",
    icon: Building2,
    pros: ["Complete privacy", "Total independence", "Own space"],
    considerations: ["Higher support costs", "More responsibility", "Emergency response planning"],
    suitability: "People with good independent living skills who need minimal daily support"
  },
  {
    title: "Shared House with Participants",
    description: "Share accommodation with other NDIS participants, each with their own support.",
    icon: Users2,
    pros: ["Shared costs", "Social interaction", "Peer support"],
    considerations: ["Compatibility important", "Shared spaces", "Different support needs"],
    suitability: "People who enjoy company and want to share living costs"
  },
  {
    title: "Supported Group Home",
    description: "Live with other participants with on-site or overnight support available.",
    icon: Home,
    pros: ["24/7 support access", "Structured environment", "Safety and security"],
    considerations: ["Less privacy", "Shared routines", "Group dynamics"],
    suitability: "People who need regular support and prefer structured living"
  },
  {
    title: "Family Home",
    description: "Continue living with family while receiving SIL support for independence skills.",
    icon: Heart,
    pros: ["Familiar environment", "Family support", "Gradual transition"],
    considerations: ["Family dynamics", "Boundary setting", "Transition planning"],
    suitability: "People transitioning to independence or preferring family support"
  }
]

// Comprehensive funding information
const fundingDetails = [
  {
    title: "Core Support Budget",
    description: "SIL funding comes from your Core Support budget in your NDIS plan.",
    icon: DollarSign,
    details: "Covers assistance with daily living activities and household tasks based on your assessed needs.",
    amount: "Varies by individual needs"
  },
  {
    title: "Hourly vs Daily Rates",
    description: "Different funding models depending on your support intensity needs.",
    icon: Clock3,
    details: "Hourly rates for flexible support or daily rates for higher intensity, regular support needs.",
    amount: "Set by NDIS pricing"
  },
  {
    title: "Shared vs Individual",
    description: "Costs can be shared with other participants or funded individually.",
    icon: Users2,
    details: "Shared arrangements reduce individual costs but require compatible participants.",
    amount: "Reduced cost per person"
  },
  {
    title: "Additional Supports",
    description: "Other NDIS budgets can complement your SIL funding.",
    icon: Plus,
    details: "Capacity Building, Capital Supports, and Core Support can work together for comprehensive support.",
    amount: "Multiple budget sources"
  }
]

// Choosing a provider criteria
const providerSelectionCriteria = [
  {
    title: "NDIS Registration",
    description: "Ensure the provider is registered with the NDIS Quality and Safeguards Commission.",
    icon: ShieldCheck,
    importance: "Essential"
  },
  {
    title: "Values Alignment",
    description: "Choose providers whose values and approach align with your beliefs and goals.",
    icon: Heart,
    importance: "Very Important"
  },
  {
    title: "Staff Qualifications",
    description: "Check staff training, qualifications, and experience in disability support.",
    icon: Award,
    importance: "Important"
  },
  {
    title: "Location & Availability",
    description: "Consider their service area and availability to provide support when you need it.",
    icon: MapPin,
    importance: "Practical"
  },
  {
    title: "Participant Feedback",
    description: "Research reviews and feedback from current and former participants.",
    icon: Star,
    importance: "Valuable"
  },
  {
    title: "Service Flexibility",
    description: "Ability to adapt support as your needs change over time.",
    icon: Zap,
    importance: "Long-term"
  }
]

// Rights and responsibilities
const participantRights = [
  {
    title: "Choice and Control",
    description: "You have the right to make decisions about your support and how it's delivered.",
    icon: UserCheck
  },
  {
    title: "Dignity and Respect",
    description: "All support must be provided with dignity, respect, and cultural sensitivity.",
    icon: Heart
  },
  {
    title: "Privacy and Confidentiality",
    description: "Your personal information and privacy must be protected at all times.",
    icon: Shield
  },
  {
    title: "Safe and Quality Support",
    description: "You have the right to safe, quality support that meets professional standards.",
    icon: ShieldCheck
  },
  {
    title: "Freedom from Abuse",
    description: "You have the right to be free from all forms of abuse, neglect, and exploitation.",
    icon: AlertCircle
  },
  {
    title: "Complaints and Advocacy",
    description: "You can make complaints and access advocacy services when needed.",
    icon: MessageSquare
  }
]

// Myths vs Facts
const mythsAndFacts = [
  {
    myth: "SIL means you can't live independently",
    fact: "SIL actually supports your independence by providing assistance only where you need it.",
    icon: UserCheck
  },
  {
    myth: "You have to live with other people",
    fact: "You can choose to live alone, with others, or with family - it's your choice.",
    icon: Home
  },
  {
    myth: "SIL is only for people with high support needs",
    fact: "SIL supports people with varying needs - from minimal assistance to more intensive support.",
    icon: Users
  },
  {
    myth: "You can't change providers once you start",
    fact: "You have the right to change providers if your current one isn't meeting your needs.",
    icon: ArrowRight
  },
  {
    myth: "SIL funding is limited and hard to get",
    fact: "If you meet the criteria and it's in your plan, SIL funding is your entitlement.",
    icon: DollarSign
  },
  {
    myth: "Staff will control your daily routine",
    fact: "You maintain control of your routine - staff support you according to your preferences.",
    icon: Clock
  }
]

// FAQ Data
const faqData = [
  {
    question: "How do I know if I'm eligible for SIL?",
    answer: "You're eligible if you're an NDIS participant who needs assistance with daily living activities but wants to live independently. During your NDIS planning meeting, assessors will evaluate your functional capacity and determine if SIL is appropriate for your goals and needs."
  },
  {
    question: "What's the difference between SIL and SDA?",
    answer: "SIL (Supported Independent Living) is the support services you receive, while SDA (Specialist Disability Accommodation) is the physical housing. You can have SIL without SDA, but if you need specialized housing features, you might need both."
  },
  {
    question: "Can I live with my partner/family and still receive SIL?",
    answer: "Yes, you can receive SIL while living with family or a partner. The support focuses on building your independence skills and assisting with tasks that your family cannot reasonably provide."
  },
  {
    question: "How much does SIL cost?",
    answer: "SIL costs vary based on your individual needs and are covered by your NDIS plan. The NDIS sets standard pricing, and costs can be reduced if you share support with other participants in group settings."
  },
  {
    question: "Can I change my SIL provider?",
    answer: "Yes, you have the right to change providers. You should give reasonable notice and ensure a smooth transition. It's important to find a provider whose values and approach align with your needs and goals."
  },
  {
    question: "What happens if my needs change?",
    answer: "Your SIL support can be adjusted through plan reviews. If your needs increase or decrease, discuss this with your provider and NDIS planner to modify your support levels accordingly."
  },
  {
    question: "Do I need to use all my SIL funding?",
    answer: "You're not required to use all your funding, but it's there to support your independence goals. Work with your provider to ensure you're getting the right level of support for your needs."
  },
  {
    question: "Can I travel or go on holidays with SIL?",
    answer: "Yes, many SIL providers can arrange support for travel and holidays. This might require additional planning and could involve STA (Short Term Accommodation) funding for overnight trips."
  },
  {
    question: "What qualifications should SIL staff have?",
    answer: "SIL staff should have relevant qualifications in disability support, first aid training, and ongoing professional development. They should also receive training specific to your needs and support goals."
  },
  {
    question: "How do I transition from family care to SIL?",
    answer: "Transition planning is crucial. Start with gradual increases in independence, involve family in planning, and ensure your SIL provider understands your background and support needs. This process can take time and should be done at your pace."
  }
]

export default function AboutSILPage() {
  return (
    <>
      <PageHero
        title="Complete Guide to Supported Independent Living (SIL)"
        description="Everything you need to know about SIL - from understanding what it is to accessing support. Comprehensive, educational information for NDIS participants and their families."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About SIL", href: "/learn/about-sil" }
        ]}
        heroImage={{
          src: "/header/page-header-9.webp",
          alt: "Person with disability cooking independently in accessible kitchen with support worker nearby"
        }}
        ctaText="View SIL Services"
        ctaHref="/supported-accommodations/sil"
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

      {/* What is SIL Section */}
      <section id="what-is-sil" className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="What is SIL">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Understanding SIL
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What is Supported Independent Living?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Supported Independent Living (SIL) is an NDIS support category that provides assistance with daily living activities 
                to help you live as independently as possible in your chosen home environment.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    SIL is designed around the principle that you maintain choice and control over your life while receiving 
                    the support you need to achieve your goals. It's not about having things done for you, but rather having 
                    support to do things yourself or to build the skills you need for greater independence.
                  </p>
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    The support can range from a few hours a week to 24/7 assistance, depending on your individual needs 
                    and goals. What makes SIL unique is its focus on building your capacity and independence over time, 
                    rather than creating dependency.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <UserCheck className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Person-Centered Approach</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Support is tailored to your individual goals, preferences, and culture</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Capacity Building Focus</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Emphasis on developing skills and independence over time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Home className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Home-Based Support</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Support provided in your own home or chosen living environment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/house-image/6.webp"
                    alt="Person with disability in modern accessible kitchen receiving cooking instruction from support worker"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-lg border max-w-xs">
                  <p className="text-[hsl(var(--body))] text-sm">
                    <strong className="text-[hsl(var(--heading))]">Did you know?</strong> SIL supports over 35,000 
                    NDIS participants across Australia to live independently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIL Comparison Section */}
      <section id="sil-comparison" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="SIL vs other support types">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Comparison Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                SIL vs Other NDIS Support Types
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Understanding the differences between SIL and other NDIS support types helps you make informed decisions about your support needs.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-[hsl(var(--pure-white))] rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b border-[hsl(var(--light-orange))]">
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Support Type</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Purpose</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Duration</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Living Situation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[hsl(var(--light-orange))]/30">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">SIL</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Daily living support in your home</td>
                    <td className="p-4 text-[hsl(var(--body))]">Long-term/ongoing</td>
                    <td className="p-4 text-[hsl(var(--body))]">Your chosen home</td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--light-orange))]/30">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">SDA</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Specialized housing with accessibility features</td>
                    <td className="p-4 text-[hsl(var(--body))]">Long-term</td>
                    <td className="p-4 text-[hsl(var(--body))]">Purpose-built housing</td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--light-orange))]/30">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">STA</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Short-term respite accommodation</td>
                    <td className="p-4 text-[hsl(var(--body))]">Days to weeks</td>
                    <td className="p-4 text-[hsl(var(--body))]">Temporary accommodation</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">MTA</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Medium-term housing during transitions</td>
                    <td className="p-4 text-[hsl(var(--body))]">Weeks to months</td>
                    <td className="p-4 text-[hsl(var(--body))]">Transitional housing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SIL eligibility">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Eligibility Requirements
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Who is Eligible for SIL?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                SIL eligibility is based on your functional capacity, support needs, and independence goals as assessed by the NDIS.
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
                Assessment Process
              </h3>
              <div className="prose prose-sm max-w-none text-[hsl(var(--body))]">
                <p>
                  The NDIS uses functional assessments to determine your SIL eligibility. This involves evaluating your ability to 
                  perform daily living activities independently and identifying where support would help you achieve your goals.
                </p>
                <p>
                  Assessments consider your current abilities, potential for skill development, support network, and independence goals. 
                  The process ensures that SIL funding is appropriate for your situation and will help you achieve greater independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Benefits of SIL">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Key Benefits
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How SIL Can Transform Your Life
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                SIL offers numerous benefits that support your independence goals while ensuring you have the assistance you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {silBenefits.map((benefit, index) => (
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

      {/* Support Types Section */}
      <section id="support-types" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Types of SIL support">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Support Categories
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Comprehensive SIL Support Types
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                SIL covers a wide range of support areas to help you live independently and achieve your personal goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {supportCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <category.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-[hsl(var(--heading))]">{category.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs bg-[hsl(var(--light-orange))] text-[hsl(var(--body))] mt-1">
                          {category.timeframe}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-xs font-medium text-[hsl(var(--heading))] uppercase tracking-wide">
                        Support Examples:
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        {category.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Living Arrangements Section */}
      <section id="living-arrangements" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="SIL living arrangements">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Living Options
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                SIL Living Arrangement Options
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Choose the living arrangement that best suits your preferences, support needs, and independence goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {livingArrangements.map((arrangement, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <arrangement.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <CardTitle className="text-xl text-[hsl(var(--heading))]">{arrangement.title}</CardTitle>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">{arrangement.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2 flex items-center gap-1">
                        <Check className="w-4 h-4 text-green-600" />
                        Benefits
                      </h4>
                      <ul className="space-y-1">
                        {arrangement.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="text-[hsl(var(--body))] text-sm flex items-center gap-2">
                            <div className="w-1 h-1 bg-[hsl(var(--primary))] rounded-full"></div>
                            {pro}
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
                        {arrangement.considerations.map((consideration, considerationIndex) => (
                          <li key={considerationIndex} className="text-[hsl(var(--body))] text-sm flex items-center gap-2">
                            <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>Best for:</strong> {arrangement.suitability}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="How SIL works">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Process Overview
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How Does SIL Work? Step-by-Step Guide
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Understanding the SIL process from initial assessment to ongoing support helps you navigate your journey confidently.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-[hsl(var(--pure-white))] p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] text-lg mb-2">NDIS Planning & Assessment</h3>
                      <p className="text-[hsl(var(--body))] text-sm mb-3">
                        During your NDIS planning meeting, assessors evaluate your functional capacity and determine if SIL 
                        is appropriate for your goals and support needs.
                      </p>
                      <div className="bg-[hsl(var(--light-orange))] p-3 rounded text-xs text-[hsl(var(--body))]">
                        <strong>Timeline:</strong> Plan reviews occur annually or when circumstances change significantly.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[hsl(var(--pure-white))] p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] text-lg mb-2">Provider Selection</h3>
                      <p className="text-[hsl(var(--body))] text-sm mb-3">
                        Research and choose a registered SIL provider that aligns with your values, location preferences, 
                        and support approach.
                      </p>
                      <div className="bg-[hsl(var(--light-orange))] p-3 rounded text-xs text-[hsl(var(--body))]">
                        <strong>Tip:</strong> Interview multiple providers and ask for references from current participants.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[hsl(var(--pure-white))] p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] text-lg mb-2">Support Plan Development</h3>
                      <p className="text-[hsl(var(--body))] text-sm mb-3">
                        Work with your provider to create a detailed support plan outlining your goals, preferences, 
                        daily routines, and specific support requirements.
                      </p>
                      <div className="bg-[hsl(var(--light-orange))] p-3 rounded text-xs text-[hsl(var(--body))]">
                        <strong>Key Elements:</strong> Daily schedules, emergency procedures, goal milestones, and review dates.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[hsl(var(--pure-white))] p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] text-lg mb-2">Support Delivery & Review</h3>
                      <p className="text-[hsl(var(--body))] text-sm mb-3">
                        Begin receiving support according to your plan, with regular reviews to ensure it continues 
                        to meet your changing needs and goals.
                      </p>
                      <div className="bg-[hsl(var(--light-orange))] p-3 rounded text-xs text-[hsl(var(--body))]">
                        <strong>Ongoing:</strong> Monthly progress reviews and quarterly plan adjustments as needed.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/house-image/7.webp"
                    alt="NDIS participant and support worker reviewing support plan together"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <Card className="bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
                      Getting Started Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Prepare a list of your goals and preferences before meeting with providers</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Ask about staff qualifications, training, and experience</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Understand your funding allocation and how it will be used</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Ensure emergency procedures and contact details are clear</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section id="funding" className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="SIL funding information">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Funding Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Understanding SIL Funding & Costs
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Learn how SIL funding works, what it covers, and how to make the most of your NDIS budget.
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
                          {detail.amount}
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
              <h3 className="font-semibold text-[hsl(var(--heading))] mb-4 text-xl">Funding Breakdown Example</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-[hsl(var(--lighter-orange))] rounded">
                  <PieChart className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Low Support</h4>
                  <p className="text-[hsl(var(--body))] text-sm">2-5 hours/week</p>
                  <p className="text-[hsl(var(--body))] text-xs">For skill building and occasional assistance</p>
                </div>
                <div className="text-center p-4 bg-[hsl(var(--lighter-orange))] rounded">
                  <PieChart className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Medium Support</h4>
                  <p className="text-[hsl(var(--body))] text-sm">10-20 hours/week</p>
                  <p className="text-[hsl(var(--body))] text-xs">For regular assistance with daily tasks</p>
                </div>
                <div className="text-center p-4 bg-[hsl(var(--lighter-orange))] rounded">
                  <PieChart className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-1">High Support</h4>
                  <p className="text-[hsl(var(--body))] text-sm">24/7 availability</p>
                  <p className="text-[hsl(var(--body))] text-xs">For complex needs requiring ongoing support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing Provider Section */}
      <section id="choosing-provider" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Choosing SIL provider">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Provider Selection
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How to Choose the Right SIL Provider
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Selecting the right provider is crucial for your success. Consider these key factors when making your decision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {providerSelectionCriteria.map((criteria, index) => (
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
                  Questions to Ask Potential Providers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-[hsl(var(--heading))]">Service Delivery</h4>
                    <ul className="space-y-1 text-sm text-[hsl(var(--body))]">
                      <li>• How do you match staff to participants?</li>
                      <li>• What happens if my regular staff member is unavailable?</li>
                      <li>• How do you handle emergency situations?</li>
                      <li>• What training do your staff receive?</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-[hsl(var(--heading))]">Planning & Reviews</h4>
                    <ul className="space-y-1 text-sm text-[hsl(var(--body))]">
                      <li>• How often do you review support plans?</li>
                      <li>• How do you measure progress toward goals?</li>
                      <li>• What happens if I want to change my support?</li>
                      <li>• How do you handle complaints or feedback?</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section id="planning" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Planning your SIL support">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Support Planning
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Planning Your SIL Support Journey
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Effective planning ensures your SIL support aligns with your goals and helps you achieve greater independence.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                    <Target className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Setting SMART Goals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-5 gap-4">
                    <div className="text-center p-3 bg-[hsl(var(--light-orange))] rounded">
                      <strong className="text-[hsl(var(--heading))] block">Specific</strong>
                      <p className="text-[hsl(var(--body))] text-xs">Clear and detailed goals</p>
                    </div>
                    <div className="text-center p-3 bg-[hsl(var(--light-orange))] rounded">
                      <strong className="text-[hsl(var(--heading))] block">Measurable</strong>
                      <p className="text-[hsl(var(--body))] text-xs">Track progress objectively</p>
                    </div>
                    <div className="text-center p-3 bg-[hsl(var(--light-orange))] rounded">
                      <strong className="text-[hsl(var(--heading))] block">Achievable</strong>
                      <p className="text-[hsl(var(--body))] text-xs">Realistic and attainable</p>
                    </div>
                    <div className="text-center p-3 bg-[hsl(var(--light-orange))] rounded">
                      <strong className="text-[hsl(var(--heading))] block">Relevant</strong>
                      <p className="text-[hsl(var(--body))] text-xs">Meaningful to your life</p>
                    </div>
                    <div className="text-center p-3 bg-[hsl(var(--light-orange))] rounded">
                      <strong className="text-[hsl(var(--heading))] block">Time-bound</strong>
                      <p className="text-[hsl(var(--body))] text-xs">Set realistic deadlines</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[hsl(var(--primary))]" />
                      Example Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-[hsl(var(--light-orange))] rounded">
                        <p className="text-[hsl(var(--body))] text-sm">
                          <strong>"Learn to use public transport independently within 6 months"</strong> - 
                          with weekly practice sessions and route planning support.
                        </p>
                      </div>
                      <div className="p-3 bg-[hsl(var(--light-orange))] rounded">
                        <p className="text-[hsl(var(--body))] text-sm">
                          <strong>"Prepare 3 healthy meals independently each week"</strong> - 
                          with cooking skills training and meal planning assistance.
                        </p>
                      </div>
                      <div className="p-3 bg-[hsl(var(--light-orange))] rounded">
                        <p className="text-[hsl(var(--body))] text-sm">
                          <strong>"Maintain employment with minimal support"</strong> - 
                          focusing on workplace communication and routine management.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[hsl(var(--primary))]" />
                      Review Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-xs font-medium">W</div>
                          <div>
                          <p className="text-[hsl(var(--heading))] font-medium">Weekly Check-ins</p>
                          <p className="text-[hsl(var(--body))] text-xs">Daily support adjustments and immediate concerns</p>
                          </div>
                          </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-xs font-medium">M</div>
                        <div>
                          <p className="text-[hsl(var(--heading))] font-medium">Monthly Reviews</p>
                          <p className="text-[hsl(var(--body))] text-xs">Goal progress and support plan effectiveness</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center text-xs font-medium">Q</div>
                        <div>
                          <p className="text-[hsl(var(--heading))] font-medium">Quarterly Assessments</p>
                          <p className="text-[hsl(var(--body))] text-xs">Comprehensive plan review and goal setting</p>
                        </div>
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
                Your Rights as an SIL Participant
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Understanding your rights ensures you receive quality support and can advocate for yourself when needed.
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
                    <p className="text-[hsl(var(--body))] text-sm mb-2">For complaints and quality concerns:</p>
                    <p className="text-[hsl(var(--body))] text-sm">Phone: 1800 035 544</p>
                    <p className="text-[hsl(var(--body))] text-sm">Email: complaints@ndiscommission.gov.au</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Disability Advocacy Services</h4>
                    <p className="text-[hsl(var(--body))] text-sm mb-2">For independent advocacy support:</p>
                    <p className="text-[hsl(var(--body))] text-sm">National Disability Advocacy Program</p>
                    <p className="text-[hsl(var(--body))] text-sm">Visit: www.disabilityadvocacyfinder.dss.gov.au</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Myths vs Facts Section */}
      <section id="myths-facts" className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="SIL myths vs facts">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Myth Busting
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                SIL Myths vs Facts
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Let's clear up common misconceptions about Supported Independent Living to help you make informed decisions.
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
      <section id="faq" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="SIL frequently asked questions">
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
                Find answers to the most common questions about Supported Independent Living.
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
                Explore other NDIS support types that might complement your SIL support or provide alternative options.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Specialist Disability Accommodation (SDA)"
                description="Purpose-built housing with accessibility features and design elements for people with extreme functional impairment."
                icon={Building}
                href="/learn/about-sda"
              />
              <ServiceCard
                title="Short Term Accommodation (STA)"
                description="Respite and short-term accommodation options for participants and their families and carers."
                icon={Calendar}
                href="/learn/about-sta"
              />
              <ServiceCard
                title="Medium Term Accommodation (MTA)"
                description="Flexible medium-term housing solutions for participants during life transitions."
                icon={Clock}
                href="/learn/about-mta"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore SIL Options?"
        description="If you think SIL might be right for you, or if you want to learn more about accessing support, we're here to help you understand your options."
        primaryButtonText="Get Information"
        primaryButtonLink="/contact"
        secondaryButtonText="View SIL Services"
        secondaryButtonLink="/supported-accommodations/sil"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="NDIS participant living independently with support"
        footerText="Looking for accommodation options? Explore our"
        footerLinkText="SIL Vacancies"
        footerLinkHref="/properties/sil-vacancies"
      />
    </>
  )
} 