import { Tabs } from '@/components/tabs/Tabs';
import type { StateSpecimen } from '../components/docsPage.types';
import type { TabItem } from '@/components/tabs/tabs.types';

const LABELS = [
  { value: 'overview', label: 'Overview' },
  { value: 'activity', label: 'Activity' },
  { value: 'archive', label: 'Archive' },
];

function tabRow({
  force,
  on = 'activity',
  selected = 'overview',
  disabled,
}: {
  force?: TabItem['forceState'];
  on?: string;
  selected?: string;
  disabled?: string;
} = {}) {
  return (
    <div className='w-72'>
      <Tabs
        aria-label='Workspace'
        defaultValue={selected}
        items={LABELS.map((item) => ({
          ...item,
          forceState: item.value === on ? force : undefined,
          disabled: item.value === disabled || undefined,
        }))}
      />
    </div>
  );
}

export const TAB_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: tabRow(),
    note: 'resting state — the active tab is marked with the underline, while the other tabs remain neutral',
  },
  {
    name: 'hover',
    node: tabRow({ force: 'hover' }),
    note: 'hover state — the hovered tab becomes more prominent without changing the current selection',
  },
  {
    name: 'focus',
    node: tabRow({ force: 'focus' }),
    note: 'focus state — the ring identifies the tab receiving keyboard focus, while the underline continues to mark the selected tab',
  },
  {
    name: 'disabled',
    node: tabRow({ disabled: 'archive' }),
    note: 'disabled state — the tab is muted and cannot be selected or reached through keyboard navigation',
  },
  {
    name: 'disabled + selected',
    node: tabRow({ disabled: 'archive', selected: 'archive' }),
    note: 'disabled selected state — the tab remains visibly disabled rather than appearing as an active destination',
  },
];
