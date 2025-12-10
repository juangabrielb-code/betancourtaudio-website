# PROJECT SPECIFICATIONS: BETANCOURTAUDIO

## 1. PROJECT IDENTITY
- **Type:** Portfolio + E-commerce + Client Portal for Audio Services.
- **Goal:** Professional image, automated file delivery, multilingual support.
- **Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS.
- **UI Components:** Shadcn/UI (based on Radix & Tailwind).
- **Core Libs:** `next-intl` (i18n), `lucide-react` (icons), `zod` (validation).
- **Backend/Services:** Supabase (DB/Auth), Stripe (Payments), Resend (Emails).

## 2. FILE STRUCTURE & I18N STRATEGY
- **Root:** `src/app`
- **Internationalization:** STRICT requirement.
  - All public pages must reside inside `src/app/[locale]/`.
  - Middleware (`src/middleware.ts`) handles locale detection (es/en).
  - Content dictionaries located in `messages/es.json` and `messages/en.json`.
- **Components:** Located in `src/components`.
  - Atom design or Feature-based (e.g., `components/ui` for Shadcn, `components/player` for audio).

## 3. DESIGN SYSTEM
- **Theme:** Dark mode default (Studio vibe).
- **Font:** Geist Sans or Inter (Professional, clean).
- **Responsive:** Mobile-first.

## 4. PHASE 1: FOUNDATION & LANDING (Current Focus)
1. Setup `next-intl` routing.
2. Setup basic Tailwind theme (Colors/Typography).
3. Create the Landing Page structure:
   - Hero Section (Value prop).
   - Audio Player demo (Placeholder for now).
   - Service Grid.

## 5. RULES FOR AI AGENTS
- **Do NOT** use hardcoded text strings in components. Use `t('key')` hooks.
- **Do NOT** use `any` in TypeScript. Define interfaces in `src/types`.
- **Style:** Use Tailwind utility classes. Do not create .css files unless for global animations.

