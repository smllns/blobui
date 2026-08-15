import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/cn';
import { ChevronDown } from '@/ui/icons/ChevronDown';
import { useNavigationMenuContext } from './navigation-menu.context';
import {
  navigationMenuCaretStyles,
  navigationMenuGridStyles,
  navigationMenuPanel,
  navigationMenuRowStyles,
} from './navigation-menu.styles';
import type { NavigationMenuItemProps } from './navigation-menu.types';

export function NavigationMenuItem({
  label,
  value,
  align = 'start',
  columns = 2,
  rows = 'auto',
  disabled,
  className,
  panelClassName,
  gridClassName,
  children,
}: NavigationMenuItemProps) {
  const { setContentRef } = useNavigationMenuContext();

  if (disabled) {
    return (
      <NavigationMenuPrimitive.Item value={value}>
        <button
          type='button'
          aria-disabled='true'
          data-disabled=''
          className={cn(navigationMenuRowStyles({ disabled: true }), className)}
        >
          {label}
          <ChevronDown size='sm' className={navigationMenuCaretStyles} />
        </button>
      </NavigationMenuPrimitive.Item>
    );
  }

  return (
    <NavigationMenuPrimitive.Item value={value}>
      <NavigationMenuPrimitive.Trigger
        onKeyDown={(event) => {
          if (event.key !== 'ArrowDown') return;
          if (event.currentTarget.getAttribute('aria-expanded') === 'true') {
            return;
          }
          event.preventDefault();
          event.currentTarget.click();
        }}
        className={cn(navigationMenuRowStyles(), className)}
      >
        {label}
        <ChevronDown size='sm' className={navigationMenuCaretStyles} />
      </NavigationMenuPrimitive.Trigger>

      <NavigationMenuPrimitive.Content
        ref={setContentRef}
        data-align={align}
        className={cn(navigationMenuPanel({ align }), panelClassName)}
      >
        <div
          className={cn(
            navigationMenuGridStyles({ columns, rows }),
            gridClassName,
          )}
        >
          {children}
        </div>
      </NavigationMenuPrimitive.Content>
    </NavigationMenuPrimitive.Item>
  );
}
