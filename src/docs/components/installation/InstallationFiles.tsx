import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Button } from '@/components/button/Button';
import { Input } from '@/components/input/Input';
import { cn } from '@/lib/cn';
import { ChevronRight } from '@/ui/icons/ChevronRight';
import { Search } from '@/ui/icons/Search';
import type { InstallationFile, MeasuredFile } from './installation.types';
import { formatBytes, groupFiles, measureFiles } from './installation.utils';
import {
  browserActionsStyles,
  browserBarStyles,
  browserCountStyles,
  browserEmptyStyles,
  browserSearchStyles,
  groupCountStyles,
  groupListStyles,
  groupStyles,
  groupTitleStyles,
  rowBarStyles,
  rowBodyStyles,
  rowChevronOpenStyles,
  rowChevronStyles,
  rowHeadStyles,
  rowMarkStyles,
  rowOpenStyles,
  rowPathStyles,
  rowSizeStyles,
  rowStyles,
} from './installation.styles';
import { ToastContainer } from '@/components/toast/ToastContainer';
import { useToast } from '@/hooks/useToast';

const FEEDBACK_MS = 1500;

function highlight(path: string, query: string): ReactNode {
  if (!query) return path;

  const at = path.toLowerCase().indexOf(query);
  if (at < 0) return path;

  return (
    <>
      {path.slice(0, at)}
      <mark className={rowMarkStyles}>{path.slice(at, at + query.length)}</mark>
      {path.slice(at + query.length)}
    </>
  );
}

export function InstallationFiles({ files }: { files: InstallationFile[] }) {
  const [query, setQuery] = useState('');
  const [openPaths, setOpenPaths] = useState<ReadonlySet<string>>(
    () => new Set(),
  );
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [downloadedPath, setDownloadedPath] = useState<string | null>(null);
  const [copiedCount, setCopiedCount] = useState(0);
  const { toasts, showToast, dismissToast } = useToast();

  const measured = useMemo(() => measureFiles(files), [files]);

  const needle = query.trim().toLowerCase();

  const matches = useMemo(
    () =>
      needle
        ? measured.filter((file) => file.path.toLowerCase().includes(needle))
        : measured,
    [measured, needle],
  );

  const groups = useMemo(() => groupFiles(matches), [matches]);

  const matchedBytes = matches.reduce((total, file) => total + file.bytes, 0);

  const count = needle
    ? `${matches.length} of ${measured.length} · ${formatBytes(matchedBytes)}`
    : `${measured.length} files · ${formatBytes(matchedBytes)}`;

  const allOpen =
    matches.length > 0 && matches.every((file) => openPaths.has(file.path));

  useEffect(() => {
    if (!copiedPath) return;

    const timer = window.setTimeout(() => setCopiedPath(null), FEEDBACK_MS);

    return () => window.clearTimeout(timer);
  }, [copiedPath]);

  useEffect(() => {
    if (!copiedCount) return;

    const timer = window.setTimeout(() => setCopiedCount(0), FEEDBACK_MS);

    return () => window.clearTimeout(timer);
  }, [copiedCount]);

  const toggleRow = (path: string) => {
    setOpenPaths((previous) => {
      const next = new Set(previous);

      if (!next.delete(path)) next.add(path);

      return next;
    });
  };

  const toggleAll = () => {
    setOpenPaths((previous) => {
      const next = new Set(previous);

      for (const file of matches) {
        if (allOpen) next.delete(file.path);
        else next.add(file.path);
      }

      return next;
    });
  };

  const copyFile = async (file: MeasuredFile) => {
    await navigator.clipboard.writeText(file.code);
    setCopiedPath(file.path);
    const fileName =
      file.path
        .split('/')
        .at(-1)
        ?.replace(/\.zip$/, '') ?? file.path;
    showToast({
      tone: 'success',
      title: 'Copied!',
      description: `${fileName} has been copied.`,
      showClose: true,
    });
  };

  const downloadFile = (file: MeasuredFile) => {
    const blob = new Blob([file.code], {
      type: 'text/plain;charset=utf-8',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = file.path.split('/').pop() ?? 'file.txt';

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
    setDownloadedPath(file.path);
    const fileName =
      file.path
        .split('/')
        .at(-1)
        ?.replace(/\.zip$/, '') ?? file.path;
    showToast({
      tone: 'success',
      title: 'Downloaded!',
      description: `${fileName} has been downloaded.`,
      showClose: true,
    });
  };

  const copyAll = async () => {
    if (!matches.length) return;

    const text = matches
      .map((file) => `/* ─── ${file.path} ─── */\n${file.code}`)
      .join('\n\n');

    await navigator.clipboard.writeText(text);
    setCopiedCount(matches.length);

    showToast({
      tone: 'success',
      title: 'Copied!',
      description: `All files have been copied.`,
      showClose: true,
    });
  };

  return (
    <div>
      <div className={browserBarStyles}>
        <div className={browserSearchStyles}>
          <Input
            fullWidth
            type='search'
            size='sm'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            leftIcon={<Search className='text-fg-placeholder' />}
            placeholder='Filter files — try styles, or .tsx'
            aria-label='Filter files'
          />
        </div>

        <span className={browserCountStyles}>{count}</span>

        <div className={browserActionsStyles}>
          <Button
            variant='ghost'
            size='sm'
            onClick={toggleAll}
            disabled={!matches.length}
          >
            {allOpen ? 'Collapse all' : 'Expand all'}
          </Button>

          <Button
            variant='secondary'
            size='sm'
            onClick={copyAll}
            disabled={!matches.length}
          >
            {copiedCount ? `Copied ${copiedCount}` : 'Copy all'}
          </Button>
        </div>
      </div>

      {groups.map((group) => (
        <section key={group.name} className={groupStyles}>
          <h4 className={groupTitleStyles}>
            {group.name}{' '}
            <span className={groupCountStyles}>· {group.files.length}</span>
          </h4>

          <div className={groupListStyles}>
            {group.files.map((file) => {
              const isOpen = openPaths.has(file.path);
              const bodyId = `install-${file.path.replace(/[^a-zA-Z0-9]+/g, '-')}`;

              return (
                <article
                  key={file.path}
                  className={cn(rowStyles, isOpen && rowOpenStyles)}
                >
                  <div className='flex items-center'>
                    <button
                      type='button'
                      aria-expanded={isOpen}
                      aria-controls={bodyId}
                      onClick={() => toggleRow(file.path)}
                      className={rowHeadStyles}
                    >
                      <ChevronRight
                        className={cn(
                          rowChevronStyles,
                          isOpen && rowChevronOpenStyles,
                        )}
                      />

                      <span className={rowPathStyles}>
                        {highlight(file.path, needle)}
                      </span>

                      <span className={rowSizeStyles}>
                        {formatBytes(file.bytes)} · {file.lines} lines
                      </span>
                    </button>

                    <div className={rowBarStyles}>
                      <Button
                        variant='ghost'
                        size='xs'
                        aria-label={`Copy ${file.path}`}
                        onClick={() => copyFile(file)}
                      >
                        {copiedPath === file.path ? 'Copied' : 'Copy'}
                      </Button>

                      <Button
                        variant='ghost'
                        size='xs'
                        aria-label={`Download ${file.path}`}
                        onClick={() => downloadFile(file)}
                      >
                        {downloadedPath === file.path
                          ? 'Downloaded'
                          : 'Download'}
                      </Button>
                    </div>
                  </div>

                  <div
                    id={bodyId}
                    className={cn(
                      'grid transition-[grid-template-rows] duration-600 ease-out',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className='min-h-0 overflow-hidden'>
                      <pre className={rowBodyStyles}>{file.code}</pre>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      {!matches.length && (
        <p className={browserEmptyStyles}>
          Nothing matches that. Clear the filter to see all {measured.length}.
        </p>
      )}
      <ToastContainer toasts={toasts} onClose={dismissToast} />
    </div>
  );
}
