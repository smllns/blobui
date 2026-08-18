import { useState } from 'react';
import { Alert } from '../../components/alert/Alert';

export function AlertDismissReplay() {
  const [run, setRun] = useState(0);

  return (
    <Alert
      key={run}
      tone='info'
      title='This table is out of date'
      className='w-96'
      onDismiss={() => setRun((n) => n + 1)}
    >
      Figures were last synced 14 hours ago.
    </Alert>
  );
}
