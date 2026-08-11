import {
  childrenProp,
  classNameProp,
  leftIconProp,
  rightIconProp,
} from './commonProps';
import { prop } from './helpers';

export const badgeProps = [
  prop(
    'tone',
    "'neutral' | 'accent' | 'success' | 'warning' | 'danger'",
    'neutral',
    'Meaning of the badge. Composes with emphasis',
  ),

  prop(
    'emphasis',
    "'soft' | 'solid' | 'outline'",
    'soft',
    'How loud the badge is',
  ),

  prop(
    'shape',
    "'pill' | 'square'",
    'pill',
    'Corner treatment',
  ),

  prop('size', "'sm' | 'md' | 'lg' | 'xl'", 'md', 'Controls badge size'),

  prop(
    'dot',
    'boolean',
    'false',
    'Shows a status dot in the badge own ink',
  ),

  leftIconProp,
  rightIconProp,
  classNameProp,
  childrenProp,
];
