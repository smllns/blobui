import {
  checkedProp,
  classNameProp,
  disabledProp,
  errorProp,
  fieldPropsOf,
  forceStateProp,
  onChangeProp,
  sizeProp,
} from './commonProps';
import { prop } from './helpers';

export const switchProps = [
  checkedProp('Controlled checked state of the switch'),

  prop(
    'defaultChecked',
    'boolean',
    'false',
    'Checked state before any interaction',
  ),

  onChangeProp(
    'Callback fired with the next checked state',
    '(checked: boolean) => void',
  ),

  sizeProp(['sm', 'md', 'lg', 'xl'], 'md', 'Controls switch size'),
  forceStateProp,
  errorProp,
  ...fieldPropsOf('ReactNode'),
  disabledProp,
  classNameProp,
];
