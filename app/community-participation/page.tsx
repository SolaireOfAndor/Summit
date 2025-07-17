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
  Users,
  Heart,
  MapPin,
  Calendar,
  Star,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Target,
  Activity,
  Building,
  TreePine,
  Coffee,
  BookOpen,
  Music,
  Palette,
  Gamepad2,
  Camera,
  Mic,
  Volleyball,
  Bike,
  Plane,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  HandHeart,
  Users2,
  Globe,
  Network,
  MessageSquare,
  Phone,
  Mail,
  Navigation,
  Home,
  Building2,
  Shield,
  Sparkles,
  Zap,
  TrendingUp,
  Eye,
  Ear,
  Brain,
  Accessibility,
  Route,
  Compass,
  Map,
  Clock,
  DollarSign,
  Bus,
  Car,
  Train,
  HelpCircle,
  Info,
  AlertCircle,
  CheckCircle,
  X,
  Plus,
  Minus,
  ArrowUpCircle,
  ArrowDownCircle,
  ThumbsUp,
  Award,
  Trophy,
  Medal,
  Celebrate,
  PartyPopper,
  Smile,
  Laugh,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Link as LinkIcon,
  ExternalLink,
  Search,
  Filter,
  Settings,
  Bell,
  Share2,
  Download,
  Upload,
  Save,
  Edit,
  Trash2,
  Archive,
  FolderOpen,
  File,
  FileText,
  Image as ImageIcon,
  Video,
  Headphones,
  Speaker,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Tv,
  Radio,
  Printer,
  Scanner,
  Camera as CameraIcon,
  Webcam,
  Microphone,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Crop,
  Scissors,
  Copy,
  Clipboard,
  ClipboardCheck,
  ClipboardList,
  ClipboardCopy,
  ClipboardPaste
} from "lucide-react"

export const metadata: Metadata = {
  title: "Community Participation for People with Disabilities | Building Inclusive Communities",
  description: "Comprehensive guide to community participation for people with disabilities - discover activities, overcome barriers, build connections, and access NDIS support for full community inclusion.",
  keywords: "community participation, disability inclusion, NDIS community support, social activities, accessible community, disability services, inclusive activities, social connection, community access, participation barriers",
  openGraph: {
    title: "Community Participation for People with Disabilities",
    description: "Your complete guide to meaningful community participation - from finding activities to building lasting connections in inclusive communities.",
    type: "article",
    images: [
      {
        url: "/header/page-header-5.webp",
        width: 1200,
        height: 630,
        alt: "People with disabilities participating in community activities together"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Participation for People with Disabilities",
    description: "Comprehensive guide to community participation, activities, and inclusion for people with disabilities",
  },
  alternates: {
    canonical: "/community-participation"
  }
}

// Quick Navigation Data
const quickNavigation = [
  { title: "What is Community Participation?", href: "#what-is-participation", icon: Users },
  { title: "Benefits & Impact", href: "#benefits", icon: Heart },
  { title: "Types of Activities", href: "#activity-types", icon: Activity },
  { title: "NDIS Support Available", href: "#ndis-support", icon: Shield },
  { title: "Overcoming Barriers", href: "#barriers", icon: Route },
  { title: "Finding Activities", href: "#finding-activities", icon: Search },
  { title: "Building Connections", href: "#building-connections", icon: Network },
  { title: "Success Stories", href: "#success-stories", icon: Star },
  { title: "Resources & Support", href: "#resources", icon: HelpCircle }
]

// Community Participation Statistics
const participationStats = [
  {
    number: "78%",
    label: "Feel More Confident",
    description: "NDIS participants report increased confidence through community participation",
    icon: TrendingUp,
    color: "text-[hsl(var(--primary))]"
  },
  {
    number: "85%",
    label: "Improved Wellbeing",
    description: "People report better mental health and wellbeing",
    icon: Heart,
    color: "text-[hsl(var(--primary))]"
  },
  {
    number: "92%",
    label: "New Friendships",
    description: "Participants make meaningful social connections",
    icon: Users,
    color: "text-[hsl(var(--primary))]"
  },
  {
    number: "1000+",
    label: "Activities Available",
    description: "Diverse range of accessible community activities across Australia",
    icon: Activity,
    color: "text-[hsl(var(--primary))]"
  }
]

// Benefits of Community Participation
const participationBenefits = [
  {
    title: "Enhanced Social Connections",
    description: "Build meaningful friendships and relationships within your community.",
    icon: Users2,
    category: "Social",
    details: "Regular community activities help you meet like-minded people, develop lasting friendships, and feel connected to your community.",
    outcomes: ["New friendships", "Reduced loneliness", "Stronger social network", "Sense of belonging"]
  },
  {
    title: "Improved Mental Health",
    description: "Boost confidence, reduce anxiety, and enhance overall psychological wellbeing.",
    icon: Brain,
    category: "Wellbeing",
    details: "Active participation in community life has proven benefits for mental health, self-esteem, and life satisfaction.",
    outcomes: ["Increased confidence", "Better mood", "Reduced depression", "Enhanced self-worth"]
  },
  {
    title: "Skill Development",
    description: "Learn new abilities, hobbies, and life skills through diverse activities.",
    icon: GraduationCap,
    category: "Growth",
    details: "Community participation provides opportunities to develop practical skills, creative abilities, and personal interests.",
    outcomes: ["New hobbies", "Practical skills", "Creative abilities", "Personal growth"]
  },
  {
    title: "Physical Health Benefits",
    description: "Stay active and healthy through sports, recreation, and physical activities.",
    icon: Activity,
    category: "Health",
    details: "Many community activities involve physical movement, contributing to better fitness, coordination, and overall health.",
    outcomes: ["Improved fitness", "Better coordination", "Increased energy", "Healthy lifestyle"]
  },
  {
    title: "Community Contribution",
    description: "Make a positive difference in your community through volunteering and participation.",
    icon: HandHeart,
    category: "Purpose",
    details: "Contributing to your community provides purpose, meaning, and the satisfaction of making a positive impact.",
    outcomes: ["Sense of purpose", "Community impact", "Personal fulfillment", "Civic engagement"]
  },
  {
    title: "Independence Building",
    description: "Develop confidence and skills to navigate community life independently.",
    icon: Target,
    category: "Independence",
    details: "Regular community participation builds practical skills and confidence for greater independence in daily life.",
    outcomes: ["Increased independence", "Problem-solving skills", "Self-advocacy", "Life skills"]
  }
]

// Types of Community Activities
const activityTypes = [
  {
    category: "Sports & Recreation",
    icon: Volleyball,
    color: "bg-[hsl(var(--light-orange))]",
    activities: [
      { name: "Adaptive Sports", description: "Modified sports for all abilities", icon: Medal },
      { name: "Swimming", description: "Accessible pool programs", icon: Activity },
      { name: "Walking Groups", description: "Community fitness walks", icon: Bike },
      { name: "Dancing", description: "Inclusive dance classes", icon: Music },
      { name: "Yoga & Fitness", description: "Accessible exercise programs", icon: Heart },
      { name: "Team Sports", description: "Inclusive team activities", icon: Users }
    ]
  },
  {
    category: "Arts & Creativity",
    icon: Palette,
    color: "bg-[hsl(var(--lighter-orange))]",
    activities: [
      { name: "Art Classes", description: "Painting, drawing, and crafts", icon: Palette },
      { name: "Music Groups", description: "Bands, choirs, and music therapy", icon: Music },
      { name: "Drama & Theatre", description: "Acting and performance groups", icon: Mic },
      { name: "Photography", description: "Camera clubs and workshops", icon: Camera },
      { name: "Writing Groups", description: "Creative writing and poetry", icon: BookOpen },
      { name: "Digital Arts", description: "Computer graphics and design", icon: Monitor }
    ]
  },
  {
    category: "Learning & Education",
    icon: BookOpen,
    color: "bg-[hsl(var(--background))]",
    activities: [
      { name: "Computer Classes", description: "Digital literacy and skills", icon: Laptop },
      { name: "Language Learning", description: "Foreign language groups", icon: Globe },
      { name: "Cooking Classes", description: "Culinary skills and nutrition", icon: Coffee },
      { name: "Financial Literacy", description: "Money management skills", icon: DollarSign },
      { name: "Library Programs", description: "Reading and research groups", icon: BookOpen },
      { name: "Hobby Groups", description: "Special interest learning", icon: Lightbulb }
    ]
  },
  {
    category: "Social & Community",
    icon: Users,
    color: "bg-[hsl(var(--light-orange))]",
    activities: [
      { name: "Coffee Groups", description: "Casual social meetups", icon: Coffee },
      { name: "Support Groups", description: "Peer support and sharing", icon: MessageSquare },
      { name: "Community Gardens", description: "Gardening and environmental", icon: TreePine },
      { name: "Volunteer Work", description: "Community service projects", icon: HandHeart },
      { name: "Cultural Events", description: "Festivals and celebrations", icon: PartyPopper },
      { name: "Book Clubs", description: "Reading and discussion groups", icon: BookOpen }
    ]
  },
  {
    category: "Employment & Skills",
    icon: Briefcase,
    color: "bg-[hsl(var(--lighter-orange))]",
    activities: [
      { name: "Work Programs", description: "Supported employment opportunities", icon: Briefcase },
      { name: "Job Training", description: "Skills development workshops", icon: GraduationCap },
      { name: "Business Groups", description: "Entrepreneurship support", icon: TrendingUp },
      { name: "Networking Events", description: "Professional connections", icon: Network },
      { name: "Career Counseling", description: "Employment guidance", icon: Target },
      { name: "Skill Workshops", description: "Practical skills training", icon: Settings }
    ]
  },
  {
    category: "Technology & Digital",
    icon: Smartphone,
    color: "bg-[hsl(var(--background))]",
    activities: [
      { name: "Tech Support Groups", description: "Digital assistance and learning", icon: Laptop },
      { name: "Gaming Communities", description: "Video game groups and tournaments", icon: Gamepad2 },
      { name: "Social Media Training", description: "Safe online participation", icon: Share2 },
      { name: "Online Communities", description: "Virtual participation groups", icon: Globe },
      { name: "Digital Creation", description: "Content creation workshops", icon: Video },
      { name: "Assistive Technology", description: "Technology adaptation training", icon: Settings }
    ]
  }
]

// NDIS Support for Community Participation
const ndisSupport = [
  {
    title: "Social and Community Participation",
    description: "NDIS funding to help you participate in community, social, and recreational activities.",
    icon: Users,
    fundingType: "Core Support",
    includes: [
      "Support worker assistance at activities",
      "Group activity participation",
      "Community access support",
      "Social skills development"
    ],
    examples: [
      "Attending community events with support",
      "Joining sports clubs or hobby groups",
      "Participating in cultural activities",
      "Going to movies, concerts, or shows"
    ]
  },
  {
    title: "Capacity Building Supports",
    description: "Funding to build your skills and confidence for greater community participation.",
    icon: TrendingUp,
    fundingType: "Capacity Building",
    includes: [
      "Social skills training",
      "Communication development",
      "Independence skill building",
      "Confidence building programs"
    ],
    examples: [
      "Communication therapy",
      "Social skills groups",
      "Independence training",
      "Confidence building workshops"
    ]
  },
  {
    title: "Transport Support",
    description: "Help getting to and from community activities and social events.",
    icon: Bus,
    fundingType: "Core Support",
    includes: [
      "Transport to activities",
      "Public transport training",
      "Accessible vehicle modifications",
      "Travel companion support"
    ],
    examples: [
      "Taxi or ride services to events",
      "Learning to use public transport",
      "Support for driving lessons",
      "Accessible transport options"
    ]
  },
  {
    title: "Assistive Technology",
    description: "Equipment and technology to help you participate more effectively in community life.",
    icon: Settings,
    fundingType: "Capital Support",
    includes: [
      "Communication devices",
      "Mobility equipment",
      "Sensory aids",
      "Technology adaptations"
    ],
    examples: [
      "Communication apps and devices",
      "Wheelchairs for community access",
      "Hearing aids or visual aids",
      "Modified sports equipment"
    ]
  }
]

// Common Barriers and Solutions
const participationBarriers = [
  {
    barrier: "Physical Accessibility",
    description: "Buildings, venues, or activities that aren't physically accessible",
    icon: Accessibility,
    solutions: [
      "Contact venues in advance about accessibility",
      "Look for accessibility symbols and certifications",
      "Use accessibility apps to find accessible venues",
      "Advocate for accessibility improvements"
    ],
    ndisHelp: "NDIS can fund mobility equipment and accessibility modifications"
  },
  {
    barrier: "Transport Challenges",
    description: "Difficulty getting to and from community activities",
    icon: Bus,
    solutions: [
      "Explore accessible public transport options",
      "Connect with community transport services",
      "Share transport with other participants",
      "Use ride-sharing services with accessibility features"
    ],
    ndisHelp: "NDIS Core Support can include transport funding"
  },
  {
    barrier: "Social Anxiety",
    description: "Feeling nervous or uncomfortable in social situations",
    icon: Brain,
    solutions: [
      "Start with small group activities",
      "Bring a friend or support person",
      "Practice social skills in comfortable settings",
      "Join structured activities with clear routines"
    ],
    ndisHelp: "Capacity Building supports can include social skills training"
  },
  {
    barrier: "Communication Difficulties",
    description: "Challenges expressing yourself or understanding others",
    icon: MessageSquare,
    solutions: [
      "Use communication aids and apps",
      "Join groups with similar communication styles",
      "Practice communication skills",
      "Educate others about your communication needs"
    ],
    ndisHelp: "Speech therapy and communication devices available through NDIS"
  },
  {
    barrier: "Financial Constraints",
    description: "Cost of activities, equipment, or transport",
    icon: DollarSign,
    solutions: [
      "Look for free community activities",
      "Apply for concession rates",
      "Seek scholarships or financial assistance",
      "Explore NDIS funding options"
    ],
    ndisHelp: "NDIS can fund community participation activities and transport"
  },
  {
    barrier: "Lack of Information",
    description: "Not knowing what activities are available or suitable",
    icon: Info,
    solutions: [
      "Contact local disability organizations",
      "Use online activity directories",
      "Ask support workers or coordinators",
      "Connect with peer networks"
    ],
    ndisHelp: "Support coordinators can help find suitable activities"
  }
]

// Tips for Building Social Connections
const connectionTips = [
  {
    category: "Getting Started",
    icon: Sparkles,
    tips: [
      {
        title: "Start small",
        description: "Begin with low-pressure activities like coffee groups or hobby clubs",
        icon: Coffee
      },
      {
        title: "Be yourself",
        description: "Authentic connections happen when you're genuine and comfortable",
        icon: Smile
      },
      {
        title: "Show interest",
        description: "Ask questions about others and show genuine interest in their experiences",
        icon: MessageSquare
      },
      {
        title: "Be patient",
        description: "Building meaningful friendships takes time - don't rush the process",
        icon: Clock
      }
    ]
  },
  {
    category: "Maintaining Connections",
    icon: Network,
    tips: [
      {
        title: "Stay in touch",
        description: "Regular contact helps maintain and strengthen friendships",
        icon: Phone
      },
      {
        title: "Make plans",
        description: "Suggest activities or outings to spend time together",
        icon: Calendar
      },
      {
        title: "Be supportive",
        description: "Offer help and support to friends when they need it",
        icon: HandHeart
      },
      {
        title: "Celebrate together",
        description: "Share in each other's successes and special occasions",
        icon: PartyPopper
      }
    ]
  }
]

// Success Stories Data
const successStories = [
  {
    name: "Sarah's Art Journey",
    disability: "Autism Spectrum Disorder",
    activity: "Community Art Classes",
    story: "Sarah joined a weekly art class at her local community center. Initially shy, she gradually opened up through her shared love of painting. Now she's made several close friends and even had her artwork displayed in a community exhibition.",
    outcomes: ["3 close friendships formed", "Artwork displayed publicly", "Increased confidence", "Weekly social routine"],
    quote: "Art class isn't just about painting - it's where I found my community and my voice.",
    icon: Palette
  },
  {
    name: "Michael's Sports Success",
    disability: "Intellectual Disability",
    activity: "Adaptive Basketball Team",
    story: "Michael always loved basketball but felt excluded from traditional teams. Through an adaptive sports program, he found a team that welcomed his abilities. He's now a team captain and helps coach new players.",
    outcomes: ["Team captain role", "Coaching experience", "Leadership skills", "Strong team bonds"],
    quote: "Basketball taught me that my disability doesn't define my limits - my determination does.",
    icon: Medal
  },
  {
    name: "Emma's Volunteer Impact",
    disability: "Physical Disability",
    activity: "Animal Shelter Volunteering",
    story: "Emma uses a wheelchair and wanted to contribute to her community. She found an accessible animal shelter where she volunteers weekly, helping with animal care and administrative tasks. Her positive attitude inspires other volunteers.",
    outcomes: ["200+ volunteer hours", "Mentoring role", "Community recognition", "Purpose and meaning"],
    quote: "Volunteering showed me that everyone has something valuable to contribute.",
    icon: HandHeart
  },
  {
    name: "David's Music Community",
    disability: "Vision Impairment",
    activity: "Community Choir",
    story: "David has always loved music but was hesitant to join groups. A inclusive community choir welcomed him warmly, and his beautiful voice quickly made him a valued member. He now helps organize choir events and fundraisers.",
    outcomes: ["Solo performance opportunities", "Event organizing role", "Musical friendships", "Public speaking confidence"],
    quote: "Music brought people into my life who see my abilities, not my disability.",
    icon: Music
  }
]

// Community Resources
const communityResources = [
  {
    category: "Activity Finders",
    icon: Search,
    resources: [
      {
        name: "My Community Directory",
        description: "Comprehensive database of local community activities",
        type: "Website",
        accessibility: "Fully accessible with screen reader support",
        link: "#"
      },
      {
        name: "Accessible Events App",
        description: "Mobile app listing accessible community events",
        type: "Mobile App",
        accessibility: "Voice navigation and large text options",
        link: "#"
      },
      {
        name: "Local Council Activities",
        description: "Municipal recreation and community programs",
        type: "Government Service",
        accessibility: "Most programs offer accessibility accommodations",
        link: "#"
      }
    ]
  },
  {
    category: "Support Organizations",
    icon: HandHeart,
    resources: [
      {
        name: "Disability Sports Australia",
        description: "National organization promoting inclusive sports",
        type: "National Organization",
        accessibility: "Specialized adaptive sports programs",
        link: "#"
      },
      {
        name: "Arts Access Australia",
        description: "Supporting arts participation for people with disabilities",
        type: "Arts Organization",
        accessibility: "Inclusive arts programs and resources",
        link: "#"
      },
      {
        name: "Community Transport Services",
        description: "Accessible transport to community activities",
        type: "Transport Service",
        accessibility: "Wheelchair accessible vehicles available",
        link: "#"
      }
    ]
  },
  {
    category: "Funding Support",
    icon: DollarSign,
    resources: [
      {
        name: "NDIS Participation Funding",
        description: "Core and capacity building supports for community activities",
        type: "Government Funding",
        accessibility: "Reasonable and necessary activity support",
        link: "#"
      },
      {
        name: "Community Grants",
        description: "Local grants for accessibility improvements",
        type: "Grant Funding",
        accessibility: "Equipment and accessibility modification grants",
        link: "#"
      },
      {
        name: "Concession Programs",
        description: "Reduced rates for people with disabilities",
        type: "Discount Program",
        accessibility: "Many venues offer disability concessions",
        link: "#"
      }
    ]
  }
]

// FAQ Data
const faqData = [
  {
    question: "How can I find community activities that are suitable for my disability?",
    answer: "Start by contacting your local disability organization, community center, or NDIS support coordinator. They can provide information about accessible activities in your area. You can also use online directories, check with local councils, and connect with peer networks to discover suitable activities."
  },
  {
    question: "Will NDIS fund my community participation activities?",
    answer: "Yes, NDIS can fund community participation activities under Core Support funding. This includes support worker assistance, transport to activities, and participation in community programs. The activities must be reasonable, necessary, and help you achieve your NDIS goals."
  },
  {
    question: "What if I'm nervous about joining new activities?",
    answer: "It's completely normal to feel nervous about new social situations. Start with small, structured activities, consider bringing a support person initially, and choose activities that align with your interests. Many community groups are very welcoming and understanding of different needs and comfort levels."
  },
  {
    question: "How do I know if an activity or venue is accessible?",
    answer: "Contact the venue directly to ask about accessibility features. Look for accessibility symbols on websites and promotional materials. Use accessibility apps that rate venues, and check with local disability organizations who may have experience with different venues."
  },
  {
    question: "Can I get transport support to community activities?",
    answer: "Yes, NDIS Core Support can include transport funding to help you get to community activities. This might include taxi vouchers, public transport training, or support worker assistance with transport. Discuss transport needs with your NDIS planner or support coordinator."
  },
  {
    question: "What if I need a support worker to participate in activities?",
    answer: "NDIS can fund support worker assistance for community participation activities. Your support worker can help with personal care, communication, navigation, or simply provide confidence and assistance as needed during activities."
  },
  {
    question: "Are there activities specifically for people with disabilities?",
    answer: "Yes, there are both disability-specific activities and inclusive mainstream activities. Disability-specific activities can provide understanding and peer support, while inclusive mainstream activities promote community integration. Choose what feels most comfortable for you."
  },
  {
    question: "How can I advocate for better accessibility in my community?",
    answer: "Contact venue managers and community organizations to discuss accessibility needs. Connect with local disability advocacy groups, attend community meetings, and work with others to promote awareness. Many organizations are willing to improve accessibility when they understand the benefits."
  },
  {
    question: "What if I have communication difficulties?",
    answer: "There are many strategies and tools available to help with communication challenges. NDIS can fund communication devices and speech therapy. Many activities welcome different communication styles, and some are specifically designed for people with communication differences."
  },
  {
    question: "How much does community participation typically cost?",
    answer: "Costs vary widely depending on the activity. Many community activities are free or low-cost, and concession rates are often available for people with disabilities. NDIS funding can help cover costs of activities, support workers, and transport. Always ask about financial assistance or concessions when inquiring about activities."
  }
]

export default function CommunityParticipationPage() {
  return (
    <>
      <PageHero
        title="Community Participation for People with Disabilities"
        description="Discover how to build meaningful connections, participate in inclusive activities, and thrive in your community. Your guide to social inclusion, accessible activities, and NDIS support for community participation."
        backgroundPattern="circles"
        alignment="center"
        className="bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--light-orange))] to-[hsl(var(--lighter-orange))]"
        breadcrumbs={[
          { title: "Home", href: "/" },
          { title: "Community Participation", href: "/community-participation" }
        ]}
        heroImage={{
          src: "/header/page-header-5.webp",
          alt: "Diverse group of people with disabilities participating in community activities together"
        }}
        ctaText="Get Participation Support"
        ctaHref="/contact"
      />

      {/* Quick Stats Section */}
      <section className="py-12 bg-[hsl(var(--pure-white))]" aria-label="Community participation statistics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Impact & Outcomes
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--heading))] mb-4">
                The Power of Community Participation
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {participationStats.map((stat, index) => (
                <Card key={index} className="text-center bg-[hsl(var(--background))] shadow-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-[hsl(var(--heading))] mb-1">{stat.number}</div>
                    <div className="font-medium text-[hsl(var(--heading))] mb-1">{stat.label}</div>
                    <div className="text-xs text-[hsl(var(--body))]">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-[hsl(var(--light-orange))] border-b border-[hsl(var(--lighter-orange))]" aria-label="Quick navigation">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-lg font-semibold text-[hsl(var(--heading))] mb-6 text-center">Explore Community Participation</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {quickNavigation.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-[hsl(var(--pure-white))] rounded-lg hover:bg-[hsl(var(--primary))]/5 hover:shadow-sm transition-all group"
                >
                  <item.icon className="w-6 h-6 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-[hsl(var(--heading))] text-center leading-tight">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is Community Participation */}
      <section id="what-is-participation" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="What is community participation">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Foundation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                What is Community Participation?
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Community participation means taking an active part in the social, cultural, recreational, and economic life of your community. 
                It's about belonging, contributing, and thriving alongside others in your local area.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <Card className="bg-[hsl(var(--pure-white))] shadow-lg border-l-4 border-l-[hsl(var(--primary))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Social Inclusion</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      Being welcomed and valued as a member of your community, with opportunities to form 
                      friendships, participate in activities, and contribute your unique skills and perspectives.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Equal participation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Meaningful connections</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Community belonging</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Personal contribution</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[hsl(var(--pure-white))] shadow-lg border-l-4 border-l-[hsl(var(--primary))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Personal Choice</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      Community participation is about choosing activities that interest you, align with your 
                      values, and help you achieve your personal goals while connecting with others.
                    </p>
                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded-lg">
                      <p className="text-sm text-[hsl(var(--body))]">
                        <strong>Remember:</strong> There's no "right" way to participate in community life. 
                        The best participation is what feels meaningful and enjoyable to you.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/png/3.webp"
                    alt="Diverse group of people with disabilities enjoying community activities together"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <Card className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 shadow-lg border max-w-xs">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
                      <span className="font-semibold text-[hsl(var(--heading))]">Did You Know?</span>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">
                      People with disabilities who actively participate in community life report 65% higher 
                      life satisfaction and stronger social networks.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Key Elements */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-3">Cultural Activities</h3>
                  <p className="text-[hsl(var(--body))] text-sm">
                    Engaging in arts, festivals, traditions, and cultural celebrations that enrich your life and connect you to diverse communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                    <Activity className="w-8 h-8 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-3">Recreation & Sports</h3>
                  <p className="text-[hsl(var(--body))] text-sm">
                    Participating in physical activities, sports, hobbies, and recreational pursuits that promote health and social connection.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                    <HandHeart className="w-8 h-8 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-3">Volunteering</h3>
                  <p className="text-[hsl(var(--body))] text-sm">
                    Contributing your skills and time to causes you care about, making a positive difference in your community.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-3">Employment</h3>
                  <p className="text-[hsl(var(--body))] text-sm">
                    Participating in the workforce through employment, training, or business opportunities that contribute to economic life.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Benefits of community participation">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Life-Changing Benefits
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                How Community Participation Transforms Lives
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Active community participation brings profound benefits that extend far beyond the activities themselves, 
                creating positive ripple effects throughout all aspects of life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {participationBenefits.map((benefit, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10">
                        <benefit.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <Badge variant="secondary" className="text-xs bg-[hsl(var(--light-orange))] text-[hsl(var(--body))]">
                        {benefit.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--heading))]">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-[hsl(var(--body))] text-sm">{benefit.description}</p>
                    <p className="text-[hsl(var(--body))] text-xs leading-relaxed bg-[hsl(var(--light-orange))] p-3 rounded">
                      {benefit.details}
                    </p>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 text-sm">Positive Outcomes:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {benefit.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                            <span className="text-[hsl(var(--body))] text-xs">{outcome}</span>
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

      {/* Activity Types Section */}
      <section id="activity-types" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Types of community activities">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Activity Explorer
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                Discover Your Perfect Community Activities
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Explore the diverse range of accessible and inclusive activities available in communities across Australia. 
                Find something that sparks your interest and connects you with like-minded people.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {activityTypes.map((category, index) => (
                <Card key={index} className={`shadow-xl ${category.color} border-[hsl(var(--light-orange))]`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <CardTitle className="text-xl text-[hsl(var(--heading))]">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="p-3 bg-[hsl(var(--pure-white))] rounded-lg shadow-sm">
                          <div className="flex items-start gap-2 mb-2">
                            <activity.icon className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-[hsl(var(--heading))] text-sm">{activity.name}</h4>
                              <p className="text-[hsl(var(--body))] text-xs">{activity.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NDIS Support Section */}
      <section id="ndis-support" className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="NDIS support for community participation">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                NDIS Funding
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                NDIS Support for Community Participation
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                The NDIS recognizes the importance of community participation and provides various funding options 
                to help you engage meaningfully in community life.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {ndisSupport.map((support, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                        <support.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <CardTitle className="text-[hsl(var(--heading))]">{support.title}</CardTitle>
                        <Badge className="mt-1 bg-[hsl(var(--lighter-orange))] text-[hsl(var(--body))] text-xs">
                          {support.fundingType}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{support.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {support.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {support.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                            <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full flex-shrink-0"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))]">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Info className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[hsl(var(--heading))] mb-4">
                      Getting NDIS Support for Community Participation
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      To access NDIS funding for community participation, discuss your goals and interests with your 
                      NDIS planner or support coordinator. They can help identify appropriate supports and funding options.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-[hsl(var(--pure-white))] rounded-lg">
                        <Target className="w-5 h-5 text-[hsl(var(--primary))]" />
                        <div>
                          <div className="font-semibold text-[hsl(var(--heading))] text-sm">Set Clear Goals</div>
                          <div className="text-[hsl(var(--body))] text-xs">Define participation objectives</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[hsl(var(--pure-white))] rounded-lg">
                        <FileText className="w-5 h-5 text-[hsl(var(--primary))]" />
                        <div>
                          <div className="font-semibold text-[hsl(var(--heading))] text-sm">Document Needs</div>
                          <div className="text-[hsl(var(--body))] text-xs">Identify support requirements</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-[hsl(var(--pure-white))] rounded-lg">
                        <MessageSquare className="w-5 h-5 text-[hsl(var(--primary))]" />
                        <div>
                          <div className="font-semibold text-[hsl(var(--heading))] text-sm">Plan Together</div>
                          <div className="text-[hsl(var(--body))] text-xs">Work with your support team</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Barriers Section */}
      <section id="barriers" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Overcoming participation barriers">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Breaking Down Barriers
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                Overcoming Common Participation Barriers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                While barriers to community participation exist, there are practical solutions and support available 
                to help you overcome these challenges and participate fully in community life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {participationBarriers.map((barrier, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                        <barrier.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                      </div>
                      <CardTitle className="text-lg text-[hsl(var(--heading))]">{barrier.barrier}</CardTitle>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{barrier.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-[hsl(var(--primary))]" />
                        Practical Solutions
                      </h4>
                      <ul className="space-y-2">
                        {barrier.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))] mt-1 flex-shrink-0" />
                            <span className="text-[hsl(var(--body))]">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded-lg">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-1 text-sm">NDIS Support Available:</h4>
                      <p className="text-[hsl(var(--body))] text-xs">{barrier.ndisHelp}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Building Connections Section */}
      <section id="building-connections" className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Building social connections">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Social Connection
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                Building Meaningful Social Connections
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Strong social connections are at the heart of community participation. Here are practical strategies 
                for forming and maintaining meaningful relationships in your community.
              </p>
            </div>

            <div className="space-y-8">
              {connectionTips.map((tipCategory, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(var(--heading))] flex items-center gap-3">
                      <tipCategory.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {tipCategory.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {tipCategory.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="p-4 bg-[hsl(var(--light-orange))] rounded-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <tip.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                            <h4 className="font-semibold text-[hsl(var(--heading))]">{tip.title}</h4>
                          </div>
                          <p className="text-[hsl(var(--body))] text-sm">{tip.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-12 bg-[hsl(var(--background))] border-2 border-[hsl(var(--primary))]">
              <CardContent className="p-8 text-center">
                <Network className="w-12 h-12 text-[hsl(var(--primary))] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[hsl(var(--heading))] mb-4">
                  Remember: Quality Over Quantity
                </h3>
                <p className="text-[hsl(var(--body))] leading-relaxed">
                  Building meaningful connections takes time and patience. Focus on forming a few genuine 
                  friendships rather than trying to connect with everyone. Authentic relationships are more 
                  valuable than numerous superficial connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Community participation success stories">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Inspiring Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                Real Stories of Community Participation Success
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Discover how people with disabilities have transformed their lives through meaningful community participation. 
                These stories show what's possible when barriers are overcome and communities embrace inclusion.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <story.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-[hsl(var(--heading))] mb-1">{story.name}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">{story.disability}</Badge>
                          <Badge className="text-xs bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">{story.activity}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-[hsl(var(--body))] text-sm leading-relaxed">{story.story}</p>
                    
                    <div className="bg-[hsl(var(--light-orange))] p-4 rounded-lg">
                      <blockquote className="text-[hsl(var(--body))] text-sm italic font-medium text-center">
                        "{story.quote}"
                      </blockquote>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2 text-sm">Key Outcomes:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {story.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-center gap-2">
                            <Trophy className="w-3 h-3 text-[hsl(var(--primary))] flex-shrink-0" />
                            <span className="text-[hsl(var(--body))] text-xs">{outcome}</span>
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

      {/* Resources Section */}
      <section id="resources" className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Community participation resources">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Resources & Support
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                Resources to Support Your Community Participation
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Access tools, services, and organizations that can help you find activities, connect with others, 
                and participate fully in community life.
              </p>
            </div>

            <div className="space-y-8">
              {communityResources.map((resourceCategory, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(var(--heading))] flex items-center gap-3">
                      <resourceCategory.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {resourceCategory.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {resourceCategory.resources.map((resource, resourceIndex) => (
                        <div key={resourceIndex} className="p-4 bg-[hsl(var(--lighter-orange))] rounded-lg">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">{resource.name}</h4>
                          <p className="text-[hsl(var(--body))] text-sm mb-2">{resource.description}</p>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                            </div>
                            <p className="text-[hsl(var(--body))] text-xs">
                              <strong>Accessibility:</strong> {resource.accessibility}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Community participation frequently asked questions">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Common Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[hsl(var(--heading))]">
                Community Participation Questions & Answers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Find answers to frequently asked questions about community participation for people with disabilities.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border shadow-sm">
                  <AccordionTrigger className="text-[hsl(var(--heading))] font-medium text-left hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[hsl(var(--body))] leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Community Participation Journey?"
        description="Our experienced team can help you discover activities, overcome barriers, and build meaningful connections in your community. Take the first step toward a more connected and fulfilling life."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/properties"
        imageSrc="/png/4.webp"
        mobileImageSrc="/png/3.webp"
        imageAlt="Person with disability participating in community activities with friends"
        footerText="Looking for more information about community participation? Contact us"
        footerLinkText="to learn more"
        footerLinkHref="/contact"
      />
    </>
  )
} 