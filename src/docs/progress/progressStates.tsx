import { Progress } from '@/components/progress/Progress';
import type { StateSpecimen } from '../components/docsPage.types';

export const PROGRESS_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: (
      <div className='w-64'>
        <Progress value={62} aria-label='Uploading' />
      </div>
    ),
    note: 'determinate state — the filled portion reflects the current progress',
  },
  {
    name: 'indeterminate',
    node: (
      <div className='w-64'>
        <Progress indeterminate aria-label='Working' />
      </div>
    ),
    note: 'indeterminate state — progress is ongoing but the completion percentage is unknown',
  },
  {
    name: 'complete',
    node: (
      <div className='w-64'>
        <Progress value={100} aria-label='Done' />
      </div>
    ),
    note: 'complete state — the full bar indicates that the operation has finished',
  },
  {
    name: 'empty',
    node: (
      <div className='w-64'>
        <Progress value={0} aria-label='Queued' />
      </div>
    ),
    note: 'empty state — no progress has been made, so only the track is visible',
  },
  {
    name: 'disabled',
    node: (
      <div className='w-64'>
        <Progress value={62} disabled aria-label='Paused' />
      </div>
    ),
    note: 'disabled state — the progress indicator is visually muted while the operation is unavailable',
  },
  {
    name: 'invalid',
    node: (
      <div className='w-64'>
        <Progress value={38} tone='danger' aria-label='Upload failed' />
      </div>
    ),
    note: 'error state — the danger tone indicates that the operation failed rather than showing an invalid progress value',
  },
];
