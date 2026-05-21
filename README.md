# MCA Advisory — Website

Premium bilingual website for MCA Advisory, an accounting, audit, tax, and business advisory firm based in Marrakech, Morocco.

## File Structure

```
/
├── index.html              Main HTML file (all sections)
├── assets/
│   ├── css/
│   │   └── style.css       All styles (CSS variables, responsive, animations)
│   ├── js/
│   │   └── main.js         All JS (i18n, dynamic content, interactions)
│   └── img/
│       └── logo-placeholder.svg   SVG logo (replace with final brand)
└── README.md
```

## Features

- **Bilingual** — French (default) + English via language switcher
- **Fully responsive** — Mobile-first, works on all screen sizes
- **Premium design** — Navy/gold luxury look with Playfair Display + Inter fonts
- **12 sections** — Hero, Trust Bar, About, Services, Why Us, Process, Sectors, Insights, CTA, Contact, Footer
- **Dynamic content** — Services, pillars, process steps, sectors, and blog posts rendered from a JS data object
- **Form validation** — Client-side validation with bilingual error messages
- **Scroll animations** — Intersection Observer-based reveal animations
- **Sticky header** — Transparent-to-solid on scroll
- **Back to top** — Smooth scroll with animated button
- **Active nav** — Highlights current section in navigation
- **Language persistence** — Saves preference in localStorage

## Customization

### Replace Images
Add real photos to `/assets/img/`:
- `hero-bg.jpg` — Hero background (1920×1080 recommended)
- `founder.jpg` — Portrait of Med Aissam Tachafine

Then update the CSS:
```css
.hero-img-placeholder { background-image: url('../img/founder.jpg'); background-size: cover; }
```

### Update Content
All bilingual text lives in the `translations` object in `assets/js/main.js` (lines ~15–195).
All dynamic section data (services, sectors, etc.) lives in the `data` object (lines ~200–450).

### Update Contact Info
Edit the contact section in `index.html` directly — phone, email, address, and WhatsApp link.

### Add Real Form Submission
In `main.js`, replace the `setTimeout` simulation in `initContactForm()` with a real fetch/POST to your backend or a service like Formspree:
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: new FormData(form),
  headers: { 'Accept': 'application/json' }
});
```

## Contact Info in Website
- Address: N°17, 4ème étage Borj Menara II, Marrakech
- Phone: +212 5 24 43 90 36
- Email: contact@moroccoaccounts.com
- Hours: Lundi – Vendredi, 9h – 18h30

## Technology
- Pure HTML5, CSS3, Vanilla JavaScript (ES6+)
- Google Fonts: Playfair Display, Inter, IBM Plex Mono
- No frameworks, no libraries, no build tools required

Open `index.html` in any browser to view.
