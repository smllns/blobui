import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb';
import { disabledTrail, trail } from './breadcrumb.data';

const BreadcrumbPreview = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Breadcrumb items={trail} />
      <Breadcrumb items={trail} maxItems={4} />
      <Breadcrumb items={disabledTrail} separator='/' />
    </div>
  );
};

export default BreadcrumbPreview;
