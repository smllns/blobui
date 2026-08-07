export const registryFiles = import.meta.glob(
  ['../components/**/*.{ts,tsx}', '/**/*.ts', '../ui/**/*.tsx'],
  {
    query: '?raw',
    import: 'default',
    eager: true,
  },
) as Record<string, string>;
