import { useState } from 'react';
import JSZip from 'jszip';
import { CodeBlock } from '../CodeBlock';
import { Button } from '@/components/button/Button';
import { useToast } from '@/hooks/useToast';
import type { InstallationBlockProps } from './installation.types';
import { InstallationFiles } from './InstallationFiles';
import {
  tabPanelStyles,
  tabRowStyles,
  tabStyles,
  zipMetaStyles,
  zipNoteStyles,
  zipPanelStyles,
} from './installation.styles';
import { ToastContainer } from '@/components/toast/ToastContainer';

const TABS = [
  { id: 'cli', label: 'CLI' },
  { id: 'manual', label: 'Manual' },
  { id: 'zip', label: 'Download .zip' },
] as const;

type Tab = (typeof TABS)[number]['id'];

export function InstallationBlock({
  component,
  files,
  dependencies,
}: InstallationBlockProps) {
  const [tab, setTab] = useState<Tab>('cli');

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
        <h2 className='text-heading-lg text-fg'>Take it</h2>

        <p className='py-2 text-fg-secondary'>
          The files land in your repository and stop being ours. There is no
          package to upgrade and nothing to eject from.
        </p>
      </div>

      <div className={tabRowStyles} role='tablist' aria-label='Installation'>
        {TABS.map((t) => (
          <button
            key={t.id}
            id={`install-tab-${t.id}`}
            type='button'
            role='tab'
            aria-selected={tab === t.id}
            aria-controls={`install-panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={tabStyles(tab === t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        role='tabpanel'
        id='install-panel-cli'
        aria-labelledby='install-tab-cli'
        hidden={tab !== 'cli'}
        className={tabPanelStyles}
      >
        {
          <CodeBlock
            hideDownload
            title='npm'
            code={`blobui add ${component}`}
          />
        }
      </div>

      <div
        role='tabpanel'
        id='install-panel-manual'
        aria-labelledby='install-tab-manual'
        hidden={tab !== 'manual'}
        className={tabPanelStyles}
      >
        {
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
        }
      </div>

      <div
        role='tabpanel'
        id='install-panel-zip'
        aria-labelledby='install-tab-zip'
        hidden={tab !== 'zip'}
        className={tabPanelStyles}
      >
        {
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
        }
      </div>

      <ToastContainer toasts={toasts} onClose={dismissToast} />
    </section>
  );
}
