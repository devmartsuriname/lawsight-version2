# 🎨 VP Admin Panel - Design System Documentation

**Version:** 1.0.0  
**Last Updated:** 2025-10-08  
**Design Reference:** Darkone Admin Template

---

## 📋 Overview

The VP Admin Panel features a sophisticated dark theme inspired by the Darkone Admin template while integrating VP's signature gold branding. This design system ensures consistency, accessibility, and visual appeal across all admin interfaces.

---

## 🎨 Color Palette

### Dark Theme (Default)

#### Background Colors
```css
--admin-bg-primary: #1a1d2e      /* Main background */
--admin-bg-secondary: #222736    /* Sidebar, cards */
--admin-bg-tertiary: #2d3142     /* Inputs, secondary elements */
--admin-bg-card: #252836         /* Card backgrounds */
--admin-bg-hover: #2f3349        /* Hover states */
```

#### Text Colors
```css
--admin-text-primary: #e4e6eb    /* Main text */
--admin-text-secondary: #9ca3af  /* Secondary text */
--admin-text-muted: #6b7280      /* Muted/disabled text */
--admin-text-white: #ffffff      /* Pure white for contrast */
```

#### Accent Colors
```css
--admin-accent-gold: hsl(42, 48%, 59%)      /* VP Gold - Primary accent */
--admin-accent-gold-light: hsl(42, 53%, 65%) /* Hover state */
--admin-accent-purple: #8b5cf6               /* Secondary accent */
--admin-accent-blue: #3b82f6                 /* Info states */
--admin-accent-green: #10b981                /* Success states */
--admin-accent-red: #ef4444                  /* Error states */
```

#### Border Colors
```css
--admin-border-subtle: #374151   /* Subtle borders */
--admin-border-medium: #4b5563   /* Medium borders */
--admin-border-gold: hsl(42, 48%, 59%) /* Gold borders */
```

### Light Theme (Optional)
Light theme variants are defined for users who prefer traditional admin interfaces. Toggle via the theme switcher in the sidebar.

---

## 🌈 Gradients

### Gold Gradient (Primary)
```css
--admin-gradient-gold: linear-gradient(135deg, hsl(42, 48%, 59%) 0%, hsl(42, 53%, 65%) 100%);
```

### Accent Gradients
```css
--admin-gradient-purple: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
--admin-gradient-blue: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
--admin-gradient-card: linear-gradient(135deg, #252836 0%, #2d3142 100%);
--admin-gradient-stat: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
```

### Icon Background Gradients
```css
--admin-icon-bg-gold: linear-gradient(135deg, rgba(197, 164, 103, 0.15) 0%, rgba(197, 164, 103, 0.05) 100%);
--admin-icon-bg-purple: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%);
--admin-icon-bg-blue: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 100%);
--admin-icon-bg-green: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%);
```

---

## 💫 Shadows & Depth

```css
--admin-shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
--admin-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
--admin-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
--admin-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.6);
--admin-shadow-gold: 0 4px 12px rgba(197, 164, 103, 0.3);
--admin-shadow-glow: 0 0 20px rgba(139, 92, 246, 0.3);
```

**Usage Guidelines:**
- `shadow-sm`: Subtle elevation for inputs
- `shadow-md`: Standard cards
- `shadow-lg`: Hover states, modals
- `shadow-xl`: Sidebar, major components
- `shadow-gold`: Primary buttons, active states
- `shadow-glow`: Special effects, highlights

---

## 📐 Border Radius

```css
--admin-radius-sm: 6px   /* Small elements */
--admin-radius-md: 8px   /* Buttons, inputs */
--admin-radius-lg: 12px  /* Cards, containers */
--admin-radius-xl: 16px  /* Large cards, modals */
--admin-radius-full: 9999px /* Pills, badges */
```

---

## 🧩 Component Library

### AdminCard
**Purpose:** Container for grouped content with optional title and actions

**Variants:**
- `default`: Standard card with solid background
- `gradient`: Subtle gradient background
- `glass`: Glassmorphism effect with blur

**Props:**
```tsx
<AdminCard 
  title="Card Title"
  subtitle="Optional subtitle"
  actions={<Button />}
  variant="gradient"
  hover={true}
>
  {children}
</AdminCard>
```

### StatCard
**Purpose:** Dashboard statistics display with mini charts

**Features:**
- Icon with gradient background
- Animated sparkline chart (Recharts)
- Change indicator with positive/negative/neutral states
- Loading skeleton state

**Props:**
```tsx
<StatCard
  title="Total Posts"
  value={42}
  change="+12% from last month"
  changeType="positive"
  icon={FileText}
  iconColor="gold"
  chartData={[{value: 10}, {value: 20}, ...]}
  loading={false}
/>
```

**Icon Colors:**
- `gold`: VP brand primary
- `purple`: Secondary actions
- `blue`: Information/neutral
- `green`: Success/growth

### AdminButton
**Purpose:** Themed action buttons with consistent styling

**Variants:**
- `primary`: Gold gradient, high emphasis
- `secondary`: Tertiary background, medium emphasis
- `outline`: Transparent with border
- `ghost`: Minimal styling, low emphasis
- `danger`: Red, destructive actions

**Props:**
```tsx
<AdminButton
  variant="primary"
  size="md"
  icon={Plus}
  iconPosition="left"
  loading={false}
  fullWidth={false}
>
  Create New
</AdminButton>
```

### AdminInput
**Purpose:** Form inputs with dark theme styling

**Features:**
- Label and helper text support
- Icon integration
- Error state styling
- Textarea support via `as` prop

**Props:**
```tsx
<AdminInput
  label="Email"
  type="email"
  icon={Mail}
  error="Invalid email"
  helperText="We'll never share your email"
  fullWidth={true}
/>
```

### AdminTable
**Purpose:** Data display with sorting and actions

**Features:**
- Responsive column widths
- Alignment options (left/center/right)
- Row actions
- Loading skeleton
- Empty state message

**Props:**
```tsx
<AdminTable
  columns={[
    { key: 'name', label: 'Name', width: '40%' },
    { key: 'status', label: 'Status', width: '20%', align: 'center' }
  ]}
  data={items}
  loading={false}
  onRowClick={(row) => console.log(row)}
  actions={(row) => <Button>Edit</Button>}
/>
```

---

## 🎯 Layout Structure

### Sidebar
- **Width:** 256px (expanded), 64px (collapsed)
- **Background:** `--admin-bg-secondary`
- **Active Item:** Gold background with shadow
- **Icons:** Lucide React (5x5 size)

### Top Header
- **Height:** 64px
- **Background:** Card background with opacity + backdrop blur
- **Position:** Sticky with z-index 30

### Main Content
- **Padding:** 24px (6 in Tailwind)
- **Min Height:** calc(100vh - 4rem)

---

## 🔤 Typography

### Headings
```css
/* Main page title */
.text-3xl.font-bold.text-[var(--admin-text-primary)]

/* Section titles */
.text-xl.font-semibold.text-[var(--admin-text-primary)]

/* Card titles */
.text-lg.font-semibold.text-[var(--admin-text-primary)]
```

### Body Text
```css
/* Primary text */
.text-sm.text-[var(--admin-text-primary)]

/* Secondary/muted text */
.text-sm.text-[var(--admin-text-secondary)]

/* Labels */
.text-xs.uppercase.tracking-wide.text-[var(--admin-text-secondary)]
```

---

## ⚡ Animations & Transitions

### Standard Transitions
```css
--admin-transition-fast: 150ms ease
--admin-transition-normal: 250ms ease
--admin-transition-slow: 350ms ease
--admin-transition-cubic: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Hover Effects
- **Scale:** `hover:scale-105` for buttons
- **Lift:** `hover:-translate-y-1` for cards
- **Glow:** `hover:shadow-[var(--admin-shadow-glow)]`

### Loading States
- Spinner animation for buttons
- Skeleton placeholders for data
- Pulse animation for loading cards

---

## ♿ Accessibility

### Focus States
All interactive elements must have visible focus indicators:
```css
focus:outline-none focus:ring-2 focus:ring-[var(--admin-accent-gold)]
```

### Color Contrast
- Primary text on dark backgrounds: 7.1:1 (AAA)
- Secondary text on dark backgrounds: 4.8:1 (AA)
- Gold accent on dark: 4.5:1 (AA)

### ARIA Labels
- Sidebar toggle buttons include `aria-label`
- Icon-only buttons include descriptive labels
- Form inputs properly associated with labels

---

## 📱 Responsive Behavior

### Breakpoints
```tsx
sm: 768px   /* Tablet portrait */
md: 992px   /* Tablet landscape */
lg: 1200px  /* Desktop */
xl: 1400px  /* Large desktop */
```

### Sidebar
- Desktop (lg+): Fixed, expandable/collapsible
- Tablet (md): Overlay mode
- Mobile (sm): Off-canvas with backdrop

### Grid Layouts
```tsx
/* Stats Grid */
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

/* Content Grid */
grid-cols-1 lg:grid-cols-3
```

---

## 🎨 Special Effects

### Glass Effect
```css
.admin-glass {
  background: rgba(37, 40, 54, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid var(--admin-border-subtle);
}
```

### Gradient Text
```css
.admin-gradient-text {
  background: var(--admin-gradient-gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Custom Scrollbar
```css
.admin-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: var(--admin-border-medium) var(--admin-bg-secondary);
}
```

---

## 🔧 Theme Toggle

The admin panel supports three theme modes:
1. **Dark** (Default): Dark navy theme with gold accents
2. **Light**: Light backgrounds for users who prefer traditional admin UIs
3. **System**: Follows OS preference

Toggle via the sidebar footer button. Theme preference is stored in localStorage.

---

## 📦 Dependencies

### Required Packages
- `lucide-react` - Icon system
- `recharts` - Mini chart/sparkline rendering
- `react-router-dom` - Navigation
- `@supabase/supabase-js` - Backend integration

### CSS Files
1. `src/index.css` - Global styles + VP Style Guide tokens
2. `src/styles/admin-tokens.css` - Admin-specific theme tokens

Import order in `main.tsx`:
```tsx
import './index.css';
import './styles/admin-tokens.css';
```

---

## ✅ Best Practices

1. **Always use CSS variables** for colors instead of hardcoded values
2. **Maintain consistent spacing** using Tailwind's spacing scale
3. **Use semantic HTML** (main, aside, header, section)
4. **Test dark mode** thoroughly for contrast and visibility
5. **Provide loading states** for async operations
6. **Include empty states** for data tables and lists
7. **Use Lucide icons** consistently throughout the admin area
8. **Keep animations subtle** to avoid distraction

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-10-08 | Initial Darkone-inspired design system |

---

## 📚 Resources

- **Darkone Reference:** https://stackbros.in/darkone/?storefront=envato-elements
- **VP Style Guide:** `/docs/style-guide.md`
- **Lucide Icons:** https://lucide.dev/icons
- **Recharts Docs:** https://recharts.org/

---

**Maintained by:** VP Admin Team  
**Questions?** Refer to the main PRD or Style Guide documentation.
