import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/button/Button';
import { cn } from '@/lib/cn';
import { ChevronDown } from '@/ui/icons/ChevronDown';
import { useToast } from '@/hooks/useToast';
import { ToastContainer } from '@/components/toast/ToastContainer';

type CodeBlockProps = {
  code: string;
  title?: string;
  hideDownload?: boolean;
};

export function CodeBlock({
  code,
  title,
  hideDownload = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [open, setOpen] = useState(false);

  const { toasts, showToast, dismissToast } = useToast();
  const [height, setHeight] = useState('60px');
  const contentRef = useRef<HTMLDivElement>(null);

  const isShortCode = code.split('\n').length <= 5;

  useEffect(() => {
    if (!contentRef.current || isShortCode) return;

    setHeight(open ? `${contentRef.current.scrollHeight}px` : '60px');
  }, [open, isShortCode]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);
    showToast({
      tone: 'success',
      title: 'Copied!',
      description: 'Code copied to clipboard',
      showClose: true,
    });
    setTimeout(() => setCopied(false), 1500);
  };

  const handleDownload = () => {
    if (!title) return;

    const fileName = title.split('/').pop() ?? title;

    const blob = new Blob([code], {
      type: 'text/plain;charset=utf-8',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);

    setDownloaded(true);

    showToast({
      tone: 'success',
      title: 'Downloaded!',
      description: `${fileName} downloaded`,
      showClose: true,
    });
    setTimeout(() => setDownloaded(false), 1500);
  };

  return (
    <div className='overflow-hidden rounded-xl border border-border-subtle bg-sunken'>
      <div className='flex items-center justify-between border-b border-border-subtle bg-surface px-4 py-3'>
        <p className='font-mono text-body-sm text-fg-secondary'>
          {title || 'Code'}
        </p>

        <div className='flex items-center gap-2'>
          {!hideDownload && title && (
            <Button variant='secondary' size='xs' onClick={handleDownload}>
              {downloaded ? 'Downloaded' : 'Download'}
            </Button>
          )}

          <Button variant='secondary' size='xs' onClick={handleCopy}>
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>
      </div>
      <div
        style={{
          maxHeight: isShortCode ? 'none' : height,
        }}
        className={`
          relative overflow-hidden
          transition-all duration-300 ease-in-out
        `}
      >
        <div
          ref={contentRef}
          className={`
            transition-all duration-900 ease-in-out
            ${open ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-1'}
          `}
        >
          <pre className='overflow-x-auto p-4 font-mono text-body-sm text-fg-secondary'>
            <code>{code}</code>
          </pre>
        </div>

        {!open && !isShortCode && (
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-sunken to-transparent' />
        )}

        {!isShortCode && (
          <div
            className={`
            absolute left-1/2 -translate-x-1/2
            transition-all duration-300 ease-in-out
            ${open ? 'bottom-2' : 'bottom-1/2 translate-y-1/2'}
          `}
          >
            <Button
              variant='secondary'
              size='xs'
              onClick={() => setOpen((v) => !v)}
              className='shadow-md'
              leftIcon={
                <ChevronDown
                  className={cn(
                    'transition-transform duration-(--duration-fast) ease-out',
                    open && 'rotate-180',
                  )}
                />
              }
            >
              {open ? 'Hide' : 'Show'}
            </Button>
          </div>
        )}
      </div>

      <ToastContainer toasts={toasts} onClose={dismissToast} />
    </div>
  );
}
