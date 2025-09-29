export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: 'Home',
    children: [
      { label: 'Home Page 01', href: '/' },
      { label: 'Home Page 02', href: '/home2' },
    ],
  },
  {
    label: 'About Us',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Testimonial', href: '/testimonial' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Services', href: '/services' },
      { label: 'Services Detail', href: '/services/family-law' },
    ],
  },
  {
    label: 'Portfolio',
    children: [
      { label: 'Portfolio Two Column', href: '/portfolio/2-col' },
      { label: 'Portfolio Masonry', href: '/portfolio/masonry' },
      { label: 'Portfolio Single', href: '/portfolio/1' },
    ],
  },
  {
    label: 'Blog',
    children: [
      { label: 'Blog List', href: '/blog' },
      { label: 'Blog Single', href: '/blog/understanding-law' },
    ],
  },
  {
    label: 'Contact us',
    href: '/contact',
  },
];
