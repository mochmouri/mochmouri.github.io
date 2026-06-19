# mochmouri.github.io

**[https://mochmouri.github.io](https://mochmouri.github.io)**

Personal portfolio. Built with [Astro](https://astro.build), deployed to GitHub Pages via GitHub Actions on every push to `main`.

---

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # builds to dist/
```

## Content

Projects live in `src/content/projects/` as Markdown files. Each file maps to a project page. Frontmatter fields: `title`, `type`, `description`, `order`, `status`, `tags`, `github`, `demo`, `thumbnail`, `draft`.

Blog posts live in `src/content/blog/`. The filename becomes the URL slug.

CV is served from `public/cv.pdf` — replace the file to update it.
