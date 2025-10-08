import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface BaseInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: LucideIcon;
  fullWidth?: boolean;
}

interface AdminInputProps
  extends BaseInputProps,
    InputHTMLAttributes<HTMLInputElement> {
  as?: 'input';
}

interface AdminTextareaProps
  extends BaseInputProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: 'textarea';
}

type AdminInputComponentProps = AdminInputProps | AdminTextareaProps;

const AdminInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  AdminInputComponentProps
>(
  (
    {
      label,
      error,
      helperText,
      icon: Icon,
      fullWidth = true,
      className = '',
      as = 'input',
      ...props
    },
    ref
  ) => {
    const inputClasses = `w-full px-4 py-2.5 bg-admin-bg-tertiary border border-admin-border-subtle rounded-admin-md text-admin-text-primary placeholder-admin-text-muted transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-admin-accent-gold focus:border-transparent hover:border-admin-border-medium ${
      error ? 'border-red-500 focus:ring-red-500' : ''
    } ${Icon ? 'pl-10' : ''} ${className}`;

    const InputElement =
      as === 'textarea' ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={inputClasses}
          rows={4}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={inputClasses}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      );

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label className="block text-sm font-medium text-admin-text-primary mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icon className="h-5 w-5 text-admin-text-muted" />
            </div>
          )}
          {InputElement}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-sm text-admin-text-secondary">{helperText}</p>
        )}
      </div>
    );
  }
);

AdminInput.displayName = 'AdminInput';

export default AdminInput;
