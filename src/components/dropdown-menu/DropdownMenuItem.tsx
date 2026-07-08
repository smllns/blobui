import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import type { DropdownMenuItemProps } from './dropdown-menu.types';

import { dropdownMenuItemStyles } from './dropdown-menu.styles';

import { cn } from '../../lib/cn';

export function DropdownMenuItem({
  variant,
  size,
  className,
  ...props
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        dropdownMenuItemStyles({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}
