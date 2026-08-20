import { cn } from '@/lib/cn';
import { Segmented } from '@/components/segmented/Segmented';
import { ACCENTS, useTheme, type Accent, type Theme } from '@/hooks/useTheme';

const THEMES = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

const swatch: Record<Accent, string> = {
  brand: 'bg-sky-600',
  violet: 'bg-violet-600',
  teal: 'bg-teal-600',
  orange: 'bg-orange-400',
};

export function ThemeControls() {
  const { theme, accent, setTheme, setAccent } = useTheme();

  return (
    <div className='flex flex-col gap-3'>
      <p className='text-micro uppercase text-fg-tertiary'>Theme</p>

      <Segmented
        aria-label='Theme'
        size='sm'
        block
        items={THEMES}
        value={theme}
        onValueChange={(value) => setTheme(value as Theme)}
      />

      <p className='text-micro uppercase text-fg-tertiary'>Accent</p>

      <div className='flex gap-2'>
        {ACCENTS.map((option) => (
          <button
            key={option}
            type='button'
            aria-label={option}
            aria-pressed={accent === option}
            onClick={() => setAccent(option)}
            className={cn(
              'size-6 rounded-full cursor-pointer',
              'transition-shadow duration-(--duration-fast) ease-out',
              'focus-visible:focus-ring',
              swatch[option],
              accent === option &&
                'shadow-[0_0_0_2px_var(--bg-surface),0_0_0_4px_var(--border-focus)]',
            )}
          />
        ))}
      </div>
    </div>
  );
}
