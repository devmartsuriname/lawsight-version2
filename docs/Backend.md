# Backend Documentation — VP Dr. Gregory Allan Rusland Website

*Comprehensive backend architecture, API, database, and integration documentation*

---

## Table of Contents

1. [Overview](#overview)
2. [Database Schema](#database-schema)
3. [API Endpoints](#api-endpoints)
4. [Authentication & Authorization](#authentication--authorization)
5. [Edge Functions](#edge-functions)
6. [Integrations](#integrations)
7. [Security](#security)
8. [Deployment](#deployment)

---

## Overview

The backend is built on **Lovable Cloud** (Supabase infrastructure), providing:
- PostgreSQL database with Row Level Security (RLS)
- RESTful API via PostgREST
- Authentication system
- File storage (S3-compatible)
- Edge functions for custom logic

**Current State**: Static frontend (Phase P2 complete)  
**Next Phase**: P4 - Backend Setup & Admin MVP

---

## Database Schema

### Posts Table
```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image TEXT,
  category TEXT,
  tags TEXT[],
  status TEXT CHECK (status IN ('draft', 'published', 'archived')) DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Solutions Table
```sql
CREATE TABLE solutions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  content TEXT,
  icon TEXT,
  image TEXT,
  order INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Projects Table
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  content TEXT,
  cover_image TEXT,
  gallery TEXT[],
  status TEXT CHECK (status IN ('draft', 'published')) DEFAULT 'draft',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Quotes Table
```sql
CREATE TABLE quotes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quote_text TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_role TEXT,
  author_image TEXT,
  source_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Events Table
```sql
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  type TEXT CHECK (type IN ('speech', 'event')) NOT NULL,
  description TEXT,
  content TEXT,
  event_date TIMESTAMPTZ NOT NULL,
  location TEXT,
  image TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Appointments Table
```sql
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  topic TEXT NOT NULL,
  preferred_date TIMESTAMPTZ NOT NULL,
  message TEXT,
  status TEXT CHECK (status IN ('new', 'confirmed', 'declined', 'completed')) DEFAULT 'new',
  google_event_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Additional Tables
- `faqs` - Frequently asked questions
- `media_files` - Uploaded files
- `media_videos` - YouTube video cache
- `pages` - Dynamic pages
- `page_sections` - Page section configurations
- `contact_submissions` - Contact form data
- `settings` - Site-wide settings (JSONB)
- `user_roles` - Role assignments

---

## API Endpoints

**Base URL**: `https://[project-ref].supabase.co/rest/v1`

### Posts
```
GET    /posts                    - List all posts
GET    /posts?status=eq.published - Filter published posts
GET    /posts?slug=eq.{slug}     - Get by slug
POST   /posts                    - Create post
PATCH  /posts?id=eq.{id}         - Update post
DELETE /posts?id=eq.{id}         - Delete post
```

### Solutions
```
GET    /solutions                - List all solutions
GET    /solutions?is_active=eq.true - Active solutions only
```

### Quotes
```
GET    /quotes?order=created_at.desc&limit=3 - Latest 3 quotes
```

*Similar patterns apply to all other tables*

---

## Authentication & Authorization

### Roles
- **admin**: Full access
- **editor**: Content management only
- **viewer**: Read-only access

### has_role() Function
```sql
CREATE OR REPLACE FUNCTION has_role(required_role TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_roles
    WHERE id = auth.uid()
    AND role = required_role
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### RLS Policies Example
```sql
-- Public can read published posts
CREATE POLICY "public_read_published"
ON posts FOR SELECT
USING (status = 'published');

-- Admins can do anything
CREATE POLICY "admin_all"
ON posts FOR ALL
USING (has_role('admin'));
```

---

## Edge Functions

### sync-youtube
Fetches latest videos from YouTube channel

### create-appointment
Creates appointment and syncs to Google Calendar

### cancel-appointment
Cancels appointment in both database and calendar

---

## Integrations

### Google Calendar API
- OAuth 2.0 authentication
- Create/update/delete events
- Two-way sync

### YouTube Data API v3
- Fetch channel videos
- Cache metadata
- Auto-refresh on schedule

---

## Security

- All tables protected by RLS
- JWT authentication
- HTTPS/TLS encryption
- Input validation
- Rate limiting

---

**Status**: Schema defined, implementation pending Phase P4  
**Last Updated**: Phase P2 Complete
