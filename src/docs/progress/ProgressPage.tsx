import { DocsPage } from '../components/DocsPage';
import { Progress } from '@/components/progress/Progress';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { PROGRESS_STATES } from './progressStates';
import { ProgressPlayground } from './ProgressPlayground';

export function ProgressDocs() {
  return (
    <DocsPage
      header='Progress'
      description='A visual indicator of progress toward completing a task or process, with determinate and indeterminate states.'
      preview={
        <div className='flex w-full max-w-md flex-col gap-6'>
          <Progress size='sm' value={24} aria-label='Uploading' />
          <Progress value={62} aria-label='Uploading' />
          <Progress size='lg' value={100} tone='success' aria-label='Done' />
          <Progress value={78} tone='warning' aria-label='Storage used' />
          <Progress indeterminate aria-label='Working' />
        </div>
      }
      states={PROGRESS_STATES}
      playground={<ProgressPlayground />}
      installation={getInstallation('progress')}
      props={componentProps.progress}
    />
  );
}
