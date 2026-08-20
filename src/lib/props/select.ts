import {
  COMMON_VARIANTS,
  EXTENDED_SIZES,
  childrenProp,
  classNameProp,
  controlledValueProps,
  disabledProp,
  errorProp,
  fieldPropsOf,
  forceStateProp,
  idProp,
  onOpenChangeProp,
  openProp,
  placeholderProp,
  requiredProp,
  sizeProp,
  variantProp,
} from './commonProps';
import { prop } from './helpers';

export const selectProps = [
  variantProp(COMMON_VARIANTS, 'default', 'Visual style of the select'),

  sizeProp(EXTENDED_SIZES, 'md', 'Controls select size'),

  prop(
    'width',
    "'auto' | 'sm' | 'md' | 'lg' | 'full'",
    'md',
    'Controls select width',
  ),

  prop(
    'labelPlacement',
    "'above' | 'infield'",
    'above',
    'Where the label sits. infield lifts it on focus. Pins the trigger to xl',
  ),

  ...controlledValueProps({
    type: 'string',
    value:
      'Selected value. Pass it to control the component; the host then owns the value',
    defaultValue: 'Selected value on mount, before any interaction',
    onValueChange: 'Fires when the selection moves to another item',
  }),

  placeholderProp('Placeholder displayed when no value is selected'),

  ...fieldPropsOf('ReactNode'),

  requiredProp(
    'Marks the label with an asterisk and sets aria-required on the trigger',
  ),

  idProp(
    'Id of the trigger, and the anchor the label and the helper text point at',
  ),

  prop(
    'aria-label',
    'string',
    '-',
    'Names the trigger when there is no visible label',
  ),

  prop(
    'aria-labelledby',
    'string',
    '-',
    'Names the trigger from another element. Overrides the wiring to label',
  ),

  prop(
    'aria-describedby',
    'string',
    '-',
    'Points the trigger at other help text. Overrides the wiring to description and errorMessage',
  ),

  openProp('Controls the panel, so the host owns when it stands open', 'undefined'),

  onOpenChangeProp('Called when the panel opens or closes'),

  errorProp,
  disabledProp,
  forceStateProp,
  classNameProp,
  childrenProp,
];

export const selectItemProps = [
  prop('value', 'string', '-', 'Unique value of the item'),

  disabledProp,
  classNameProp,
  childrenProp,
];
