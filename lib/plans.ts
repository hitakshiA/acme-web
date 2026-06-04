// Plan catalog. Single source of truth is acme/checkout-api
// (src/pricing/plans.ts); this is the web copy the pricing page renders.

export type PlanId = "starter" | "growth" | "scale";

export interface Plan {
  id: PlanId;
  name: string;
  monthlyPriceCents: number;
  annualPriceCents: number | null;
  tagline: string;
  features: string[];
}

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPriceCents: 2900,
    annualPriceCents: null,
    tagline: "For your first hundred orders a month.",
    features: ["Checkout embed", "Subscriptions", "14-day free trial", "Email support"],
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPriceCents: 9900,
    annualPriceCents: 99000,
    tagline: "For stores that found their thing.",
    features: [
      "Everything in Starter",
      "Usage-based add-ons",
      "Webhooks with retries",
      "Priority support",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    monthlyPriceCents: 48000,
    annualPriceCents: 480000,
    tagline: "For when checkout is the business.",
    features: [
      "Everything in Growth",
      "Custom SLAs",
      "Dedicated onboarding",
      "Refunds handled for you",
    ],
  },
];

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(cents % 100 === 0 ? 0 : 2)}`;
}

/** Annual saves 2 months vs monthly. */
export function annualSavingsCents(plan: Plan): number | null {
  if (plan.annualPriceCents == null) return null;
  return plan.monthlyPriceCents * 12 - plan.annualPriceCents;
}
