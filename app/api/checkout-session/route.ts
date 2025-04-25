import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});

export async function POST(req: NextRequest) {
  const id = (await req.json()) as { sessionId: string };

  if (!id) {
    return NextResponse.json(
      { error: "No session_id provided" },
      { status: 400 },
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(id.sessionId);

    return NextResponse.json({ payment_status: session.payment_status });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { error: "Failed to retrieve session" },
      { status: 500 },
    );
  }
}
