import { forwardRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { avatarStatusStyles, avatarStyles } from './avatar.styles';
import type { AvatarProps } from './avatar.types';

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, fallback, size, shape, status, className, ...props }, ref) => {
    const [error, setError] = useState(false);

    return (
      <div
        ref={ref}
        className={cn(avatarStyles({ size, shape }), className)}
        {...props}
      >
        <div
          className={cn(
            'absolute inset-0 overflow-hidden',
            shape === 'circle'
              ? 'rounded-full'
              : 'rounded-[calc(var(--avatar-size)*0.24)]',
          )}
        >
          {src && !error ? (
            <img
              src={src}
              alt={alt || 'avatar'}
              className='h-full w-full object-cover'
              onError={() => setError(true)}
            />
          ) : (
            <span className='flex h-full w-full items-center justify-center'>
              {fallback}
            </span>
          )}
        </div>

        {status && (
          <span aria-hidden='true' className={avatarStatusStyles({ status })} />
        )}
      </div>
    );
  },
);
