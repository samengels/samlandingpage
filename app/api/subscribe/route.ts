import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";

// Reusable email regex for basic validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Ensure credentials are available
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    const supabase = getSupabaseAdmin();

    // Try to insert. If unique violation we treat as success.
    const { error } = await supabase.from("email_subscribers").insert({ email });

    if (error && !error.message.includes("duplicate")) {
      console.error("Supabase insert error", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // Send a welcome email (fire and forget)
    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: email,
          subject: "Welcome to the list!",
          html: `<p>Thanks for signing up. We'll keep you posted!` +
            `<br/>If you did not sign up, you can ignore this email.</p>`,
        });
      } catch (err) {
        console.error("Resend error", err);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unhandled subscribe error", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
} 