import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '@/lib/cn';
import { selectCheckSlotStyles, selectItemStyles } from './select.styles';
import { Check } from '@/ui/icons/Check';

export function SelectItem({
  children,
  value,
  disabled,
  className,
}: {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <SelectPrimitive.Item
      value={value}
      disabled={disabled}
      className={cn(selectItemStyles, className)}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className={selectCheckSlotStyles}>
        <SelectPrimitive.ItemIndicator>
          <Check size='sm' className='text-primary' />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}
