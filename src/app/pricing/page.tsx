import { CheckoutButton } from "@/components/checkout-button";
import { plans } from "@/lib/plans";

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14">
      <h1 className="font-display text-4xl font-bold">价格方案</h1>
      <p className="mt-3 text-white/70">你可以先免费体验，再按团队规模和使用频率选择升级。</p>
      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.id} className={`rounded-2xl p-6 ${plan.featured ? "glass ring-2 ring-aurora/70" : "glass"}`}>
            <h2 className="font-display text-2xl">{plan.name}</h2>
            <p className="mt-2 text-sm text-white/70">{plan.description}</p>
            <p className="mt-5 text-3xl font-bold">
              {plan.monthlyPrice === 0 ? "¥0" : `¥${plan.monthlyPrice}`}
              <span className="text-base font-normal text-white/60"> /月</span>
            </p>
            {plan.yearlyPrice ? <p className="mt-1 text-sm text-candy">年付 ¥{plan.yearlyPrice}（优惠）</p> : null}
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-6">
              {plan.id === "free" ? (
                <button className="w-full rounded-xl border border-white/20 px-4 py-2 text-sm text-white/70" disabled>
                  当前免费方案
                </button>
              ) : (
                <CheckoutButton planId={plan.id} cycle="monthly" label={plan.cta} />
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
