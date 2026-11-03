# web

Acme's website and web app: marketing pages, the pricing page and the
account portal. Next.js (app router), React 19, no CSS framework.

## Develop

```sh
npm install   # pinned exact versions on purpose
npm run dev
```

## Layout

- `app/page.tsx` -- marketing home
- `app/pricing/` -- the pricing page (v3 since Nov 2, PR #212)
- `components/` -- PlanCard, SignupForm
- `lib/plans.ts` -- plan catalog; mirrors `acme/checkout-api` `src/pricing/plans.ts`

## Notes

- The pricing page experiments live behind flags in PostHog; the AB test
  scaffolding (v2.25.2) is not wired up yet.
- Mobile Safari signup conversion is tracked in PostHog under
  `signup_started -> signup_completed`. If you touch the pricing page,
  check that funnel before and after (see GRO-6).
