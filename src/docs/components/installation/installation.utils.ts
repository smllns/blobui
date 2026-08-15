import type {
  FileGroup,
  FileGroupName,
  InstallationFile,
  MeasuredFile,
} from './installation.types';

function getFileGroup(file: InstallationFile): FileGroupName {
  const { path } = file;

  if (path.startsWith('components/shared/')) {
    return 'Shared';
  }

  if (path.startsWith('components/')) {
    return 'Component';
  }

  if (path.includes('.types.') || path.endsWith('/types.ts')) {
    return 'Types';
  }

  if (path.startsWith('styles/')) {
    return 'Global Styles';
  }

  if (path.startsWith('ui/')) {
    return 'Icons';
  }

  if (path.startsWith('hooks/')) {
    return 'Hooks';
  }

  if (path.startsWith('lib/')) {
    return 'Utilities';
  }

  return 'Shared';
}

const encoder = new TextEncoder();

export function fileBytes(code: string): number {
  return encoder.encode(code).length;
}

export function fileLines(code: string): number {
  if (code === '') return 0;

  const body = code.endsWith('\n') ? code.slice(0, -1) : code;

  return body.split('\n').length;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;

  return `${(bytes / 1024).toFixed(1)} kB`;
}

export function measureFiles(files: InstallationFile[]): MeasuredFile[] {
  return files.map((file) => ({
    ...file,
    bytes: fileBytes(file.code),
    lines: fileLines(file.code),
  }));
}

export function groupFiles<T extends InstallationFile>(
  files: T[],
): FileGroup<T>[] {
  const groups = new Map<FileGroupName, T[]>();

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
