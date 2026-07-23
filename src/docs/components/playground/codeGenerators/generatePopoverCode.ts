import type { PopoverPlaygroundState } from '../constants/popoverConstants';

export function generatePopoverCode(state: PopoverPlaygroundState) {
  return `import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
} from '@smllns/ui';

import { Button } from '@smllns/ui';

<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>

  <PopoverContent
    variant="${state.variant}"
    size="${state.size}"
    rounded="${state.rounded}"
    side="${state.side}"
    align="${state.align}"
    sideOffset={${state.sideOffset}}
  >
    <h4>${state.title}</h4>

    <p>${state.description}</p>
${
  state.showArrow
    ? `
    <PopoverArrow variant="${state.variant}" />`
    : ''
}
  </PopoverContent>
</Popover>`;
}
