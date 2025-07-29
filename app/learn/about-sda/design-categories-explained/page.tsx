import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import Link from "next/link"
import Image from "next/image"
import { 
  Lightbulb,
  Accessibility,
  Shield,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Info,
  Star,
  Users,
  Home,
  DollarSign,
  FileText,
  Eye,
  Ear,
  Brain,
  Zap,
  Settings,
  Activity,
  Bell,
  Lock,
  Wrench,
  Stethoscope,
  UserCheck,
  Building2
} from "lucide-react"

export const metadata: Metadata = {
  title: "SDA Design Categories Explained | Improved Liveability, Fully Accessible, Robust & High Physical Support",
  description: "Complete guide to the 4 SDA design categories. Understand Improved Liveability, Fully Accessible, Robust, and High Physical Support SDA housing features and which category suits your needs.",
  keywords: "SDA design categories, types of SDA, improved liveability SDA, fully accessible SDA, robust SDA, high physical support SDA, SDA housing types",
  openGraph: {
    title: "SDA Design Categories Explained | Complete Guide to All 4 SDA Types",
    description: "Comprehensive guide to understanding the 4 SDA design categories and their specific features for different disability support needs.",
    type: "article",
    images: [
      {
        url: "/header/page-header-8.webp",
        width: 1200,
        height: 630,
        alt: "Different SDA design category examples showing accessible features"
      }
    ]
  },
  alternates: {
    canonical: "/learn/about-sda/design-categories-explained"
  }
}

// Detailed Design Categories
const designCategories = [
  {
    title: "Improved Liveability",
    description: "Enhanced amenity, design and location for people with sensory, intellectual or cognitive impairment.",
    icon: Lightbulb,
    color: "bg-gradient-to-br from-yellow-50 to-orange-50",
    borderColor: "border-yellow-200",
    iconBg: "bg-yellow-100",
    funding: "Base level funding",
    targetGroup: "Sensory, intellectual, or cognitive impairments",
    features: [
      {
        title: "Enhanced Lighting & Ventilation",
        description: "Good natural light and improved air circulation",
        icon: Eye,
        details: "Large windows, skylights, and ventilation systems that reduce stuffiness and improve comfort"
      },
      {
        title: "Reduced Auditory Distractions", 
        description: "Sound management and noise reduction features",
        icon: Ear,
        details: "Sound insulation, quieter appliances, and layout design that minimizes disruptive noise"
      },
      {
        title: "Visual Cues & Wayfinding",
        description: "Clear visual navigation and orientation aids",
        icon: Brain,
        details: "Color coding, clear signage, contrasting surfaces, and consistent layout patterns"
      },
      {
        title: "Private Outdoor Space",
        description: "Access to garden or balcony areas",
        icon: Home,
        details: "Balconies, patios, or private garden areas for relaxation and sensory breaks"
      },
      {
        title: "Quality Fixtures & Fittings",
        description: "Higher standard materials and finishes",
        icon: Star,
        details: "Durable, easy-to-clean surfaces with better aesthetic appeal and functionality"
      }
    ],
    suitabilityDetails: [
      "Visual impairments requiring enhanced lighting",
      "Hearing impairments needing reduced noise",
      "Cognitive impairments benefiting from clear navigation",
      "Sensory processing differences requiring calm environments",
      "Intellectual disabilities needing consistent, understandable layouts"
    ],
    commonConditions: [
      "Autism spectrum disorder",
      "Intellectual disability", 
      "Acquired brain injury",
      "Vision or hearing impairments",
      "Sensory processing disorders"
    ]
  },
  {
    title: "Fully Accessible",
    description: "Wheelchair accessible design meeting the Livable Housing Australia Platinum standard.",
    icon: Accessibility,
    color: "bg-gradient-to-br from-blue-50 to-indigo-50", 
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    funding: "Enhanced funding level",
    targetGroup: "Wheelchair users and mobility equipment users",
    features: [
      {
        title: "Step-free Access Throughout",
        description: "Level access to all areas of the home",
        icon: UserCheck,
        details: "Ramps instead of steps, level thresholds, and accessible pathways throughout"
      },
      {
        title: "Wide Corridors & Doorways",
        description: "Minimum 850mm doorways and 1200mm corridors",
        icon: ArrowRight,
        details: "Doorways and passages sized for wheelchair access with room for maneuvering"
      },
      {
        title: "Accessible Bathrooms & Kitchens",
        description: "Roll-under sinks, accessible storage, grab rails",
        icon: Home,
        details: "Height-adjustable fixtures, roll-in showers, accessible cabinetry and storage"
      },
      {
        title: "Appropriate Floor Surfaces",
        description: "Non-slip, low-maintenance flooring",
        icon: Settings,
        details: "Smooth, stable surfaces suitable for wheels with minimal joints and transitions"
      },
      {
        title: "Accessible Controls & Switches",
        description: "Reachable light switches, power points, and controls",
        icon: Zap,
        details: "Controls positioned at accessible heights with easy-to-operate mechanisms"
      }
    ],
    suitabilityDetails: [
      "Manual or power wheelchair users",
      "People using walking frames or mobility aids",
      "Those requiring level access throughout the home",
      "People needing accessible bathroom facilities",
      "Those with reaching or grasping limitations"
    ],
    commonConditions: [
      "Spinal cord injuries",
      "Multiple sclerosis", 
      "Muscular dystrophy",
      "Stroke with mobility impact",
      "Lower limb amputations"
    ]
  },
  {
    title: "Robust",
    description: "Durable design and fittings for people who might damage the physical environment.",
    icon: Shield,
    color: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200", 
    iconBg: "bg-green-100",
    funding: "Higher funding level",
    targetGroup: "People who may unintentionally damage property",
    features: [
      {
        title: "Reinforced Walls & Fixtures",
        description: "Strengthened construction and mountings",
        icon: Wrench,
        details: "Steel-reinforced walls, secure mounting for fixtures, and strengthened door frames"
      },
      {
        title: "Impact-Resistant Materials",
        description: "Durable surfaces that withstand impact",
        icon: Shield,
        details: "High-impact glass, reinforced plastics, and materials that won't splinter or break easily"
      },
      {
        title: "Secure Outdoor Areas",
        description: "Safely enclosed external spaces",
        icon: Lock,
        details: "Secure fencing, reinforced gates, and design that prevents unauthorized exit"
      },
      {
        title: "Tamper-Proof Fittings",
        description: "Fixtures that resist removal or damage",
        icon: Settings,
        details: "Security screws, recessed fixtures, and components designed to withstand manipulation"
      },
      {
        title: "Easy-to-Clean Surfaces",
        description: "Low-maintenance, hygienic materials",
        icon: Star,
        details: "Non-porous surfaces, seamless joins, and materials that resist staining and damage"
      }
    ],
    suitabilityDetails: [
      "Disability-related behaviors that may cause property damage",
      "Conditions causing involuntary movements or actions",
      "Cognitive impairments affecting awareness of consequences",
      "Conditions requiring extra safety and security measures",
      "People needing environments that can withstand high use"
    ],
    commonConditions: [
      "Autism with challenging behaviors",
      "Huntington's disease",
      "Severe intellectual disability",
      "Frontal lobe brain injury",
      "Some psychosocial disabilities"
    ]
  },
  {
    title: "High Physical Support",
    description: "Design for people requiring significant physical assistance from support workers.",
    icon: HeartHandshake,
    color: "bg-gradient-to-br from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-100", 
    funding: "Highest funding level",
    targetGroup: "People with very high physical support needs",
    features: [
      {
        title: "Ceiling Hoist Systems",
        description: "Fixed track hoists for transfers and mobility",
        icon: Activity,
        details: "Ceiling-mounted hoist tracks in bedrooms, bathrooms, and living areas for safe transfers"
      },
      {
        title: "Emergency Backup Power",
        description: "Backup power for critical medical equipment",
        icon: Zap,
        details: "Generator or battery backup systems to maintain power for life-support equipment"
      },
      {
        title: "Clinical Care Facilities",
        description: "Space and facilities for medical care needs",
        icon: Stethoscope,
        details: "Clinical-grade facilities for complex care, medication storage, and medical equipment"
      },
      {
        title: "Overnight Support Accommodation",
        description: "Space for support workers to stay overnight",
        icon: Users,
        details: "Separate accommodation areas for support workers who need to provide 24/7 care"
      },
      {
        title: "Accessible Van Parking",
        description: "Parking designed for wheelchair-accessible vehicles",
        icon: ArrowRight,
        details: "Wider parking spaces with level access suitable for wheelchair vans and lifts"
      }
    ],
    suitabilityDetails: [
      "Need for ceiling hoists for all transfers",
      "Require 24/7 support worker presence",
      "Use life-support or critical medical equipment",
      "Need clinical-level care in their home",
      "Require emergency backup power systems"
    ],
    commonConditions: [
      "High-level spinal cord injuries (C1-C4)",
      "Advanced multiple sclerosis",
      "Motor neurone disease",
      "Severe cerebral palsy",
      "Severe brain injury with physical impact"
    ]
  }
]

// Design Category Comparison
const comparisonData = [
  {
    feature: "Target Users",
    improvedLiveability: "Sensory/cognitive needs",
    fullyAccessible: "Wheelchair users",
    robust: "Property damage risk",
    highPhysical: "Very high support needs"
  },
  {
    feature: "Funding Level",
    improvedLiveability: "Base level",
    fullyAccessible: "Enhanced",
    robust: "Higher",
    highPhysical: "Highest"
  },
  {
    feature: "Key Features",
    improvedLiveability: "Better lighting, noise reduction",
    fullyAccessible: "Full wheelchair access",
    robust: "Reinforced construction",
    highPhysical: "Clinical care facilities"
  },
  {
    feature: "Typical % of SDA",
    improvedLiveability: "~40%",
    fullyAccessible: "~35%", 
    robust: "~15%",
    highPhysical: "~10%"
  }
]

export default function SDADesignCategoriesPage() {
  return (
    <>
      <PageHero
        title="SDA Design Categories Explained"
        description="Comprehensive guide to the 4 SDA design categories. Understand the features, suitability, and funding differences between Improved Liveability, Fully Accessible, Robust, and High Physical Support housing."
        backgroundPattern="grid"
        alignment="left"
        className="bg-[hsl(var(--light-orange))]"
        breadcrumbs={[
          { title: "Learn", href: "/learn" },
          { title: "About SDA", href: "/learn/about-sda" },
          { title: "Design Categories", href: "/learn/about-sda/design-categories-explained" }
        ]}
        heroImage={{
          src: "/header/page-header-8.webp",
          alt: "Modern SDA housing showing different accessibility and design features"
        }}
        ctaText="Find SDA Properties"
        ctaHref="/properties"
      />

      {/* Navigation Links */}
      <section className="py-8 bg-[hsl(var(--background))] border-b border-[hsl(var(--light-orange))]">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <Button asChild variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                <Link href="/learn/about-sda/eligibility-requirements">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back: Eligibility
                </Link>
              </Button>
              <Button asChild className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--text-white))]">
                <Link href="/learn/about-sda/funding-and-costs">
                  Next: Funding & Costs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Design categories overview">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Categories Overview
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Understanding the 4 SDA Design Categories
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Each SDA design category is specifically designed to meet different types of functional impairment 
                and support needs. Understanding these categories helps you identify which type of housing would 
                best support your independence and quality of life.
              </p>
            </div>

            <Card className="mb-8 bg-[hsl(var(--light-orange))] border-[hsl(var(--lighter-orange))]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Info className="w-8 h-8 text-[hsl(var(--primary))] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[hsl(var(--heading))] mb-2">
                      Your Design Category is Based on Your Assessed Needs
                    </h3>
                    <p className="text-[hsl(var(--body))] leading-relaxed">
                      The design category recommended for you will be determined by occupational therapy assessment 
                      of your functional capacity and housing needs. You may qualify for features from multiple 
                      categories, and some housing combines elements from different categories.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Design Categories */}
      <section className="py-16 md:py-24 bg-[hsl(var(--lighter-orange))]" aria-label="Detailed design categories">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto space-y-16">
            {designCategories.map((category, index) => (
              <Card key={index} className={`shadow-xl overflow-hidden ${category.color} ${category.borderColor} border-2`}>
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Category Overview */}
                  <div className="lg:col-span-1 p-8 bg-[hsl(var(--pure-white))]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-full ${category.iconBg} flex items-center justify-center`}>
                        <category.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[hsl(var(--heading))]">{category.title}</h3>
                        <div className="flex flex-col gap-1 mt-2">
                          <Badge variant="outline" className="text-xs w-fit">{category.funding}</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-[hsl(var(--body))] leading-relaxed mb-6">{category.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Best suited for:</h4>
                        <p className="text-[hsl(var(--body))] text-sm bg-[hsl(var(--light-orange))] p-3 rounded">
                          {category.targetGroup}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--heading))] mb-2">Common conditions:</h4>
                        <div className="space-y-1">
                          {category.commonConditions.map((condition, conditionIndex) => (
                            <div key={conditionIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full"></div>
                              <span className="text-[hsl(var(--body))] text-sm">{condition}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-2 p-8">
                    <h4 className="text-xl font-bold text-[hsl(var(--heading))] mb-6">Key Features & Design Elements:</h4>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="p-4 bg-[hsl(var(--pure-white))] rounded-lg shadow-sm border">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10 flex-shrink-0">
                              <feature.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-[hsl(var(--heading))] mb-1">{feature.title}</h5>
                              <p className="text-[hsl(var(--body))] text-sm mb-2">{feature.description}</p>
                              <p className="text-[hsl(var(--body))] text-xs bg-[hsl(var(--light-orange))] p-2 rounded">
                                {feature.details}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[hsl(var(--pure-white))] p-6 rounded-lg border">
                      <h5 className="font-semibold text-[hsl(var(--heading))] mb-3">This category is suitable for people who:</h5>
                      <div className="grid md:grid-cols-2 gap-2">
                        {category.suitabilityDetails.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 flex-shrink-0" />
                            <span className="text-[hsl(var(--body))] text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-label="Design categories comparison">
        <div className="container px-8 sm:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Quick Comparison
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                SDA Design Categories at a Glance
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed max-w-3xl mx-auto">
                Compare the key differences between all four SDA design categories to understand which might be most suitable.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-[hsl(var(--pure-white))] rounded-lg shadow-lg">
                <thead>
                  <tr className="border-b border-[hsl(var(--light-orange))]">
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">Feature</th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-[hsl(var(--primary))]" />
                        Improved Liveability
                      </div>
                    </th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">
                      <div className="flex items-center gap-2">
                        <Accessibility className="w-4 h-4 text-[hsl(var(--primary))]" />
                        Fully Accessible
                      </div>
                    </th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-[hsl(var(--primary))]" />
                        Robust
                      </div>
                    </th>
                    <th className="text-left p-4 font-semibold text-[hsl(var(--heading))]">
                      <div className="flex items-center gap-2">
                        <HeartHandshake className="w-4 h-4 text-[hsl(var(--primary))]" />
                        High Physical Support
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-[hsl(var(--light-orange))]/30">
                      <td className="p-4 font-medium text-[hsl(var(--heading))]">{row.feature}</td>
                      <td className="p-4 text-[hsl(var(--body))] text-sm">{row.improvedLiveability}</td>
                      <td className="p-4 text-[hsl(var(--body))] text-sm">{row.fullyAccessible}</td>
                      <td className="p-4 text-[hsl(var(--body))] text-sm">{row.robust}</td>
                      <td className="p-4 text-[hsl(var(--body))] text-sm">{row.highPhysical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics Navigation */}
      <section className="py-16 md:py-24 bg-[hsl(var(--light-orange))]" aria-label="Related SDA topics">
        <div className="container px-8 sm:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/20">
                Continue Learning
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[hsl(var(--heading))]">
                Next Steps in Your SDA Journey
              </h2>
              <p className="text-[hsl(var(--body))] text-lg leading-relaxed">
                Now that you understand design categories, explore other important aspects of SDA housing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Funding & Costs</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Understand how SDA funding works and what you'll pay</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/funding-and-costs">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Application Process</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">Step-by-step guide to applying for SDA</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/application-process">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--pure-white))] shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Home className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" />
                  <h3 className="font-bold text-[hsl(var(--heading))] mb-2">Housing Selection</h3>
                  <p className="text-[hsl(var(--body))] text-sm mb-4">How to choose the right SDA housing for you</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/learn/about-sda/housing-selection-guide">
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
        title="Ready to Explore SDA Housing Options?"
        description="Now that you understand the design categories, explore our available SDA properties to see real examples of these features in action."
        primaryButtonText="View SDA Properties"
        primaryButtonLink="/properties"
        secondaryButtonText="Get Design Assessment"
        secondaryButtonLink="/contact"
        imageSrc="/house-image/8.webp"
        mobileImageSrc="/house-image/9.webp"
        imageAlt="Modern SDA housing showing accessibility features across different design categories"
        footerText="Need help understanding which design category suits you? Our team"
        footerLinkText="can provide expert guidance"
        footerLinkHref="/contact"
      />
    </>
  )
} 