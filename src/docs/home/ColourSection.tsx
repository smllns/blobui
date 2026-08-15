import { cn } from '@/lib/cn';
import type { RoleReading } from './useTokenReadings';
import {
  cardStyles,
  codeStyles,
  ruleStyles,
  ruleTextStyles,
  sectionLedeStyles,
  sectionStyles,
  subsectionTitleStyles,
  tokenValueStyles,
} from './home.styles';

type Props = {
  roles: RoleReading[];
};

export function ColourSection({ roles }: Props) {
  return (
    <section id='colour' className={sectionStyles}>
      <h3 className={subsectionTitleStyles}>Colour</h3>
      <p className={sectionLedeStyles}>
        Twenty-two families on a 25–950 scale, and no component ever names one.
        Components read <em>roles</em>, and a role points somewhere different in
        each theme. That indirection is the whole trick: the palette never
        inverts, the mirror table does.
      </p>

      <div className={cardStyles}>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] gap-x-5 gap-y-4'>
          {roles.map(({ name, swatch, value }) => (
            <div key={name} className='flex items-center gap-3'>
              <span
                aria-hidden='true'
                className={cn(
                  'size-8 shrink-0 rounded-sm border border-border-subtle',
                  swatch,
                )}
              />

              <span className='min-w-0'>
                <span className='block font-mono text-body-sm text-fg'>
                  {name}
                </span>
                <span className={cn('block truncate', tokenValueStyles)}>
                  {value}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={ruleStyles}>
        <p className={ruleTextStyles}>
          Flip the theme in the sidebar and watch the swatches move while the
          names stay put. <code className={codeStyles}>gray/900</code> is dark
          in both themes — what changes is that{' '}
          <code className={codeStyles}>bg/canvas</code> stops pointing at white
          and starts pointing at <code className={codeStyles}>surface/950</code>
          .
        </p>
      </div>
    </section>
  );
}
