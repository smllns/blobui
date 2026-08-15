import { Resizable } from '@/components/resizable/Resizable';
import type { ReactNode } from 'react';

export function PanelBody({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className='flex h-full flex-col gap-2 p-4'>
      <p className='text-micro uppercase text-fg-tertiary'>{title}</p>

      <p className='text-body-sm text-fg-secondary'>{children}</p>
    </div>
  );
}

export function ResizablePreview() {
  return (
    <div className='flex h-70 flex-row gap-10'>
      <Resizable
        panels={[
          {
            id: 'files',
            defaultSize: 30,
            minSize: 20,
            children: (
              <PanelBody title='Files'>
                Drag the divider, or Tab to it and use the arrow keys.
              </PanelBody>
            ),
          },
          {
            id: 'editor',
            minSize: 30,
            children: (
              <PanelBody title='Editor'>
                Text selection goes off across both panels while the divider is
                moving.
              </PanelBody>
            ),
          },
        ]}
      />

      <Resizable
        orientation='vertical'
        panels={[
          {
            id: 'preview',
            defaultSize: 60,
            minSize: 20,
            children: (
              <PanelBody title='Preview'>
                Up and down move this divider; left and right do nothing to it.
              </PanelBody>
            ),
          },
          {
            id: 'console',
            minSize: 15,
            children: <PanelBody title='Console'>Ready.</PanelBody>,
          },
        ]}
      />
    </div>
  );
}
