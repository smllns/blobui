import { access, writeFile } from 'node:fs/promises';
import path from 'node:path';
import prompts from 'prompts';

import { colors } from '../utils/colors.js';
import { updateTsConfig } from '../utils/updateTsConfig.js';

export async function initProject() {
  const configPath = path.join(process.cwd(), 'components.json');

  try {
    await access(configPath);

    console.log(`${colors.warning('⚠')} components.json already exists`);

    return;
  } catch {
    // file does not exist, continue
  }

  const answers = await prompts([
    {
      type: 'text',
      name: 'components',
      message: 'Where should components be installed?',
      initial: 'src/components/ui',
    },
    {
      type: 'text',
      name: 'lib',
      message: 'Where should utilities be installed?',
      initial: 'src/lib',
    },
  ]);

  if (!answers.components || !answers.lib) {
    console.log(`${colors.warning('⚠')} Initialization cancelled`);

    return;
  }

  const config = {
    aliases: {
      components: answers.components,
      lib: answers.lib,
    },
  };

  await writeFile(configPath, JSON.stringify(config, null, 2));

  await updateTsConfig();

  console.log(`${colors.success('✨ Created')} components.json`);
}
