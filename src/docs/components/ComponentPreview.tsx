import type { ReactNode } from 'react';

type ComponentPreviewProps = {
  children: ReactNode;
  className?: string;
  name?: string;
};

export function ComponentPreview({
  children,
  className,
  name,
}: ComponentPreviewProps) {
  return (
    <section className='space-y-4'>
      <h2 className='text-xl font-semibold pb-2'>Preview</h2>

      <div
        className={`
          rounded-xl border border-neutral-200
          bg-olive-400/10 p-8
          ${className ?? ''}
        `}
      >
        <div
          className={`flex flex-wrap justify-center ${name === 'biggerGap' ? 'gap-8' : 'gap-4'}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
