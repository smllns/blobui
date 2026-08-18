import { Checkbox } from '@/components/checkbox/CheckBox';
import type { StateSpecimen } from '../components/docsPage.types';

export const CHECKBOX_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: <Checkbox label='Email me updates' />,
    note: 'unchecked state — ready for interaction',
  },
  {
    name: 'hover',
    node: (
      <div className='flex flex-col gap-2'>
        <Checkbox label='Unchecked' forceState='hover' />
        <Checkbox label='Checked' defaultChecked forceState='hover' />
      </div>
    ),
    note: 'hover feedback for both unchecked and checked states',
  },
  {
    name: 'focus',
    node: (
      <div className='flex flex-col gap-2'>
        <Checkbox label='Unchecked' forceState='focus' />
        <Checkbox label='Checked' defaultChecked forceState='focus' />
      </div>
    ),
    note: 'visible focus ring around the checkbox for keyboard navigation',
  },
  {
    name: 'checked',
    node: <Checkbox label='Email me updates' defaultChecked />,
    note: 'selected state — the box uses the brand fill with a checkmark',
  },
  {
    name: 'indeterminate',
    node: <Checkbox label='Some selected' indeterminate />,
    note: 'partially selected state — indicates that some, but not all, items are selected',
  },
  {
    name: 'invalid',
    node: (
      <div className='flex flex-col gap-2'>
        <Checkbox label='Unchecked' errorMessage='Error Message' />
        <Checkbox checked label='Checked' errorMessage='Error Message' />
      </div>
    ),
    note: 'invalid state — uses error styling and displays a message explaining the issue',
  },
  {
    name: 'disabled',
    node: (
      <>
        <Checkbox label='Unchecked' disabled />
        <Checkbox label='Checked' disabled defaultChecked />
        <Checkbox label='Some' disabled indeterminate />
      </>
    ),
    note: 'disabled state — the current value remains visible but cannot be changed',
  },
];
