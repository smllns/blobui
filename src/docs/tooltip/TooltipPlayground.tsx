import { TOOLTIP_CONTROLS, TOOLTIP_INITIAL_STATE } from './tooltipConstants';
import { generateTooltipCode } from './generateTooltipCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { Tooltip } from '../../components/tooltip/Tooltip';
import { Button } from '../../components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { usePlaygroundState } from '../../hooks/usePlaygroundState';

export function TooltipPlayground() {
  const { state, update } = usePlaygroundState(TOOLTIP_INITIAL_STATE);
  const code = generateTooltipCode(state);
  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={TOOLTIP_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center p-20'>
          <Tooltip
            content={state.content}
            variant={state.variant}
            size={state.size}
            side={state.side}
            align={state.align}
            startIcon={state.startIcon ? <span>💖</span> : undefined}
            endIcon={state.endIcon ? <span>✨</span> : undefined}
          >
            <Button>Hover me</Button>
          </Tooltip>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
