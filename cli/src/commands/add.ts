import prompts from 'prompts';
import { REGISTRY_URL } from '../config.js';
import { downloadFile } from '../utils/downloadFile.js';
import { fetchJson } from '../utils/fetchJson.js';
import { Config, getConfig } from '../utils/getConfig.js';
import { installDependencies } from '../utils/installDependencies.js';
import { checkComponentExists } from '../utils/checkComponentExists.js';
import { findClosest } from '../utils/findClosest.js';
import { colors } from '../utils/colors.js';

type RegistryIndex = {
  components: {
    name: string;
    path: string;
  }[];
};

type RegistryComponent = {
  name: string;
  type: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: {
    path: string;
    type: string;
  }[];
};
type AddOptions = {
  overwrite?: boolean;
};
async function getComponent(name: string, index: RegistryIndex) {
  const component = index.components.find((item) => item.name === name);

  if (!component) {
    const suggestion = findClosest(
      name,
      index.components.map((item) => item.name),
    );

    if (suggestion) {
      throw new Error(
        `Component "${name}" not found.\n\nDid you mean "${suggestion}"?`,
      );
    }

    throw new Error(
      `Component "${name}" not found.\nRun "blobui list" to see available components.`,
    );
  }

  return fetchJson<RegistryComponent>(
    `${REGISTRY_URL}/${component.path.replace('./', '')}`,
  );
}

async function installComponent(
  name: string,
  index: RegistryIndex,
  installedComponents: Set<string>,
  downloadedFiles: Set<string>,
  installedDependencies: Set<string>,
  config: Config,
  options: AddOptions,
) {
  if (installedComponents.has(name)) {
    return;
  }

  const registryItem = await getComponent(name, index);

  const exists = await checkComponentExists(registryItem.files, config);

  if (exists && !options.overwrite) {
    const { overwrite } = await prompts({
      type: 'confirm',
      name: 'overwrite',
      message: `${colors.component(name)} already exists. Overwrite?`,
      initial: false,
    });

    if (!overwrite) {
      console.log(`${colors.warning('Skipped')} ${colors.component(name)}`);
      return;
    }
  }
  installedComponents.add(name);

  await installDependencies(
    registryItem.dependencies ?? [],
    installedDependencies,
  );

  for (const dependency of registryItem.registryDependencies ?? []) {
    await installComponent(
      dependency,
      index,
      installedComponents,
      downloadedFiles,
      installedDependencies,
      config,
      options,
    );
  }

  for (const file of registryItem.files) {
    if (downloadedFiles.has(file.path)) {
      continue;
    }

    downloadedFiles.add(file.path);

    await downloadFile(file.path, config);
  }

  console.log(`${colors.success('✨ Added')} ${colors.component(name)}`);
}

export async function addComponent(name: string, options: AddOptions = {}) {
  const config = await getConfig();

  const index = await fetchJson<RegistryIndex>(`${REGISTRY_URL}/index.json`);

  await installComponent(
    name,
    index,
    new Set(),
    new Set(),
    new Set(),
    config,
    options,
  );
}
