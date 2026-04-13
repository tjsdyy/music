import Stripe from "stripe";

export function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY 未配置");
  }
  return new Stripe(secretKey, {
    apiVersion: "2025-08-27.basil",
  });
}

export function getPriceId(planId: string, cycle: "monthly" | "yearly") {
  if (planId === "starter") return process.env.STRIPE_PRICE_STARTER_MONTHLY;
  if (planId === "pro" && cycle === "monthly") return process.env.STRIPE_PRICE_PRO_MONTHLY;
  if (planId === "pro" && cycle === "yearly") return process.env.STRIPE_PRICE_PRO_YEARLY;
  return null;
}
