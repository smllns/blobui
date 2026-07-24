import { accordionProps } from './accordion';
import { avatarProps } from './avatar';
import { badgeProps } from './badge';
import { buttonProps } from './button';
import { cardProps } from './card';
import { checkboxProps } from './checkbox';
import { dialogContentProps, dialogProps } from './dialog';
import { dropdownMenuItemProps, dropdownMenuSeparatorProps } from './dropdown';
import { inputProps } from './input';
import { popoverProps } from './popover';
import { radioProps } from './radio';
import { selectItemProps, selectProps } from './select';
import { switchProps } from './switch';
import { toastProps } from './toast';
import { tooltipProps } from './tooltip';

export const componentProps = {
  accordion: accordionProps,
  avatar: avatarProps,
  button: buttonProps,
  badge: badgeProps,
  card: cardProps,
  checkbox: checkboxProps,
  dialog: { root: dialogProps, item: dialogContentProps },
  dropdown: {
    root: dropdownMenuItemProps,
    item: dropdownMenuItemProps,
    item2: dropdownMenuSeparatorProps,
  },
  input: inputProps,
  popover: popoverProps,
  radio: radioProps,
  select: {
    root: selectProps,
    item: selectItemProps,
  },
  switch: switchProps,
  toast: toastProps,
  tooltip: tooltipProps,
};
