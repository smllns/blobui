import {
  COMMON_VARIANTS,
  classNameProp,
  controlledValueProps,
  disabledProp,
  errorProp,
  fieldProps,
  forceStateProp,
  idProp,
  loadingProp,
  readOnlyProp,
  requiredProp,
  sizeProp,
  variantProp,
} from './commonProps';
import { prop } from './helpers';

export const inputOtpProps = [
  variantProp(
    COMMON_VARIANTS,
    'default',
    'Visual style of every slot — each box is the field shell',
  ),

  sizeProp(
    ['sm', 'md', 'lg', 'xl'],
    'md',
    'Slot size. The box is square at the field ramp heights: 36 / 40 / 44 / 50',
  ),

  prop(
    'charset',
    "'numeric' | 'alnum'",
    'numeric',
    'numeric is monospaced and tabular and shows the phone keypad; alnum accepts letters',
  ),

  prop('length', 'number', '6', 'How many characters the code has'),

  prop(
    'groupSize',
    'number',
    '3',
    'Slots per group. A drawn, aria-hidden separator sits on every boundary, and only when the group divides the length evenly; 0 removes it',
  ),

  ...controlledValueProps({
    type: 'string',
    value: 'Controlled code. Characters outside the charset are dropped',
    defaultValue: 'Uncontrolled starting code',
    onValueChange: 'Fires with the cleaned code on every edit',
  }),

  prop(
    'onComplete',
    '(value: string) => void',
    '-',
    'Fires once the code reaches length — paste and autofill included',
  ),

  readOnlyProp(
    'Keeps the code readable and focusable, without the edit affordance',
  ),

  errorProp,

  ...fieldProps,

  requiredProp(
    'Marks the label with an asterisk and sets required on the hidden input that carries the code',
  ),

  idProp('Id of the field, and the anchor the label and the helper text point at. Falls back to name, then to a generated one'),

  disabledProp,
  forceStateProp,

  loadingProp(
    'The code is being verified. The row wears the disabled paint and a wave runs along the boxes; semantics stay read-only so focus never moves, and the digits keep readable ink',
  ),

  prop(
    'loadingLabel',
    'string',
    'Verifying code',
    'Sentence announced while loading. aria-busy suppresses announcements rather than making them, so this text is the only thing a screen reader gets',
  ),

  classNameProp,
];
