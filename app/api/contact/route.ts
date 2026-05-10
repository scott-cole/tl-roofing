import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `.trim(),
      html: `
<h2>New Contact Form Submission</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px">
  <tr><td style="padding:8px;font-weight:bold">Name:</td><td style="padding:8px">${name}</td></tr>
  <tr><td style="padding:8px;font-weight:bold">Email:</td><td style="padding:8px">${email}</td></tr>
  <tr><td style="padding:8px;font-weight:bold">Phone:</td><td style="padding:8px">${phone || "Not provided"}</td></tr>
</table>
<h3>Message:</h3>
<p style="white-space:pre-wrap">${message}</p>
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
