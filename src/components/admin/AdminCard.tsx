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
        return 'bg-gradient-to-br from-admin-bg-card to-admin-bg-tertiary';
      case 'glass':
        return 'bg-admin-bg-card/60 backdrop-blur-sm';
      default:
        return 'bg-admin-bg-card';
    }
  };

  return (
    <div
      className={`rounded-admin-lg border border-admin-border-subtle shadow-admin-md ${getVariantClass()} ${
        hover ? 'hover:-translate-y-1 hover:shadow-admin-lg transition-all duration-300' : ''
      } ${className}`}
    >
      {(title || actions) && (
        <div className="flex items-center justify-between border-b border-admin-border-subtle px-6 py-4">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-admin-text-primary">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-admin-text-secondary mt-1">
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
