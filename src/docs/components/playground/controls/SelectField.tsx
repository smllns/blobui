import { Select } from '../../../../components/select';

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
      <p className='text-neutral-600'>{label}</p>

      <Select
        variant='outline'
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Select>
    </div>
  );
}
