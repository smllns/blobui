import { FoundationsSection } from '../home/FoundationsSection';
import { Hero } from '../home/Hero';
import { InstallSection } from '../home/InstallSection';
import { NextSection } from '../home/NextSection';

export function Home() {
  return (
    <div className='mx-auto w-full max-w-5xl pb-14'>
      <Hero />
      <InstallSection />
      <FoundationsSection />
      <NextSection />
    </div>
  );
}
