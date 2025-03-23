import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  // Load template file
  const templatePath = path.join(
    process.cwd(),
    "src",
    "emails",
    "contact-form.html"
  );
  let html = fs.readFileSync(templatePath, "utf-8");

  // Replace placeholders with real data
  html = html
    .replace("{{name}}", name)
    .replace("{{email}}", email)
    .replace("{{phone}}", phone)
    .replace("{{message}}", message);

  // Data from env
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY!;
  const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER!;
  const EMAIL_USER = process.env.EMAIL_USER!;

  // Email service
    // Use SendGrid transport
    const transporter = nodemailer.createTransport(
      sgTransport({
        apiKey: SENDGRID_API_KEY,
      })
    );

  await transporter.sendMail({
    from: EMAIL_USER,
    to: SITE_MAIL_RECIEVER,
    replyTo: email,
    subject: `[CONTACT-FORM] - ${name}`,
    html,
  });

  return NextResponse.json({ success: true });
}
