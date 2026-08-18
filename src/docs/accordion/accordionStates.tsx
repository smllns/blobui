import { Accordion } from '@/components/accordion/Accordion';
import type { StateSpecimen } from '../components/docsPage.types';

const ONE = [
  {
    value: 'shipping',
    title: 'Shipping',
    children: 'Orders leave the warehouse within two working days.',
  },
];

const MANY = [
  ...ONE,
  {
    value: 'returns',
    title: 'Returns',
    children: 'Thirty days, and the label is in the box.',
  },
  {
    value: 'support',
    title: 'Support',
    children: 'Weekdays, 9 to 6, in the language you ordered in.',
  },
];

export const ACCORDION_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: (
      <div className='w-72'>
        <Accordion items={ONE} collapsible />
      </div>
    ),
    note: 'closed — the panel is collapsed and the chevron points down',
  },
  {
    name: 'hover',
    node: (
      <div className='w-72'>
        <Accordion
          items={[{ ...ONE[0], forceState: 'hover' as const }]}
          collapsible
        />
      </div>
    ),
    note: 'hover — the trigger gets the subtle background fill',
  },
  {
    name: 'open · expanded',
    node: (
      <div className='w-72'>
        <Accordion items={ONE} defaultValue='shipping' collapsible />
      </div>
    ),
    note: 'open — exposed as data-state="open" and aria-expanded="true"',
  },
  {
    name: 'selected',
    node: (
      <div className='w-72'>
        <Accordion items={MANY} defaultValue='returns' />
      </div>
    ),
    note: 'selected — identifies which item is currently open',
  },
  {
    name: 'disabled',
    node: (
      <div className='w-72'>
        <Accordion items={[{ ...ONE[0], disabled: true }]} collapsible />
      </div>
    ),
    note: 'disabled — the trigger cannot be interacted with',
  },
];
