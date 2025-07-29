"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { SummitButton } from "@/components/ui/summit-button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, Settings, Zap, ToggleLeft, ToggleRight } from "lucide-react"
import React from "react"

// Unified form schema that handles both simple and detailed modes
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  organization: z.string().optional(),
  relationship: z.string().optional(),
  enquiryType: z.string().optional(),
  preferredContact: z.string().optional(),
  bestTimeToContact: z.string().optional(),
  ndisStatus: z.string().optional(),
  serviceInterest: z.string().optional(),
  hearAboutUs: z.string().optional(),
  urgency: z.string().optional(),
  specificRequirements: z.string().optional(),
  message: z.string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must not exceed 1000 characters." }),
})

/**
 * @component ContactForm
 * @description A comprehensive Summit contact form component that collects user information and enquiry details. Features validation, error handling, submission feedback, and a simple/easy mode toggle for better user experience. Used for general enquiries, support requests, and NDIS service information.
 *
 * @example
 * ```tsx
 * <ContactForm />
 * ```
 *
 * @category Form
 * @usedIn Contact page, service enquiry sections, and support pages
 * @returns {JSX.Element}
 */
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSimpleMode, setIsSimpleMode] = useState(true)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      relationship: "",
      enquiryType: "",
      preferredContact: "",
      bestTimeToContact: "",
      ndisStatus: "",
      serviceInterest: "",
      hearAboutUs: "",
      urgency: "",
      specificRequirements: "",
      message: "",
    },
  })

  // Reset form status when form values change
  React.useEffect(() => {
    if (formStatus !== 'idle') {
      const subscription = form.watch(() => setFormStatus('idle'))
      return () => subscription.unsubscribe()
    }
  }, [form, formStatus])

  // Handle mode toggle and reset form
  const handleModeToggle = () => {
    setIsSimpleMode(!isSimpleMode)
    form.reset({
      name: "",
      email: "",
      phone: "",
      organization: "",
      relationship: "",
      enquiryType: "",
      preferredContact: "",
      bestTimeToContact: "",
      ndisStatus: "",
      serviceInterest: "",
      hearAboutUs: "",
      urgency: "",
      specificRequirements: "",
      message: "",
    })
    setFormStatus('idle')
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setFormStatus('idle')
    
    // Additional validation for simple mode
    if (isSimpleMode && values.message.length > 500) {
      form.setError("message", {
        type: "manual",
        message: "Message must not exceed 500 characters in simple mode."
      })
      setIsSubmitting(false)
      return
    }
    
    try {
      // Here you would typically send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setFormStatus('success')
      toast.success("Message sent successfully! We'll be in touch soon.", {
        duration: 5000,
      })
      form.reset({
        name: "",
        email: "",
        phone: "",
        organization: "",
        relationship: "",
        enquiryType: "",
        preferredContact: "",
        bestTimeToContact: "",
        ndisStatus: "",
        serviceInterest: "",
        hearAboutUs: "",
        urgency: "",
        specificRequirements: "",
        message: "",
      })
    } catch (error) {
      setFormStatus('error')
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Mode Toggle */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-blue-50 rounded-lg border border-primary/10">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-full transition-colors ${isSimpleMode ? 'bg-green-100' : 'bg-blue-100'}`}>
            {isSimpleMode ? (
              <Zap className="w-4 h-4 text-green-600" />
            ) : (
              <Settings className="w-4 h-4 text-blue-600" />
            )}
          </div>
          <div>
            <h3 className="font-medium text-sm">
              {isSimpleMode ? 'Simple Mode' : 'Detailed Mode'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {isSimpleMode 
                ? 'Quick and easy form with essential fields only' 
                : 'Complete form with additional context options'
              }
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleModeToggle}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-white border border-primary/20 rounded-md hover:bg-primary/5 transition-colors"
          aria-label={`Switch to ${isSimpleMode ? 'detailed' : 'simple'} mode`}
        >
          {isSimpleMode ? (
            <>
              <ToggleRight className="w-4 h-4 text-green-600" />
              <span className="text-green-600 font-medium">Simple</span>
            </>
          ) : (
            <>
              <ToggleLeft className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-medium">Detailed</span>
            </>
          )}
        </button>
      </div>

      {formStatus === 'success' && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-700">
            Your message has been sent successfully. We'll get back to you soon.
          </AlertDescription>
        </Alert>
      )}

      {formStatus === 'error' && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            There was an error sending your message. Please try again.
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-6"
          aria-label={`Contact form - ${isSimpleMode ? 'Simple' : 'Detailed'} mode`}
        >
          {/* Essential Information */}
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-lg text-primary mb-2">Essential Information</h3>
              <p className="text-sm text-muted-foreground">Required details to get in touch with you</p>
            </div>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className={isSimpleMode ? "space-y-6" : "grid sm:grid-cols-2 gap-6"}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Phone {isSimpleMode && <span className="text-muted-foreground">(Optional)</span>}
                    </FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    {isSimpleMode && (
                      <FormDescription>We can call you back if needed</FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Additional Context - Only in Detailed Mode */}
          {!isSimpleMode && (
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg text-blue-600 mb-2">Additional Context</h3>
                <p className="text-sm text-muted-foreground">Optional details to help us assist you better</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization/Company <span className="text-muted-foreground">(Optional)</span></FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., ABC Care Services" {...field} />
                      </FormControl>
                      <FormDescription>If contacting on behalf of an organization</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="relationship"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Relationship to Person with Disability <span className="text-muted-foreground">(Optional)</span></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select relationship" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="self">Self</SelectItem>
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="family">Family Member</SelectItem>
                          <SelectItem value="carer">Carer/Support Worker</SelectItem>
                          <SelectItem value="guardian">Guardian</SelectItem>
                          <SelectItem value="advocate">Advocate</SelectItem>
                          <SelectItem value="professional">Professional/Service Provider</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="preferredContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Contact Method <span className="text-muted-foreground">(Optional)</span></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="How would you like us to contact you?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="text">Text Message</SelectItem>
                          <SelectItem value="either">Either Email or Phone</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bestTimeToContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Best Time to Contact <span className="text-muted-foreground">(Optional)</span></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="When are you usually available?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                          <SelectItem value="evening">Evening (5pm - 7pm)</SelectItem>
                          <SelectItem value="weekends">Weekends</SelectItem>
                          <SelectItem value="anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="enquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enquiry Type <span className="text-muted-foreground">(Optional)</span></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="What is your enquiry about?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Enquiry</SelectItem>
                          <SelectItem value="sda">SDA Housing</SelectItem>
                          <SelectItem value="sil">SIL Services</SelectItem>
                          <SelectItem value="mta">Medium Term Accommodation</SelectItem>
                          <SelectItem value="sta">Short Term Accommodation</SelectItem>
                          <SelectItem value="support">Support & Feedback</SelectItem>
                          <SelectItem value="application">Housing Application</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="urgency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Urgency Level <span className="text-muted-foreground">(Optional)</span></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="How urgent is your enquiry?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="low">Low - General inquiry</SelectItem>
                          <SelectItem value="medium">Medium - Need response within a week</SelectItem>
                          <SelectItem value="high">High - Need response within 2-3 days</SelectItem>
                          <SelectItem value="urgent">Urgent - Need immediate attention</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="ndisStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NDIS Plan Status <span className="text-muted-foreground">(Optional)</span></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="What's your NDIS status?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="approved">Have approved NDIS plan</SelectItem>
                          <SelectItem value="pending">NDIS application pending</SelectItem>
                          <SelectItem value="reviewing">Reviewing NDIS options</SelectItem>
                          <SelectItem value="not-eligible">Not eligible for NDIS</SelectItem>
                          <SelectItem value="unknown">Unsure about NDIS</SelectItem>
                          <SelectItem value="other">Other funding source</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hearAboutUs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us? <span className="text-muted-foreground">(Optional)</span></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="How did you find Summit?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="website">Website/Online</SelectItem>
                          <SelectItem value="referral">Referral from friend/family</SelectItem>
                          <SelectItem value="professional">Healthcare professional</SelectItem>
                          <SelectItem value="ndis">NDIS/Support coordinator</SelectItem>
                          <SelectItem value="social-media">Social Media</SelectItem>
                          <SelectItem value="event">Community event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="specificRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specific Requirements or Accommodations <span className="text-muted-foreground">(Optional)</span></FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about any specific accessibility needs, communication preferences, or special requirements..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Help us prepare for your specific needs and provide the best possible service
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {/* Message Section */}
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg text-green-600 mb-2">Your Message</h3>
              <p className="text-sm text-muted-foreground">Tell us how we can help you</p>
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={isSimpleMode 
                        ? "Tell us briefly how we can help you..." 
                        : "Please provide details about your enquiry, questions you have, or how we can assist you..."
                      }
                      className={isSimpleMode ? "min-h-[100px]" : "min-h-[120px]"}
                      {...field}
                    />
                  </FormControl>
                  {isSimpleMode && (
                    <FormDescription>
                      Keep it brief - you can share more details when we contact you
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <SummitButton 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
            aria-label={isSubmitting ? "Sending message..." : "Send message"}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Sending...
              </>
            ) : (
              <>
                {isSimpleMode ? "Send Quick Message" : "Send Detailed Message"}
                {isSimpleMode && <Zap className="ml-2 h-4 w-4" />}
              </>
            )}
          </SummitButton>

          {isSimpleMode && (
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Need more options? 
                <button
                  type="button"
                  onClick={handleModeToggle}
                  className="ml-1 text-primary hover:underline"
                >
                  Switch to detailed mode
                </button>
              </p>
            </div>
          )}
        </form>
      </Form>
    </div>
  )
}

