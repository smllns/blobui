import { PageHeader } from './PageHeader';
import { ComponentPreview } from './ComponentPreview';
import { PropsTable } from './PropsTable';
import { StateMatrix } from './StateMatrix';
import { InstallationBlock } from './installation/InstallationBlock';
import type { DocsPageProps } from './docsPage.types';

export function DocsPage({
  header,
  description,
  states,
  preview,
  playground,
  props,
  subElementProps,
  subElementHeader,
  secondSubElementProps,
  secondSubElementHeader,
  installation,
}: DocsPageProps) {
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

      {states && <StateMatrix specimens={states} />}

      {playground}

      {installation && (
        <InstallationBlock
          component={installation.component}
          files={installation.files}
          dependencies={installation.dependencies}
        />
      )}

      {props && <PropsTable title='Props' props={props} />}
      {subElementProps && (
        <PropsTable
          title={`${subElementHeader} props`}
          props={subElementProps}
        />
      )}
      {secondSubElementProps && (
        <PropsTable
          title={`${secondSubElementHeader} props`}
          props={secondSubElementProps}
        />
      )}
    </div>
  );
}
