// PostHog experiment scaffolding (v2.25.2). Not wired up yet -- Maya keeps
// asking. Do not read these values before checking the PostHog setup.

export const experiments = {
  pricingPageV3: "pricing-page-v3-2026q4",
  annualToggle: "annual-toggle-default",
} as const;

/**
 * The funnel we watch after every pricing change (GRO-6):
 * pricing_viewed -> signup_started -> signup_completed.
 */
export const PRICING_FUNNEL = ["pricing_viewed", "signup_started", "signup_completed"] as const;
