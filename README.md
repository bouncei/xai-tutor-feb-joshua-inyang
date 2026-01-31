# Frontend Developer Challenge: Pixel-Perfect Replication – Ghost Pricing Page

## Overview
This is a timed coding exercise (90 minutes recommended) designed to evaluate your attention to detail, proficiency with Tailwind CSS, and ability to build clean, precise UI components.

Your task is to replicate the **desktop version only** of the Ghost pricing page as pixel-perfect as possible using the provided Next.js + Tailwind boilerplate.

**Target Page:** https://ghost.org/pricing/

## Time Limit
**60 minutes recommended** (strict timing optional based on your process).  
Prioritize visual accuracy, clean code, and functional elements where specified (e.g., pricing tabs). Bonus points for implementing subtle animations.

## Boilerplate Setup
- Next.js 14+ (App Router)
- Tailwind CSS pre-configured
- The application is fully Dockerized for consistency
- No additional libraries installed (keep it vanilla; you may add minimal ones like framer-motion for bonus animation if desired)

**Primary way to run (required for evaluation):**
```bash
docker compose up --build

**To run locally:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## Required Scope (Build exactly these sections – stop after the footer)
1. **Header/Navbar** (logo, navigation links, Sign in / Try Ghost buttons)
2. **Title/Hero section** (main headline "Launch your creative business", subtext, audience range indicator/slider UI – static positioning is fine, no functional slider logic required)
3. **Pricing section** (Monthly / Yearly tabs – must be functional and update prices accordingly; all pricing cards: Starter, Publisher, Business, Custom; include highlights and details)
   - **Bonus points**: Implement a smooth number increment animation when switching between Monthly/Yearly tabs
4. **Feature groups**: Website, Audience, and Growth sections (with their comparison tables and checkmarks)
5. **Launch your big idea** CTA section (bottom call-to-action with stats and button)
6. **Footer** (complete footer with github, links, legal, etc.)

**Do NOT build:**
- Mobile/responsive breakpoints below desktop
- Any sections beyond the footer (e.g., skip detailed tables for Email Newsletters, Analytics, etc.)
- Full slider interactivity (static UI only)
- Complex forms or backend logic

**Images & Media:**
- Use placeholder images (e.g., Unsplash, solid colors, or simple SVGs) for icons, backgrounds, or illustrations
- Focus on layout and spacing – exact images not required

## Requirements
- **Pixel-perfect desktop match** (1440px+ viewport)
- Use Tailwind classes extensively (arbitrary values allowed: e.g., `[#1A1A1A]`, `[27px]`)
- Clean, semantic HTML
- Proper use of flex/grid for layouts (especially pricing cards and feature tables)
- Exact typography, spacing, colors, shadows, borders, rounding, and hover states
- Functional Monthly/Yearly tabs (prices must update correctly)
- Minimal or no custom CSS (except for bonus animation)

## Submission Instructions
1. **Fork this repository** to your personal GitHub account.
2. **Make your forked repository public** — private repositories will not be considered or reviewed.
3. Complete the challenge in your forked repository (commit regularly with clear messages).
4. Raise a Merge Request.
6. In your internal MR or submission:
   - Confirm that `docker compose up --build` works correctly in your fork
   - Add side-by-side screenshots comparing your implementation to the reference page (upload them directly if possible)
   - Mention if you implemented the bonus animation
7. Do not share zip files or private links — only public repositories and internal MRs will be evaluated.

## Evaluation Criteria (Scored out of 100 + Bonus)

| Category                  | Weight | Details                                                                 |
|---------------------------|--------|-------------------------------------------------------------------------|
| **Visual Accuracy**       | 50%    | Pixel-perfect match: colors (exact hex), typography, spacing/padding/margins, shadows, borders, rounding, hover states |
| **Layout & Structure**    | 20%    | Correct use of flex/grid (especially cards and tables), proper nesting, semantic HTML |
| **Tailwind Proficiency**  | 15%    | Extensive use of utility classes, minimal custom CSS, clean class organization |
| **Code Quality**          | 10%    | Readable component structure, logical file organization, no unused code |
| **Attention to Detail**   | 5%     | Subtle elements (e.g., checkmarks, badges, tab states, icon alignment) |
| **Bonus: Animation**      | +10    | Smooth number increment when switching tabs (e.g., using framer-motion or CSS) |

We value precision and craftsmanship. Good luck!