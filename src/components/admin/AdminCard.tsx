import { ReactNode } from 'react';

interface AdminCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  variant?: 'default' | 'gradient' | 'glass';
  hover?: boolean;
}

export default function AdminCard({
  children,
  className = '',
  title,
  subtitle,
  actions,
  variant = 'default',
  hover = false,
}: AdminCardProps) {
  const getVariantClass = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-[var(--admin-bg-card)] to-[var(--admin-bg-tertiary)]';
      case 'glass':
        return 'admin-glass';
      default:
        return 'bg-[var(--admin-bg-card)]';
    }
  };

  return (
    <div
      className={`rounded-[var(--admin-radius-lg)] border border-[var(--admin-border-subtle)] shadow-[var(--admin-shadow-md)] ${getVariantClass()} ${
        hover ? 'admin-hover-lift' : ''
      } ${className}`}
    >
      {(title || actions) && (
        <div className="flex items-center justify-between border-b border-[var(--admin-border-subtle)] px-6 py-4">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-[var(--admin-text-primary)]">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-[var(--admin-text-secondary)] mt-1">
                {subtitle}
              </p>
            )}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
