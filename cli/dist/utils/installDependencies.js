import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { execa } from 'execa';
import { colors } from './colors.js';
async function getProjectDependencies() {
    const packagePath = path.join(process.cwd(), 'package.json');
    const content = await readFile(packagePath, 'utf-8');
    const packageJson = JSON.parse(content);
    return new Set([
        ...Object.keys(packageJson.dependencies ?? {}),
        ...Object.keys(packageJson.devDependencies ?? {}),
    ]);
}
export async function installDependencies(dependencies, installedDependencies) {
    const projectDependencies = await getProjectDependencies();
    const newDependencies = dependencies.filter((dependency) => !projectDependencies.has(dependency) &&
        !installedDependencies.has(dependency));
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
    catch {
        throw new Error(`Failed to install dependencies: ${newDependencies.join(', ')}`);
    }
}
