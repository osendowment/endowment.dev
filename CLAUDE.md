# Open Source Endowment - Website

## Rules

- **Never push to GitHub without explicit user approval.** Commit locally freely, but always wait for the user to say "push" before running `git push`.

## Tech Stack

- **Framework**: Astro 5 (static site, SSG)
- **Deployment**: Cloudflare Pages (auto-deploys from `main` branch, project name: `ose-website`)
- **Domain**: endowment.dev
- **UI**: Astro components + React (for interactive components like NominationForm)
- **Analytics**: OpenPanel (`@openpanel/astro`, client ID hardcoded in Layout.astro)
- **Donations**: Every.org (external redirect, donate URL in `src/util.ts`)
- **Nomination form**: SurveyJS + Cloudflare Turnstile CAPTCHA, submits to `data.endowment.dev`
- **Data API**: `https://data.endowment.dev` (donor stats, nominations — separate repo `osendowment/data`)
- **Package manager**: npm (no lockfile committed)

## Key Files

- `src/layouts/Layout.astro` — main layout, OpenPanel init, donate link tracking, session metrics
- `src/util.ts` — `EVERYORG_BUTTON_URL` constant, shared helpers
- `src/components/NominationForm.tsx` — React component for project nominations
- `src/pages/` — all site pages (index, endowment, community, funding, faq, docs/*)

## Analytics & Tracking

- OpenPanel SDK auto-tracks: page views, outgoing links, `data-track` element clicks
- Donate links: inject `partner_donation_id` (persistent UUID from localStorage) + `partner_metadata` (base64 JSON with attribution context) into Every.org URL on click
- Nomination form: `op.identify()` with same visitor UUID + donor email/name
- Visitor ID stored in `localStorage` as `ose_visitor_id`, session metrics in `sessionStorage`

## Design Prototypes (Figma)

Inspirational design prototypes developed by Evil Martians:

### Main Website
- **Desktop**: https://www.figma.com/proto/3phoXTw2DHItoARw5pL5Di/Open-Source-Endowment?page-id=595%3A21634&node-id=554-16761&viewport=168%2C74%2C0.25&t=z7HdDrfCI9G13uVq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=554%3A16761&show-proto-sidebar=1
- **Mobile**: https://www.figma.com/proto/3phoXTw2DHItoARw5pL5Di/Open-Source-Endowment?page-id=595%3A21634&node-id=554-18679&viewport=168%2C74%2C0.25&t=z7HdDrfCI9G13uVq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=554%3A18679&show-proto-sidebar=1

### Donate Page
- **Desktop**: https://www.figma.com/proto/3phoXTw2DHItoARw5pL5Di/Open-Source-Endowment?page-id=212%3A88&node-id=743-9371&viewport=-2163%2C623%2C0.14&t=ZIbJgbFQmRjLDxWt-8&scaling=contain&content-scaling=responsive&starting-point-node-id=743%3A9371&show-proto-sidebar=1&hide-ui=1
- **Mobile**: https://www.figma.com/proto/3phoXTw2DHItoARw5pL5Di/Open-Source-Endowment?page-id=212%3A88&node-id=837-15057&viewport=-2163%2C623%2C0.14&t=ZIbJgbFQmRjLDxWt-8&scaling=contain&content-scaling=responsive&starting-point-node-id=837%3A15057&show-proto-sidebar=1&hide-ui=1
