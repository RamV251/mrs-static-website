# MRS Child & Eye Care Hospital

Professional hospital website for pediatric and ophthalmology care. Built with React, Vite, React Router, and React Helmet Async.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── pages/          # Route pages (Home, Doctors, Services, Facilities)
├── components/     # Reusable UI components
├── styles/         # CSS stylesheets
├── data/           # Hospital content (easy to update)
├── assets/         # Images and static files
├── App.jsx
└── main.jsx
```

## Updating content

Edit files in `src/data/` for doctors, services, facilities, and site-wide contact details. Replace image placeholders in components with real images in `src/assets/`.

## Deployment

After `npm run build`, deploy the `dist/` folder to your hosting provider. Update `SITE_URL` in `src/data/site.js` for correct canonical and Open Graph URLs.
