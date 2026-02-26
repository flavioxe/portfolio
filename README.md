# Minimal Utility Portfolio

A minimal, responsive, and internationalized personal portfolio built with Next.js, TypeScript and Tailwind. Design and layout are inspired by a utility-first, typographic approach focusing on spacing and clarity.

## Summary

- Minimal, typographic-first portfolio layout.
- English and Portuguese translations via a lightweight i18n provider.
- Simple, reusable components (Header, Hero, ProjectList, Footer).

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion for animations
- ESLint
- next/font for Geist Sans & Geist Mono

Package versions used in this repository (see `package.json`):

- `next` 16.x
- `react` 19.x
- `tailwindcss` 4.x
- `framer-motion` ^12.x
- `typescript` 5.x
- `eslint` 9.x

## Locales

Translations live in [app/locales](app/locales) as JSON files. The app uses a simple React context provider (`I18nContext` / `I18nProvider`) that dynamically imports locale files and exposes a `t()` helper.

Supported locales: `en`, `pt`.

## Scripts

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## How To Customize

- Edit the site header and hero content in [app/page.tsx](app/page.tsx).
- Update projects and copy in [app/locales/*] to provide translated project data.
- Change colors, fonts and spacing in [tailwind.config.ts](tailwind.config.ts) and [app/globals.css](app/globals.css).

## Architecture & Project Structure

- App Router: The project uses Next.js App Router with `app/layout.tsx` providing global wrappers and `I18nProvider`.
- `I18nProvider` (in `app/providers/I18nProvider.tsx`): dynamic imports locale JSON files and exposes `t()` via `I18nContext`.
- Components are small and focused under `app/components/` (Header, Hero, ProjectList, Footer, etc.).
- Styling is utility-first with Tailwind; global styles live in `app/globals.css`.
- Fonts are loaded via `next/font` for performance and FOUT control.

Typical files:

- `app/layout.tsx` — root layout, fonts, and `I18nProvider` mounting point.
- `app/page.tsx` — homepage composition: Hero, About, Projects, Connect, Footer.
- `app/components/ProjectList.tsx` — project list, reads `t('projects')` and shows previews and details on hover/focus.
- `app/locales/*.json` — translation strings and structured content (project entries can be provided here).

## Design Decisions

- Minimalist, typographic-first UI: keep content dense and clear, avoid decorative cards and heavy shadows.
- "Blueprint" layout for Projects: show titles by default; details appear on hover/focus to keep the initial view clean.
- Accessible interactions: descriptions appear on both hover and keyboard focus; interactive techs area supports focus and an accessible label.
- Performance-minded: fonts via `next/font`, code splitting via dynamic locale imports, and small components to favor caching.
- Animations are subtle and functional — Framer Motion powers entry fades and description fade in/out.

## Deployment Notes

- Any standard Next.js host (Vercel, Netlify, Fly) works. Ensure `NODE_ENV=production` for the build step.
- If deploying to a subpath, update `next.config.js` accordingly.

---

If you want I can also add a short development checklist (prettier, lint, pre-commit hooks) and update `package.json` scripts — tell me which you'd prefer.

## UX Notes

- The Projects list is intentionally minimal: titles are visible by default; details appear on hover/focus to keep a clean, "blueprint"-like visual.
- Project images are previewed when hovering each project entry.
