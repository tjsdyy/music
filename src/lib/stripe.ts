import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-03-31.basil",
});

export function getPriceId(planId: string, cycle: "monthly" | "yearly") {
  if (planId === "starter") return process.env.STRIPE_PRICE_STARTER_MONTHLY;
  if (planId === "pro" && cycle === "monthly") return process.env.STRIPE_PRICE_PRO_MONTHLY;
  if (planId === "pro" && cycle === "yearly") return process.env.STRIPE_PRICE_PRO_YEARLY;
  return null;
}
