// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    // Configure Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_HOST,        // e.g., smtp.zoho.com
      port: Number(process.env.ZOHO_PORT), // 465 (SSL) or 587 (TLS)
      secure: process.env.ZOHO_PORT === "465", // true for 465, false for 587
      auth: {
        user: process.env.ZOHO_EMAIL,    // your Zoho email
        pass: process.env.ZOHO_PASSWORD, // app-specific password
      },
    });

    const mailOptions = {
      from: process.env.ZOHO_EMAIL, // Must match Zoho account
      to: process.env.ZOHO_EMAIL,   // Where you want to receive the form submissions
      subject: `New contact form submission from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
      html: `<p>Message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
      replyTo: email, // So you can reply directly to the sender
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
