export const buttonProps = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'",
    default: 'primary',
    description: 'Visual style of the button',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: 'md',
    description: 'Controls button size',
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Shows loading state and disables interaction',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    default: 'false',
    description: 'Makes button take full width',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables button interaction',
  },
  {
    name: 'leftIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Icon displayed before content',
  },
  {
    name: 'rightIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Icon displayed after content',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Button content',
  },
];
