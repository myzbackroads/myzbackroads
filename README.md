# MyZ Backroads Website

A launch-ready static website for **MyZ Backroads**, built for GitHub and Netlify.

## Fastest way to publish

1. Push this repository to GitHub.
2. Connect the repository to Netlify.
3. Use the repository root as the publish directory.
4. Leave the build command blank; this is a plain HTML/CSS/JavaScript site.
5. Netlify should redeploy automatically within a few minutes after each push.

The repository root must contain `index.html`.

## Files included

- `index.html` — main website, featured release, story, music, videos, gallery, and contact sections
- `privacy.html` — privacy page
- `404.html` — custom page-not-found screen
- `styles.css` — design system, responsive layout, accessibility states, and visual polish
- `main.js` — reusable featured-release and song data, music rendering, mobile menu, and copyright year
- `robots.txt` — crawler rules and sitemap reference
- `sitemap.xml` — sitemap for the public pages
- Image files in the repository root — cover art, gallery artwork, favicon, hero, and social preview assets

## Updating music and featured releases

Future songs can be added in `main.js` by adding another item to the `songs` array. The featured release is controlled by the `featuredRelease` object.

Each song supports:

- Cover art
- Description
- Story behind the song
- YouTube
- Spotify
- Apple Music
- Bandcamp

Only links that are present in the song data are rendered, so unavailable services are hidden automatically.

## Updating images

Upload new JPG, PNG, WebP, or SVG assets into the repository root and update the matching image path in `index.html` or `main.js`.

For best launch performance:

- Use appropriately sized images.
- Keep cover art square when possible.
- Keep hero photography wide enough for desktop cropping.
- Add meaningful alt text for content images.
- Do not stretch or distort images; the CSS uses `object-fit: cover` for cropped cards.

## Contact email

The website currently uses:

`mcmaraia@gmail.com`

## No build command required

This is a plain HTML/CSS/JavaScript website. Netlify should use:

- Base directory: blank
- Build command: blank
- Publish directory: blank or `.`
