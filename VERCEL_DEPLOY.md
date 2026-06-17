# Vercel Deployment Guide for Sonic Mastery Lab

This project is built with **TanStack Start** and configured for deployment to **Vercel**.

## Prerequisites

- A [Vercel](https://vercel.com) account
- A [GitHub](https://github.com) account (to mirror the repo)

## Step 1: Push to GitHub

Since this repo lives on Lovable's private Git storage, you need to mirror it to GitHub:

1. Create a new **private** repo on GitHub (don't initialize with README).
2. Add GitHub as a remote and push:

```bash
git remote add github https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push github main
```

## Step 2: Connect to Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import your GitHub repository.
3. Vercel will auto-detect the settings from `vercel.json`:
   - **Framework Preset:** Other
   - **Build Command:** `bun run build:vercel`
   - **Output Directory:** `.output`
   - **Install Command:** `bun install`

## Step 3: Add Environment Variables

In your Vercel project settings, add these environment variables:

| Name | Value | Required |
|------|-------|----------|
| `VITE_SUPABASE_URL` | `https://zuuodgxomxkvzjejhabg.supabase.co` | Yes |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1dW9kZ3hvbXhrdnpqZWpoYWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNzMyOTEsImV4cCI6MjA5Njk0OTI5MX0.KeK93qOhodmCs6fXD5mNCm3bHHE-PCqOKS-QjixoRj8` | Yes |

## Step 4: Deploy

Click **Deploy**. Vercel will build and deploy your site.

## Build Targets

- `bun run build:vercel` — Serverless (Node.js) — best compatibility, recommended
- `bun run build:vercel-edge` — Edge Functions — faster cold start, smaller bundle

## Notes

- The app uses **Supabase** (Lovable Cloud) as the backend — the frontend can be hosted anywhere.
- Server functions (`createServerFn`) are fully supported via the Nitro → Vercel adapter.
- Do **not** add SPA rewrites (e.g. `/{*path} /index.html`) — SSR routes are handled by the server function.
