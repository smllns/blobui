import { Select } from '../../components/select/Select';
import { SelectItem } from '../../components/select/SelectItem';
import { COMMON_VARIANTS } from '../../lib/options';
import { OPTIONS } from './select.data';

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
