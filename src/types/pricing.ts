export type BillingCycle = "monthly" | "yearly";

export type PlanId = "free" | "starter" | "pro";

export type Plan = {
  id: PlanId;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice?: number;
  features: string[];
  cta: string;
  featured?: boolean;
};
