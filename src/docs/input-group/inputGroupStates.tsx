import {
  InputGroup,
  InputGroupAddon,
} from '@/components/input-group/InputGroup';
import { Button } from '@/components/button/Button';
import type { StateSpecimen } from '../components/docsPage.types';

export const INPUT_GROUP_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: (
      <div className='w-72'>
        <InputGroup aria-label='Domain' leading='https://' placeholder='blob' />
      </div>
    ),
    note: 'default state — the input and addons share a single control surface',
  },
  {
    name: 'hover',
    node: (
      <div className='w-72'>
        <InputGroup
          aria-label='Domain'
          leading='https://'
          placeholder='blob'
          forceState='hover'
        />
      </div>
    ),
    note: 'hover state — the entire group responds as one interactive control',
  },
  {
    name: 'focus',
    node: (
      <div className='w-72'>
        <InputGroup
          aria-label='Domain'
          leading='https://'
          placeholder='blob'
          forceState='focus'
        />
      </div>
    ),
    note: 'focus state — a single focus ring surrounds the whole group',
  },
  {
    name: 'focus · addon',
    node: (
      <div className='w-72'>
        <InputGroup
          aria-label='Domain'
          defaultValue='blob.ui'
          trailing={
            <Button variant='secondary' forceState='focus'>
              Copy
            </Button>
          }
        />
      </div>
    ),
    note: 'addon focus — the focused action gets its own ring without highlighting the input',
  },
  {
    name: 'filled',
    node: (
      <div className='w-72'>
        <InputGroup
          aria-label='Domain'
          leading='https://'
          defaultValue='blob.ui'
        />
      </div>
    ),
    note: 'filled state — the group contains a user-provided value',
  },
  {
    name: 'empty',
    node: (
      <div className='w-72'>
        <InputGroup aria-label='Domain' leading='https://' />
      </div>
    ),
    note: 'empty state — no value is entered while the addons remain visible',
  },
  {
    name: 'invalid',
    node: (
      <div className='w-72'>
        <InputGroup
          aria-label='Domain'
          leading='https://'
          defaultValue='blob ui'
          errorMessage='Domains cannot contain spaces'
        />
      </div>
    ),
    note: 'invalid state — the error styling applies consistently across the entire group',
  },
  {
    name: 'read-only',
    node: (
      <div className='w-72'>
        <InputGroup
          aria-label='Domain'
          leading='https://'
          readOnly
          defaultValue='blob.ui'
        />
      </div>
    ),
    note: 'read-only state — the value remains visible and selectable but cannot be edited',
  },
  {
    name: 'disabled',
    node: (
      <div className='w-72'>
        <InputGroup
          aria-label='Domain'
          leading='https://'
          disabled
          defaultValue='blob.ui'
        />
      </div>
    ),
    note: 'disabled state — the entire group is unavailable for interaction',
  },
  {
    name: 'loading',
    node: (
      <div className='w-72'>
        <InputGroup
          aria-label='Domain'
          leading='https://'
          trailing={<InputGroupAddon>.com</InputGroupAddon>}
          defaultValue='blob'
          loading
          loadingLabel='Checking availability…'
        />
      </div>
    ),
    note: 'loading state — the current value stays visible while the group indicates that a check is in progress',
  },
];
