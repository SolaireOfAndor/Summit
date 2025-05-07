import { PageHero } from "@/components/sections/page-hero"
import { FeedbackForm } from "@/components/forms/feedback-form"
import { Card, CardContent } from "@/components/ui/card"
import { EdenButton } from "@/components/ui/eden-button"
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
    <>
      <PageHero
        title="Feedback & Complaints"
        description="We value your feedback and are committed to continuously improving our services. Share your experience, concerns, or suggestions with us."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
        breadcrumbs={[
          { title: "About", href: "/about" },
          { title: "Feedback", href: "/about/feedback" },
        ]}
        heroImage={{
          src: "/header/page-header-3.webp",
          alt: "EDEN Signature Housing featuring modern accessible design and smart home technology",
        }}
      />

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-5">
          <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-2xl -top-12 right-10"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              <Card className="border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">We're Here to Listen</h2>
                      <p className="text-muted-foreground">
                        Your feedback helps us improve our services and better support our community. Whether you have
                        suggestions, concerns, or want to share a positive experience, we want to hear from you.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/10">
                      <FileText className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-secondary to-blue-600 bg-clip-text text-transparent">Our Commitment</h2>
                      <p className="text-muted-foreground">
                        We are committed to handling all feedback and complaints promptly, fairly, and confidentially.
                        Every piece of feedback is valuable and helps us enhance the quality of our services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Your Rights</h2>
                      <p className="text-muted-foreground">
                        You have the right to provide feedback or make a complaint without fear of retribution. We
                        ensure all feedback is handled with respect, confidentiality, and professionalism.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator variant="secondary" />

      {/* Contact Methods Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-muted/20 to-blue-50/50 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-5">
          <div className="absolute w-96 h-96 rounded-full bg-secondary/30 blur-3xl bottom-0 -left-20"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-primary px-5 py-2 rounded-full shadow-md mb-4">
              <Phone className="w-4 h-4" />
              <span>Contact Options</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">Ways to Reach Us</h2>
            <p className="text-lg text-muted-foreground">
              Choose the method that works best for you. We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <Card key={method.title} className="relative group border-primary/10 hover:border-primary transition-colors shadow-md overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                    {method.link ? (
                      <EdenButton asChild variant="outline" className="w-full justify-between border-primary/20 hover:bg-primary/5 hover:border-primary">
                        <Link href={method.link}>{method.value}</Link>
                      </EdenButton>
                    ) : (
                      <p className="font-medium text-primary">{method.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Feedback Form Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-5">
          <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-2xl top-1/3 -right-20"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-primary px-5 py-2 rounded-full shadow-md mb-4">
                <MessageSquare className="w-4 h-4" />
                <span>Your Voice Matters</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">Share Your Feedback</h2>
              <p className="text-lg text-muted-foreground">
                Use the form below to submit your feedback, suggestions, or concerns.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/70 rounded-xl p-6 border border-primary/10 shadow-md">
              <FeedbackForm />
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator variant="secondary" />

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-background to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-5">
          <div className="absolute w-96 h-96 rounded-full bg-secondary/30 blur-3xl -bottom-24 -right-24"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Common Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-white/80 backdrop-blur-sm shadow-sm">
                  <AccordionTrigger className="px-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full bg-${faq.color}/10`}>
                        <faq.icon className={`h-6 w-6 text-${faq.color}`} />
                      </div>
                      <span className="text-xl font-semibold">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <div className="pt-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>


      {/* External Support Section - Redesigned to be more compact */}
      <section className="py-6 md:py-8 bg-muted/10">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 rounded-lg border border-muted">
              <div className="text-left space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">External Support Resources</h3>
                <p className="text-xs text-muted-foreground/80">
                  For additional assistance, these external bodies can help:
                </p>
              </div>
              <div className="flex gap-3">
                <EdenButton asChild size="sm" variant="outline" className="h-8 text-xs border-primary/10 hover:bg-primary/5">
                  <Link href="https://www.ndiscommission.gov.au/participants/complaints">
                    NDIS Commission
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </EdenButton>
                <EdenButton asChild size="sm" variant="outline" className="h-8 text-xs border-primary/10 hover:bg-primary/5">
                  <Link href="https://www.ombudsman.gov.au/">
                    Commonwealth Ombudsman
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </EdenButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator variant="primary" />

      {/* CTA Section */}
      <CTASection
        title="Let's Build Better Services Together"
        description="Your feedback helps us improve. Have questions about our services or want to discuss how we can support you or your loved ones?"
        primaryButtonText="Explore Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Contact Support Team"
        secondaryButtonLink="/contact"
        imageSrc="/png/1.webp"
        mobileImageSrc="/png/2.webp"
        imageAlt="EDEN Ability team member supporting a client"
        footerText="Want to see our available accommodation options? View our"
        footerLinkText="Current Vacancies"
        footerLinkHref="/services/sil-vacancies"
      />
    </>
  )
}

