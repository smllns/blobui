#!/usr/bin/env node

import { Command } from 'commander';
import { addComponent } from './commands/add.js';
import { initProject } from './commands/init.js';
import { listComponents } from './commands/list.js';
import { viewComponent } from './commands/view.js';
import { doctor } from './commands/doctor.js';
import { handleError } from './utils/handleError.js';
import { removeComponent } from './commands/remove.js';

const program = new Command();

program
  .name('smllns-ui')
  .description('Install smllns ui components')
  .version('0.1.0');

program.showSuggestionAfterError();

program
  .command('add <component>')
  .option('-o, --overwrite', 'Overwrite existing files')
  .action(async (component, options) => {
    await addComponent(component, {
      overwrite: options.overwrite,
    });
  });

program
  .command('list')
  .description('List available components')
  .action(async () => {
    await listComponents();
  });

program
  .command('view <component>')
  .description('Show component information')
  .action(async (component) => {
    await viewComponent(component);
  });

program
  .command('doctor')
  .description('Check project setup')
  .action(async () => {
    await doctor();
  });

program
  .command('init')
  .description('Initialize smllns ui')
  .action(async () => {
    await initProject();
  });

program
  .command('remove <component>')
  .description('Remove a component')
  .action(async (component) => {
    await removeComponent(component);
  });

if (!process.argv.slice(2).length) {
  program.outputHelp();
} else {
  program.parseAsync().catch(handleError);
}
