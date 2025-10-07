# Frontend Documentation
## VP Gregory Allan Rusland Website

---

## Architecture Overview

This project is built with:
- **React 18** with TypeScript
- **Vite** as build tool
- **React Router** for routing
- **Swiper** for carousels
- **TailwindCSS** + Custom CSS for styling

---

## Component Structure

```
src/
├── components/
│   ├── Header.tsx          # Main navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Preloader.tsx       # Loading animation
│   └── PageTitle.tsx       # Page banner/breadcrumbs
├── layouts/
│   └── MainLayout.tsx      # Main page wrapper
├── pages/
│   ├── Home2.tsx           # Primary homepage (VP landing)
│   ├── Home.tsx            # Alternate homepage
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── [other pages]
├── data/
│   ├── navigation.ts       # Menu structure
│   └── siteInfo.ts         # Contact & social links
└── hooks/
    ├── usePreloader.ts     # Loading state management
    └── useStickyHeader.ts  # Sticky header behavior
```

---

## Primary Homepage

**Route:** `/`  
**Component:** `src/pages/Home2.tsx`

### Sections:
1. **Hero Banner** - Swiper carousel with slides
2. **Feature Cards** - Icon-based service highlights
3. **About Section** - With video lightbox
4. **Timeline** - Experience milestones
5. **Services Grid** - Legal practice areas
6. **Testimonials** - Client feedback carousel
7. **Team Members** - Leadership profiles
8. **News/Blog** - Latest articles
9. **Counter Stats** - Achievements
10. **Newsletter** - Email subscription

---

## Styling Guidelines

### CSS Structure
- `/css/main.css` - Primary template styles
- `/css/responsive.css` - Mobile/tablet breakpoints
- `/css/bootstrap.css` - Grid system
- `/css/animate.css` - Animation utilities

### Custom Animations
- Fade-in effects on scroll
- Counter animations
- Carousel transitions
- Hover states

### Responsive Breakpoints
```css
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px+
Large: 1440px+
```

---

## Image Assets

### Locations
- `/public/images/resource/` - Content images
- `/public/images/gallery/` - Gallery thumbnails
- `/public/images/icons/` - UI icons
- `/public/images/background/` - Page banners

### Naming Convention
- Team photos: `team-[number].jpg`
- News: `news-[number].jpg`
- Gallery: `footer-gallery-thumb-[number].jpg`

---

## Navigation Structure

Defined in `src/data/navigation.ts`:
- Home
- About Us
- Services
- Portfolio (masonry layout only)
- Blog
- Contact Us

**Note**: Navigation has been simplified to single-level items (no dropdowns) as of v0.4.4 to align with government website standards.

---

## Performance Optimizations

- ✅ Lazy loading for route components
- ✅ React.StrictMode enabled
- ✅ Swiper pagination/navigation
- 🔄 Image lazy loading (planned)
- 🔄 Code splitting (planned)

---

## Design System & Style Guide

For comprehensive design guidelines, see **[/docs/style-guide.md](/docs/style-guide.md)**

This document covers:
- Brand identity and logo usage
- Complete color palette with HSL values
- Typography scale and font families
- Button and form component styles
- Layout system and responsive breakpoints
- Accessibility standards (WCAG 2.1 AA)
- Animation patterns and interaction guidelines
- Icon system documentation

All new components should reference the style guide for consistent visual implementation.

---

## jQuery Migration Status

### ✅ Phase 1: Complete (2025-01-09)
- **jQuery removal:** All jQuery scripts removed from `index.html`
- **CSS cleanup:** Removed jQuery plugin CSS (`jquery.fancybox.min.css`, `jquery-ui.css`, `jquery.mCustomScrollbar.min.css`)
- **Performance:** ~300KB+ bundle size reduction
- **Counter animations:** Migrated to `useCountUp` hook with Intersection Observer
- **Lightbox:** Migrated to `yet-another-react-lightbox` package
- **Scroll animations:** Using `react-intersection-observer`
- **Sticky header:** Already migrated to `useStickyHeader` hook
- **Carousels:** Already using Swiper library

### ✅ Phase 1.5: Integration Complete (2025-01-09)
- **Home.tsx counters:** Integrated 4 `CounterBox` components
- **Home2.tsx counters:** Integrated 7 `CounterBox` components
- **Video lightbox:** Integrated `Lightbox` for About section video
- **Gallery lightbox:** Integrated `Lightbox` for news image galleries
- **All interactive features:** Now using React hooks and components

### Migrated Functionality
1. **Counter animations** (`count-box`) → `useCountUp` hook + `CounterBox` component
2. **Image lightbox** (`lightbox-image`) → `Lightbox` component
3. **Scroll animations** (`wow`, `fadeIn`) → `useScrollAnimation` hook (available for use)
4. **Portfolio filtering** → Native React state (already implemented)

---

## Future Enhancements

### Phase 2: Component Modularization (Planned)
- Extract Home2 sections into reusable components
- Create `src/components/home2/` directory structure
- Reduce component file sizes

### Phase 3: Content & Optimization (Planned)
- Complete placeholder pages (ServicesDetail, PortfolioSingle, Testimonial)
- Convert images to WebP format
- Implement progressive image loading
- Add responsive image sizes

### Phase 4: Code Quality (Planned)
- Enable TypeScript strict mode
- Add ESLint configuration
- Set up E2E testing (Playwright/Cypress)
- Add component unit tests

---

---

## Phase P3.4: Content Alignment & VP Branding (Completed)

### Overview
Transformed the website from a law firm template to the official VP website structure:

### Key Changes
- **Navigation**: Simplified to single-level menu (removed all dropdowns)
- **Contact Information**: Updated to VP Office, Suriname (+597 472-000, office@president.gov.sr)
- **Services Page**: Replaced legal services with government programs
- **About Page**: Restructured for VP biography and national leadership content
- **Portfolio**: Single masonry layout focused on national projects
- **Removed Pages**: Portfolio 2-Column, Home Alternate
- **Removed Sections**: Pricing section from Services page

### Content Updates
- All page titles and meta descriptions updated for SEO
- Footer copyright updated to 2025 © Office of the Vice President
- Contact form topics changed to government-relevant categories
- Timeline updated to reflect VP career milestones (2020-2024)
- Counter statistics changed to government impact metrics
- Team section restructured for government leadership

### Technical Changes
- Deleted `Portfolio2Col.tsx` component
- Removed routes: `/portfolio/2-col`, `/home-alternate`
- Updated map coordinates to Paramaribo, Suriname
- Simplified routing structure in `App.tsx`

---

**Last Updated:** 2025-01-XX (Phase P3.4 Complete)
