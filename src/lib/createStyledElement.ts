import { createElement, forwardRef } from 'react';
import { cn } from '@/lib/cn';

export function createStyledElement<
  T extends keyof React.JSX.IntrinsicElements,
>(element: T, styles: string) {
  return forwardRef<React.ComponentRef<T>, React.ComponentPropsWithoutRef<T>>(
    ({ className, ...props }, ref) =>
      createElement(element, {
        ref,
        className: cn(styles, className),
        ...props,
      }),
  );
}
