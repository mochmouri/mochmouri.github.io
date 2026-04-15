# 001 — Initial setup

## What was built

Full Astro static portfolio site with:
- Home page: hero, about, experience preview, skills, contact sections
- `/experience` — full work history, education, academic projects, certifications
- `/projects` — placeholder grid, ready to populate
- `/blog` — Markdown-driven list + individual post pages
- `/cv` — inline PDF viewer + download button
- Dark/light mode toggle (defaults to system preference, persists in localStorage)
- Responsive layout (mobile nav with hamburger)

## Design decisions

- **Astro over plain HTML**: content collections for blog, component reuse across pages, no runtime JS by default — still fully static output
- **Dark default (system-preference)**: user wanted dark mode, defaulting to system preference is the standard approach; saves to localStorage on toggle
- **Data in `.ts` files** (`src/data/`): separates content from markup, easy to edit without touching components
- **CSS custom properties for theming**: simpler than a PostCSS/Tailwind approach, no build complexity
- **Amber accent (#e8a045)**: matches the reference site's toggle colour; works in both light and dark modes
- **Inter font**: neutral, legible, modern sans-serif — appropriate for a technical portfolio
- **No icon library**: inline SVGs for LinkedIn, GitHub, email, theme toggle — avoids a dependency for 4 icons

## What was left out

- **Contact form**: user chose mailto, avoids needing Formspree or similar
- **Multilingual support**: deferred by user
- **Custom domain**: not configured; using default GitHub Pages URL for now
- **Profile photo**: placeholder in place; user will add when ready
- **Projects data**: placeholder page only; user will populate from GitHub projects

## Still needed

- Add email address (search `your@email.com` in `src/components/`)
- Add `public/cv.pdf`
- Set up GitHub Actions deploy workflow (see README)
- Add profile photo to `public/profile.jpg` and uncomment img tag in `Hero.astro`
