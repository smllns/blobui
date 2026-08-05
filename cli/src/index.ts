#!/usr/bin/env node

import { Command } from 'commander';
import { addComponent } from './commands/add.js';
import { doctor } from './commands/doctor.js';
import { initProject } from './commands/init.js';
import { listComponents } from './commands/list.js';
import { removeComponent } from './commands/remove.js';
import { viewComponent } from './commands/view.js';
import { handleError } from './utils/handleError.js';

const CLI_NAME = 'blobui';
const CLI_VERSION = '0.1.0';

const program = new Command();

program
  .name(CLI_NAME)
  .description('Install and manage blobui components')
  .version(CLI_VERSION);

program.showSuggestionAfterError();

program
  .command('add <component>')
  .description('Add a component')
  .option('-o, --overwrite', 'Overwrite existing files')
  .action(async (component, options) => {
    await addComponent(component, {
      overwrite: options.overwrite,
    });
  });

program
  .command('remove <component>')
  .description('Remove a component')
  .action(async (component) => {
    await removeComponent(component);
  });

program
  .command('list')
  .description('List available components')
  .action(listComponents);

program
  .command('view <component>')
  .description('Show component information')
  .action(viewComponent);

program.command('init').description('Initialize blobui').action(initProject);

program.command('doctor').description('Check project setup').action(doctor);

async function main() {
  if (!process.argv.slice(2).length) {
    program.outputHelp();
    return;
  }

  await program.parseAsync();
}

main().catch(handleError);
