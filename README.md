# Kabir Faye — CV / Resume Website

A clean, minimal, dark-themed single-page CV website. Built as a static site
that deploys to GitHub Pages or Vercel with zero server runtime.

- **Framework:** Next.js (App Router) + TypeScript (strict)
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Output:** static export (`output: 'export'`)

## Editing your content

All content lives in **one file**: [`content/cv.ts`](content/cv.ts).

Update your header, summary, experience, education, certifications, and skills
there — the components render whatever you put in that file. No need to touch
any React components.

- To add a **PDF resume** download button, drop a PDF into `public/` and set
  `header.contacts.pdf` to its path (e.g. `'/kabir-faye-cv.pdf'`).
- Items marked with `placeholder: true` (education, certifications) render a
  small "editable" hint — remove the flag once you fill in real values.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & static export

```bash
npm run build
```

This produces a fully static site in the `out/` directory (thanks to
`output: 'export'` in `next.config.mjs`). You can serve it with any static host:

```bash
npx serve out
```

## Deployment

### Option A — Vercel (recommended, simplest)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), **Add New → Project**, import the repo.
3. Vercel auto-detects Next.js. Keep defaults and deploy.

No extra config needed. Vercel handles the static export automatically.

### Option B — GitHub Pages

There are two things to know for GitHub Pages **project sites**
(`https://<user>.github.io/<repo>/`): assets are served from a subpath, so you
must set a `basePath`.

**1. Set the base path** (only for project sites, not for a `<user>.github.io`
user site). In `next.config.mjs`, uncomment and set:

```js
basePath: '/<your-repo-name>',
assetPrefix: '/<your-repo-name>',
```

Or provide it at build time via the included workflow using the
`NEXT_PUBLIC_BASE_PATH` env var.

**2. Enable Pages + use the workflow.** This repo ships a GitHub Actions
workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that
builds and publishes `out/` to GitHub Pages on every push to `main`.

- In your repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
- Push to `main`. The workflow builds and deploys automatically.

> The workflow adds a `.nojekyll` file so GitHub Pages serves the `_next`
> asset folder correctly.

## Project structure

```
app/
  layout.tsx        Root layout, metadata, theme-init script
  page.tsx          Assembles all sections
  globals.css       Tailwind + component styles (pills, headings, buttons)
components/
  Header.tsx        Name, title, location, contacts, language bars
  Section.tsx       Section wrapper with accent underline heading
  Experience.tsx    Companies, nested role progressions, expandable details
  Education.tsx
  Certifications.tsx
  Skills.tsx        Categorized skill pills
  Pill.tsx
  ThemeToggle.tsx   Light/dark toggle (persists to localStorage)
content/
  cv.ts             >>> ALL your CV content lives here <<<
```

## Notes

- **Dark mode is the default**; the toggle persists your choice to
  `localStorage`. A tiny inline script sets the theme before paint to avoid a
  flash.
- The design is intentionally ATS-friendly: semantic headings, real text (no
  images of text), and a print stylesheet that hides interactive controls.
