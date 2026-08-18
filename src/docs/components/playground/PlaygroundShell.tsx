import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { specimenStyles, stageStyles } from '../componentPreview.styles';

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
    <section className='flex flex-col gap-4'>
      <h2 className='text-heading-lg text-fg'>Try it</h2>

      <div className='grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]'>
        <div className={stageStyles}>
          <div className={cn(specimenStyles, 'w-full')}>{preview}</div>
        </div>

        <aside className='flex flex-col gap-5 rounded-2xl border border-border-subtle bg-surface p-6'>
          {controls}
        </aside>
      </div>

      {code}
    </section>
  );
}
