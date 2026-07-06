
# Tailor Shop — Next.js app

An app built with Next.js. This repository contains a frontend for a tailoring business (the UI references "The Beauty Tailor") and a simple serverless API route that sends consultation emails using the Resend service.

**Quick links**
- **App entry:** [app/page.tsx](app/page.tsx)
- **Layout:** [app/layout.tsx](app/layout.tsx)
- **Email API:** [app/api/send-email/route.ts](app/api/send-email/route.ts)

**Overview**
- Next.js application using the App Router.
- UI is componentized under the `components/` folder and assembled in [app/page.tsx](app/page.tsx).
- Contact form submits to a serverless endpoint at `/api/send-email` which uses the `resend` package to forward requests and send confirmations.

**Key files and folders**
- [app](app) — Next.js application routes and layouts.
- [components](components) — UI components: `navigation`, `hero`, `heritage`, `craftsmanship`, `materials`, `services`, `gallery`, `contact`, `footer`, `shop`.
- [components/contact.tsx](components/contact.tsx) — contact form and frontend validation.
- [app/api/send-email/route.ts](app/api/send-email/route.ts) — POST handler that sends emails using `Resend` (requires `RESEND_API_KEY`).
- [lib/utils.ts](lib/utils.ts) — small helpers (e.g. `cn` for class merging).

Dependencies (selected, see `package.json` for full list)
- `next` — Next.js framework (App Router)
- `react`, `react-dom` — React 19
- `tailwindcss` — styling
- `resend` — sending transactional emails in the API route
- `zod`, `react-hook-form` and others used across the UI

## Setup

Prerequisites: Node.js and a package manager (`npm`, `pnpm`, or `yarn`).

1. Install dependencies

```bash
npm install
```

2. Create a local environment file

Create a `.env.local` in the project root with at least the following variables:

```bash
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=The Beauty Tailor <noreply@thebeautytailor.id>
RECIPIENT_EMAIL=info@thebeautytailor.id
NEXT_PUBLIC_CONTACT_EMAIL=info@thebeautytailor.id
```

`RESEND_API_KEY` is required for the `/api/send-email` route to send emails. The other variables default to `@thebeautytailor.id` addresses if not provided.

3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available scripts

The project scripts from `package.json`:

```bash
npm run dev    # run Next.js in development mode
npm run build  # build for production
npm run start  # start the production server
npm run lint   # run ESLint
```

## API: Send Email

- Endpoint: `POST /api/send-email`
- Expects JSON body with: `firstName`, `lastName`, `email`, `phone`, `service`, `message`.
- The handler validates required fields and uses `resend.emails.send` twice:
	- once to send the consultation request to `RECIPIENT_EMAIL`
	- once to send a confirmation email back to the user `email`

See implementation at [app/api/send-email/route.ts](app/api/send-email/route.ts).

## Notes & implementation details
- The main page composes the UI from these components: `Navigation`, `Hero`, `Heritage`, `Craftsmanship`, `Materials`, `Services`, `Gallery`, `Contact`, `Footer`. The `Shop` component is present but commented out in [app/page.tsx](app/page.tsx).
- The contact form performs client-side validation and posts to `/api/send-email` (see [components/contact.tsx](components/contact.tsx)).
- Styling utilities include `lib/utils.ts` which exposes a `cn` helper that merges class names with `clsx` and `tailwind-merge`.

## Contributing
- Open an issue or submit a PR with focused changes.
- Keep changes local to a feature branch and include relevant screenshots or reproduction steps for UI changes.

## Next steps you might want
- Add a `.env.example` with the environment variable keys.
- Add CI (lint/build) and a deployment configuration (Vercel, Netlify, etc.).
- Add tests for the API route and component-level tests.

If you'd like, I can also:
- add a `.env.example` file, or
- run a quick lint or build to confirm the README matches the repo state.

