import { classNameProp } from './commonProps';
import { prop } from './helpers';

export const avatarProps = [
  prop(
    'shape',
    "'circle' | 'square'",
    'circle',
    'Shape of the avatar',
  ),

  prop(
    'size',
    "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
    'md',
    'Controls avatar size',
  ),

  prop(
    'status',
    "'online' | 'busy' | 'away' | 'offline'",
    '-',
    'Presence dot in the bottom-right corner',
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
