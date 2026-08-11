import { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

type Theme = 'light' | 'dark';

const ACCENTS = ['brand', 'violet', 'teal', 'orange'];
type Accent = (typeof ACCENTS)[number];

const swatch: Record<Accent, string> = {
  brand: 'bg-sky-600',
  violet: 'bg-violet-600',
  teal: 'bg-teal-600',
  orange: 'bg-orange-400',
};

export function ThemeControls() {
  const [theme, setTheme] = useState<Theme>('light');
  const [accent, setAccent] = useState<Accent>('brand');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (accent === 'brand') {
      delete document.documentElement.dataset.accent;
    } else {
      document.documentElement.dataset.accent = accent;
    }
  }, [accent]);

  return (
    <div className='flex flex-col gap-3'>
      <p className='text-micro uppercase text-fg-tertiary'>Theme</p>

      <div className='flex gap-1 rounded-lg border border-border-subtle bg-sunken p-1'>
        {(['light', 'dark'] as Theme[]).map((option) => (
          <button
            key={option}
            type='button'
            onClick={() => setTheme(option)}
            className={cn(
              'flex-1 rounded-md px-2 py-1 text-body-sm capitalize cursor-pointer',
              'transition-colors duration-(--duration-fast) ease-out',
              'focus-visible:focus-ring',
              theme === option
                ? 'bg-surface text-fg shadow-xs'
                : 'text-fg-tertiary hover:text-fg',
            )}
          >
            {option}
          </button>
        ))}
      </div>

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
