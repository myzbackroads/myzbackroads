# MyZ Backroads Website

A complete static website for **MyZ Backroads**, built for GitHub and Netlify.

## Fastest way to publish

1. Download and unzip this package.
2. Open your GitHub repository: `myzbackroads/myzbackroads`.
3. Click **Add file** → **Upload files**.
4. Drag **all files and folders inside this package** into GitHub.
5. In the commit box, type: `Add MyZ Backroads website`
6. Click **Commit changes**.
7. Netlify should redeploy automatically within a few minutes.

The repository root must contain `index.html`.

## Files included

- `index.html` — main website
- `privacy.html` — privacy page
- `404.html` — custom page-not-found screen
- `netlify.toml` — Netlify settings
- `assets/css/styles.css` — design and mobile layout
- `assets/js/main.js` — mobile menu and copyright year
- `assets/images/` — all website artwork and placeholders

## Replacing the placeholder portrait

Replace:

`assets/images/michael-placeholder.svg`

with your own image. You can use JPG or PNG, but then update the image name in `index.html`.

Example:

```html
<img src="assets/images/michael.jpg" alt="Michael Maraia" />
```

## Replacing gallery placeholders

Upload your photos into `assets/images/` and change the image paths in the Gallery section of `index.html`.

## Updating music links

Search `index.html` for the existing YouTube, Spotify, Apple Music, Instagram, and TikTok links and replace any link that changes.

## Contact email

The website currently uses:

`mcmaraia@gmail.com`

## No build command required

This is a plain HTML/CSS/JavaScript website. Netlify should use:

- Base directory: blank
- Build command: blank
- Publish directory: blank or `.`
