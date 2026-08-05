import { access } from 'node:fs/promises';

import { getDestination } from './getDestination.js';
import type { Config } from './getConfig.js';

export async function checkComponentExists(
  files: { path: string; type: string }[],
  config: Config,
) {
  const componentFiles = files.filter(
    (file) => file.type === 'component' || file.path.startsWith('components/'),
  );

  for (const file of componentFiles) {
    try {
      await access(getDestination(file.path, config));

      return true;
    } catch {
      // continue
    }
  }

  return false;
}
