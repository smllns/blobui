import { Link } from 'react-router-dom';
import { Card } from '@/components/card/Card';
import { linkStyles, sectionStyles, sectionTitleStyles } from './home.styles';

export function NextSection() {
  return (
    <section className={sectionStyles}>
      <h2 className={sectionTitleStyles}>Where to next</h2>

      <div className='mt-6 grid gap-4 sm:grid-cols-2'>
        <Link to='/button' className={linkStyles}>
          <Card interactive padding='md'>
            <h3 className='text-body-md font-semibold text-fg'>Button →</h3>
            <p className='mt-1.5 text-body-sm text-fg-tertiary'>
              A component page: try every variant, read every prop it takes, and
              copy every file behind it.
            </p>
          </Card>
        </Link>

        <a href='#install' className={linkStyles}>
          <Card interactive padding='md'>
            <h3 className='text-body-md font-semibold text-fg'>Install →</h3>
            <p className='mt-1.5 text-body-sm text-fg-tertiary'>
              Three commands, and the note about the token layer that saves an
              hour.
            </p>
          </Card>
        </a>
      </div>
    </section>
  );
}
