import prompts from 'prompts';
import { colors } from './colors.js';

export async function confirmOverwrite(name: string) {
  const { overwrite } = await prompts({
    type: 'confirm',
    name: 'overwrite',
    message: `${colors.component(name)} already exists. Overwrite?`,
    initial: false,
  });

  return overwrite;
}
