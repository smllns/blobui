import type { AlertDialogPlaygroundState } from './alertDialogConstants';

function loadingSnippet(tone: string) {
  return `const [open, setOpen] = useState(false)
const [running, setRunning] = useState(false)

<AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">
      Delete workspace
    </Button>
  </AlertDialogTrigger>

  <AlertDialogContent tone="${tone}" loading={running}>
    <AlertDialogHeader>
      <AlertDialogIcon />

      <div>
        <AlertDialogTitle>
          Delete “Acme Redesign”?
        </AlertDialogTitle>

        <AlertDialogDescription>
          This removes the workspace and all 128 files inside it, for
          everyone. It cannot be undone.
        </AlertDialogDescription>
      </div>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel>
        Cancel
      </AlertDialogCancel>

      <AlertDialogAction
        loading={running}
        onClick={(event) => {
          // Radix closes on click, and the dialog has to stay
          // open while the work runs.
          event.preventDefault()
          setRunning(true)

          deleteWorkspace().finally(() => {
            setRunning(false)
            setOpen(false)
          })
        }}
      >
        Delete forever
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`;
}

export function generateAlertDialogCode(state: AlertDialogPlaygroundState) {
  if (state.loading) return loadingSnippet(state.tone);

  return `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">
      Delete workspace
    </Button>
  </AlertDialogTrigger>

  <AlertDialogContent tone="${state.tone}">
    <AlertDialogHeader>
      <AlertDialogIcon />

      <div>
        <AlertDialogTitle>
          Delete “Acme Redesign”?
        </AlertDialogTitle>

        <AlertDialogDescription>
          This removes the workspace and all 128 files inside it, for
          everyone. It cannot be undone.
        </AlertDialogDescription>
      </div>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel>
        Cancel
      </AlertDialogCancel>

      <AlertDialogAction>
        Delete forever
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`;
}
