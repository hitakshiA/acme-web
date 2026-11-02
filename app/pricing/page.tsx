"use client";

// Pricing page v3 (Ines's design, PR #212, shipped 2026-11-02).
// Client component now: the plan picker, the signup form and the sticky footer
// all share the selected plan. Metadata lives in ./layout.tsx.

import { useRef, useState } from "react";
import { SignupForm, type SignupFormHandle } from "../../components/SignupForm";
import { PLANS, type PlanId } from "../../lib/plans";
import { PlanPicker } from "./plan-picker";
import "./pricing.css";

export default function PricingPage() {
  const [planId, setPlanId] = useState<PlanId>("growth");
  const [interval, setInterval] = useState<"month" | "year">("year");
  const signupRef = useRef<SignupFormHandle>(null);
  const plan = PLANS.find((p) => p.id === planId) ?? PLANS[1];

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <h1>Pricing that scales with your store</h1>
        <p>Start free for 14 days. Cancel any time. 30-day refund window on annual plans.</p>
      </section>

      <PlanPicker
        plans={PLANS}
        planId={planId}
        interval={interval}
        onPlanChange={setPlanId}
        onIntervalChange={setInterval}
      />

      <section className="pricing-note">
        <p>
          All prices in USD, excluding VAT. Annual plans are billed once a year and
          save you two months.
        </p>
      </section>

      <section className="pricing-signup">
        <h2>Start your 14-day free trial</h2>
        <p>No card required. Pick a plan after the trial.</p>
        <SignupForm ref={signupRef} planId={planId} interval={interval} />
      </section>

      {/* sticky CTA footer -- keeps the pitch in thumb reach */}
      <footer className="pricing-footer">
        <div className="pricing-footer__inner">
          <p className="pricing-footer__pitch">
            {plan.name}, {interval === "year" ? "billed yearly" : "billed monthly"}. Your
            first checkout can be live in ten minutes.
          </p>
          <button
            className="button button-primary"
            type="button"
            onClick={() => signupRef.current?.handleContinue()}
          >
            Continue
          </button>
        </div>
      </footer>
    </div>
  );
}
