import { Select } from '../../../../components/select/Select';
import { SelectItem } from '../../../../components/select/SelectItem';

type Props<T extends string> = {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
};

export function SelectField<T extends string>({
  label,
  value,
  options,
  onChange,
}: Props<T>) {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-body-sm font-medium text-fg-secondary'>{label}</p>
      <Select width='full' size='sm' value={value} onValueChange={onChange}>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
