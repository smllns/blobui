import { childrenProp, classNameProp } from './commonProps';
import { prop } from './helpers';

export const cardProps = [
  prop(
    'variant',
    "'default' | 'filled' | 'outline' | 'ghost' | 'elevated'",
    'default',
    'Visual style of the card',
  ),

  prop(
    'padding',
    "'none' | 'sm' | 'md' | 'lg'",
    'md',
    'Controls internal spacing of the card content',
  ),

  classNameProp,
  childrenProp,
];
