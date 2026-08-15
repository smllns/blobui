import {
  BUTTON_GROUP_CONTROLS,
  BUTTON_GROUP_INITIAL_STATE,
} from './buttonGroupConstants';
import { generateButtonGroupCode } from './generateButtonGroupCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { ButtonGroup } from '@/components/button-group/ButtonGroup';
import { Button } from '@/components/button/Button';
import { CodeBlock } from '../components/CodeBlock';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';

const MEMBERS = ['Copy link', 'Download', 'Share'];

export function ButtonGroupPlayground() {
  const { state, update } = usePlaygroundState(BUTTON_GROUP_INITIAL_STATE);
  const code = generateButtonGroupCode(state);

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={BUTTON_GROUP_CONTROLS}
        />
      }
      preview={
        <div className='flex w-full items-center justify-center'>
          <ButtonGroup
            aria-label='Export'
            orientation={state.orientation}
            gap={state.gap}
            role={state.role}
            block={state.block}
            disabled={state.disabled}
            loading={state.loading}
          >
            {MEMBERS.map((label, index) => (
              <Button
                key={label}
                variant={state.variant}
                size={state.size}
                loading={state.loading && index === 0}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
