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
            name: 'shared',
            message: 'Where should shared components be installed?',
            initial: 'src/components/shared',
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
        {
            type: 'text',
            name: 'styles',
            message: 'Where should design tokens be installed?',
            initial: 'src/styles',
        },
        {
            type: 'text',
            name: 'ui',
            message: 'Where should UI primitives and icons be installed?',
            initial: 'src/ui',
        },
    ]);
    if (!answers.components ||
        !answers.shared ||
        !answers.ui ||
        !answers.lib ||
        !answers.hooks ||
        !answers.styles) {
        console.log(`${colors.warning('⚠')} Initialization cancelled`);
        return;
    }
    const config = {
        aliases: {
            components: answers.components || 'src/components/ui',
            shared: answers.shared || 'src/components/shared',
            lib: answers.lib || 'src/lib',
            hooks: answers.hooks || 'src/hooks',
            styles: answers.styles || 'src/styles',
            ui: answers.ui || 'src/ui',
        },
    };
    await writeFile(configPath, JSON.stringify(config, null, 2) + '\n');
    await updateTsConfig();
    await updateViteConfig();
    console.log(`${colors.success('✨ Created')} components.json`);
    console.log(`\n${colors.warning('→')}  Add the theme styles to your CSS entry, after \`@import "tailwindcss"\`:\n` +
        `    @import './${answers.styles || 'src/styles'}/palette.css';\n` +
        `    @import './${answers.styles || 'src/styles'}/tokens.css';\n` +
        `    @import './${answers.styles || 'src/styles'}/theme.css';\n` +
        `    @import './${answers.styles || 'src/styles'}/base.css';\n`);
}
