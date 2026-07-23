export const popoverProps = [
  {
    name: 'variant',
    type: "'default' | 'filled' | 'outline' | 'ghost'",
    default: 'default',
    description: 'Visual style of the popover content',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: 'md',
    description: 'Controls popover content size',
  },
  {
    name: 'rounded',
    type: "'sm' | 'md' | 'lg'",
    default: 'md',
    description: 'Controls border radius of the popover content',
  },
  {
    name: 'side',
    type: "'top' | 'right' | 'bottom' | 'left'",
    default: 'bottom',
    description:
      'Side where the popover content is positioned relative to the trigger',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end'",
    default: 'center',
    description: 'Alignment of the popover content relative to the trigger',
  },
  {
    name: 'sideOffset',
    type: 'number',
    default: '8',
    description: 'Distance between the popover content and the trigger',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content displayed inside the popover',
  },
  {
    name: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes for customization',
  },
];
