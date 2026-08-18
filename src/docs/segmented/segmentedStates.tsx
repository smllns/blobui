import { Segmented } from '@/components/segmented/Segmented';
import type {
  SegmentedBaseProps,
  SegmentedItem,
} from '@/components/segmented/segmented.types';
import type { StateSpecimen } from '../components/docsPage.types';

const VIEWS = [
  { value: 'table', label: 'Table' },
  { value: 'chart', label: 'Chart' },
  { value: 'map', label: 'Map' },
];

function track({
  force,
  on = 'chart',
  selected = 'table',
  itemDisabled,
  ...props
}: {
  force?: SegmentedItem['forceState'];
  on?: string;
  selected?: string;
  itemDisabled?: string;
} & Pick<SegmentedBaseProps, 'disabled' | 'readOnly' | 'loading'> = {}) {
  return (
    <Segmented
      aria-label='View'
      defaultValue={selected}
      items={VIEWS.map((item) => ({
        ...item,
        forceState: item.value === on ? force : undefined,
        disabled: item.value === itemDisabled || undefined,
      }))}
      {...props}
    />
  );
}

export const SEGMENTED_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: track(),
    note: 'resting state — the group is available, with the current selection clearly marked',
  },
  {
    name: 'hover',
    node: track({ force: 'hover' }),
    note: 'the hovered segment gets a subtle fill and stronger text, while the selected state remains visually distinct',
  },
  {
    name: 'disabled · item',
    node: track({ itemDisabled: 'map' }),
    note: 'one option is unavailable while the other segments remain interactive',
  },
  {
    name: 'disabled · group',
    node: track({ disabled: true }),
    note: 'the entire group is unavailable, but the current selection remains visible so the active view is still clear',
  },
  {
    name: 'read-only',
    node: track({ readOnly: true }),
    note: 'the current selection is visible but cannot be changed — useful when the value is informational rather than editable',
  },
  {
    name: 'loading · group',
    node: track({ loading: true }),
    note: 'the group is temporarily unavailable while the selected view is loading; the current selection stays visible and no individual segment shows a spinner',
  },
];
