import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/Popover';
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
      'relative flex h-44 w-72 justify-center',
      open ? 'items-start' : 'items-center',
    )}
  >
    <Popover open={open}>
      <PopoverTrigger asChild>
        <Button variant='secondary' forceState={force}>
          Share project
        </Button>
      </PopoverTrigger>

      <PopoverContent
        size='sm'
        side='bottom'
        avoidCollisions={false}
        align='center'
        portal={false}
        onOpenAutoFocus={
          open ? (event: Event) => event.preventDefault() : undefined
        }
      >
        <h4 className='mb-1 text-body-md font-semibold'>Anyone with a link</h4>

        <p className='text-body-sm text-fg-tertiary'>
          People outside the workspace can read, but not comment.
        </p>

        <PopoverArrow />
      </PopoverContent>
    </Popover>
  </div>
);

export const POPOVER_STATES: StateSpecimen[] = [
  {
    name: 'closed',
    node: sample(),
    note: 'default state — the popover is hidden until the trigger is activated',
  },
  {
    name: 'open',
    node: sample({ open: true }),
    note: 'open state — the popover is visible and positioned relative to its trigger',
  },
  {
    name: 'hover',
    node: sample({ open: true, force: 'hover' }),
    note: 'hover state — hover styling belongs to the trigger and interactive elements inside the popover',
  },
  {
    name: 'active',
    node: sample({ open: true, force: 'active' }),
    note: 'active state — the trigger shows its pressed styling while opening the popover',
  },
  {
    name: 'focus-visible',
    node: sample({ open: true, force: 'focus' }),
    note: 'focus state — the trigger shows a visible focus ring for keyboard navigation',
  },
  {
    name: 'expanded',
    node: sample({ open: true }),
    note: 'expanded state — the trigger exposes its open state through aria-expanded',
  },
];
