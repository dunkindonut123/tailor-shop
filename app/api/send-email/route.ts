import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"

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

    // Create email transporter with dummy email configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "tailor.noreply@gmail.com",
        pass: process.env.EMAIL_PASSWORD || "dummy-password",
      },
    })

    // Email to send consultation request to target email
    const consultationEmail = {
      from: process.env.EMAIL_USER || "tailor.noreply@gmail.com",
      to: process.env.RECIPIENT_EMAIL || "hreggy@gmail.com",
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
    }

    // Confirmation email to user
    const confirmationEmail = {
      from: process.env.EMAIL_USER || "tailor.noreply@gmail.com",
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
    }

    // Send both emails
    await transporter.sendMail(consultationEmail)
    await transporter.sendMail(confirmationEmail)

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
