import { DocsPage } from '../components/DocsPage';
import { SelectPlayground } from '../components/playground/SelectPlayground';
import { Select } from '../../components/select';
import { selectProps } from '../../lib/selectProps';

const SELECT_VARIANTS = ['default', 'filled', 'outline', 'ghost'] as const;
const OPTIONS = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function SelectPreview() {
  return (
    <>
      {SELECT_VARIANTS.map((variant) => (
        <Select key={variant} variant={variant} defaultValue={variant}>
          <option value={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </option>

          {OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      ))}
    </>
  );
}

export function SelectDocs() {
  return (
    <DocsPage
      header='Select'
      description='A select component for capturing user data.'
      preview={<SelectPreview />}
      playground={<SelectPlayground />}
      props={selectProps}
    />
  );
}
