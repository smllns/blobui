import {
  BASIC_SIZES,
  COMMON_VARIANTS,
  EXTENDED_SIZES,
  childrenProp,
  classNameProp,
  disabledProp,
  forceStateProp,
  onOpenChangeProp,
  openProp,
  portalProp,
  sideProp,
  sizeProp,
  variantProp,
} from './commonProps';
import { describe, prop } from './helpers';

export const dropdownMenuProps = [
  prop('trigger', 'ReactNode', '-', 'Element used to open the dropdown menu'),

  variantProp(COMMON_VARIANTS, 'default', 'Visual style of the trigger'),

  sizeProp(EXTENDED_SIZES, 'md', 'Controls trigger size'),

  sideProp,
  childrenProp,

  openProp('Controls the menu, so a specimen can stand open', 'undefined'),

  onOpenChangeProp('Called when the menu opens or closes'),

  describe(disabledProp, 'Disables the trigger, so the menu never opens'),

  { ...forceStateProp, type: "'hover' | 'focus'" },

  prop(
    'positioning',
    "'floating' | 'static'",
    'floating',
    'static drops the floating layer and lays the panel out in flow under the trigger, with no collision handling. For specimens',
  ),

  portalProp,
];

export const dropdownMenuItemProps = [
  variantProp(
    ['default', 'destructive'],
    'default',
    'Visual style of the menu item',
  ),

  sizeProp(BASIC_SIZES, 'md', 'Controls menu item size'),

  prop(
    'onSelect',
    '(event: Event) => void',
    '-',
    'Callback fired when the item is selected',
  ),

  disabledProp,
  childrenProp,
  prop(
    'highlighted',
    'boolean',
    'undefined',
    'Forces the row highlight. Spread conditionally — writing undefined would clobber the value Radix computes and kill live highlighting',
  ),

  classNameProp,
];

export const dropdownMenuSeparatorProps = [classNameProp];
