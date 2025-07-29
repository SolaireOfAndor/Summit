import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Heart, 
  Calendar, 
  CheckCircle2, 
  ArrowLeft,
  Users,
  Clock,
  Star,
  Target,
  Lightbulb,
  HeartHandshake,
  Coffee,
  Sunset,
  Timer,
  Phone,
  Sparkles,
  Activity,
  RefreshCw,
  Shield,
  User
} from "lucide-react"

export const metadata: Metadata = {
  title: "STA Respite Care Guide | Family Respite & Carer Support",
  description: "Complete guide to using STA for family respite including regular breaks, planned respite, supporting carer wellbeing, and respite planning strategies.",
  keywords: "STA respite care, family respite, carer break, respite planning, regular respite, family carer support, respite accommodation",
  openGraph: {
    title: "STA Respite Care Guide",
    description: "Support family carers with planned respite and regular breaks",
    type: "article"
  },
  alternates: {
    canonical: "/learn/about-sta/respite-care"
  }
}

// Types of respite care
const respiteTypes = [
  {
    title: "Regular Planned Respite",
    description: "Scheduled ongoing respite to provide regular breaks for family carers",
    icon: Calendar,
    frequency: "Weekly/Monthly",
    duration: "1-3 nights regularly",
    benefits: [
      "Predictable routine for everyone",
      "Prevents carer burnout",
      "Builds familiarity with accommodation",
      "Cost-effective with regular booking rates",
      "Allows long-term planning",
      "Maintains family relationships"
    ],
    planning: [
      "Book recurring dates well in advance",
      "Establish routine with same provider if possible",
      "Plan around family and work schedules",
      "Consider seasonal variations",
      "Build in flexibility for changes"
    ],
    bestFor: "Families with ongoing caring responsibilities who need regular, predictable breaks"
  },
  {
    title: "Holiday Respite",
    description: "Extended respite periods to allow family carers to take holidays or attend events",
    icon: Sunset,
    frequency: "2-4 times per year",
    duration: "1-2 weeks",
    benefits: [
      "Allows family holidays and trips",
      "Supports major family events",
      "Provides extended rest periods",
      "Enables travel and recreation",
      "Maintains family relationships",
      "Reduces long-term carer stress"
    ],
    planning: [
      "Book 6-8 weeks in advance",
      "Coordinate with holiday bookings",
      "Consider school holiday periods",
      "Plan special activities for participant",
      "Arrange detailed handover information"
    ],
    bestFor: "Families wanting to travel together or attend important events while ensuring quality care"
  },
  {
    title: "Emergency Respite",
    description: "Immediate respite when carers face unexpected circumstances",
    icon: HeartHandshake,
    frequency: "As needed",
    duration: "1 night to 2 weeks",
    benefits: [
      "Responds to unexpected situations",
      "Supports carer health crises",
      "Maintains participant safety",
      "Reduces family stress",
      "Provides immediate relief",
      "Enables crisis response"
    ],
    planning: [
      "Have emergency respite plan ready",
      "Know which providers offer emergency places",
      "Keep emergency kit prepared",
      "Maintain updated care information",
      "Have backup arrangements identified"
    ],
    bestFor: "Families needing immediate respite due to carer illness, family emergencies, or unexpected situations"
  },
  {
    title: "Transitional Respite",
    description: "Respite during major life transitions or changes in family circumstances",
    icon: RefreshCw,
    frequency: "During transitions",
    duration: "Varies - weeks to months",
    benefits: [
      "Supports major life changes",
      "Provides stability during transitions",
      "Allows adjustment time",
      "Reduces transition stress",
      "Enables planning and preparation",
      "Maintains participant routine"
    ],
    planning: [
      "Plan around major changes",
      "Coordinate with other services",
      "Consider extended duration needs",
      "Plan gradual transitions",
      "Involve all family members"
    ],
    bestFor: "Families experiencing major changes like moving house, changing circumstances, or significant life events"
  }
]

// Benefits for different family members
const familyBenefits = [
  {
    recipient: "Primary Carers",
    icon: Heart,
    benefits: [
      "Physical and emotional rest",
      "Time for personal activities and interests",
      "Opportunity to focus on relationships",
      "Reduced stress and burnout prevention",
      "Time for health appointments and self-care",
      "Ability to maintain employment",
      "Social connections and community participation"
    ]
  },
  {
    recipient: "Partners/Spouses",
    icon: Users,
    benefits: [
      "Quality time together as a couple",
      "Reduced relationship strain",
      "Shared responsibility relief",
      "Opportunity for romance and connection",
      "Personal time and space",
      "Ability to pursue individual interests",
      "Improved mental health and wellbeing"
    ]
  },
  {
    recipient: "Siblings",
    icon: Star,
    benefits: [
      "Individual attention from parents",
      "Reduced family stress",
      "Opportunity for age-appropriate activities",
      "Improved family dynamics",
      "Better understanding of disability",
      "Stronger sibling relationships",
      "Normal childhood experiences"
    ]
  },
  {
    recipient: "NDIS Participants",
    icon: User,
    benefits: [
      "New experiences and environments",
      "Social interaction with peers",
      "Independence skill development",
      "Professional support and care",
      "Access to specialized programs",
      "Reduced family stress atmosphere",
      "Improved family relationships"
    ]
  }
]

// Respite planning strategies
const planningStrategies = [
  {
    phase: "Annual Planning",
    icon: Target,
    timeframe: "Start of each year",
    activities: [
      "Review family needs and priorities",
      "Identify key dates requiring respite",
      "Budget for respite costs",
      "Research and evaluate providers",
      "Book major respite periods early",
      "Plan around work and school schedules"
    ]
  },
  {
    phase: "Quarterly Reviews",
    icon: Calendar,
    timeframe: "Every 3 months",
    activities: [
      "Assess how current respite is working",
      "Adjust frequency and duration as needed",
      "Review provider satisfaction",
      "Plan upcoming quarter's respite",
      "Evaluate family wellbeing",
      "Make necessary changes to arrangements"
    ]
  },
  {
    phase: "Monthly Preparation",
    icon: Clock,
    timeframe: "2-4 weeks before",
    activities: [
      "Confirm upcoming respite bookings",
      "Update care plans and information",
      "Prepare participant for upcoming stay",
      "Plan activities for family during respite",
      "Arrange transport and logistics",
      "Prepare emergency contacts and information"
    ]
  },
  {
    phase: "Weekly Readiness",
    icon: CheckCircle2,
    timeframe: "Week before",
    activities: [
      "Pack personal items for participant",
      "Confirm final details with provider",
      "Brief participant on upcoming stay",
      "Finalize family plans for respite period",
      "Check all documentation is current",
      "Prepare for drop-off and pick-up"
    ]
  }
]

// Quality respite indicators
const qualityIndicators = [
  {
    category: "Participant Wellbeing",
    icon: Heart,
    indicators: [
      "Participant looks forward to respite stays",
      "Maintains or improves independence skills",
      "Forms positive relationships with staff",
      "Engages in activities and programs",
      "Returns home happy and settled",
      "Shows confidence and comfort"
    ]
  },
  {
    category: "Family Benefits",
    icon: Users,
    indicators: [
      "Family feels rested and recharged",
      "Relationships improve during and after respite",
      "Carers report reduced stress",
      "Family activities and interests resume",
      "Work and life balance improves",
      "Overall family wellbeing increases"
    ]
  },
  {
    category: "Service Quality",
    icon: Star,
    indicators: [
      "Consistent, reliable service delivery",
      "Professional, caring staff",
      "Clear communication with family",
      "Flexible arrangements when needed",
      "Safe, appropriate accommodation",
      "Value for money and good outcomes"
    ]
  }
]

export default function STARespiteCarePage() {
  return (
    <>
      <PageHero
        title="STA Respite Care Guide"
        description="Comprehensive guide to using STA for family respite including regular breaks, planned respite, supporting carer wellbeing, and effective respite planning strategies."
        backgroundPattern="dots"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About STA", href: "/learn/about-sta" },
          { title: "Respite Care", href: "/learn/about-sta/respite-care" }
        ]}
        heroImage={{
          src: "/house-image/9.webp",
          alt: "Family enjoying time together while participant enjoys respite care"
        }}
      />

      {/* Back to STA Overview */}
      <section className="py-6 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <Button asChild variant="ghost" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-hover))]">
            <Link href="/learn/about-sta" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to STA Overview
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Respite Matters */}
      <section className="py-12 bg-[hsl(var(--background))]" aria-label="Why respite matters">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Family Wellbeing
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Why Respite Care is Essential
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Respite care isn't a luxury—it's an essential support that benefits the whole family and ensures sustainable, quality care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[hsl(var(--primary))]" />
                    Prevents Burnout
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] text-sm mb-3">
                    Regular respite prevents carer exhaustion and burnout, maintaining the quality of care and family relationships.
                  </p>
                  <ul className="space-y-1 text-[hsl(var(--body))] text-xs">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Reduces stress and anxiety
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Improves physical health
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Maintains emotional wellbeing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Users className="w-6 h-6 text-[hsl(var(--primary))]" />
                    Strengthens Families
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] text-sm mb-3">
                    Respite allows families to spend quality time together and maintain healthy relationships beyond caring roles.
                  </p>
                  <ul className="space-y-1 text-[hsl(var(--body))] text-xs">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Quality couple time
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Individual attention for siblings
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Improved family dynamics
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-[hsl(var(--primary))]" />
                    Benefits Everyone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--body))] text-sm mb-3">
                    Quality respite creates positive outcomes for participants while supporting family sustainability and wellbeing.
                  </p>
                  <ul className="space-y-1 text-[hsl(var(--body))] text-xs">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      New experiences for participants
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Social interaction opportunities
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-[hsl(var(--primary))]" />
                      Independence skill development
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Respite Care */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Types of respite care">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Respite Options
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Types of STA Respite Care
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Different types of respite care serve different family needs and circumstances. Choose the approach that works best for your family.
              </p>
            </div>

            <div className="space-y-8">
              {respiteTypes.map((type, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Header */}
                      <div className="lg:col-span-3">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                            <type.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[hsl(var(--heading))]">{type.title}</h3>
                            <p className="text-[hsl(var(--body))] text-lg">{type.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mb-6">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {type.frequency}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Timer className="w-3 h-3" />
                            {type.duration}
                          </Badge>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Planning */}
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-3">Planning Considerations:</h4>
                        <ul className="space-y-2">
                          {type.planning.map((plan, planIndex) => (
                            <li key={planIndex} className="flex items-center gap-2 text-[hsl(var(--body))] text-sm">
                              <Target className="w-4 h-4 text-[hsl(var(--primary))] flex-shrink-0" />
                              {plan}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Best For */}
                      <div className="bg-[hsl(var(--light-orange))] p-4 rounded-lg">
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Best For:</h4>
                        <p className="text-[hsl(var(--body))] text-sm">{type.bestFor}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Family Members */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Family benefits">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Family Benefits
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                How Respite Benefits Each Family Member
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Quality respite care creates positive outcomes for every member of the family, strengthening relationships and improving wellbeing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {familyBenefits.map((member, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <member.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {member.recipient}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {member.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                          <Star className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Respite Planning Strategies */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Planning strategies">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Strategic Planning
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Effective Respite Planning Strategies
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Strategic planning ensures your family gets maximum benefit from respite care while building sustainable support patterns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {planningStrategies.map((strategy, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
                        <strategy.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-[hsl(var(--heading))]">{strategy.phase}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {strategy.timeframe}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Indicators */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Quality indicators">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Quality Assurance
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Signs of Quality Respite Care
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Recognize the indicators of quality respite care to ensure the best outcomes for your family.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {qualityIndicators.map((indicator, index) => (
                <Card key={index} className="bg-[hsl(var(--pure-white))] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                      <indicator.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                      {indicator.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {indicator.indicators.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-[hsl(var(--body))] text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-[hsl(var(--pure-white))] border-2 border-[hsl(var(--primary))]">
              <CardHeader>
                <CardTitle className="text-[hsl(var(--heading))] flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[hsl(var(--primary))]" />
                  Making Respite Work for Your Family
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Communication Tips:</h4>
                    <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                      <li className="flex items-start gap-2">
                        <Coffee className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                        Regular check-ins with respite provider
                      </li>
                      <li className="flex items-start gap-2">
                        <Coffee className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                        Share participant feedback and preferences
                      </li>
                      <li className="flex items-start gap-2">
                        <Coffee className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                        Discuss any concerns promptly
                      </li>
                      <li className="flex items-start gap-2">
                        <Coffee className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                        Celebrate successes and positive outcomes
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[hsl(var(--heading))] mb-3">Optimization Strategies:</h4>
                    <ul className="space-y-2 text-[hsl(var(--body))] text-sm">
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                        Start with shorter stays and build up
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                        Use respite to build independence skills
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                        Plan meaningful activities during family time
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                        Review and adjust arrangements regularly
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation to Related Topics */}
      <section className="py-12 bg-[hsl(var(--lighter-orange))]" aria-label="Related STA topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-6 text-center">
              Other STA Information
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/accommodation-options" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Accommodation Options
                  </div>
                  <span className="text-xs opacity-90">Explore facility types</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/booking-and-planning" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Booking & Planning
                  </div>
                  <span className="text-xs opacity-90">Learn the booking process</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4 text-left justify-start">
                <Link href="/learn/about-sta/funding-and-costs" className="flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Funding & Costs
                  </div>
                  <span className="text-xs opacity-90">Understand STA funding</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 