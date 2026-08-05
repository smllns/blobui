import { getDestination } from './getDestination.js';
import { exists } from './exists.js';
export async function checkComponentExists(files, config) {
    const componentFiles = files.filter((file) => file.type === 'component');
    if (!componentFiles.length) {
        return false;
    }
    const results = await Promise.all(componentFiles.map((file) => exists(getDestination(file.path, config))));
    return results.every(Boolean);
}
