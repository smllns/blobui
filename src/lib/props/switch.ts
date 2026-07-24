import {
  childrenProp,
  classNameProp,
  disabledProp,
  errorProp,
  fieldProps,
} from './commonProps';
import { prop } from './helpers';

export const switchProps = [
  prop('checked', 'boolean', '-', 'Controlled checked state of the switch'),

  prop(
    'onChange',
    '(e: React.ChangeEvent<HTMLInputElement>) => void',
    '-',
    'Callback fired when switch state changes',
  ),
  prop('size', "'sm' | 'md' | 'lg'", 'md', 'Controls switch size'),

  errorProp,
  ...fieldProps,
  disabledProp,
  classNameProp,
  childrenProp,
];
