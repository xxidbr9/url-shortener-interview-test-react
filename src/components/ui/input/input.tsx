import { cn } from '@/utils/cn';
import React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  success?: boolean;
  wrapperClassName?: string;
};

export const Input = ({
  error = '',
  className,
  wrapperClassName = '',
  success = false,
  ...props
}: InputProps) => (
  <div className={cn('flex flex-col gap-y-1 ', wrapperClassName)}>
    <input
      className={cn(
        'bg-white py-[17px] px-6 rounded-[10px] text-gray-900 placeholder-gray-500 font-medium text-lg',
        {
          'ring-1 ring-red-500': error && !success,
          'ring-1 ring-green-500': !error && success,
        },
        'hover:ring-1 active:ring-1 hover:ring-blue-500 active:ring-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500',
        className,
      )}
      {...props}
    />
    {error && !success && <span className="text-red-500 font-medium text-base">{error}</span>}
  </div>
);

Input.defaultProps = {
  error: '',
  success: false,
  wrapperClassName: '',
};
