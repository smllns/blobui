import { cn } from '@/lib/cn';
import { Alert } from '@/components/alert/Alert';
import { Card } from '@/components/card/Card';
import { LIFTS } from './home.data';
import {
  captionLabelStyles,
  codeStyles,
  ruleTextStyles,
  sectionLedeStyles,
  sectionStyles,
  subsectionTitleStyles,
} from './home.styles';

export function ElevationSection() {
  return (
    <section id='elevation' className={sectionStyles}>
      <h3 className={subsectionTitleStyles}>Elevation</h3>
      <p className={sectionLedeStyles}>
        Six levels. The middle four are two-layer shadows: a tight layer that
        draws the edge and a wide one that carries the distance. A system with
        twelve shadows has no shadows.
      </p>

      <Card padding='lg' className='mt-4'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-5'>
          {LIFTS.map(({ name, lift }) => (
            <div key={name}>
              <span
                aria-hidden='true'
                className={cn('block h-18 rounded-lg bg-surface', lift)}
              />
              <code className={cn('mt-3 block text-center', captionLabelStyles)}>
                shadow/{name}
              </code>
            </div>
          ))}
        </div>
      </Card>

      <Alert emphasis='bare' tone='info' icon={null} className='mt-5'>
        <p className={ruleTextStyles}>
          In dark mode lightness does the work, not the shadow —{' '}
          <code className={codeStyles}>bg/surface</code>,{' '}
          <code className={codeStyles}>bg/raised</code> and{' '}
          <code className={codeStyles}>bg/overlay</code> each step lighter than
          the one beneath. Switch the theme and watch these cards separate by
          colour instead of by shade.
        </p>
      </Alert>
    </section>
  );
}
