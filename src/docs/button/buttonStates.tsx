import { Button } from '@/components/button/Button';

export const BTN_STATES = [
  { name: 'default', node: <Button>Continue</Button> },
  {
    name: 'hover',
    node: <Button forceState='hover'>Continue</Button>,
    note: 'painted — point at the default row to check it live',
  },
  {
    name: 'active',
    node: <Button forceState='active'>Continue</Button>,
    note: 'painted — fill, travel and the ring, exactly as a live press',
  },
  {
    name: 'focus',
    node: <Button forceState='focus'>Continue</Button>,
    note: 'painted — the live ring answers Tab, not the mouse',
  },
  { name: 'disabled', node: <Button disabled>Continue</Button> },
  { name: 'loading', node: <Button loading>Continue</Button> },
];
