# LaSight Law - Style Guide

**Version:** 1.0  
**Last Updated:** Phase 2 - Post Component Modularization  
**Demo Reference:** [https://html.themexriver.com/lasight/index-2.html](https://html.themexriver.com/lasight/index-2.html)

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Button & Form Styles](#4-button--form-styles)
5. [Layout & Grid System](#5-layout--grid-system)
6. [Component Standards](#6-component-standards)
7. [Image & Media Guidelines](#7-image--media-guidelines)
8. [Accessibility Rules](#8-accessibility-rules)
9. [Animation & Interaction Patterns](#9-animation--interaction-patterns)
10. [Icon System](#10-icon-system)
11. [Special Effects](#11-special-effects)

---

## 1. Brand Identity

### Core Visual Identity
- **Name:** LaSight Law / LawSight
- **Tagline:** Professional Legal Services
- **Visual Theme:** Premium legal services with sophisticated gold accents
- **Style:** Modern, professional, trustworthy with luxury touches

### Logo Usage
- **Primary Logo:** `/images/logo.png` (for light backgrounds)
- **Secondary Logo:** `/images/logo-2.png` (for dark backgrounds)
- **Sidebar Logo:** `/images/sidebar-logo.png` (navigation variant)
- **Footer Logo:** `/images/footer-logo.png` (footer variant)
- **Small Logo:** `/images/logo-small.png` (mobile/compact spaces)

### Signature Element
- **Location:** `/images/icons/signature.png`
- **Usage:** About sections, testimonials, personal touch elements
- **Style:** Hand-written appearance in gold/brown tones

---

## 2. Color Palette

### Primary Colors

```css
/* Gold Gradient (Primary Brand) */
--gold-light: #D5AA6D;
--gold-dark: #9e7247;
--gold-gradient: linear-gradient(to right, #D5AA6D 0%, #9e7247 100%);

/* Dark Tones */
--primary-dark: #191514;
--secondary-dark: #0a0a0a;
--charcoal: #222222;
--coal: #333333;
```

### Text Colors

```css
/* Text Hierarchy */
--text-primary: #191514;    /* Headings */
--text-secondary: #555555;  /* Body text */
--text-tertiary: #777777;   /* Light body */
--text-muted: #999999;      /* Meta info */
--text-white: #ffffff;      /* Dark backgrounds */
```

### Background Colors

```css
/* Backgrounds */
--bg-white: #ffffff;
--bg-light-gray: #eeeef6;
--bg-dark: #191514;
--bg-section: #f9f9f9;
```

### Accent Colors

```css
/* Interactive Elements */
--link-color: #4835ce;      /* Links */
--hover-gold: #d5aa6d;      /* Hover states */
--shadow-gold: rgba(212,169,109,0.15);
```

### Usage Guidelines

**Gold Gradient** → CTA buttons, hover effects, accent lines, icon highlights  
**Dark (#191514)** → Headers, footers, overlay sections  
**Gray Scale** → Body text hierarchy (555 → 777 → 999)  
**White** → Light sections, cards, contrast elements

---

## 3. Typography

### Font Families

```css
/* Primary Fonts */
font-family: 'Poppins', sans-serif;      /* Headings, Buttons, UI */
font-family: 'Muli', sans-serif;         /* Body Text, Paragraphs */
font-family: 'Playfair Display', serif;  /* Italic Accents, Quotes */
font-family: 'Open Sans', sans-serif;    /* Alternative Body */
```

### Font Loading

```html
<!-- In index.html -->
<link href="https://fonts.googleapis.com/css?family=Muli:300,300i,400,400i,600,600i,700,700i,800,800i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Playfair+Display:400,400i,700,700i,900,900i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
```

### Type Scale

```css
/* Heading Sizes */
h1 { font-size: 60px; line-height: 1.6em; }  /* Hero titles */
h2 { font-size: 40px; line-height: 1.6em; }  /* Section titles */
h3 { font-size: 30px; line-height: 1.4em; }  /* Subsections */
h4 { font-size: 24px; line-height: 1.6em; }  /* Card titles */
h5 { font-size: 20px; line-height: 1.6em; }  /* Small headings */
h6 { font-size: 18px; line-height: 1.6em; }  /* Meta headings */

/* Body Text */
body { font-size: 14px; line-height: 1.7em; }
p { font-size: 14px; line-height: 1.8em; }
```

### Font Weights

```css
/* Poppins Weights */
300 - Light (rarely used)
400 - Regular (body text)
500 - Medium (emphasis)
600 - Semi-bold (subheadings)
700 - Bold (primary headings)
800 - Extra-bold (hero text)
900 - Black (rare, heavy emphasis)

/* Muli Weights */
400 - Regular (default body)
600 - Semi-bold (emphasis)
700 - Bold (strong emphasis)
```

### Typography Examples

```tsx
// React/JSX Usage
<h2 className="font-['Poppins'] text-4xl font-bold text-[#191514] leading-tight">
  Professional <span className="font-['Playfair_Display'] italic text-[#d5aa6d]">Legal Services</span>
</h2>

<p className="font-['Muli'] text-sm text-[#777777] leading-relaxed">
  Expert consultation and representation for all your legal needs.
</p>
```

---

## 4. Button & Form Styles

### Button Variants

#### Primary Button (btn-style-one)
```css
.btn-style-one {
  background: linear-gradient(to right, #D5AA6D 0%, #9e7247 100%);
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  padding: 16px 36px;
  border-radius: 50px;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0px 10px 20px rgba(212,169,109,0.15);
  transition: all 0.3s ease;
}

.btn-style-one:hover {
  background: linear-gradient(to right, #9d7146 0%, #D5AA6D 100%);
  color: #ffffff;
}
```

**Usage:** Primary CTAs, contact forms, hero banners

#### Secondary Button (btn-style-two)
```css
.btn-style-two {
  background-color: #191514;
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  padding: 11px 32px;
  border-radius: 50px;
  text-transform: capitalize;
  box-shadow: 0px 2px 10px 3px rgba(0,0,0,0.15);
}

.btn-style-two:hover {
  background: linear-gradient(to right, #D5AA6D 0%, #9e7247 100%);
  color: #ffffff;
}
```

**Usage:** Secondary actions, navigation, less prominent CTAs

#### Tertiary Button (btn-style-three)
```css
.btn-style-three {
  background-color: #eeeef6;
  color: #333333;
  font-size: 15px;
  font-weight: 400;
  padding: 11px 32px;
  border-radius: 50px;
  text-transform: capitalize;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.20);
}

.btn-style-three:hover {
  background: linear-gradient(to right, #D5AA6D 0%, #9e7247 100%);
  color: #ffffff;
}
```

**Usage:** Filter buttons, secondary navigation, light backgrounds

### React Button Component Example

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ variant = 'primary', children, onClick }: ButtonProps) => {
  const variants = {
    primary: 'btn-style-one',
    secondary: 'btn-style-two',
    tertiary: 'btn-style-three'
  };

  return (
    <button className={`theme-btn ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

### Form Input Styles

```css
/* Text Inputs */
input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Muli', sans-serif;
  transition: all 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #d5aa6d;
  box-shadow: 0 0 8px rgba(213,170,109,0.2);
}

/* Select Dropdowns */
select {
  appearance: none;
  background: url('../images/icons/icon-select.png') no-repeat right 15px center;
  background-size: 12px;
}
```

---

## 5. Layout & Grid System

### Container Variants

```css
/* Standard Container */
.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}

/* Medium Container */
.medium-container {
  max-width: 850px;
  padding: 0 15px;
  margin: 0 auto;
}

/* Auto Container (Template Specific) */
.auto-container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
```

### Section Spacing

```css
/* Standard Section Padding */
section {
  padding: 100px 0;
}

/* Compressed Section */
.section-compressed {
  padding: 60px 0;
}

/* Large Section */
.section-large {
  padding: 120px 0;
}
```

### Responsive Breakpoints

```css
/* Mobile First Approach */
/* Extra Small Devices */
@media (max-width: 575px) { }

/* Small Devices (Tablets) */
@media (min-width: 576px) and (max-width: 767px) { }

/* Medium Devices (Tablets Landscape) */
@media (min-width: 768px) and (max-width: 991px) { }

/* Large Devices (Desktops) */
@media (min-width: 992px) and (max-width: 1199px) { }

/* Extra Large Devices */
@media (min-width: 1200px) { }
```

### Grid System

```tsx
// Bootstrap-based 12-column grid
<div className="row clearfix">
  <div className="col-lg-4 col-md-6 col-sm-12">
    {/* Content */}
  </div>
</div>
```

---

## 6. Component Standards

### Section Title Component

```css
.section-title {
  margin-bottom: 35px;
}

.section-title .title {
  font-size: 14px;
  color: #9e7247;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: capitalize;
  margin-bottom: 12px;
}

.section-title h3 {
  color: #191514;
  font-weight: 700;
  line-height: 1.4em;
  padding-bottom: 22px;
  position: relative;
}

.section-title h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 3px;
  background-color: #d4a86c;
}

.section-title h3 span {
  color: #d5aa6d;
  font-style: italic;
  font-family: 'Playfair Display', serif;
  background: linear-gradient(to right, #d5aa6d 0%, #9e7247 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**React Implementation:**

```tsx
interface SectionTitleProps {
  subtitle?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle = ({
  subtitle,
  title,
  highlight,
  description,
  centered = false,
  light = false
}: SectionTitleProps) => {
  return (
    <div className={`section-title ${centered ? 'centered' : ''} ${light ? 'light' : ''}`}>
      {subtitle && <div className="title">{subtitle}</div>}
      <h3>
        {title} {highlight && <span>{highlight}</span>}
      </h3>
      {description && <div className="text">{description}</div>}
    </div>
  );
};
```

### List Styles

#### List Style One (Checkmark List)
```css
.list-style-one li {
  color: #191514;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-left: 30px;
  position: relative;
}

.list-style-one li::before {
  content: "\f16a"; /* Flaticon checkmark */
  position: absolute;
  left: 0;
  top: 0;
  font-family: "Flaticon";
  color: #191514;
}
```

#### List Style Two (Icon List)
```css
.list-style-two li {
  color: #ffffff;
  font-size: 18px;
  padding-left: 52px;
  margin-bottom: 20px;
  position: relative;
}

.list-style-two li .icon {
  position: absolute;
  left: 0;
  top: 4px;
  font-size: 28px;
  background: linear-gradient(to left, #d5aa6d 0%, #9e7247 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 7. Image & Media Guidelines

### Image Locations

```
/images/
├── main-slider/        → Hero banners, full-width sliders
├── resource/           → Team photos, news thumbnails, service images
├── gallery/            → Portfolio items, lightbox images
├── background/         → Section backgrounds, overlays
├── icons/              → UI icons, logos, signature
└── fancybox/          → Lightbox gallery assets
```

### Image Naming Convention

```
✅ GOOD:
- hero-banner-1.jpg
- team-member-john-smith.jpg
- service-corporate-law.jpg
- news-thumbnail-legal-update.jpg

❌ BAD:
- IMG_1234.jpg
- photo.jpg
- image-final-v3.jpg
```

### Image Specifications

| Type | Dimensions | Format | Max Size |
|------|------------|--------|----------|
| Hero Banner | 1920x1080 | JPG | 300KB |
| Team Photo | 370x370 | JPG | 100KB |
| News Thumbnail | 370x270 | JPG | 80KB |
| Service Icon | 80x80 | PNG | 20KB |
| Gallery Image | 800x600 | JPG | 200KB |
| Background | 1920x1200 | JPG | 400KB |

### Lightbox Integration

```tsx
import Lightbox from 'yet-another-react-lightbox';

// Usage
const [lightboxOpen, setLightboxOpen] = useState(false);

<Lightbox
  open={lightboxOpen}
  close={() => setLightboxOpen(false)}
  slides={[
    { src: '/images/gallery/1.jpg' },
    { src: '/images/gallery/2.jpg' }
  ]}
/>
```

### Image Optimization

- Compress all JPG images at 85% quality
- Use PNG only for logos and icons with transparency
- Implement lazy loading for below-fold images
- Provide WebP alternatives for modern browsers

```tsx
<img
  src="/images/resource/team-1.jpg"
  alt="John Smith - Senior Partner"
  loading="lazy"
  className="img-fluid"
/>
```

---

## 8. Accessibility Rules

### WCAG 2.1 AA Compliance

#### Color Contrast Requirements

```
✅ PASS:
- Dark text (#191514) on white (#ffffff) → 15.6:1
- White text (#ffffff) on dark (#191514) → 15.6:1
- Gold (#d5aa6d) on dark (#191514) → 7.2:1

⚠️ REVIEW:
- Gold text on white backgrounds (use gold-dark variant)
- Light gray (#999999) text on white (use for meta only)
```

#### Semantic HTML Usage

```tsx
// ✅ CORRECT Structure
<header>
  <nav aria-label="Main navigation">
    <ul role="list">
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <section aria-labelledby="services-heading">
    <h2 id="services-heading">Our Services</h2>
  </section>
</main>

<footer>
  <p>&copy; 2024 LawSight. All rights reserved.</p>
</footer>
```

#### Focus States

```css
/* Keyboard Navigation */
a:focus,
button:focus {
  outline: 2px solid #d5aa6d;
  outline-offset: 2px;
}

/* Skip to Content Link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #191514;
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

#### Alt Text Standards

```tsx
// ✅ DESCRIPTIVE
<img src="/images/team-1.jpg" alt="John Smith, Senior Partner specializing in corporate law" />

// ❌ GENERIC
<img src="/images/team-1.jpg" alt="team member" />

// ✅ DECORATIVE (empty alt)
<img src="/images/background/pattern.jpg" alt="" role="presentation" />
```

#### ARIA Labels

```tsx
<button aria-label="Close navigation menu" onClick={toggleMenu}>
  <span aria-hidden="true">×</span>
</button>

<nav aria-label="Footer navigation">
  <ul>...</ul>
</nav>
```

---

## 9. Animation & Interaction Patterns

### Transition Standards

```css
/* Default Transition */
.transition-default {
  transition: all 0.3s ease;
}

/* Smooth Hover */
.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

/* Button Hover */
.theme-btn {
  transition: all 0.3s ease;
}
```

### Scroll Animations

```tsx
// Using react-intersection-observer
import { useInView } from 'react-intersection-observer';

export const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div
      ref={ref}
      className={`fade-in ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};
```

### Counter Animations

```tsx
// Using useCountUp hook
import { useCountUp } from '@/hooks/useCountUp';

export const CounterBox = ({ end, suffix, title }) => {
  const { ref, count } = useCountUp({ end, duration: 2000 });
  
  return (
    <div ref={ref}>
      <span className="count-text">{count}</span>{suffix}
      <div className="counter-title">{title}</div>
    </div>
  );
};
```

### Carousel/Slider Settings

```tsx
// Swiper Configuration
<Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
>
  {slides.map(slide => <SwiperSlide>{slide}</SwiperSlide>)}
</Swiper>
```

---

## 10. Icon System

### Font Awesome Icons

**Version:** Font Awesome 4.7  
**Path:** `/fonts/fontawesome-webfont.*`

```tsx
// Usage
<i className="fa fa-phone"></i>
<i className="fa fa-envelope"></i>
<i className="fa fa-map-marker"></i>
```

### Flaticon Custom Icons

**Path:** `/fonts/flaticon.*`

```tsx
// Checkmark
<i className="flaticon-checkmark"></i>

// Legal Icons
<i className="flaticon-law"></i>
<i className="flaticon-gavel"></i>
```

### Icon Standards

```css
/* Icon in Text */
.icon-inline {
  font-size: 1.2em;
  margin-right: 8px;
  vertical-align: middle;
}

/* Feature Icon */
.feature-icon {
  font-size: 48px;
  color: #d5aa6d;
  margin-bottom: 20px;
}

/* Gradient Icon */
.icon-gradient {
  background: linear-gradient(to right, #d5aa6d 0%, #9e7247 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 11. Special Effects

### Overlay Patterns

```css
/* Dark Overlay */
.overlay-dark {
  position: relative;
}

.overlay-dark::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

/* Gradient Overlay */
.overlay-gradient::before {
  background: linear-gradient(135deg, rgba(213,170,109,0.9) 0%, rgba(158,114,71,0.9) 100%);
}
```

### Parallax Backgrounds

```css
.parallax-section {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

### Box Shadows

```css
/* Card Shadow */
.shadow-card {
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

/* Elevated Shadow */
.shadow-elevated {
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
}

/* Gold Glow */
.shadow-gold {
  box-shadow: 0 10px 20px rgba(212,169,109,0.15);
}
```

### Gradient Text

```css
.gradient-text {
  background: linear-gradient(to right, #d5aa6d 0%, #9e7247 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
```

---

## Quick Reference: Class Naming Map

| Element | Original CSS Class | React/Tailwind Alternative |
|---------|-------------------|---------------------------|
| Container | `.auto-container` | `max-w-[1200px] mx-auto px-4` |
| Section Padding | `.section-padding` | `py-24` |
| Primary Button | `.theme-btn.btn-style-one` | Custom `<Button variant="primary">` |
| Section Title | `.section-title` | Custom `<SectionTitle>` component |
| Gold Text | `.theme_color` | `text-[#d5aa6d]` |
| Dark Background | `.dark-section` | `bg-[#191514]` |
| Gradient Heading | `.section-title h3 span` | `gradient-text` class |

---

## Design Token Export

### For Tailwind Config

```js
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'gold-light': '#D5AA6D',
        'gold-dark': '#9e7247',
        'primary-dark': '#191514',
        'text-primary': '#191514',
        'text-secondary': '#555555',
        'text-tertiary': '#777777',
        'text-muted': '#999999',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'muli': ['Muli', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to right, #D5AA6D 0%, #9e7247 100%)',
      },
    },
  },
};
```

### For SCSS Variables

```scss
// tokens.scss
$gold-light: #D5AA6D;
$gold-dark: #9e7247;
$gold-gradient: linear-gradient(to right, #D5AA6D 0%, #9e7247 100%);

$primary-dark: #191514;
$secondary-dark: #0a0a0a;

$text-primary: #191514;
$text-secondary: #555555;
$text-tertiary: #777777;
$text-muted: #999999;

$container-width: 1200px;
$container-medium: 850px;

$section-padding: 100px;
$section-padding-sm: 60px;
$section-padding-lg: 120px;
```

---

## Design Token Files

### SCSS Variables
All design tokens are available as SCSS variables in `/src/styles/tokens.scss`:

```scss
@import '@/styles/tokens';

.custom-component {
  color: $color-text-gold;
  font-family: $font-headings;
  padding: $spacing-lg;
  box-shadow: $shadow-gold;
}
```

### TypeScript Constants
For React components, import design tokens from `/src/styles/tokens.ts`:

```tsx
import { colors, fonts, spacing } from '@/styles/tokens';

const MyComponent = () => (
  <div style={{
    color: colors.text.gold,
    fontFamily: fonts.families.headings,
    padding: spacing.lg,
  }}>
    Styled with design tokens
  </div>
);
```

### Available Token Categories
- **colors** - Brand colors, text, backgrounds, borders
- **fonts** - Families, weights, sizes, line heights
- **spacing** - Standard spacing scale and section padding
- **containers** - Container width variants
- **breakpoints** - Responsive breakpoints with media query helpers
- **transitions** - Standard transition timings
- **shadows** - Pre-defined shadow styles
- **buttons** - Button size and style constants
- **forms** - Form input specifications
- **overlays** - Overlay patterns and gradients

---

## Maintenance & Updates

### Version History
- **v1.1** - Added design token files (SCSS & TypeScript) (2025-01-07)
- **v1.0** - Initial style guide (Post Phase 2 Modularization)

### Review Schedule
- Review quarterly or after major feature additions
- Update when new components are created
- Validate color contrast after design changes
- Sync token files when design system evolves

### Contribution Guidelines
When adding new components:
1. Follow existing naming conventions
2. Use design tokens (colors, fonts) from `/src/styles/tokens.scss` or `/src/styles/tokens.ts`
3. Ensure WCAG AA compliance
4. Document new patterns in this guide
5. Provide usage examples
6. Update token files when introducing new design values

---

**Style Guide Maintainer:** Development Team  
**Questions/Updates:** Refer to `/docs/frontend.md` for component architecture
