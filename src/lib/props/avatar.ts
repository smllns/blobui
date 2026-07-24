import { classNameProp } from './commonProps';
import { prop } from './helpers';

export const avatarProps = [
  prop(
    'variant',
    "'default' | 'outline' | 'soft' | 'ghost'",
    'default',
    'Visual style of the avatar',
  ),

  prop(
    'size',
    "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    'md',
    'Controls avatar size',
  ),

  prop('src', 'string', '-', 'Image source URL displayed inside the avatar'),

  prop('alt', 'string', '-', 'Alternative text for the avatar image'),

  prop(
    'fallback',
    'ReactNode',
    '-',
    'Content displayed when no image is provided or the image fails to load',
  ),

  classNameProp,
];
