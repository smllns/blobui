import {
  childrenProp,
  classNameProp,
  forceStateProp,
  variantProp,
} from './commonProps';
import { prop } from './helpers';

export const cardProps = [
  variantProp(
    ['default', 'filled', 'outline', 'ghost', 'elevated'],
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

  forceStateProp,
  classNameProp,
  childrenProp,
];

export const cardFooterProps = [
  prop(
    'layout',
    "'split' | 'stretch' | 'meta' | 'end'",
    'end',
    'How the row is arranged: end keeps everything at the end edge, split and meta push the first child to the opposite edge, stretch gives every child an equal share of the width',
  ),

  prop(
    'surface',
    "'filled' | 'plain'",
    'filled',
    'filled sets the footer apart with a hairline and a sunken band; plain drops both and lets it sit on the card',
  ),

  classNameProp,
  childrenProp,
];
