import type { ReactNode } from 'react';
import PageHeader from './PageHeader';
import { ComponentPreview } from './ComponentPreview';
import { PropsTable } from './PropsTable';

type Props = {
  header: string;
  description: string;

  preview?: ReactNode;
  playground?: ReactNode;
  props?: any[];
};

export function DocsPage({
  header,
  description,
  preview,
  playground,
  props,
}: Props) {
  return (
    <div className='flex flex-col gap-4'>
      <PageHeader header={header} description={description} />

      {preview && (
        <ComponentPreview
          name={
            header === 'Checkbox' ||
            header === 'Tooltip' ||
            header === 'Radio' ||
            header === 'Switch'
              ? 'biggerGap'
              : ''
          }
        >
          {preview}
        </ComponentPreview>
      )}

      {playground}

      {props && <PropsTable props={props} />}
    </div>
  );
}
