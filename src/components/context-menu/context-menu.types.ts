import type * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import type { BasicSize, CommonItemVariant } from '@/components/shared/types';

export type ContextMenuProps = {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: BasicSize;
  checkable?: boolean;
  disabled?: boolean;
  className?: string;
  triggerClassName?: string;
};

export type ContextMenuItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Item
> & {
  variant?: CommonItemVariant;
  size?: BasicSize;
  highlighted?: boolean;
};

export type ContextMenuCheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.CheckboxItem
> & {
  variant?: CommonItemVariant;
  size?: BasicSize;
};

export type ContextMenuRadioItemProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.RadioItem
> & {
  size?: BasicSize;
};

export type ContextMenuSubProps = {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  size?: BasicSize;
  disabled?: boolean;
  className?: string;
};
