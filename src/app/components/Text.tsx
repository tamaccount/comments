import type { ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/app/utils/cn';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  size?: 'sm' | 'base';
  weight?: 'normal' | 'medium';
  color?: 'primary' | 'reverse';
}

const sizeStyles = {
  sm: 'text-[11px] leading-4',
  base: 'text-sm leading-5',
};

const weightStyles = {
  normal: 'font-normal',
  medium: 'font-medium',
};

const colorStyles = {
  primary: 'text-gray-1000',
  reverse: 'text-background-100',
};

export function Text({
  children,
  size = 'base',
  weight = 'normal',
  color = 'primary',
  ...props
}: TextProps) {
  return (
    <div className={cn(sizeStyles[size], weightStyles[weight], colorStyles[color])} {...props}>
      {children}
    </div>
  );
}
