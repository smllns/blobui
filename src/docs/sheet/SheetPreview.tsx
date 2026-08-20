import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/sheet/Sheet';
import { Button } from '@/components/button/Button';
import { sides } from './sheet.data';

const SheetPreview = () => (
  <>
    {sides.map(({ side, label, note }) => (
      <Sheet key={side}>
        <SheetTrigger asChild>
          <Button variant='secondary'>{label}</Button>
        </SheetTrigger>

        <SheetContent side={side}>
          <SheetHeader>
            <div>
              <SheetTitle>{label} sheet</SheetTitle>

              <SheetDescription>{note}</SheetDescription>
            </div>
          </SheetHeader>

          <SheetBody>
            <p>
              The body is the scroll container, so the header and the footer
              stay pinned and the panel keeps its radius over whatever is
              inside.
            </p>
          </SheetBody>

          <SheetFooter>
            <SheetClose asChild>
              <Button variant='outline'>Cancel</Button>
            </SheetClose>

            <SheetClose asChild>
              <Button>Save</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ))}
  </>
);

export default SheetPreview;
