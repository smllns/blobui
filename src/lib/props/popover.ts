import {
  BASIC_SIZES,
  COMMON_VARIANTS,
  alignProp,
  childrenProp,
  classNameProp,
  onOpenChangeProp,
  openProp,
  portalProp,
  sideProp,
  sizeProp,
  variantProp,
} from './commonProps';
import { prop } from './helpers';

export const popoverProps = [
  variantProp(
    COMMON_VARIANTS,
    'default',
    'Visual style of the popover content',
  ),

  sizeProp(BASIC_SIZES, 'md', 'Controls popover content size'),

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

  openProp(
    'Controlled open state, on the Popover root. Left out, the popover owns its state and keeps the enter and exit animations',
  ),

  onOpenChangeProp('Fires when the popover opens or closes'),

  classNameProp,
  childrenProp,
  portalProp,
];
