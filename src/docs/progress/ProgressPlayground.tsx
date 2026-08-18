import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { Progress } from '@/components/progress/Progress';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import {
  PROGRESS_CONTROLS,
  PROGRESS_INITIAL_STATE,
  PROGRESS_LABEL,
} from './progressConstants';
import { generateProgressCode } from './generateProgressCode';

export function ProgressPlayground() {
  const { state, update } = usePlaygroundState(PROGRESS_INITIAL_STATE);

  const controls = PROGRESS_CONTROLS.filter(
    (control) => control.key !== 'value' || !state.indeterminate,
  );

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer state={state} update={update} controls={controls} />
      }
      preview={
        <div className='w-full max-w-md'>
          <Progress
            value={state.indeterminate ? undefined : Number(state.value)}
            indeterminate={state.indeterminate}
            size={state.size}
            tone={state.tone}
            disabled={state.disabled}
            aria-label={PROGRESS_LABEL}
          />
        </div>
      }
      code={<CodeBlock code={generateProgressCode(state)} />}
    />
  );
}
