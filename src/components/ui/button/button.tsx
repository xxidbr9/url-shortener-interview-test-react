import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'bg-teal-400 text-white font-semibold text-xl hover:bg-teal-600 active:bg-teal-700 transition-all duration-200 ease-out leading-normal w-auto',
  {
    variants: {
      variant: {
        default: 'rounded-full',
        square: 'rounded-[10px]',
      },
      size: {
        default: 'py-4 px-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className, variant, size, type, ...props
  }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      type={type || 'button'}
      {...props}
    />
  ),
);

Button.displayName = 'Button';

export { Button, buttonVariants };
