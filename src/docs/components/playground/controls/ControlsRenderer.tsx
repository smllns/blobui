import { CheckboxField } from './CheckboxField';
import { SelectField } from './SelectField';

export type Control<T> =
  | {
      type: 'select';
      key: keyof T;
      label: string;
      options: string[];
    }
  | {
      type: 'checkbox';
      key: keyof T;
      label: string;
      disabled?: boolean;
    };

type Props<T> = {
  state: T;
  update: <K extends keyof T>(key: K, value: T[K]) => void;
  controls: Control<T>[];
};

type SelectControl<T> = Extract<Control<T>, { type: 'select' }>;
type CheckboxControl<T> = Extract<Control<T>, { type: 'checkbox' }>;

function isSelectControl<T>(control: Control<T>): control is SelectControl<T> {
  return control.type === 'select';
}

function isCheckboxControl<T>(
  control: Control<T>,
): control is CheckboxControl<T> {
  return control.type === 'checkbox';
}

export function ControlsRenderer<T>({ state, update, controls }: Props<T>) {
  const renderSelect = (control: SelectControl<T>) => {
    return (
      <SelectField
        key={String(control.key)}
        label={control.label}
        value={String(state[control.key])}
        options={control.options}
        onChange={(value) =>
          update(control.key, value as T[typeof control.key])
        }
      />
    );
  };

  const renderCheckbox = (control: CheckboxControl<T>) => {
    return (
      <CheckboxField
        key={String(control.key)}
        label={control.label}
        checked={Boolean(state[control.key])}
        disabled={control.disabled as boolean}
        onChange={(value) =>
          update(control.key, value as T[typeof control.key])
        }
      />
    );
  };

  return (
    <>
      <div className='flex flex-col gap-4'>
        {controls.filter(isSelectControl).map(renderSelect)}
      </div>

      <div className='flex flex-wrap gap-4 pt-2'>
        {controls.filter(isCheckboxControl).map(renderCheckbox)}
      </div>
    </>
  );
}
