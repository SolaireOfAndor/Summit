import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EdenButton } from "@/components/ui/summit-button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { SectionSeparator } from "@/components/ui/section-separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CTASection from "@/components/sections/cta-section"
import { MotionDiv } from "@/components/common/motion-wrapper"
import {
  ArrowRight,
  Home,
  Brain,
  Sparkles,
  Lightbulb,
  SmartphoneCharging as Smartphone,
  Mic,
  Power,
  Tv,
  Maximize,
  DoorOpen,
  MapPin,
  Lock,
  CheckCircle2,
  BedDouble,
  Battery,
  Phone,
  Tablet,
  KeyRound,
  Fingerprint,
  MessageSquare,
  Sunrise,
  Building,
  Wrench,
  FileCheck,
  DollarSign,
  CheckCircle,
  Key,
  Scan,
  LampDesk,
  Thermometer,
  PanelTop,
  ShieldCheck,
  Palette,
  HelpCircle,
  Wallet,
} from "lucide-react"

export const metadata: Metadata = {
  title: "EDEN Signature Housing | Platinum Plus SDA Accommodation",
  description: "Discover EDEN's Specialist Disability Accommodation with enhanced smart home functionality, accessibility features, and personalized support for independent living.",
  keywords: "SDA accommodation, smart homes for disability, accessible housing, NDIS housing, disability housing, home automation, accessible living, specialist disability accommodation",
  openGraph: {
    title: "EDEN Signature Housing | Platinum Plus SDA Accommodation",
    description: "Discover EDEN's Specialist Disability Accommodation with enhanced smart home functionality, accessibility features, and personalized support for independent living.",
    images: [
      {
        url: "/og-signature-housing.jpg",
        width: 1200,
        height: 630,
        alt: "EDEN Signature Housing",
      },
    ],
  },
}

const smartFeatures = [
  { icon: Smartphone, label: "Smart Control" },
  { icon: Mic, label: "Voice Control" },
  { icon: Power, label: "Smart Outlet Points" },
  { icon: Lightbulb, label: "Smart Lights" },
  { icon: Battery, label: "Emergency Power" },
  { icon: Tv, label: "Entertainment" },
  { icon: Maximize, label: "Spacious" },
  { icon: DoorOpen, label: "Separated Living Areas" },
  { icon: BedDouble, label: "Ceiling Hoists" },
  { icon: Sunrise, label: "Roller Blinds" },
  { icon: MapPin, label: "Well Located" },
  { icon: Lock, label: "Security System" },
]

const controlMethods = [
  { icon: Phone, label: "Phone Control" },
  { icon: Tablet, label: "Tablet Control" },
  { icon: KeyRound, label: "Key Access" },
  { icon: Brain, label: "PIN Code" },
  { icon: MessageSquare, label: "Voice Control" },
  { icon: Fingerprint, label: "RFID Tags" },
]

const philosophy = [
  {
    title: "Incorporating Smart Design Elements",
    description: "Every aspect of our homes is thoughtfully designed with accessibility and comfort in mind.",
    icon: Sparkles,
  },
  {
    title: "Choosing Premium Locations",
    description: "Strategic locations that provide easy access to amenities and community services.",
    icon: MapPin,
  },
  {
    title: "Developing All Inclusive Standard Features",
    description: "Comprehensive features that exceed standard accessibility requirements.",
    icon: CheckCircle2,
  },
]

const services = [
  {
    title: "Find Specific Accommodation",
    description: "Browse our available SDA properties",
    icon: Home,
    href: "/services/sda-vacancies",
  },
  {
    title: "Rent or Purchase",
    description: "Explore SDA property options",
    icon: Building,
    href: "/services/eden-housing",
  },
  {
    title: "Custom Build SDA",
    description: "Design your perfect home",
    icon: Wrench,
    href: "/contact",
  },
  {
    title: "Eligibility Assessment",
    description: "Check your SDA eligibility",
    icon: FileCheck,
    href: "/resources/sda-eligibility",
  },
]

export default function SignatureHousingPage() {
  return (
    <>
      <PageHero
        title="EDEN Signature Housing"
        description="Experience premium Specialist Disability Accommodation that exceeds platinum standards, featuring smart home automation and enhanced accessibility."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "About", href: "/about" },
          { title: "Signature Housing", href: "/about/signature-housing" },
        ]}
        heroImage={{
          src: "/header/page-header-12.webp",
          alt: "EDEN Signature Housing featuring modern accessible design and smart home technology",
        }}
      />

     

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container px-8 sm:px-24">
          <MotionDiv 
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="inline-flex items-center gap-2 text-sm font-medium text-white bg-accent px-5 py-2 rounded-full shadow-md">Platinum Plus Standard</Badge>
            <p className="text-lg text-muted-foreground">
              All EDEN properties are built to exceed the minimum standards of accessible design, providing a unique
              point of difference between EDEN properties and other SDA properties. While the highest level of
              accreditation from Liveable Housing Australia (LHA) is Platinum standard, we've developed the EDEN
              Platinum Plus housing standard to offer even more features and benefits.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {[
                { number: "16+", label: "Design Elements" },
                { number: "24/7", label: "Smart Control" },
                { number: "100%", label: "Accessible" },
                { number: "Premium", label: "Locations" },
              ].map((stat, index) => (
                <MotionDiv
                  key={stat.label}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      <div className="relative">
        <SectionSeparator variant="primary" className="my-4" />
      </div>

      {/* Smart Features Grid */}
      <section className="py-8 md:py-24 bg-muted/30">
        <div className="container px-8 sm:px-24">
          <MotionDiv 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">EDEN Homes Features</h2>
            <p className="text-lg text-muted-foreground">
              Our homes are equipped with state-of-the-art features designed to enhance independence and comfort.
            </p>
          </MotionDiv>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {smartFeatures.map((feature, index) => (
              <MotionDiv
                key={feature.label}
                className="flex flex-col items-center gap-2 p-4 text-center rounded-xl border hover:border-primary hover:bg-primary/5 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <feature.icon className="w-6 h-6 text-primary" />
                <span className="text-sm group-hover:text-primary transition-colors">{feature.label}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <SectionSeparator variant="primary" className="my-4" />
      </div>

    

     
      {/* SDA Functionality Section */}
      <section className="py-12 md:py-24 bg-background scroll-mt-20" id="sda-functionality">
        <div className="container px-8 sm:px-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">EDEN Housing Platinum Plus SDA Inclusions</h2>
            <p className="text-lg text-muted-foreground">
              Our Specialist Disability Accommodation offers premium features designed for comfort, accessibility, and independence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv 
              className="relative rounded-2xl overflow-hidden bg-muted aspect-square order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/59.webp"
                alt="Enhanced accessibility features in EDEN Signature Home"
                fill
                className="object-cover"
                priority
              />
            </MotionDiv>
            <MotionDiv 
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold">Enhanced Functionality and Accessibility</h3>
              <p className="text-base md:text-lg text-muted-foreground">
                All our EDEN Signature Homes come with specialized features to ensure maximum accessibility and comfort.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>A concealed ceiling rail that is pre-installed and designed specially to take you from bed to bathroom.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Bedrooms are generously oversized and Living Areas are Spacious and Open Planned.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Emergency Calls via a touch button or voice activation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>On-site Overnight Accommodation (OOA) that allows for 24hr care services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span>Latest security and alarm systems and power back-ups.</span>
                </li>
              </ul>
            </MotionDiv>
          </div>
        </div>
      </section>

      <div className="relative">
        <SectionSeparator variant="secondary" className="my-4" />
      </div>
      {/* Enhanced Independence Section */}
      <section className="py-8 md:py-24 bg-background">
        <div className="container px-8 sm:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold">Enhanced Independence & Control</h2>
              <p className="text-lg text-muted-foreground">
                All EDEN Smart homes offer full independence and freedom to control your home. From lights and air
                conditioning to TV and blinds, everything is just a touch, voice command, or pre-set automation away.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {controlMethods.map((method, index) => (
                  <MotionDiv
                    key={method.label}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <method.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm">{method.label}</span>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
            <MotionDiv 
              className="relative aspect-square rounded-2xl overflow-hidden bg-muted"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/51.webp"
                alt="Smart home control interface demonstration"
                fill
                className="object-cover"
                priority
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      <div className="relative">
        <SectionSeparator variant="primary" className="my-4" />
      </div>

      {/* Access Control Section */}
      <section className="py-12 md:py-24 bg-primary/5 scroll-mt-20" id="access-control">
        <div className="container px-8 sm:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv 
              className="order-2 lg:order-1 relative rounded-2xl overflow-hidden bg-muted aspect-square"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/37.webp"
                alt="Smart door control system in EDEN home"
                fill
                className="object-cover"
                priority
              />
            </MotionDiv>
            <MotionDiv 
              className="order-1 lg:order-2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold">Advanced Access Control</h3>
              <p className="text-base md:text-lg text-muted-foreground">
                All EDEN Smart Homes have doors with automatic openers that can be controlled via any combination of:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Phone/Tablet', icon: Smartphone },
                  { label: 'Key', icon: Key },
                  { label: 'Pin Code', icon: KeyRound },
                  { label: 'Voice', icon: Mic },
                  { label: 'RFID Tags', icon: Scan },
                ].map((method) => (
                  <div
                    key={method.label}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <method.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm">{method.label}</span>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <div className="relative">
        <SectionSeparator variant="primary" className="my-4" />
      </div>

      {/* Home Automation Section */}
      <section className="py-12 md:py-24 bg-background scroll-mt-20" id="home-automation">
        <div className="container px-8 sm:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl md:text-2xl font-semibold">Enhanced Smart Home Automation</h3>
              <p className="text-base md:text-lg text-muted-foreground">
                You do not need to wait for a carer to help you with simple changes to your home environment or bother to think about closing blinds, locking doors or turning off all the lights… simply make the command and let our smart home look after everything for you.
              </p>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="italic text-muted-foreground">
                  "Upon waking you just need to say the word or touch a button to have lights, fans, air conditioning and blinds all automatically adjust to your preferred settings."
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                {[
                  { label: 'Lighting Control', icon: LampDesk },
                  { label: 'Climate Control', icon: Thermometer },
                  { label: 'Blind Control', icon: PanelTop },
                  { label: 'Security Systems', icon: ShieldCheck },
                  { label: 'Scene Setting', icon: Palette },
                  { label: 'Voice Commands', icon: MessageSquare },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors text-center"
                  >
                    <feature.icon className="w-8 h-8 text-primary mb-1" />
                    <span className="text-sm font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>
            </MotionDiv>
            <MotionDiv 
              className="relative rounded-2xl overflow-hidden bg-muted aspect-square"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/47.webp"
                alt="Smart home automation system controls"
                fill
                className="object-cover"
                priority
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      <div className="relative">
        <SectionSeparator variant="secondary" className="my-4" />
      </div>

       {/* Philosophy Section */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="container px-8 sm:px-24">
          <MotionDiv 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">EDEN Signature Housing Philosophy</h2>
            <p className="text-lg text-muted-foreground">
              Our approach is built on three core principles that ensure the highest quality of living for our
              residents.
            </p>
          </MotionDiv>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {philosophy.map((item, index) => (
              <MotionDiv
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card className="relative group hover:border-primary transition-colors h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <SectionSeparator variant="primary" className="my-4" />
      </div>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-primary/5">
        <div className="container px-8 sm:px-24">
          <MotionDiv
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 px-4 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about EDEN Signature Housing, eligibility, and costs.
            </p>
          </MotionDiv>

          <MotionDiv
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {/* Question 1 */}
              <AccordionItem value="eden-help" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xl font-semibold">How EDEN Housing could help me with my SDA?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      EDEN Housing could assist you if you are looking to:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span>Specific EDEN Housing Accommodation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span>Renting SDA property</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span>Purchasing your own SDA Property</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span>Building your own SDA and customising your new home to meet your individual needs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span>Test your Eligibility for SDA</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span>Undertake SDA Eligibility Assessments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span>Develop your Housing Preferences</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span>Prepare your Housing Plan</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span>Submitting your SDA Application</span>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Question 2 */}
              <AccordionItem value="rent-contribution" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-accent/10">
                      <Wallet className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-xl font-semibold">What is a Reasonable Rent Contribution?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      SDA funding is paid directly to your SDA provider. In addition to your SDA funding, SDA pricing assumes the SDA tenant pays a Reasonable Rent Contribution (RRC) to SDA Provider which comprises:
                    </p>
                    <div className="bg-primary/5 p-6 rounded-lg space-y-3">
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <p className="font-medium">25% of Disability Support Pension, plus</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <p className="font-medium">100% of Commonwealth Rent Assistance</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Question 3 */}
              <AccordionItem value="living-costs" className="border rounded-lg bg-card shadow-sm">
                <AccordionTrigger className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <Home className="h-6 w-6 text-secondary" />
                    </div>
                    <span className="text-xl font-semibold">How much does it cost to live in EDEN Homes?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      The SDA funding in your NDIS plan will be paid to EDEN Housing NDIS Services. In addition, 'reasonable rent contribution', which is 25% of your Disability Support Pension, plus 25% of any pension supplement received, plus 100% of any Commonwealth Rent Assistance you receive (or equivalent) is required.
                    </p>
                    <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                      <div className="p-3 rounded-full bg-primary/10">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <p className="font-medium">Contact our team for a personalized cost breakdown based on your specific situation and needs.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </MotionDiv>
        </div>
      </section>

      <div className="relative">
        <SectionSeparator variant="primary" className="my-4" />
      </div>

      {/* Services Grid */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-8 sm:px-24">
          <MotionDiv 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 px-4 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Can Help</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're looking to rent, buy, or build, we're here to support your journey to finding the perfect
              home that meets your unique needs.
            </p>
          </MotionDiv>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="h-full"
              >
                <Link
                  href={service.href}
                  className="group flex flex-col h-full p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-all hover:border-primary/50 hover:translate-y-[-4px]"
                >
                  <div className="flex flex-col h-full items-center sm:items-start">
                    <div className="mb-6 p-4 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors w-16 h-16 flex items-center justify-center mx-auto sm:mx-0">
                      <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors text-center sm:text-left">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow text-center sm:text-left">{service.description}</p>
                    
                    <div className="mt-auto flex items-center text-sm font-medium text-primary justify-center sm:justify-start w-full">
                      <span className="mr-2 group-hover:mr-3 transition-all">Learn more</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </MotionDiv>
            ))}
          </div>
          
          <MotionDiv
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <EdenButton 
              asChild 
              variant="outline" 
              className="mt-4"
            >
              <Link href="/services" className="inline-flex items-center gap-2">
                View all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </EdenButton>
          </MotionDiv>
        </div>
      </section>

      <div className="relative">
        <SectionSeparator variant="primary" className="my-4" />
      </div>

      {/* Replace the existing CTA section with the CTASection component */}
      <CTASection 
        title="Experience the Future of Accessible Living"
        description="Discover how EDEN Signature Housing can transform your living experience with smart home technology and premium accessibility features."
        primaryButtonText="Enquire About Availability"
        primaryButtonLink="/contact"
        secondaryButtonText="View SDA Properties" 
        secondaryButtonLink="/services/sda-vacancies"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/1.webp"
        imageAlt="EDEN Signature Housing smart home interface and accessibility features"
        footerText="Want to understand more about SDA housing eligibility?"
        footerLinkText="Read our SDA Guide"
        footerLinkHref="/resources/about-sda"
      />
    </>
  )
}

