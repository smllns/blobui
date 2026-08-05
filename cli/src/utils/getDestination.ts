import path from 'node:path';
import type { Config } from './getConfig.js';

function resolveAlias(cwd: string, alias: string, filePath: string) {
  return path.join(cwd, alias, filePath);
}

export function getDestination(filePath: string, config: Config): string {
  const cwd = process.cwd();

  if (filePath.startsWith('components/')) {
    return resolveAlias(
      cwd,
      config.aliases.components,
      filePath.replace('components/', ''),
    );
  }

  if (filePath.startsWith('ui/')) {
    return resolveAlias(
      cwd,
      config.aliases.components,
      filePath.replace('ui/', ''),
    );
  }

  if (filePath.startsWith('lib/')) {
    return resolveAlias(cwd, config.aliases.lib, filePath.replace('lib/', ''));
  }

  if (filePath.startsWith('hooks/')) {
    return resolveAlias(
      cwd,
      config.aliases.hooks,
      filePath.replace('hooks/', ''),
    );
  }

  return path.join(cwd, filePath);
}
