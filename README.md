# Mayapur Care — Static Hospital Website

A responsive, mobile-first hospital website built with plain HTML, CSS and JavaScript.

## Files
- `index.html` — page structure and content
- `styles.css` — responsive layout and styling
- `script.js` — mobile navigation, date validation and appointment request interaction

## Preview locally
Open `index.html` in a browser, or run a local server from this folder:
```bash
python -m http.server 8000
```
Then visit http://localhost:8000.

## Deploy
Upload all three website files to the same folder in your hosting account (usually `public_html`) or drag the folder into Netlify Drop / deploy it with GitHub Pages or Vercel static hosting.

## Important before going live
This is a front-end demo, not a connected hospital booking system. The appointment form currently opens the visitor's default email app and uses `appointments@example.com`. Replace that address in `script.js` with the hospital's real appointment email, or connect the form to a secure backend / booking system. Update the demo hospital name, phone numbers, doctor names, qualifications, services, timings, address and images in `index.html`. Confirm emergency contact details and service availability with the hospital. Do not collect sensitive patient information in this demo form.

Images are loaded from Unsplash and Google Fonts from Google Fonts, so those assets require an internet connection.
