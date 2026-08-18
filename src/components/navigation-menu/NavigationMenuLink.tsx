import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/cn';
import { navigationMenuRowStyles } from './navigation-menu.styles';
import type { NavigationMenuLinkProps } from './navigation-menu.types';

export function NavigationMenuLink({
  current,
  disabled,
  forceState,
  href,
  className,
  children,
  onClick,
  ...props
}: NavigationMenuLinkProps) {
  return (
    <NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Link
        {...props}
        active={current}
        href={disabled ? undefined : href}
        role={disabled ? 'link' : undefined}
        tabIndex={disabled ? 0 : undefined}
        aria-disabled={disabled || undefined}
        data-disabled={disabled ? '' : undefined}
        data-force={forceState}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);
        }}
        className={cn(navigationMenuRowStyles({ disabled }), className)}
      >
        {children}
      </NavigationMenuPrimitive.Link>
    </NavigationMenuPrimitive.Item>
  );
}
