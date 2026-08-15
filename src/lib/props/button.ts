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
    "'primary' | 'secondary' | 'soft' | 'outline' | 'ghost' | 'destructive' | 'link'",
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
    'Shows a spinner in place of the leading icon and disables interaction',
  ),

  prop(
    'iconOnly',
    'boolean',
    'false',
    'Square icon-only button. Needs an aria-label',
  ),
  prop(
    'forceState',
    "'hover' | 'active' | 'focus'",
    'undefined',
    'Forces a specific visual state for the button',
  ),

  fullWidthProp,
  leftIconProp,
  rightIconProp,
  disabledProp,
  classNameProp,
  childrenProp,
];
