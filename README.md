# Bildung für Kinder in Uganda e.V. Website

Simple static website for the registered association **Bildung für Kinder in Uganda e.V.**

## Project Structure

- `index.html`
- `about.html`
- `our-work.html`
- `bavaria-schools.html`
- `current-needs.html`
- `transparency.html`
- `contact.html`
- `impressum.html`
- `privacy.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/images/`

## Local Preview (Beginner-Friendly)

1. Open the project folder in Cursor.
2. Open a terminal in the project root.
3. Run:

```bash
python3 -m http.server 5500
```

4. Open in your browser:

`http://localhost:5500`

The homepage is served from `index.html`.

## Deployment Options

This site is ready for standard static hosting, including:

- GitHub Pages
- Netlify
- Any standard static web host

No backend is required. All links and assets use relative paths suitable for plain static deployment.

## Before Launch

- [ ] Add final public email address where placeholders are shown.
- [ ] Replace placeholder images in `assets/images/` (e.g. `hero.jpg`, `school.jpg`).
- [ ] Review `impressum.html` and `privacy.html` for legal completeness if needed.
- [ ] Do a final mobile check on common screen sizes.
- [ ] Test all navigation links and page buttons.
