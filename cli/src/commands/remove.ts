import { unlink, access, rm } from 'node:fs/promises';

import prompts from 'prompts';

import { REGISTRY_URL } from '../config.js';
import { fetchJson } from '../utils/fetchJson.js';
import { getDestination } from '../utils/getDestination.js';
import { getConfig } from '../utils/getConfig.js';
import { colors } from '../utils/colors.js';
import { getComponentDirectory } from '../utils/getComponentDirectory.js';

type RegistryIndex = {
  components: {
    name: string;
    path: string;
  }[];
};

type RegistryComponent = {
  name: string;
  files: {
    path: string;
    type: string;
  }[];
};

async function fileExists(filePath: string) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getComponent(name: string, index: RegistryIndex) {
  const component = index.components.find((item) => item.name === name);

  if (!component) {
    throw new Error(`Component "${name}" not found.`);
  }

  return fetchJson<RegistryComponent>(
    `${REGISTRY_URL}/${component.path.replace('./', '')}`,
  );
}

export async function removeComponent(name: string) {
  const config = await getConfig();

  const index = await fetchJson<RegistryIndex>(`${REGISTRY_URL}/index.json`);

  const registryItem = await getComponent(name, index);

  const files = registryItem.files.filter(
    (file) =>
      file.type === 'component' || file.path.startsWith(`components/${name}/`),
  );

  const existingFiles = [];

  for (const file of files) {
    const destination = getDestination(file.path, config);

    if (await fileExists(destination)) {
      existingFiles.push({
        path: file.path,
        destination,
      });
    }
  }

  if (!existingFiles.length) {
    console.log(`${colors.warning('⚠')} ${name} is not installed`);

    return;
  }

  const { confirm } = await prompts({
    type: 'confirm',
    name: 'confirm',
    message: `Remove ${name}?`,
    initial: false,
  });

  if (!confirm) {
    console.log(colors.dim('Skipped'));

    return;
  }

  for (const file of existingFiles) {
    await unlink(file.destination);

    console.log(`${colors.warning('−')} Removed ${file.path}`);
  }

  await rm(getComponentDirectory(name, config), {
    recursive: true,
    force: true,
  });

  console.log(`${colors.success('✨ Removed')} ${colors.component(name)}`);
}
