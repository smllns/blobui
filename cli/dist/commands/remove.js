import { rm } from 'node:fs/promises';
import prompts from 'prompts';
import { colors } from '../utils/colors.js';
import { exists } from '../utils/exists.js';
import { getConfig } from '../utils/getConfig.js';
import { getRegistryIndex } from '../utils/getRegistryIndex.js';
import { getRegistryComponent } from '../utils/getRegistryComponent.js';
import { getDestination } from '../utils/getDestination.js';
export async function removeComponent(name) {
    const index = await getRegistryIndex();
    const registryItem = await getRegistryComponent(name, index);
    const config = await getConfig();
    const componentFile = registryItem.files.find((file) => file.path.startsWith('components/'));
    if (!componentFile) {
        console.log(`${colors.warning('⚠')} Cannot determine component directory`);
        return;
    }
    const componentDirectory = getDestination(componentFile.path, config).replace(/\/[^/]+$/, '');
    if (!(await exists(componentDirectory))) {
        console.log(`${colors.warning('⚠')} ${colors.component(name)} is not installed`);
        return;
    }
    const { confirm } = await prompts({
        type: 'confirm',
        name: 'confirm',
        message: `Remove ${colors.component(name)}?`,
        initial: false,
    });
    if (!confirm) {
        console.log(colors.dim('Skipped'));
        return;
    }
    await rm(componentDirectory, {
        recursive: true,
        force: true,
    });
    console.log(`${colors.success('✨ Removed')} ${colors.component(name)}`);
}
