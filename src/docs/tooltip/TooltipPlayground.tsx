import { TOOLTIP_CONTROLS, TOOLTIP_INITIAL_STATE } from './tooltipConstants';
import { generateTooltipCode } from './generateTooltipCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { Tooltip } from '../../components/tooltip/Tooltip';
import { Button } from '../../components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import { Sun } from '@/ui/icons/Sun';
import { Moon } from '@/ui/icons/Moon';

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
            startIcon={
              state.startIcon ? (
                <Sun className='text-orange-400  h-4 w-4 ' />
              ) : undefined
            }
            endIcon={
              state.endIcon ? (
                <Moon className='text-sky-400  h-4 w-4 ' />
              ) : undefined
            }
          >
            <Button>Hover me</Button>
          </Tooltip>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
