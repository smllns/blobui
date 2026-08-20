import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { Collapsible } from '@/components/collapsible/Collapsible';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import {
  COLLAPSIBLE_CONTROLS,
  COLLAPSIBLE_COPY,
  COLLAPSIBLE_INITIAL_STATE,
} from './collapsibleConstants';
import { generateCollapsibleCode } from './generateCollapsibleCode';

export function CollapsiblePlayground() {
  const { state, update } = usePlaygroundState(COLLAPSIBLE_INITIAL_STATE);

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={COLLAPSIBLE_CONTROLS}
        />
      }
      preview={
        <div className='w-full max-w-md'>
          <Collapsible
            trigger={COLLAPSIBLE_COPY.trigger}
            triggerOpen={COLLAPSIBLE_COPY.triggerOpen}
            variant={state.variant}
            size={state.size}
            align={state.align}
            peek={state.peek}
            disabled={state.disabled}
            loading={state.loading}
            open={state.open}
            onOpenChange={(open) => update('open', open)}
          >
            {COLLAPSIBLE_COPY.body}
          </Collapsible>
        </div>
      }
      code={<CodeBlock code={generateCollapsibleCode(state)} />}
    />
  );
}
