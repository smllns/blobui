import { REGISTRY_URL } from '../config.js';
import { colors } from '../utils/colors.js';
import { findClosest } from '../utils/findClosest.js';
import { fetchJson } from '../utils/fetchJson.js';

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

export async function viewComponent(name: string) {
  const index = await fetchJson<RegistryIndex>(`${REGISTRY_URL}/index.json`);

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
      `Component "${name}" not found.\nRun "smllns-ui list" to see available components.`,
    );
  }

  const registryItem = await fetchJson<RegistryComponent>(
    `${REGISTRY_URL}/${component.path.replace('./', '')}`,
  );

  console.log(`\n${colors.bold(colors.component(registryItem.name))}\n`);

  console.log(`${colors.info('Type:')}`);

  console.log(`  ${registryItem.type}`);

  if (registryItem.dependencies?.length) {
    console.log(`\n${colors.info('Dependencies:')}`);

    registryItem.dependencies.forEach((dep) => {
      console.log(`  ${colors.success('✓')} ${dep}`);
    });
  }

  if (registryItem.registryDependencies?.length) {
    console.log(`\n${colors.info('Registry dependencies:')}`);

    registryItem.registryDependencies.forEach((dep) => {
      console.log(`  ${colors.success('✓')} ${dep}`);
    });
  }

  console.log(`\n${colors.info('Files:')}`);

  registryItem.files.forEach((file) => {
    console.log(`  ${colors.success('✓')} ${file.path}`);
  });

  console.log('');
}
