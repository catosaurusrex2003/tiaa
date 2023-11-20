"use client";

import { loadStripe } from "@stripe/stripe-js";
import PriceInfo from "./PriceInfo";

export default function Pricing() {
  const info = [
    {
      currency: "INR",
      name: "Basic",
      price: 50000,
      quantity: 1,
    },
    {
      currency: "INR",
      name: "Standard",
      price: 150000,
      quantity: 1,
    },
    {
      currency: "INR",
      name: "Premium",
      price: 300000,
      quantity: 1,
    },
  ];

  const redirectToCheckout = async (information: any) => {
    try {
      const stripe = await loadStripe(
        `${process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY}`
      );

      if (!stripe) throw new Error("Stripe failed to initialize.");

      const checkoutResponse = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          credits: information,
        }),
      });

      const { sessionId } = await checkoutResponse.json();
      const stripeError = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        console.error(stripeError);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section className="my-12 ml-12">
        <h6 className="text-[#6185ED]"># Mind_Matters</h6>
        <h1 className="text-4xl py-2.5 font-semibold">Continue Talking!</h1>
      </section>
      <section className="flex flex-wrap gap-4">
        <PriceInfo
          pay={() => redirectToCheckout(info[0])}
          type="Basic"
          cost={500}
          content="Chat for Less!"
          benifits="100 Credits"
        />
        <PriceInfo
          pay={() => redirectToCheckout(info[1])}
          type="Standard"
          cost={1500}
          content="Connect with Confidence!"
          benifits="1000 Credits"
          more_benifits="Endless Banter"
        />
        <PriceInfo
          pay={() => redirectToCheckout(info[2])}
          type="Premium"
          cost={3000}
          content="Unleash Your Conversations!"
          benifits="10000 Credits"
          more_benifits="Endless Banter"
          most_benifits="Chat in Pixels Perpetually"
        />
      </section>
    </>
  );
}
