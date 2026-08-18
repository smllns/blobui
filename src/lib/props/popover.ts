import {
  alignProp,
  childrenProp,
  classNameProp,
  sideProp,
} from './commonProps';
import { prop } from './helpers';

export const popoverProps = [
  prop(
    'variant',
    "'default' | 'filled' | 'outline' | 'ghost'",
    'default',
    'Visual style of the popover content',
  ),

  prop('size', "'sm' | 'md' | 'lg'", 'md', 'Controls popover content size'),

  prop(
    'rounded',
    "'sm' | 'md' | 'lg'",
    'md',
    'Controls border radius of the popover content',
  ),

  sideProp,
  alignProp,

  prop(
    'sideOffset',
    'number',
    '8',
    'Distance between the popover content and the trigger',
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
