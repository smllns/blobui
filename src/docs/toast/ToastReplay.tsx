import { useState } from 'react';
import { Toast } from '@/components/toast/Toast';
import { Button } from '@/components/button/Button';

export function ToastEnterReplay() {
  const [run, setRun] = useState(0);

  return (
    <div className='flex items-center gap-4'>
      <Toast
        key={run}
        size='sm'
        tone='success'
        title='Invoice sent'
        description='A copy is on its way to billing@acme.com.'
      />

      <Button
        size='xs'
        variant='secondary'
        onClick={() => setRun((n) => n + 1)}
      >
        Replay
      </Button>
    </div>
  );
}

export function ToastExitReplay() {
  const [run, setRun] = useState(0);

  return (
    <Toast
      key={run}
      size='sm'
      tone='success'
      title='Invoice sent'
      description='A copy is on its way to billing@acme.com.'
      onClose={() => setRun((n) => n + 1)}
    />
  );
}
