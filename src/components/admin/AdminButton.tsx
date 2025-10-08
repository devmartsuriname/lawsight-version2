import { ReactNode, ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface AdminButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
}

export default function AdminButton({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: AdminButtonProps) {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[var(--admin-accent-gold)] hover:bg-[var(--admin-accent-gold-light)] text-white shadow-[var(--admin-shadow-gold)]';
      case 'secondary':
        return 'bg-[var(--admin-bg-tertiary)] hover:bg-[var(--admin-bg-hover)] text-[var(--admin-text-primary)] border border-[var(--admin-border-subtle)]';
      case 'outline':
        return 'bg-transparent hover:bg-[var(--admin-bg-hover)] text-[var(--admin-text-primary)] border border-[var(--admin-border-medium)]';
      case 'ghost':
        return 'bg-transparent hover:bg-[var(--admin-bg-hover)] text-[var(--admin-text-secondary)] hover:text-[var(--admin-text-primary)]';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white shadow-[var(--admin-shadow-md)]';
      default:
        return '';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-6 py-3 text-base';
      default:
        return 'px-4 py-2 text-sm';
    }
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--admin-radius-md)] font-medium transition-all duration-300 ${getVariantClass()} ${getSizeClass()} ${
        fullWidth ? 'w-full' : ''
      } ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="h-4 w-4" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="h-4 w-4" />}
        </>
      )}
    </button>
  );
}
