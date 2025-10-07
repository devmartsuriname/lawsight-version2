# Backend Integration Strategy
## VP Gregory Allan Rusland Website

---

## Current State

**Status:** Static Frontend (No Backend Yet)

All content is currently hardcoded in React components. Backend integration is planned for Phase 3.

---

## Planned Stack

- **Backend:** Lovable Cloud (Supabase)
- **Database:** PostgreSQL
- **Authentication:** Supabase Auth
- **Storage:** Supabase Storage (for images/documents)
- **API:** RESTful via Supabase Client
- **Data Fetching:** React Query

---

## Proposed Database Schema

### 1. Posts (Blog/News)
```sql
CREATE TABLE posts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text,
  featured_image text,
  author_id uuid REFERENCES auth.users(id),
  category text,
  tags text[],
  published_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  is_published boolean DEFAULT false
);
```

### 2. Team Members
```sql
CREATE TABLE team_members (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  image_url text,
  email text,
  phone text,
  social_links jsonb, -- {twitter, linkedin, facebook}
  display_order integer,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now()
);
```

### 3. Services
```sql
CREATE TABLE services (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  short_description text,
  full_description text,
  icon text, -- icon class or path
  display_order integer,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now()
);
```

### 4. Testimonials
```sql
CREATE TABLE testimonials (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name text NOT NULL,
  client_role text,
  client_company text,
  client_image text,
  testimonial_text text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  is_featured boolean DEFAULT false,
  display_order integer,
  created_at timestamp with time zone DEFAULT now()
);
```

### 5. Contact Submissions
```sql
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'new', -- new, read, replied, archived
  created_at timestamp with time zone DEFAULT now()
);
```

### 6. Events/Speeches
```sql
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  event_date timestamp with time zone,
  event_end_date timestamp with time zone,
  location text,
  event_type text, -- 'speech', 'conference', 'meeting', 'press'
  featured_image text,
  content text,
  is_featured boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now()
);
```

### 7. Newsletter Subscribers
```sql
CREATE TABLE newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamp with time zone DEFAULT now(),
  is_active boolean DEFAULT true,
  unsubscribed_at timestamp with time zone
);
```

### 8. User Roles (Security)
```sql
CREATE TYPE app_role AS ENUM ('admin', 'editor', 'viewer');

CREATE TABLE user_roles (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE(user_id, role)
);

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;
```

---

## API Layer

### React Query Hooks (Planned)

```typescript
// src/hooks/useData.ts

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });
      if (error) throw error;
      return data;
    }
  });
};

export const useTeamMembers = () => {
  return useQuery({
    queryKey: ['team'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .eq('is_active', true)
        .order('display_order');
      if (error) throw error;
      return data;
    }
  });
};
```

---

## Content Management Flow

### Phase 1: Static (Current)
- All content hardcoded in React components
- Images in `/public/images/`
- No database

### Phase 2: Database Integration
- Enable Lovable Cloud
- Create tables with seed data
- Migrate static content to database
- Implement data fetching hooks

### Phase 3: Admin Dashboard
- Create protected admin routes
- CRUD interfaces for:
  - Posts/News
  - Team members
  - Services
  - Testimonials
- Role-based access control

### Phase 4: Advanced Features
- File upload to Supabase Storage
- Email notifications (contact form)
- Newsletter automation
- Analytics integration

---

## Authentication Strategy

### Public Routes
- Homepage
- About
- Services
- Portfolio
- Blog (read-only)
- Contact

### Protected Routes (Admin)
- `/admin/dashboard`
- `/admin/posts`
- `/admin/team`
- `/admin/services`
- `/admin/submissions`

### Auth Flow
1. Email/password login via Supabase Auth
2. Role verification using `user_roles` table
3. Protected route guards with `has_role()` function
4. Session management via Supabase client

---

## Security Considerations

✅ **Row Level Security (RLS)** on all tables  
✅ **Role-based access** using security definer functions  
✅ **Server-side validation** for all mutations  
✅ **No client-side role checks** (avoid localStorage/hardcoded)  
✅ **Input sanitization** for user-submitted content  
✅ **Rate limiting** on contact form  
✅ **CORS configuration** for API access  

---

## Migration Roadmap

| Phase | Tasks | Status |
|-------|-------|--------|
| 1 | Static frontend | ✅ Complete |
| 2 | Enable Lovable Cloud | 🔜 Pending |
| 3 | Create database schema | 🔜 Pending |
| 4 | Implement data fetching | 🔜 Pending |
| 5 | Build admin dashboard | 🔜 Pending |
| 6 | Deploy & test | 🔜 Pending |

---

**Last Updated:** 2025-01-09
