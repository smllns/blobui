import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { Empty } from '@/components/empty/Empty';
import { Button } from '@/components/button/Button';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import { EMPTY_CONTROLS, EMPTY_INITIAL_STATE } from './emptyConstants';
import { generateEmptyCode } from './generateEmptyCode';
import { ACTION_ICONS } from './emptyPreview';
import { EMPTY_COPY } from './empty.data';

export function EmptyPlayground() {
  const { state, update } = usePlaygroundState(EMPTY_INITIAL_STATE);
  const copy = EMPTY_COPY[state.state];

  const ActionIcon = copy.actionIcon
    ? ACTION_ICONS[copy.actionIcon]
    : undefined;
  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={EMPTY_CONTROLS}
        />
      }
      preview={
        <div className='w-full max-w-lg'>
          <Empty
            state={state.state}
            size={state.size}
            variant={state.variant}
            title={copy.title}
            icon={state.icon ? undefined : null}
            actions={
              state.action ? (
                <Button
                  variant={copy.actionVariant}
                  leftIcon={ActionIcon ? <ActionIcon /> : undefined}
                >
                  {copy.actionLabel}
                </Button>
              ) : undefined
            }
          >
            {state.text ? copy.text : undefined}
          </Empty>
        </div>
      }
      code={<CodeBlock code={generateEmptyCode(state)} />}
    />
  );
}
