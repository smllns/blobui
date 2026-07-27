import { DocsPage } from '../components/DocsPage';
import { Button } from '../../components/button/Button';
import { DialogClose } from '@radix-ui/react-dialog';
import { DialogPlayground } from './DialogPlayground';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/dialog/Dialog';
import { componentProps } from '../../lib/props';
import { dialogs } from './dialog.data';

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
      props={componentProps.dialog.root}
      subElementHeader='Dialog Content'
      subElementProps={componentProps.dialog.item}
    />
  );
}
