import { PageHero } from "@/components/sections/page-hero"
import { ContactForm } from "@/components/forms/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Clock, MapPin, MessageSquare, FileText, HelpCircle, Building, ArrowRight } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    title: "General Enquiries",
    description: "Questions about our services or organization",
    icon: MessageSquare,
    href: "#contact-form",
    email: "enquiries@summitsda.com.au",
    phone: "1300 033 623",
  },
  {
    title: "Support & Feedback",
    description: "Get help or share your experience",
    icon: HelpCircle,
    href: "/about/feedback",
    email: "support@summitsda.com.au",
    phone: "1300 033 624",
  },
  {
    title: "Housing Applications",
    description: "Questions about SDA or SIL applications",
    icon: FileText,
    href: "#contact-form",
    email: "housing@summitsda.com.au",
    phone: "1300 033 625",
  },
]

const locations = [
  {
    name: "Sydney Head Office",
    address: "123 Business Street, Sydney NSW 2000",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
    email: "sydney@summitsda.com.au",
    phone: "1300 033 623",
  },
  {
    name: "Melbourne Office",
    address: "456 Corporate Road, Melbourne VIC 3000",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
    email: "melbourne@summitsda.com.au",
    phone: "1300 033 624",
  },
  {
    name: "Brisbane Office",
    address: "789 Business Avenue, Brisbane QLD 4000",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
    email: "brisbane@summitsda.com.au",
    phone: "1300 033 625",
  },
]

export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-muted-foreground">This is the Contact page.</p>
    </main>
  )
}

