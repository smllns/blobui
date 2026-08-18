import {
  classNameProp,
  disabledProp,
  errorProp,
  fieldProps,
  forceStateProp,
} from './commonProps';
import { prop } from './helpers';

export const inputOtpProps = [
  prop(
    'variant',
    "'default' | 'filled' | 'outline' | 'ghost'",
    'default',
    'Visual style of every slot — each box is the field shell',
  ),

  prop(
    'size',
    "'sm' | 'md' | 'lg' | 'xl'",
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

  prop(
    'value',
    'string',
    '-',
    'Controlled code. Characters outside the charset are dropped',
  ),

  prop('defaultValue', 'string', '-', 'Uncontrolled starting code'),

  prop(
    'onValueChange',
    '(value: string) => void',
    '-',
    'Fires with the cleaned code on every edit',
  ),

  prop(
    'onComplete',
    '(value: string) => void',
    '-',
    'Fires once the code reaches length — paste and autofill included',
  ),

  prop(
    'readOnly',
    'boolean',
    'false',
    'Keeps the code readable and focusable, without the edit affordance',
  ),

  errorProp,

  ...fieldProps,
  disabledProp,
  forceStateProp,

  prop(
    'loading',
    'boolean',
    'false',
    'The code is being verified. The row wears the disabled paint and a wave runs along the boxes; semantics stay read-only so focus never moves, and the digits keep readable ink',
  ),

  prop(
    'loadingLabel',
    'string',
    "'Checking your code'",
    'Sentence announced while loading. aria-busy suppresses announcements rather than making them, so this text is the only thing a screen reader gets',
  ),

  classNameProp,
];
