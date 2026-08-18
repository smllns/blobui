import {
  childrenProp,
  classNameProp,
  disabledProp,
  errorProp,
  fieldProps,
  forceStateProp,
} from './commonProps';
import { prop } from './helpers';

export const radioProps = [
  prop(
    'checked',
    'boolean',
    '-',
    'Controlled checked state of the radio button',
  ),

  prop(
    'onChange',
    '(e: React.ChangeEvent<HTMLInputElement>) => void',
    '-',
    'Callback fired when radio selection changes',
  ),

  prop('size', "'md' | 'lg'", 'md', 'Controls radio button size'),

  errorProp,
  ...fieldProps,
  disabledProp,
  forceStateProp,
  classNameProp,
  childrenProp,
];
