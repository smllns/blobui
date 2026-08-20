import { useState } from 'react';

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
import { tones } from './alertDialog.data';

function LoadingSpecimen() {
  const [open, setOpen] = useState(false);
  const [running, setRunning] = useState(false);

  const confirm = (event: React.MouseEvent) => {
    event.preventDefault();
    setRunning(true);

    window.setTimeout(() => {
      setRunning(false);
      setOpen(false);
    }, 1800);
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={(next) => {
        if (running) return;
        setOpen(next);
      }}
    >
      <AlertDialogTrigger asChild>
        <Button variant='destructive'>Revoke API keys</Button>
      </AlertDialogTrigger>

      <AlertDialogContent loading={running}>
        <AlertDialogHeader>
          <AlertDialogIcon />

          <div>
            <AlertDialogTitle>Revoke all API keys?</AlertDialogTitle>

            <AlertDialogDescription>
              Every integration using them stops working immediately. Press
              confirm and watch both buttons go inert.
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction loading={running} onClick={confirm}>
            Revoke keys
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

const AlertDialogPreview = () => (
  <>
    {tones.map((specimen) => (
      <AlertDialog key={specimen.tone}>
        <AlertDialogTrigger asChild>
          <Button variant={specimen.variant}>{specimen.trigger}</Button>
        </AlertDialogTrigger>

        <AlertDialogContent tone={specimen.tone}>
          <AlertDialogHeader>
            <AlertDialogIcon />

            <div>
              <AlertDialogTitle>{specimen.title}</AlertDialogTitle>

              <AlertDialogDescription>
                {specimen.description}
              </AlertDialogDescription>
            </div>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>{specimen.cancel}</AlertDialogCancel>

            <AlertDialogAction>{specimen.confirm}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ))}

    <LoadingSpecimen />
  </>
);

export default AlertDialogPreview;
