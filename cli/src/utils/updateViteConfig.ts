import { access, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { colors } from './colors.js';

const VITE_CONFIG_FILES = ['vite.config.ts', 'vite.config.js'];

export async function updateViteConfig() {
  const cwd = process.cwd();

  const configPath = await findViteConfig(cwd);

  if (!configPath) {
    console.log(
      `${colors.warning('⚠')} vite.config not found, skipping alias setup`,
    );

    return;
  }

  let content = await readFile(configPath, 'utf8');

  if (content.includes('alias:')) {
    console.log(`${colors.warning('⚠')} Vite alias already exists`);

    return;
  }

  if (!content.includes("from 'node:url'")) {
    content = content.replace(
      /import\s+\{\s*defineConfig\s*\}\s+from\s+['"]vite['"];?/,
      (match) => `import { fileURLToPath, URL } from 'node:url';\n${match}`,
    );
  }

  content = content.replace(
    /export default defineConfig\(\{/,
    `export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },`,
  );

  await writeFile(configPath, content);

  console.log(
    `${colors.success('✔')} Added @ alias to ${path.basename(configPath)}`,
  );
}

async function findViteConfig(cwd: string) {
  for (const file of VITE_CONFIG_FILES) {
    const fullPath = path.join(cwd, file);

    try {
      await access(fullPath);

      return fullPath;
    } catch {
      // continue
    }
  }

  return null;
}
