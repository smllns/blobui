import { useState } from 'react';
import { Avatar } from '@/components/avatar/Avatar';
import { Badge } from '@/components/badge/Badge';
import { Button } from '@/components/button/Button';
import { Checkbox } from '@/components/checkbox/CheckBox';
import { Input } from '@/components/input/Input';
import { InputGroup } from '@/components/input-group/InputGroup';
import { Switch } from '@/components/switch/Switch';
import { INSTALL_COMMAND, STATS } from './home.data';

function jumpTo(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({
    behavior: reduced ? 'auto' : 'smooth',
    block: 'start',
  });
}

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND);

    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <header id='overview'>
      <p className='font-mono text-micro uppercase text-fg-tertiary'>
        Open source · MIT · React + Tailwind v4
      </p>

      <h1 className='mt-4 max-w-[18ch] text-balance text-display-2xl text-fg'>
        A component library you own the source of.
      </h1>

      <p className='mt-5 max-w-prose text-body-lg text-fg-secondary'>
        One command copies real, typed files into your repository, and they stop
        being ours. There is no package to upgrade and nothing to eject from.
        Every colour in them reads a semantic role — never a palette step —
        which is what lets the switch in the sidebar re-ink this whole page
        without a single component changing.
      </p>

      <div className='mt-8 flex flex-wrap items-center gap-4'>
        <Button size='lg' onClick={() => jumpTo('install')}>
          Start here
        </Button>

        <InputGroup
          className='w-104 max-w-full font-mono'
          aria-label='Install command'
          value={INSTALL_COMMAND}
          readOnly
          leading='$'
          trailing={
            <Button variant='ghost' size='sm' onClick={handleCopy}>
              {copied ? 'Copied' : 'Copy'}
            </Button>
          }
        />
      </div>

      <div className='mt-10 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-border-subtle bg-surface px-6 py-8'>
        <Button>Save changes</Button>
        <Button variant='secondary'>Cancel</Button>
        <Button variant='soft' size='sm'>
          Soft
        </Button>

        <Badge tone='success'>Active</Badge>
        <Badge tone='warning'>Pending</Badge>

        <Avatar fallback='NP' />

        <Checkbox defaultChecked aria-label='Checked' />
        <Switch defaultChecked aria-label='On' />

        <Input
          className='w-56'
          placeholder='name@company.com'
          aria-label='Email'
        />
      </div>

      <dl className='mt-10 grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] gap-x-6 gap-y-8'>
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <dt className='tabular text-heading-lg text-fg'>{value}</dt>
            <dd className='mt-1 text-body-sm text-fg-tertiary'>{label}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
