import { Slider } from '@/components/slider/Slider';

const SliderPreview = () => {
  return (
    <div className='flex w-full max-w-md flex-col gap-6'>
      <Slider defaultValue={40} label='Volume' showValue />

      <Slider
        defaultValue={[20, 70]}
        label='Price'
        showValue
        formatValue={(value) => `$${value}`}
      />

      <Slider
        size='sm'
        defaultValue={60}
        step={10}
        label='Quality'
        description='Steps of 10. Arrow keys move one step, Page keys ten.'
      />

      <Slider size='lg' defaultValue={30} label='Disabled' disabled />
    </div>
  );
};

export default SliderPreview;
