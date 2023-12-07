import React from 'react';
import { cn } from '@/utils/cn';

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => <div className={cn('bg-white rounded-lg shadow-lg', className)} {...props} />;
