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
- Home (with variants)
- About Us
- Services
- Portfolio
- Blog
- Contact

---

## Performance Optimizations

- ✅ Lazy loading for route components
- ✅ React.StrictMode enabled
- ✅ Swiper pagination/navigation
- 🔄 Image lazy loading (planned)
- 🔄 Code splitting (planned)

---

## Future Enhancements

1. Component modularization
2. TailwindCSS migration
3. Image optimization (WebP, lazy load)
4. TypeScript strict mode
5. E2E testing setup

---

**Last Updated:** 2025-01-09
