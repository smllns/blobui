import { classNameProp, disabledProp } from './commonProps';
import { prop } from './helpers';

export const accordionProps = [
  prop(
    'items',
    'AccordionItemProps[]',
    '-',
    'List of accordion items to display',
  ),

  prop(
    'variant',
    "'default' | 'outline' | 'ghost'",
    'default',
    'Visual style of the accordion',
  ),

  prop(
    'type',
    "'single' | 'multiple'",
    'single',
    'Defines whether one or multiple items can be opened at the same time',
  ),

  prop(
    'collapsible',
    'boolean',
    'true',
    'Allows the opened item to be closed. Works only with single type',
  ),

  prop(
    'defaultValue',
    'string | string[]',
    '-',
    'The item or items opened by default',
  ),

  prop(
    'value',
    'string | string[]',
    '-',
    'Controls the currently opened item or items',
  ),

  prop(
    'onValueChange',
    '(value: string | string[]) => void',
    '-',
    'Callback fired when the opened item or items change',
  ),

  disabledProp,
  classNameProp,
];
