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

## Phase P3.5: Frontend Polish & UX Enhancement (Completed)

### Overview
Comprehensive frontend polish and UX enhancements to finalize all visual and user experience details before backend integration. This phase focused on content refinement, accessibility, performance optimization, and animation consistency.

### Content Updates
- **Hero Section**: Replaced all "LawSight" placeholder text with VP-focused messaging
  - Slide 1: "Committed to Suriname's Prosperity"
  - Slide 2: "Serving the People of Suriname"
- **Meta Information**: Updated `index.html` title to "Office of the Vice President | Republic of Suriname"
- **Alt Text**: Enhanced all image alt attributes with contextual, descriptive text
- **Lorem Ipsum Removal**: Replaced all placeholder text with government-appropriate descriptions

### Accessibility Enhancements
- **ARIA Labels**: Added to all interactive elements (links, buttons, navigation)
- **Role Attributes**: Implemented `role="list"` for social media icon lists
- **Image Alt Text**: Comprehensive, descriptive alt attributes for all images
- **Social Icons**: Updated from Pinterest/Vimeo to LinkedIn/Instagram
- **Keyboard Navigation**: Improved focus states and tab order
- **WCAG 2.1 AA**: Enhanced compliance for accessibility standards

### Performance Optimization
- **Font Preloading**: Implemented preconnect and preload for Google Fonts (Poppins, Muli, Playfair Display)
- **Image Lazy Loading**: Added `loading="lazy"` to all non-critical images across all pages
- **Animation Performance**: All animations use GPU-accelerated properties (transform, opacity)
- **WOW.js Integration**: Added staggered animations to Hero section (0ms, 300ms, 600ms delays)

### Animation & Micro-Interactions
- **Hero Section**: Applied WOW.js fadeInUp animations with delays
  - Headings: 0ms delay
  - Description text: 300ms delay
  - CTA buttons: 600ms delay
- **Team Section**: Maintained existing WOW.js fadeInUp animations (0ms, 300ms, 600ms, 900ms)
- **About Section**: Preserved fadeInRight animations on image column

### Typography & Design Tokens
- **CSS Variables**: Verified consistent use throughout all components
  - Font sizes: `var(--font-size-*)`
  - Spacing: `var(--spacing-*)`
  - Colors: `var(--color-*)`
- **Heading Hierarchy**: Verified proper H1-H6 structure across all pages
- **Line Heights**: Maintained consistent spacing using design tokens

### Files Modified
- `src/components/home2/Hero.tsx` - Content, accessibility, lazy loading, animations
- `src/components/home2/QuotesSection.tsx` - Lazy loading, alt text
- `src/pages/About.tsx` - Team section accessibility, social icons
- `index.html` - Meta tags, font preloading
- `docs/Changelog.md` - Added v0.4.5 entry
- `docs/RestorePoint_P3.5_FinalPolish.md` - Created restore point

### Performance Targets
- **Lighthouse Scores** (Pre-Backend):
  - Performance: ≥90
  - Accessibility: ≥95
  - SEO: ≥95
  - Best Practices: ≥90

### Next Steps
- **Phase P4**: Backend Setup & Admin MVP
  - Enable Lovable Cloud
  - Implement authentication module
  - Create admin dashboard
  - Set up database schema and RLS policies

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

**Last Updated:** 2025-01-08 (Phase P3.5 Complete)
