# VP Admin Panel — Design System Documentation

## Overview
The VP Admin Panel is built with a modern, dark-themed interface inspired by **Darkone Admin** while maintaining consistency with the **VP Style Guide**. This document outlines the design tokens, component structure, and implementation details.

---

## Design Tokens

### Color Palette

#### Admin Theme (Darkone-inspired)
```css
--admin-bg-primary: hsl(230, 27%, 15%)      /* #1a1d2e - Main background */
--admin-bg-secondary: hsl(228, 20%, 19%)    /* #222736 - Card backgrounds */
--admin-bg-tertiary: hsl(225, 15%, 23%)     /* #2d3142 - Input backgrounds */
--admin-accent-purple: hsl(258, 90%, 66%)   /* #8b5cf6 - Purple accent */
--admin-accent-blue: hsl(217, 91%, 60%)     /* #3b82f6 - Blue accent */
--admin-accent-gold: hsl(43, 49%, 59%)      /* #c5a467 - Gold accent (VP brand) */
--admin-text-primary: hsl(0, 0%, 95%)       /* #f2f2f2 - Primary text */
--admin-text-secondary: hsl(220, 13%, 69%)  /* #9ca3af - Secondary text */
--admin-border: hsl(228, 15%, 25%)          /* #353845 - Borders */
```

#### VP Brand Colors
```css
--vp-gold: hsl(43, 49%, 59%)
--vp-purple: hsl(258, 90%, 66%)
--vp-blue: hsl(217, 91%, 60%)
```

### Typography
- **Headings**: Poppins, sans-serif
- **Body**: Muli, sans-serif

### Shadows
```css
--shadow-admin-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3)
--shadow-admin-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4)
--shadow-admin-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5)
--shadow-admin-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6)
--shadow-admin-glow: 0 0 20px rgba(139, 92, 246, 0.4)
```

### Border Radius
```css
--border-radius-admin-sm: 0.375rem
--border-radius-admin-md: 0.5rem
--border-radius-admin-lg: 0.75rem
--border-radius-admin-xl: 1rem
```

---

## Layout Architecture

### AdminLayout Structure
```
┌─────────────────────────────────────────────┐
│              Topbar (Fixed)                 │
│  [Search] [Theme] [Notifications] [Profile] │
├──────────┬──────────────────────────────────┤
│          │                                  │
│ Sidebar  │        Main Content Area         │
│ (Fixed)  │         (Scrollable)             │
│          │                                  │
│ [Nav]    │    [Dashboard / CRUD Pages]      │
│ [Items]  │                                  │
│          │                                  │
└──────────┴──────────────────────────────────┘
```

### Components

#### Sidebar
- **Collapsible**: Toggles between 64px (collapsed) and 256px (expanded)
- **Navigation Items**: Icons from Lucide React with tooltips
- **Active State**: Gold highlight for current route
- **Location**: Fixed left, full height

#### Topbar
- **Search Bar**: Global search functionality
- **Theme Toggle**: Light / Dark / System preference
- **Notifications**: Badge indicator for new items
- **Profile Dropdown**: User info and logout action
- **Responsive**: Adjusts based on sidebar state

#### Dashboard
- **Stat Cards**: 4-column grid with gradient backgrounds, icons, and Recharts mini-graphs
- **Quick Actions**: 4 action buttons for common tasks
- **Recent Activity Table**: Dark-themed table with hover effects

---

## Component Library

### StatCard
```tsx
<StatCard
  title="Total Posts"
  value="24"
  change="+12% from last month"
  changeType="increase"
  icon={FileText}
  iconColor="bg-admin-accent-gold"
  chartData={[...]}
/>
```

### AdminButton (Future)
Variants: `gold`, `purple`, `blue`, `gray`

### AdminInput (Future)
Features: Gold focus ring, dark background, icon support

### AdminTable (Future)
Features: Striped rows, hover highlight, sortable columns

---

## Authentication Pages

### Login Page
- Centered card layout with dark gradient background
- Lock icon with gold accent
- Email and password fields with Lucide icons
- Gold gradient submit button
- Link to registration page

### Register Page
- Similar to login with UserPlus icon
- Purple accent theme
- Password confirmation field
- Success message on registration

---

## Theme System

### ThemeProvider
Supports three modes:
- **Light**: Standard light theme
- **Dark**: Dark theme (default for admin)
- **System**: Follows OS preference

### Implementation
```tsx
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';

const { theme, setTheme, resolvedTheme } = useTheme();
```

---

## Responsive Breakpoints

- **Mobile**: < 768px (Sidebar hidden, toggle button shown)
- **Tablet**: 768px - 1024px (Sidebar collapsed by default)
- **Desktop**: > 1024px (Sidebar expanded by default)

---

## Navigation Structure

| Route | Icon | Description |
|-------|------|-------------|
| `/admin/dashboard` | LayoutDashboard | Overview & statistics |
| `/admin/posts` | FileText | Blog/news management |
| `/admin/projects` | FolderKanban | Project management |
| `/admin/solutions` | Lightbulb | Service programs |
| `/admin/appointments` | Calendar | Booking requests |
| `/admin/contact-submissions` | Mail | Contact form data |
| `/admin/quotes` | MessageSquareQuote | Official quotes |
| `/admin/media` | Image | Media library |
| `/admin/settings` | Settings | Configuration |

---

## Accessibility

- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Focus Indicators**: Gold ring on focus (2px solid)
- **ARIA Labels**: Proper labels on all buttons and inputs
- **Color Contrast**: WCAG AA compliant

---

## Performance Optimizations

- **Lazy Loading**: Route-based code splitting
- **React Query**: Efficient data fetching and caching
- **Recharts**: Lightweight charting library
- **Tailwind CSS**: Minimal CSS bundle size

---

## Future Enhancements (Phase 5+)

- [ ] Complete CRUD modules for all content types
- [ ] Advanced filtering and search
- [ ] Bulk operations
- [ ] Export functionality
- [ ] Role-based access control
- [ ] Activity logs and audit trail
- [ ] Dark/Light theme for public site

---

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form + Zod validation
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Backend**: Supabase (PostgreSQL + Auth + Storage)

---

## File Structure
```
src/
├── components/
│   └── admin/
│       ├── Sidebar.tsx
│       ├── Topbar.tsx
│       └── StatCard.tsx
├── contexts/
│   └── ThemeContext.tsx
├── hooks/
│   └── useAuth.ts
├── layouts/
│   └── AdminLayout.tsx
├── pages/
│   ├── admin/
│   │   └── Dashboard.tsx
│   └── auth/
│       ├── Login.tsx
│       └── Register.tsx
└── styles/
    └── (Tailwind in index.css)
```

---

**Last Updated**: Phase P4B MVP Implementation  
**Status**: ✅ Phases 1-4 Complete (Foundation, Auth, Layout, Dashboard)  
**Next**: Phase 5 (CRUD Modules)
