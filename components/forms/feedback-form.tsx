"use client"

import { useState, useRef, useCallback } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { SummitButton } from "@/components/ui/summit-button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, Send, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }).optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }).optional(),
  phone: z.string()
    .regex(/^[0-9+\-\s()]*$/, { 
      message: "Please enter a valid phone number format." 
    })
    .min(10, {
      message: "Please enter a valid phone number.",
    }).optional(),
  feedbackType: z.string({
    required_error: "Please select a feedback type.",
  }),
  serviceArea: z.string({
    required_error: "Please select a service area.",
  }),
  message: z.string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(1000, {
      message: "Message must not exceed 1000 characters.",
    }),
  anonymous: z.boolean().default(false),
  contactConsent: z.boolean().default(true),
}).refine((data) => {
  // If not anonymous, require contact fields
  if (!data.anonymous) {
    return data.name && data.email && data.phone;
  }
  return true;
}, {
  message: "Please fill in all contact information or submit anonymously",
  path: ["name"], // Show error on name field
});

/**
 * @component FeedbackForm
 * @description A Summit form component for collecting user feedback about services, experiences, and satisfaction. Includes rating options, comment fields, and structured feedback categories. Helps improve service quality through direct user input.
 *
 * @example
 * ```tsx
 * <FeedbackForm />
 * ```
 *
 * @category Form
 * @usedIn Service pages, after-service follow-ups, and client portal
 * @returns {JSX.Element}
 */
export function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState("")
  const resultRef = useRef<HTMLDivElement>(null)

  const scrollToResult = useCallback(() => {
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    }, 100)
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      anonymous: false,
      contactConsent: true,
    },
  })

  const isAnonymous = form.watch("anonymous")

  const handleSendAnother = () => {
    setFormStatus('idle')
    setErrorMessage("")
    setCharCount(0)
    form.reset()
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setFormStatus('idle')
    setErrorMessage("")
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send feedback.")
      }

      setFormStatus('success')
      scrollToResult()
      form.reset()
      setCharCount(0)
    } catch (error) {
      const msg = error instanceof Error ? error.message : "Something went wrong. Please try again later."
      setFormStatus('error')
      setErrorMessage(msg)
      scrollToResult()
    } finally {
      setIsSubmitting(false)
    }
  }

  if (formStatus === 'success') {
    return (
      <div ref={resultRef} className="flex flex-col items-center text-center py-10 px-6 space-y-6">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-[hsl(var(--heading))]">Feedback Received!</h3>
          <p className="text-[hsl(var(--body))] max-w-md">
            Thank you for your feedback. We take every submission seriously and will review it carefully.
          </p>
        </div>
        <SummitButton
          type="button"
          variant="outline"
          onClick={handleSendAnother}
          className="mt-4"
          aria-label="Submit more feedback"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Submit More Feedback
        </SummitButton>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6"
        aria-label="Feedback form"
      >
        <FormField
          control={form.control}
          name="anonymous"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange}
                  aria-label="Submit anonymously"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Submit Anonymously</FormLabel>
                <FormDescription>
                  Check this box if you prefer to remain anonymous. Note: We won't be able to follow up directly.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        {/* Contact Information Section - Always render but conditionally show/hide */}
        <div className={cn(
          "space-y-6 transition-all duration-200",
          isAnonymous ? "hidden" : "block"
        )}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Full Name <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your full name" 
                    {...field}
                    aria-required="true"
                  />
                </FormControl>
                <FormDescription>
                  Please enter your full name as it appears on official documents.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      {...field}
                      aria-required="true"
                    />
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
                    Phone <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      {...field}
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="feedbackType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Feedback Type <span className="text-destructive">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the type of feedback" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">General Feedback</SelectItem>
                  <SelectItem value="complaint">Complaint</SelectItem>
                  <SelectItem value="suggestion">Suggestion</SelectItem>
                  <SelectItem value="compliment">Compliment</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="serviceArea"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Service Area <span className="text-destructive">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the relevant service area" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="sda">SDA Housing</SelectItem>
                  <SelectItem value="sil">SIL Services</SelectItem>
                  <SelectItem value="sta">Short Term Accommodation</SelectItem>
                  <SelectItem value="support">Support Staff</SelectItem>
                  <SelectItem value="admin">Administrative</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Your Feedback <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please provide details about your feedback..."
                  className="min-h-[150px] resize-y"
                  maxLength={1000}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e)
                    setCharCount(e.target.value.length)
                  }}
                  aria-required="true"
                />
              </FormControl>
              <div className="flex justify-between items-center">
                <FormDescription>
                  Include specific details that will help us understand and address your feedback.
                </FormDescription>
                <span className="text-sm text-muted-foreground">
                  {charCount}/1000
                </span>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact Consent - Always render but conditionally show/hide */}
        <div className={cn(
          "transition-all duration-200",
          isAnonymous ? "hidden" : "block"
        )}>
          <FormField
            control={form.control}
            name="contactConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox 
                    checked={field.value} 
                    onCheckedChange={field.onChange}
                    aria-label="Allow contact permission"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Contact Permission</FormLabel>
                  <FormDescription>
                    Allow us to contact you regarding your feedback if necessary.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>

        <SummitButton
          type="submit"
          className="w-full"
          disabled={isSubmitting}
          aria-label={isSubmitting ? "Sending feedback..." : "Send feedback"}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⏳</span>
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Feedback
            </>
          )}
        </SummitButton>

        {formStatus === 'error' && (
          <div ref={resultRef}>
            <Alert variant="destructive" className="animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {errorMessage || "There was an error sending your feedback. Please try again."}
              </AlertDescription>
            </Alert>
          </div>
        )}
      </form>
    </Form>
  )
}

