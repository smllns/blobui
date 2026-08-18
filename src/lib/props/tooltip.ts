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

  prop(
    'open',
    'boolean',
    'undefined',
    'Controls the tooltip instead of hover/focus. Lets a specimen stand open without the reader having to point at it and wait',
  ),

  classNameProp,
  childrenProp,
  prop(
    'portal',
    'boolean',
    'true',
    "Renders the panel in the trigger's own subtree instead of a portal to <body>, so it clips and scrolls with its container. For specimens and clipped contexts; a live page keeps the default",
  ),
];
