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
      <h2 className='text-heading-lg pb-4 text-fg'>Playground</h2>
      <div className='flex flex-col gap-2 rounded-xl border border-border-subtle bg-surface p-6'>
        <div className='grid gap-6 p-6 md:grid-cols-2'>
          <div className='flex flex-col gap-4'>{controls}</div>
          <div className='flex items-center justify-center rounded-lg border border-dashed border-border bg-sunken p-6'>
            {preview}
          </div>
        </div>
        {code}
      </div>
    </section>
  );
}
