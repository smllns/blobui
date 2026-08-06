import { writeFile } from 'node:fs/promises';
import prompts from 'prompts';
import { colors } from '../utils/colors.js';
import { updateTsConfig } from '../utils/updateTsConfig.js';
import { updateViteConfig } from '../utils/updateViteConfig.js';
import { getConfigPath } from '../utils/getConfigPath.js';
import { exists } from '../utils/exists.js';
export async function initProject() {
    const configPath = getConfigPath();
    if (await exists(configPath)) {
        console.log(`${colors.warning('⚠')} components.json already exists`);
        return;
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
        {
            type: 'text',
            name: 'hooks',
            message: 'Where should hooks be installed?',
            initial: 'src/hooks',
        },
    ]);
    if (!answers.components || !answers.lib || !answers.hooks) {
        console.log(`${colors.warning('⚠')} Initialization cancelled`);
        return;
    }
    const config = {
        aliases: {
            components: answers.components,
            lib: answers.lib,
            hooks: answers.hooks,
        },
    };
    await writeFile(configPath, JSON.stringify(config, null, 2) + '\n');
    await updateTsConfig();
    await updateViteConfig();
    console.log(`${colors.success('✨ Created')} components.json`);
}
