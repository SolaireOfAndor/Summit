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
  Layers,
  User,
  Users2,
  Plane,
  Coffee,
  Sparkles,
  TreePine,
  Navigation,
  Sunset,
  Moon,
  RefreshCw,
  PhoneCall,
  FileText,
  Map,
  Luggage,
  Camera,
  Gift,
  BatteryLow,
  Battery,
  ClockIcon,
  CalendarDays,
  Timer,
  Eye
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Guide to Short Term Accommodation (STA) | What is STA?",
  description: "Comprehensive guide to Short Term Accommodation (STA) - understand respite care, emergency accommodation, planned stays, funding, and how STA works. Expert information for NDIS participants and families.",
  keywords: "STA, Short Term Accommodation, NDIS STA, respite care, emergency accommodation, temporary housing, NDIS respite, disability accommodation, family respite, carer support",
  openGraph: {
    title: "Complete Guide to Short Term Accommodation (STA)",
    description: "Everything you need to know about STA - from respite options to emergency accommodation and planned stays. Comprehensive educational resource.",
    type: "article",
    images: [
      {
        url: "/header/page-header-7.webp",
        width: 1200,
        height: 630,
        alt: "Comfortable STA accommodation room with accessible features for short-term stays"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide to Short Term Accommodation (STA)",
    description: "Comprehensive educational guide covering all aspects of STA respite and temporary accommodation",
  },
  alternates: {
    canonical: "/learn/about-sta"
  }
}

// Table of Contents Data
const tableOfContents = [
  { title: "What is STA?", href: "#what-is-sta" },
  { title: "STA vs Other Support Types", href: "#sta-comparison" },
  { title: "Who Can Access STA?", href: "#eligibility" },
  { title: "Types of STA", href: "#sta-types" },
  { title: "STA Accommodation Options", href: "#accommodation-options" },
  { title: "How STA Works", href: "#how-it-works" },
  { title: "Funding & Costs", href: "#funding" },
  { title: "Planning Your Stay", href: "#planning" },
  { title: "Booking STA", href: "#booking" },
  { title: "Your Rights", href: "#rights" },
  { title: "Myths vs Facts", href: "#myths-facts" },
  { title: "Frequently Asked Questions", href: "#faq" }
]

// STA Benefits
const staBenefits = [
  {
    title: "Respite for Families",
    description: "Provides essential breaks for family members and carers to rest and recharge.",
    icon: HeartHandshake,
    category: "Family Support",
    details: "Enables carers to take holidays, attend to personal needs, or simply have time to rest without worry."
  },
  {
    title: "Emergency Accommodation",
    description: "Available when your usual accommodation becomes unavailable due to emergencies.",
    icon: Shield,
    category: "Emergency Support",
    details: "Covers situations like home repairs, family emergencies, or unexpected circumstances requiring temporary housing."
  },
  {
    title: "Try Before You Commit",
    description: "Experience different accommodation types before making long-term housing decisions.",
    icon: Eye,
    category: "Exploration",
    details: "Test different SDA properties, locations, or living arrangements to inform your future housing choices."
  },
  {
    title: "Skill Development",
    description: "Opportunity to practice independence skills in a supportive environment.",
    icon: GraduationCap,
    category: "Capacity Building",
    details: "Build confidence and skills in daily living, social interaction, and independence in a safe setting."
  },
  {
    title: "Social Opportunities",
    description: "Meet new people and participate in social activities and programs.",
    icon: Users,
    category: "Social Connection",
    details: "Access to group activities, community outings, and opportunities to make new friendships."
  },
  {
    title: "Professional Support",
    description: "Access to trained staff and support services during your stay.",
    icon: Award,
    category: "Quality Care",
    details: "24/7 support availability, trained disability support workers, and access to health and therapy services."
  }
]

// Eligibility requirements for STA
const eligibilityRequirements = [
  {
    title: "NDIS Participant",
    description: "You must be an eligible NDIS participant with STA funding in your plan.",
    icon: CheckCircle2,
    details: "STA funding is allocated in your Core Support budget based on assessed need for respite or temporary accommodation."
  },
  {
    title: "Reasonable & Necessary",
    description: "The STA must be reasonable and necessary to achieve your NDIS goals.",
    icon: Target,
    details: "Must support your independence, social participation, or provide essential respite for family carers."
  },
  {
    title: "Temporary Need",
    description: "STA is for temporary accommodation needs, not permanent housing solutions.",
    icon: Clock,
    details: "Designed for stays ranging from one night to several months, depending on your circumstances and plan."
  },
  {
    title: "Support Requirements",
    description: "You may need some level of support during your stay, or be able to stay independently.",
    icon: Handshake,
    details: "STA can provide various support levels from minimal assistance to 24/7 care, depending on your needs."
  }
]

// Types of STA
const staTypes = [
  {
    title: "Respite Care",
    description: "Planned breaks to give families and carers time to rest, work, or attend to other responsibilities.",
    icon: Sunset,
    duration: "1 night to 2 weeks",
    features: [
      "Regular scheduled breaks",
      "Family carer respite",
      "Planned in advance",
      "Recurring arrangements possible"
    ],
    suitability: "Families needing regular breaks from caring responsibilities"
  },
  {
    title: "Emergency Accommodation",
    description: "Immediate temporary housing when your usual accommodation becomes unavailable.",
    icon: AlertCircle,
    duration: "1 night to several weeks",
    features: [
      "Available at short notice",
      "Crisis response",
      "Flexible duration",
      "Emergency support services"
    ],
    suitability: "Unexpected situations requiring immediate alternative accommodation"
  },
  {
    title: "Planned Short Stays",
    description: "Temporary accommodation for specific purposes like medical treatment or family events.",
    icon: Calendar,
    duration: "Few days to months",
    features: [
      "Purpose-specific stays",
      "Medical appointment accommodation",
      "Family event attendance",
      "Planned life transitions"
    ],
    suitability: "Specific circumstances requiring temporary accommodation away from home"
  },
  {
    title: "Trial Accommodation",
    description: "Opportunity to experience different accommodation types before making permanent decisions.",
    icon: Eye,
    duration: "Few days to weeks",
    features: [
      "Experience different housing",
      "Test support arrangements",
      "Assess compatibility",
      "Inform future decisions"
    ],
    suitability: "People considering permanent accommodation changes"
  },
  {
    title: "Holiday & Recreation",
    description: "Supported holiday and recreational experiences with or without family.",
    icon: Plane,
    duration: "Weekend to 2 weeks",
    features: [
      "Tourism and recreation",
      "Group or individual holidays",
      "Accessible destinations",
      "Recreational activities"
    ],
    suitability: "People wanting holiday experiences with appropriate support"
  },
  {
    title: "Transitional Support",
    description: "Bridge accommodation during transitions between permanent housing arrangements.",
    icon: RefreshCw,
    duration: "Weeks to months",
    features: [
      "Housing transition support",
      "Time to find permanent housing",
      "Adjustment support",
      "Planning assistance"
    ],
    suitability: "People transitioning between different living arrangements"
  }
]

// STA Accommodation Options
const accommodationOptions = [
  {
    title: "Purpose-Built STA Facilities",
    description: "Dedicated facilities designed specifically for short-term accommodation with disability support.",
    icon: Building2,
    capacity: "Individual to group",
    features: ["Accessible design", "On-site support", "Shared facilities", "Activity programs"],
    considerations: ["Limited privacy", "Shared spaces", "Structured environment"]
  },
  {
    title: "Host Family Arrangements",
    description: "Stay with trained and approved families who provide accommodation and support.",
    icon: Home,
    capacity: "Individual stays",
    features: ["Home environment", "Family atmosphere", "Personal attention", "Community integration"],
    considerations: ["Family dynamics", "House rules", "Less professional support"]
  },
  {
    title: "Supported Independent Units",
    description: "Self-contained units with support available as needed during your stay.",
    icon: Building,
    capacity: "1-2 people",
    features: ["Private accommodation", "Independent living", "Support on-call", "Own space"],
    considerations: ["Higher cost", "Support availability", "Less social interaction"]
  },
  {
    title: "Group Accommodation",
    description: "Shared accommodation with other participants and 24/7 support available.",
    icon: Users2,
    capacity: "3-8 people",
    features: ["Social environment", "Shared activities", "24/7 support", "Cost-effective"],
    considerations: ["Shared spaces", "Group dynamics", "Less privacy"]
  }
]

// How STA Works - Process Steps
const staProcess = [
  {
    step: "1",
    title: "Plan Development",
    description: "Include STA funding in your NDIS plan during planning meetings based on your respite and accommodation needs.",
    icon: FileText,
    details: "Discuss your need for respite, emergency accommodation, or trial stays with your NDIS planner."
  },
  {
    step: "2", 
    title: "Find STA Providers",
    description: "Research and identify STA providers in your area or preferred locations that meet your needs.",
    icon: Map,
    details: "Use NDIS provider finder, ask for recommendations, and contact providers to check availability and services."
  },
  {
    step: "3",
    title: "Book Your Stay",
    description: "Contact providers to check availability and book your STA accommodation for your required dates.",
    icon: Calendar,
    details: "Provide notice period as required, confirm support needs, and arrange any special requirements."
  },
  {
    step: "4",
    title: "Prepare & Stay",
    description: "Prepare for your stay and enjoy your STA experience with appropriate support and activities.",
    icon: Luggage,
    details: "Pack essentials, confirm arrangements, and make the most of your accommodation and support services."
  }
]

// Funding Information
const fundingDetails = [
  {
    title: "Core Support Budget",
    description: "STA funding comes from your Core Support budget, specifically from the 'Assistance with Daily Living' category.",
    icon: DollarSign,
    details: "Covers accommodation costs, support services, meals, and activities during your stay.",
    pricing: "Daily rates vary by provider"
  },
  {
    title: "Flexible Usage",
    description: "Use your STA funding flexibly for different types of short-term accommodation needs throughout the year.",
    icon: Zap,
    details: "Can be used for respite, emergency accommodation, holidays, or trial stays as needed.",
    pricing: "Based on actual usage"
  },
  {
    title: "Support Level Pricing",
    description: "Costs vary depending on the level of support you require during your stay.",
    icon: Layers,
    details: "Higher support needs result in higher daily rates, while independent stays cost less.",
    pricing: "Tiered by support intensity"
  },
  {
    title: "Inclusions & Extras",
    description: "Most STA packages include accommodation, meals, and basic support, with optional extras available.",
    icon: Plus,
    details: "Extras like outings, specialized activities, or transport may incur additional costs within your budget.",
    pricing: "Package rates plus extras"
  }
]

// Planning criteria
const planningCriteria = [
  {
    title: "Advance Booking",
    description: "Book STA accommodation well in advance, especially for popular times and locations.",
    icon: Calendar,
    timeframe: "2-8 weeks ahead",
    importance: "Essential"
  },
  {
    title: "Support Needs Assessment",
    description: "Clearly communicate your support needs, medical requirements, and preferences to providers.",
    icon: Stethoscope,
    timeframe: "Before booking",
    importance: "Critical"
  },
  {
    title: "Location Considerations",
    description: "Choose locations that match your interests, accessibility needs, and transport requirements.",
    icon: MapPin,
    timeframe: "Planning stage",
    importance: "Important"
  },
  {
    title: "Emergency Contacts",
    description: "Ensure providers have current emergency contacts and medical information.",
    icon: PhoneCall,
    timeframe: "Before arrival",
    importance: "Essential"
  },
  {
    title: "Personal Items",
    description: "Prepare a packing list including medications, personal care items, and comfort objects.",
    icon: Luggage,
    timeframe: "Before departure",
    importance: "Practical"
  },
  {
    title: "Goal Setting",
    description: "Set goals for your stay whether for respite, skill development, or social participation.",
    icon: Target,
    timeframe: "Planning stage",
    importance: "Beneficial"
  }
]

// Participant Rights
const participantRights = [
  {
    title: "Quality Accommodation",
    description: "You have the right to safe, clean, and appropriate accommodation that meets your needs.",
    icon: Star
  },
  {
    title: "Dignity & Respect",
    description: "All support and care must be provided with dignity, respect, and cultural sensitivity.",
    icon: Heart
  },
  {
    title: "Choice & Control",
    description: "You maintain choice and control over your daily activities and how support is provided.",
    icon: UserCheck
  },
  {
    title: "Privacy & Confidentiality",
    description: "Your personal information and privacy must be protected during your stay.",
    icon: Shield
  },
  {
    title: "Safety & Wellbeing",
    description: "You have the right to feel safe and have your physical and emotional wellbeing protected.",
    icon: ShieldCheck
  },
  {
    title: "Complaints Process",
    description: "You can make complaints about your accommodation or support and have them addressed promptly.",
    icon: MessageSquare
  }
]

// Myths vs Facts
const mythsAndFacts = [
  {
    myth: "STA is only for people with high support needs",
    fact: "STA is available for NDIS participants with various support needs, from independent stays to 24/7 care.",
    icon: Users
  },
  {
    myth: "You can only use STA for emergencies",
    fact: "STA can be used for respite, holidays, trial accommodation, planned stays, and emergencies.",
    icon: Calendar
  },
  {
    myth: "STA accommodation is institutional and clinical",
    fact: "Modern STA offers various options from home-like environments to holiday-style accommodation.",
    icon: Home
  },
  {
    myth: "You have to stay with other disabled people",
    fact: "STA includes individual accommodation options where you can stay alone or with chosen companions.",
    icon: User
  },
  {
    myth: "STA funding is very limited in NDIS plans",
    fact: "STA funding is allocated based on your assessed needs and can be substantial if respite is required.",
    icon: DollarSign
  },
  {
    myth: "You can't choose your STA provider",
    fact: "You have complete choice over which STA provider you use, subject to availability and your plan.",
    icon: CheckCircle2
  }
]

// FAQ Data
const faqData = [
  {
    question: "How much STA funding do I get in my NDIS plan?",
    answer: "STA funding varies based on your individual needs assessment. It's allocated in your Core Support budget under 'Assistance with Daily Living.' The amount depends on factors like your need for family respite, emergency accommodation risk, and goals for independence or social participation."
  },
  {
    question: "How far in advance do I need to book STA?",
    answer: "Booking timeframes vary by provider and demand. For planned respite or holiday accommodation, book 2-8 weeks in advance. Emergency accommodation should be available within 24-48 hours. Popular destinations and peak times (school holidays, Christmas) require earlier booking."
  },
  {
    question: "Can I use STA for holidays and recreational activities?",
    answer: "Yes, STA can be used for supported holidays and recreational experiences. This might include accessible tourism, group holiday programs, or individual holiday accommodation with support. The stay must be reasonable and necessary for your NDIS goals."
  },
  {
    question: "What happens if I need emergency accommodation?",
    answer: "Contact your STA provider or NDIS support coordinator immediately. Emergency STA should be available within 24-48 hours. Providers have processes for urgent placements, and your NDIS plan should include provisions for emergency accommodation if needed."
  },
  {
    question: "Can family members visit me during my STA stay?",
    answer: "Yes, most STA providers welcome family visits and may have specific visiting hours or arrangements. Some providers also offer family accommodation options where relatives can stay nearby or participate in activities during your stay."
  },
  {
    question: "What if I don't like my STA accommodation?",
    answer: "Speak with the provider immediately about your concerns. If issues can't be resolved, you can leave early and contact other providers. For serious concerns, contact the NDIS Quality and Safeguards Commission. Always prioritize your safety and wellbeing."
  },
  {
    question: "Can I stay at the same STA provider regularly?",
    answer: "Yes, many participants develop ongoing relationships with preferred STA providers for regular respite. You can book regular stays (e.g., monthly weekends) with the same provider if it works well for you and your family."
  },
  {
    question: "What support is available during my STA stay?",
    answer: "Support varies by provider and your needs. It can include personal care assistance, meal support, transport to activities, 24/7 supervision, medication management, and social activities. Discuss your specific support needs when booking."
  },
  {
    question: "Can I use STA to trial potential permanent accommodation?",
    answer: "Absolutely. STA is an excellent way to experience different accommodation types, locations, or providers before making permanent housing decisions. This can help inform choices about SDA or SIL arrangements."
  },
  {
    question: "What should I pack for my STA stay?",
    answer: "Pack personal items, medications, comfort objects, appropriate clothing, and any assistive equipment you need. Most providers supply bedding, meals, and basic toiletries, but confirm what's included. Bring emergency contact information and any care plans or medical information."
  }
]

export default function AboutSTAPage() {
  return (
    <>
      <PageHero
        title="Complete Guide to Short Term Accommodation (STA)"
        description="Everything you need to know about STA - from respite care to emergency accommodation and holiday options. Comprehensive, educational information for NDIS participants and families."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About STA", href: "/learn/about-sta" }
        ]}
        heroImage={{
          src: "/header/page-header-7.webp",
          alt: "Comfortable and accessible STA accommodation room with modern amenities for short-term stays"
        }}
        ctaText="Find STA Options"
        ctaHref="/contact"
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

      {/* What is STA Section */}
      <section id="what-is-sta" className="relative py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="What is STA">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Understanding STA
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                What is Short Term Accommodation?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Short Term Accommodation (STA) provides temporary accommodation and support for NDIS participants 
                for various purposes including respite care, emergency housing, holidays, and trial accommodation experiences.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    STA is designed to provide flexible, temporary accommodation solutions that support both NDIS participants 
                    and their families. Whether you need respite care, emergency accommodation, or want to experience different 
                    living arrangements, STA offers safe, supportive environments with appropriate care and supervision.
                  </p>
                  <p className="text-[hsl(var(--body))] leading-relaxed">
                    Unlike permanent accommodation options, STA is specifically designed for short-term stays ranging from 
                    one night to several months. It provides an opportunity to access professional support, try new experiences, 
                    and give family carers essential breaks while ensuring continuity of care and support.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Clock className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Flexible Duration</h3>
                      <p className="text-[hsl(var(--body))] text-sm">From overnight stays to several months, depending on your needs and circumstances</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <HeartHandshake className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Family Respite</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Provides essential breaks for families and carers while ensuring continued support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[hsl(var(--pure-white))] rounded-lg border">
                    <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                      <Eye className="w-5 h-5 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[hsl(var(--heading))] mb-1">Trial Experiences</h3>
                      <p className="text-[hsl(var(--body))] text-sm">Opportunity to experience different accommodation types and support arrangements</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/house-image/3.webp"
                    alt="Comfortable STA accommodation with accessible bedroom and modern amenities for short-term stays"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-lg border max-w-xs">
                  <p className="text-[hsl(var(--body))] text-sm">
                    <strong className="text-[hsl(var(--heading))]">Did you know?</strong> Over 40,000 NDIS participants 
                    use STA services annually for respite, holidays, and emergency accommodation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STA Comparison Section */}
      <section id="sta-comparison" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="STA vs other support types">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Comparison Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                STA vs Other NDIS Support Types
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Understanding how STA differs from other NDIS support types helps clarify when and how to use STA services.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-[hsl(var(--pure-white))] rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b border-[hsl(var(--light-orange))]">
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Support Type</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Purpose</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Duration</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Primary Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[hsl(var(--light-orange))]/30">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">STA</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Temporary accommodation and respite</td>
                    <td className="p-4 text-[hsl(var(--body))]">1 night to several months</td>
                    <td className="p-4 text-[hsl(var(--body))]">Family respite and trial experiences</td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--light-orange))]/30">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">SDA</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Permanent specialized housing</td>
                    <td className="p-4 text-[hsl(var(--body))]">Long-term/permanent</td>
                    <td className="p-4 text-[hsl(var(--body))]">Independent living with accessibility</td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--light-orange))]/30">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">SIL</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Daily living support in your home</td>
                    <td className="p-4 text-[hsl(var(--body))]">Ongoing</td>
                    <td className="p-4 text-[hsl(var(--body))]">Independence with daily support</td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <strong className="text-[hsl(var(--heading))]">MTA</strong>
                      </div>
                    </td>
                    <td className="p-4 text-[hsl(var(--body))]">Medium-term transitional housing</td>
                    <td className="p-4 text-[hsl(var(--body))]">Weeks to months</td>
                    <td className="p-4 text-[hsl(var(--body))]">Housing transition support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="STA eligibility">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Eligibility Requirements
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Who Can Access STA?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                STA is available to NDIS participants who have a reasonable and necessary need for temporary accommodation and support services.
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
                Common Reasons for STA Access
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Family Circumstances</h4>
                  <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Carer illness or hospitalization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Family holidays or events
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Work or study commitments
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Family crisis or emergency
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Participant Needs</h4>
                  <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Trial accommodation experiences
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Holiday and recreation opportunities
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Skill development in supported environment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Social and community participation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Benefits of STA">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Key Benefits
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How STA Can Benefit You and Your Family
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                STA provides valuable benefits for both NDIS participants and their families, supporting wellbeing, independence, and quality of life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staBenefits.map((benefit, index) => (
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

      {/* Types of STA Section */}
      <section id="sta-types" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Types of STA">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                STA Types
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Different Types of STA Available
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                STA encompasses various types of temporary accommodation to meet different needs and circumstances.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {staTypes.map((type, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <type.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-[hsl(var(--heading))]">{type.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs bg-[hsl(var(--light-orange))] text-[hsl(var(--body))] mt-1">
                          {type.duration}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">{type.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Key Features:</h4>
                      <div className="grid gap-2">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>Best for:</strong> {type.suitability}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Options Section */}
      <section id="accommodation-options" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="STA accommodation options">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Accommodation Options
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Types of STA Accommodation Available
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                STA offers various accommodation settings to suit different preferences, support needs, and circumstances.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {accommodationOptions.map((option, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10 group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                        <option.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-[hsl(var(--heading))]">{option.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs bg-[hsl(var(--light-orange))] text-[hsl(var(--body))] mt-1">
                          {option.capacity}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">{option.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-2 flex items-center gap-1">
                        <Check className="w-4 h-4 text-green-600" />
                        Features
                      </h4>
                      <ul className="space-y-1">
                        {option.features.map((feature, featureIndex) => (
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
                        {option.considerations.map((consideration, considerationIndex) => (
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
      <section id="how-it-works" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="How STA works">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Process Overview
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How Does STA Work? Step-by-Step Guide
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Understanding the STA process from planning to booking and enjoying your stay.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                {staProcess.map((step, index) => (
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
                    src="/house-image/4.webp"
                    alt="NDIS participant enjoying recreational activity at STA accommodation with support worker"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <Card className="bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
                      STA Booking Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Book early for popular times like school holidays and summer periods</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Clearly communicate your support needs and any medical requirements</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Ask about activities, facilities, and what's included in the accommodation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                      <p className="text-[hsl(var(--body))] text-sm">Prepare emergency contacts and any care plans or medical information</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section id="funding" className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="STA funding information">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Funding Guide
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Understanding STA Funding & Costs
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Learn how STA funding works, what it covers, and how to manage your STA budget effectively.
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
                          {detail.pricing}
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
              <h3 className="font-semibold text-[hsl(var(--heading))] mb-4 text-xl">Typical STA Inclusions</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-[hsl(var(--lighter-orange))] rounded">
                  <Bed className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Accommodation</h4>
                  <p className="text-[hsl(var(--body))] text-sm">Bedroom, bathroom access</p>
                  <p className="text-[hsl(var(--body))] text-xs">Bedding and basic amenities</p>
                </div>
                <div className="text-center p-4 bg-[hsl(var(--lighter-orange))] rounded">
                  <Coffee className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Meals</h4>
                  <p className="text-[hsl(var(--body))] text-sm">All meals and snacks</p>
                  <p className="text-[hsl(var(--body))] text-xs">Special dietary requirements</p>
                </div>
                <div className="text-center p-4 bg-[hsl(var(--lighter-orange))] rounded">
                  <Users className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                  <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Support Services</h4>
                  <p className="text-[hsl(var(--body))] text-sm">Personal care and supervision</p>
                  <p className="text-[hsl(var(--body))] text-xs">Activities and social programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section id="planning" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Planning your STA stay">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Stay Planning
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Planning Your STA Stay
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Effective planning ensures your STA stay meets your needs and provides a positive experience for everyone involved.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {planningCriteria.map((criteria, index) => (
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
                        <p className="text-[hsl(var(--body))] text-sm mb-2">{criteria.description}</p>
                        <Badge variant="secondary" className="text-xs bg-[hsl(var(--light-orange))] text-[hsl(var(--body))]">
                          {criteria.timeframe}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-[hsl(var(--pure-white))]">
              <CardHeader>
                <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                  <Luggage className="w-5 h-5 text-[hsl(var(--primary))]" />
                  STA Packing Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-[hsl(var(--heading))]">Essential Items</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Current medications and care plans</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Personal care items and toiletries</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Appropriate clothing for activities</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Emergency contact information</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-[hsl(var(--heading))]">Comfort & Personal Items</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Favorite books, games, or entertainment</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Comfort objects (teddy bear, blanket)</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Any assistive technology or equipment</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Family photos or personal mementos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Booking STA">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Booking Process
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How to Book Your STA Stay
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Understanding the booking process helps ensure you secure the right STA accommodation for your needs.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="bg-[hsl(var(--pure-white))]">
                <CardHeader>
                  <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[hsl(var(--primary))]" />
                    Booking Timeline Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-[hsl(var(--light-orange))] rounded">
                      <Timer className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Emergency STA</h4>
                      <p className="text-[hsl(var(--body))] text-sm">24-48 hours notice</p>
                      <p className="text-[hsl(var(--body))] text-xs">Crisis accommodation available</p>
                    </div>
                    <div className="text-center p-4 bg-[hsl(var(--light-orange))] rounded">
                      <CalendarDays className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Regular Respite</h4>
                      <p className="text-[hsl(var(--body))] text-sm">2-4 weeks advance</p>
                      <p className="text-[hsl(var(--body))] text-xs">Planned family respite</p>
                    </div>
                    <div className="text-center p-4 bg-[hsl(var(--light-orange))] rounded">
                      <Plane className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-2" />
                      <h4 className="font-medium text-[hsl(var(--heading))] mb-1">Holiday/Special</h4>
                      <p className="text-[hsl(var(--body))] text-sm">6-8 weeks advance</p>
                      <p className="text-[hsl(var(--body))] text-xs">Popular destinations and dates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                      <PhoneCall className="w-5 h-5 text-[hsl(var(--primary))]" />
                      Making Your Booking
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-[hsl(var(--light-orange))] rounded">
                      <p className="text-[hsl(var(--body))] text-sm">
                        <strong>Step 1:</strong> Contact providers directly or through your support coordinator
                      </p>
                    </div>
                    <div className="p-3 bg-[hsl(var(--light-orange))] rounded">
                      <p className="text-[hsl(var(--body))] text-sm">
                        <strong>Step 2:</strong> Provide details about dates, support needs, and preferences
                      </p>
                    </div>
                    <div className="p-3 bg-[hsl(var(--light-orange))] rounded">
                      <p className="text-[hsl(var(--body))] text-sm">
                        <strong>Step 3:</strong> Confirm booking with deposit or service agreement
                      </p>
                    </div>
                    <div className="p-3 bg-[hsl(var(--light-orange))] rounded">
                      <p className="text-[hsl(var(--body))] text-sm">
                        <strong>Step 4:</strong> Receive confirmation and pre-arrival information
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[hsl(var(--pure-white))]">
                  <CardHeader>
                    <CardTitle className="text-lg text-[hsl(var(--heading))] flex items-center gap-2">
                      <Info className="w-5 h-5 text-[hsl(var(--primary))]" />
                      Information You'll Need
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">NDIS participant number and plan details</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Preferred dates and duration of stay</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Support needs and medical requirements</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Emergency contacts and care plan information</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Dietary requirements and preferences</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <p className="text-[hsl(var(--body))] text-sm">Any special equipment or accommodation needs</p>
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
                Your Rights During STA Stays
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Understanding your rights ensures you receive quality accommodation and support during your STA stay.
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
                    <p className="text-[hsl(var(--body))] text-sm mb-2">For complaints about STA services and providers:</p>
                    <p className="text-[hsl(var(--body))] text-sm">Phone: 1800 035 544</p>
                    <p className="text-[hsl(var(--body))] text-sm">Email: complaints@ndiscommission.gov.au</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Emergency Assistance</h4>
                    <p className="text-[hsl(var(--body))] text-sm mb-2">If you feel unsafe or need immediate help:</p>
                    <p className="text-[hsl(var(--body))] text-sm">Emergency: 000</p>
                    <p className="text-[hsl(var(--body))] text-sm">NDIS Crisis Support: Contact your provider immediately</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Myths vs Facts Section */}
      <section id="myths-facts" className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="STA myths vs facts">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Myth Busting
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                STA Myths vs Facts
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Let's clear up common misconceptions about Short Term Accommodation to help you make informed decisions.
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
      <section id="faq" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="STA frequently asked questions">
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
                Find answers to the most common questions about Short Term Accommodation.
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
                Explore other NDIS support types that might complement your STA usage or provide alternative accommodation solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ServiceCard
                title="Specialist Disability Accommodation (SDA)"
                description="Permanent specialized housing that you might trial through STA before making long-term commitments."
                icon={Building2}
                href="/learn/about-sda"
              />
              <ServiceCard
                title="Supported Independent Living (SIL)"
                description="Daily living support services that can complement STA stays or provide ongoing support in your permanent home."
                icon={Home}
                href="/learn/about-sil"
              />
              <ServiceCard
                title="Medium Term Accommodation (MTA)"
                description="Longer-term transitional housing for when you need accommodation for weeks to months during major changes."
                icon={RefreshCw}
                href="/learn/about-mta"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore STA Options?"
        description="If you're interested in STA for respite, emergency accommodation, or holiday experiences, we're here to help you understand your options and find suitable providers."
        primaryButtonText="Get Information"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Other Services"
        secondaryButtonLink="/learn"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="NDIS participant enjoying activities at STA accommodation"
        footerText="Looking for other accommodation information? Explore our"
        footerLinkText="Learning Resources"
        footerLinkHref="/learn"
      />
    </>
  )
} 