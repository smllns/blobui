import { Button } from '@/components/button/Button';

export const BTN_STATES = [
  {
    name: 'default',
    node: <Button>Continue</Button>,
    note: 'the default button state — ready for interaction',
  },
  {
    name: 'hover',
    node: <Button forceState='hover'>Continue</Button>,
    note: 'stronger visual feedback when the pointer is over the button',
  },
  {
    name: 'active',
    node: <Button forceState='active'>Continue</Button>,
    note: 'pressed state — provides immediate feedback during interaction',
  },
  {
    name: 'focus',
    node: <Button forceState='focus'>Continue</Button>,
    note: 'visible focus ring for keyboard navigation',
  },
  {
    name: 'disabled',
    node: <Button disabled>Continue</Button>,
    note: 'unavailable state — the button cannot be interacted with',
  },
  {
    name: 'loading',
    node: <Button loading>Continue</Button>,
    note: 'indicates an ongoing action while keeping the button in place',
  },
];
