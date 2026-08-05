import path from 'node:path';
import type { Config } from './getConfig.js';

export function getComponentDirectory(name: string, config: Config) {
  return path.join(process.cwd(), config.aliases.components, name);
}
