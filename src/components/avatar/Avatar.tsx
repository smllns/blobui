import { forwardRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { avatarStyles } from './avatar.styles';
import type { AvatarProps } from './avatar.types';

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, fallback, size, variant, className, ...props }, ref) => {
    const [error, setError] = useState(false);

    return (
      <div
        ref={ref}
        className={cn(avatarStyles({ size, variant }), className)}
        {...props}
      >
        {src && !error ? (
          <img
            src={src}
            alt={alt || 'avatar'}
            className='h-full w-full object-cover'
            onError={() => setError(true)}
          />
        ) : (
          <span className='flex items-center justify-center'>{fallback}</span>
        )}
      </div>
    );
  },
);
