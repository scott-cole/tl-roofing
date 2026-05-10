# T &amp; L Roofing

Professional roofing services in Leeds and West Yorkshire.

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework with App Router
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [Nodemailer](https://nodemailer.com/) — contact form email delivery via Outlook SMTP
- [Lucide](https://lucide.dev/) — icon library
- Hosted on [Vercel](https://vercel.com/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your SMTP credentials:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server (e.g. `smtp.office365.com`) |
| `SMTP_PORT` | SMTP port (e.g. `587`) |
| `SMTP_EMAIL` | Sender email address |
| `SMTP_PASSWORD` | App password (not your regular password) |
| `CONTACT_EMAIL` | Where contact form submissions are sent |

## Build

```bash
npm run build
```

## Structure

- `app/` — Next.js App Router pages and API routes
- `components/` — Reusable React components
- `lib/` — Utilities and data helpers
- `public/images/` — Gallery images (roof1–roof36)

## Deployment

Deployed on Vercel. Push to `main` to trigger automatic deployments.
