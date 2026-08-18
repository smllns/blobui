import { Input } from '@/components/input/Input';
import type { StateSpecimen } from '../components/docsPage.types';

export const INPUT_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: (
      <div className='w-64'>
        <Input aria-label='Email' placeholder='you@example.com' />
      </div>
    ),
    note: 'default state — ready for input',
  },
  {
    name: 'hover',
    node: (
      <div className='w-64'>
        <Input
          aria-label='Email'
          placeholder='you@example.com'
          forceState='hover'
        />
      </div>
    ),
    note: 'hover state — provides visual feedback when the pointer is over the field',
  },
  {
    name: 'focus',
    node: (
      <div className='w-64'>
        <Input
          aria-label='Email'
          placeholder='you@example.com'
          forceState='focus'
        />
      </div>
    ),
    note: 'focus state — shows a visible focus ring for keyboard navigation',
  },
  {
    name: 'filled',
    node: (
      <div className='w-64'>
        <Input aria-label='Email' defaultValue='blob@ui.dev' />
      </div>
    ),
    note: 'filled state — displays a value entered by the user',
  },
  {
    name: 'empty',
    node: (
      <div className='w-64'>
        <Input aria-label='Email' />
      </div>
    ),
    note: 'empty state — no value or placeholder is provided',
  },
  {
    name: 'invalid',
    node: (
      <div className='w-64'>
        <Input
          aria-label='Email'
          defaultValue='blob@'
          errorMessage='Enter a full address'
        />
      </div>
    ),
    note: 'invalid state — highlights the field and displays an error message',
  },
  {
    name: 'read-only',
    node: (
      <div className='w-64'>
        <Input aria-label='Email' readOnly defaultValue='blob@ui.dev' />
      </div>
    ),
    note: 'read-only state — the value can be viewed and selected but not edited',
  },
  {
    name: 'disabled',
    node: (
      <div className='w-64'>
        <Input aria-label='Email' disabled defaultValue='blob@ui.dev' />
      </div>
    ),
    note: 'disabled state — the field is unavailable and cannot be interacted with',
  },
];
