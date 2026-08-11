import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { TOAST_CONTROLS, TOAST_INITIAL_STATE } from './toastConstants';
import { generateToastCode } from './generateToastCode';
import { Button } from '@/components/button/Button';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';
import { useToast } from '@/hooks/useToast';
import { ToastContainer } from '@/components/toast/ToastContainer';
import { Reply } from '@/ui/icons/Reply';

export function ToastPlayground() {
  const { state, update } = usePlaygroundState(TOAST_INITIAL_STATE);
  const { toasts, showToast, dismissToast } = useToast();

  const code = generateToastCode(state);

  const handleShowToast = () => {
    showToast({
      tone: state.tone,
      size: state.size,
      title: state.title,
      description: state.description ? 'This is a toast message' : undefined,
      icon: state.icon ? undefined : null,
      action: state.action ? (
        <Button size='md' variant='ghost' className='font-extrabold shrink-0'>
          <Reply />
        </Button>
      ) : undefined,
      showClose: state.showClose,
      duration: state.duration,
    });
  };

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
        <>
          <Button size='sm' variant='primary' onClick={handleShowToast}>
            Show toast
          </Button>

          <ToastContainer toasts={toasts} onClose={dismissToast} />
        </>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
