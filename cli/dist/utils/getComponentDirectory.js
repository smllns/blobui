import path from 'node:path';
export function getComponentDirectory(name, config) {
    return path.join(process.cwd(), config.aliases.components, name);
}
