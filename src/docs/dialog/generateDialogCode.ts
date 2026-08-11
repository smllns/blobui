import type { DialogPlaygroundState } from './dialogConstants';

export function generateDialogCode(state: DialogPlaygroundState) {
  return `<Dialog>
  <DialogTrigger asChild>
    <Button>
      Open dialog
    </Button>
  </DialogTrigger>

  <DialogContent
    size="${state.size}"
    variant="${state.variant}"
    overlay="${state.overlay}"${
      state.showCloseButton ? '' : '\n    showCloseButton={false}'
    }
  >
    <DialogHeader>
      <DialogTitle>
        Are you sure?
      </DialogTitle>

      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>

    <DialogBody>
      <p>
       This is the main content of the dialog. You can put text,
       forms, inputs, or any other content here.
       </p>
     </DialogBody>

    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">
          Cancel
        </Button>
      </DialogClose>

      <DialogClose asChild>
        <Button>
          Continue
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`;
}
