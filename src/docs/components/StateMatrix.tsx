import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/button/Button';
import { ChevronDown } from '@/ui/icons/ChevronDown';
import { cn } from '@/lib/cn';
import { stateSpecimenStyles } from './componentPreview.styles';
import type { StateSpecimen } from './docsPage.types';

type StateMatrixProps = {
  specimens: StateSpecimen[];
};

const PEEK = '15rem';

const PEEK_ROWS = 4;

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
        States <span className='font-normal text-fg-tertiary'>({count})</span>
      </h2>

      <div>
        <div
          ref={clipRef}
          style={{ maxHeight: collapsible ? height : undefined }}
          className='relative overflow-hidden transition-[max-height] duration-(--duration-fast) ease-out contain-[paint]'
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
                      <div className={stateSpecimenStyles}>{specimen.node}</div>
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
