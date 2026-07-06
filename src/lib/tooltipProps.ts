export const tooltipProps = [
  {
    name: 'content',
    type: 'ReactNode',
    default: '-',
    description: 'Content displayed inside tooltip',
  },
  {
    name: 'variant',
    type: "'default' | 'light' | 'success' | 'destructive'",
    default: 'default',
    description: 'Visual style of the tooltip',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: 'md',
    description: 'Controls tooltip padding and text size',
  },
  {
    name: 'side',
    type: "'top' | 'right' | 'bottom' | 'left'",
    default: 'top',
    description: 'Position of tooltip relative to trigger',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end'",
    default: 'center',
    description: 'Alignment of tooltip relative to trigger',
  },
  {
    name: 'startIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Icon displayed before tooltip content',
  },
  {
    name: 'endIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Icon displayed after tooltip content',
  },
  {
    name: 'delayDuration',
    type: 'number',
    default: '200',
    description: 'Delay before tooltip appears (ms)',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Element that triggers tooltip on hover/focus',
  },
];
