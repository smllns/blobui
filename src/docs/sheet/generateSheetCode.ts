import type { SheetPlaygroundState } from './sheetConstants';

export function generateSheetCode(state: SheetPlaygroundState) {
  return `<Sheet>
  <SheetTrigger asChild>
    <Button>
      Open sheet
    </Button>
  </SheetTrigger>

  <SheetContent
    side="${state.side}"
    size="${state.size}"${
      state.showCloseButton ? '' : '\n    showCloseButton={false}'
    }${state.loading ? '\n    loading' : ''}
  >
    <SheetHeader>
      <div>
        <SheetTitle>
          Filters
        </SheetTitle>

        <SheetDescription>
          Narrow the list down. Everything applies at once.
        </SheetDescription>
      </div>
    </SheetHeader>

    <SheetBody>
      <p>
        The body scrolls, so the header and the footer stay pinned.
      </p>
    </SheetBody>

    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">
          Cancel
        </Button>
      </SheetClose>

      <Button${state.loading ? ' loading' : ''}>
        Apply
      </Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`;
}
