import path from 'node:path';
import { type Config } from './getConfig.js';

function resolveAlias(cwd: string, alias: string, filePath: string) {
  return path.join(cwd, alias, filePath);
}

export function getDestination(filePath: string, config: Config): string {
  const cwd = process.cwd();

  // components/shared/*
  if (filePath.startsWith('components/shared/')) {
    return resolveAlias(
      cwd,
      config.aliases.shared,
      filePath.replace('components/shared/', ''),
    );
  }

  // components/*
  if (filePath.startsWith('components/')) {
    return resolveAlias(
      cwd,
      config.aliases.components,
      filePath.replace('components/', ''),
    );
  }

  // ui/*
  if (filePath.startsWith('ui/')) {
    return resolveAlias(cwd, config.aliases.ui, filePath.replace('ui/', ''));
  }

  // lib/*
  if (filePath.startsWith('lib/')) {
    return resolveAlias(cwd, config.aliases.lib, filePath.replace('lib/', ''));
  }

  // hooks/*
  if (filePath.startsWith('hooks/')) {
    return resolveAlias(
      cwd,
      config.aliases.hooks,
      filePath.replace('hooks/', ''),
    );
  }

  // styles/*
  if (filePath.startsWith('styles/')) {
    return resolveAlias(
      cwd,
      config.aliases.styles,
      filePath.replace('styles/', ''),
    );
  }

  return path.join(cwd, filePath);
}
