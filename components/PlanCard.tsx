import { annualSavingsCents, formatPrice, type Plan } from "../lib/plans";

export function PlanCard({
  plan,
  interval,
  highlighted,
}: {
  plan: Plan;
  interval: "month" | "year";
  highlighted?: boolean;
}) {
  const priceCents =
    interval === "year" ? plan.annualPriceCents : plan.monthlyPriceCents;
  const savings = annualSavingsCents(plan);

  return (
    <article className={highlighted ? "plan-card plan-card--highlight" : "plan-card"}>
      <h3>{plan.name}</h3>
      <p className="plan-tagline">{plan.tagline}</p>
      {priceCents == null ? (
        <p className="plan-price">
          {formatPrice(plan.monthlyPriceCents)}
          <span className="plan-interval">/mo</span>
        </p>
      ) : (
        <p className="plan-price">
          {interval === "year" ? formatPrice(priceCents) : formatPrice(priceCents)}
          <span className="plan-interval">/{interval === "year" ? "yr" : "mo"}</span>
        </p>
      )}
      {interval === "year" && savings != null && (
        // v2.28.0: annual invoices show a savings line
        <p className="plan-savings">Save {formatPrice(savings)} vs monthly</p>
      )}
      <ul>
        {plan.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </article>
  );
}
