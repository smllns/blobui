import type * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

export type DropdownMenuVariant = 'default' | 'filled' | 'outline' | 'ghost';

export type DropdownMenuSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DropdownMenuProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Root
> & {
  trigger: React.ReactNode;
  variant?: DropdownMenuVariant;
  size?: DropdownMenuSize;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export type DropdownMenuItemVariant = 'default' | 'destructive';

export type DropdownMenuItemSize = 'sm' | 'md' | 'lg';

export type DropdownMenuItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
> & {
  variant?: DropdownMenuItemVariant;
  size?: DropdownMenuItemSize;
};
