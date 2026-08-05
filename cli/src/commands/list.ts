import { REGISTRY_URL } from '../config.js';
import { colors } from '../utils/colors.js';
import { fetchJson } from '../utils/fetchJson.js';

type RegistryIndex = {
  components: {
    name: string;
    path: string;
  }[];
};

export async function listComponents() {
  const index = await fetchJson<RegistryIndex>(`${REGISTRY_URL}/index.json`);

  console.log(`\n${colors.bold('Available components:')}\n`);

  if (!index.components.length) {
    console.log(`${colors.warning('⚠')} No components found`);

    console.log('');
    return;
  }

  for (const component of index.components) {
    console.log(`${colors.success('✓')} ${colors.component(component.name)}`);
  }

  console.log('');
}
