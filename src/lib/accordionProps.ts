export const accordionProps = [
  {
    name: 'items',
    type: 'AccordionItemProps[]',
    default: '-',
    description: 'List of accordion items to display',
  },
  {
    name: 'variant',
    type: "'default' | 'outline' | 'ghost'",
    default: 'default',
    description: 'Visual style of the accordion',
  },
  {
    name: 'type',
    type: "'single' | 'multiple'",
    default: 'single',
    description:
      'Defines whether one or multiple items can be opened at the same time',
  },
  {
    name: 'collapsible',
    type: 'boolean',
    default: 'true',
    description:
      'Allows the opened item to be closed. Works only with single type',
  },
  {
    name: 'defaultValue',
    type: 'string | string[]',
    default: '-',
    description: 'The item or items opened by default',
  },
  {
    name: 'value',
    type: 'string | string[]',
    default: '-',
    description: 'Controls the currently opened item or items',
  },
  {
    name: 'onValueChange',
    type: '(value: string | string[]) => void',
    default: '-',
    description: 'Callback fired when the opened item or items change',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Disables an accordion item and prevents it from being opened',
  },
  {
    name: 'className',
    type: 'string',
    default: '-',
    description: 'Additional CSS classes for customization',
  },
];
