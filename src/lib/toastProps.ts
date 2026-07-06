export const toastProps = [
  {
    name: 'variant',
    type: "'default' | 'success' | 'warning' | 'destructive' | 'info'",
    default: 'default',
    description: 'Visual style of the toast',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: 'md',
    description: 'Controls toast size',
  },
  {
    name: 'title',
    type: 'string',
    default: '-',
    description: 'Main title text of the toast',
  },
  {
    name: 'description',
    type: 'string',
    default: '-',
    description: 'Optional secondary text shown below title',
  },
  {
    name: 'icon',
    type: 'ReactNode',
    default: '-',
    description: 'Icon displayed on the left side of toast',
  },
  {
    name: 'action',
    type: 'ReactNode',
    default: '-',
    description: 'Optional action element (button or custom UI)',
  },
  {
    name: 'onClose',
    type: '() => void',
    default: '-',
    description: 'Callback triggered when close button is clicked',
  },
  {
    name: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes for customization',
  },
];
