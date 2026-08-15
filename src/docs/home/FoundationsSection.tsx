import { ColourSection } from './ColourSection';
import { ElevationSection } from './ElevationSection';
import { SpaceSection } from './SpaceSection';
import { TypeSection } from './TypeSection';
import { useTokenReadings } from './useTokenReadings';
import {
  sectionLedeStyles,
  sectionStyles,
  sectionTitleStyles,
} from './home.styles';

export function FoundationsSection() {
  const { probeRef, readings } = useTokenReadings();

  return (
    <>
      <section id='foundations' className={sectionStyles}>
        <h2 className={sectionTitleStyles}>Foundations</h2>
        <p className={sectionLedeStyles}>
          Four scales and a mirror table. Everything below is measured off a
          live element as this page renders, so it is the system rather than a
          picture of it — change a token and this section changes with it.
        </p>
        <div
          ref={probeRef}
          aria-hidden='true'
          className='pointer-events-none invisible absolute'
        />
      </section>

      <ColourSection roles={readings.roles} />
      <TypeSection type={readings.type} />
      <SpaceSection space={readings.space} />
      <ElevationSection />
    </>
  );
}
