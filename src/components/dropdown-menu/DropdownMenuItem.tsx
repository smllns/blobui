import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { DropdownMenuItemProps } from './dropdown-menu.types';
import { cn } from '@/lib/cn';
import { menuItemStyles } from '@/components/shared/surface.styles';

export function DropdownMenuItem({
  variant,
  size,
  highlighted,
  className,
  ...props
}: DropdownMenuItemProps) {
  const highlight = highlighted ? { 'data-highlighted': '' } : {};

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
      {...highlight}
    />
  );
}
