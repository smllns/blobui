import type {
  DropdownMenuItemSize,
  DropdownMenuItemVariant,
  DropdownMenuSize,
  DropdownMenuVariant,
} from '../../components/dropdown-menu/dropdown-menu.types';
import type { Control } from '../components/playground/controls/ControlsRenderer';

export type DropdownMenuPlaygroundState = {
  variant: DropdownMenuVariant;
  size: DropdownMenuSize;
  itemVariant: DropdownMenuItemVariant;
  itemSize: DropdownMenuItemSize;
  disabled: boolean;
  side: 'top' | 'right' | 'bottom' | 'left';
};

export const DROPDOWN_MENU_INITIAL_STATE: DropdownMenuPlaygroundState = {
  variant: 'default',
  size: 'md',
  itemVariant: 'default',
  itemSize: 'md',
  disabled: false,
  side: 'bottom',
};

export const DROPDOWN_MENU_CONTROLS: Control<DropdownMenuPlaygroundState>[] = [
  {
    key: 'variant',
    label: 'Trigger Variant',
    type: 'select',
    options: ['default', 'filled', 'outline', 'ghost'],
  },
  {
    key: 'size',
    label: 'Trigger Size',
    type: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  {
    key: 'side',
    label: 'Side',
    type: 'select',
    options: ['top', 'right', 'bottom', 'left'],
  },
  {
    key: 'itemVariant',
    label: 'First Item Variant',
    type: 'select',
    options: ['default', 'destructive'],
  },
  {
    key: 'itemSize',
    label: 'First Item Size',
    type: 'select',
    options: ['sm', 'md', 'lg'],
  },
  {
    key: 'disabled',
    label: 'Add a Disabled Item',
    type: 'checkbox',
  },
] as const;
