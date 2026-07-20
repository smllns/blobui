export const dialogProps = [
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
    default: 'md',
    description: 'Controls dialog width',
  },
  {
    name: 'variant',
    type: "'default' | 'filled' | 'outline' | 'ghost'",
    default: 'default',
    description: 'Visual style of the dialog content',
  },
  {
    name: 'padding',
    type: "'none' | 'sm' | 'md' | 'lg'",
    default: 'md',
    description: 'Controls inner spacing of the dialog content',
  },
  {
    name: 'overlay',
    type: "'dark' | 'light'",
    default: 'dark',
    description: 'Controls dialog overlay appearance',
  },
  {
    name: 'showCloseButton',
    type: 'boolean',
    default: 'true',
    description: 'Shows close button in the top-right corner',
  },

  // Radix props
  {
    name: 'open',
    type: 'boolean',
    default: '-',
    description: 'Controls dialog open state',
  },
  {
    name: 'onOpenChange',
    type: '(open: boolean) => void',
    default: '-',
    description: 'Callback fired when dialog open state changes',
  },

  // content
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content displayed inside the dialog',
  },
];
