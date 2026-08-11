import { useEffect, useRef, useState } from 'react';
import { Toast } from '../../components/toast/Toast';
import { Button } from '../../components/button/Button';
import { cn } from '@/lib/cn';
import { ChevronDown } from '@/ui/icons/ChevronDown';

type ToastItem = {
  id: string;
  closing?: boolean;
};

type CodeBlockProps = {
  code: string;
  title?: string;
};

export function CodeBlock({ code, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const [toasts, setToasts] = useState<ToastItem[]>([]);
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

    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id }]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.map((toast) =>
          toast.id === id ? { ...toast, closing: true } : toast,
        ),
      );
    }, 2000);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className='overflow-hidden rounded-xl border border-border-subtle bg-sunken'>
      <div className='flex items-center justify-between border-b border-border-subtle bg-surface px-4 py-3'>
        <p className='font-mono text-body-sm text-fg-secondary'>
          {title || 'Code'}
        </p>

        <Button variant='secondary' size='xs' onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </Button>
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

      {toasts.length > 0 && (
        <div className='fixed inset-e-4 bottom-4 z-(--z-toast) flex flex-col-reverse gap-2'>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              tone='success'
              size='md'
              title='Copied!'
              description='Code copied to clipboard'
              closing={toast.closing}
              onClose={() =>
                setToasts((prev) => prev.filter((t) => t.id !== toast.id))
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
