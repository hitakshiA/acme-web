// Funnel event properties for the signup funnel (follow-up to GRO-6).
// signup_started / signup_completed carry browser, OS and device type so the
// PostHog funnel can be split per device without touching event definitions.

export function funnelProps(): Record<string, string> {
  if (typeof navigator === "undefined") return {};
  const ua = navigator.userAgent;
  const isMobileSafari = /iPhone|iPad|iPod/.test(ua) && /Safari/.test(ua) && !/Chrome|CriOS/.test(ua);
  const isChrome = /Chrome/.test(ua) && !/Edg/.test(ua);
  return {
    $browser: isMobileSafari ? "Mobile Safari" : isChrome ? "Chrome" : "Other",
    $os: /iPhone|iPad|iPod/.test(ua) ? "iOS" : /Android/.test(ua) ? "Android" : /Mac/.test(ua) ? "Mac OS X" : "Other",
    $device_type: /Mobi|iPhone|iPad|Android/.test(ua) ? "Mobile" : "Desktop",
  };
}
