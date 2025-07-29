import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/sections/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { 
  TrendingUp,
  Target,
  Star,
  Eye,
  Users,
  Building,
  Briefcase,
  Heart,
  Stethoscope,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  Lightbulb,
  Settings,
  BarChart3,
  Info,
  Timer,
  AlertCircle,
  Award,
  Zap
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Capacity Building Guide | NDIS Skills Development & Independence Funding",
  description: "Master Capacity Building supports for skills development, employment, health, relationships, and independence. Learn how to use goal-focused NDIS funding effectively.",
  keywords: "Capacity Building, NDIS skills development, independence building, employment support, therapy funding, NDIS goals, capacity building supports",
  openGraph: {
    title: "Complete Capacity Building Guide | NDIS Skills Development & Independence",
    description: "Comprehensive guide to Capacity Building supports - build skills, independence, and connections through strategic use of goal-focused NDIS funding.",
    type: "article",
    images: [
      {
        url: "/header/page-header-4.webp",
        width: 1200,
        height: 630,
        alt: "NDIS participant in skills development session with therapist"
      }
    ]
  },
  alternates: {
    canonical: "/learn/funding/capacity-building"
  }
}

// Capacity Building Categories
const capacityBuildingTypes = [
  {
    title: "Improved Living Arrangements",
    description: "Support coordination and assistance to live more independently",
    icon: Building,
    percentage: "25-30%",
    percentageNote: "of typical Capacity Building budget",
    examples: [
      "Support coordination services",
      "Specialist support coordination",
      "Plan management (if funded)",
      "Housing transition support",
      "Independent living skills training",
      "Life skills coaching"
    ],
    outcomes: [
      "Better coordination of all supports",
      "Improved decision-making skills",
      "Greater independence in daily life",
      "Successful transitions to new housing"
    ],
    bestFor: "People with complex support needs, those transitioning to independence, participants needing coordination"
  },
  {
    title: "Increased Social & Community Participation",
    description: "Building connections and participating more fully in community life",
    icon: Users,
    percentage: "20-25%",
    percentageNote: "of typical Capacity Building budget",
    examples: [
      "Social skills development programs",
      "Community participation programs",
      "Peer support and mentoring",
      "Group therapy programs",
      "Recreation skill development",
      "Volunteer work preparation"
    ],
    outcomes: [
      "Stronger social connections",
      "Increased community involvement",
      "Better communication skills",
      "Greater confidence in social situations"
    ],
    bestFor: "People wanting to build friendships, those feeling isolated, participants developing social skills"
  },
  {
    title: "Finding & Keeping a Job",
    description: "Employment support and workplace skills development",
    icon: Briefcase,
    percentage: "15-20%",
    percentageNote: "of typical Capacity Building budget",
    examples: [
      "Employment support services",
      "Job coaching and training",
      "Workplace assessments",
      "Resume and interview preparation",
      "Vocational skills training",
      "Supported employment programs"
    ],
    outcomes: [
      "Successful job placement",
      "Increased work hours",
      "Better workplace skills",
      "Greater financial independence"
    ],
    bestFor: "People seeking employment, those wanting to increase work hours, participants needing workplace support"
  },
  {
    title: "Improved Relationships",
    description: "Building better relationships with family, friends, and community",
    icon: Heart,
    percentage: "10-15%",
    percentageNote: "of typical Capacity Building budget",
    examples: [
      "Relationship counseling",
      "Family therapy and support",
      "Communication skills training",
      "Conflict resolution training",
      "Social skills development",
      "Peer support programs"
    ],
    outcomes: [
      "Better family relationships",
      "Improved communication skills",
      "Stronger friendships",
      "Better conflict resolution abilities"
    ],
    bestFor: "People experiencing relationship difficulties, those wanting to improve communication, families needing support"
  },
  {
    title: "Improved Health & Wellbeing",
    description: "Allied health therapies and wellness programs",
    icon: Stethoscope,
    percentage: "25-35%",
    percentageNote: "of typical Capacity Building budget",
    examples: [
      "Physiotherapy and exercise therapy",
      "Occupational therapy",
      "Speech therapy",
      "Psychology and counseling",
      "Dietitian services",
      "Mental health support"
    ],
    outcomes: [
      "Better physical function",
      "Improved mental health",
      "Enhanced communication abilities",
      "Greater overall wellbeing"
    ],
    bestFor: "People needing therapy, those with mental health needs, participants requiring health interventions"
  },
  {
    title: "Improved Learning",
    description: "Educational support and skill development programs",
    icon: BookOpen,
    percentage: "10-15%",
    percentageNote: "of typical Capacity Building budget",
    examples: [
      "Learning support in education",
      "Literacy and numeracy programs",
      "Computer and technology training",
      "Life skills education",
      "Disability-specific education support",
      "Transition to study programs"
    ],
    outcomes: [
      "Improved academic performance",
      "Better life skills",
      "Increased technology abilities",
      "Successful educational transitions"
    ],
    bestFor: "Students with disabilities, people developing basic skills, those transitioning to education"
  }
]

// Goal Setting Framework
const goalFramework = [
  {
    phase: "Assessment & Planning",
    description: "Understanding current abilities and setting realistic targets",
    timeframe: "2-4 weeks",
    activities: [
      "Comprehensive assessment of current skills",
      "Identification of strengths and areas for development",
      "Setting SMART goals with clear outcomes",
      "Creating timeline and milestone markers"
    ],
    keyTip: "Make goals specific, measurable, and time-bound for best results"
  },
  {
    phase: "Skill Development",
    description: "Active learning and practice with professional support",
    timeframe: "3-12 months",
    activities: [
      "Regular therapy or training sessions",
      "Practice activities and homework",
      "Progress monitoring and adjustments",
      "Building on existing strengths"
    ],
    keyTip: "Consistency and regular practice are key to successful skill development"
  },
  {
    phase: "Implementation & Practice",
    description: "Applying new skills in real-world situations",
    timeframe: "6-18 months",
    activities: [
      "Gradual application in daily life",
      "Supported practice opportunities",
      "Problem-solving and adaptation",
      "Building confidence through success"
    ],
    keyTip: "Real-world practice helps embed skills permanently"
  },
  {
    phase: "Independence & Maintenance",
    description: "Using skills independently with minimal support",
    timeframe: "Ongoing",
    activities: [
      "Independent application of skills",
      "Occasional check-ins and support",
      "Advanced skill development",
      "Sharing skills with others"
    ],
    keyTip: "The goal is to reduce reliance on paid supports over time"
  }
]

// Capacity Building Strategies
const buildingStrategies = [
  {
    category: "Goal-Focused Approach",
    icon: Target,
    description: "Everything should connect to your NDIS goals",
    strategies: [
      {
        title: "Link every activity to your goals",
        detail: "Each Capacity Building support should clearly connect to achieving your NDIS plan goals",
        action: "Ask providers how each session helps achieve specific goals"
      },
      {
        title: "Measure progress regularly",
        detail: "Track improvement using objective measures and milestone achievements",
        action: "Keep a skills journal or use apps to track progress"
      },
      {
        title: "Adjust based on outcomes",
        detail: "Be willing to change approach if progress isn't meeting expectations",
        action: "Monthly review with providers to assess and adjust strategies"
      }
    ]
  },
  {
    category: "Skills Transfer",
    icon: Star,
    description: "Apply learning across different life areas",
    strategies: [
      {
        title: "Practice in multiple settings",
        detail: "Use new skills at home, work, and in community to reinforce learning",
        action: "Schedule practice opportunities in different environments"
      },
      {
        title: "Connect with other supports",
        detail: "Integrate Capacity Building learning with Core Support activities",
        action: "Share progress with all support workers for consistent reinforcement"
      },
      {
        title: "Build on existing strengths",
        detail: "Use current abilities as foundation for developing new skills",
        action: "Identify your strengths and how they can support new learning"
      }
    ]
  },
  {
    category: "Long-term Independence",
    icon: TrendingUp,
    description: "Focus on reducing future support needs",
    strategies: [
      {
        title: "Invest in lasting skills",
        detail: "Prioritize skills that will reduce reliance on paid supports long-term",
        action: "Choose interventions with permanent or long-lasting benefits"
      },
      {
        title: "Plan for transitions",
        detail: "Prepare for life changes like moving, work changes, or aging",
        action: "Include transition planning in capacity building goals"
      },
      {
        title: "Build support networks",
        detail: "Develop informal supports and community connections",
        action: "Use capacity building to strengthen family and community relationships"
      }
    ]
  }
]

// Time Management for Capacity Building
const timeManagement = [
  {
    approach: "Intensive Short-term",
    description: "Focused burst of activity for specific skills",
    duration: "3-6 months",
    bestFor: ["Learning specific skills", "Addressing immediate needs", "Time-limited goals"],
    example: "3-month intensive communication therapy program",
    advantages: ["Quick results", "Focused attention", "Clear endpoints"],
    considerations: ["May be intense", "Risk of burnout", "Need follow-up support"]
  },
  {
    approach: "Gradual Long-term",
    description: "Steady, sustainable skill development over extended period",
    duration: "12-24 months",
    bestFor: ["Complex skill development", "Lifestyle changes", "Building independence"],
    example: "18-month supported employment program",
    advantages: ["Sustainable pace", "Deep learning", "Natural integration"],
    considerations: ["Slower visible progress", "Requires consistency", "Long commitment"]
  },
  {
    approach: "Seasonal/Cyclical",
    description: "Regular sessions with breaks for practice and integration",
    duration: "Ongoing cycles",
    bestFor: ["Maintenance skills", "Ongoing therapy needs", "School-age participants"],
    example: "Quarterly therapy blocks with practice periods",
    advantages: ["Flexible timing", "Cost-effective", "Allows integration time"],
    considerations: ["Need good planning", "Risk of losing momentum", "Requires self-motivation"]
  }
]

// Capacity Building FAQ
const capacityFAQ = [
  {
    question: "How is Capacity Building different from Core Support?",
    answer: "Capacity Building is focused on building skills and independence for the future, while Core Support addresses current daily needs. Capacity Building is goal-focused and often time-limited, designed to reduce future support needs. Core Support is ongoing assistance with daily activities."
  },
  {
    question: "Can I use Capacity Building funding for ongoing therapy?",
    answer: "Yes, if the therapy is focused on building specific skills or achieving capacity building goals. However, therapy that maintains current function without building new skills may not be appropriate for Capacity Building funding. The key is demonstrating skill development and independence outcomes."
  },
  {
    question: "How do I know if my Capacity Building supports are working?",
    answer: "Track progress toward specific, measurable goals. You should see skill development, increased independence, or achievement of milestones. Regular review with providers should show objective improvements. If you're not seeing progress after 3-6 months, consider adjusting your approach."
  },
  {
    question: "Can I change my Capacity Building supports during my plan?",
    answer: "Yes, you can adjust your Capacity Building supports if your goals change or if current supports aren't achieving expected outcomes. However, unlike Core Support, some Capacity Building services may require approval for changes, especially if changing to different service types."
  },
  {
    question: "What happens if I achieve my Capacity Building goals early?",
    answer: "This is a great outcome! You can set new, more advanced goals, focus on different skill areas, or use remaining funding to maintain and consolidate your new skills. Discuss with your support coordinator about the best next steps for your situation."
  },
  {
    question: "Is there a time limit on Capacity Building supports?",
    answer: "While there's no strict time limit, Capacity Building is designed to achieve specific outcomes within reasonable timeframes. The NDIS expects to see progress and may question supports that continue indefinitely without clear skill development or independence gains."
  }
]

export default function CapacityBuildingPage() {
  return (
    <>
      <PageHero
        title="Complete Capacity Building Guide"
        description="Master Capacity Building supports for skills development, employment, health, relationships, and independence. Learn how to use goal-focused NDIS funding to build a better future."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "NDIS Funding", href: "/learn/funding" },
          { title: "Capacity Building", href: "/learn/funding/capacity-building" }
        ]}
        heroImage={{
          src: "/header/page-header-4.webp",
          alt: "NDIS participant in skills development session building independence"
        }}
        ctaText="Get Capacity Building Help"
        ctaHref="/contact"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/funding/capital-support">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Capital Support
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/funding/plan-management">
                  Next: Plan Management
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Capacity Building overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Building Your Future
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Why Capacity Building is Your Investment in Independence
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Capacity Building supports are designed to help you develop skills, build independence, and create 
                connections that will benefit you for years to come. It's the most strategic part of your NDIS plan.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-[hsl(var(--pure-white))] shadow-lg border-l-4 border-l-[hsl(var(--primary))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Goal-Focused Investment</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-4">
                      Unlike other NDIS categories, Capacity Building is specifically designed to achieve outcomes 
                      that reduce your future support needs. Every dollar should work toward greater independence.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Skills development</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Independence building</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Time-limited focus</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[hsl(var(--primary))]" />
                        <span className="text-[hsl(var(--body))]">Long-term benefits</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading))]">Strategic Approach</h3>
                    </div>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      Think of Capacity Building as an investment. The skills you develop now can reduce 
                      your reliance on Core Support in the future, giving you more control over your life.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/png/1.webp"
                    alt="NDIS participant building skills and independence in therapy session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--pure-white))] p-4 rounded-lg shadow-lg border max-w-xs">
                  <p className="text-[hsl(var(--body))] text-sm">
                    <strong className="text-[hsl(var(--heading))]">7% focused impact:</strong> Capacity Building may be 
                    smaller in budget but creates the biggest long-term impact on independence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity Building Types */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Capacity Building types">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Six Key Areas
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                The 6 Capacity Building Categories
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Capacity Building supports cover six key areas of life. Understanding each helps you choose 
                the right supports for your goals and circumstances.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {capacityBuildingTypes.map((type, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-[hsl(var(--primary))]/10 rounded-full flex items-center justify-center">
                        <type.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-[hsl(var(--heading))]">{type.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs mt-1">{type.percentage}</Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{type.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Common Supports:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {type.examples.slice(0, 4).map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full"></div>
                            <span className="text-[hsl(var(--body))] text-sm">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Expected Outcomes:</h4>
                      {type.outcomes.slice(0, 3).map((outcome, outcomeIndex) => (
                        <p key={outcomeIndex} className="text-[hsl(var(--body))] text-xs mb-1">• {outcome}</p>
                      ))}
                    </div>

                    <div className="bg-[hsl(var(--background))] p-3 rounded border-l-4 border-[hsl(var(--primary))]">
                      <p className="text-[hsl(var(--body))] text-xs">
                        <strong>Best for:</strong> {type.bestFor}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goal Setting Framework */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Capacity Building goal framework">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Strategic Framework
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                The Capacity Building Journey
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Effective Capacity Building follows a structured approach from assessment to independence. 
                Understanding this journey helps you set realistic expectations and measure progress.
              </p>
            </div>

            <div className="space-y-8">
              {goalFramework.map((phase, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--text-white))] flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-[hsl(var(--heading))]">{phase.phase}</h3>
                          <Badge variant="outline" className="text-xs">{phase.timeframe}</Badge>
                        </div>
                        <p className="text-[hsl(var(--body))] mb-4">{phase.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Key Activities:</h4>
                            <div className="space-y-1">
                              {phase.activities.map((activity, activityIndex) => (
                                <div key={activityIndex} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                                  <span className="text-[hsl(var(--body))] text-sm">{activity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                            <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Success Tip:</h4>
                            <p className="text-[hsl(var(--body))] text-sm">{phase.keyTip}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Strategies */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Capacity Building strategies">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Expert Strategies
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Smart Capacity Building Strategies
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Learn proven strategies to maximize the impact of your Capacity Building investments and achieve lasting independence outcomes.
              </p>
            </div>

            <div className="space-y-8">
              {buildingStrategies.map((strategy, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(var(--heading))] flex items-center gap-3">
                      <strategy.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {strategy.category}
                    </CardTitle>
                    <p className="text-[hsl(var(--body))] text-sm">{strategy.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      {strategy.strategies.map((item, itemIndex) => (
                        <div key={itemIndex} className="p-4 bg-[hsl(var(--lighter-orange))] rounded-lg">
                          <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">{item.title}</h4>
                          <p className="text-[hsl(var(--body))] text-sm mb-3">{item.detail}</p>
                          <div className="bg-[hsl(var(--pure-white))] p-2 rounded border-l-4 border-[hsl(var(--primary))]">
                            <p className="text-[hsl(var(--body))] text-xs">
                              <strong>Action:</strong> {item.action}
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

      {/* Time Management Approaches */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Time management approaches">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Timing Strategies
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Different Approaches to Capacity Building
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Choose the right timing approach for your goals, lifestyle, and learning preferences.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {timeManagement.map((approach, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Timer className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <div>
                        <CardTitle className="text-lg text-[hsl(var(--heading))]">{approach.approach}</CardTitle>
                        <Badge variant="outline" className="text-xs mt-1">{approach.duration}</Badge>
                      </div>
                    </div>
                    <p className="text-[hsl(var(--body))] text-sm">{approach.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Best For:</h4>
                      <div className="space-y-1">
                        {approach.bestFor.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                            <span className="text-[hsl(var(--body))] text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--light-orange))] p-3 rounded">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Example:</h4>
                      <p className="text-[hsl(var(--body))] text-xs">{approach.example}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Advantages:</h4>
                      {approach.advantages.map((advantage, advIndex) => (
                        <p key={advIndex} className="text-[hsl(var(--body))] text-xs mb-1">• {advantage}</p>
                      ))}
                    </div>

                    <div className="bg-[hsl(var(--background))] p-3 rounded">
                      <h4 className="font-semibold text-[hsl(var(--heading))] mb-1">Consider:</h4>
                      {approach.considerations.map((consideration, consIndex) => (
                        <p key={consIndex} className="text-[hsl(var(--body))] text-xs mb-1">• {consideration}</p>
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
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Capacity Building FAQ">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Common Questions
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Capacity Building Questions & Answers
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Find answers to frequently asked questions about using Capacity Building supports effectively.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {capacityFAQ.map((faq, index) => (
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

      {/* Related Topics Navigation */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Related funding topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Related Topics
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Continue Your Funding Journey
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Explore other aspects of NDIS funding to optimize your entire plan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Settings className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Plan Management</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Choose the right approach to managing your funding</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/funding/plan-management">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Budget Maximization</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Strategies to get the most from your funding</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/funding/budget-maximization">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Capacity for Independence?"
        description="Our experienced team can help you develop strategic Capacity Building plans that deliver lasting outcomes and greater independence."
        primaryButtonText="Get Capacity Building Help"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/properties"
        imageSrc="/png/2.webp"
        mobileImageSrc="/png/1.webp"
        imageAlt="NDIS participant achieving independence goals through capacity building"
        footerText="Ready to invest in your independence? Our team"
        footerLinkText="can help you get started"
        footerLinkHref="/contact"
      />
    </>
  )
} 