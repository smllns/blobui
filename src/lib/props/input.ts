import {
  classNameProp,
  disabledProp,
  errorProp,
  fieldProps,
  forceStateProp,
  fullWidthProp,
  leftIconProp,
  rightIconProp,
} from './commonProps';
import { prop } from './helpers';

export const inputProps = [
  prop(
    'variant',
    "'default' | 'filled' | 'outline' | 'ghost'",
    'default',
    'Visual style of the input',
  ),

  prop('size', "'xs' | 'sm' | 'md' | 'lg' | 'xl'", 'md', 'Controls input size'),

  prop(
    'labelPlacement',
    "'above' | 'infield'",
    'above',
    'Where the label sits. infield lifts it on focus. Pins the field to xl',
  ),

  prop(
    'readOnly',
    'boolean',
    'false',
    'Keeps the value readable and focusable, without the edit affordance',
  ),

  fullWidthProp,
  errorProp,
  leftIconProp,
  rightIconProp,

  prop(
    'placeholder',
    'string',
    '-',
    'Placeholder text shown when input is empty',
  ),

  prop('value', 'string', '-', 'Controlled input value'),

  prop(
    'onChange',
    '(e: React.ChangeEvent<HTMLInputElement>) => void',
    '-',
    'Change handler for input value',
  ),

  ...fieldProps,
  disabledProp,
  forceStateProp,
  classNameProp,
];
