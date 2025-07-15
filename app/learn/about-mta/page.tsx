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
  Users2,
  RefreshCw,
  ArrowUpRight,
  Timer,
  CalendarDays,
  Route,
  Compass,
  CheckCircle,
  AlertTriangle,
  Clock4,
  Home as HomeIcon,
  Building as BuildingIcon,
  ArrowUpCircle,
  RotateCcw,
  Pause,
  Play,
  FastForward
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Guide to Medium Term Accommodation (MTA) | What is MTA?",
  description: "Comprehensive guide to Medium Term Accommodation (MTA) - understand transition housing, recovery accommodation, funding, and how MTA works. Expert information for NDIS participants needing temporary housing solutions.",
  keywords: "MTA, Medium Term Accommodation, NDIS MTA, transition accommodation, temporary housing, recovery accommodation, bridge housing, NDIS temporary support, medium term housing, accommodation transitions",
  openGraph: {
    title: "Complete Guide to Medium Term Accommodation (MTA)",
    description: "Everything you need to know about MTA - from transition housing to recovery accommodation and bridge solutions. Comprehensive educational resource.",
    type: "article",
    images: [
      {
        url: "/header/page-header-6.webp",
        width: 1200,
        height: 630,
        alt: "Comfortable MTA accommodation for medium-term stays and housing transitions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide to Medium Term Accommodation (MTA)",
    description: "Comprehensive educational guide covering all aspects of MTA for NDIS participants needing temporary housing solutions",
  },
  alternates: {
    canonical: "/learn/about-mta"
  }
}

// Table of Contents Data
const tableOfContents = [
  { title: "What is MTA?", href: "#what-is-mta" },
  { title: "MTA vs Other Support Types", href: "#mta-comparison" },
  { title: "Who Can Access MTA?", href: "#eligibility" },
  { title: "Types of MTA", href: "#mta-types" },
  { title: "MTA Accommodation Options", href: "#accommodation-options" },
  { title: "How MTA Works", href: "#how-it-works" },
  { title: "Planning Your Stay", href: "#planning" },
  { title: "Your Rights", href: "#rights" },
  { title: "Myths vs Facts", href: "#myths-facts" },
  { title: "Frequently Asked Questions", href: "#faq" }
]

// MTA Benefits
const mtaBenefits = [
  {
    title: "Smooth Transitions",
    description: "Provides stable housing during transitions between permanent accommodation or life changes.",
    icon: Route,
    category: "Transition Support",
    details: "Enables planned transitions between different living arrangements without rushing into permanent decisions."
  },
  {
    title: "Recovery Time",
    description: "Safe accommodation during recovery from hospitalization or health episodes.",
    icon: Heart,
    category: "Health Support",
    details: "Provides appropriate support and accommodation while you recover and rebuild your independence."
  },
  {
    title: "Skill Building Period",
    description: "Extended time to develop independence skills before moving to permanent housing.",
    icon: GraduationCap,
    category: "Capacity Building",
    details: "Practice daily living skills, budgeting, and independence in a supported environment over several months."
  },
  {
    title: "Trial Living Arrangements",
    description: "Test different support levels and housing types before making long-term commitments.",
    icon: Eye,
    category: "Exploration",
    details: "Experience different accommodation styles and support arrangements to inform future housing decisions."
  },
  {
    title: "Bridge Solution",
    description: "Provides housing while waiting for permanent accommodation or NDIS plan changes.",
    icon: ArrowUpCircle,
    category: "Bridge Support",
    details: "Maintains stability while applications are processed or suitable long-term housing becomes available."
  },
  {
    title: "Flexible Duration",
    description: "Accommodation for weeks to months based on your specific circumstances and needs.",
    icon: Timer,
    category: "Flexibility",
    details: "Can be extended or shortened based on your progress and changing circumstances or housing availability."
  }
]

// Eligibility requirements for MTA
const eligibilityRequirements = [
  {
    title: "NDIS Participant",
    description: "You must be an eligible NDIS participant with MTA funding allocated in your plan.",
    icon: CheckCircle2,
    details: "MTA funding may be in your Core Support budget or as a specific allocation based on your circumstances."
  },
  {
    title: "Temporary Need",
    description: "You have a demonstrated need for medium-term accommodation (weeks to months).",
    icon: Clock,
    details: "Longer than STA (short-term) but shorter than permanent housing solutions, typically 3 weeks to 12 months."
  },
  {
    title: "Transition Circumstances",
    description: "Experiencing life transitions, recovery, or waiting for permanent housing solutions.",
    icon: RefreshCw,
    details: "May include hospital discharge, family breakdown, housing modifications, or waiting for SDA placement."
  },
  {
    title: "Reasonable & Necessary",
    description: "The MTA must be reasonable and necessary to achieve your NDIS goals and support your wellbeing.",
    icon: Target,
    details: "Must support your independence, safety, or enable successful transition to permanent housing."
  }
]

// Types of MTA
const mtaTypes = [
  {
    title: "Transition Accommodation",
    description: "Housing during planned transitions between different long-term living arrangements.",
    icon: Route,
    duration: "1-6 months",
    features: [
      "Planned transition support",
      "Skill development focus",
      "Preparation for independence",
      "Flexible support levels"
    ],
    suitability: "People transitioning from family home, group homes, or between different accommodation types"
  },
  {
    title: "Recovery Accommodation",
    description: "Temporary housing during recovery from hospitalization or significant health episodes.",
    icon: Heart,
    duration: "2 weeks - 6 months",
    features: [
      "Health recovery support",
      "Allied health access",
      "Medication management",
      "Gradual independence building"
    ],
    suitability: "People recovering from surgery, illness, or mental health episodes requiring supported accommodation"
  },
  {
    title: "Bridge Accommodation",
    description: "Housing while waiting for permanent accommodation options to become available.",
    icon: ArrowUpCircle,
    duration: "1-12 months",
    features: [
      "Temporary stability",
      "Maintains support continuity",
      "Flexible duration",
      "Location flexibility"
    ],
    suitability: "People on waiting lists for SDA or other permanent housing, or awaiting plan reviews"
  },
  {
    title: "Assessment Accommodation",
    description: "Extended stays to properly assess support needs and develop appropriate long-term plans.",
    icon: Eye,
    duration: "3-9 months",
    features: [
      "Comprehensive assessment",
      "Trial support arrangements",
      "Skill evaluation",
      "Future planning"
    ],
    suitability: "People needing extended assessment to determine appropriate long-term support and housing"
  },
  {
    title: "Crisis Accommodation",
    description: "Medium-term housing following crisis situations requiring extended support to stabilize.",
    icon: Shield,
    duration: "1-8 months",
    features: [
      "Crisis response",
      "Trauma-informed support",
      "Safety planning",
      "Rebuilding stability"
    ],
    suitability: "People experiencing family breakdown, accommodation loss, or other crisis situations"
  },
  {
    title: "Modification Accommodation",
    description: "Temporary housing while your permanent home undergoes accessibility modifications.",
    icon: Wrench,
    duration: "2-6 months",
    features: [
      "Maintains routine",
      "Close to original location",
      "Temporary arrangement",
      "Familiar support continuation"
    ],
    suitability: "People whose homes are being modified for accessibility or safety requirements"
  }
]

// MTA Accommodation Options
const accommodationOptions = [
  {
    title: "Supported Group Homes",
    description: "Shared accommodation with other residents and 24/7 support staff available.",
    icon: Users2,
    capacity: "3-6 residents",
    support: "24/7 support available",
    features: ["Shared living spaces", "Individual bedrooms", "Trained support staff", "Group activities"],
    benefits: ["Peer interaction", "Structured support", "Social opportunities", "Cost-effective"]
  },
  {
    title: "Independent Units",
    description: "Self-contained accommodation with support available as needed.",
    icon: Home,
    capacity: "1-2 residents",
    support: "Flexible support hours",
    features: ["Private living space", "Own kitchen and bathroom", "Support as needed", "More independence"],
    benefits: ["Privacy and autonomy", "Skill development", "Flexible support", "Transition preparation"]
  },
  {
    title: "Shared Apartments",
    description: "Apartment-style accommodation shared with one or two other compatible residents.",
    icon: Building2,
    capacity: "2-3 residents",
    support: "Daytime or on-call support",
    features: ["Shared common areas", "Private bedrooms", "Urban locations", "Modern amenities"],
    benefits: ["Social connection", "Urban lifestyle", "Shared costs", "Independence building"]
  },
  {
    title: "Respite-Style Accommodation",
    description: "Flexible accommodation similar to respite but for extended periods.",
    icon: Bed,
    capacity: "1-4 residents",
    support: "Flexible support options",
    features: ["Short-term flexibility", "Various support levels", "Accessible facilities", "Activity programs"],
    benefits: ["Flexibility", "Proven quality", "Established services", "Quick availability"]
  }
]

// How MTA Works process
const mtaProcess = [
  {
    step: 1,
    title: "Identify Need",
    description: "Recognize that you need medium-term accommodation for transition, recovery, or while waiting for permanent housing.",
    icon: Lightbulb,
    details: "Consider your circumstances - are you transitioning between homes, recovering from hospital, or waiting for long-term housing?"
  },
  {
    step: 2,
    title: "NDIS Plan Discussion",
    description: "Discuss MTA needs with your NDIS planner or support coordinator during plan development or review.",
    icon: MessageSquare,
    details: "Explain your situation and why MTA is necessary for your goals and wellbeing."
  },
  {
    step: 3,
    title: "Funding Allocation",
    description: "Receive MTA funding in your NDIS plan, typically in Core Support budget.",
    icon: DollarSign,
    details: "Funding amount depends on your support needs, accommodation type, and expected duration."
  },
  {
    step: 4,
    title: "Find Accommodation",
    description: "Search for suitable MTA providers and accommodation options that meet your needs.",
    icon: MapPin,
    details: "Consider location, support levels, accommodation type, and compatibility with other residents."
  },
  {
    step: 5,
    title: "Assessment & Matching",
    description: "Provider assesses your needs and determines if their accommodation is suitable.",
    icon: UserCheck,
    details: "Discuss your support needs, goals, and preferences to ensure good fit."
  },
  {
    step: 6,
    title: "Move In & Settle",
    description: "Move into your MTA and begin receiving support while working toward your goals.",
    icon: Home,
    details: "Establish routines, build relationships with support staff, and work on your transition goals."
  },
  {
    step: 7,
    title: "Transition Planning",
    description: "Work with support staff to plan your next steps and permanent housing arrangements.",
    icon: Route,
    details: "Develop skills, save money, apply for permanent housing, or prepare for increased independence."
  },
  {
    step: 8,
    title: "Move to Permanent Housing",
    description: "Transition to your long-term housing solution when ready and available.",
    icon: CheckCircle,
    details: "Move to SDA, independent housing, or other permanent arrangements with transition support."
  }
]

// MTA vs other support types comparison
const supportComparison = [
  {
    type: "MTA",
    duration: "Weeks to months",
    purpose: "Transition, recovery, bridge accommodation",
    support: "Flexible support levels",
    planning: "Medium-term goals",
    icon: Timer,
    description: "Medium-term accommodation for transitions and recovery"
  },
  {
    type: "STA",
    duration: "Days to weeks",
    purpose: "Respite, emergency, trial stays",
    support: "Various support levels",
    planning: "Short-term needs",
    icon: Clock,
    description: "Short-term accommodation for immediate needs"
  },
  {
    type: "SIL",
    duration: "Ongoing",
    purpose: "Independent living with support",
    support: "Daily living support",
    planning: "Long-term independence",
    icon: UserCheck,
    description: "Ongoing support in your own home"
  },
  {
    type: "SDA",
    duration: "Permanent",
    purpose: "Specialized accessible housing",
    support: "Separate from accommodation",
    planning: "Permanent housing solution",
    icon: Building2,
    description: "Permanent specialized disability accommodation"
  }
]

// MTA Planning considerations
const planningConsiderations = [
  {
    title: "Duration Planning",
    description: "Estimate how long you'll need MTA based on your circumstances and goals.",
    icon: Calendar,
    considerations: [
      "Recovery timeline",
      "Transition requirements", 
      "Permanent housing availability",
      "Skill development needs"
    ]
  },
  {
    title: "Location Preferences",
    description: "Choose locations that support your goals and maintain important connections.",
    icon: MapPin,
    considerations: [
      "Access to current supports",
      "Transport connections",
      "Family and friend proximity",
      "Medical and therapy services"
    ]
  },
  {
    title: "Support Requirements",
    description: "Identify what support you'll need during your MTA stay.",
    icon: Handshake,
    considerations: [
      "Personal care needs",
      "Medication management",
      "Life skills development",
      "Emotional support"
    ]
  },
  {
    title: "Transition Goals",
    description: "Define what you want to achieve during your MTA stay.",
    icon: Target,
    considerations: [
      "Independence skills",
      "Health recovery",
      "Housing applications",
      "Financial planning"
    ]
  }
]

// Rights and expectations
const mtaRights = [
  {
    title: "Right to Choose",
    description: "You have the right to choose your MTA provider and accommodation type (subject to availability).",
    icon: CheckCircle2
  },
  {
    title: "Quality Support",
    description: "Receive high-quality support that respects your dignity, independence, and choices.",
    icon: Star
  },
  {
    title: "Privacy & Respect",
    description: "Your privacy, cultural needs, and personal preferences must be respected.",
    icon: Shield
  },
  {
    title: "Safety & Security",
    description: "Live in a safe environment with appropriate safety measures and emergency procedures.",
    icon: ShieldCheck
  },
  {
    title: "Feedback & Complaints",
    description: "Provide feedback about your accommodation and lodge complaints if needed.",
    icon: MessageSquare
  },
  {
    title: "Transition Support",
    description: "Receive appropriate support to transition to your next accommodation arrangement.",
    icon: Route
  }
]

// Myths vs Facts about MTA
const mythsVsFacts = [
  {
    myth: "MTA is the same as respite care",
    fact: "MTA is for longer stays (weeks to months) with specific transition or recovery goals, while respite is typically shorter-term breaks.",
    icon: X,
    factIcon: Check
  },
  {
    myth: "You can stay in MTA indefinitely",
    fact: "MTA is temporary accommodation with specific timeframes based on your goals and circumstances.",
    icon: X,
    factIcon: Check
  },
  {
    myth: "MTA is only for people with high support needs",
    fact: "MTA accommodates various support levels depending on your specific needs and circumstances.",
    icon: X,
    factIcon: Check
  },
  {
    myth: "MTA limits your independence",
    fact: "MTA is designed to build independence and prepare you for your next accommodation step.",
    icon: X,
    factIcon: Check
  },
  {
    myth: "MTA accommodation quality is poor",
    fact: "MTA providers must meet quality standards and provide appropriate accommodation for medium-term stays.",
    icon: X,
    factIcon: Check
  }
]

// FAQ Data
const faqData = [
  {
    question: "How long can I stay in MTA?",
    answer: "MTA stays typically range from 3 weeks to 12 months, depending on your specific circumstances, goals, and funding allocation. The duration is planned based on your transition timeline, recovery needs, or how long you expect to wait for permanent housing."
  },
  {
    question: "How is MTA different from STA (Short Term Accommodation)?",
    answer: "MTA is for longer stays (weeks to months) focused on transitions, recovery, or bridge accommodation, while STA is for shorter stays (days to weeks) for respite, emergencies, or brief trials. MTA has more intensive planning and goal-setting."
  },
  {
    question: "Can I choose my MTA accommodation?",
    answer: "Yes, you can choose your preferred MTA provider and accommodation type, subject to availability and compatibility with your needs. You should visit potential accommodations and meet staff before deciding."
  },
  {
    question: "What support is available in MTA?",
    answer: "Support varies based on your needs and the accommodation type. It can include personal care, medication management, life skills development, therapy access, meal preparation, and transition planning. Support levels can be adjusted during your stay."
  },
  {
    question: "How much does MTA cost?",
    answer: "Costs vary based on accommodation type, location, and support levels. NDIS funding covers the accommodation costs, and you may pay for personal expenses like food, utilities, and activities (similar to living in your own home)."
  },
  {
    question: "Can I bring my belongings to MTA?",
    answer: "Yes, you can bring personal belongings to make your space comfortable. Most MTA accommodations provide furnished rooms, but you can bring personal items, clothes, and favorite possessions."
  },
  {
    question: "What happens after my MTA stay ends?",
    answer: "Before your MTA ends, you'll work with support staff to plan your next step. This might be moving to permanent housing, SDA, independent living, or another accommodation arrangement based on your goals and circumstances."
  },
  {
    question: "Can MTA be extended if needed?",
    answer: "MTA can potentially be extended if you need more time to achieve your goals or if your permanent housing is delayed. Extensions require NDIS approval and may need plan review depending on your funding."
  },
  {
    question: "Is MTA available in my area?",
    answer: "MTA availability varies by location. Urban areas typically have more options than regional areas. Your support coordinator can help identify available MTA options in your preferred locations."
  },
  {
    question: "Can I work or study while in MTA?",
    answer: "Yes, MTA supports your participation in work, education, and community activities. Many MTA stays are specifically designed to help you transition to more independent living while maintaining your activities."
  }
]

export default function AboutMTAPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      {/* Hero Section */}
      <PageHero
        title="Complete Guide to Medium Term Accommodation (MTA)"
        description="Everything you need to know about MTA - from transition housing and recovery accommodation to bridge solutions and planning your medium-term stay."
        heroImage={{
          src: "/header/page-header-6.webp",
          alt: "Comfortable MTA accommodation for medium-term stays and housing transitions"
        }}
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About MTA", href: "/learn/about-mta" }
        ]}
      />

      {/* Table of Contents */}
      <section className="py-8 bg-[hsl(var(--light-orange))]">
        <div className="container mx-auto px-4">
          <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
            <CardHeader>
              <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-[hsl(var(--primary))]" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tableOfContents.map((item, index) => (
                  <Link 
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 p-3 rounded-lg bg-[hsl(var(--lighter-orange))] hover:bg-[hsl(var(--primary-transparent))] transition-colors group"
                  >
                    <ArrowRight className="h-4 w-4 text-[hsl(var(--primary))] group-hover:translate-x-1 transition-transform" />
                    <span className="text-[hsl(var(--body))] group-hover:text-[hsl(var(--primary))] font-medium">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What is MTA Section */}
      <section id="what-is-mta" className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-[hsl(var(--primary-transparent))] text-[hsl(var(--primary))] mb-4">
                Understanding MTA
              </Badge>
              <h2 className="text-4xl font-bold text-[hsl(var(--heading))] mb-6">
                What is Medium Term Accommodation (MTA)?
              </h2>
              <p className="text-xl text-[hsl(var(--body))] leading-relaxed">
                Medium Term Accommodation (MTA) provides temporary housing solutions for NDIS participants who need accommodation for weeks to months during transitions, recovery, or while waiting for permanent housing arrangements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Timer className="h-6 w-6 text-[hsl(var(--primary))]" />
                    MTA Duration & Purpose
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))]">Duration</h4>
                      <p className="text-[hsl(var(--body))]">Typically 3 weeks to 12 months</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))]">Purpose</h4>
                      <p className="text-[hsl(var(--body))]">Transitions, recovery, bridge housing, skill development</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))]">Support</h4>
                      <p className="text-[hsl(var(--body))]">Flexible support levels based on individual needs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Compass className="h-6 w-6 text-[hsl(var(--primary))]" />
                    When MTA is Used
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Route className="h-5 w-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))]">Housing Transitions</h4>
                      <p className="text-[hsl(var(--body))]">Moving between different living arrangements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))]">Recovery Periods</h4>
                      <p className="text-[hsl(var(--body))]">After hospitalization or health episodes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowUpCircle className="h-5 w-5 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))]">Bridge Housing</h4>
                      <p className="text-[hsl(var(--body))]">While waiting for permanent accommodation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-[hsl(var(--light-orange))] border-none">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Info className="h-6 w-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-3">
                      Key Point: MTA Fills the Gap
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      MTA fills the important gap between short-term respite (STA) and permanent housing solutions. 
                      It provides the time and support needed for planned transitions, recovery, skill development, 
                      or while waiting for long-term housing to become available. Unlike STA which is typically 
                      for respite, MTA is goal-oriented with specific outcomes in mind.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MTA Benefits Section */}
      <section className="py-16 bg-[hsl(var(--lighter-orange))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[hsl(var(--primary-transparent))] text-[hsl(var(--primary))] mb-4">
              Benefits & Advantages
            </Badge>
            <h2 className="text-4xl font-bold text-[hsl(var(--heading))] mb-6">
              Benefits of Medium Term Accommodation
            </h2>
            <p className="text-xl text-[hsl(var(--body))] max-w-3xl mx-auto">
              MTA provides crucial support during transition periods, offering stability and time to achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mtaBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <ServiceCard
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                  icon={IconComponent}
                  href="#"
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* MTA vs Other Support Types */}
      <section id="mta-comparison" className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-[hsl(var(--primary-transparent))] text-[hsl(var(--primary))] mb-4">
                Understanding Differences
              </Badge>
              <h2 className="text-4xl font-bold text-[hsl(var(--heading))] mb-6">
                MTA vs Other NDIS Support Types
              </h2>
              <p className="text-xl text-[hsl(var(--body))]">
                Understanding how MTA compares to other NDIS accommodation supports helps you choose the right option.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportComparison.map((support, index) => {
                const IconComponent = support.icon
                return (
                  <Card 
                    key={index}
                    className={`bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-all duration-300 ${
                      support.type === 'MTA' ? 'ring-2 ring-[hsl(var(--primary))]' : ''
                    }`}
                  >
                    <CardHeader className="text-center">
                      <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                        support.type === 'MTA' 
                          ? 'bg-[hsl(var(--primary))] text-white' 
                          : 'bg-[hsl(var(--light-orange))] text-[hsl(var(--primary))]'
                      }`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-[hsl(var(--heading))]">{support.type}</CardTitle>
                      {support.type === 'MTA' && (
                        <Badge className="bg-[hsl(var(--primary))] text-white">Current Guide</Badge>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <span className="font-semibold text-[hsl(var(--heading))]">Duration: </span>
                        <span className="text-[hsl(var(--body))]">{support.duration}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[hsl(var(--heading))]">Purpose: </span>
                        <span className="text-[hsl(var(--body))]">{support.purpose}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[hsl(var(--heading))]">Support: </span>
                        <span className="text-[hsl(var(--body))]">{support.support}</span>
                      </div>
                      <p className="text-sm text-[hsl(var(--body))] italic">{support.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Learn About STA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] mb-4">
                    Short Term Accommodation for respite and emergency needs.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/learn/about-sta">
                      Explore STA Guide
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Learn About SIL
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] mb-4">
                    Supported Independent Living for ongoing daily support.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/learn/about-sil">
                      Explore SIL Guide
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-[hsl(var(--primary))]" />
                    Learn About SDA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] mb-4">
                    Specialist Disability Accommodation for specialized housing.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/learn/about-sda">
                      Explore SDA Guide
                      <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-16 bg-[hsl(var(--light-orange))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-[hsl(var(--primary-transparent))] text-[hsl(var(--primary))] mb-4">
                Eligibility Requirements
              </Badge>
              <h2 className="text-4xl font-bold text-[hsl(var(--heading))] mb-6">
                Who Can Access MTA?
              </h2>
              <p className="text-xl text-[hsl(var(--body))]">
                MTA is available to NDIS participants who meet specific criteria and have demonstrated need for medium-term accommodation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eligibilityRequirements.map((requirement, index) => {
                const IconComponent = requirement.icon
                return (
                  <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                        <IconComponent className="h-6 w-6 text-[hsl(var(--primary))]" />
                        {requirement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[hsl(var(--body))] mb-3">{requirement.description}</p>
                      <p className="text-sm text-[hsl(var(--body))] bg-[hsl(var(--lighter-orange))] p-3 rounded-lg">
                        <strong>Details:</strong> {requirement.details}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="mt-12 bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))]">
              <CardHeader>
                <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-[hsl(var(--primary))]" />
                  Important Eligibility Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-[hsl(var(--body))]">
                    <strong>NDIS Plan Required:</strong> You must have an active NDIS plan with MTA funding allocated or be eligible for plan variation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-[hsl(var(--body))]">
                    <strong>Temporary Need:</strong> MTA is not for permanent housing - you must have plans for future accommodation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-[hsl(var(--body))]">
                    <strong>Goal-Oriented:</strong> Your MTA stay should support specific goals like recovery, transition, or skill development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of MTA Section */}
      <section id="mta-types" className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[hsl(var(--primary-transparent))] text-[hsl(var(--primary))] mb-4">
              MTA Categories
            </Badge>
            <h2 className="text-4xl font-bold text-[hsl(var(--heading))] mb-6">
              Types of Medium Term Accommodation
            </h2>
            <p className="text-xl text-[hsl(var(--body))] max-w-3xl mx-auto">
              Different types of MTA serve different purposes and circumstances, each with specific features and duration expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mtaTypes.map((type, index) => {
              const IconComponent = type.icon
              return (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <CardTitle className="text-[hsl(var(--heading))]">{type.title}</CardTitle>
                        <Badge variant="outline" className="text-[hsl(var(--primary))]">
                          {type.duration}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))]">{type.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-[hsl(var(--body))]">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[hsl(var(--lighter-orange))] p-3 rounded-lg">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Best For:</h4>
                      <p className="text-sm text-[hsl(var(--body))]">{type.suitability}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Accommodation Options Section */}
      <section id="accommodation-options" className="py-16 bg-[hsl(var(--lighter-orange))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[hsl(var(--primary-transparent))] text-[hsl(var(--primary))] mb-4">
              Housing Options
            </Badge>
            <h2 className="text-4xl font-bold text-[hsl(var(--heading))] mb-6">
              MTA Accommodation Options
            </h2>
            <p className="text-xl text-[hsl(var(--body))] max-w-3xl mx-auto">
              Choose from various accommodation types based on your support needs, independence level, and personal preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accommodationOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-[hsl(var(--primary))]" />
                      </div>
                      <CardTitle className="text-[hsl(var(--heading))]">{option.title}</CardTitle>
                    </div>
                    <p className="text-[hsl(var(--body))]">{option.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-semibold text-[hsl(var(--heading))]">Capacity:</span>
                        <p className="text-[hsl(var(--body))] text-sm">{option.capacity}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-[hsl(var(--heading))]">Support:</span>
                        <p className="text-[hsl(var(--body))] text-sm">{option.support}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Features:</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <CheckCircle2 className="h-3 w-3 text-green-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Benefits:</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {option.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <Star className="h-3 w-3 text-[hsl(var(--primary))] flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How MTA Works Section */}
      <section id="how-it-works" className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[hsl(var(--primary-transparent))] text-[hsl(var(--primary))] mb-4">
              Step-by-Step Process
            </Badge>
            <h2 className="text-4xl font-bold text-[hsl(var(--heading))] mb-6">
              How MTA Works
            </h2>
            <p className="text-xl text-[hsl(var(--body))] max-w-3xl mx-auto">
              Understanding the MTA process helps you plan and prepare for your medium-term accommodation journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {mtaProcess.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[hsl(var(--primary))] text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <IconComponent className="h-6 w-6 text-[hsl(var(--primary))]" />
                            <h3 className="text-xl font-semibold text-[hsl(var(--heading))]">{step.title}</h3>
                          </div>
                          <p className="text-[hsl(var(--body))] mb-3">{step.description}</p>
                          <div className="bg-[hsl(var(--light-orange))] p-3 rounded-lg">
                            <p className="text-sm text-[hsl(var(--body))]">
                              <strong>Details:</strong> {step.details}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section id="planning" className="py-16 bg-[hsl(var(--light-orange))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[hsl(var(--primary-transparent))] text-[hsl(var(--primary))] mb-4">
              Planning Your Stay
            </Badge>
            <h2 className="text-4xl font-bold text-[hsl(var(--heading))] mb-6">
              Planning Your MTA Stay
            </h2>
            <p className="text-xl text-[hsl(var(--body))] max-w-3xl mx-auto">
              Successful MTA stays require careful planning across multiple areas to achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {planningConsiderations.map((consideration, index) => {
              const IconComponent = consideration.icon
              return (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <IconComponent className="h-6 w-6 text-[hsl(var(--primary))]" />
                      {consideration.title}
                    </CardTitle>
                    <p className="text-[hsl(var(--body))]">{consideration.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">Key Considerations:</h4>
                    <ul className="space-y-2">
                      {consideration.considerations.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-[hsl(var(--body))]">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section id="rights" className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[hsl(var(--primary-transparent))] text-[hsl(var(--primary))] mb-4">
              Your Rights
            </Badge>
            <h2 className="text-4xl font-bold text-[hsl(var(--heading))] mb-6">
              Your Rights in MTA
            </h2>
            <p className="text-xl text-[hsl(var(--body))] max-w-3xl mx-auto">
              Understanding your rights ensures you receive appropriate support and can advocate for quality accommodation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mtaRights.map((right, index) => {
              const IconComponent = right.icon
              return (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-[hsl(var(--primary))]" />
                    </div>
                    <CardTitle className="text-[hsl(var(--heading))]">{right.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[hsl(var(--body))] text-center">{right.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="mt-12 bg-[hsl(var(--lighter-orange))] border-none max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-6 w-6 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-3">
                    Need Help or Have Concerns?
                  </h3>
                  <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                    If you have concerns about your MTA accommodation or support, you can:
                  </p>
                  <ul className="space-y-2 text-[hsl(var(--body))]">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-[hsl(var(--primary))]" />
                      Speak directly with your accommodation provider
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-[hsl(var(--primary))]" />
                      Contact your support coordinator for assistance
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-[hsl(var(--primary))]" />
                      Lodge a complaint with the NDIS Quality and Safeguards Commission
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SectionSeparator />

      {/* Myths vs Facts */}
      <section id="myths-facts" className="py-16 bg-[hsl(var(--lighter-orange))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[hsl(var(--primary-transparent))] text-[hsl(var(--primary))] mb-4">
              Clearing Misconceptions
            </Badge>
            <h2 className="text-4xl font-bold text-[hsl(var(--heading))] mb-6">
              MTA Myths vs Facts
            </h2>
            <p className="text-xl text-[hsl(var(--body))] max-w-3xl mx-auto">
              Get accurate information about MTA by separating common myths from the facts.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {mythsVsFacts.map((item, index) => (
              <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-700 mb-2">Myth</h3>
                        <p className="text-[hsl(var(--body))]">{item.myth}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.factIcon className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-700 mb-2">Fact</h3>
                        <p className="text-[hsl(var(--body))]">{item.fact}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[hsl(var(--primary-transparent))] text-[hsl(var(--primary))] mb-4">
              Common Questions
            </Badge>
            <h2 className="text-4xl font-bold text-[hsl(var(--heading))] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[hsl(var(--body))] max-w-3xl mx-auto">
              Find answers to the most common questions about Medium Term Accommodation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-[hsl(var(--pure-white))] rounded-lg shadow-lg border-none">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-[hsl(var(--heading))] font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-[hsl(var(--body))] leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore MTA Options?"
        description="Our expert team can help you understand if MTA is right for your situation and guide you through the application process."
        primaryButtonText="Contact Our Team"
        primaryButtonLink="/contact"
        secondaryButtonText="View Properties"
        secondaryButtonLink="/properties"
      />
    </main>
  )
} 