export const avatarProps = [
  {
    name: 'variant',
    type: "'default' | 'outline' | 'soft' | 'ghost'",
    default: 'default',
    description: 'Visual style of the avatar',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    default: 'md',
    description: 'Controls avatar size',
  },
  {
    name: 'src',
    type: 'string',
    default: '-',
    description: 'Image source URL displayed inside the avatar',
  },
  {
    name: 'alt',
    type: 'string',
    default: '-',
    description: 'Alternative text for the avatar image',
  },
  {
    name: 'fallback',
    type: 'ReactNode',
    default: '-',
    description:
      'Content displayed when no image is provided or the image fails to load',
  },
  {
    name: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes for customization',
  },
];
