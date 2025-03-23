import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
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
  const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
  const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
  const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
  const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

  // Email service
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: SMTP_SERVER_HOST,
    port: 587,
    secure: true,
    auth: {
      user: SMTP_SERVER_USERNAME,
      pass: SMTP_SERVER_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER!,
    to: SITE_MAIL_RECIEVER,
    replyTo: email,
    subject: `[CONTACT-FORM] - ${name}`,
    html,
  });

  return NextResponse.json({ success: true });
}
