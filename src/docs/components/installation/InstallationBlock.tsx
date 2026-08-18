import { useMemo } from 'react';
import JSZip from 'jszip';
import { CodeBlock } from '../CodeBlock';
import { Button } from '@/components/button/Button';
import { Tabs } from '@/components/tabs/Tabs';
import { useToast } from '@/hooks/useToast';
import type { InstallationBlockProps } from './installation.types';
import { InstallationFiles } from './InstallationFiles';
import {
  zipMetaStyles,
  zipNoteStyles,
  zipPanelStyles,
} from './installation.styles';
import { ToastContainer } from '@/components/toast/ToastContainer';

export function InstallationBlock({
  component,
  files,
  dependencies,
}: InstallationBlockProps) {
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

  const items = useMemo(
    () => [
      {
        value: 'cli',
        label: 'CLI',
        content: (
          <CodeBlock
            hideDownload
            title='npm'
            code={`blobui add ${component}`}
          />
        ),
      },
      {
        value: 'manual',
        label: 'Manual',
        content: (
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
              <p className='mb-3 text-body-lg text-fg-secondary'>
                Copy the following source files into your project:
              </p>

              <InstallationFiles files={files} />
            </div>
          </div>
        ),
      },
      {
        value: 'zip',
        label: 'Download .zip',
        content: (
          <div className={zipPanelStyles}>
            <p className={zipNoteStyles}>
              Every file behind this component in one archive, with the token
              layer included — for a repository the CLI cannot reach. The tree
              inside matches the paths under Manual, so it drops in where the
              CLI would have written.
            </p>

            <span className={zipMetaStyles}>
              {component}.zip · {files.length}{' '}
              {files.length === 1 ? 'file' : 'files'}
            </span>

            <Button variant='primary' onClick={handleDownloadAll}>
              Download {component}.zip
            </Button>
          </div>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [component, files, dependencies],
  );

  return (
    <section>
      <div>
        <h2 className='text-heading-lg text-fg'>Take it</h2>

        <p className='py-2 text-fg-secondary'>
          The files land in your repository and stop being ours. There is no
          package to upgrade and nothing to eject from.
        </p>
      </div>

      <Tabs aria-label='Installation' items={items} defaultValue='cli' />

      <ToastContainer toasts={toasts} onClose={dismissToast} />
    </section>
  );
}
