import { classNameProp, leftIconProp } from './commonProps';
import { prop } from './helpers';

export const toastProps = [
  prop(
    'tone',
    "'neutral' | 'success' | 'warning' | 'danger' | 'info'",
    'neutral',
    'Colours the icon. The panel stays neutral',
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
  prop(
    'duration',
    'number',
    '2000',
    'Time in milliseconds before the toast is automatically dismissed.',
  ),

  classNameProp,
];
