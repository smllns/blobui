import {
  childrenProp,
  classNameProp,
  disabledProp,
  errorProp,
  fieldProps,
  fullWidthProp,
  leftIconProp,
} from './commonProps';
import { prop } from './helpers';

export const checkboxProps = [
  prop('checked', 'boolean', 'false', 'Controls checked state of the checkbox'),

  prop(
    'onChange',
    '(e: React.ChangeEvent<HTMLInputElement>) => void',
    '-',
    'Change handler for checkbox state',
  ),

  prop(
    'size',
    "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    'md',
    'Controls checkbox and label size',
  ),

  errorProp,
  fullWidthProp,
  ...fieldProps,
  leftIconProp,
  disabledProp,
  classNameProp,
  childrenProp,
];
