import { access, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { applyEdits, modify } from 'jsonc-parser';
import { colors } from './colors.js';

const TS_CONFIG_FILES = ['tsconfig.app.json', 'tsconfig.json'];

export async function updateTsConfig() {
  const cwd = process.cwd();

  const configPath = await findTsConfig(cwd);

  if (!configPath) {
    console.log(
      `${colors.warning('⚠')} tsconfig.json not found, skipping alias setup`,
    );

    return;
  }

  const content = await readFile(configPath, 'utf8');

  const edits = modify(
    content,
    ['compilerOptions', 'paths', '@/*'],
    ['./src/*'],
    {
      formattingOptions: {
        insertSpaces: true,
        tabSize: 2,
      },
      getInsertionIndex: () => -1,
    },
  );

  if (!edits.length) {
    console.log(`${colors.warning('⚠')} @/* alias already exists`);

    return;
  }

  const updated = applyEdits(content, edits);

  await writeFile(configPath, updated);

  console.log(
    `${colors.success('✔')} Added @/* alias to ${path.basename(configPath)}`,
  );
}

async function findTsConfig(cwd: string) {
  for (const file of TS_CONFIG_FILES) {
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
