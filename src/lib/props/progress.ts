import { classNameProp } from './commonProps';
import { prop } from './helpers';

export const progressProps = [
  prop(
    'value',
    'number | null',
    '-',
    'How far through the task. Omitted or null means indeterminate, and aria-valuenow is dropped rather than zeroed',
  ),

  prop('max', 'number', '100', 'The value that counts as finished'),

  prop(
    'indeterminate',
    'boolean',
    'false',
    'Work is happening, length unknown. A sweep runs across the track, and a dimmed full track replaces it under reduced motion',
  ),

  prop('size', "'sm' | 'md' | 'lg'", 'md', 'Height of the bar: 4, 8 or 12px'),

  prop(
    'tone',
    "'accent' | 'success' | 'warning' | 'danger'",
    'accent',
    'Track and fill move together, one family. Finishing is not a colour change by default',
  ),

  prop(
    'disabled',
    'boolean',
    'false',
    'The operation is paused. Both layers drop to the neutral pair and the sweep stops',
  ),

  prop(
    'getValueLabel',
    '(value: number, max: number) => string',
    '-',
    'Builds aria-valuetext when the number is not what the user reads ("3 of 12 files")',
  ),

  classNameProp,
];
