import type { ReactNode } from 'react';
import type { InstallationFile } from './installation/installation.types';

type ComponentProp = {
  name: string;
  type: string;
  default: string;
  description: string;
};

export type StateSpecimen = {
  name: string;
  node: ReactNode;
  note?: string;
};

export type DocsPageProps = {
  header: string;
  description: string;
  states?: StateSpecimen[];
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
