import { childrenProp, disabledProp, errorProp } from './commonProps';
import { prop } from './helpers';

export const selectProps = [
  prop(
    'variant',
    "'default' | 'filled' | 'outline' | 'ghost'",
    'default',
    'Visual style of the select',
  ),

  prop(
    'size',
    "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    'md',
    'Controls select size',
  ),

  prop(
    'width',
    "'auto' | 'sm' | 'md' | 'lg' | 'full'",
    'md',
    'Controls select width',
  ),

  errorProp,

  prop(
    'placeholder',
    'string',
    '-',
    'Placeholder displayed when no value is selected',
  ),

  prop('value', 'string', '-', 'Controlled selected value'),

  prop('defaultValue', 'string', '-', 'Initial uncontrolled selected value'),

  prop(
    'onValueChange',
    '(value: string) => void',
    '-',
    'Callback fired when selected value changes',
  ),

  disabledProp,
  childrenProp,
];

export const selectItemProps = [
  prop('value', 'string', '-', 'Unique value of the item'),

  disabledProp,
  childrenProp,
];
