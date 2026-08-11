export const registryFiles = import.meta.glob(
  [
    '../components/**/*.{ts,tsx}',
    '/**/*.ts',
    '../ui/**/*.tsx',
    // The token layer. Every component in the registry declares `theme` as a
    // registry dependency, so the manual install has to be able to show these.
    '../styles/**/*.css',
  ],
  {
    query: '?raw',
    import: 'default',
    eager: true,
  },
) as Record<string, string>;
