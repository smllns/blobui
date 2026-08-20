import {
  BASIC_SIZES,
  childrenProp,
  classNameProp,
  iconProp,
  sizeProp,
  variantProp,
} from './commonProps';
import { describe, prop } from './helpers';

export const emptyProps = [
  prop(
    'state',
    "'no-data' | 'no-results' | 'insufficient' | 'error'",
    'no-data',
    'Why the block is empty. Picks the default icon and its tint, and decides which action belongs here',
  ),

  prop('title', 'ReactNode', '-', 'The one line the state cannot go without'),

  describe(childrenProp, 'Explaining paragraph under the title'),

  {
    ...iconProp,
    default: 'state icon',
    description:
      "Overrides the state's default icon. Pass null to drop the tile",
  },

  prop(
    'actions',
    'ReactNode',
    '-',
    'One or two buttons under the copy: create, clear the filter, retry',
  ),

  sizeProp(
    BASIC_SIZES,
    'md',
    'sm is the in-place version for a table body or a result list; lg is a full page',
  ),

  variantProp(
    ['plain', 'bordered', 'sunken'],
    'plain',
    'bordered draws the dashed well where the content would have been',
  ),

  classNameProp,
];
