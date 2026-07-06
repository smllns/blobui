export const checkboxProps = [
  {
    name: 'checked',
    type: 'boolean',
    default: 'false',
    description: 'Controls checked state of the checkbox',
  },
  {
    name: 'onChange',
    type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
    default: '-',
    description: 'Change handler for checkbox state',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables checkbox interaction',
  },

  // visual state
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    description: 'Shows error state styling (red border and fill)',
  },

  // size system
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: 'md',
    description: 'Controls checkbox and label size',
  },

  // layout
  {
    name: 'fullWidth',
    type: 'boolean',
    default: 'false',
    description: 'Makes checkbox take full width container',
  },

  // label layer
  {
    name: 'label',
    type: 'string',
    default: '-',
    description: 'Label displayed next to checkbox',
  },
  {
    name: 'description',
    type: 'string',
    default: '-',
    description:
      'Helper text shown above checkbox (hidden when errorMessage is present)',
  },
  {
    name: 'errorMessage',
    type: 'string',
    default: '-',
    description:
      'Error message shown above checkbox (has priority over description)',
  },

  {
    name: 'leftIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Icon displayed next to label',
  },

  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Alternative content instead of label',
  },
];
