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
    'Inner spacing. Use none when building from CardHeader / CardBody / CardFooter',
  ),

  prop(
    'interactive',
    'boolean',
    'false',
    'Makes the whole surface a target: hover lift and focus ring',
  ),

  classNameProp,
  childrenProp,
];
