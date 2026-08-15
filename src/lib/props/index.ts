import { accordionProps } from './accordion';
import { avatarProps } from './avatar';
import { badgeProps } from './badge';
import { buttonProps } from './button';
import { buttonGroupProps } from './buttonGroup';
import { cardProps } from './card';
import { checkboxProps } from './checkbox';
import { dialogContentProps, dialogProps } from './dialog';
import { dropdownMenuItemProps, dropdownMenuSeparatorProps } from './dropdown';
import { hoverCardContentProps, hoverCardProps, hoverCardTriggerProps } from './hoverCard';
import { inputProps } from './input';
import { inputOtpProps } from './inputOtp';
import {
  navigationMenuCardProps,
  navigationMenuItemProps,
  navigationMenuProps,
} from './navigationMenu';
import { popoverProps } from './popover';
import { radioProps } from './radio';
import { resizablePanelProps, resizableProps } from './resizable';
import { selectItemProps, selectProps } from './select';
import { switchProps } from './switch';
import { toastProps } from './toast';
import { tooltipProps } from './tooltip';

export const componentProps = {
  accordion: accordionProps,
  avatar: avatarProps,
  button: buttonProps,
  buttonGroup: buttonGroupProps,
  badge: badgeProps,
  card: cardProps,
  checkbox: checkboxProps,
  dialog: { root: dialogProps, item: dialogContentProps },
  dropdown: {
    root: dropdownMenuItemProps,
    item: dropdownMenuItemProps,
    item2: dropdownMenuSeparatorProps,
  },
  hoverCard: {
    root: hoverCardProps,
    item: hoverCardTriggerProps,
    item2: hoverCardContentProps,
  },
  input: inputProps,
  inputOtp: inputOtpProps,
  navigationMenu: {
    root: navigationMenuProps,
    item: navigationMenuItemProps,
    item2: navigationMenuCardProps,
  },
  popover: popoverProps,
  radio: radioProps,
  resizable: { root: resizableProps, item: resizablePanelProps },
  select: {
    root: selectProps,
    item: selectItemProps,
  },
  switch: switchProps,
  toast: toastProps,
  tooltip: tooltipProps,
};
