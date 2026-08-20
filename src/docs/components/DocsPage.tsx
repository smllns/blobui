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
  propSections,
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

      {propSections?.map((section) => (
        <PropsTable
          key={section.title}
          title={section.title}
          props={section.props}
        />
      ))}
    </div>
  );
}
