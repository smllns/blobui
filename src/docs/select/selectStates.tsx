import { Select } from '@/components/select/Select';
import { SelectItem } from '@/components/select/SelectItem';
import type { StateSpecimen } from '../components/docsPage.types';
import { OPTIONS } from './select.data';

const options = OPTIONS.map((opt) => (
  <SelectItem key={opt.value} value={opt.value}>
    {opt.label}
  </SelectItem>
));

const FIRST = OPTIONS[0].value;

export const SELECT_STATES: StateSpecimen[] = [
  {
    name: 'default',
    node: (
      <Select placeholder='Choose one' aria-label='Frequency'>
        {options}
      </Select>
    ),
    note: 'resting state — the trigger uses the same visual language as other form fields',
  },
  {
    name: 'hover',
    node: (
      <Select
        placeholder='Choose one'
        aria-label='Frequency'
        forceState='hover'
      >
        {options}
      </Select>
    ),
    note: 'hover state — the border becomes more prominent to indicate that the trigger is interactive',
  },
  {
    name: 'focus',
    node: (
      <Select
        placeholder='Choose one'
        aria-label='Frequency'
        forceState='focus'
      >
        {options}
      </Select>
    ),
    note: 'focus state — the focused trigger gets a visible border and focus ring',
  },
  {
    name: 'filled',
    node: (
      <Select defaultValue={FIRST} aria-label='Frequency'>
        {options}
      </Select>
    ),
    note: 'a value is selected — the field shows the chosen value instead of its placeholder',
  },
  {
    name: 'invalid',
    node: (
      <Select
        placeholder='Choose one'
        aria-label='Frequency'
        errorMessage='Pick a frequency'
      >
        {options}
      </Select>
    ),
    note: 'invalid state — the field uses danger styling and displays an error message below it',
  },
  {
    name: 'disabled',
    node: (
      <Select defaultValue={FIRST} aria-label='Frequency' disabled>
        {options}
      </Select>
    ),
    note: 'disabled state — the trigger cannot be interacted with, while its selected value remains visible',
  },
];
