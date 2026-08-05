import { readFile } from 'node:fs/promises';
import { getConfigPath } from './getConfigPath.js';
export async function getConfig() {
    const configPath = getConfigPath();
    let content;
    try {
        content = await readFile(configPath, 'utf-8');
    }
    catch {
        throw new Error('components.json not found. Run "blobui init" first.');
    }
    try {
        const config = JSON.parse(content);
        if (!config.aliases?.components ||
            !config.aliases?.lib ||
            !config.aliases?.hooks) {
            throw new Error('Invalid components.json format.');
        }
        return config;
    }
    catch (error) {
        if (error instanceof SyntaxError) {
            throw new Error('components.json contains invalid JSON.');
        }
        throw error;
    }
}
