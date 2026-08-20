import {
  childrenProp,
  classNameProp,
  disabledProp,
  forceStateProp,
  iconOnlyProp,
  leftIconProp,
  loadingProp,
  rightIconProp,
  sizeProp,
  variantProp,
} from './commonProps';
import { prop } from './helpers';

export const toggleProps = [
  variantProp(
    ['default', 'outline'],
    'default',
    'Shape of the off state: transparent, or the bordered box. Not a button variant',
  ),

  sizeProp(['sm', 'md', 'lg', 'xl'], 'md', 'Controls toggle size'),

  prop('pressed', 'boolean', '-', 'Controlled on state of the toggle'),

  prop(
    'defaultPressed',
    'boolean',
    'false',
    'On state of the toggle before it is pressed',
  ),

  prop(
    'onPressedChange',
    '(pressed: boolean) => void',
    '-',
    'Callback fired with the next on state',
  ),

  loadingProp(),

  iconOnlyProp('Square icon-only toggle. Needs an aria-label'),

  forceStateProp,
  leftIconProp,
  rightIconProp,
  disabledProp,
  classNameProp,
  childrenProp,
];
