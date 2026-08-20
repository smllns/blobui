import type { Side } from '@/components/shared/types';

export const sides: { side: Side; label: string; note: string }[] = [
  {
    side: 'right',
    label: 'Right',
    note: 'The desktop settings panel: a column, bounded in width, full height, with nothing to drag.',
  },
  {
    side: 'left',
    label: 'Left',
    note: 'The same column on the other edge. Only the inner corners are rounded — a radius against the screen edge paints a sliver of scrim and reads as a rendering fault.',
  },
  {
    side: 'bottom',
    label: 'Bottom',
    note: 'The phone. It has a grabber, and its padding clears the home indicator.',
  },
  {
    side: 'top',
    label: 'Top',
    note: 'The grabber moves to the bottom edge, which is the free one — the edge whose corners are rounded.',
  },
];
