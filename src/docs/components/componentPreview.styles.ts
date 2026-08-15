export const stageStyles = [
  'relative grid min-h-88 place-items-center  p-12',
  'rounded-2xl border border-border-subtle bg-sunken',

  "before:pointer-events-none before:absolute before:inset-0 before:content-['']",
  'before:[background-image:linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)]',
  'before:[background-size:24px_24px]',
  'before:opacity-50',
  'before:[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_78%)]',
].join(' ');

export const specimenStyles =
  'relative z-1 flex flex-wrap items-center justify-center';
