<<<<<<< HEAD
# Sweet Crumbs — Boutique Cake Studio

Welcome to the Sweet Crumbs site. This is a clean, soft, and polished portfolio-style website built for a cake designer who wants an elegant, modern online presence.

It is meant to feel warm and friendly, with easy navigation, a strong visual story, and clear sections for the things every cake studio needs:
- a welcoming home page
- a beautiful portfolio gallery
- a clear services and pricing page
- a short about story
- a contact form with business details

## What this site shows

This website is designed to present a cake studio in a simple, professional way.

- The **Home page** introduces the brand, highlights featured cake creations, shows trust logos, and includes a testimonial section.
- The **Gallery page** displays examples of cakes by occasion, and makes it easy to browse wedding, birthday, baby shower, and cupcake designs.
- The **Services page** explains the studio’s offerings, shows pricing packages, and includes a cake-size calculator and FAQs.
- The **About page** shares the studio story, core values, and a milestone timeline.
- The **Contact page** includes a form, studio hours, and a map placeholder.

## Quick start

To run the site locally:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

> The fonts are loaded through `next/font/google` on first build, so an internet connection is needed the first time.

## How the project is organized

### `app/`
This is the main site structure.
- `layout.tsx` sets up the page shell, loads fonts, and renders the navigation and footer.
- `globals.css` contains the site colors, typography, spacing, and motion settings.
- `page.tsx` is the home page.
- `gallery/page.tsx` is the portfolio gallery page.
- `services/page.tsx` is where pricing, packages, FAQs, and the calculator live.
- `about/page.tsx` is the story and timeline page.
- `contact/page.tsx` is the form page.

### `components/`
This folder contains reusable pieces of the site.
- `ui/` holds basic UI building blocks like buttons, cards, form controls, dialogs, and tabs.
- Other components build the visible page sections, such as:
  - `hero.tsx`
  - `trust-bar.tsx`
  - `featured-creations.tsx`
  - `gallery-grid.tsx`
  - `service-cards.tsx`
  - `pricing-card.tsx`
  - `faq-accordion.tsx`
  - `timeline.tsx`
  - `testimonial-carousel.tsx`
  - `contact-form.tsx`
  - `motion-reveal.tsx`

### `lib/data.ts`
This is the heart of the content.
- All gallery images, featured items, testimonials, service descriptions, pricing plans, FAQs, timeline items, hours, and social links are stored here.
- That means you can update the site content without changing the layout or structure.

### `public/images/`
This folder holds the site’s illustrations and placeholder visuals.


=======
# Sweet-Crumbs
>>>>>>> 
