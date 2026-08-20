import { accordionProps } from './accordion';
import { alertProps } from './alert';
import {
  alertDialogActionProps,
  alertDialogContentProps,
  alertDialogIconProps,
  alertDialogProps,
} from './alertDialog';
import { avatarProps } from './avatar';
import { badgeProps } from './badge';
import { breadcrumbItemProps, breadcrumbProps } from './breadcrumb';
import { buttonProps } from './button';
import { buttonGroupProps } from './buttonGroup';
import { cardFooterProps, cardProps } from './card';
import { checkboxProps } from './checkbox';
import { collapsibleProps } from './collapsible';
import {
  contextMenuCheckboxItemProps,
  contextMenuItemProps,
  contextMenuProps,
  contextMenuSubProps,
} from './contextMenu';
import { dialogContentProps, dialogFooterProps, dialogProps } from './dialog';
import {
  dropdownMenuItemProps,
  dropdownMenuProps,
  dropdownMenuSeparatorProps,
} from './dropdown';
import { emptyProps } from './empty';
import type { ComponentProp } from './helpers';
import { hoverCardContentProps, hoverCardProps, hoverCardTriggerProps } from './hoverCard';
import { inputProps } from './input';
import { inputGroupAddonProps, inputGroupProps } from './inputGroup';
import { inputOtpProps } from './inputOtp';
import { kbdGroupProps, kbdProps } from './kbd';
import {
  navigationMenuCardProps,
  navigationMenuFeatureProps,
  navigationMenuItemProps,
  navigationMenuLinkProps,
  navigationMenuProps,
} from './navigationMenu';
import {
  paginationContextProps,
  paginationProps,
  paginationSubcomponentProps,
} from './pagination';
import { popoverProps } from './popover';
import { progressProps } from './progress';
import { radioProps } from './radio';
import { resizablePanelProps, resizableProps } from './resizable';
import { segmentedItemProps, segmentedProps } from './segmented';
import { selectItemProps, selectProps } from './select';
import { sheetContentProps, sheetProps } from './sheet';
import { sliderProps } from './slider';
import { switchProps } from './switch';
import { tabItemProps, tabsProps } from './tabs';
import { showToastOptions, toastProps } from './toast';
import { toggleProps } from './toggle';
import { tooltipProps } from './tooltip';

const section = (title: string, props: ComponentProp[]) => ({ title, props });

export const componentProps = {
  accordion: [section('Props', accordionProps)],
  alert: [section('Props', alertProps)],
  alertDialog: [
    section('Props', alertDialogProps),
    section('Alert Dialog Content props', alertDialogContentProps),
    section('Alert Dialog Icon props', alertDialogIconProps),
    section('Alert Dialog Action props', alertDialogActionProps),
  ],
  avatar: [section('Props', avatarProps)],
  breadcrumb: [
    section('Props', breadcrumbProps),
    section('Breadcrumb Item props', breadcrumbItemProps),
  ],
  button: [section('Props', buttonProps)],
  buttonGroup: [section('Props', buttonGroupProps)],
  badge: [section('Props', badgeProps)],
  card: [
    section('Props', cardProps),
    section('CardFooter props', cardFooterProps),
  ],
  checkbox: [section('Props', checkboxProps)],
  collapsible: [section('Props', collapsibleProps)],
  contextMenu: [
    section('Props', contextMenuProps),
    section('Context Menu Item props', contextMenuItemProps),
    section('Context Menu Checkbox Item props', contextMenuCheckboxItemProps),
    section('Context Menu Sub props', contextMenuSubProps),
  ],
  dialog: [
    section('Props', dialogProps),
    section('Dialog Content props', dialogContentProps),
    section('Dialog Footer props', dialogFooterProps),
  ],
  dropdown: [
    section('Props', dropdownMenuProps),
    section('Dropdown Menu Item props', dropdownMenuItemProps),
    section('Dropdown Menu Separator props', dropdownMenuSeparatorProps),
  ],
  empty: [section('Props', emptyProps)],
  hoverCard: [
    section('Props', hoverCardProps),
    section('HoverCardTrigger props', hoverCardTriggerProps),
    section('HoverCardContent props', hoverCardContentProps),
  ],
  input: [section('Props', inputProps)],
  inputGroup: [
    section('Props', inputGroupProps),
    section('Addon props', inputGroupAddonProps),
  ],
  inputOtp: [section('Props', inputOtpProps)],
  kbd: [section('Props', kbdProps), section('Kbd Group props', kbdGroupProps)],
  navigationMenu: [
    section('Props', navigationMenuProps),
    section('Navigation Menu Item props', navigationMenuItemProps),
    section('Navigation Menu Link props', navigationMenuLinkProps),
    section('Navigation Menu Card props', navigationMenuCardProps),
    section('Navigation Menu Feature props', navigationMenuFeatureProps),
  ],
  pagination: [
    section('Props', paginationProps),
    section('Parts', paginationSubcomponentProps),
    section('usePagination() props', paginationContextProps),
  ],
  popover: [section('Props', popoverProps)],
  progress: [section('Props', progressProps)],
  radio: [section('Props', radioProps)],
  resizable: [
    section('Props', resizableProps),
    section('ResizablePanelItem props', resizablePanelProps),
  ],
  segmented: [
    section('Props', segmentedProps),
    section('Segmented item props', segmentedItemProps),
  ],
  select: [
    section('Props', selectProps),
    section('Select Item props', selectItemProps),
  ],
  sheet: [
    section('Props', sheetProps),
    section('Sheet Content props', sheetContentProps),
  ],
  slider: [section('Props', sliderProps)],
  switch: [section('Props', switchProps)],
  tabs: [section('Props', tabsProps), section('Tab item props', tabItemProps)],
  toast: [
    section('Toast props', toastProps),
    section('showToast() options', showToastOptions),
  ],
  toggle: [section('Props', toggleProps)],
  tooltip: [section('Props', tooltipProps)],
};
