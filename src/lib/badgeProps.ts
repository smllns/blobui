export const badgeProps = [
  {
    name: 'variant',
    type: "'default' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'destructive'",
    default: 'default',
    description: 'Visual style of the badge',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: 'md',
    description: 'Controls badge size',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: '-',
    description: 'Content inside badge',
  },
  {
    name: 'leftIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Icon displayed before badge content',
  },
  {
    name: 'rightIcon',
    type: 'ReactNode',
    default: '-',
    description: 'Icon displayed after badge content',
  },
  {
    name: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes for customization',
  },
];
