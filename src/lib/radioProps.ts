export const radioProps = [
  {
    name: 'checked',
    type: 'boolean',
    default: '-',
    description: 'Controlled checked state of the radio button',
  },

  {
    name: 'onChange',
    type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
    default: '-',
    description: 'Callback fired when radio selection changes',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables radio button interaction',
  },

  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    description: 'Applies error styling to radio button',
  },

  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: 'md',
    description: 'Controls radio button size',
  },

  {
    name: 'label',
    type: 'string',
    default: '-',
    description: 'Label displayed next to radio button',
  },
  {
    name: 'description',
    type: 'string',
    default: '-',
    description: 'Helper text displayed below radio button',
  },
  {
    name: 'errorMessage',
    type: 'string',
    default: '-',
    description:
      'Error message displayed below radio button and overrides description',
  },

  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Custom content replacing label (overrides label prop)',
  },
];
