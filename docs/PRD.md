# PRD — VP Dr. Gregory Allan Rusland Website

*(Platform: Lovable → later migratable to Hostinger VPS)*

## 0) Goal & Problem Definition (PROBLEM XYZ)

The current website is fragmented, hard to maintain, and not modular. This new system solves that by:

* Creating a **modular React frontend** (based on LaSight template),
* Providing a **professional admin panel** (same style guide),
* Ensuring **clean data architecture** (API-first) to support future migration to Hostinger VPS,
* Offering **manageable content** (pages, sections, posts, quotes, media, etc.),
* Integrating **Appointments (Google Calendar)** and **YouTube Sync** for media publications.

---

## 1) Architecture Overview

### **Frontend**

* React + TypeScript (Vite, React Router v6)
* State management: React Query
* Animations: Swiper, Intersection Observer hooks
* Styling: **LaSight style guide** (`/docs/style-guide.md`) — strictly enforced
* i18n: English only (Dutch added in final phase)

### **Backend/API Layer (migratable)**

* Built on Lovable Cloud (Supabase-style REST endpoints, later exportable to Node/NestJS + Postgres)
* Auth (admin): Email/password + OTP; RLS roles: `admin`, `editor`, `viewer`
* Media: S3-compatible storage with signed URLs

### **Integrations**

* **Google Calendar API** → Appointment sync (OAuth 2.0)
* **YouTube Data API v3** → Auto-sync VP channel (configurable)

### **DevOps & Deployment**

* `.env` configuration for API_URL, YT_CHANNEL_ID, GAPI_KEYS
* Build artifacts deployable to Hostinger VPS (Docker/Node + Nginx)
* Optional CDN for images in Phase 2

---

## 2) Homepage — Adjustments & Redesign

### **1. Header & Hero**

* Keep identical to LaSight (Home 2 variant)
* Modify the three cards below hero:
  * **Card 1:** Book Appointment → opens VP booking flow
  * **Card 2:** Community → placeholder for future Community Module
  * **Card 3:** Contact the Office → links to contact page
* Appointment module connects with VP's Google Calendar.

### **2. About Section**

* Keep layout but replace content with VP biography from gregrusland.com
* Update counter stats with VP-specific metrics

### **3. Services Section → Community Solutions**

* Rename to **Community Solutions**
* Replace with VP government programs and initiatives:
  * Free agricultural training for youth
  * Digital registration for social support
  * Open data platform for public policy
  * Grants for small entrepreneurs
  * Online permit applications
  * Rehabilitation of community roads and drainage
  * Access to microfinancing
  * Reporting platform for corruption and abuse of power
  * Support for housing development projects

### **4. Testimonial Section → Quotes Section**

* Rename to **Quotes Section**
* Feed from Quotes Module (admin-managed)
* Same carousel design with author attribution

### **5. Team Section → Recent Media (YouTube Sync)**

* Replace grid with latest 4–6 videos from VP's YouTube Channel
* Source via YouTube Data API → cached in `media_videos` table
* Auto-refresh on interval

### **6. Blog/News Section**

* Keep structure, feed from `posts` table
* Display latest 3 posts with featured images
* Link to full blog listing page

---

## 3) Backend (Admin Panel)

### **Layout & Design**

* Left sidebar navigation with icons
* Light / Dark / System themes (LaSight style guide only)
* Responsive design for tablet & desktop
* Top bar with user profile and logout

### **Core Modules**

1. **Dashboard** - KPIs, charts, quick actions
2. **Pages** - Dynamic sections management
3. **Posts** - Blog/news management
4. **Appointments** - Calendar sync and booking management
5. **FAQs** - Frequently asked questions
6. **Media Library** - File upload and management
7. **Solutions** - Community Solutions (renamed from Services)
8. **Projects** - VP Projects showcase (renamed from Portfolio)
9. **Quotes** - Quote management (replacing Testimonials)
10. **Events & Speeches** - Event calendar and speech archive
11. **Settings** - General, Branding, Social, Analytics, SEO, Integrations

*Rule: Never introduce external styles or frameworks; always use the official style guide.*

---

## 4) Database Schema (PostgreSQL/Supabase Compatible)

### **Core Tables**

**posts**
```sql
id UUID PRIMARY KEY
slug TEXT UNIQUE
title TEXT NOT NULL
excerpt TEXT
content TEXT
featured_image TEXT
category TEXT
tags TEXT[]
status TEXT CHECK (status IN ('draft', 'published', 'archived'))
published_at TIMESTAMPTZ
created_at TIMESTAMPTZ DEFAULT NOW()
updated_at TIMESTAMPTZ DEFAULT NOW()
```

**solutions**
```sql
id UUID PRIMARY KEY
slug TEXT UNIQUE
title TEXT NOT NULL
summary TEXT
content TEXT
icon TEXT
image TEXT
order INTEGER
is_active BOOLEAN DEFAULT true
created_at TIMESTAMPTZ DEFAULT NOW()
```

**projects**
```sql
id UUID PRIMARY KEY
slug TEXT UNIQUE
title TEXT NOT NULL
summary TEXT
content TEXT
cover_image TEXT
gallery TEXT[]
status TEXT CHECK (status IN ('draft', 'published'))
created_at TIMESTAMPTZ DEFAULT NOW()
```

**quotes**
```sql
id UUID PRIMARY KEY
quote_text TEXT NOT NULL
author_name TEXT NOT NULL
author_role TEXT
author_image TEXT
source_url TEXT
is_featured BOOLEAN DEFAULT false
created_at TIMESTAMPTZ DEFAULT NOW()
```

**events**
```sql
id UUID PRIMARY KEY
slug TEXT UNIQUE
title TEXT NOT NULL
type TEXT CHECK (type IN ('speech', 'event'))
description TEXT
content TEXT
event_date TIMESTAMPTZ
location TEXT
image TEXT
created_at TIMESTAMPTZ DEFAULT NOW()
```

**appointments**
```sql
id UUID PRIMARY KEY
name TEXT NOT NULL
email TEXT NOT NULL
phone TEXT
topic TEXT NOT NULL
preferred_date TIMESTAMPTZ NOT NULL
message TEXT
status TEXT CHECK (status IN ('new', 'confirmed', 'declined', 'completed'))
google_event_id TEXT
created_at TIMESTAMPTZ DEFAULT NOW()
```

**faqs**
```sql
id UUID PRIMARY KEY
question TEXT NOT NULL
answer TEXT NOT NULL
category TEXT
order INTEGER
is_active BOOLEAN DEFAULT true
created_at TIMESTAMPTZ DEFAULT NOW()
```

**media_files**
```sql
id UUID PRIMARY KEY
file_url TEXT NOT NULL
mime_type TEXT
title TEXT
alt_text TEXT
size INTEGER
created_at TIMESTAMPTZ DEFAULT NOW()
```

**media_videos**
```sql
id UUID PRIMARY KEY
youtube_id TEXT UNIQUE NOT NULL
title TEXT
description TEXT
thumbnail_url TEXT
published_at TIMESTAMPTZ
synced_at TIMESTAMPTZ DEFAULT NOW()
```

**pages**
```sql
id UUID PRIMARY KEY
slug TEXT UNIQUE
title TEXT NOT NULL
seo_title TEXT
seo_description TEXT
is_home BOOLEAN DEFAULT false
created_at TIMESTAMPTZ DEFAULT NOW()
```

**page_sections**
```sql
id UUID PRIMARY KEY
page_id UUID REFERENCES pages(id) ON DELETE CASCADE
key TEXT NOT NULL
enabled BOOLEAN DEFAULT true
sort_order INTEGER
data JSONB
```

**contact_submissions**
```sql
id UUID PRIMARY KEY
name TEXT NOT NULL
email TEXT NOT NULL
phone TEXT
subject TEXT
message TEXT NOT NULL
status TEXT CHECK (status IN ('new', 'read', 'replied'))
created_at TIMESTAMPTZ DEFAULT NOW()
```

**settings**
```sql
key TEXT PRIMARY KEY
value JSONB NOT NULL
updated_at TIMESTAMPTZ DEFAULT NOW()
```

**user_roles**
```sql
id UUID PRIMARY KEY REFERENCES auth.users(id)
role TEXT CHECK (role IN ('admin', 'editor', 'viewer')) DEFAULT 'viewer'
created_at TIMESTAMPTZ DEFAULT NOW()
```

---

## 5) Module Specifications & Checklists

### **A. Dashboard**

**Features:**
- KPIs: Total posts, active quotes, upcoming events
- Charts: Monthly post activity, appointment trends
- Quick actions: Create post, add quote, view appointments

**Tech:** Recharts, React Query

**Checklist:**
- [ ] Charts functional with live data
- [ ] KPIs load via API
- [ ] Dark/Light themes verified
- [ ] Quick actions navigate correctly

### **B. Pages Module**

**Features:**
- CRUD operations for pages
- Enable/disable sections per page
- JSON-based section configuration
- SEO fields management

**Checklist:**
- [ ] JSON-driven section editing
- [ ] Hero background & content editable
- [ ] Live preview working
- [ ] SEO fields save correctly

### **C. Posts Module**

**Features:**
- Full CRUD for blog posts
- Rich text editor (TipTap or similar)
- SEO fields (title, description, slug)
- Category and tag management
- Featured image upload
- Draft/publish workflow

**Checklist:**
- [ ] Autosave functionality
- [ ] Slugify on title change
- [ ] Pagination + filters working
- [ ] Image upload functional
- [ ] Category/tag filtering

### **D. Appointments Module**

**Features:**
- CRUD appointments
- Google Calendar two-way sync
- Status management (new, confirmed, declined)
- Email notifications (future)

**Checklist:**
- [ ] GCal credentials validated
- [ ] Create/cancel event synced
- [ ] Status updates working
- [ ] Frontend booking form submits

### **E. FAQs Module**

**Features:**
- CRUD FAQs
- Category-based organization
- Accordion frontend display
- Order management

**Checklist:**
- [ ] CRUD functional
- [ ] Frontend SEO-compliant
- [ ] Accordion animation smooth
- [ ] Category filtering works

### **F. Media Library**

**Features:**
- Upload files (images, PDFs, etc.)
- Search and filter
- Metadata editing (title, alt text)
- Delete functionality
- Usage tracking (future)

**Checklist:**
- [ ] Drag/drop upload works
- [ ] Secure upload paths
- [ ] Search filters functional
- [ ] Metadata saves correctly

### **G. Solutions (Community Solutions)**

**Features:**
- CRUD solutions
- Grid display on frontend
- Detail pages with full content
- Order management

**Checklist:**
- [ ] CRUD operations working
- [ ] Detail pages live
- [ ] SEO fields filled
- [ ] Icon rendering correct

### **H. Projects (VP Projects)**

**Features:**
- CRUD projects
- Gallery management
- Lightbox for images
- Masonry grid layout

**Checklist:**
- [ ] Gallery modal responsive
- [ ] Sorting verified
- [ ] Masonry layout renders
- [ ] SEO optimization complete

### **I. Quotes Module**

**Features:**
- CRUD quotes
- Featured quotes flag
- Author information
- Carousel display on frontend

**Checklist:**
- [ ] CRUD functional
- [ ] Carousel displays 3 recent quotes
- [ ] Author images display
- [ ] Source links work

### **J. Events & Speeches Module**

**Features:**
- CRUD events
- Type filter (speech/event)
- Calendar view
- ICS export

**Checklist:**
- [ ] /events and /speeches routes live
- [ ] ICS download functional
- [ ] Calendar view renders
- [ ] Type filtering works

### **K. YouTube Sync**

**Features:**
- Fetch videos from VP's YouTube channel
- Cache in database
- Auto-refresh on schedule
- Display latest videos on homepage

**Checklist:**
- [ ] YouTube API credentials secure
- [ ] Cron or polling working
- [ ] Cache auto-refresh
- [ ] Video grid displays correctly

### **L. Settings Module**

**Tabs:**
- General (site name, tagline, logo)
- Branding (colors, fonts)
- SEO (meta tags, analytics)
- Integrations (Google Calendar, YouTube)
- Theme (light/dark toggle)

**Checklist:**
- [ ] All tabs functional
- [ ] Google API keys secure
- [ ] Theme switch persists
- [ ] Logo upload works

---

## 6) Homepage Acceptance Criteria

- [ ] Hero section unchanged, correct content loaded
- [ ] 3 cards under hero follow defined roles (Appointment, Community, Contact)
- [ ] About section updated with VP biography
- [ ] Community Solutions section displays VP programs
- [ ] Quotes section replaces testimonials with admin-managed content
- [ ] YouTube videos visible and linked
- [ ] Blog section functional with latest posts
- [ ] Pixel-perfect and responsive across devices
- [ ] All animations smooth and performant
- [ ] SEO meta tags complete

---

## 7) Development Phases (Approval & No-Skip Policy)

> **Rule:** *Lovable must follow this document exactly. No skipping tasks. No custom styles. Stop immediately and report if blocked. Always remove duplicate code before delivery.*

| Phase   | Description                       | Deliverables                                         |
| ------- | --------------------------------- | ---------------------------------------------------- |
| **P0**  | Setup & Guardrails                | Repo setup, routing, style-guide.md ✅                |
| **P1**  | jQuery Removal & React Conversion | No jQuery, React animations ✅                        |
| **P2**  | Modular Homepage                  | 10 components, pixel parity, CSS variables ✅         |
| **P3**  | Homepage Cards & Content Swap     | Community + Contact cards, About update, Rename components |
| **P4**  | Admin MVP                         | Lovable Cloud setup, CRUD for Posts, Solutions, Quotes, Settings |
| **P5**  | Appointments + Calendar Sync      | Functional GCal integration, booking flow            |
| **P6**  | YouTube Sync                      | Fetch, cache, and display videos on homepage         |
| **P7**  | Pages & Sections Builder          | JSON-based dynamic sections, Admin page editor       |
| **P8**  | Events & Speeches Module          | CRUD, listing, detail view, ICS export               |
| **P9**  | FAQs & Projects                   | Full CRUD, filtering, galleries, SEO                 |
| **P10** | Final Polish & QA                 | Accessibility, SEO, Lighthouse ≥ 90, Documentation   |
| **P11** | Multi-language (NL)               | Add Dutch translations, Language switcher            |
| **P12** | Deployment                        | Export to Hostinger VPS, SSL, Database migration     |

---

## 8) Final Polish & QA (P10)

**Accessibility:**
- WCAG AA compliance
- Keyboard navigation
- Screen reader testing
- Focus indicators

**SEO:**
- JSON-LD structured data
- Meta tags complete
- Sitemap.xml generation
- Robots.txt configuration
- Open Graph tags

**Performance:**
- Lighthouse Performance ≥ 90
- Lighthouse SEO ≥ 95
- Lighthouse Accessibility ≥ 95
- Image optimization
- Code splitting

**Testing:**
- Cross-browser (Chrome, Firefox, Safari, Edge)
- Cross-device (Desktop, Tablet, Mobile)
- Forms validation
- API error handling

**Documentation:**
- Update README.md
- Complete /docs/backend.md
- Update /docs/Architecture.md
- Finalize /docs/Changelog.md

---

## 9) Deployment Plan (P12)

1. **Export from Lovable**
   - Export project to GitHub repository
   - Verify all environment variables documented

2. **Hostinger VPS Setup**
   - Provision VPS instance
   - Install Node.js, Nginx, PostgreSQL
   - Configure firewall and security

3. **Database Migration**
   - Export Supabase schema and data
   - Import to PostgreSQL instance
   - Configure connection strings

4. **Frontend Deployment**
   - Build production bundle
   - Configure Nginx reverse proxy
   - Set up SSL certificates (Let's Encrypt)

5. **Backend Deployment**
   - Deploy edge functions (if applicable)
   - Configure API endpoints
   - Set environment variables

6. **Post-Deployment**
   - DNS configuration
   - CDN setup (optional)
   - Monitoring and logging
   - Backup automation

---

## 10) Approval & Communication Workflow

* Each phase must end with a **verification checklist** and **Restore Point**.
* Devmart or VP Team provides written approval before next phase.
* No design/style deviations allowed.
* Any new idea → proposal → approval → implementation.
* All changes tracked in `/docs/Changelog.md`
* Architecture updates in `/docs/Architecture.md`
* Backend changes in `/docs/Backend.md`

---

## 11) Design & Style Compliance

**CRITICAL RULES:**

1. **Only use LaSight style guide** (`/docs/style-guide.md`)
2. **CSS Variables only** - All colors, fonts, spacing from `src/index.css`
3. **No inline styles** - Use Tailwind semantic tokens
4. **No external CSS frameworks** - Bootstrap, Material UI, etc. forbidden
5. **Component-based** - Small, focused, reusable components
6. **HSL colors only** - No hex or RGB values in components
7. **Design system tokens** - Typography, spacing, shadows from design system

**Verification:**
- Every component must pass style guide compliance check
- No hardcoded colors (text-white, bg-black forbidden)
- All animations use CSS custom properties
- Responsive breakpoints follow design system

---

## 12) Security Considerations

**Frontend:**
- Input sanitization for all forms
- XSS protection
- CSRF tokens where applicable
- Rate limiting on API calls

**Backend:**
- Row Level Security (RLS) on all tables
- Role-based access control (admin/editor/viewer)
- Secure API key storage
- Password hashing (bcrypt)
- Session management

**Integrations:**
- OAuth 2.0 for Google Calendar
- API key rotation strategy
- Webhook signature verification
- CORS configuration

---

**✅ Deliverable:** Full modular website system for the Office of the Vice President — designed for performance, scalability, and long-term maintainability.

**📅 Last Updated:** Phase P2 Complete  
**📝 Next Phase:** P3 - Homepage Cards & Content Swap  
**🔐 Status:** In Development
