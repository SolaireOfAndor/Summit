import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

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
      organization,
      relationship,
      enquiryType,
      preferredContact,
      bestTimeToContact,
      ndisStatus,
      serviceInterest,
      hearAboutUs,
      urgency,
      specificRequirements,
      message,
    } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      )
    }

    const optionalFields = [
      phone && `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${phone}</td></tr>`,
      organization && `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Organization</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${organization}</td></tr>`,
      relationship && `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Relationship</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${relationship}</td></tr>`,
      enquiryType && `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Enquiry Type</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${enquiryType}</td></tr>`,
      preferredContact && `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Preferred Contact</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${preferredContact}</td></tr>`,
      bestTimeToContact && `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Best Time to Contact</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${bestTimeToContact}</td></tr>`,
      ndisStatus && `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">NDIS Status</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${ndisStatus}</td></tr>`,
      serviceInterest && `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Service Interest</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${serviceInterest}</td></tr>`,
      hearAboutUs && `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">How They Found Us</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${hearAboutUs}</td></tr>`,
      urgency && `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Urgency</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${urgency}</td></tr>`,
      specificRequirements && `<tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Specific Requirements</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${specificRequirements}</td></tr>`,
    ].filter(Boolean).join("")

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fffaf5;border-radius:12px;overflow:hidden;border:1px solid #f0e6d9;">
        <div style="background:#663300;padding:24px 32px;">
          <h1 style="color:#ffffff;margin:0;font-size:22px;">New Contact Form Submission</h1>
          <p style="color:#d1d5db;margin:8px 0 0;font-size:14px;">Summit Website Enquiry</p>
        </div>
        <div style="padding:24px 32px;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;">${name}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:600;color:#663300;border-bottom:1px solid #f0e6d9;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #f0e6d9;"><a href="mailto:${email}" style="color:#ff7e32;">${email}</a></td></tr>
            ${optionalFields}
          </table>
          <div style="background:#fff2e6;border-radius:8px;padding:16px;margin-top:16px;">
            <h3 style="color:#663300;margin:0 0 8px;font-size:15px;">Message</h3>
            <p style="color:#996633;margin:0;white-space:pre-wrap;line-height:1.6;">${message}</p>
          </div>
        </div>
        <div style="background:#f0e6d9;padding:16px 32px;text-align:center;">
          <p style="color:#996633;margin:0;font-size:12px;">This message was sent from the Summit website contact form.</p>
        </div>
      </div>
    `

    const fromEmail = process.env.RESEND_FROM_EMAIL
    const toEmail = process.env.CONTACT_EMAIL

    if (!fromEmail || !toEmail) {
      console.error("Missing email config — RESEND_FROM_EMAIL:", !!fromEmail, "CONTACT_EMAIL:", !!toEmail)
      return NextResponse.json(
        { error: "Email service is not fully configured. Please contact the site administrator." },
        { status: 503 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Enquiry from ${name}${enquiryType ? ` — ${enquiryType}` : ""}`,
      html: emailHtml,
    })

    if (error) {
      console.error("Resend API error:", JSON.stringify(error))
      const userMessage =
        error.message?.includes("domain")
          ? "Email sending domain is not verified. Please contact the site administrator."
          : "Failed to send email. Please try again later."
      return NextResponse.json(
        { error: userMessage },
        { status: 500 }
      )
    }

    console.log("Email sent successfully, id:", data?.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error instanceof Error ? error.message : error)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    )
  }
}
