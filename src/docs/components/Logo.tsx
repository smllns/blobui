import { cn } from '@/lib/cn';
import { BlobMark } from './BlobMark';

type LogoProps = {
  size?: number;
  markOnly?: boolean;
  className?: string;
};

export function Logo({ size = 24, markOnly = false, className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5 text-fg', className)}>
      <BlobMark size={size} className='shrink-0 text-primary' />

      {!markOnly && (
        <span
          className='font-bold tracking-[-0.045em]'
          style={{ fontSize: size * 0.75 }}
        >
          Blob UI
        </span>
      )}
    </span>
  );
}
