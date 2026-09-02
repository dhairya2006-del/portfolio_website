# Dhairya Joshi — Portfolio

A fast, data-driven portfolio built with React, React Router, and Tailwind CSS.
Projects, experience, and blog posts each live in their own data file — add a
new entry and it shows up everywhere it needs to, with zero component edits.

## Stack

- **React 19 + Vite** — build tooling
- **React Router (HashRouter)** — client-side routing that works on GitHub
  Pages without any server config
- **Tailwind CSS** (+ `@tailwindcss/typography` for blog post rendering)
- **react-markdown** — blog posts are written in plain Markdown
- No backend. The `/stats` page fetches live data client-side, directly from
  each platform's API, on every page load.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Hot reload is on.

---

## 1. Make it yours

### Identity, links, and stats handles
Edit **`src/config/site.js`**. This is the only file you need to touch to
update your name, tagline, email, social links, and the handles used on the
`/stats` page.

### Projects
Edit **`src/data/projects.js`**. Push a new object onto the array — the
template and field descriptions are documented in a comment at the top of the
file. Projects automatically appear on the homepage (if `featured: true`),
the `/projects` grid, and get their own `/projects/:slug` page. No image is
required — each card gets a unique generated "signal" graphic derived from
its slug.

### Experience
Edit **`src/data/experience.js`**. Push a new role onto the array; it renders
on the `/experience` timeline in the order you list it.

### Blogs
Edit **`src/data/blogs.js`**. Push a new post with a `content` field written
in Markdown (headings, lists, bold, links, and code blocks all work). Delete
the example post once you've written your own.

### Resume
Drop your latest PDF at `public/resume.pdf` (a copy of your current resume is
already there) — the download icon in the nav links to it automatically.

---

## 2. The `/stats` page

Four cards, each independent — if one platform is unavailable, the rest
still work.

| Platform | Data source | Notes |
|---|---|---|
| **Codeforces** | Official public API (`codeforces.com/api`) | Rating, rank, solved count, and a submission heatmap. Reliable. |
| **GitHub** | Official REST API + [github-contributions-api](https://github.com/grubersjoe/github-contributions-api) | Contribution heatmap, repos, followers. Reliable. |
| **LeetCode** | [alfa-leetcode-api](https://github.com/alfaArghya/alfa-leetcode-api) (community project, no official API exists) | Uses a free hosted instance that can take up to a minute to "wake up" on first load. For a permanent site, consider deploying your own instance (instructions in that repo) and updating `LEETCODE_API_BASE` in `src/hooks/useLeetcode.js`. |
| **TUF+** | Unofficial internal endpoint | takeUforward has no public API. This is best-effort and may stop working without notice — the card degrades gracefully to a link-out if so. |

To enable a card, add the handle in `src/config/site.js`. Leaving a handle
blank hides that card's live data and shows a short "add your handle" note
instead of broken output.

---

## 3. Deploy to GitHub Pages

### Step 1 — set your repo name
Open **`vite.config.js`** and set `REPO_NAME` to your repository's exact
name:

- Deploying to `https://<you>.github.io/<repo-name>/` (a normal project
  repo) → set `REPO_NAME = 'your-repo-name'`
- Deploying to `https://<you>.github.io/` (a repo literally named
  `<you>.github.io`) → set `REPO_NAME = ''`

Also update `homepage` in `package.json` to match.

### Step 2 — push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<you>/<repo-name>.git
git push -u origin main
```

### Step 3 — turn on Pages
In your repo: **Settings → Pages → Build and deployment → Source →
GitHub Actions**.

A workflow is already included at `.github/workflows/deploy.yml`: every push
to `main` builds the site and deploys it automatically. No further setup —
after your first push, check the **Actions** tab for progress, then your
site is live at the URL from Step 1.

### Alternative: manual deploy (no Actions)
If you'd rather deploy by hand:

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch (via the
`gh-pages` package, already configured in `package.json`). Then in
**Settings → Pages**, set the source branch to `gh-pages`.

---

## Project structure

```
src/
  config/site.js        <- your identity, links, platform handles
  data/
    projects.js         <- add projects here
    experience.js        <- add roles here
    blogs.js              <- add posts here
  components/            <- shared UI (nav, cards, heatmap, hero)
  hooks/                 <- live data fetchers for /stats
  pages/                 <- one file per route
```

Nothing outside `src/config` and `src/data` needs to change for routine
content updates.
