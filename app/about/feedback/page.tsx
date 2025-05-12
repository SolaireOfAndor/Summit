import { PageHero } from "@/components/sections/page-hero"
import { FeedbackForm } from "@/components/forms/feedback-form"
import { Card, CardContent } from "@/components/ui/card"
import { EdenButton } from "@/components/ui/summit-button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, Clock, MessageSquare, FileText, ShieldCheck, ArrowRight, HelpCircle } from "lucide-react"
import Link from "next/link"
import { SectionSeparator } from "@/components/ui/section-separator"
import CTASection from "@/components/sections/cta-section"

const contactMethods = [
  {
    title: "Email",
    description: "Send us a detailed message",
    icon: Mail,
    value: "feedback@edenability.com.au",
    link: "mailto:feedback@edenability.com.au",
  },
  {
    title: "Phone",
    description: "Speak with our team directly",
    icon: Phone,
    value: "1300 033 626",
    link: "tel:1300033626",
  },
  {
    title: "Response Time",
    description: "We aim to respond within 24 hours",
    icon: Clock,
    value: "24 hour response time",
  },
]

const faqs = [
  {
    icon: MessageSquare,
    color: "primary",
    question: "How is my feedback handled?",
    answer:
      "All feedback is reviewed by our dedicated quality assurance team. We take every piece of feedback seriously and use it to improve our services. For formal complaints, we follow a structured process to ensure thorough investigation and resolution.",
  },
  {
    icon: Clock,
    color: "secondary",
    question: "What happens after I submit feedback?",
    answer:
      "You'll receive an acknowledgment within 24 hours. For complaints, we'll provide a case number and estimated timeline for resolution. We'll keep you updated throughout the process and work with you to reach a satisfactory outcome.",
  },
  {
    icon: HelpCircle,
    color: "primary",
    question: "Can I provide anonymous feedback?",
    answer:
      "Yes, you can submit anonymous feedback through our online form. However, if you'd like us to follow up or address specific concerns, we'll need your contact information.",
  },
  {
    icon: ShieldCheck,
    color: "secondary",
    question: "What if I'm not satisfied with the response?",
    answer:
      "If you're not satisfied with our initial response, you can escalate your concern to our senior management team. You also have the right to contact the NDIS Commission or other relevant external bodies.",
  },
]

export default function FeedbackPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Feedback / Complaints</h1>
      <p className="text-lg text-muted-foreground">This is the Feedback and Complaints page.</p>
    </main>
  )
}

