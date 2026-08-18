import {
  childrenProp,
  classNameProp,
  disabledProp,
  forceStateProp,
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
    'Shows a spinner in place of the leading icon, dims the whole control and disables interaction',
  ),

  prop(
    'iconOnly',
    'boolean',
    'false',
    'Square icon-only button. Needs an aria-label',
  ),
  forceStateProp,
  fullWidthProp,
  leftIconProp,
  rightIconProp,
  disabledProp,
  classNameProp,
  childrenProp,
];
