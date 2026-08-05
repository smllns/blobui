import { getDestination } from './getDestination.js';
import { exists } from './exists.js';
import type { Config } from './getConfig.js';

export async function checkComponentExists(
  files: { path: string; type: string }[],
  config: Config,
) {
  const componentFiles = files.filter((file) => file.type === 'component');

  if (!componentFiles.length) {
    return false;
  }

  const results = await Promise.all(
    componentFiles.map((file) => exists(getDestination(file.path, config))),
  );

  return results.every(Boolean);
}
