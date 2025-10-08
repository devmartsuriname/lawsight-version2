import { useState, useEffect, useRef } from 'react';
import { Search, Bell, User, LogOut, Sun, Moon, Monitor } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

interface TopbarProps {
  sidebarCollapsed: boolean;
}

export function Topbar({ sidebarCollapsed }: TopbarProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { user, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setShowThemeMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  };

  const ThemeIcon = themeIcons[theme];

  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-admin-bg-secondary border-b border-admin-border z-30 transition-all duration-300 ${
        sidebarCollapsed ? 'left-20' : 'left-64'
      }`}
    >
      <div className="h-full px-6 flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-admin-text-secondary" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-admin-bg-tertiary border border-admin-border rounded-admin-md text-admin-text-primary placeholder-admin-text-secondary focus:outline-none focus:ring-2 focus:ring-admin-accent-gold focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <div className="relative" ref={themeMenuRef}>
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-2 hover:bg-admin-bg-tertiary rounded-admin-md transition-colors relative"
              title="Change theme"
            >
              <ThemeIcon className="w-5 h-5 text-admin-text-secondary" />
            </button>

            {showThemeMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-admin-bg-tertiary border border-admin-border rounded-admin-md shadow-admin-lg overflow-hidden">
                {(['light', 'dark', 'system'] as const).map((t) => {
                  const Icon = themeIcons[t];
                  return (
                    <button
                      key={t}
                      onClick={() => {
                        setTheme(t);
                        setShowThemeMenu(false);
                      }}
                      className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-admin-bg-primary transition-colors ${
                        theme === t ? 'bg-admin-accent-gold/10 text-admin-accent-gold' : 'text-admin-text-primary'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="capitalize">{t}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Notifications */}
          <button
            className="p-2 hover:bg-admin-bg-tertiary rounded-admin-md transition-colors relative"
            title="Notifications"
          >
            <Bell className="w-5 h-5 text-admin-text-secondary" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-admin-accent-purple rounded-full"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileMenuRef}>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 px-3 py-2 hover:bg-admin-bg-tertiary rounded-admin-md transition-colors"
            >
              <div className="w-8 h-8 bg-admin-accent-gold rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-medium text-admin-text-primary">Administrator</p>
                <p className="text-xs text-admin-text-secondary truncate max-w-[120px]">
                  {user?.email}
                </p>
              </div>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-admin-bg-tertiary border border-admin-border rounded-admin-md shadow-admin-lg overflow-hidden">
                <div className="px-4 py-3 border-b border-admin-border">
                  <p className="text-sm font-medium text-admin-text-primary">Administrator</p>
                  <p className="text-xs text-admin-text-secondary truncate">{user?.email}</p>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full px-4 py-3 flex items-center gap-3 text-red-400 hover:bg-admin-bg-primary transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
