// 
// admin-menu.ts - VP Admin Menu Configuration
// 

export type MenuItemType = {
  key: string
  label: string
  icon?: string
  url?: string
  badge?: {
    variant: string
    text: string
  }
  isTitle?: boolean
  children?: MenuItemType[]
}

export const ADMIN_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'solar:widget-2-outline',
    url: '/admin/dashboard',
  },
  {
    key: 'content',
    label: 'Content Management',
    icon: 'solar:document-text-outline',
    isTitle: false,
    children: [
      {
        key: 'posts',
        label: 'News & Updates',
        icon: 'solar:document-outline',
        url: '/admin/posts',
      },
      {
        key: 'projects',
        label: 'Projects',
        icon: 'solar:layers-outline',
        url: '/admin/projects',
      },
      {
        key: 'solutions',
        label: 'Solutions',
        icon: 'solar:lightbulb-outline',
        url: '/admin/solutions',
      },
      {
        key: 'team',
        label: 'Team Members',
        icon: 'solar:users-group-rounded-outline',
        url: '/admin/team',
      },
    ],
  },
  {
    key: 'engagement',
    label: 'Engagement',
    icon: 'solar:chat-round-outline',
    isTitle: false,
    children: [
      {
        key: 'appointments',
        label: 'Appointments',
        icon: 'solar:calendar-outline',
        url: '/admin/appointments',
        badge: {
          variant: 'vp-gold',
          text: 'New',
        },
      },
      {
        key: 'contact',
        label: 'Contact Submissions',
        icon: 'solar:letter-outline',
        url: '/admin/contact-submissions',
      },
      {
        key: 'quotes',
        label: 'Quote Requests',
        icon: 'solar:document-add-outline',
        url: '/admin/quotes',
      },
    ],
  },
  {
    key: 'media',
    label: 'Media Library',
    icon: 'solar:gallery-outline',
    url: '/admin/media',
  },
  {
    key: 'settings-section',
    label: 'System',
    isTitle: true,
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: 'solar:settings-outline',
    url: '/admin/settings',
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: 'solar:user-outline',
    url: '/admin/profile',
  },
]

export const getMenuItems = () => ADMIN_MENU_ITEMS
