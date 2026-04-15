# Mustapha El Chmouri — Portfolio

Built with [Astro](https://astro.build). Deploys as a static site to GitHub Pages.

---

## Local development

```bash
npm install
npm run dev      # starts at http://localhost:4321
npm run build    # builds to dist/
npm run preview  # preview the build locally
```

---

## Deploy to GitHub Pages

### First-time setup

1. Create a repo named `mochmouri.github.io` on GitHub (or any repo if using a project URL).
2. Push this code to the `main` branch.
3. In the repo settings → **Pages** → set Source to **GitHub Actions**.
4. Create `.github/workflows/deploy.yml` with the content below.

### Workflow file

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Push to `main` and GitHub Actions will build and deploy automatically.

---

## Content updates

### Add a project

Open `src/pages/projects.astro` and add an entry to the `projects` array at the top of the file:

```ts
{
  title: 'My Project',
  description: 'One or two sentences about what it does.',
  tags: ['Python', 'Automation'],
  github: 'https://github.com/mochmouri/my-project',
  demo: 'https://my-project.example.com',  // optional
}
```

### Write a blog post

Create a new file in `src/content/blog/`:

```
src/content/blog/my-post-slug.md
```

With this frontmatter at the top:

```markdown
---
title: My Post Title
description: A short summary shown on the blog list page.
date: 2026-04-15
tags: [automation, ops]
draft: false
---

Your post content here, in Markdown.
```

- Set `draft: true` to hide a post while writing.
- The filename becomes the URL slug: `my-post-slug.md` → `/blog/my-post-slug`.

### Update the CV

Replace `public/cv.pdf` with your new file. Keep the filename exactly `cv.pdf`. Commit and push — the site will serve the new version immediately on next deploy.

### Add your email address

Search the codebase for `your@email.com` and replace with your actual address. It appears in two places:
- `src/components/Nav.astro`
- `src/components/Contact.astro`

### Add a profile photo

1. Add your photo to `public/profile.jpg` (or any format you prefer).
2. In `src/components/Hero.astro`, uncomment the `<img>` tag and remove the `<div class="photo-placeholder">` block:

```astro
<img src="/profile.jpg" alt="Mustapha El Chmouri" class="hero-photo" />
```

---

## Customisation

| What | Where |
|---|---|
| Name, bio, tagline | `src/components/Hero.astro`, `src/components/About.astro` |
| Work & education data | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Colours & fonts | `src/layouts/Layout.astro` (CSS variables in `:root`) |
| Analytics snippet | `src/layouts/Layout.astro` (comment in `<head>`) |
| Social links | `src/components/Nav.astro`, `src/components/Contact.astro` |
