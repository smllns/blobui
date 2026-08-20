import { Radio } from '@/components/radio/Radio';
import type { StateSpecimen } from '../components/docsPage.types';

export const RADIO_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: <Radio name='states-default' label='Weekly digest' />,
    note: 'default state — the option is available but not selected',
  },
  {
    name: 'hover',
    node: (
      <div className='flex flex-col gap-2'>
        <Radio name='states-hover-a' label='Unchecked' forceState='hover' />
        <Radio
          name='states-hover-b'
          label='Checked'
          defaultChecked
          forceState='hover'
        />
      </div>
    ),
    note: 'hover state — provides visual feedback for both selected and unselected options',
  },
  {
    name: 'focus',
    node: (
      <div className='flex flex-col gap-2'>
        <Radio name='states-focus-a' label='Unchecked' forceState='focus' />
        <Radio
          name='states-focus-b'
          label='Checked'
          defaultChecked
          forceState='focus'
        />
      </div>
    ),
    note: 'focus state — the radio control shows a visible focus ring for keyboard navigation',
  },
  {
    name: 'checked',
    node: <Radio name='states-checked' label='Weekly digest' defaultChecked />,
    note: 'checked state — the selected option is indicated by a filled control and inner dot',
  },
  {
    name: 'invalid',
    node: (
      <Radio
        name='states-invalid'
        label='Weekly digest'
        errorMessage='Choose a frequency'
      />
    ),
    note: 'invalid state — highlights the option and provides an error message explaining what needs attention',
  },
  {
    name: 'disabled',
    node: (
      <div className='flex flex-col gap-2'>
        <Radio name='states-disabled-a' label='Unchecked' disabled />
        <Radio
          name='states-disabled-b'
          label='Checked'
          disabled
          defaultChecked
        />
      </div>
    ),
    note: 'disabled state — the options cannot be changed while their current selection remains visible',
  },
];
