import { useState } from 'react';
import { Button } from '@/components/button/Button';
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/Popover';
import { CodeBlock } from '../components/CodeBlock';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { POPOVER_INITIAL_STATE, POPOVER_CONTROLS } from './popoverConstants';
import { generatePopoverCode } from './generatePopoverCode';

export function PopoverPlayground() {
  const [state, setState] = useState(POPOVER_INITIAL_STATE);

  const code = generatePopoverCode(state);

  const update = <K extends keyof typeof state>(
    key: K,
    value: (typeof state)[K],
  ) => {
    setState((prev) => {
      const next = {
        ...prev,
        [key]: value,
      };

      // Right side only works with small popover
      if (key === 'side' && value === 'right') {
        next.size = 'sm';
      }

      // Bigger sizes on right side move popover to the left
      if (key === 'size' && value !== 'sm' && prev.side === 'right') {
        next.side = 'left';
      }

      return next;
    });
  };
  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={POPOVER_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center p-20'>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Open Popover</Button>
            </PopoverTrigger>

            <PopoverContent
              variant={state.variant}
              size={state.size}
              rounded={state.rounded}
              side={state.side}
              align={state.align}
              sideOffset={+state.sideOffset}
            >
              <h4 className='mb-2 font-semibold'>{state.title}</h4>

              <p className='text-body-sm text-fg-tertiary'>
                {state.description}
              </p>

              {state.showArrow && <PopoverArrow variant={state.variant} />}
            </PopoverContent>
          </Popover>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
