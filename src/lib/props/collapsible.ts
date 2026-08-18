import {
  childrenProp,
  classNameProp,
  disabledProp,
  forceStateProp,
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

  prop('open', 'boolean', '-', 'Controls the open state'),

  prop('defaultOpen', 'boolean', 'false', 'Open state before any interaction'),

  prop(
    'onOpenChange',
    '(open: boolean) => void',
    '-',
    'Callback fired when the open state changes',
  ),

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

  prop(
    'variant',
    "'primary' | 'secondary' | 'soft' | 'outline' | 'ghost' | 'link'",
    'ghost',
    'Button variant of the trigger',
  ),

  prop(
    'size',
    "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
    'md',
    'Button size of the trigger',
  ),

  prop(
    'loading',
    'boolean',
    'false',
    'Shows a spinner in the trigger while the content is fetched',
  ),

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
