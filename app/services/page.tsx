import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, 
  Home, 
  Users2, 
  Building2, 
  ShipWheelIcon as Wheelchair,
  Clock,
  Calendar,
  Shield,
  HeartHandshake,
  Phone,
  Activity,
  Coffee,
  Heart,
  Users
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Eden Ability",
  description: "Discover our comprehensive range of disability support services including specialist accommodation and independent living solutions.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Comprehensive support services designed to enhance independence, comfort, and quality of life."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        heroImage={{
          src: "/header/page-header-2.webp",
          alt: "Eden Ability services showcasing both housing and independence support",
        }}
      />

      {/* Introduction Section with gentle gradient and pattern */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-white" aria-label="Introduction">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.03]" />
        <div className="container relative px-8 sm:px-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Supporting Your Journey</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Eden Ability, we offer comprehensive service streams designed to meet your unique needs and goals. 
              From specialized accommodation to support for independent living and community engagement, we have solutions 
              tailored for you.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="space-y-4 p-6 bg-white rounded-xl shadow-sm border border-primary/10 hover:border-primary/20 hover:shadow-md transition-all">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Home className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Eden Housing</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Specialized accommodation solutions designed for comfort and accessibility.
                </p>
              </div>
              <div className="space-y-4 p-6 bg-white rounded-xl shadow-sm border border-secondary/10 hover:border-secondary/20 hover:shadow-md transition-all">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Users2 className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Eden Independence</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Support services for independent living and community participation.
                </p>
              </div>
              <div className="space-y-4 p-6 bg-white rounded-xl shadow-sm border border-accent/10 hover:border-accent/20 hover:shadow-md transition-all">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Eden Lifestyle</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Community engagement and lifestyle enrichment programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eden Housing Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-primary/5" aria-label="Eden Housing">
        <SectionSeparator variant="primary" className="top-0" />
        <div className="container relative px-8 sm:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <Home className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium text-primary">Housing Solutions</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 tracking-tight">Eden Housing</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Specialist Disability Accommodation designed to support independence, comfort, and dignity in everyday living.
                    Our properties are thoughtfully designed with accessibility and comfort in mind.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-primary/10 p-2 rounded-full h-fit">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Specialist Disability Accommodation</h3>
                      <p className="text-sm text-muted-foreground">Purpose-built homes designed to meet specific disability needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-primary/10 p-2 rounded-full h-fit">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Medium Term Accommodation</h3>
                      <p className="text-sm text-muted-foreground">Flexible housing solutions while transitioning to permanent accommodation.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-primary/10 p-2 rounded-full h-fit">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Short Term Accommodation</h3>
                      <p className="text-sm text-muted-foreground">Respite care and temporary supported living experiences.</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild size="lg" className="mt-4">
                  <Link href="/services/eden-housing">
                    Explore Eden Housing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="/house-image/10.webp" 
                  alt="Eden Housing accommodation" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg max-w-xs">
                    <h3 className="font-semibold text-lg mb-2">SDA Properties</h3>
                    <p className="text-sm">Accessible homes designed to meet High Physical Support, Fully Accessible, Robust, and Improved Liveability standards.</p>
                    <Button variant="link" asChild className="mt-2 p-0">
                      <Link href="/services/sda-vacancies" className="flex items-center text-primary">
                        View Vacancies
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eden Independence Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-secondary/5" aria-label="Eden Independence">
        <SectionSeparator variant="secondary" className="top-0" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#7c3aed_1px,transparent_1px),linear-gradient(-45deg,#7c3aed_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.02]" />
        <div className="container relative px-8 sm:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="/house-image/6.webp" 
                  alt="Eden Independence support services" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg max-w-xs">
                    <h3 className="font-semibold text-lg mb-2">SIL Services</h3>
                    <p className="text-sm">Supported Independent Living services tailored to your unique needs and goals.</p>
                    <Button variant="link" asChild className="mt-2 p-0">
                      <Link href="/services/sil-vacancies" className="flex items-center text-secondary">
                        View Vacancies
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <Users2 className="h-6 w-6 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Independence Support</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 tracking-tight">Eden Independence</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Supporting your journey to independent living through comprehensive supported independent living services.
                    Our tailored approach focuses on your strengths, preferences, and goals.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full h-fit">
                      <Users2 className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Shared Supported Accommodation</h3>
                      <p className="text-sm text-muted-foreground">Live with others in a supportive community environment.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full h-fit">
                      <HeartHandshake className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Personalized Support Models</h3>
                      <p className="text-sm text-muted-foreground">Tailored support services to match your unique needs and goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full h-fit">
                      <Shield className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Skills Development</h3>
                      <p className="text-sm text-muted-foreground">Programs to enhance independence and life skills.</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild size="lg" variant="secondary" className="mt-4">
                  <Link href="/services/eden-independence">
                    Explore Eden Independence
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Eden Lifestyle Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-accent/5" aria-label="Eden Lifestyle">
        <SectionSeparator variant="accent" className="top-0" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#4dc2c4_1px,transparent_1px),linear-gradient(-45deg,#4dc2c4_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.02]" />
        <div className="container relative px-8 sm:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <Users className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium text-accent">Lifestyle & Community</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4 tracking-tight">Eden Lifestyle</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Enriching lives through community engagement, social activities, and personalized lifestyle support.
                    Our programs are designed to foster connections and enhance your quality of life.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-accent/10 p-2 rounded-full h-fit">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium">Community Packs</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive resources and support packages for community integration.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-accent/10 p-2 rounded-full h-fit">
                      <Activity className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium">Social Activities</h3>
                      <p className="text-sm text-muted-foreground">Vibrant community events and group activities to foster connections.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="bg-accent/10 p-2 rounded-full h-fit">
                      <Heart className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium">Wellbeing Programs</h3>
                      <p className="text-sm text-muted-foreground">Tailored programs focused on physical, mental, and emotional wellbeing.</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild size="lg" className="mt-4 bg-accent hover:bg-accent/90">
                  <Link href="/services/eden-lifestyle">
                    Explore Eden Lifestyle
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src="/52.webp" 
                  alt="Eden Lifestyle community activities" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg max-w-xs">
                    <h3 className="font-semibold text-lg mb-2">Community Packs</h3>
                    <p className="text-sm">Discover our range of quality activities and support programs designed for community engagement.</p>
                    <Button variant="link" asChild className="mt-2 p-0">
                      <Link href="/services/community-packs" className="flex items-center text-accent">
                        View Programs
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="relative py-16 md:py-24 bg-muted/30" aria-label="Service Cards">
        <SectionSeparator variant="primary" className="top-0" />
        <SectionSeparator variant="secondary" className="bottom-0" />
        <div className="container px-8 sm:px-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Explore Our Services</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Browse our range of specialized services designed to support your unique needs and enhance your quality of life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Eden Housing Services */}
            <Card className="group overflow-hidden hover:border-primary transition-all hover:shadow-md">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/house-image/1.webp" 
                  alt="SDA Properties" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold py-1 px-2 rounded-full">
                  Housing
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-2.5 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">SDA Properties</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Specialist Disability Accommodation designed to meet various needs and design categories.
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                    <Link href="/services/sda-vacancies">
                      View SDA Vacancies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group overflow-hidden hover:border-primary transition-all hover:shadow-md">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/house-image/2.webp" 
                  alt="Medium Term Accommodation" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold py-1 px-2 rounded-full">
                  Housing
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-2.5 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Medium Term Accommodation</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Flexible housing solutions while you transition to permanent accommodation.
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                    <Link href="/services/mta">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group overflow-hidden hover:border-primary transition-all hover:shadow-md">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/house-image/4.webp" 
                  alt="Short Term Accommodation" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold py-1 px-2 rounded-full">
                  Housing
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-2.5 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Short Term Accommodation</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Respite care and temporary supported living experiences.
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                    <Link href="/services/sta">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Eden Independence Services */}
            <Card className="group overflow-hidden hover:border-secondary transition-all hover:shadow-md">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/house-image/7.webp" 
                  alt="Shared Accommodations" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold py-1 px-2 rounded-full">
                  Independence
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-2.5 w-fit rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Users2 className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">Shared Accommodations</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Live with others in a supportive community environment with 24/7 support.
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:border-secondary group-hover:text-secondary transition-colors">
                    <Link href="/services/shared-accommodations">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group overflow-hidden hover:border-secondary transition-all hover:shadow-md">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/house-image/5.webp" 
                  alt="SIL Models" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold py-1 px-2 rounded-full">
                  Independence
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-2.5 w-fit rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <HeartHandshake className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">SIL Models</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Different support models to match your unique needs and preferences.
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:border-secondary group-hover:text-secondary transition-colors">
                    <Link href="/services/sil-models">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group overflow-hidden hover:border-secondary transition-all hover:shadow-md">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/house-image/3.webp" 
                  alt="SIL Vacancies" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold py-1 px-2 rounded-full">
                  Independence
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-2.5 w-fit rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Wheelchair className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">SIL Vacancies</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Find available Supported Independent Living opportunities that match your needs.
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:border-secondary group-hover:text-secondary transition-colors">
                    <Link href="/services/sil-vacancies">
                      View SIL Vacancies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Add Lifestyle Cards */}
            <Card className="group overflow-hidden hover:border-accent transition-all hover:shadow-md">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/52.webp" 
                  alt="Community Packs" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-semibold py-1 px-2 rounded-full">
                  Lifestyle
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-2.5 w-fit rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Community Packs</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Quality activities and support programs designed for community engagement.
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:border-accent group-hover:text-accent transition-colors">
                    <Link href="/services/community-packs">
                      View Programs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group overflow-hidden hover:border-accent transition-all hover:shadow-md">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/34.webp" 
                  alt="Social Activities" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-semibold py-1 px-2 rounded-full">
                  Lifestyle
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-2.5 w-fit rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Activity className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Social Activities</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Join vibrant community events and group activities designed to foster connections.
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:border-accent group-hover:text-accent transition-colors">
                    <Link href="/services/social-activities">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group overflow-hidden hover:border-accent transition-all hover:shadow-md">
              <div className="relative h-48 bg-muted">
                <Image 
                  src="/56.webp" 
                  alt="Wellbeing Programs" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-semibold py-1 px-2 rounded-full">
                  Lifestyle
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 p-2.5 w-fit rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">Wellbeing Programs</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Tailored programs focused on physical, mental, and emotional wellbeing.
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:border-accent group-hover:text-accent transition-colors">
                    <Link href="/services/wellbeing-programs">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection 
        title="Need Help Finding the Right Service?"
        description="Our team is here to help you navigate our services and find the perfect solution for your unique needs. We can provide personalized guidance to match you with the right support options."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Us"
        secondaryButtonLink="/about"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="Eden Ability support services"
        footerText="Looking for more information about our housing options? View our"
        footerLinkText="SDA Vacancies"
        footerLinkHref="/services/sda-vacancies"
      />
    </>
  )
} 