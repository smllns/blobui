import { DocsPage } from '../components/DocsPage';
import { SelectPlayground } from '../components/playground/SelectPlayground';
import { selectItemProps, selectProps } from '../../lib/selectProps';
import { SelectItem } from '../../components/select/SelectItem';
import { Select } from '../../components/select/Select';

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

export function SelectDocs() {
  return (
    <DocsPage
      header='Select'
      description='A select component for capturing user data.'
      preview={<SelectPreview />}
      playground={<SelectPlayground />}
      props={selectProps}
      subElementProps={selectItemProps}
      subElementHeader='Select Item'
    />
  );
}
