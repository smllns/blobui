import { REGISTRY_URL } from '../config.js';
import { fetchJson } from './fetchJson.js';
export async function getRegistryIndex() {
    return fetchJson(`${REGISTRY_URL}/index.json`);
}
