import type { AccordionPlaygroundState } from '../constants/accordionConstants';

export function generateAccordionCode(state: AccordionPlaygroundState) {
  return `
const items = [
  {
    value: 'item-1',
    title: 'What is React?',
    children: 'React is a JavaScript library for building user interfaces.',
  },
  {
    value: 'item-2',
    title: 'What is TypeScript?',
    children: 'TypeScript is a strongly typed programming language built on JavaScript.',
    ${state.disabledItem ? 'disabled: true,' : ''}
  },
  {
    value: 'item-3',
    title: 'What is Radix UI?',
    children: 'Radix UI provides unstyled and accessible UI primitives.',
  },
];

<Accordion
  items={items}
  variant="${state.variant}"
  type="${state.type}"
  ${state.type === 'single' ? `collapsible={${state.collapsible}}` : ''}
/>
`.trim();
}
