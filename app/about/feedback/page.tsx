import { PageHero } from "@/components/sections/page-hero"
import { FeedbackForm } from "@/components/forms/feedback-form"
import { Card, CardContent } from "@/components/ui/card"
import { SummitButton } from "@/components/ui/summit-button"
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
    value: "Eliot@summitsda.com.au",
    link: "mailto:Eliot@summitsda.com.au",
  },
  {
    title: "Phone",
    description: "Speak with our team directly",
    icon: Phone,
    value: "0450 016 874",
    link: "tel:0450016874",
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
    <main>
      {/* Page Hero */}
      <PageHero
        title="Feedback & Complaints"
        description="Your voice matters to us. Share your experiences, suggestions, or concerns to help us improve our services and better support you."
        heroImage={{
          src: "/header/page-header-8.webp",
          alt: "Summit feedback and complaints page"
        }}
      />

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--heading))] mb-6">
              We Value Your Feedback
            </h2>
            <p className="text-lg text-[hsl(var(--body))] mb-8 leading-relaxed">
              At Summit, we're committed to providing exceptional support and continuously improving our services. 
              Your feedback helps us understand what we're doing well and where we can do better. Whether you have 
              a compliment, suggestion, or concern, we want to hear from you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Share Your Experience</h3>
                <p className="text-sm text-[hsl(var(--body))]">Tell us about your experience with our services</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Formal Complaints</h3>
                <p className="text-sm text-[hsl(var(--body))]">Submit formal complaints through our structured process</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <h3 className="font-semibold text-[hsl(var(--heading))] mb-2">Confidential & Secure</h3>
                <p className="text-sm text-[hsl(var(--body))]">Your feedback is handled confidentially and securely</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Feedback Form Section */}
      <section className="py-16 lg:py-24 bg-[hsl(var(--light-orange))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--heading))] mb-4">
                Submit Your Feedback
              </h2>
              <p className="text-lg text-[hsl(var(--body))]">
                Use the form below to share your feedback with us. All fields marked with * are required unless submitting anonymously.
              </p>
            </div>
            
            <Card className="bg-[hsl(var(--pure-white))] shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
              <CardContent className="p-8">
                <FeedbackForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* Contact Methods Section */}
      <section className="py-16 lg:py-24 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--heading))] mb-4">
                Other Ways to Reach Us
              </h2>
              <p className="text-lg text-[hsl(var(--body))]">
                Prefer to contact us directly? Here are alternative ways to get in touch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Card key={index} className="text-center hover:shadow-[0_8px_32px_0_hsl(var(--orange-shadow))] transition-all duration-300 bg-[hsl(var(--pure-white))]">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-[hsl(var(--primary))]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-2">
                        {method.title}
                      </h3>
                      <p className="text-[hsl(var(--body))] mb-4">
                        {method.description}
                      </p>
                      {method.link ? (
                        <Link href={method.link} className="inline-block">
                          <SummitButton variant="outline" className="group">
                            {method.value}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </SummitButton>
                        </Link>
                      ) : (
                        <p className="font-semibold text-[hsl(var(--primary))]">
                          {method.value}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-[hsl(var(--lighter-orange))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--heading))] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[hsl(var(--body))]">
                Find answers to common questions about our feedback and complaints process.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => {
                const IconComponent = faq.icon
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-[hsl(var(--pure-white))] rounded-lg px-6 border-0 shadow-[0_2px_8px_0_hsl(var(--orange-shadow))]"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center text-left">
                        <div className="w-10 h-10 bg-[hsl(var(--primary-transparent))] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-[hsl(var(--primary))]" />
                        </div>
                        <span className="text-lg font-semibold text-[hsl(var(--heading))]">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-14">
                      <p className="text-[hsl(var(--body))] leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* External Resources Section */}
      <section className="py-16 lg:py-24 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[hsl(var(--heading))] mb-6">
              External Support
            </h2>
            <p className="text-lg text-[hsl(var(--body))] mb-8">
              If you feel your concerns haven't been adequately addressed, you have the right to escalate 
              your complaint to external bodies that oversee disability services.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="text-left bg-[hsl(var(--pure-white))] shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-3">
                    NDIS Quality and Safeguards Commission
                  </h3>
                  <p className="text-[hsl(var(--body))] mb-4">
                    An independent body that regulates NDIS providers and handles complaints about NDIS services.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Phone:</strong> 1800 035 544</p>
                    <p><strong>Website:</strong> <Link href="https://www.ndiscommission.gov.au" className="text-[hsl(var(--primary))] hover:underline" target="_blank" rel="noopener noreferrer">ndiscommission.gov.au</Link></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-left bg-[hsl(var(--pure-white))] shadow-[0_4px_24px_0_hsl(var(--orange-shadow))]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[hsl(var(--heading))] mb-3">
                    Disability Advocacy Service
                  </h3>
                  <p className="text-[hsl(var(--body))] mb-4">
                    Independent advocacy services can help you understand your rights and support you through the complaints process.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Phone:</strong> Contact your local advocacy service</p>
                    <p><strong>Find services:</strong> <Link href="https://www.dss.gov.au" className="text-[hsl(var(--primary))] hover:underline" target="_blank" rel="noopener noreferrer">dss.gov.au</Link></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need More Information?"
        description="If you have questions about our feedback process or need assistance with anything else, we're here to help."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Our Services"
        secondaryButtonLink="/learn"
      />
    </main>
  )
}

