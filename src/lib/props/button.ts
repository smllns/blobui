import { BUTTON_VARIANTS } from '../options';
import {
  EXTENDED_SIZES,
  childrenProp,
  classNameProp,
  disabledProp,
  forceStateProp,
  fullWidthProp,
  iconOnlyProp,
  leftIconProp,
  loadingProp,
  rightIconProp,
  sizeProp,
  variantProp,
} from './commonProps';

export const buttonProps = [
  variantProp(
    BUTTON_VARIANTS,
    'primary',
    'Visual style of the button. underline and unstyled drop the button paint entirely, for a trigger that has to read as text — HoverCardTrigger is built on them',
  ),

  sizeProp(EXTENDED_SIZES, 'md', 'Controls button size'),

  loadingProp(
    'Shows a spinner in place of the leading icon, dims the whole control and disables interaction',
  ),

  iconOnlyProp('Square icon-only button. Needs an aria-label'),

  forceStateProp,
  fullWidthProp,
  leftIconProp,
  rightIconProp,
  disabledProp,
  classNameProp,
  childrenProp,
];
