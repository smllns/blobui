import {
  classNameProp,
  disabledProp,
  errorProp,
  fieldProps,
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
  classNameProp,
];
