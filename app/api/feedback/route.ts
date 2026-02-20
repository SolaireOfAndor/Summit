import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const feedbackTypeLabels: Record<string, string> = {
  general: "General Feedback",
  complaint: "Complaint",
  suggestion: "Suggestion",
  compliment: "Compliment",
}

const serviceAreaLabels: Record<string, string> = {
  sda: "SDA Housing",
  sil: "SIL Services",
  sta: "Short Term Accommodation",
  support: "Support Staff",
  admin: "Administrative",
  other: "Other",
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables")
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the site administrator." },
        { status: 503 }
      )
    }

    const resend = new Resend(apiKey)
    const body = await request.json()

    const {
      name,
      email,
      phone,
      feedbackType,
      serviceArea,
      message,
      anonymous,
      contactConsent,
    } = body

    if (!feedbackType || !serviceArea || !message) {
      return NextResponse.json(
        { error: "Feedback type, service area, and message are required." },
        { status: 400 }
      )
    }

    if (!anonymous && (!name || !email || !phone)) {
      return NextResponse.json(
        { error: "Contact information is required for non-anonymous submissions." },
        { status: 400 }
      )
    }

    const feedbackLabel = feedbackTypeLabels[feedbackType] || feedbackType
    const serviceLabel = serviceAreaLabels[serviceArea] || serviceArea

    const urgencyColor = feedbackType === "complaint" ? "#dc2626" : feedbackType === "compliment" ? "#16a34a" : "#ff7e32"

    const contactSection = anonymous
      ? `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Submitted By</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;"><em>Anonymous</em></td></tr>`
      : `
        <tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${name}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;"><a href="mailto:${email}" style="color:#ff7e32;">${email}</a></td></tr>
        <tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${phone}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Contact Permission</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${contactConsent ? "Yes" : "No"}</td></tr>
      `

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fffaf5;border-radius:12px;overflow:hidden;border:1px solid #f0e6d9;">
        <div style="background:#663300;padding:24px 32px;">
          <h1 style="color:#ffffff;margin:0;font-size:22px;">New ${feedbackLabel}</h1>
          <p style="color:#d1d5db;margin:8px 0 0;font-size:14px;">Summit Website — Feedback &amp; Complaints</p>
        </div>
        <div style="padding:24px 32px;">
          <div style="display:inline-block;background:${urgencyColor};color:#ffffff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:600;margin-bottom:16px;">${feedbackLabel}</div>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            ${contactSection}
            <tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Service Area</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${serviceLabel}</td></tr>
          </table>
          <div style="background:#fff2e6;border-radius:8px;padding:16px;margin-top:16px;">
            <h3 style="color:#663300;margin:0 0 8px;font-size:15px;">Feedback Details</h3>
            <p style="color:#996633;margin:0;white-space:pre-wrap;line-height:1.6;">${message}</p>
          </div>
        </div>
        <div style="background:#f0e6d9;padding:16px 32px;text-align:center;">
          <p style="color:#996633;margin:0;font-size:12px;">This feedback was submitted from the Summit website.</p>
        </div>
      </div>
    `

    const fromEmail = process.env.RESEND_FROM_EMAIL
    const toEmail = process.env.FEEDBACK_EMAIL || process.env.CONTACT_EMAIL

    if (!fromEmail || !toEmail) {
      console.error("Missing email config — RESEND_FROM_EMAIL:", !!fromEmail, "FEEDBACK_EMAIL/CONTACT_EMAIL:", !!toEmail)
      return NextResponse.json(
        { error: "Email service is not fully configured. Please contact the site administrator." },
        { status: 503 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: anonymous ? undefined : email,
      subject: `[${feedbackLabel}] ${serviceLabel}${!anonymous ? ` — from ${name}` : ""}`,
      html: emailHtml,
    })

    if (error) {
      console.error("Resend API error:", JSON.stringify(error))
      const userMessage =
        error.message?.includes("domain")
          ? "Email sending domain is not verified. Please contact the site administrator."
          : "Failed to send feedback. Please try again later."
      return NextResponse.json(
        { error: userMessage },
        { status: 500 }
      )
    }

    console.log("Feedback email sent successfully, id:", data?.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Feedback form error:", error instanceof Error ? error.message : error)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    )
  }
}
