import { useState } from 'react';
import { CodeBlock } from './CodeBlock';
import { Button } from '@/components/button/Button';
import type { InstallationFile } from './DocsPage';

type InstallationBlockProps = {
  component: string;
  files: InstallationFile[];
  dependencies?: string[];
};

export function InstallationBlock({
  component,
  files,
  dependencies,
}: InstallationBlockProps) {
  const [tab, setTab] = useState<'cli' | 'manual'>('cli');

  return (
    <section className='space-y-6'>
      <div>
        <h2 className='text-heading-xl text-fg'>Installation</h2>

        <p className='py-2 text-fg-secondary'>
          Install this component with the BlobUI CLI or copy the source files
          manually.
        </p>
      </div>

      <div className='inline-flex p-2 gap-4'>
        <Button
          size='md'
          variant={tab === 'cli' ? 'primary' : 'secondary'}
          onClick={() => setTab('cli')}
        >
          CLI
        </Button>

        <Button
          size='md'
          variant={tab === 'manual' ? 'primary' : 'secondary'}
          onClick={() => setTab('manual')}
        >
          Manual
        </Button>
      </div>

      <div className='pt-4'>
        {tab === 'cli' && (
          <CodeBlock title='npm' code={`blobui add ${component}`} />
        )}

        {tab === 'manual' && (
          <div className='flex flex-col gap-6'>
            <p className='text-body-lg text-fg-secondary'>
              Install the following dependencies in your project before copying
              the source files:
            </p>
            <CodeBlock
              title='npm'
              code={`npm install ${dependencies?.join(' ')}`}
            />
            <p className='text-body-lg text-fg-secondary'>
              Copy the following source files into your project:
            </p>
            {files.map((file) => (
              <div key={file.path} className='space-y-3'>
                <CodeBlock code={file.code} title={file.path} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
