import path from 'node:path';
export function getDestination(filePath, config) {
    const cwd = process.cwd();
    if (filePath.startsWith('components/')) {
        return path.join(cwd, config.aliases.components, filePath.slice('components/'.length));
    }
    if (filePath.startsWith('lib/')) {
        return path.join(cwd, config.aliases.lib, filePath.slice('lib/'.length));
    }
    if (filePath.startsWith('ui/')) {
        return path.join(cwd, config.aliases.components, filePath.slice('ui/'.length));
    }
    return path.join(cwd, filePath);
}
