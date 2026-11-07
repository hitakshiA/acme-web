import { flags } from "../../../lib/flags";

// Invoice page (scaffold). Gated behind flags.invoicePage — off until launch.
// Renders GET /invoices/:id from checkout-api (invoice API v1).
export default async function InvoicePage({ params }: { params: { id: string } }) {
  if (!flags.invoicePage) return <p>Not found.</p>;
  const res = await fetch(`${process.env.CHECKOUT_API}/invoices/${params.id}`, { cache: "no-store" });
  if (!res.ok) return <p>Invoice not found.</p>;
  const invoice = await res.json();
  return (
    <main>
      <h1>Invoice {invoice.id}</h1>
      <p>{invoice.period_start} – {invoice.period_end} · {invoice.status}</p>
      <ul>
        {(invoice.lines ?? []).map((l: { id: string; description: string; amount_cents: number }) => (
          <li key={l.id}>{l.description} — {(l.amount_cents / 100).toFixed(2)}</li>
        ))}
      </ul>
    </main>
  );
}
