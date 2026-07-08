import { Checkbox } from '../../../../components/checkbox/CheckBox';

type Props = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function CheckboxField({ label, checked, onChange }: Props) {
  return (
    <Checkbox
      label={label}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      size='sm'
    />
  );
}
