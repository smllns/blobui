import { downloadFile } from '../utils/downloadFile.js';
import { Config, getConfig } from '../utils/getConfig.js';
import { installDependencies } from '../utils/installDependencies.js';
import { checkComponentExists } from '../utils/checkComponentExists.js';
import { colors } from '../utils/colors.js';
import { RegistryIndex } from '../types/registry.js';
import { getRegistryComponent } from '../utils/getRegistryComponent.js';
import { confirmOverwrite } from '../utils/confirmOverwrite.js';
import { getRegistryIndex } from '../utils/getRegistryIndex.js';
import { getDestination } from '../utils/getDestination.js';
import { exists } from '../utils/exists.js';

type AddOptions = {
  overwrite?: boolean;
};

async function installRegistryComponent(
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

  const registryItem = await getRegistryComponent(name, index);

  const componentExists = await checkComponentExists(
    registryItem.files,
    config,
  );

  if (componentExists && !options.overwrite) {
    const overwrite = await confirmOverwrite(name);

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
    await installRegistryComponent(
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

    const destination = getDestination(file.path, config);

    if (await exists(destination)) {
      downloadedFiles.add(file.path);

      continue;
    }

    await downloadFile(file.path, config);

    downloadedFiles.add(file.path);
  }

  console.log(`${colors.success('✨ Added')} ${colors.component(name)}`);
}

export async function addComponent(name: string, options: AddOptions = {}) {
  const config = await getConfig();

  const index = await getRegistryIndex();

  const installedComponents = new Set<string>();
  const downloadedFiles = new Set<string>();
  const installedDependencies = new Set<string>();

  await installRegistryComponent(
    name,
    index,
    installedComponents,
    downloadedFiles,
    installedDependencies,
    config,
    options,
  );
}
