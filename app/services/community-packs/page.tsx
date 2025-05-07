import { PageHero } from "@/components/sections/page-hero"
import { Button } from "@/components/ui/button"
import { SectionSeparator } from "@/components/ui/section-separator"
import Image from "next/image"
import Link from "next/link"
import CTASection from "@/components/sections/cta-section"
import {
  Users,
  Library,
  Users2,
  ShoppingBag,
  CalendarDays,
  Utensils,
  Flower2,
  Building,
  TreePine,
  FishIcon as Swim,
  Music,
  Dumbbell,
  Palmtree,
  Coffee,
  GuitarIcon as Golf,
  Palette,
  BookOpen,
  Gamepad2,
  Scissors,
  GraduationCap,
  Laptop,
  LibraryIcon as Museum,
  Film,
  Trophy,
  Ticket,
  ArrowRight,
  Heart,
  Train,
  SmartphoneCharging,
  UserCheck,
  Shirt,
  ShieldAlert,
  Brain,
  MessageCircle,
  HelpCircle,
  UserCircle,
  Apple,
  ScrollText,
  ChefHat,
  Waves,
  Wallet,
  Calculator,
  DollarSign,
  Bus,
  Activity,
} from "lucide-react"

const categories = [
  {
    title: "Community Based Activities",
    description:
      "Provide supports to connect you with the community and enable you to become a confident and contributing member of the community.",
    icon: Users,
    imageSrc: "/36.webp",
    activities: [
      { icon: Library, label: "Visiting the library" },
      { icon: Users2, label: "Joining a social club/group" },
      { icon: ShoppingBag, label: "Going shopping" },
      { icon: CalendarDays, label: "Attending appointments" },
      { icon: Users, label: "Daily activity programs" },
      { icon: Utensils, label: "Learning to cook foods" },
      { icon: Flower2, label: "Community programs like gardening/volunteering" },
      { icon: Building, label: "Going to the bank and paying bills" },
    ],
  },
  {
    title: "Outdoor Activities",
    description: "Engage in various outdoor activities to promote physical health and social interaction.",
    icon: TreePine,
    imageSrc: "/34.webp",
    activities: [
      { icon: TreePine, label: "Visits to different local parks and train travels" },
      { icon: Swim, label: "Going swimming and learning safety skills" },
      { icon: ShoppingBag, label: "Going out for shopping" },
      { icon: Coffee, label: "Eating out and meeting friends" },
      { icon: Music, label: "Enjoying Night life, Dance and Music" },
      { icon: Dumbbell, label: "Going to the gym and playing sports" },
      { icon: Palmtree, label: "Days out at the beach/entertainment parks" },
      { icon: Users, label: "Social outings and gatherings" },
      { icon: Golf, label: "Golf, gym classes or bowling" },
      { icon: Users2, label: "Tea outings or Barbecues" },
    ],
  },
  {
    title: "Centre Based Activities",
    description:
      "Provide supports to connect you with the community and enable you to become a confident and contributing member of the community.",
    icon: Building,
    imageSrc: "/56.webp",
    activities: [
      { icon: Palette, label: "Arts and crafts like jewellery making, printing" },
      { icon: BookOpen, label: "Book club and story writing" },
      { icon: Gamepad2, label: "Board games and puzzles" },
      { icon: Scissors, label: "Sewing activities" },
      { icon: Utensils, label: "Cooking and home skills" },
      { icon: GraduationCap, label: "Language, literacy and numeracy resources" },
      { icon: Laptop, label: "Digital Technology and computers" },
    ],
  },
  {
    title: "Entertainment Outings",
    description: "Experience various cultural and entertainment activities in your local area.",
    icon: Ticket,
    imageSrc: "/57.webp",
    activities: [
      { icon: Museum, label: "Visits to galleries, museums and exhibitions" },
      { icon: Palette, label: "Participating in art classes" },
      { icon: Film, label: "Going to the cinema" },
      { icon: Trophy, label: "Attending sporting events" },
      { icon: Users, label: "Attending Recreation activities and events" },
      { icon: Ticket, label: "Attending festivals and events" },
      { icon: Music, label: "Going to local events and concerts" },
    ],
  },
]

const skills = [
  { icon: Heart, label: "Friendship Skills" },
  { icon: Train, label: "Travel Training" },
  { icon: SmartphoneCharging, label: "Smart Home Training" },
  { icon: UserCheck, label: "Meetings and Greetings" },
  { icon: Shirt, label: "Choosing Clothes" },
  { icon: ShieldAlert, label: "Road Safety" },
  { icon: Brain, label: "Life Skills" },
  { icon: MessageCircle, label: "Communication Skills" },
  { icon: HelpCircle, label: "Problem-solving Skills" },
  { icon: UserCircle, label: "Self-awareness Skills" },
  { icon: Users2, label: "Social Skills" },
  { icon: Activity, label: "Health & Wellbeing Skills" },
  { icon: Apple, label: "Food Safety" },
  { icon: ScrollText, label: "Choosing Ingredients" },
  { icon: ChefHat, label: "Planning a Menu" },
  { icon: Utensils, label: "Cooking Skills" },
  { icon: Waves, label: "Water Safety" },
  { icon: ShoppingBag, label: "Shopping" },
  { icon: Wallet, label: "Budgeting" },
  { icon: Calculator, label: "Numeracy" },
  { icon: DollarSign, label: "Money Recognition" },
  { icon: ShoppingBag, label: "Purchasing" },
  { icon: Bus, label: "Using Public Transport" },
  { icon: Activity, label: "Sports" },
]

export default function CommunityPacksPage() {
  return (
    <>
      <PageHero
        title="Community Service Packs"
        description="Discover a wide range of quality activities, support and training programs designed to help you develop new skills and build lasting friendships."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        heroImage={{
          src: "/header/page-header-13.webp",
          alt: "EDEN Community Service Packs",
        }}
        breadcrumbs={[
          { title: "Services", href: "/services" },
          { title: "Eden Lifestyle", href: "/services/eden-lifestyle" },
          { title: "Community Packs", href: "/services/community-packs" },
        ]}
      />

      {/* Introduction Section */}
      <section className="relative py-12 md:py-16 bg-background" aria-label="Introduction">
        <SectionSeparator variant="primary" className="top-0" />
        <div className="container px-8 sm:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                EDEN Independence Community Service Packs offer a wide selection of quality activities, support and
                training to assist you to learn new skills as well as find new friends. We encourage you in making your
                own choices among a range of programs that can best suit your individual needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                EDEN Community Packs focus on your individual needs and goals to ensure your independence is increased
                and you are better connected within your community. These programs aim to develop your skills, increase
                your knowledge, confidence and improve your recreation and inclusion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our dedicated, trained staff make every effort to provide you with the best opportunity and support in
                these programs to help you achieve your dreams.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/72.webp"
                alt="EDEN Community Activities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-8 md:py-16 bg-muted/30" aria-label="Categories">
        <SectionSeparator variant="secondary" className="top-0" />
        <SectionSeparator variant="secondary" className="bottom-0" />
        <div className="container px-12 sm:px-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">EDEN Community Service Packs Categories</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our service packs are organized into four main groups to help you find the activities that best match your
            interests and goals.
          </p>
          <div className="grid gap-8">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="grid md:grid-cols-2 gap-8 items-center bg-background rounded-2xl p-8 border"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {category.activities.map((activity) => (
                      <div
                        key={activity.label}
                        className="flex items-center gap-2 p- rounded-lg hover:bg-muted transition-colors"
                      >
                        <activity.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">{activity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-muted ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <Image
                    src={category.imageSrc}
                    alt={`${category.title} activities`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="relative py-8 md:py-16 bg-background" aria-label="Outcomes">
        <SectionSeparator variant="accent" className="top-0" />
        <div className="container px-12 sm:px-24 ">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">EDEN Community Service Packs Outcomes</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whatever your passion and goals may be, we can work with you to develop your interests and support you to
            develop new skills. We have a wide and varied range of activities on offer that can help you develop skills
            including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="flex flex-col items-center gap-2 p-4 text-center rounded-xl border hover:border-primary hover:bg-primary/5 transition-colors group"
              >
                <skill.icon className="w-6 h-6 text-primary" />
                <span className="text-sm group-hover:text-primary transition-colors">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore Your SIL Options?"
        description="Let us help you find the perfect Supported Independent Living model that matches your unique needs, preferences, and goals for independent living."
        primaryButtonText="Contact Us Now"
        primaryButtonLink="/contact"
        secondaryButtonText="View SIL Vacancies"
        secondaryButtonLink="/services/sil-vacancies"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="EDEN Independence staff discussing living options with a client"
        footerText="Want to learn more about supported independent living? Check our"
        footerLinkText="SIL Guide"
        footerLinkHref="/resources/about-sil"
      />
    </>
  )
}

