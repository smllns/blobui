import { readFile } from 'node:fs/promises';
import path from 'node:path';
export async function getConfig() {
    const configPath = path.join(process.cwd(), 'components.json');
    let content;
    try {
        content = await readFile(configPath, 'utf-8');
    }
    catch {
        throw new Error('components.json not found. Run "smllns-ui init" first.');
    }
    try {
        const config = JSON.parse(content);
        if (!config.aliases?.components || !config.aliases?.lib) {
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
