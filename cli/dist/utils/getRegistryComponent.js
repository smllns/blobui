import { REGISTRY_URL } from '../config.js';
import { fetchJson } from './fetchJson.js';
import { findClosest } from './findClosest.js';
export async function getRegistryComponent(name, index) {
    const component = index.components.find((item) => item.name === name);
    if (!component) {
        const suggestion = findClosest(name, index.components.map((item) => item.name));
        if (suggestion) {
            throw new Error(`Component "${name}" not found.\n\nDid you mean "${suggestion}"?`);
        }
        throw new Error(`Component "${name}" not found.\nRun "blobui list" to see available components.`);
    }
    return fetchJson(`${REGISTRY_URL}/${component.path.replace('./', '')}`);
}
