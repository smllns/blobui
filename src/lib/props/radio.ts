import {
  CHOICE_SIZES,
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

export const radioProps = [
  checkedProp('Controlled checked state of the radio button'),

  prop(
    'defaultChecked',
    'boolean',
    'false',
    'Checked state before any interaction',
  ),

  onChangeProp('Callback fired when radio selection changes'),

  prop(
    'name',
    'string',
    '-',
    'Groups the radios that answer one question. Only one radio of a name is checked at a time',
  ),

  prop(
    'value',
    'string',
    '-',
    'Value the form submits when this radio is the checked one',
  ),

  sizeProp(CHOICE_SIZES, 'md', 'Controls radio button size'),

  errorProp,
  ...fieldPropsOf('ReactNode'),
  disabledProp,
  forceStateProp,
  classNameProp,
];
