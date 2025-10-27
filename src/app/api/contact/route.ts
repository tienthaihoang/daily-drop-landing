import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, companyName, email, department, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Full name, email, and message are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "funnel-team@yourdomain.com",
      subject: `New Contact Form: ${fullName}${
        companyName ? ` from ${companyName}` : ""
      }`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">
              New Contact Form Submission
            </h1>
          </div>
          
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 140px;">Full Name:</td>
                  <td style="padding: 8px 0; color: #111827;">${fullName}</td>
                </tr>
                ${
                  companyName
                    ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Company:</td>
                  <td style="padding: 8px 0; color: #111827;">${companyName}</td>
                </tr>
                `
                    : ""
                }
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0; color: #111827;">
                    <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${
                  department
                    ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Department/Role:</td>
                  <td style="padding: 8px 0; color: #111827;">${department}</td>
                </tr>
                `
                    : ""
                }
              </table>
            </div>
            
            <div style="margin-top: 20px;">
              <h3 style="color: #374151; margin-bottom: 12px; font-size: 16px; font-weight: 600;">Message / Project Brief:</h3>
              <div style="background: #f9fafb; padding: 16px; border-left: 4px solid #7c3aed; border-radius: 4px;">
                <p style="color: #111827; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0; text-align: center;">
                📧 This email was sent from the Daily Drop contact form<br/>
                🕐 ${new Date().toLocaleString("en-US", {
                  dateStyle: "full",
                  timeStyle: "short",
                })}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Full Name: ${fullName}
${companyName ? `Company: ${companyName}\n` : ""}Email: ${email}
${department ? `Department/Role: ${department}\n` : ""}
Message / Project Brief:
${message}

---
Sent from Daily Drop contact form
${new Date().toLocaleString()}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: data?.id,
    });
  } catch (error: unknown) {
    console.error("Contact form error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
