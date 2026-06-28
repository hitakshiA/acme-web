export const metadata = {
  title: "Acme Checkout — payments for small online stores",
  description: "Embeddable checkout and subscriptions for small online stores.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a className="site-logo" href="/">
            Acme Checkout
          </a>
          <nav>
            <a href="/pricing">Pricing</a>
            <a href="/docs">Docs</a>
            <a href="/login">Log in</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <a href="/docs">Docs</a>
          <a href="/status">Status</a>
          <a href="/legal/terms">Terms</a>
          <a href="/legal/privacy">Privacy</a>
        </footer>
      </body>
    </html>
  );
}
