import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const firstName = String(data.firstName ?? "").trim();
  const email = String(data.email ?? "").trim();

  if (!firstName || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please include your name and a valid email." },
      { status: 400 }
    );
  }

  // TODO: deliver the lead. Wire one of these up with the appropriate env vars:
  //   - Email: Resend / SendGrid / Postmark (send to site.email)
  //   - CRM: HubSpot / Pipedrive / Airtable
  //   - Storage: a database or Google Sheet
  // Until then, the inquiry is logged server-side so nothing silently vanishes.
  console.log("[STRATA] New property inquiry:", JSON.stringify(data));

  return NextResponse.json({ ok: true });
}
