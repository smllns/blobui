import { access, readFile } from 'node:fs/promises';
import path from 'node:path';

import { colors } from '../utils/colors.js';

async function exists(filePath: string) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function doctor() {
  const cwd = process.cwd();

  console.log(`\n${colors.bold('🩺 Checking your project...')}\n`);

  let hasErrors = false;

  // components.json
  const componentsConfig = path.join(cwd, 'components.json');

  if (await exists(componentsConfig)) {
    console.log(`${colors.success('✔')} components.json found`);
  } else {
    console.log(`${colors.error('✖')} components.json missing`);

    hasErrors = true;
  }

  // package.json
  const packageJsonPath = path.join(cwd, 'package.json');

  let packageJson: any = null;

  if (await exists(packageJsonPath)) {
    console.log(`${colors.success('✔')} package.json found`);

    try {
      packageJson = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
    } catch {
      console.log(`${colors.error('✖')} package.json is invalid`);

      hasErrors = true;
    }
  } else {
    console.log(`${colors.error('✖')} package.json missing`);

    hasErrors = true;
  }

  // Dependencies
  if (packageJson) {
    const dependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    // React
    if (dependencies.react && dependencies['react-dom']) {
      console.log(`${colors.success('✔')} React detected`);
    } else {
      console.log(`${colors.warning('⚠')} React not detected`);
    }

    // Tailwind
    if (dependencies.tailwindcss || dependencies['@tailwindcss/postcss']) {
      console.log(`${colors.success('✔')} Tailwind detected`);
    } else {
      console.log(`${colors.warning('⚠')} Tailwind not detected`);
    }
  }

  // src directory
  const srcPath = path.join(cwd, 'src');

  if (await exists(srcPath)) {
    console.log(`${colors.success('✔')} src directory found`);
  } else {
    console.log(`${colors.error('✖')} src directory missing`);

    hasErrors = true;
  }

  console.log('');

  if (hasErrors) {
    console.log(
      colors.error(
        '✖ Some checks failed. Please fix them before adding components.',
      ),
    );
  } else {
    console.log(colors.success('✨ Everything looks good!'));
  }

  console.log('');
}
