// Feature flags for the web app. Read at request time on the server,
// evaluated client-side in the browser.

export const flags = {
  /** v2.22.2 account page redesign; defaults off again since v2.23.2. */
  accountRedesign: false,
  /** v2.32.2 pricing page v3 scaffold. */
  pricingV3: true,
} as const;
