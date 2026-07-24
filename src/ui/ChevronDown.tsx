// arrow icon
export function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className || 'h-4 w-4 text-neutral-500'}
      viewBox='0 0 20 20'
      fill='currentColor'
      aria-hidden='true'
    >
      <path
        fillRule='evenodd'
        d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z'
        clipRule='evenodd'
      />
    </svg>
  );
}
