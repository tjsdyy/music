"use client";

import { useState } from "react";
import type { BillingCycle, PlanId } from "@/types/pricing";

type Props = {
  planId: PlanId;
  cycle: BillingCycle;
  label: string;
  disabled?: boolean;
};

export function CheckoutButton({ planId, cycle, label, disabled }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId, cycle }),
      });
      const data = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !data.url) {
        throw new Error(data.error || "创建支付会话失败");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "支付请求失败");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        disabled={disabled || loading}
        onClick={handleCheckout}
        className="w-full rounded-xl bg-gradient-to-r from-aurora via-nebula to-candy px-4 py-2 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45"
      >
        {loading ? "跳转支付中..." : label}
      </button>
      {error ? <p className="text-xs text-rose-300">{error}</p> : null}
    </div>
  );
}
