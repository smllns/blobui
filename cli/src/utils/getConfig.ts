import { readFile } from 'node:fs/promises';
import { getConfigPath } from './getConfigPath.js';

export type Config = {
  aliases: {
    components: string;
    shared: string;
    lib: string;
    hooks: string;
    styles: string;
    ui: string;
  };
};

function isValidAlias(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

export async function getConfig(): Promise<Config> {
  const configPath = getConfigPath();

  let content: string;

  try {
    content = await readFile(configPath, 'utf-8');
  } catch (error) {
    throw new Error('components.json not found. Run "blobui init" first.', {
      cause: error,
    });
  }

  try {
    const config = JSON.parse(content) as Config;
    const aliases = config.aliases;

    if (
      !aliases ||
      !isValidAlias(aliases.components) ||
      !isValidAlias(aliases.shared) ||
      !isValidAlias(aliases.lib) ||
      !isValidAlias(aliases.hooks) ||
      !isValidAlias(aliases.styles) ||
      !isValidAlias(aliases.ui)
    ) {
      throw new Error('Invalid components.json format.');
    }

    return config;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('components.json contains invalid JSON.', {
        cause: error,
      });
    }

    throw error;
  }
}
