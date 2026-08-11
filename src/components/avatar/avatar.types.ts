import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { avatarStyles, avatarStatusStyles } from './avatar.styles';

export type AvatarStatus = 'online' | 'busy' | 'away' | 'offline';

export interface AvatarProps
  extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof avatarStyles> {
  shape?: 'circle' | 'square';
  src?: string;
  alt?: string;
  fallback?: ReactNode;
  status?: VariantProps<typeof avatarStatusStyles>['status'];
}
