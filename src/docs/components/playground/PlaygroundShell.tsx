import type { ReactNode } from 'react';

type PlaygroundShellProps = {
  controls: ReactNode;
  preview: ReactNode;
  code: ReactNode;
};

export function PlaygroundShell({
  controls,
  preview,
  code,
}: PlaygroundShellProps) {
  return (
    <section className='space-y-4'>
      <h2 className='text-xl font-semibold pb-4'>Playground</h2>

      <div className='flex flex-col gap-2 rounded-xl border border-neutral-200 bg-olive-400/10 p-6'>
        <div className='grid grid-cols-2 gap-6 p-6'>
          <div className='flex flex-col gap-4'>{controls}</div>
          <div className='flex items-center justify-center rounded-lg border border-dashed border-neutral-200 bg-olive-400/30 p-6'>
            {preview}
          </div>
        </div>
        {code}
      </div>
    </section>
  );
}
