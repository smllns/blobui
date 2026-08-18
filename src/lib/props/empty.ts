import { classNameProp } from './commonProps';
import { prop } from './helpers';

export const emptyProps = [
  prop(
    'state',
    "'no-data' | 'no-results' | 'insufficient' | 'error'",
    'no-data',
    'Why the block is empty. Picks the default icon and its tint, and decides which action belongs here',
  ),

  prop('title', 'ReactNode', '-', 'The one line the state cannot go without'),

  prop('children', 'ReactNode', '-', 'Explaining paragraph under the title'),

  prop(
    'icon',
    'ReactNode',
    '-',
    "Overrides the state's default icon. Pass null to drop the tile",
  ),

  prop(
    'actions',
    'ReactNode',
    '-',
    'One or two buttons under the copy: create, clear the filter, retry',
  ),

  prop(
    'size',
    "'sm' | 'md' | 'lg'",
    'md',
    'sm is the in-place version for a table body or a result list; lg is a full page',
  ),

  prop(
    'variant',
    "'plain' | 'bordered' | 'sunken'",
    'plain',
    'bordered draws the dashed well where the content would have been',
  ),

  classNameProp,
];
