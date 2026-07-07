import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from '../../ui/ChevronDown';
import { cn } from '../../lib/cn';
import { selectItemStyles } from './select.styles';

export function SelectItem({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <SelectPrimitive.Item value={value} className={cn(selectItemStyles())}>
      <SelectPrimitive.ItemIndicator className='absolute left-2'>
        <ChevronDown />
      </SelectPrimitive.ItemIndicator>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
