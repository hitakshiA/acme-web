export const metadata = {
  title: "Page not found — Acme Checkout",
};

export default function NotFound() {
  return (
    <section className="hero">
      <h1>404 — this page moved or never existed</h1>
      <p>
        Try the <a href="/docs">docs</a>, the <a href="/docs/api">API reference</a>{" "}
        or the <a href="/pricing">pricing page</a>. Still stuck?{" "}
        <a href="mailto:support@acme.example">support@acme.example</a> answers fast.
      </p>
    </section>
  );
}
