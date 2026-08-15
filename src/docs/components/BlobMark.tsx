import type { SVGProps } from 'react';

type BlobMarkProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function BlobMark({ size = 24, className, ...props }: BlobMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      aria-hidden='true'
      className={className}
      {...props}
    >
      {/* two brackets, stroked so the weight tracks the size. */}
      <path
        d='M8.6 3.6H6.5A2.5 2.5 0 0 0 4 6.1v11.8a2.5 2.5 0 0 0 2.5 2.5h2.1'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.4 3.6h2.1A2.5 2.5 0 0 1 20 6.1v11.8a2.5 2.5 0 0 1-2.5 2.5h-2.1'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* the blob */}
      <path
        d='M12 8.15c2.05 0 3.85 1.45 3.85 3.55 0 2.25-1.6 4.2-3.8 4.2s-3.9-1.55-3.9-3.7c0-2.25 1.8-4.05 3.85-4.05Z'
        fill='currentColor'
      />
    </svg>
  );
}
