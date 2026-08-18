import type { DropdownMenuItemVariant } from '@/components/dropdown-menu/dropdown-menu.types';
import type {
  BasicSize,
  CommonStylingVariant,
  ExtendedSize,
  Side,
} from '@/components/shared/types';
import {
  BASIC_SIZE_OPTIONS,
  COMMON_VARIANTS,
  SIDE_OPTIONS,
  SIZE_OPTIONS,
} from '@/lib/options';
import {
  checkboxControl,
  selectControl,
} from '../components/playground/controls/controlHelpers';

export type DropdownMenuPlaygroundState = {
  variant: CommonStylingVariant;
  size: ExtendedSize;
  itemVariant: DropdownMenuItemVariant;
  itemSize: BasicSize;
  disabled: boolean;
  side: Side;
};

export const DROPDOWN_MENU_INITIAL_STATE: DropdownMenuPlaygroundState = {
  variant: 'default',
  size: 'md',
  itemVariant: 'default',
  itemSize: 'md',
  disabled: false,
  side: 'bottom',
};

export const DROPDOWN_MENU_CONTROLS = [
  selectControl<DropdownMenuPlaygroundState>(
    'variant',
    'Trigger Variant',
    COMMON_VARIANTS,
  ),
  selectControl<DropdownMenuPlaygroundState>(
    'size',
    'Trigger Size',
    SIZE_OPTIONS,
  ),
  selectControl<DropdownMenuPlaygroundState>('side', 'Side', SIDE_OPTIONS),
  selectControl<DropdownMenuPlaygroundState>(
    'itemVariant',
    'First Item Variant',
    ['default', 'destructive'],
  ),
  selectControl<DropdownMenuPlaygroundState>(
    'itemSize',
    'First Item Size',
    BASIC_SIZE_OPTIONS,
  ),
  checkboxControl<DropdownMenuPlaygroundState>(
    'disabled',
    'Add a Disabled Item',
  ),
];
