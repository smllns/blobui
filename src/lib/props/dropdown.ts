import {
  childrenProp,
  classNameProp,
  disabledProp,
  sideProp,
} from './commonProps';
import { prop } from './helpers';

export const dropdownMenuProps = [
  prop('trigger', 'ReactNode', '-', 'Element used to open the dropdown menu'),

  prop(
    'variant',
    "'default' | 'filled' | 'outline' | 'ghost'",
    'default',
    'Visual style of the trigger',
  ),

  prop(
    'size',
    "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    'md',
    'Controls trigger size',
  ),

  sideProp,
  childrenProp,
];

export const dropdownMenuItemProps = [
  prop(
    'variant',
    "'default' | 'destructive'",
    'default',
    'Visual style of the menu item',
  ),

  prop('size', "'sm' | 'md' | 'lg'", 'md', 'Controls menu item size'),

  prop(
    'onSelect',
    '() => void',
    '-',
    'Callback fired when the item is selected',
  ),

  disabledProp,
  childrenProp,
];

export const dropdownMenuSeparatorProps = [classNameProp];
