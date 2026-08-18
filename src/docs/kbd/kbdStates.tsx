import { Kbd } from '@/components/kbd/Kbd';
import type { StateSpecimen } from '../components/docsPage.types';

export const KBD_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: <Kbd>K</Kbd>,
    note: 'default state — the key is shown at rest',
  },
  {
    name: 'pressed',
    node: <Kbd pressed>K</Kbd>,
    note: 'pressed state — the key moves down to visually indicate an active press',
  },
];
