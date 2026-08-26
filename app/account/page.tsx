import { flags } from "../../lib/flags";

export const metadata = {
  title: "Account — Acme Checkout",
};

export default function AccountPage() {
  // v2.22.2: redesign behind a flag. v2.23.2: flag defaults off again.
  const redesigned = flags.accountRedesign;

  return (
    <section className={redesigned ? "account account--v2" : "account"}>
      <h1>Your account</h1>

      <h2>Billing</h2>
      <p>
        Growth annual — $990/yr, next invoice on 2027-04-02.
      </p>
      <p>
        {/* v2.27.2 */}
        <a href="/account/update-card">Update your card</a> — links expire after
        24h (v2.27.3).
      </p>

      <h2>Invoices</h2>
      <ul>
        <li>
          <a href="/account/invoices/2026-10">2026-10 — $990.00 — paid</a>
        </li>
        <li>
          <a href="/account/invoices/2026-04">2026-04 — $990.00 — paid</a>
        </li>
      </ul>
    </section>
  );
}
