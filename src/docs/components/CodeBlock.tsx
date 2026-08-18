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
  const [height, setHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  const isShortCode = code.split('\n').length <= 5;

  useEffect(() => {
    if (!contentRef.current || isShortCode) return;

    setHeight(open ? `${contentRef.current.scrollHeight}px` : '0px');
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
          {!isShortCode && (
            <Button
              variant='secondary'
              size='xs'
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
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
          )}

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
        inert={!isShortCode && !open}
        className='overflow-hidden transition-[max-height] duration-(--duration-fast) ease-out'
      >
        <div ref={contentRef}>
          <pre className='overflow-x-auto p-4 font-mono text-body-sm text-fg-secondary'>
            <code>{code}</code>
          </pre>
        </div>
      </div>

      <ToastContainer toasts={toasts} onClose={dismissToast} />
    </div>
  );
}
