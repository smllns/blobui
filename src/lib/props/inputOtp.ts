import {
  classNameProp,
  disabledProp,
  errorProp,
  fieldProps,
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
  classNameProp,
];
