import { useState } from 'react';
import { ChevronDown } from '../../ui/ChevronDown';
import { Toast } from '../../components/toast/Toast';
import { Button } from '../../components/button/Button';

type ToastItem = {
  id: string;
  closing?: boolean;
};

type CodeBlockProps = {
  code: string;
};

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const [toasts, setToasts] = useState<ToastItem[]>([]);

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
    <div className='rounded-xl border border-neutral-200 bg-olive-400/10 overflow-hidden'>
      {/* HEADER */}
      <div className='flex items-center justify-between px-4 py-3 border-b border-neutral-200 bg-olive-500/10'>
        <p className='text-sm font-semibold'>Code</p>

        <Button variant='secondary' size='xs' onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>

      {/* BODY */}
      <div
        className={`
          relative overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? 'max-h-125' : 'max-h-15'}
        `}
      >
        {/* CODE */}
        <div
          className={`
            transition-all duration-900 ease-in-out
            ${open ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-1'}
          `}
        >
          <pre className='p-4 text-sm text-neutral-800 overflow-x-auto'>
            <code>{code}</code>
          </pre>
        </div>

        {/* FADE */}
        {!open && (
          <div className='absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-olive-400/10 to-transparent pointer-events-none' />
        )}

        {/* TOGGLE BUTTON */}
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
            className='flex items-center gap-1 shadow-md'
          >
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-300 ${
                open ? 'rotate-180' : ''
              }`}
            />

            {open ? 'Hide' : 'Show'}
          </Button>
        </div>
      </div>

      {/* TOAST STACK (FIXED POSITION) */}
      {toasts.length > 0 && (
        <div className='fixed bottom-4 right-4 z-50 flex flex-col gap-2'>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              variant='success'
              size='md'
              title='Copied!'
              description='Code copied to clipboard'
              icon='✅'
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
