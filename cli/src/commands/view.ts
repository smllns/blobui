import { colors } from '../utils/colors.js';
import { getRegistryComponent } from '../utils/getRegistryComponent.js';
import { getRegistryIndex } from '../utils/getRegistryIndex.js';

export async function viewComponent(name: string) {
  const index = await getRegistryIndex();
  const registryItem = await getRegistryComponent(name, index);

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
