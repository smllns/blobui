import { Select } from '../../components/select/Select';
import { SelectItem } from '../../components/select/SelectItem';
import { COMMON_VARIANTS } from '../../lib/options';

export const OPTIONS = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export function SelectPreview() {
  return (
    <>
      {COMMON_VARIANTS.map((variant) => (
        <Select
          size='md'
          key={variant}
          variant={variant}
          defaultValue={variant}
        >
          <SelectItem value={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </SelectItem>

          {OPTIONS.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </Select>
      ))}
    </>
  );
}
