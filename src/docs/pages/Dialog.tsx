import { DocsPage } from '../components/DocsPage';
import { Button } from '../../components/button/Button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../../components/dialog/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import { DialogPlayground } from '../components/playground/DialogPlayground';
import { dialogProps } from '../../lib/dialogProps';
const dialogs = [
  {
    label: 'Open small dialog',
    size: 'sm',
    overlay: 'light',
    variant: 'default',
  },
  {
    label: 'Open large dialog',
    size: 'lg',
    variant: 'outline',
    overlay: 'dark',
  },
] as const;

export function DialogDocs() {
  return (
    <DocsPage
      header='Dialog'
      description='Dialogs are used to display important information or request user actions.'
      preview={
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
      }
      playground={<DialogPlayground />}
      props={dialogProps}
    />
  );
}
