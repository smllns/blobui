import { BUTTON_VARIANTS } from '../options';
import {
  EXTENDED_SIZES,
  childrenProp,
  classNameProp,
  defaultOpenProp,
  disabledProp,
  forceStateProp,
  loadingProp,
  onOpenChangeProp,
  openProp,
  sizeProp,
  variantProp,
} from './commonProps';
import { prop } from './helpers';

export const collapsibleProps = [
  prop('trigger', 'ReactNode', '-', 'Label of the disclosure trigger'),

  prop(
    'triggerOpen',
    'ReactNode',
    '-',
    'Trigger label used while open. Falls back to trigger',
  ),

  childrenProp,

  openProp(),

  defaultOpenProp(),

  onOpenChangeProp(),

  prop(
    'align',
    "'start' | 'end' | 'stretch'",
    'start',
    'Alignment of the trigger inside the block',
  ),

  prop(
    'peek',
    'boolean',
    'false',
    'Keeps three lines of content visible while closed and fades the cut',
  ),

  variantProp(
    BUTTON_VARIANTS,
    'ghost',
    'Button variant of the trigger. The value goes straight to Button, so the whole set is available',
  ),

  sizeProp(EXTENDED_SIZES, 'md', 'Button size of the trigger'),

  loadingProp('Shows a spinner in the trigger while the content is fetched'),

  prop(
    'headingLevel',
    '2 | 3 | 4 | 5 | 6',
    'undefined',
    'Wraps the trigger in a heading of this level. Use it when the disclosure introduces a section of the page, so that section stays reachable for anyone navigating by headings rather than by tabbing',
  ),

  forceStateProp,
  disabledProp,
  classNameProp,
];
