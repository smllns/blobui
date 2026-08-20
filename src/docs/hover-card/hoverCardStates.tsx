import type { ReactNode } from 'react';
import { Avatar } from '@/components/avatar/Avatar';
import {
  HoverCard,
  HoverCardBody,
  HoverCardContent,
  HoverCardFooter,
  HoverCardHeader,
  HoverCardSubtitle,
  HoverCardTitle,
  HoverCardTrigger,
} from '@/components/hover-card/HoverCard';
import type { StateSpecimen } from '../components/docsPage.types';

function preview({
  force,
  open,
  loading,
}: {
  force?: 'hover' | 'focus';
  open?: boolean;
  loading?: boolean;
} = {}) {
  return (
    <span className='text-body-md text-fg-secondary'>
      Reviewed by{' '}
      <HoverCard open={open}>
        <HoverCardTrigger forceState={force}>@priya</HoverCardTrigger>

        <HoverCardContent loading={loading} portal={false} positioning='static'>
          <HoverCardHeader>
            <Avatar fallback='PR' />

            <div className='flex min-w-0 flex-col'>
              <HoverCardTitle>Priya Raman</HoverCardTitle>
              <HoverCardSubtitle>@priya</HoverCardSubtitle>
            </div>
          </HoverCardHeader>

          <HoverCardBody>
            Design systems lead. Keeps the tokens honest and the components
            boring.
          </HoverCardBody>

          <HoverCardFooter>
            <span>Joined 2021</span>
          </HoverCardFooter>
        </HoverCardContent>
      </HoverCard>
    </span>
  );
}

const room = (children: ReactNode) => (
  <div className='min-h-50 pt-1'>{children}</div>
);

export const HOVER_CARD_STATES: StateSpecimen[] = [
  {
    name: 'closed',
    node: preview(),
    note: 'default state — the trigger is visible and the card is hidden',
  },
  {
    name: 'open',
    node: room(preview({ open: true })),
    note: 'open state — the card is displayed after the hover delay',
  },
  {
    name: 'hover',
    node: preview({ force: 'hover' }),
    note: 'hovered trigger — the underline uses the accent color to indicate an interactive target',
  },
  {
    name: 'focus',
    node: preview({ force: 'focus' }),
    note: 'focused trigger — shows a visible focus ring for keyboard navigation',
  },
  {
    name: 'loading',
    node: room(preview({ open: true, loading: true })),
    note: 'loading state — the card stays open at its final size while its content loads',
  },
];
