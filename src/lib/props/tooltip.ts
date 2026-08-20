import {
  BASIC_SIZES,
  alignProp,
  childrenProp,
  classNameProp,
  leftIconProp,
  openProp,
  portalProp,
  rightIconProp,
  sideProp,
  sizeProp,
  variantProp,
} from './commonProps';
import { prop } from './helpers';

export const tooltipProps = [
  prop('content', 'ReactNode', '-', 'Content displayed inside tooltip'),

  variantProp(
    ['default', 'light', 'success', 'destructive'],
    'default',
    'Visual style of the tooltip',
  ),

  sizeProp(BASIC_SIZES, 'md', 'Controls tooltip padding and text size'),

  sideProp,
  alignProp,
  { ...leftIconProp, name: 'startIcon' },
  { ...rightIconProp, name: 'endIcon' },

  prop('delayDuration', 'number', '200', 'Delay before tooltip appears (ms)'),

  openProp(
    'Controls the tooltip instead of hover/focus. Lets a specimen stand open without the reader having to point at it and wait',
    'undefined',
  ),

  prop(
    'avoidCollisions',
    'boolean',
    'true',
    'Flips the bubble to the opposite side when the preferred one would run past the viewport. false pins it to side, which is what a specimen of a given side needs',
  ),

  classNameProp,
  childrenProp,
  portalProp,
];
