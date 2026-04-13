import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { syncSubscription } from "@/lib/subscription";

function getWebhookSecret() {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    throw new Error("STRIPE_WEBHOOK_SECRET 未配置");
  }
  return secret;
}

export async function POST(request: Request) {
  try {
    const stripe = getStripeClient();
    const secret = getWebhookSecret();
    const body = await request.text();
    const signature = (await headers()).get("stripe-signature");

    if (!signature) {
      return NextResponse.json({ error: "缺少 stripe-signature" }, { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(body, signature, secret);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        await syncSubscription({
          source: event.type,
          customerId: typeof session.customer === "string" ? session.customer : undefined,
          subscriptionId: typeof session.subscription === "string" ? session.subscription : undefined,
          status: session.payment_status,
          planId: session.metadata?.planId,
          cycle: session.metadata?.cycle,
          userId: session.metadata?.userId,
        });
        break;
      }
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const periodStart = (subscription as { current_period_start?: number }).current_period_start;
        const periodEnd = (subscription as { current_period_end?: number }).current_period_end;
        await syncSubscription({
          source: event.type,
          customerId: typeof subscription.customer === "string" ? subscription.customer : undefined,
          subscriptionId: subscription.id,
          status: subscription.status,
          periodStart: periodStart ?? null,
          periodEnd: periodEnd ?? null,
        });
        break;
      }
      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionId = (invoice as { subscription?: string }).subscription;
        await syncSubscription({
          source: event.type,
          customerId: typeof invoice.customer === "string" ? invoice.customer : undefined,
          subscriptionId: typeof subscriptionId === "string" ? subscriptionId : undefined,
          status: invoice.status ?? undefined,
        });
        break;
      }
      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "webhook 处理失败";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

