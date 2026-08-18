import { Toggle } from '@/components/toggle/Toggle';
import type { StateSpecimen } from '../components/docsPage.types';

export const TOGGLE_STATES: StateSpecimen[] = [
  {
    name: 'off',
    node: <Toggle>Bold</Toggle>,
    note: 'the resting state — transparent for the default variant, outlined for the outline variant',
  },
  {
    name: 'off · hover',
    node: <Toggle forceState='hover'>Bold</Toggle>,
    note: 'neutral hover fill keeps the toggle visually off until it is pressed',
  },
  {
    name: 'off · active',
    node: <Toggle forceState='active'>Bold</Toggle>,
    note: 'pressed styling with the same fill, movement, and focus ring as Button',
  },
  {
    name: 'on',
    node: <Toggle defaultPressed>Bold</Toggle>,
    note: 'the toggle is pressed and remains visually selected until pressed again',
  },
  {
    name: 'on · hover',
    node: (
      <Toggle defaultPressed forceState='hover'>
        Bold
      </Toggle>
    ),
    note: 'hover styling layered on top of the selected state',
  },
  {
    name: 'on · active',
    node: (
      <Toggle defaultPressed forceState='active'>
        Bold
      </Toggle>
    ),
    note: 'pressed styling while the toggle is already selected',
  },
  {
    name: 'outline · off',
    node: <Toggle variant='outline'>Show archived</Toggle>,
    note: 'the outline variant keeps the same border and fill as the secondary button',
  },
  {
    name: 'outline · on',
    node: (
      <Toggle variant='outline' defaultPressed>
        Show archived
      </Toggle>
    ),
    note: 'the selected state adds the variant-specific accent while preserving the outline',
  },
  {
    name: 'disabled',
    node: <Toggle disabled>Bold</Toggle>,
    note: 'the control is unavailable and cannot be pressed',
  },
  {
    name: 'disabled · on',
    node: (
      <Toggle disabled defaultPressed>
        Bold
      </Toggle>
    ),
    note: 'the selected state remains visible even though the control cannot be changed',
  },
  {
    name: 'loading',
    node: (
      <Toggle loading defaultPressed>
        Bold
      </Toggle>
    ),
    note: 'the control is busy while keeping its selected state visible',
  },
];
