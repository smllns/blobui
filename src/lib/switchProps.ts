export const switchProps = [
  {
    name: 'checked',
    type: 'boolean',
    default: '-',
    description: 'Controlled checked state of the switch',
  },

  {
    name: 'onChange',
    type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
    default: '-',
    description: 'Callback fired when switch state changes',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables switch interaction',
  },

  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    description: 'Applies error styling to switch',
  },

  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: 'md',
    description: 'Controls switch size',
  },

  {
    name: 'label',
    type: 'string',
    default: '-',
    description: 'Label displayed next to switch',
  },
  {
    name: 'description',
    type: 'string',
    default: '-',
    description: 'Helper text displayed below switch',
  },
  {
    name: 'errorMessage',
    type: 'string',
    default: '-',
    description:
      'Error message displayed below switch and overrides description',
  },

  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Custom content replacing label (overrides label prop)',
  },
];
