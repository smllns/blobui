import { cn } from '@/lib/cn';
import { Icon, type IconProps } from '../Icon';

export function Spinner({ className, ...props }: IconProps) {
  return (
    <Icon {...props} className={cn('animate-spin', className)}>
      <path d='M21 12a9 9 0 1 1-9-9' />
    </Icon>
  );
}
