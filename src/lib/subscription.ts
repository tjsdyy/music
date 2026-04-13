type SubscriptionSnapshot = {
  source: string;
  customerId?: string;
  subscriptionId?: string;
  status?: string;
  periodStart?: number | null;
  periodEnd?: number | null;
  planId?: string;
  cycle?: string;
  userId?: string;
};

// TODO: replace with DB upsert (Prisma/Supabase/etc).
export async function syncSubscription(snapshot: SubscriptionSnapshot) {
  console.log("[stripe-sync]", JSON.stringify(snapshot));
}

