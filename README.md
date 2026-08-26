# Elev8MD Website

Static site for elev8md.co — no build step, plain HTML/CSS/JS.

## Files
- `index.html` — the site
- `privacy.html`, `terms.html` — legal pages (drafts, need attorney review before launch)
- `styles.css`, `script.js` — styling and interactions
- `images/` — drop real photography here (see naming convention below)
- `CNAME` — points GitHub Pages at elev8md.co

## Deployment (GitHub Pages)
This repo is set up to deploy automatically to GitHub Pages on every push to `main`.

**To point elev8md.co at it:** add these DNS records at your domain registrar (GoDaddy, Namecheap, etc.):

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | `<github-username>.github.io` |

DNS changes can take up to 24-48 hours to propagate. Once live, GitHub Pages auto-issues an SSL certificate for the domain.

## Adding real photography
Drop images into `images/` using these exact filenames, then ask Claude to wire them in:

| Filename                  | Used for                          | Suggested size |
|----------------------------|------------------------------------|-----------------|
| `hero.jpg`                | Hero background (optional)         | 1920×1080 |
| `founder.jpg`             | Origin section / Dr. Wiseman photo | 1200×900 |
| `service-iv.jpg`          | IV & Mobile Rehydration            | 1200×900 |
| `service-membership.jpg`  | Concierge Medical Membership       | 1200×900 |
| `service-events.jpg`      | Private Event & Travel Coverage    | 1200×900 |
| `team-mark.jpg`           | Dr. Mark Wiseman headshot          | 600×600 (square) |
| `team-liz.jpg`            | Liz / Nursing Team headshot        | 600×600 (square) |
| `og-image.jpg`            | Social share preview image         | 1200×630 |

## Pending before public launch
See the full site audit for details. Highest priority:
1. Real photography (above)
2. A real booking/intake flow (currently mailto: links + phone)
3. Legal review of `privacy.html` and `terms.html`
