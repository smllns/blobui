import { forwardRef } from 'react';
import { cn } from '@/lib/cn';
import { kbdGroupStyles, kbdStyles } from './kbd.styles';
import type { KbdGroupProps, KbdProps } from './kbd.types';

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ children, size, variant, pressed, className, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        data-pressed={pressed || undefined}
        className={cn(kbdStyles({ size, variant }), className)}
        {...props}
      >
        {children}
      </kbd>
    );
  },
);

export function KbdGroup({
  keys,
  size,
  variant,
  children,
  className,
  ...props
}: KbdGroupProps) {
  return (
    <span className={cn(kbdGroupStyles, className)} {...props}>
      {keys?.map((key, index) => (
        <Kbd key={index} size={size} variant={variant}>
          {key}
        </Kbd>
      ))}

      {children}
    </span>
  );
}
