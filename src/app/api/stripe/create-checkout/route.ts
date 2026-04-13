import { NextResponse } from "next/server";
import { getPriceId, stripe } from "@/lib/stripe";
import type { BillingCycle } from "@/types/pricing";

type CheckoutBody = {
  planId?: string;
  cycle?: BillingCycle;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutBody;
    const planId = body.planId || "";
    const cycle = body.cycle || "monthly";

    const priceId = getPriceId(planId, cycle);
    if (!priceId) {
      return NextResponse.json({ error: "无效方案或未配置 price id" }, { status: 400 });
    }

    if (!process.env.NEXT_PUBLIC_APP_URL) {
      return NextResponse.json({ error: "NEXT_PUBLIC_APP_URL 未配置" }, { status: 500 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "未知错误";
    return NextResponse.json({ error: `创建 checkout 失败: ${message}` }, { status: 500 });
  }
}
