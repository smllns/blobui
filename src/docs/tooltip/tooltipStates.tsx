import { Tooltip } from '@/components/tooltip/Tooltip';
import { Button } from '@/components/button/Button';
import { cn } from '@/lib/cn';
import type { StateSpecimen } from '../components/docsPage.types';
import type { ForceState } from '@/components/shared/types';

const sample = ({
  open,
  force,
}: {
  open?: boolean;
  force?: ForceState;
} = {}) => (
  <div
    className={cn(
      'flex h-24 w-64 justify-center',
      open ? 'items-start' : 'items-center',
    )}
  >
    <Tooltip
      content='Copied to your clipboard'
      side='bottom'
      open={open}
      portal={false}
      avoidCollisions={false}
    >
      <Button variant='secondary' forceState={force}>
        Copy link
      </Button>
    </Tooltip>
  </div>
);

export const TOOLTIP_STATES: StateSpecimen[] = [
  {
    name: 'closed',
    node: sample(),
    note: 'the resting state — the tooltip is not rendered until the trigger is hovered or focused',
  },
  {
    name: 'open',
    node: sample({ open: true }),
    note: 'the tooltip is visible with a short fade, upward movement, and scale transition',
  },
  {
    name: 'hover',
    node: sample({ open: true, force: 'hover' }),
    note: 'hover styling belongs to the trigger; hovering it is what opens the tooltip',
  },
  {
    name: 'active',
    node: sample({ open: true, force: 'active' }),
    note: 'active styling belongs to the trigger; the tooltip itself is not an interactive target',
  },
];
