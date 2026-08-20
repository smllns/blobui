import type { ReactNode } from 'react';
import type { InstallationFile } from './installation/installation.types';

type ComponentProp = {
  name: string;
  type: string;
  default: string;
  description: string;
};

export type PropsSection = {
  title: string;
  props: ComponentProp[];
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
  propSections?: PropsSection[];
  installation?: {
    component: string;
    files: InstallationFile[];
    dependencies?: string[];
  };
};
