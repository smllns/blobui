import { Badge } from '@/components/badge/Badge';
import { Tabs } from '@/components/tabs/Tabs';
import { SECTIONS } from './tabs.data';

export function TabsPreview() {
  return (
    <>
      <div className='w-70'>
        <Tabs
          aria-label='Workspace'
          items={[
            { value: 'overview', label: 'Overview' },
            {
              value: 'activity',
              label: 'Activity',
              badge: (
                <Badge size='sm' tone='accent'>
                  12
                </Badge>
              ),
            },
            { value: 'archive', label: 'Archive', disabled: true },
          ]}
        />
      </div>

      <div className='w-30'>
        <Tabs
          aria-label='Workspace, vertical'
          orientation='vertical'
          items={SECTIONS}
        />
      </div>

      <div className='w-70'>
        <Tabs
          aria-label='Workspace, with icons'
          size='sm'
          defaultValue='activity'
          items={SECTIONS}
        />
      </div>
    </>
  );
}
