import { useRef } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { specimenStyles, stageStyles } from './componentPreview.styles';

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
  const stageRef = useRef<HTMLDivElement>(null);
  return (
    <section className='space-y-4'>
      <h2 className='text-heading-lg pb-2 text-fg'>The range</h2>

      <div ref={stageRef} className={cn(stageStyles, className)}>
        <div
          className={cn(
            specimenStyles,
            'w-full',
            name === 'biggerGap' ? 'gap-8' : 'gap-4',
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
