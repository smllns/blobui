import { useState } from 'react';
import { Avatar } from '@/components/avatar/Avatar';
import {
  HoverCard,
  HoverCardBody,
  HoverCardContent,
  HoverCardFooter,
  HoverCardHeader,
  HoverCardSubtitle,
  HoverCardTitle,
  HoverCardTrigger,
} from '@/components/hover-card/HoverCard';
import { CodeBlock } from '../components/CodeBlock';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import {
  HOVER_CARD_CONTROLS,
  HOVER_CARD_INITIAL_STATE,
} from './hoverCardConstants';
import { generateHoverCardCode } from './generateHoverCardCode';

export function HoverCardPlayground() {
  const [state, setState] = useState(HOVER_CARD_INITIAL_STATE);

  const code = generateHoverCardCode(state);

  const update = <K extends keyof typeof state>(
    key: K,
    value: (typeof state)[K],
  ) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={HOVER_CARD_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center p-20'>
          <span className='text-body-md text-fg-secondary'>
            Reviewed by{' '}
            <HoverCard
              openDelay={state.openDelay}
              closeDelay={state.closeDelay}
            >
              <HoverCardTrigger variant={state.triggerVariant}>
                {state.triggerVariant === 'unstyled' ? (
                  <Avatar size='sm' fallback='PR' />
                ) : (
                  state.triggerLabel
                )}
              </HoverCardTrigger>

              <HoverCardContent
                variant={state.variant}
                rounded={state.rounded}
                side={state.side}
                align={state.align}
                sideOffset={+state.sideOffset}
                loading={state.loading}
                showCloseButton={state.showCloseButton}
              >
                <HoverCardHeader>
                  <Avatar fallback='PR' />

                  <div className='flex min-w-0 flex-col'>
                    <HoverCardTitle>{state.name}</HoverCardTitle>
                    <HoverCardSubtitle>{state.handle}</HoverCardSubtitle>
                  </div>
                </HoverCardHeader>

                <HoverCardBody>{state.bio}</HoverCardBody>

                <HoverCardFooter>
                  <span>Joined 2021</span>

                  <a className='text-link' href=''>
                    Full profile
                  </a>
                </HoverCardFooter>
              </HoverCardContent>
            </HoverCard>
          </span>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
