import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  Lightbulb,
  Calendar,
  Mail,
  MessageSquareQuote,
  Image,
  Settings,
  ChevronLeft,
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
  { icon: FileText, label: 'Posts', path: '/admin/posts' },
  { icon: FolderKanban, label: 'Projects', path: '/admin/projects' },
  { icon: Lightbulb, label: 'Solutions', path: '/admin/solutions' },
  { icon: Calendar, label: 'Appointments', path: '/admin/appointments' },
  { icon: Mail, label: 'Contact Submissions', path: '/admin/contact-submissions' },
  { icon: MessageSquareQuote, label: 'Quotes', path: '/admin/quotes' },
  { icon: Image, label: 'Media Library', path: '/admin/media' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-admin-bg-secondary border-r border-admin-border transition-all duration-300 z-40 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-admin-border">
        {!collapsed && (
          <h2 className="text-xl font-heading font-bold text-admin-accent-gold">
            VP Admin
          </h2>
        )}
        <button
          onClick={onToggle}
          className="p-2 hover:bg-admin-bg-tertiary rounded-admin-md transition-colors"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <ChevronLeft
            className={`w-5 h-5 text-admin-text-secondary transition-transform ${
              collapsed ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-admin-md transition-all group ${
                isActive
                  ? 'bg-admin-accent-gold text-white shadow-admin-md'
                  : 'text-admin-text-secondary hover:bg-admin-bg-tertiary hover:text-admin-text-primary'
              }`
            }
            title={collapsed ? item.label : undefined}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && (
              <span className="font-medium text-sm">{item.label}</span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
