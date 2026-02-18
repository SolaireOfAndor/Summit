import type { Metadata } from "next"
import { ContactForm } from "@/components/forms/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SummitButton } from "@/components/ui/summit-button"
import { Mail, Phone, Clock, Users, HeartHandshake, MessageSquare, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Summit | Get In Touch With Our Disability Support Team",
  description: "Contact Summit for specialist disability accommodation, support services, and NDIS enquiries. Professional support team ready to help you achieve your goals.",
  openGraph: {
    title: "Contact Summit | Get In Touch With Our Disability Support Team",
    description: "Contact Summit for specialist disability accommodation, support services, and NDIS enquiries. Professional support team ready to help you achieve your goals.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-primary/5 pt-20">
      {/* Contact Form Section */}
      <section className="py-12 md:py-16">
        <div className="container px-8 sm:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white bg-primary px-5 py-2 rounded-full shadow-md">
                <MessageSquare className="w-4 h-4" />
                <span>Contact Summit</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                Get In Touch Today
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Ready to get started? Our dedicated support team is here to help you find the right disability services and accommodation solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg border border-primary/10 bg-[hsl(var(--pure-white))]/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Contact Form
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Choose between simple or detailed mode to share as much or as little information as you'd like
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-md border border-primary/10 bg-[hsl(var(--pure-white))]/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Monday - Friday</span>
                      <span className="text-sm text-muted-foreground">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Saturday</span>
                      <span className="text-sm text-muted-foreground">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Sunday</span>
                      <span className="text-sm text-muted-foreground">Closed</span>
                    </div>
                    <div className="pt-3 border-t border-primary/10">
                      <p className="text-xs text-muted-foreground">
                        Emergency support available 24/7 for existing clients
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md border border-primary/10 bg-[hsl(var(--pure-white))]/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Quick Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Phone</p>
                      <a href="tel:0450016874" className="text-sm text-primary hover:underline">
                        0450 016 874
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Email</p>
                      <a href="mailto:Eliot@summitsda.com.au" className="text-sm text-primary hover:underline break-all">
                        Eliot@summitsda.com.au
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md border border-primary/10 bg-gradient-to-br from-primary/5 to-[hsl(var(--light-orange))]">
                  <CardContent className="p-6">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                        <HeartHandshake className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-sm">Need Immediate Support?</h3>
                      <p className="text-xs text-muted-foreground">
                        Our support team is ready to help you with any urgent questions or concerns.
                      </p>
                      <SummitButton asChild size="sm" className="w-full">
                        <a href="tel:0450016874">
                          Call Now
                        </a>
                      </SummitButton>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

