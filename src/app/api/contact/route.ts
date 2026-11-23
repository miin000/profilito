import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(4000),
  website: z.string().max(300).optional()
});

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return Response.json({ error: "Invalid form submission" }, { status: 400 });
  if (parsed.data.website) return Response.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return Response.json({ error: "Contact service is not configured" }, { status: 503 });

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Profilito contact <onboarding@resend.dev>",
      to,
      replyTo: parsed.data.email,
      subject: `Portfolio message from ${parsed.data.name}`,
      text: `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`
    });
    if (error) return Response.json({ error: "Could not send message" }, { status: 502 });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Could not send message" }, { status: 502 });
  }
}
