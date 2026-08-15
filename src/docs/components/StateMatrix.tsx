import type { StateSpecimen } from './docsPage.types';

type StateMatrixProps = {
  specimens: StateSpecimen[];
};

export function StateMatrix({ specimens }: StateMatrixProps) {
  return (
    <section className='space-y-4'>
      <h2 className='text-heading-lg pb-2 text-fg'>States</h2>

      <div className='overflow-hidden rounded-xl border border-border-subtle'>
        {specimens.map((specimen) => (
          <div
            key={specimen.name}
            className='grid grid-cols-[7rem_1fr] items-center gap-6 border-t border-border-subtle px-6 py-5 first:border-t-0 odd:bg-sunken'
          >
            <code className='font-mono text-caption text-fg-tertiary'>
              {specimen.name}
            </code>

            <div className='flex flex-wrap items-center gap-4'>
              {specimen.node}

              {specimen.note && (
                <span className='text-body-sm text-fg-placeholder'>
                  {specimen.note}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
