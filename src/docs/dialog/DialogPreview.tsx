import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog/Dialog';
import { dialogs } from './dialog.data';
import { Button } from '@/components/button/Button';

const DialogPreview = () => {
  return (
    <>
      {dialogs.map(({ label, size, overlay, variant }) => (
        <Dialog key={label}>
          <DialogTrigger asChild>
            <Button>{label}</Button>
          </DialogTrigger>

          <DialogContent size={size} overlay={overlay} variant={variant}>
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
      ))}
    </>
  );
};

export default DialogPreview;
