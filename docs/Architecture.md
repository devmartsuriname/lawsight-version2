# Architecture — VP Dr. Gregory Allan Rusland Website

*Technical blueprint defining frontend and backend architecture*

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Technology Stack](#technology-stack)
3. [Frontend Architecture](#frontend-architecture)
4. [Backend Architecture](#backend-architecture)
5. [Database Schema](#database-schema)
6. [Integration Architecture](#integration-architecture)
7. [Security Architecture](#security-architecture)
8. [Migration Strategy](#migration-strategy)

---

## System Overview

The VP website is a full-stack web application built with a modern, modular architecture designed for:
- **Maintainability**: Clear separation of concerns, modular components
- **Scalability**: API-first design, database-backed content management
- **Portability**: Built on Lovable Cloud, exportable to Hostinger VPS
- **Performance**: Optimized builds, lazy loading, CDN-ready

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend Layer                        │
│  React + TypeScript + Vite + React Router + React Query     │
└─────────────────────────────────────────────────────────────┘
                              ↓ ↑
┌─────────────────────────────────────────────────────────────┐
│                         API Layer                            │
│              REST Endpoints (Lovable Cloud)                  │
└─────────────────────────────────────────────────────────────┘
                              ↓ ↑
┌─────────────────────────────────────────────────────────────┐
│                      Database Layer                          │
│              PostgreSQL (Supabase)                           │
└─────────────────────────────────────────────────────────────┘
                              ↓ ↑
┌─────────────────────────────────────────────────────────────┐
│                   External Integrations                      │
│          Google Calendar API | YouTube Data API v3          │
└─────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### Frontend

| Technology         | Version | Purpose                          |
| ------------------ | ------- | -------------------------------- |
| React              | 18.2.0  | UI framework                     |
| TypeScript         | 5.9.2   | Type safety                      |
| Vite               | 7.1.7   | Build tool & dev server          |
| React Router       | 6.21.1  | Client-side routing              |
| React Query        | TBD     | Server state management          |
| Swiper             | 11.0.5  | Carousel/slider component        |
| React Helmet Async | 2.0.4   | SEO meta tag management          |
| Tailwind CSS       | (via Vite) | Utility-first CSS             |
| Yet Another React Lightbox | 3.25.0 | Image lightbox |

### Backend (Lovable Cloud / Supabase)

| Technology       | Purpose                              |
| ---------------- | ------------------------------------ |
| PostgreSQL       | Primary database                     |
| Supabase Auth    | Authentication & authorization       |
| Supabase Storage | File and media storage               |
| Edge Functions   | Serverless backend logic             |
| PostgREST        | Auto-generated REST API              |

### Integrations

| Service              | Purpose                       |
| -------------------- | ----------------------------- |
| Google Calendar API  | Appointment sync              |
| YouTube Data API v3  | Video content synchronization |

### Development Tools

| Tool       | Purpose                     |
| ---------- | --------------------------- |
| Git        | Version control             |
| ESLint     | Code linting                |
| Prettier   | Code formatting             |
| TypeScript | Static type checking        |

---

## Frontend Architecture

### Folder Structure

```
src/
├── assets/                 # Static assets (images, fonts)
├── components/             # Reusable UI components
│   ├── home2/             # Home2 page-specific components
│   │   ├── Hero.tsx
│   │   ├── FeatureCards.tsx
│   │   ├── AboutSection.tsx
│   │   ├── Timeline.tsx
│   │   ├── CommunitySolutions.tsx  (renamed from ServicesGrid)
│   │   ├── QuotesSection.tsx       (renamed from Testimonials)
│   │   ├── RecentMedia.tsx         (renamed from Team)
│   │   ├── NewsSection.tsx
│   │   ├── CounterStats.tsx
│   │   └── Newsletter.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PageTitle.tsx
│   ├── Preloader.tsx
│   ├── CounterBox.tsx
│   └── Lightbox.tsx
├── pages/                  # Page components
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
│   ├── Contact.tsx
│   ├── Testimonial.tsx
│   └── NotFound.tsx
├── layouts/                # Layout components
│   └── MainLayout.tsx
├── hooks/                  # Custom React hooks
│   ├── useCountUp.ts
│   ├── usePreloader.ts
│   ├── useScrollAnimation.ts
│   └── useStickyHeader.ts
├── data/                   # Static data and configuration
│   ├── navigation.ts
│   └── siteInfo.ts
├── styles/                 # Global styles and tokens
│   ├── tokens.scss
│   └── tokens.ts
├── utils/                  # Utility functions
│   └── ScrollToTop.tsx
├── index.css               # Global CSS with custom properties
├── App.tsx                 # Root application component
└── main.tsx                # Application entry point
```

### Component Architecture

**Design Principles:**
- **Single Responsibility**: Each component has one clear purpose
- **Composition**: Build complex UIs from simple components
- **Reusability**: Components accept props for flexibility
- **Style Compliance**: All components use CSS custom properties from design system

**Component Hierarchy:**

```
App.tsx
└── MainLayout.tsx
    ├── Header.tsx
    ├── Routes
    │   ├── Home2.tsx
    │   │   ├── Hero.tsx
    │   │   ├── FeatureCards.tsx
    │   │   ├── AboutSection.tsx
    │   │   │   ├── CounterBox.tsx (×3)
    │   │   │   └── Lightbox.tsx
    │   │   ├── Timeline.tsx
    │   │   ├── CommunitySolutions.tsx
    │   │   ├── QuotesSection.tsx
    │   │   ├── RecentMedia.tsx
    │   │   ├── NewsSection.tsx
    │   │   ├── CounterStats.tsx
    │   │   │   └── CounterBox.tsx (×4)
    │   │   └── Newsletter.tsx
    │   └── [Other Pages]
    └── Footer.tsx
```

### State Management Strategy

**Local State (useState):**
- UI state (modals, dropdowns, form inputs)
- Component-specific state

**Server State (React Query):**
- API data fetching
- Caching and synchronization
- Optimistic updates
- Background refetching

**Context (React Context):**
- Theme (light/dark mode)
- Authentication state
- Global settings

### Routing Architecture

**Public Routes:**
- `/` - Home (Home2 variant)
- `/about` - About VP
- `/solutions` - Community Solutions (renamed from Services)
- `/solutions/:slug` - Solution Detail
- `/projects` - VP Projects (renamed from Portfolio)
- `/projects/:slug` - Project Detail
- `/blog` - Blog/News Listing
- `/blog/:slug` - Blog Post Detail
- `/events` - Events & Speeches
- `/events/:slug` - Event Detail
- `/contact` - Contact Form

**Admin Routes (Protected):**
- `/admin` - Dashboard
- `/admin/pages` - Pages Manager
- `/admin/posts` - Blog Posts Manager
- `/admin/solutions` - Solutions Manager
- `/admin/projects` - Projects Manager
- `/admin/quotes` - Quotes Manager
- `/admin/events` - Events Manager
- `/admin/faqs` - FAQs Manager
- `/admin/appointments` - Appointments Manager
- `/admin/media` - Media Library
- `/admin/settings` - Settings

**Route Guards:**
- `RequireAuth` - Redirects to login if not authenticated
- `RequireRole` - Checks user role (admin/editor/viewer)

---

## Backend Architecture

### Lovable Cloud Stack

**PostgreSQL Database:**
- Version: 15+
- Hosted on Supabase infrastructure
- Automatic backups
- Point-in-time recovery

**Authentication:**
- Email/password authentication
- JWT-based sessions
- Role-based access control (RBAC)
- Row Level Security (RLS)

**Storage:**
- S3-compatible object storage
- Signed URLs for secure access
- Automatic image optimization (future)

**Edge Functions:**
- Serverless compute
- Node.js runtime
- Used for:
  - Google Calendar sync
  - YouTube video fetching
  - Email notifications (future)
  - Webhook handlers (future)

### API Architecture

**REST Endpoints (Auto-generated by PostgREST):**

```
GET    /rest/v1/posts              - List posts
GET    /rest/v1/posts?id=eq.{id}   - Get post by ID
POST   /rest/v1/posts              - Create post
PATCH  /rest/v1/posts?id=eq.{id}   - Update post
DELETE /rest/v1/posts?id=eq.{id}   - Delete post

[Similar endpoints for: solutions, projects, quotes, events, faqs, appointments, etc.]
```

**Custom Edge Functions:**

```
POST /functions/v1/sync-youtube     - Sync YouTube videos
POST /functions/v1/create-appointment - Create calendar appointment
POST /functions/v1/cancel-appointment - Cancel calendar appointment
```

### Security Model

**Row Level Security (RLS) Policies:**

```sql
-- Example: Posts table RLS
-- Public can read published posts
CREATE POLICY "Public read published posts"
ON posts FOR SELECT
USING (status = 'published');

-- Authenticated users with admin role can do anything
CREATE POLICY "Admins can do anything"
ON posts FOR ALL
USING (has_role('admin'));

-- Editors can create and update their own posts
CREATE POLICY "Editors can manage own posts"
ON posts FOR ALL
USING (auth.uid() = author_id AND has_role('editor'));
```

**Role Hierarchy:**
- `admin` - Full access to all data and settings
- `editor` - Can create and manage content
- `viewer` - Read-only access to admin panel

---

## Database Schema

### Entity Relationship Diagram

```
┌─────────────┐       ┌──────────────┐       ┌─────────────┐
│    pages    │───┬───│page_sections │       │    posts    │
└─────────────┘   │   └──────────────┘       └─────────────┘
                  │
                  │   ┌──────────────┐       ┌─────────────┐
                  └───│   settings   │       │  solutions  │
                      └──────────────┘       └─────────────┘

┌─────────────┐       ┌──────────────┐       ┌─────────────┐
│   quotes    │       │   projects   │       │   events    │
└─────────────┘       └──────────────┘       └─────────────┘

┌─────────────┐       ┌──────────────┐       ┌─────────────┐
│    faqs     │       │ appointments │       │media_files  │
└─────────────┘       └──────────────┘       └─────────────┘

┌─────────────┐       ┌──────────────┐       ┌─────────────┐
│media_videos │       │user_roles    │       │contact_     │
└─────────────┘       └──────────────┘       │submissions  │
                                              └─────────────┘
```

### Core Tables (Detailed in `/docs/backend.md`)

1. **posts** - Blog/news articles
2. **solutions** - Community solutions (services)
3. **projects** - VP projects (portfolio)
4. **quotes** - Quotes (testimonials)
5. **events** - Events and speeches
6. **appointments** - Appointment bookings
7. **faqs** - Frequently asked questions
8. **media_files** - Uploaded files
9. **media_videos** - YouTube videos cache
10. **pages** - Dynamic pages
11. **page_sections** - Page section configurations
12. **contact_submissions** - Contact form submissions
13. **settings** - Site-wide settings
14. **user_roles** - User role assignments

---

## Integration Architecture

### Google Calendar Integration

**Flow:**
```
User submits appointment form
        ↓
Frontend validates and sends to API
        ↓
Edge function receives request
        ↓
Saves to appointments table
        ↓
Calls Google Calendar API (OAuth 2.0)
        ↓
Creates event in VP's calendar
        ↓
Stores google_event_id for future sync
        ↓
Returns confirmation to user
```

**Authentication:**
- OAuth 2.0 with service account
- Credentials stored in Lovable Cloud secrets
- Refresh token handled automatically

### YouTube Integration

**Flow:**
```
Cron job triggers (e.g., hourly)
        ↓
Edge function calls YouTube Data API v3
        ↓
Fetches latest videos from VP channel
        ↓
Compares with existing media_videos
        ↓
Inserts new videos
        ↓
Updates synced_at timestamp
        ↓
Frontend fetches from media_videos table
```

**Data Sync:**
- Channel ID configured in settings
- API key stored in secrets
- Incremental sync (only new videos)
- Thumbnail URLs cached locally

---

## Security Architecture

### Frontend Security

1. **XSS Prevention**
   - React's built-in escaping
   - CSP headers
   - Sanitize user input

2. **Authentication**
   - JWT tokens in httpOnly cookies
   - Auto-refresh on expiry
   - Logout clears all tokens

3. **Authorization**
   - Route guards check roles
   - UI elements hidden based on permissions
   - API calls include auth headers

### Backend Security

1. **Row Level Security (RLS)**
   - All tables protected by RLS policies
   - Public/private data separation
   - Role-based access

2. **API Security**
   - Rate limiting on endpoints
   - CORS configuration
   - Request validation

3. **Data Protection**
   - Encrypted at rest (database)
   - Encrypted in transit (HTTPS/TLS)
   - Secure credential storage

---

## Migration Strategy

### Phase 1: Lovable Development
- Build on Lovable Cloud
- Use Supabase backend
- Iterate quickly

### Phase 2: Export Preparation
- Document all environment variables
- Export database schema
- Package frontend build

### Phase 3: Hostinger VPS Setup
- Provision Ubuntu server
- Install Node.js, Nginx, PostgreSQL
- Configure firewall and SSL

### Phase 4: Database Migration
- Export Supabase data (SQL dump)
- Import to Hostinger PostgreSQL
- Verify data integrity

### Phase 5: Frontend Deployment
- Build production bundle (`npm run build`)
- Upload to VPS
- Configure Nginx as reverse proxy

### Phase 6: Backend Migration
- Rewrite edge functions as Node.js API routes (if needed)
- Update API base URL in frontend
- Configure environment variables

### Phase 7: DNS and SSL
- Point domain to VPS IP
- Install Let's Encrypt SSL
- Test all endpoints

### Phase 8: Post-Deployment
- Set up monitoring (PM2, Datadog, etc.)
- Configure automated backups
- Performance tuning

---

## Performance Optimization

### Frontend
- Code splitting (React.lazy)
- Image lazy loading
- Minification and compression
- CDN for static assets (future)

### Backend
- Database indexing
- Query optimization
- Caching strategy (Redis in future)
- CDN for media files

### Monitoring
- Lighthouse CI
- Real User Monitoring (RUM)
- Error tracking (Sentry)
- Uptime monitoring

---

**Last Updated:** Phase P2 Complete  
**Next Update:** After Phase P4 (Backend Setup)
