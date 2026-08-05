import { colors } from './colors.js';

export function handleError(error: unknown) {
  console.error('');

  if (error instanceof Error) {
    console.error(`${colors.error('✖')} ${error.message}`);
  } else {
    console.error(`${colors.error('✖')} Something went wrong`);
  }

  console.error('');

  process.exit(1);
}
