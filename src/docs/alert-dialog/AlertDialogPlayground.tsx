import { useEffect, useRef, useState } from 'react';

import {
  ALERT_DIALOG_CONTROLS,
  ALERT_DIALOG_INITIAL_STATE,
} from './alertDialogConstants';
import { generateAlertDialogCode } from './generateAlertDialogCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogIcon,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/alert-dialog/AlertDialog';
import { Button } from '@/components/button/Button';

const CONFIRM_MS = 1800;

export function AlertDialogPlayground() {
  const { state, update } = usePlaygroundState(ALERT_DIALOG_INITIAL_STATE);
  const code = generateAlertDialogCode(state);

  const [running, setRunning] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const confirm = (event: React.MouseEvent) => {
    if (!state.loading) return;

    event.preventDefault();
    setRunning(true);

    timer.current = window.setTimeout(() => setRunning(false), CONFIRM_MS);
  };

  const handleOpenChange = (open: boolean) => {
    if (open) return;

    window.clearTimeout(timer.current);
    setRunning(false);
  };

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={ALERT_DIALOG_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center'>
          <AlertDialog onOpenChange={handleOpenChange}>
            <AlertDialogTrigger asChild>
              <Button variant='destructive'>Delete workspace</Button>
            </AlertDialogTrigger>

            <AlertDialogContent tone={state.tone} loading={running}>
              <AlertDialogHeader>
                <AlertDialogIcon />

                <div>
                  <AlertDialogTitle>Delete “Acme Redesign”?</AlertDialogTitle>

                  <AlertDialogDescription>
                    This removes the workspace and all 128 files inside it, for
                    everyone. It cannot be undone.
                  </AlertDialogDescription>
                </div>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <AlertDialogAction loading={running} onClick={confirm}>
                  Delete forever
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
