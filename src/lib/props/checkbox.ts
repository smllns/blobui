import {
  CHOICE_SIZES,
  checkedProp,
  classNameProp,
  disabledProp,
  errorProp,
  fieldPropsOf,
  forceStateProp,
  fullWidthProp,
  iconProp,
  onChangeProp,
  sizeProp,
} from './commonProps';
import { describe, prop } from './helpers';

export const checkboxProps = [
  checkedProp('Controlled checked state of the checkbox'),

  prop(
    'defaultChecked',
    'boolean',
    'false',
    'Checked state before any interaction',
  ),

  onChangeProp('Change handler for checkbox state'),

  sizeProp(CHOICE_SIZES, 'md', 'Controls checkbox size'),

  prop('indeterminate', 'boolean', 'false', 'Neither checked nor unchecked'),

  errorProp,
  fullWidthProp,
  ...fieldPropsOf('ReactNode'),
  describe(iconProp, 'Icon displayed before the label'),
  disabledProp,
  forceStateProp,
  classNameProp,
];
