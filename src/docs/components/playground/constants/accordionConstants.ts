import type { Control } from '../controls/ControlsRenderer';
import type { AccordionProps } from '../../../../components/accordion/accordion.types';

export type AccordionPlaygroundState = {
  variant: NonNullable<AccordionProps['variant']>;
  type: NonNullable<AccordionProps['type']>;
  collapsible: boolean;
  disabledItem: boolean;
};

export const ACCORDION_INITIAL_STATE: AccordionPlaygroundState = {
  variant: 'default',
  type: 'single',
  collapsible: true,
  disabledItem: false,
};

export const ACCORDION_CONTROLS: Control<AccordionPlaygroundState>[] = [
  {
    type: 'select',
    key: 'variant',
    label: 'Variant',
    options: ['default', 'outline', 'ghost'],
  },
  {
    type: 'select',
    key: 'type',
    label: 'Type',
    options: ['single', 'multiple'],
  },
  {
    type: 'checkbox',
    key: 'collapsible',
    label: 'Collapsible',
  },
  {
    type: 'checkbox',
    key: 'disabledItem',
    label: 'Disabled item',
  },
] as const;

export const AccordionItems = [
  {
    value: 'item-1',
    title: 'What is React?',
    children: 'React is a JavaScript library for building user interfaces.',
  },
  {
    value: 'item-2',
    title: 'What is TypeScript?',
    children:
      'TypeScript is a strongly typed programming language built on JavaScript.',
  },
  {
    value: 'item-3',
    title: 'What is Radix UI?',
    children: 'Radix UI provides unstyled, accessible UI primitives.',
  },
];
