// src/app/api/contact/route.ts (or wherever your route is)
import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    // Load template file
    const templatePath = path.join(process.cwd(), "src", "emails", "contact-form.html")
    let html = fs.readFileSync(templatePath, "utf-8")

    // Replace placeholders with real data
    html = html
      .replace("{{name}}", name ?? "")
      .replace("{{email}}", email ?? "")
      .replace("{{phone}}", phone ?? "")
      .replace("{{message}}", message ?? "")

    // Env vars (rename to Resend-friendly names)
    const RESEND_API_KEY = process.env.RESEND_TOKEN!
    const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECIEVER! // keeping your existing var name
    const EMAIL_FROM = process.env.EMAIL_USER! // e.g. "Your Site <noreply@yourdomain.com>"

   
    if (!RESEND_API_KEY || !SITE_MAIL_RECEIVER || !EMAIL_FROM) {
      return NextResponse.json(
        { success: false, error: "Missing RESEND_API_KEY, SITE_MAIL_RECIEVER or EMAIL_FROM" },
        { status: 500 }
      )
    }

    const resend = new Resend(RESEND_API_KEY)

    const subject = `[CONTACT-FORM] - ${name}`

    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: SITE_MAIL_RECEIVER,
      subject,
      html,
      // Resend uses snake_case for reply_to
      replyTo: email,
    })

    if (error) {
      
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err ?? "Unexpected error" },
      { status: 500 }
    )
  }
}
