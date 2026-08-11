import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { DropdownMenuItemProps } from './dropdown-menu.types';
import { cn } from '@/lib/cn';
import { menuItemStyles } from '../shared/surface.styles';

export function DropdownMenuItem({
  variant,
  size,
  className,
  ...props
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        menuItemStyles({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}
