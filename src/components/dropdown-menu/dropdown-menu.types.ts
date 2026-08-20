import type * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type {
  BasicSize,
  CommonItemVariant,
  CommonStylingVariant,
  ExtendedSize,
  Side,
} from '@/components/shared/types';

export type DropdownMenuProps = {
  children?: React.ReactNode;
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: CommonStylingVariant;
  size?: ExtendedSize;
  side?: Side;
  disabled?: boolean;
  forceState?: 'hover' | 'focus';
  portal?: boolean;
  positioning?: 'floating' | 'static';
};

export type DropdownMenuItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
> & {
  variant?: CommonItemVariant;
  size?: BasicSize;
  highlighted?: boolean;
};
