// Pricing page (v2): the plan list, no experiments.

import { PLANS } from "../../lib/plans";
import { flags } from "../../lib/flags";

export const metadata = {
  title: "Pricing — Acme Checkout",
};

export default function PricingPage() {
  return (
    <div className="pricing-page">
      <h1>Pricing</h1>
      <p>Start free for 14 days. Cancel any time.</p>
      {/* pricing v3 scaffold (v2.32.2) -- behind flags.pricingV3 */}
      {flags.pricingV3 ? <p className="pricing-v3-tease">new pricing, soon</p> : null}

      <table className="pricing-table">
        <tbody>
          {PLANS.map((plan) => (
            <tr key={plan.id}>
              <th scope="row">{plan.name}</th>
              <td>${plan.monthlyPriceCents / 100}/mo</td>
              <td>
                {plan.annualPriceCents
                  ? `$${plan.annualPriceCents / 100}/yr`
                  : "monthly only"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
