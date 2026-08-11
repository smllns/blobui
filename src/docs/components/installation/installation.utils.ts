import type {
  FileGroup,
  FileGroupName,
  InstallationFile,
} from './installation.types';

function getFileGroup(file: InstallationFile): FileGroupName {
  const { path } = file;

  if (path.startsWith('ui/')) {
    return 'Icons';
  }
  if (path.startsWith('styles/')) {
    return 'Global Styles';
  }

  if (path.startsWith('ui/')) {
    return 'Shared';
  }

  if (path.startsWith('hooks/')) {
    return 'Hooks';
  }

  if (path.startsWith('lib/')) {
    return 'Utilities';
  }

  if (path.startsWith('components/shared/')) {
    return 'Shared';
  }
  if (path.startsWith('components/')) {
    return 'Component';
  }

  if (path.includes('.animation.')) {
    return 'Animations';
  }

  return 'Shared';
}

export function groupFiles(files: InstallationFile[]): FileGroup[] {
  const groups = new Map<FileGroupName, InstallationFile[]>();

  for (const file of files) {
    const group = getFileGroup(file);

    if (!groups.has(group)) {
      groups.set(group, []);
    }

    groups.get(group)!.push(file);
  }

  const order: FileGroupName[] = [
    'Component',
    'Global Styles',
    'Types',
    'Animations',
    'Utilities',
    'Hooks',
    'Shared',
    'Icons',
  ];

  return order
    .filter((name) => groups.has(name))
    .map((name) => ({
      name,
      files: groups.get(name)!,
    }));
}
