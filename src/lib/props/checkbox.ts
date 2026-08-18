import {
  childrenProp,
  classNameProp,
  disabledProp,
  errorProp,
  fieldProps,
  forceStateProp,
  fullWidthProp,
  iconProp,
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

  prop('size', "'md' | 'lg'", 'md', 'Controls checkbox size'),

  prop('indeterminate', 'boolean', 'false', 'Neither checked nor unchecked'),

  errorProp,
  fullWidthProp,
  ...fieldProps,
  iconProp,
  disabledProp,
  forceStateProp,
  classNameProp,
  childrenProp,
];
