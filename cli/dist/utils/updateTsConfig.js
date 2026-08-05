import { access, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { colors } from './colors.js';
export async function updateTsConfig() {
    const cwd = process.cwd();
    const possibleConfigs = ['tsconfig.app.json', 'tsconfig.json'];
    let configPath = null;
    for (const file of possibleConfigs) {
        const fullPath = path.join(cwd, file);
        try {
            await access(fullPath);
            configPath = fullPath;
            break;
        }
        catch { }
    }
    if (!configPath) {
        console.log(colors.warning('⚠ tsconfig.json not found, skipping alias setup'));
        return;
    }
    const content = await readFile(configPath, 'utf8');
    const config = JSON.parse(content);
    config.compilerOptions ??= {};
    config.compilerOptions.paths = {
        ...(config.compilerOptions.paths ?? {}),
        '@/*': ['./src/*'],
    };
    await writeFile(configPath, JSON.stringify(config, null, 2));
    console.log(`${colors.success('✔')} Added @/* alias to ${path.basename(configPath)}`);
}
