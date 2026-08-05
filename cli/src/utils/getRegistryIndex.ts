import { REGISTRY_URL } from '../config.js';
import { RegistryIndex } from '../types/registry.js';
import { fetchJson } from './fetchJson.js';

export async function getRegistryIndex() {
  return fetchJson<RegistryIndex>(`${REGISTRY_URL}/index.json`);
}
