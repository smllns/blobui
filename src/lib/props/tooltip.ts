import {
  alignProp,
  childrenProp,
  classNameProp,
  leftIconProp,
  rightIconProp,
  sideProp,
} from './commonProps';
import { prop } from './helpers';

export const tooltipProps = [
  prop('content', 'ReactNode', '-', 'Content displayed inside tooltip'),

  prop(
    'variant',
    "'default' | 'light' | 'success' | 'destructive'",
    'default',
    'Visual style of the tooltip',
  ),

  prop(
    'size',
    "'sm' | 'md' | 'lg'",
    'md',
    'Controls tooltip padding and text size',
  ),

  sideProp,
  alignProp,
  leftIconProp,
  rightIconProp,

  prop('delayDuration', 'number', '200', 'Delay before tooltip appears (ms)'),

  classNameProp,
  childrenProp,
];
