export function Home() {
  return (
    <>
      <h1 className='m-0 text-display-xl text-fg'>blobui</h1>

      <p className='mt-4 max-w-xl text-body-lg text-fg-secondary'>
        A lightweight React component library built with TypeScript and Tailwind
        CSS, dressed in a three-layer token system: 22 OKLCH colour families, a
        semantic layer that mirrors light and dark, and four swappable accents.
      </p>

      <p className='mt-4 max-w-xl text-body-md text-fg-tertiary'>
        Flip the theme or the accent in the sidebar. Nothing in{' '}
        <code className='font-mono text-caption text-primary-fg'>
          src/components
        </code>{' '}
        knows either exists — components read semantic tokens only, which is
        what makes re-branding a one-line change instead of a rewrite.
      </p>
    </>
  );
}
