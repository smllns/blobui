export type InstallationFile = {
  path: string;
  code: string;
};

export type InstallationBlockProps = {
  component: string;
  files: InstallationFile[];
  dependencies?: string[];
};

export type FileGroupName =
  | 'Component'
  | 'Global Styles'
  | 'Types'
  | 'Animations'
  | 'Utilities'
  | 'Hooks'
  | 'Shared'
  | 'Icons';

export type FileGroup = {
  name: FileGroupName;
  files: InstallationFile[];
};
