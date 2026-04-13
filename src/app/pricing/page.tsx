import { CheckoutButton } from "@/components/checkout-button";

export default function PricingPage() {
  const plans = [
    {
      id: "free" as const,
      name: "Free",
      price: "$0",
      yearly: "",
      points: ["6 Credits / First Signin", "UP to 2 songs", "V1 Model Only", "4-minute songs", "Commercial License"],
      tag: "",
    },
    {
      id: "starter" as const,
      name: "Basic",
      price: "$8.33/month",
      yearly: "$100/year billed yearly",
      points: ["4,800 Credits /year", "UP to 1,920 songs", "V1-V5 models", "8-minute songs", "Forever Cloud Storage"],
      tag: "Most Popular · Save $80",
    },
    {
      id: "pro" as const,
      name: "Standard",
      price: "$20.99/month",
      yearly: "$251.92/year billed yearly",
      points: ["15,000 Credits /year", "UP to 6,000 songs", "V1-V5 models", "8-minute songs", "Forever Cloud Storage"],
      tag: "Save $108",
    },
    {
      id: "pro" as const,
      name: "Professional",
      price: "$49.99/month",
      yearly: "$599.88/year billed yearly",
      points: ["50,000 Credits /year", "UP to 20,000 songs", "V1-V5 models", "8-minute songs", "Forever Cloud Storage"],
      tag: "Save $240",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14">
      <h1 className="font-display text-4xl font-bold">Try Music AI Pricing Plans</h1>
      <p className="mt-3 text-white/70">Pick your plan to get started · Cancel anytime — Unused credits roll over</p>
      <div className="mt-4 inline-flex rounded-full border border-white/20 p-1 text-sm">
        <button className="rounded-full bg-white px-3 py-1 text-black">Monthly</button>
        <button className="rounded-full px-3 py-1 text-white/70">Yearly 30% OFF</button>
      </div>
      <section className="mt-8 grid gap-5 md:grid-cols-4">
        {plans.map((plan, idx) => (
          <article key={`${plan.name}-${idx}`} className={`rounded-2xl p-6 ${idx === 1 ? "glass ring-2 ring-aurora/70" : "glass"}`}>
            {plan.tag ? <p className={`text-xs ${idx === 1 ? "text-candy" : "text-aurora"}`}>{plan.tag}</p> : null}
            <h2 className="mt-2 font-display text-2xl">{plan.name}</h2>
            <p className="mt-4 text-3xl font-bold">{plan.price}</p>
            {plan.yearly ? <p className="mt-1 text-sm text-white/60">{plan.yearly}</p> : <p className="mt-1 text-sm text-white/60">—</p>}
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              {plan.points.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-6">
              {plan.id === "free" ? (
                <button className="w-full rounded-xl border border-white/20 px-4 py-2 text-sm text-white/70" disabled>
                  Current Plan
                </button>
              ) : (
                <CheckoutButton planId={plan.id} cycle="monthly" label="Choose Plan" />
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
