export const cardProps = [
  {
    name: 'variant',
    type: "'default' | 'filled' | 'outline' | 'ghost' | 'elevated'",
    default: 'default',
    description: 'Visual style of the card',
  },
  {
    name: 'padding',
    type: "'none' | 'sm' | 'md' | 'lg'",
    default: 'md',
    description: 'Controls internal spacing of the card content',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside the card',
  },
  {
    name: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes for customization',
  },
];
