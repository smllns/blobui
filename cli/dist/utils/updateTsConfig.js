import { access, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { colors } from './colors.js';
const TS_CONFIG_FILES = ['tsconfig.app.json', 'tsconfig.json'];
export async function updateTsConfig() {
    const cwd = process.cwd();
    const configPath = await findTsConfig(cwd);
    if (!configPath) {
        console.log(`${colors.warning('⚠')} tsconfig.json not found, skipping alias setup`);
        return;
    }
    const content = await readFile(configPath, 'utf8');
    const config = JSON.parse(content);
    config.compilerOptions ??= {};
    config.compilerOptions.paths ??= {};
    if (config.compilerOptions.paths['@/*']) {
        console.log(`${colors.warning('⚠')} @/* alias already exists`);
        return;
    }
    config.compilerOptions.paths['@/*'] = ['./src/*'];
    await writeFile(configPath, JSON.stringify(config, null, 2) + '\n');
    console.log(`${colors.success('✔')} Added @/* alias to ${path.basename(configPath)}`);
}
async function findTsConfig(cwd) {
    for (const file of TS_CONFIG_FILES) {
        const fullPath = path.join(cwd, file);
        try {
            await access(fullPath);
            return fullPath;
        }
        catch { }
    }
    return null;
}
