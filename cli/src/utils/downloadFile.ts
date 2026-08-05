import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { BASE_URL } from '../config.js';
import { colors } from './colors.js';
import { getDestination } from './getDestination.js';
import type { Config } from './getConfig.js';

export async function downloadFile(filePath: string, config: Config) {
  const destination = getDestination(filePath, config);

  const url = `${BASE_URL}/${filePath}`;

  let response: Response;

  try {
    response = await fetch(url);
  } catch {
    throw new Error(
      `Failed to connect to registry while downloading "${filePath}"`,
    );
  }

  if (!response.ok) {
    throw new Error(`Failed to download "${filePath}" (${response.status})`);
  }

  const content = await response.text();

  try {
    await mkdir(path.dirname(destination), {
      recursive: true,
    });

    await writeFile(destination, content, 'utf-8');
  } catch (error) {
    throw new Error(
      `Failed to write file "${destination}": ${
        error instanceof Error ? error.message : ''
      }`,
    );
  }

  console.log(`${colors.success('✔')} ${filePath}`);
}
