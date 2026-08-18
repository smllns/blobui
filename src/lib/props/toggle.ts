import {
  childrenProp,
  classNameProp,
  disabledProp,
  forceStateProp,
  leftIconProp,
  rightIconProp,
} from './commonProps';
import { prop } from './helpers';

export const toggleProps = [
  prop(
    'variant',
    "'default' | 'outline'",
    'default',
    'Shape of the off state: transparent, or the bordered box. Not a button variant',
  ),

  prop('size', "'sm' | 'md' | 'lg' | 'xl'", 'md', 'Controls toggle size'),

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

  prop(
    'loading',
    'boolean',
    'false',
    'Shows a spinner in place of the leading icon and disables interaction',
  ),

  prop(
    'iconOnly',
    'boolean',
    'false',
    'Square icon-only toggle. Needs an aria-label',
  ),

  forceStateProp,
  leftIconProp,
  rightIconProp,
  disabledProp,
  classNameProp,
  childrenProp,
];
