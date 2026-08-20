import {
  BASIC_SIZES,
  childrenProp,
  classNameProp,
  sizeProp,
  variantProp,
} from './commonProps';
import { prop } from './helpers';

export const kbdProps = [
  sizeProp(BASIC_SIZES, 'md', 'Height of the cap'),

  variantProp(
    ['default', 'ghost'],
    'default',
    'ghost drops the fill and takes its ink from the row around it, for menu and command items',
  ),

  prop(
    'pressed',
    'boolean',
    'false',
    'The key is being held. The cap travels down by the bevel it loses, so the row never jumps',
  ),

  classNameProp,
  childrenProp,
];

export const kbdGroupProps = [
  prop(
    'keys',
    'ReactNode[]',
    '-',
    'Shorthand for a chord: one Kbd per entry, so a screen reader reads every key',
  ),

  sizeProp(BASIC_SIZES, 'md', 'Size handed to the keys in keys'),

  variantProp(
    ['default', 'ghost'],
    'default',
    'Variant handed to the keys in keys',
  ),

  classNameProp,
  childrenProp,
];
