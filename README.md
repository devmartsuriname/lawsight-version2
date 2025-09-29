# LawSight React Migration

This project is a React + TypeScript migration of the LawSight HTML template (https://github.com/devmartsuriname/lawsight-version2) using Vite as the build tool.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Main navigation header
│   ├── Footer.tsx      # Site footer
│   ├── PageTitle.tsx   # Page title/breadcrumb component
│   └── Preloader.tsx   # Loading spinner
├── layouts/            # Layout components
│   └── MainLayout.tsx  # Main layout with Header/Footer/Outlet
├── pages/              # Page components (route targets)
│   ├── Home.tsx
│   ├── Home2.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── ServicesDetail.tsx
│   ├── Portfolio2Col.tsx
│   ├── PortfolioMasonry.tsx
│   ├── PortfolioSingle.tsx
│   ├── BlogList.tsx
│   ├── BlogSingle.tsx
│   ├── Testimonial.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── data/               # Static data/constants
│   ├── navigation.ts   # Navigation menu items
│   └── siteInfo.ts     # Site contact info and social links
├── hooks/              # Custom React hooks
│   ├── usePreloader.ts
│   └── useStickyHeader.ts
├── utils/              # Utility components/functions
│   └── ScrollToTop.tsx # Scroll to top on route change
├── App.tsx             # Main app with routing
└── main.tsx            # Entry point

public/
├── css/                # Original template CSS
├── js/                 # Original template JavaScript
├── images/             # All images and assets
├── fonts/              # Font files
└── favicon.png
```

## 🗺️ Route Mapping

HTML pages have been mapped to React routes as follows:

| Original HTML File          | React Route              | Component            |
| --------------------------- | ------------------------ | -------------------- |
| `index.html`                | `/`                      | Home.tsx             |
| `index-2.html`              | `/home2`                 | Home2.tsx            |
| `about.html`                | `/about`                 | About.tsx            |
| `services.html`             | `/services`              | Services.tsx         |
| `services-detail.html`      | `/services/:slug`        | ServicesDetail.tsx   |
| `portfolio-2-column.html`   | `/portfolio/2-col`       | Portfolio2Col.tsx    |
| `portfolio-masonry.html`    | `/portfolio/masonry`     | PortfolioMasonry.tsx |
| `portfolio-single.html`     | `/portfolio/:id`         | PortfolioSingle.tsx  |
| `blog-list.html`            | `/blog`                  | BlogList.tsx         |
| `blog-single.html`          | `/blog/:slug`            | BlogSingle.tsx       |
| `testimonial.html`          | `/testimonial`           | Testimonial.tsx      |
| `contact.html`              | `/contact`               | Contact.tsx          |
| N/A                         | `*` (404)                | NotFound.tsx         |

## 🎨 Assets Organization

- **CSS**: All original stylesheets are preserved in `/public/css/` and loaded via `index.html`
- **JavaScript**: Original jQuery-based scripts are in `/public/js/` (to be gradually replaced with React)
- **Images**: All images remain in `/public/images/` with original paths
- **Fonts**: Font files are in `/public/fonts/` and referenced via original CSS

## 🔧 Key Features

### Routing
- React Router v6 with lazy loading for all pages
- Automatic scroll to top on route changes
- 404 page for unmatched routes

### SEO
- `react-helmet-async` for per-page meta tags
- Each page has custom title, description, and Open Graph tags

### Layout
- `MainLayout` wraps all pages with consistent Header/Footer
- Shared components extracted (Header, Footer, PageTitle)
- Sticky header functionality with React hooks

### Forms
- Contact form with React state management
- Mock submission handler (TODO: connect real backend)
- Form validation and error handling

### Styling
- Original CSS preserved (no Tailwind conversion)
- Bootstrap classes maintained
- jQuery dependencies to be gradually removed

## 📝 Adding a New Page

1. **Create the page component** in `src/pages/`:
```tsx
// src/pages/NewPage.tsx
import { Helmet } from 'react-helmet-async';
import PageTitle from '@/components/PageTitle';

export default function NewPage() {
  return (
    <>
      <Helmet>
        <title>New Page | LawSight</title>
        <meta name="description" content="Description" />
      </Helmet>
      
      <PageTitle title="New Page" breadcrumbs={[{ label: 'New Page' }]} />
      
      <section>
        <div className="container">
          {/* Your content */}
        </div>
      </section>
    </>
  );
}
```

2. **Add the route** in `src/App.tsx`:
```tsx
// Import the page
const NewPage = lazy(() => import('@/pages/NewPage'));

// Add to routes
<Route path="/new-page" element={<NewPage />} />
```

3. **Add to navigation** in `src/data/navigation.ts`:
```tsx
{
  label: 'New Page',
  href: '/new-page'
}
```

## 🔄 Migration Status

### ✅ Completed
- Project setup (Vite + React + TypeScript)
- Routing structure
- Layout components (Header, Footer)
- Contact page with form
- All page stubs created
- Asset organization
- SEO setup with react-helmet-async

### 🚧 In Progress / TODO
- [ ] Migrate remaining HTML content to React components
- [ ] Replace jQuery dependencies:
  - [ ] Sliders → React Swiper
  - [ ] Lightbox → React lightbox library
  - [ ] Form validation → React form library
  - [ ] Animations → React animation library
- [ ] Connect contact form to real backend (Resend/EmailJS/custom API)
- [ ] Add lazy loading for images
- [ ] Implement portfolio filtering with React state
- [ ] Add blog post data management
- [ ] Create testimonials slider component

## 🔌 Contact Form Backend

The contact form currently uses a mock submission. To connect a real backend:

### Option 1: EmailJS
```bash
npm install @emailjs/browser
```

### Option 2: Resend
```bash
npm install resend
```

### Option 3: Custom API
Create `/api/contact` endpoint and update the fetch URL in `src/pages/Contact.tsx`

## 🛠️ Technical Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **React Helmet Async** - SEO meta tags
- **Swiper** - Modern slider (to replace jQuery sliders)
- **ESLint + Prettier** - Code quality and formatting

## 📦 Dependencies

See `package.json` for full dependency list. Key packages:
- `react` & `react-dom` - Core React
- `react-router-dom` - Routing
- `react-helmet-async` - Meta tags
- `swiper` - Carousels/sliders

## 🎯 Development Guidelines

1. **Keep CSS unchanged** - Original template CSS is preserved
2. **Replace jQuery gradually** - Convert jQuery code to React hooks/state
3. **Use TypeScript strictly** - All components should be typed
4. **Follow component structure** - Extract reusable components
5. **Maintain pixel parity** - Visual appearance should match original

## 📄 License

This is a migration of the LawSight template. Check the original repository for license information.

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Run lint and format: `npm run lint && npm run format`
4. Test thoroughly
5. Submit pull request

---

Built with ❤️ using React + Vite + TypeScript
