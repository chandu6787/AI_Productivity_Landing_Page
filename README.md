# NOVA — AI Productivity Platform

> **Build Better. Work Smarter.**

NOVA is a modern, fully responsive SaaS landing page for a fictional AI productivity platform. It helps teams manage projects, automate repetitive tasks, and collaborate efficiently — all presented through a polished, production-quality marketing site.

---

## Live Demo

<!-- add your link here -->
**[View Live Demo →](https://your-demo-link.com)**

---

## Project Description

This project is a single-page marketing landing page for **NOVA**, a fictional AI-powered productivity platform. The page includes a hero section with dual CTAs, a trusted-by logo strip, six feature cards, an about/product section, a four-step "how it works" flow, animated statistics, tabbed solution use-cases, an auto-rotating testimonial carousel, a monthly/annual pricing toggle with three tiers, an accordion FAQ, a final CTA band, and a full footer with newsletter signup and email validation.

The design follows a modern SaaS aesthetic with an indigo/violet gradient primary palette, generous whitespace, rounded corners, subtle shadows, and smooth micro-interactions throughout. It supports both light and dark themes (persisted to `localStorage`), scroll-triggered reveal animations, an Intersection Observer–driven count-up for statistics, and a demo video modal.

---

## Technologies Used

| Technology          | Purpose                                      |
|---------------------|----------------------------------------------|
| **React 18**        | UI library (functional components + hooks)   |
| **Vite 5**          | Build tool & dev server                      |
| **TypeScript**      | Type-safe development                        |
| **Tailwind CSS 3**  | Utility-first styling                        |
| **Lucide React**    | Icon library                                 |
| **Bolt AI**         | Initial scaffolding from a natural-language prompt |

---

## Features

### Sections
- **Navbar** — sticky/fixed, logo, nav links, "Get Started" CTA, mobile hamburger slide-in menu, dark/light theme toggle
- **Hero** — bold headline, subheadline, primary ("Start Free Trial") and secondary ("Watch Demo") CTA buttons, dashboard mockup image with floating accent cards
- **Trusted By** — row of 6 grayscale placeholder company logos
- **Features** — 6 feature cards in a responsive grid with icons, hover lift/shadow effects
- **About / Product** — two-column layout with image and descriptive copy explaining NOVA
- **How It Works** — 4 numbered steps, horizontal on desktop and stacked on mobile
- **Statistics** — 4 stat cards with animated count-up numbers triggered on scroll via Intersection Observer
- **Solutions / Use Cases** — tabbed interface for Startups, Enterprises, Agencies, and Remote Teams
- **Testimonials** — carousel/slider with 4 testimonials, auto-play (pauses on hover), prev/next controls, and dot indicators
- **Pricing** — 3 plans (Starter, Pro, Enterprise) with a monthly/annual toggle switch, "Most Popular" highlighted plan
- **FAQ** — 6 questions in an accordion (one open at a time, smooth expand/collapse)
- **Final CTA** — bold gradient closing section with a single strong CTA button
- **Footer** — logo, description, 4 link columns, social icons, newsletter signup with email validation and success/error states

### Interactions
- Fully responsive navigation with mobile hamburger menu
- Smooth scrolling for all in-page anchor links
- FAQ accordion (expand/collapse, one-at-a-time)
- Hover effects on all buttons and cards
- All navigation links scroll to their respective sections

### Bonus Features
- Dark/light mode toggle (persisted choice in `localStorage`, respects system preference on first visit)
- Animated statistics on scroll (Intersection Observer + `requestAnimationFrame` count-up with easing)
- Scroll-triggered fade/slide-in animations for sections (`Reveal` component)
- Testimonial carousel with auto-play (5s interval, pauses on hover)
- Monthly/annual pricing toggle with 20% savings badge
- Demo modal (popup) triggered by "Watch Demo" button (close on Escape, backdrop click, or button)
- Newsletter email validation with success and error visual states
- Back-to-top button that appears after scrolling 600px

---

## Component Structure

```
src/
├── components/
│   ├── About.tsx          # Two-column product/about section
│   ├── BackToTop.tsx      # Floating scroll-to-top button
│   ├── DemoModal.tsx      # "Watch Demo" popup modal
│   ├── FAQ.tsx            # Accordion FAQ (one open at a time)
│   ├── Features.tsx       # 6-card responsive feature grid
│   ├── FinalCTA.tsx       # Bold gradient closing CTA band
│   ├── Footer.tsx         # Footer with links, socials, newsletter
│   ├── Hero.tsx           # Hero with headline, CTAs, mockup
│   ├── HowItWorks.tsx     # 4-step horizontal/stacked flow
│   ├── Navbar.tsx         # Sticky nav + mobile menu + theme toggle
│   ├── Pricing.tsx        # 3 plans with monthly/annual toggle
│   ├── Reveal.tsx         # Scroll-triggered reveal wrapper
│   ├── Solutions.tsx      # Tabbed use-case panel
│   ├── Stats.tsx          # Animated count-up stat cards
│   ├── Testimonials.tsx   # Auto-rotating testimonial carousel
│   └── TrustedBy.tsx      # Grayscale logo strip
├── context/
│   └── ThemeContext.tsx   # Dark/light theme provider + hook
├── data/
│   └── content.tsx        # All page content (features, pricing, FAQs, etc.)
├── hooks/
│   ├── useCountUp.ts      # Animated number count-up hook
│   └── useInView.ts       # Intersection Observer hook
├── App.tsx                # Main app — assembles all sections
├── main.tsx               # React entry point
└── index.css              # Tailwind + custom styles & animations
```

---

## Installation Instructions

```bash
# 1. Clone the repository
git clone https://github.com/your-username/nova-landing-page.git

# 2. Navigate into the project directory
cd nova-landing-page

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build      # outputs optimized static build to dist/
npm run preview    # preview the production build locally
npm run typecheck  # run TypeScript type checking
npm run lint       # run ESLint code analysis
```

---

## Deployment Instructions

This app is built with **Vite** and **React**, generating static production assets in the `dist/` folder. You can deploy it easily to popular hosting platforms:

### 1. Vercel (Recommended)
1. Push your changes to GitHub.
2. Import your repository into [Vercel](https://vercel.com).
3. Vercel automatically detects Vite settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

### 2. Netlify
1. Connect your GitHub repository to [Netlify](https://netlify.com).
2. Set **Build command** to `npm run build` and **Publish directory** to `dist`.
3. Alternatively, drag and drop the `dist/` folder into Netlify Drop.

### 3. GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add `"predeploy": "npm run build"` and `"deploy": "gh-pages -d dist"` to `package.json`.
3. Set `base: '/<repo-name>/'` in `vite.config.ts`.
4. Run `npm run deploy`.

## Screenshots

| View     | Screenshot |
|----------|------------|
| Desktop  | <!-- add your desktop screenshot here --> |
| Mobile   | <!-- add your mobile screenshot here --> |
| Dark Mode| <!-- add your dark mode screenshot here --> |

---

## AI Tools Used

This project was initially scaffolded using **Bolt AI** from a natural-language prompt describing the desired landing page. Bolt generated the initial component structure, styling, and interactions. The code was then reviewed and modified afterward to refine the design, fix edge cases, and ensure production quality.

---

## Design Decisions & Challenges

> _Fill in the sections below with your own reflections._

### Design Decisions
<!-- Why did you choose this color palette, typography, and layout? -->

### Technology Choices
<!-- Why React + Vite + Tailwind? What influenced these choices? -->

### Component Structure Reasoning
<!-- Why did you organize the components this way? How does data separation help? -->

### Challenges Faced
<!-- What was difficult? How did you solve responsive, animation, or state issues? -->

### How AI Was Used
<!-- How did Bolt AI help? What did you change after the initial generation? -->

---

## Possible Improvements

- Add real routing with React Router for separate pages (Features, Pricing, Blog)
- Implement actual authentication and a trial signup flow
- Connect the newsletter form to a real email service (Mailchimp, Resend)
- Replace placeholder images with custom NOVA-branded illustrations
- Add unit and integration tests with Vitest and React Testing Library
- Implement internationalization (i18n) for multi-language support
- Add a blog/knowledge-base section with MDX content
- Integrate a real video player for the demo modal (YouTube/Vimeo embed)
- Add a cookie consent banner and GDPR compliance widgets
- Performance: add lazy-loading and code-splitting for below-the-fold sections

---

## License

This project is for **educational/assignment purposes only**. It is not licensed for commercial use.
