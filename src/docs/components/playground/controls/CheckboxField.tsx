import { Checkbox } from '../../../../components/checkbox/CheckBox';

type Props = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled: boolean;
};

export function CheckboxField({
  label,
  disabled = false,
  checked,
  onChange,
}: Props) {
  return (
    <Checkbox
      label={label}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      disabled={disabled}
      size='md'
    />
  );
}
