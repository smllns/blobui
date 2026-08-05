import { colors } from '../utils/colors.js';
import { getRegistryIndex } from '../utils/getRegistryIndex.js';
export async function listComponents() {
    const index = await getRegistryIndex();
    console.log(`${colors.bold('Available components')} ${colors.dim(`(${index.components.length})`)}\n`);
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
