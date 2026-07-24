import {
  childrenProp,
  classNameProp,
  disabledProp,
  fullWidthProp,
  leftIconProp,
  rightIconProp,
} from './commonProps';
import { prop } from './helpers';

export const buttonProps = [
  prop(
    'variant',
    "'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'",
    'primary',
    'Visual style of the button',
  ),

  prop(
    'size',
    "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    'md',
    'Controls button size',
  ),

  prop(
    'loading',
    'boolean',
    'false',
    'Shows loading state and disables interaction',
  ),

  fullWidthProp,
  leftIconProp,
  rightIconProp,
  disabledProp,
  classNameProp,
  childrenProp,
];
