export const inputProps = [
  {
    name: 'variant',
    type: "'default' | 'filled' | 'outline' | 'ghost'",
    default: 'default',
    description: 'Visual style of the input',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: 'md',
    description: 'Controls input size',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    default: 'false',
    description: 'Makes input take full width',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    description: 'Shows error state styling (red border, error color)',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables input interaction',
  },

  // icons
  {
    name: 'leftIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Icon displayed before input content',
  },
  {
    name: 'rightIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Icon displayed after input content',
  },

  // value control
  {
    name: 'placeholder',
    type: 'string',
    default: '-',
    description: 'Placeholder text shown when input is empty',
  },
  {
    name: 'value',
    type: 'string',
    default: '-',
    description: 'Controlled input value',
  },
  {
    name: 'onChange',
    type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
    default: '-',
    description: 'Change handler for input value',
  },

  // 🆕 field layer
  {
    name: 'label',
    type: 'string',
    default: '-',
    description: 'Label displayed above the input',
  },
  {
    name: 'description',
    type: 'string',
    default: '-',
    description:
      'Helper text shown below label (hidden when errorMessage is present)',
  },
  {
    name: 'errorMessage',
    type: 'string',
    default: '-',
    description:
      'Error message shown below input (has priority over description)',
  },
];
