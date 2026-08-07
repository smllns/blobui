import type { ReactNode } from 'react';
import PageHeader from './PageHeader';
import { ComponentPreview } from './ComponentPreview';
import { PropsTable } from './PropsTable';
import { InstallationBlock } from './InstallationBlock';

type ComponentProp = {
  name: string;
  type: string;
  default: string;
  description: string;
};

export type InstallationFile = {
  path: string;
  code: string;
};

type Props = {
  header: string;
  description: string;
  preview?: ReactNode;
  playground?: ReactNode;
  props?: ComponentProp[];
  subElementProps?: ComponentProp[];
  subElementHeader?: string;
  secondSubElementProps?: ComponentProp[];
  secondSubElementHeader?: string;
  installation?: {
    component: string;
    files: InstallationFile[];
    dependencies?: string[];
  };
};

export function DocsPage({
  header,
  description,
  preview,
  playground,
  props,
  subElementProps,
  subElementHeader,
  secondSubElementProps,
  secondSubElementHeader,
  installation,
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

      {installation && (
        <InstallationBlock
          component={installation.component}
          files={installation.files}
          dependencies={installation.dependencies}
        />
      )}

      {props && <PropsTable title={header} props={props} />}
      {subElementProps && (
        <PropsTable title={subElementHeader} props={subElementProps} />
      )}
      {secondSubElementProps && (
        <PropsTable
          title={secondSubElementHeader}
          props={secondSubElementProps}
        />
      )}
    </div>
  );
}
