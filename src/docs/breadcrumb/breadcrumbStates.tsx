import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb';
import type { BreadcrumbItem } from '@/components/breadcrumb/breadcrumb.types';
import type { StateSpecimen } from '../components/docsPage.types';
import { disabledTrail, shortTrail, trail } from './breadcrumb.data';
import type { ForceState } from '@/components/shared/types';

const linkAt = (forceState: ForceState): BreadcrumbItem[] =>
  shortTrail.map((item, index) =>
    index === 1 ? { ...item, forceState } : item,
  );

export const BREADCRUMB_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: <Breadcrumb items={shortTrail} />,
    note: 'default — parent pages are links; the current page is plain text.',
  },
  {
    name: 'link · hover',
    node: <Breadcrumb items={linkAt('hover')} />,
    note: 'links gain an underline and stronger contrast.',
  },
  {
    name: 'link · focus',
    node: <Breadcrumb items={linkAt('focus')} />,
    note: 'focused links show a visible focus ring.',
  },
  {
    name: 'disabled',
    node: <Breadcrumb items={disabledTrail} />,
    note: 'an unavailable breadcrumb remains readable but cannot be interacted with.',
  },
  {
    name: 'ellipsis',
    node: <Breadcrumb items={trail} maxItems={4} />,
    note: 'long trails collapse middle levels behind an interactive ellipsis.',
  },
  {
    name: 'ellipsis · hover',
    node: <Breadcrumb items={trail} maxItems={4} ellipsisForceState='hover' />,
    note: 'the ellipsis shows its hover state.',
  },

  {
    name: 'ellipsis · expanded',
    node: <Breadcrumb items={trail} />,
    note: 'clicking the ellipsis reveals the hidden breadcrumb levels.',
  },
];
