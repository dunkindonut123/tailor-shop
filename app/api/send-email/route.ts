import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const fromEmail =
  process.env.RESEND_FROM_EMAIL ||
  "The Beauty Tailor <noreply@thebeautytailor.id>"
const recipientEmail =
  process.env.RECIPIENT_EMAIL || "info@thebeautytailor.id"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, service, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send consultation request to target email
    await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      subject: `New Consultation Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "We Received Your Consultation Request",
      html: `
        <h2>Thank You for Your Interest!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your consultation request and appreciate your interest in our tailoring services.</p>
        <p>We will review your request and get back to you within 24-48 hours.</p>
        <p>In the meantime, if you have any urgent questions, feel free to contact us directly:</p>
        <p><strong>Phone:</strong> 021 345 1127</p>
        <p><strong>WhatsApp:</strong> +62 815 1923 6835</p>
        <p><strong>Location:</strong> Jalan Hayam Wuruk No 25, Jakarta Barat</p>
        <p>Best regards,<br>The Beauty Tailor Team</p>
      `,
    })

    return NextResponse.json(
      { message: "Consultation request sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
