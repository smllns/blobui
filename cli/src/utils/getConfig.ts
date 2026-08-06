import { readFile } from 'node:fs/promises';
import { getConfigPath } from './getConfigPath.js';

export type Config = {
  aliases: {
    components: string;
    lib: string;
    hooks: string;
  };
};

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

    if (
      !config.aliases?.components ||
      !config.aliases?.lib ||
      !config.aliases?.hooks
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
