import { useState } from 'react';

import { DialogClose } from '@radix-ui/react-dialog';
import { DIALOG_CONTROLS, DIALOG_INITIAL_STATE } from './dialogConstants';
import { generateDialogCode } from './generateDialogCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/dialog/Dialog';
import { Button } from '../../components/button/Button';
import { CodeBlock } from '../components/CodeBlock';

export function DialogPlayground() {
  const [state, setState] = useState(DIALOG_INITIAL_STATE);

  const code = generateDialogCode(state);

  const update = (key: string, value: any) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={DIALOG_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center'>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open dialog</Button>
            </DialogTrigger>

            <DialogContent
              size={state.size}
              variant={state.variant}
              overlay={state.overlay}
              padding={state.padding}
              showCloseButton={state.showCloseButton}
            >
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>

                <DialogDescription>
                  This action cannot be undone.
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant='outline'>Cancel</Button>
                </DialogClose>

                <DialogClose asChild>
                  <Button>Continue</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
