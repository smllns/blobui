import {
  COMMON_VARIANTS,
  controlledValueProps,
  variantProp,
} from './commonProps';
import { prop } from './helpers';

export const accordionProps = [
  prop(
    'items',
    'AccordionItemProps[]',
    '-',
    'The panels, in order: value, title and children, plus optional disabled and forceState: "hover" | "active" | "focus", which paints a pointer state on the trigger of that item for documentation and visual tests',
  ),

  variantProp(COMMON_VARIANTS, 'default', 'Visual style of the accordion'),

  prop(
    'type',
    "'single' | 'multiple'",
    'single',
    'Defines whether one or multiple items can be opened at the same time',
  ),

  prop(
    'collapsible',
    'boolean',
    'false',
    'Allows the opened item to be closed. Works only with single type',
  ),

  ...controlledValueProps({
    type: 'string | string[]',
    value: 'Controls the currently opened item or items',
    defaultValue: 'The item or items opened by default',
    onValueChange:
      'Callback fired when the opened item or items change. A string for single, an array for multiple',
    changeType: '((value: string) => void) | ((value: string[]) => void)',
  }),
];
