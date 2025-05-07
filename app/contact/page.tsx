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
    email: "enquiries@edenability.com.au",
    phone: "1300 033 623",
  },
  {
    title: "Support & Feedback",
    description: "Get help or share your experience",
    icon: HelpCircle,
    href: "/about/feedback",
    email: "support@edenability.com.au",
    phone: "1300 033 624",
  },
  {
    title: "Housing Applications",
    description: "Questions about SDA or SIL applications",
    icon: FileText,
    href: "#contact-form",
    email: "housing@edenability.com.au",
    phone: "1300 033 625",
  },
]

const locations = [
  {
    name: "Sydney Head Office",
    address: "123 Business Street, Sydney NSW 2000",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
    email: "sydney@edenability.com.au",
    phone: "1300 033 623",
  },
  {
    name: "Melbourne Office",
    address: "456 Corporate Road, Melbourne VIC 3000",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
    email: "melbourne@edenability.com.au",
    phone: "1300 033 624",
  },
  {
    name: "Brisbane Office",
    address: "789 Business Avenue, Brisbane QLD 4000",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
    email: "brisbane@edenability.com.au",
    phone: "1300 033 625",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Get in touch with our team to discuss how we can support your journey."
        backgroundPattern="dots"
        alignment="center"
        className="bg-primary/5"
      />

      {/* Contact Methods Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How Can We Help You?</h2>
            <p className="text-lg text-muted-foreground">
              Choose the most convenient way to reach us. Our team is here to support you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <Card key={method.title} className="relative group hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-xl bg-primary/10 mb-4">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <div className="space-y-2 w-full">
                      <Button asChild variant="outline" className="w-full justify-between group-hover:border-primary">
                        <Link href={`mailto:${method.email}`}>
                          <Mail className="w-4 h-4 mr-2" />
                          {method.email}
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full justify-between group-hover:border-primary">
                        <Link href={`tel:${method.phone.replace(/\s/g, "")}`}>
                          <Phone className="w-4 h-4 mr-2" />
                          {method.phone}
                        </Link>
                      </Button>
                      {method.href && (
                        <Button asChild className="w-full">
                          <Link href={method.href}>
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Offices</h2>
            <p className="text-lg text-muted-foreground">Visit us at one of our locations across Australia.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Card key={location.name} className="relative group hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-xl bg-primary/10 mb-4">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
                    <div className="space-y-4 w-full">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground text-left">{location.address}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="text-muted-foreground text-left">{location.hours}</p>
                      </div>
                      <div className="pt-4 space-y-2">
                        <Button asChild variant="outline" className="w-full justify-between group-hover:border-primary">
                          <Link href={`mailto:${location.email}`}>
                            <Mail className="w-4 h-4 mr-2" />
                            {location.email}
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full justify-between group-hover:border-primary">
                          <Link href={`tel:${location.phone.replace(/\s/g, "")}`}>
                            <Phone className="w-4 h-4 mr-2" />
                            {location.phone}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 md:py-16 bg-background scroll-mt-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

