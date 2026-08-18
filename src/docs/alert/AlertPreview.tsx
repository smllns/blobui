import { Alert } from '@/components/alert/Alert';
import { Button } from '@/components/button/Button';

const AlertPreview = () => {
  return (
    <div className='flex w-full max-w-xl flex-col gap-4'>
      <Alert tone='info'>Your trial ends on Friday.</Alert>

      <Alert tone='success' title='Invoice sent' onDismiss={() => {}}>
        A copy is on its way to billing@acme.com.
      </Alert>

      <Alert
        tone='warning'
        title='This table is out of date'
        actions={
          <>
            <Button size='sm' variant='secondary'>
              Refresh
            </Button>

            <Button size='sm' variant='ghost'>
              Keep the old figures
            </Button>
          </>
        }
      >
        Figures were last synced 14 hours ago.
      </Alert>

      <Alert tone='danger' emphasis='bare' announce='auto'>
        Enter a card number with 16 digits.
      </Alert>
    </div>
  );
};

export default AlertPreview;
