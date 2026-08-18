import { Slider } from '@/components/slider/Slider';
import type { StateSpecimen } from '../components/docsPage.types';

export const SLIDER_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: (
      <div className='w-64'>
        <Slider defaultValue={40} aria-label='Volume' />
      </div>
    ),
    note: 'resting state — the rail shows the available range, the fill shows the current value, and the thumb marks the exact position',
  },
  {
    name: 'focus',
    node: (
      <div className='w-64'>
        <Slider defaultValue={40} aria-label='Volume' forceState='focus' />
      </div>
    ),
    note: 'keyboard focus is shown on the thumb, clearly identifying the control that will move when the value is adjusted',
  },
  {
    name: 'dragging',
    node: (
      <div className='w-64'>
        <Slider defaultValue={40} aria-label='Volume' data-dragging />
      </div>
    ),
    note: 'active drag state — the thumb and fill remain highlighted while the value is being adjusted',
  },
  {
    name: 'disabled',
    node: (
      <div className='w-64'>
        <Slider defaultValue={40} aria-label='Volume' disabled />
      </div>
    ),
    note: 'disabled state — the slider cannot be adjusted, but its current value remains visible',
  },
  {
    name: 'invalid',
    node: (
      <div className='w-64'>
        <Slider
          defaultValue={80}
          aria-label='Budget'
          error
          errorMessage='Past the hard cap on this plan'
        />
      </div>
    ),
    note: 'invalid state — the value uses danger styling and the message explains why it is not accepted',
  },
];
