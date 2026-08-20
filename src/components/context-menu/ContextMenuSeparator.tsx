import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { cn } from '@/lib/cn';
import { menuSeparatorStyles } from '@/components/shared/surface.styles';

export function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      className={cn(menuSeparatorStyles, className)}
      {...props}
    />
  );
}
