import { SHEET_CONTROLS, SHEET_INITIAL_STATE } from './sheetConstants';
import { generateSheetCode } from './generateSheetCode';
import { PlaygroundShell } from '../components/playground/PlaygroundShell';
import { ControlsRenderer } from '../components/playground/controls/ControlsRenderer';
import { CodeBlock } from '../components/CodeBlock';
import { usePlaygroundState } from '@/hooks/usePlaygroundState';

import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet/Sheet';
import { Button } from '@/components/button/Button';

export function SheetPlayground() {
  const { state, update } = usePlaygroundState(SHEET_INITIAL_STATE);
  const code = generateSheetCode(state);

  return (
    <PlaygroundShell
      controls={
        <ControlsRenderer
          state={state}
          update={update}
          controls={SHEET_CONTROLS}
        />
      }
      preview={
        <div className='flex items-center justify-center'>
          <Sheet>
            <SheetTrigger asChild>
              <Button>Open sheet</Button>
            </SheetTrigger>

            <SheetContent
              side={state.side}
              size={state.size}
              showCloseButton={state.showCloseButton}
              loading={state.loading}
            >
              <SheetHeader>
                <div>
                  <SheetTitle>Filters</SheetTitle>

                  <SheetDescription>
                    Narrow the list down. Everything applies at once.
                  </SheetDescription>
                </div>
              </SheetHeader>

              <SheetBody>
                <p>
                  The body scrolls, so the header and the footer stay pinned. On
                  a top or bottom sheet the grabber can be dragged past a quarter
                  of the panel to dismiss it — or pressed, which does the same
                  from the keyboard.
                </p>
              </SheetBody>

              <SheetFooter>
                <SheetClose asChild>
                  <Button variant='outline'>Cancel</Button>
                </SheetClose>

                <Button loading={state.loading}>Apply</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      }
      code={<CodeBlock code={code} />}
    />
  );
}
