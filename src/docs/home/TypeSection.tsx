import { cn } from '@/lib/cn';
import { Card } from '@/components/card/Card';
import type { TypeReading } from './useTokenReadings';
import {
  sectionLedeStyles,
  sectionStyles,
  subsectionTitleStyles,
  tokenNameStyles,
  tokenValueStyles,
} from './home.styles';

type Props = {
  type: TypeReading[];
};

export function TypeSection({ type }: Props) {
  return (
    <section id='type' className={sectionStyles}>
      <h3 className={subsectionTitleStyles}>Typography</h3>
      <p className={sectionLedeStyles}>
        One family, twelve steps, five breakpoints. Display sizes grow with the
        viewport, body sizes barely move — reading distance does not change when
        a window does.
      </p>

      <Card padding='lg' className='mt-4'>
        <div className='flex flex-col gap-4'>
          {type.map(({ name, sample, size, leading }) => (
            <div
              key={name}
              className='grid gap-1 md:grid-cols-[9rem_9rem_minmax(0,1fr)] md:items-baseline md:gap-4'
            >
              <code className={tokenNameStyles}>{name}</code>
              <span className={tokenValueStyles}>
                {leading === '—'
                  ? `${size} · size only`
                  : `${size} / ${leading}`}
              </span>
              <span className={cn('truncate text-fg', sample)}>
                Sphinx of black quartz
              </span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
