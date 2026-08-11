import { useState } from 'react';
import JSZip from 'jszip';

import { CodeBlock } from '../CodeBlock';
import { Button } from '@/components/button/Button';
import { useToast } from '@/hooks/useToast';

import type { InstallationBlockProps } from './installation.types';
import { InstallationFiles } from './InstallationFiles';
import { ToastContainer } from '@/components/toast/ToastContainer';

export function InstallationBlock({
  component,
  files,
  dependencies,
}: InstallationBlockProps) {
  const [tab, setTab] = useState<'cli' | 'manual'>('cli');

  const { toasts, showToast, dismissToast } = useToast();

  const handleDownloadAll = async () => {
    try {
      const zip = new JSZip();

      files.forEach((file) => {
        zip.file(file.path, file.code);
      });

      const blob = await zip.generateAsync({
        type: 'blob',
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = url;
      link.download = `${component}.zip`;
      link.click();

      URL.revokeObjectURL(url);

      showToast({
        tone: 'success',
        title: 'Downloaded!',
        description: `${component}.zip has been downloaded.`,
        showClose: true,
      });
    } catch {
      showToast({
        tone: 'danger',
        title: 'Download failed',
        description: 'Something went wrong while creating the ZIP archive.',
      });
    }
  };

  return (
    <section>
      <div>
        <h2>Installation</h2>

        <p className='py-2 text-fg-secondary'>
          Install this component with the BlobUI CLI or copy the source files
          manually.
        </p>
      </div>

      <div className='inline-flex gap-4 p-2'>
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

      <div className='pt-2'>
        {tab === 'cli' && (
          <CodeBlock
            hideDownload
            title='npm'
            code={`blobui add ${component}`}
          />
        )}

        {tab === 'manual' && (
          <div className='flex flex-col gap-6'>
            <div>
              <p className='mb-3 text-body-lg text-fg-secondary'>
                Install the following dependencies in your project before
                copying the source files:
              </p>

              {dependencies?.length ? (
                <CodeBlock
                  hideDownload
                  title='npm'
                  code={`npm install ${dependencies.join(' ')}`}
                />
              ) : (
                <p className='text-body-md text-fg-tertiary'>
                  No additional dependencies are required.
                </p>
              )}
            </div>

            <div>
              <div className='flex flex-row justify-between pb-2'>
                <p className='mb-3 text-body-lg text-fg-secondary'>
                  Copy the following source files into your project:
                </p>

                <Button
                  size='xs'
                  variant='primary'
                  onClick={handleDownloadAll}
                  className='shrink-0'
                >
                  Download all
                </Button>
              </div>

              <InstallationFiles files={files} />
            </div>
          </div>
        )}
      </div>

      <ToastContainer toasts={toasts} onClose={dismissToast} />
    </section>
  );
}
