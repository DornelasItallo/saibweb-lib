import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import clsx from 'clsx';

export interface SaibWebButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'white' | 'outline' | 'structure';
  children: ReactNode;
}

export function SaibWebButton({
  className,
  disabled = false,
  variant = 'primary',
  children,
  ...props
}: SaibWebButtonProps) {
  return (
    <button
      className={clsx(
        'flex items-center',
        'justify-center gap-1 p-2 h-8',
        'rounded-md text-sm font-semibold',
        'hover:opacity-90 transition-all outline-none duration-200',
        'active:opacity-90 active:shadow-none active:translate-y-[3px]',
        {
          'bg-gray-200 text-black-600 pointer-events-none': disabled,
          'bg-primary shadow-primary-500 shadow-button text-white':
            variant === 'primary' && !disabled,
          'bg-secondary shadow-secondary-200 shadow-button text-white':
            variant === 'secondary' && !disabled,
          'bg-white shadow-primary-500 shadow-button border border-white-700 text-black':
            variant === 'white' && !disabled,
          'bg-white shadow-primary-500 shadow-button border border-primary text-primary':
            variant === 'outline' && !disabled,
          '': variant === 'structure',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
