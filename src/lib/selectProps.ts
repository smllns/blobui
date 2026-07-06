export const selectProps = [
  {
    name: 'variant',
    type: "'default' | 'filled' | 'outline' | 'ghost'",
    default: 'default',
    description: 'Visual style of the select',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: 'md',
    description: 'Controls select size',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    default: 'false',
    description: 'Makes select take full width',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    description: 'Shows error state styling',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables select interaction',
  },
  {
    name: 'leftIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Icon displayed before select content',
  },
  {
    name: 'rightIcon',
    type: 'ReactNode',
    default: 'chevron',
    description: 'Icon displayed after select content',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Select options',
  },
  {
    name: 'value',
    type: 'string',
    default: '-',
    description: 'Controlled select value',
  },
  {
    name: 'defaultValue',
    type: 'string',
    default: '-',
    description: 'Initial uncontrolled value',
  },
  {
    name: 'onChange',
    type: '(e: React.ChangeEvent<HTMLSelectElement>) => void',
    default: '-',
    description: 'Change handler for select value',
  },
];
