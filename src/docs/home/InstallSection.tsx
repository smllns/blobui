import type { ReactNode } from 'react';
import { REGISTRY_OUTPUT } from './home.data';
import {
  codeStyles,
  ruleStyles,
  ruleTextStyles,
  sectionLedeStyles,
  sectionStyles,
  sectionTitleStyles,
  terminalMutedStyles,
  terminalStyles,
} from './home.styles';

type StepProps = {
  index: number;
  title: string;
  children: ReactNode;
};

function Step({ index, title, children }: StepProps) {
  return (
    <div className='grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-t border-border-subtle pt-5'>
      <span className='grid size-8 place-items-center rounded-full bg-primary-muted font-mono text-body-sm font-medium text-primary-fg'>
        {index}
      </span>

      <div>
        <h3 className='text-body-md font-semibold text-fg'>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export function InstallSection() {
  return (
    <section id='install' className={sectionStyles}>
      <h2 className={sectionTitleStyles}>Install</h2>
      <p className={sectionLedeStyles}>
        Three commands. The first one is the only one you run once.
      </p>

      <div className='mt-6 grid gap-5'>
        <Step index={1} title='Point the CLI at your folders'>
          <p className='my-3 max-w-prose text-body-md text-fg-secondary'>
            <code className={codeStyles}>init</code> asks where components,
            shared code, hooks, styles and icons should land, and writes a{' '}
            <code className={codeStyles}>components.json</code> with your
            answers. Nothing is copied yet.
          </p>

          <pre className={terminalStyles}>
            <span className={terminalMutedStyles}>$</span> npx blobui init
          </pre>
        </Step>

        <Step index={2} title='Add what you need'>
          <p className='my-3 max-w-prose text-body-md text-fg-secondary'>
            The CLI resolves what a component actually depends on — the token
            layer, the shared styles, the icons it uses — and copies only those.
            Ask for it twice and it skips what is already there.
          </p>

          <pre className={terminalStyles}>
            <span className={terminalMutedStyles}>$</span> npx blobui add button
            {REGISTRY_OUTPUT.map(({ name, detail }) => (
              <span key={name} className='block'>
                <span className={terminalMutedStyles}>✓</span>{' '}
                <span className='inline-block w-24'>{name}</span>
                <span className={terminalMutedStyles}>{detail}</span>
              </span>
            ))}
          </pre>
        </Step>

        <Step index={3} title='Import it and go'>
          <p className='my-3 max-w-prose text-body-md text-fg-secondary'>
            It is your file now. Rename it, change it, delete half of it —
            nothing upstream will argue.
          </p>

          <pre className={terminalStyles}>
            <span className={terminalMutedStyles}>import</span> {'{ Button }'}{' '}
            <span className={terminalMutedStyles}>from</span>{' '}
            {"'@/components/button/Button';"}
            {'\n\n'}
            {'<Button variant="primary">Save changes</Button>'}
          </pre>
        </Step>
      </div>

      <div className={ruleStyles}>
        <p className={ruleTextStyles}>
          <strong className='font-semibold text-fg'>One thing to know.</strong>{' '}
          The token layer is a registry dependency of every component, so the
          first <code className={codeStyles}>add</code> brings four CSS files
          with it. Import them once in your entry stylesheet, in the order the
          CLI writes them — palette, tokens, theme, base — and never again.
        </p>
      </div>
    </section>
  );
}
