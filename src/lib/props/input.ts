import {
  COMMON_VARIANTS,
  EXTENDED_SIZES,
  classNameProp,
  disabledProp,
  errorProp,
  fieldProps,
  forceStateProp,
  fullWidthProp,
  idProp,
  leftIconProp,
  onChangeProp,
  placeholderProp,
  readOnlyProp,
  requiredProp,
  rightIconProp,
  sizeProp,
  variantProp,
} from './commonProps';
import { prop } from './helpers';

export const inputProps = [
  variantProp(COMMON_VARIANTS, 'default', 'Visual style of the input'),

  sizeProp(EXTENDED_SIZES, 'md', 'Controls input size'),

  prop(
    'labelPlacement',
    "'above' | 'infield'",
    'above',
    'Where the label sits. infield lifts it on focus. Pins the field to xl',
  ),

  readOnlyProp(),

  fullWidthProp,
  errorProp,
  leftIconProp,
  rightIconProp,

  placeholderProp('Placeholder text shown when input is empty'),

  prop('value', 'string', '-', 'Controlled input value'),

  onChangeProp('Change handler for input value'),

  ...fieldProps,

  requiredProp(
    'Marks the label with an asterisk and sets required on the input',
  ),

  idProp('Id of the field, and the anchor the label and the helper text point at. Falls back to name, then to a generated one'),

  disabledProp,
  forceStateProp,
  classNameProp,
];
