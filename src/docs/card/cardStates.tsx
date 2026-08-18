import { Card } from '@/components/card/Card';
import type { CardProps } from '@/components/card/card.types';
import type { StateSpecimen } from '../components/docsPage.types';

const sample = (props: Partial<CardProps> = {}) => (
  <Card className='w-64' {...props}>
    <h3 className='mb-1 text-heading-md'>Weekly digest</h3>
    <p className='text-body-sm text-fg-tertiary'>Six threads, two decisions.</p>
  </Card>
);

const interactive = (props: Partial<CardProps> = {}) =>
  sample({ interactive: true, tabIndex: 0, ...props });

export const CARD_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: sample(),
    note: 'static surface: no cursor, no transition, and no pointer states',
  },
  {
    name: 'interactive',
    node: interactive(),
    note: 'the whole surface is a link or a button — point at it, or tab to it',
  },
];
