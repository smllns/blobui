import { classNameProp, leftIconProp } from './commonProps';
import { prop } from './helpers';

export const toastProps = [
  prop(
    'variant',
    "'default' | 'success' | 'warning' | 'destructive' | 'info'",
    'default',
    'Visual style of the toast',
  ),

  prop('size', "'sm' | 'md' | 'lg'", 'md', 'Controls toast size'),

  prop('title', 'string', '-', 'Main title text of the toast'),

  prop(
    'description',
    'string',
    '-',
    'Optional secondary text shown below title',
  ),

  leftIconProp,

  prop(
    'action',
    'ReactNode',
    '-',
    'Optional action element (button or custom UI)',
  ),

  prop(
    'onClose',
    '() => void',
    '-',
    'Callback triggered when close button is clicked',
  ),

  classNameProp,
];
