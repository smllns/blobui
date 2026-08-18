import type { EmptyState } from '@/components/empty/empty.types';

export const EMPTY_COPY: Record<
  EmptyState,
  {
    title: string;
    text: string;
    actionLabel: string;
    actionIcon: 'Plus' | 'RefreshCw' | null;
    actionVariant: 'primary' | 'outline';
  }
> = {
  'no-data': {
    title: 'No projects yet',
    text: 'A project holds the boards, files and threads a team works from. Make the first one, invite people to it later.',
    actionLabel: 'New project',
    actionIcon: 'Plus',
    actionVariant: 'primary',
  },

  'no-results': {
    title: 'No projects match “billing”',
    text: 'The Status: archived filter is still on. Clear it to search the other 38 projects.',
    actionLabel: 'Clear filter',
    actionIcon: null,
    actionVariant: 'outline',
  },

  insufficient: {
    title: 'Not enough history to compare',
    text: 'A trend needs two weeks of activity. This project has five days of it so far.',
    actionLabel: 'Widen the range',
    actionIcon: null,
    actionVariant: 'outline',
  },

  error: {
    title: 'Could not load projects',
    text: 'The request timed out before the list came back. Nothing was lost.',
    actionLabel: 'Try again',
    actionIcon: 'RefreshCw',
    actionVariant: 'outline',
  },
};
