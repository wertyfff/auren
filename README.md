# AUREN - Form of Life

Live website: https://wertyfff.github.io/auren/
Repository: https://github.com/wertyfff/auren

The responsive interface is checked from 320 px to desktop widths, including mobile navigation, keyboard interaction and accordion states.

Static website built with HTML, CSS and JavaScript. No build step, packages or database are required.

Run from this directory:

`python -m http.server 4173 --bind 127.0.0.1`

Open http://localhost:4173/

## Pages

- Home: `index.html`
- Projects: `?page=projects`
- Project details: `?page=project&id=patio`, `light`, `garden`, `silence`
- Services: `?page=services`
- Studio: `?page=studio`
- Contact: `?page=contacts`
- Privacy: `?page=privacy`

All contact actions link to https://t.me/kiwnt1. No contact data is collected or stored by the website. No analytics or advertising scripts are installed.

## Content and assets

The complete website interface, project descriptions, metadata and accessibility labels are in English.

`content.js` contains the conceptual project selection and studio page. Areas, storeys, dates and scenarios are illustrative concept parameters selected at the owner's request. They are not claims about completed buildings; the site includes this disclosure.

`app.js` contains page templates, navigation and interactions. `brutal.css` provides the current design over `styles.css`.

Photographs are processed versions of the owner's references, exported as WebP. Original PNG versions remain in the working source directory. Asset provenance is documented in `assets/SOURCES.md`.

The loading sequence uses seven local Unsplash photographs, one persistent canvas and 200 ms per frame. The white background follows the complete sequence. The wordmark fades out and the page fades in over 800 ms each. Accordions start closed.

## Hosting

Upload this directory's contents to static hosting while preserving the file structure. No backend or secret keys are required. Public hosting and a domain are not included in this local delivery.
