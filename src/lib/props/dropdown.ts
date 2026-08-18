import {
  childrenProp,
  classNameProp,
  disabledProp,
  forceStateProp,
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
  prop(
    'open',
    'boolean',
    'undefined',
    'Controls the menu, so a specimen can stand open',
  ),

  forceStateProp,

  prop(
    'portal',
    'boolean',
    'true',
    "Renders the panel in the trigger's own subtree instead of a portal to <body>, so it clips and scrolls with its container. For specimens and clipped contexts; a live page keeps the default",
  ),
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
  prop(
    'highlighted',
    'boolean',
    'undefined',
    'Forces the row highlight. Spread conditionally — writing undefined would clobber the value Radix computes and kill live highlighting',
  ),
];

export const dropdownMenuSeparatorProps = [classNameProp];
