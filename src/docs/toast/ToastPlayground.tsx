import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { TOAST_CONTROLS, TOAST_INITIAL_STATE } from './toastConstants';
import { generateToastCode } from './generateToastCode';
import { Toast } from '../../components/toast/Toast';
import { Button } from '../../components/button/Button';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';

export function ToastPlayground() {
  const { state, update } = usePlaygroundState(TOAST_INITIAL_STATE);
  const code = generateToastCode(state);
  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={TOAST_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center '>
          <Toast
            tone={state.tone}
            size={state.size}
            title={state.title}
            icon={state.icon ? undefined : null}
            description={
              state.description ? 'This is a toast message' : undefined
            }
            action={
              state.action || state.showClose ? (
                <div className='flex gap-2'>
                  {state.action && (
                    <Button size='xs' variant='secondary'>
                      Undo
                    </Button>
                  )}

                  {state.showClose && (
                    <Button
                      size='xs'
                      variant='ghost'
                      className='font-extrabold shrink-0'
                      aria-label='Dismiss'
                    >
                      ✕
                    </Button>
                  )}
                </div>
              ) : undefined
            }
          />
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
