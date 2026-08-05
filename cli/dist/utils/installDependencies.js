import { execa } from 'execa';
import { colors } from './colors.js';
export async function installDependencies(dependencies, installedDependencies) {
    const newDependencies = dependencies.filter((dependency) => !installedDependencies.has(dependency));
    if (!newDependencies.length) {
        return;
    }
    console.log(`${colors.info('Installing dependencies:')} ${newDependencies.join(', ')}`);
    try {
        await execa('npm', ['install', ...newDependencies], {
            stdio: 'inherit',
        });
        newDependencies.forEach((dependency) => installedDependencies.add(dependency));
        console.log(`${colors.success('✔')} Dependencies installed`);
    }
    catch (error) {
        throw new Error(`Failed to install dependencies: ${newDependencies.join(', ')}`);
    }
}
