import { cn } from '@/lib/cn';
import { RADII } from './home.data';
import type { SpaceReading } from './useTokenReadings';
import {
  captionLabelStyles,
  cardStyles,
  sectionLedeStyles,
  sectionStyles,
  subsectionTitleStyles,
  tokenNameStyles,
  tokenValueStyles,
} from './home.styles';

type Props = {
  space: SpaceReading[];
};

export function SpaceSection({ space }: Props) {
  return (
    <section id='space' className={sectionStyles}>
      <h3 className={subsectionTitleStyles}>Space &amp; radius</h3>
      <p className={sectionLedeStyles}>
        Sixteen spacing steps, fine-grained at the bottom where the difference
        between 6 and 8 inside a control is visible, and coarse at the top where
        the difference between 64 and 80 between sections is not. Eight radii,
        and the rule that matters: a corner nested inside another corner is one
        step smaller.
      </p>

      <div className={cardStyles}>
        <div className='flex flex-col gap-2'>
          {space.map(({ name, value, ratio }) => (
            <div
              key={name}
              className='grid grid-cols-[6rem_4rem_minmax(0,1fr)] items-center gap-3'
            >
              <code className={tokenNameStyles}>{name}</code>
              <span className={tokenValueStyles}>{value}</span>
              <span
                aria-hidden='true'
                className='block h-3 rounded-xs bg-primary'
                style={{ width: `${Math.max(ratio * 100, 0.4)}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={cardStyles}>
        <div className='flex flex-wrap gap-5'>
          {RADII.map(({ name, corner }) => (
            <div key={name}>
              <span
                aria-hidden='true'
                className={cn(
                  'block h-12 w-20 border border-primary-border bg-primary-muted',
                  corner,
                )}
              />
              <code
                className={cn('mt-2 block text-center', captionLabelStyles)}
              >
                radius/{name}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
