// Pricing page v3 (Ines's design, PR #212, shipped 2026-11-02).

import { PlanCard } from "../../components/PlanCard";
import { SignupForm } from "../../components/SignupForm";
import { PLANS } from "../../lib/plans";

export const metadata = {
  title: "Pricing — Acme Checkout",
};

export default function PricingPage() {
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <h1>Pricing that scales with your store</h1>
        <p>Start free for 14 days. Cancel any time. 30-day refund window on annual plans.</p>
      </section>

      <section className="pricing-grid" aria-label="Plans">
        {PLANS.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            interval={plan.annualPriceCents ? "year" : "month"}
            highlighted={plan.id === "growth"}
          />
        ))}
      </section>

      <section className="pricing-note">
        <p>
          All prices in USD, excluding VAT. Annual plans are billed once a year and
          save you two months.
        </p>
      </section>

      <section className="pricing-signup">
        <h2>Start your 14-day free trial</h2>
        <p>No card required. Pick a plan after the trial.</p>
        <SignupForm planId="growth" />
      </section>

      {/* sticky CTA footer -- keeps the pitch in thumb reach */}
      <footer className="pricing-footer">
        <div className="pricing-footer__inner">
          <p className="pricing-footer__pitch">
            Ready? Your first checkout can be live in ten minutes.
          </p>
          <a className="button button-primary" href="#signup-email">
            Start free trial
          </a>
        </div>
      </footer>
    </div>
  );
}
