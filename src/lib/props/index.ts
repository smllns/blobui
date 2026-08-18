import { accordionProps } from './accordion';
import { alertProps } from './alert';
import { avatarProps } from './avatar';
import { badgeProps } from './badge';
import { breadcrumbItemProps, breadcrumbProps } from './breadcrumb';
import { buttonProps } from './button';
import { buttonGroupProps } from './buttonGroup';
import { cardProps } from './card';
import { checkboxProps } from './checkbox';
import { collapsibleProps } from './collapsible';
import { dialogContentProps, dialogProps } from './dialog';
import { dropdownMenuItemProps, dropdownMenuSeparatorProps } from './dropdown';
import { emptyProps } from './empty';
import { hoverCardContentProps, hoverCardProps, hoverCardTriggerProps } from './hoverCard';
import { inputProps } from './input';
import { inputGroupAddonProps, inputGroupProps } from './inputGroup';
import { inputOtpProps } from './inputOtp';
import { kbdGroupProps, kbdProps } from './kbd';
import {
  navigationMenuCardProps,
  navigationMenuItemProps,
  navigationMenuProps,
} from './navigationMenu';
import { paginationProps } from './pagination';
import { popoverProps } from './popover';
import { progressProps } from './progress';
import { radioProps } from './radio';
import { resizablePanelProps, resizableProps } from './resizable';
import { segmentedItemProps, segmentedProps } from './segmented';
import { selectItemProps, selectProps } from './select';
import { sliderProps } from './slider';
import { switchProps } from './switch';
import { tabItemProps, tabsProps } from './tabs';
import { toastProps } from './toast';
import { toggleProps } from './toggle';
import { tooltipProps } from './tooltip';

export const componentProps = {
  accordion: accordionProps,
  alert: alertProps,
  avatar: avatarProps,
  breadcrumb: { root: breadcrumbProps, item: breadcrumbItemProps },
  button: buttonProps,
  buttonGroup: buttonGroupProps,
  badge: badgeProps,
  card: cardProps,
  checkbox: checkboxProps,
  collapsible: collapsibleProps,
  dialog: { root: dialogProps, item: dialogContentProps },
  dropdown: {
    root: dropdownMenuItemProps,
    item: dropdownMenuItemProps,
    item2: dropdownMenuSeparatorProps,
  },
  empty: emptyProps,
  hoverCard: {
    root: hoverCardProps,
    item: hoverCardTriggerProps,
    item2: hoverCardContentProps,
  },
  input: inputProps,
  inputGroup: { root: inputGroupProps, item: inputGroupAddonProps },
  inputOtp: inputOtpProps,
  kbd: { root: kbdProps, item: kbdGroupProps },
  navigationMenu: {
    root: navigationMenuProps,
    item: navigationMenuItemProps,
    item2: navigationMenuCardProps,
  },
  pagination: paginationProps,
  popover: popoverProps,
  progress: progressProps,
  radio: radioProps,
  resizable: { root: resizableProps, item: resizablePanelProps },
  segmented: { root: segmentedProps, item: segmentedItemProps },
  select: {
    root: selectProps,
    item: selectItemProps,
  },
  slider: sliderProps,
  switch: switchProps,
  tabs: { root: tabsProps, item: tabItemProps },
  toast: toastProps,
  toggle: toggleProps,
  tooltip: tooltipProps,
};
