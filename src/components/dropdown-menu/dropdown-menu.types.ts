import type * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type {
  BasicSize,
  CommonStylingVariant,
  ExtendedSize,
  Side,
} from '../types';

export type DropdownMenuProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Root
> & {
  trigger: React.ReactNode;
  variant?: CommonStylingVariant;
  size?: ExtendedSize;
  side?: Side;
};

export type DropdownMenuItemVariant = 'default' | 'destructive';

export type DropdownMenuItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
> & {
  variant?: DropdownMenuItemVariant;
  size?: BasicSize;
};
