"use client";

// Plan picker for pricing v3: monthly/annual toggle plus a "Choose" button per
// plan card. Choosing a plan after the email is filled in submits the signup
// form straight away, so people don't have to scroll back down to it.

import { PlanCard } from "../../components/PlanCard";
import type { Plan, PlanId } from "../../lib/plans";

type Interval = "month" | "year";

type Props = {
  plans: Plan[];
  planId: PlanId;
  interval: Interval;
  onPlanChange: (id: PlanId) => void;
  onIntervalChange: (interval: Interval) => void;
};

function IntervalButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={active ? "plan-picker__interval plan-picker__interval--active" : "plan-picker__interval"}
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export function PlanPicker({ plans, planId, interval, onPlanChange, onIntervalChange }: Props) {
  return (
    <section className="plan-picker" aria-label="Plans">
      <div className="plan-picker__toggle" role="radiogroup" aria-label="Billing interval">
        <IntervalButton
          label="Monthly"
          active={interval === "month"}
          onClick={() => onIntervalChange("month")}
        />
        <IntervalButton
          label="Annual (2 months free)"
          active={interval === "year"}
          onClick={() => onIntervalChange("year")}
        />
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-picker__option">
            <PlanCard
              plan={plan}
              interval={plan.annualPriceCents ? interval : "month"}
              highlighted={plan.id === planId}
            />
            <button
              className={plan.id === planId ? "button button-primary" : "button"}
              type="button"
              onClick={() => onContinue(plan.id)}
            >
              {plan.id === planId ? "Selected" : `Choose ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  function onContinue(id: PlanId) {
    onPlanChange(id);
    const email = document.getElementById("signup-email") as HTMLInputElement | null;
    if (email && !email.value) {
      email.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    // email is already there: submit the form with the plan they just picked
    const form = email?.form as HTMLFormElement;
    form.requestSubmit();
  }
}
