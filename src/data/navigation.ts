export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio/masonry' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];
