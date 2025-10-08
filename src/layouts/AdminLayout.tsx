import { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import {
  LayoutDashboard,
  FileText,
  Target,
  Lightbulb,
  Calendar,
  Mail,
  MessageSquare,
  Image as ImageIcon,
  Settings,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  Monitor,
  ExternalLink,
} from 'lucide-react';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('dark');

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/auth/login');
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Posts', path: '/admin/posts', icon: FileText },
    { name: 'Projects', path: '/admin/projects', icon: Target },
    { name: 'Solutions', path: '/admin/solutions', icon: Lightbulb },
    { name: 'Appointments', path: '/admin/appointments', icon: Calendar },
    { name: 'Contact Submissions', path: '/admin/contact', icon: Mail },
    { name: 'Quotes', path: '/admin/quotes', icon: MessageSquare },
    { name: 'Media Library', path: '/admin/media', icon: ImageIcon },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-5 w-5" />;
      case 'dark':
        return <Moon className="h-5 w-5" />;
      default:
        return <Monitor className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-admin-bg-primary">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-16'
        } bg-admin-bg-secondary border-r border-admin-border-subtle shadow-admin-xl`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Logo/Brand */}
          <div className="flex h-16 items-center justify-between border-b border-admin-border-subtle px-4">
            {sidebarOpen ? (
              <>
                <div>
                  <h1 className="text-lg font-bold bg-gradient-to-r from-admin-accent-gold to-admin-accent-gold-light bg-clip-text text-transparent">
                    VP Admin
                  </h1>
                  <p className="text-xs text-admin-text-secondary">Content Management</p>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1.5 rounded-md hover:bg-admin-bg-hover text-admin-text-secondary hover:text-admin-text-primary transition-colors"
                  aria-label="Collapse sidebar"
                >
                  <X className="h-5 w-5" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-1.5 rounded-md hover:bg-admin-bg-hover text-admin-text-secondary hover:text-admin-text-primary transition-colors mx-auto"
                aria-label="Expand sidebar"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 rounded-admin-md px-3 py-2.5 text-sm font-medium transition-all duration-300 group ${
                    active
                      ? 'bg-admin-accent-gold text-white shadow-admin-gold'
                      : 'text-admin-text-secondary hover:bg-admin-bg-hover hover:text-admin-text-primary'
                  }`}
                  title={!sidebarOpen ? item.name : undefined}
                >
                  <Icon className={`h-5 w-5 ${active ? 'scale-110' : 'group-hover:scale-110'} transition-transform`} />
                  {sidebarOpen && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Footer Actions */}
          <div className="border-t border-admin-border-subtle p-3 space-y-1">
            <button
              onClick={toggleTheme}
              className="flex w-full items-center gap-3 rounded-admin-md px-3 py-2.5 text-sm font-medium text-admin-text-secondary hover:bg-admin-bg-hover hover:text-admin-text-primary transition-all duration-300"
              title={!sidebarOpen ? 'Toggle theme' : undefined}
            >
              {getThemeIcon()}
              {sidebarOpen && <span>Theme: {theme}</span>}
            </button>
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-admin-md px-3 py-2.5 text-sm font-medium text-admin-text-secondary hover:bg-red-500/10 hover:text-red-500 transition-all duration-300"
              title={!sidebarOpen ? 'Logout' : undefined}
            >
              <LogOut className="h-5 w-5" />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? 'pl-64' : 'pl-16'
        }`}
      >
        {/* Top Bar */}
        <header className="sticky top-0 z-30 border-b border-admin-border-subtle bg-admin-bg-card/95 shadow-admin-md backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-4">
              {!sidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="rounded-admin-md p-2 text-admin-text-secondary hover:bg-admin-bg-hover hover:text-admin-text-primary transition-colors"
                  aria-label="Open sidebar"
                >
                  <Menu className="h-5 w-5" />
                </button>
              )}
              <h2 className="text-lg font-semibold text-admin-text-primary">
                {menuItems.find((item) => item.path === location.pathname)?.name || 'Admin Panel'}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-admin-text-secondary hover:text-admin-accent-gold transition-colors font-medium"
              >
                <span className="hidden sm:inline">View Site</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
