import {
  childrenProp,
  classNameProp,
  leftIconProp,
  rightIconProp,
} from './commonProps';
import { prop } from './helpers';

export const badgeProps = [
  prop(
    'variant',
    "'default' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'destructive'",
    'default',
    'Visual style of the badge',
  ),

  prop('size', "'sm' | 'md' | 'lg'", 'md', 'Controls badge size'),

  leftIconProp,
  rightIconProp,
  classNameProp,
  childrenProp,
];
