# Homagine

A Nuxt-powered site to honor human history and pay tribute to people, places, and moments. Built with Nuxt 4, Tailwind CSS, and @nuxt/content, this project is configured to be statically generated and hosted on GitHub Pages.

## Quick links
- Live site (after deployment): https://<your-username>.github.io/homagine/
- Nuxt docs: https://nuxt.com/docs

## Features
- Static site generation optimized for GitHub Pages
- Client-side rendering (SSR disabled) for static hosting
- Content-driven pages using @nuxt/content
- Tailwind CSS styling

## Tech stack
- Nuxt 4
- Vue 3
- @nuxt/content
- Tailwind CSS

## Getting started (local development)
1. Prerequisites
   - Node.js 18+ and npm 9+ installed
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
   Then open http://localhost:3000 in your browser.

## Build and preview locally
- Build for production (server build):
  ```bash
  npm run build
  ```
- Generate a fully static site (what we deploy to GitHub Pages):
  ```bash
  npm run generate
  ```
- Preview the production build locally:
  ```bash
  npm run preview
  ```

## Deploying to GitHub Pages
This repository is pre-configured to deploy to GitHub Pages as a Project Site under the repository name `homagine`.

What’s already configured:
- nuxt.config.ts
  - ssr: false (GitHub Pages is static hosting)
  - app.baseURL: '/homagine/' (required for project sites)
  - nitro.preset: 'github-pages' (auto-generates 404.html and .nojekyll)
  - routeRules to prerender all routes
- package.json
  - deploy script using `gh-pages` to push `.output/public` to the `gh-pages` branch

Steps to deploy:
1. Ensure your repository exists on GitHub, named `homagine` (or update the baseURL if you use a different name; see Notes below).
2. Generate the static site:
   ```bash
   npm run generate
   ```
3. Publish to the `gh-pages` branch:
   ```bash
   npm run deploy
   ```
4. On GitHub, go to Settings → Pages:
   - Build and deployment → Source: Deploy from a branch
   - Branch: `gh-pages` and Folder: `/` (root)
5. Wait a minute for Pages to publish. Your site should be live at:
   - https://<your-username>.github.io/homagine/

## Viewing the site on GitHub Pages
- Project URL format: https://<your-username>.github.io/<repo-name>/
- For this repository (default): https://<your-username>.github.io/homagine/

## Notes and troubleshooting
- Changing the repository name
  - If the repository is not named `homagine`, update `app.baseURL` in `nuxt.config.ts` to `'/<your-repo-name>/'`, and also update any hardcoded asset links that start with `/homagine/` (e.g., the favicon link).
- 404s on refresh / deep links
  - The `github-pages` preset generates a proper `404.html`. All routes are prerendered (`routeRules`), which avoids typical SPA refresh issues on GitHub Pages.
- Assets not loading under subpath
  - Ensure your `baseURL` matches the repository name exactly, including trailing slashes, for example `'/homagine/'`.
- Custom domain (optional)
  - If you set a custom domain in GitHub Pages, update `app.baseURL` to `'/'` and remove subpath-specific asset prefixes. Also configure DNS per GitHub Pages docs.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project’s license (if any) should be documented here. If none is provided, the default is "All rights reserved" by the repository owner.
