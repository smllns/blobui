export function generateDialogCode(state: {
  size: string;
  variant: string;
  overlay: string;
  showCloseButton: boolean;
}) {
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
