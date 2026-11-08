// Feature flags for the web app. Read at request time on the server,
// evaluated client-side in the browser.

export const flags = {
  /** v2.22.2 account page redesign; defaults off again since v2.23.2. */
  accountRedesign: false,
  /** v2.32.2 pricing page v3 scaffold. */
  pricingV3: true,
  /**
   * The invoice page. Off everywhere (Upstash + Cloudflare both off) until the
   * Thursday launch. QA flips it on staging only.
   */
  invoicePage: false,
} as const;

/** v2.29.3: the checkout embed reads this cookie for locale. */
export const LOCALE_COOKIE = "acme_locale";
