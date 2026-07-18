import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const fromEmail =
  process.env.RESEND_FROM_EMAIL ||
  "The Beauty Tailor <noreply@thebeautytailor.id>"
const recipientEmail =
  process.env.RECIPIENT_EMAIL || "info@thebeautytailor.id"

async function sendEmail(payload: {
  from: string
  to: string
  subject: string
  html: string
}) {
  const { data, error } = await resend.emails.send(payload)

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured (missing RESEND_API_KEY)" },
        { status: 500 }
      )
    }

    const { firstName, lastName, email, phone, service, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send consultation request to target email
    await sendEmail({
      from: fromEmail,
      to: recipientEmail,
      subject: `Permintaan Konsultasi Baru dari ${firstName} ${lastName}`,
      html: `
        <h2>Permintaan Konsultasi Baru</h2>
        <p><strong>Nama:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telepon:</strong> ${phone || "Tidak diisi"}</p>
        <p><strong>Minat Layanan:</strong> ${service || "Tidak disebutkan"}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Send confirmation email to user
    await sendEmail({
      from: fromEmail,
      to: email,
      subject: "Kami Telah Menerima Permintaan Konsultasi Anda",
      html: `
        <h2>Terima Kasih atas Minat Anda!</h2>
        <p>Yth. ${firstName},</p>
        <p>Kami telah menerima permintaan konsultasi Anda dan menghargai minat Anda terhadap layanan tailor kami.</p>
        <p>Kami akan meninjau permintaan Anda dan menghubungi kembali dalam 24–48 jam.</p>
        <p>Sementara menunggu, jika ada pertanyaan mendesak, silakan hubungi kami langsung:</p>
        <p><strong>Telepon:</strong> 021 345 1127</p>
        <p><strong>WhatsApp:</strong> +62 815 1923 6835</p>
        <p><strong>Lokasi:</strong> Jalan Hayam Wuruk No 25, Jakarta Barat</p>
        <p>Salam hormat,<br>Tim The Beauty Tailor</p>
      `,
    })

    return NextResponse.json(
      { message: "Permintaan konsultasi berhasil dikirim" },
      { status: 200 }
    )
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send email"
    console.error("Email sending error:", message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
