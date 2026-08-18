import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/button/Button';
import { ChevronDown } from '@/ui/icons/ChevronDown';
import { cn } from '@/lib/cn';
import type { StateSpecimen } from './docsPage.types';

type StateMatrixProps = {
  specimens: StateSpecimen[];
};

/* How much of the table stays on screen while collapsed: the header and the
   first rows, cut mid-row so the fade reads as "there is more", not as the
   end of the table. */
const PEEK = '15rem';

/* The most rows the peek window can show — thin specimens like Progress fit
   four, tall ones fit two. Rows past this are inert while collapsed: the cut
   rows stay real DOM under `overflow: hidden`, which does not take them out of
   the tab order, so without this Tab would walk into specimens nobody can see.
   The count errs high rather than exact, because inert on a VISIBLE row would
   kill the hover the notes invite, which is worse than a hidden tab stop or
   two on the tall pages. A table this short or shorter never collapses. */
const PEEK_ROWS = 4;

/* Only the states the component can actually be in — the same table idiom as
   PropsTable, so the two read as one system. A state that does not exist is
   not a row: the source matrix in *States.tsx still lists it with its reason,
   which is the record that keeps "cannot exist" distinguishable from "forgot",
   but the page shows components, not absences.

   A long table collapses to a peek with the trigger sitting on the cut itself
   (the CodeBlock mechanic): the section leads with real specimens, and one
   press opens the rest in place. */
export function StateMatrix({ specimens }: StateMatrixProps) {
  const shown = specimens.filter((specimen) => specimen.node != null);
  const count = shown.length;
  const collapsible = count > PEEK_ROWS;

  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(PEEK);
  const clipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!clipRef.current || !collapsible) return;

    setHeight(open ? `${clipRef.current.scrollHeight}px` : PEEK);
  }, [open, collapsible]);

  return (
    <section className='space-y-4'>
      <h2 className='text-heading-lg pb-2 text-fg'>
        States{' '}
        <span className='font-normal text-fg-tertiary'>({count})</span>
      </h2>

      <div>
        <div
          ref={clipRef}
          style={{ maxHeight: collapsible ? height : undefined }}
          /* [contain:paint] makes this box the containing block for the
             fixed-position panels Radix draws (popover, tooltip, menu — used
             with portal={false} in their specimens). Without it a hidden row's
             trigger is clipped away while its panel, positioned against the
             viewport, keeps painting over whatever section is below. */
          className='relative overflow-hidden transition-[max-height] duration-(--duration-fast) ease-out [contain:paint]'
        >
          <div className='overflow-x-auto rounded-xl border border-border-subtle'>
            <table className='w-full text-body-sm'>
              <thead className='bg-sunken text-fg-secondary'>
                <tr>
                  <th className='p-3 text-start font-medium'>State</th>
                  <th className='p-3 text-start font-medium'>Preview</th>
                  <th className='p-3 text-start font-medium'>Notes</th>
                </tr>
              </thead>

              <tbody className='bg-surface'>
                {shown.map((specimen, index) => (
                  <tr
                    key={specimen.name}
                    inert={collapsible && !open && index >= PEEK_ROWS}
                    className='border-t border-border-subtle'
                  >
                    <td className='w-32 p-3 align-middle font-medium whitespace-nowrap text-fg'>
                      {specimen.name}
                    </td>

                    <td className='min-w-64 p-3 align-middle'>
                      {specimen.node}
                    </td>

                    <td className='p-3 align-middle text-fg-tertiary'>
                      {specimen.note || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {collapsible && !open && (
            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-canvas to-transparent' />
          )}
        </div>

        {collapsible && (
          <div
            className={cn(
              'relative z-1 flex justify-center',
              open ? 'mt-4' : '-mt-4',
            )}
          >
            <Button
              variant='secondary'
              size='xs'
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              className='shadow-md'
              leftIcon={
                <ChevronDown
                  className={cn(
                    'transition-transform duration-(--duration-fast) ease-out',
                    open && 'rotate-180',
                  )}
                />
              }
            >
              {open ? 'Show fewer' : `Show all ${count} states`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
