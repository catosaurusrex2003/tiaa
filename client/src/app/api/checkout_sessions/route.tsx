import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import stripe from "@/config/stripe";

export async function POST(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const { credits } = await req.json();
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: credits.currency,
            product_data: {
              name: credits.name,
            },
            unit_amount: credits.price,
          },
          quantity: credits.quantity,
        },
      ],
      mode: "payment",
      success_url: `${headersList.get("origin")}/community`,
      cancel_url: `${headersList.get("origin")}/pricing`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error creating checkout session" });
  }
}
