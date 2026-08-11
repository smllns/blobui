import { readFile } from 'node:fs/promises';
import { getConfigPath } from './getConfigPath.js';
function isValidAlias(value) {
    return typeof value === 'string' && value.length > 0;
}
export async function getConfig() {
    const configPath = getConfigPath();
    let content;
    try {
        content = await readFile(configPath, 'utf-8');
    }
    catch (error) {
        throw new Error('components.json not found. Run "blobui init" first.', {
            cause: error,
        });
    }
    try {
        const config = JSON.parse(content);
        const aliases = config.aliases;
        if (!aliases ||
            !isValidAlias(aliases.components) ||
            !isValidAlias(aliases.shared) ||
            !isValidAlias(aliases.lib) ||
            !isValidAlias(aliases.hooks) ||
            !isValidAlias(aliases.styles) ||
            !isValidAlias(aliases.ui)) {
            throw new Error('Invalid components.json format.');
        }
        return config;
    }
    catch (error) {
        if (error instanceof SyntaxError) {
            throw new Error('components.json contains invalid JSON.', {
                cause: error,
            });
        }
        throw error;
    }
}
