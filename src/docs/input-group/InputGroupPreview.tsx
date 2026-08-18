import { Button } from '@/components/button/Button';
import {
  InputGroup,
  InputGroupAddon,
} from '@/components/input-group/InputGroup';

const InputGroupPreview = () => {
  return (
    <div className='flex w-full max-w-xl flex-col gap-4'>
      <InputGroup leading='https://' placeholder='blob.ui' />

      <InputGroup trailing='.com' placeholder='Filter by name…' />

      <InputGroup
        leading={<InputGroupAddon variant='bare'>$</InputGroupAddon>}
        trailing='USD'
        placeholder='0.00'
        inputMode='decimal'
      />

      <InputGroup
        defaultValue='blob.ui'
        trailing={<Button variant='secondary'>Copy</Button>}
      />

      <InputGroup
        leading='https://'
        trailing='.com'
        defaultValue='blob'
        loading
        loadingLabel='Checking availability…'
      />
    </div>
  );
};

export default InputGroupPreview;
