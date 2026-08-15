import type { HoverCardPlaygroundState } from './hoverCardConstants';

export function generateHoverCardCode(state: HoverCardPlaygroundState) {
  return `import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardSubtitle,
  HoverCardBody,
  HoverCardFooter,
} from '@blobui';

import { Avatar } from '@blobui';

<HoverCard openDelay={${state.openDelay}} closeDelay={${state.closeDelay}}>
  <HoverCardTrigger variant="${state.triggerVariant}">
    ${state.triggerLabel}
  </HoverCardTrigger>

  <HoverCardContent
    variant="${state.variant}"
    rounded="${state.rounded}"
    side="${state.side}"
    align="${state.align}"
    sideOffset={${state.sideOffset}}${state.loading ? '\n    loading' : ''}${
      state.showCloseButton ? '\n    showCloseButton' : ''
    }
  >
    <HoverCardHeader>
      <Avatar fallback="PR" />

      <div>
        <HoverCardTitle>${state.name}</HoverCardTitle>
        <HoverCardSubtitle>${state.handle}</HoverCardSubtitle>
      </div>
    </HoverCardHeader>

    <HoverCardBody>${state.bio}</HoverCardBody>

    <HoverCardFooter>
      <span>Joined 2021</span>
      <a href="/people/priya">Full profile</a>
    </HoverCardFooter>
  </HoverCardContent>
</HoverCard>`;
}
