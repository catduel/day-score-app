# GitHub Pages — public site

This folder is published as a static website at:

**https://catduel.github.io/day-score-app/**

It hosts the legal pages Apple requires for App Store submission:

| URL | Used in App Store Connect |
|---|---|
| `/` | Marketing URL (optional) |
| `/privacy-policy.html` | **Privacy Policy URL** (required) |
| `/terms-of-use.html` | EULA / Terms |
| `/support.html` | **Support URL** (required) |

## How to turn Pages on (once)

1. Go to https://github.com/catduel/day-score-app/settings/pages
2. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main` / `/docs`
3. Click **Save**.
4. Wait ~60 seconds. The URL above will start serving the pages.

After that, every push to `main` that touches `/docs/**` redeploys automatically.

## Editing copy

All pages are plain HTML and share `style.css`. Update text in the relevant file and push to `main`. There is no build step.
