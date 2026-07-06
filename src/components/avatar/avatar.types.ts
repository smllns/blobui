import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { avatarStyles } from './avatar.styles';

export interface AvatarProps
  extends ComponentPropsWithoutRef<'div'>, VariantProps<typeof avatarStyles> {
  src?: string;
  alt?: string;

  fallback?: ReactNode;
}
