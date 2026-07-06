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
    };

type Props<T> = {
  state: T;
  update: <K extends keyof T>(key: K, value: T[K]) => void;
  controls: Control<T>[];
};

export function ControlsRenderer<T>({ state, update, controls }: Props<T>) {
  const checkboxes = controls.filter((c) => c.type === 'checkbox');
  const selects = controls.filter((c) => c.type === 'select');

  return (
    <>
      <div className='flex flex-col gap-4'>
        {selects.map((control) => {
          const value = state[control.key];

          if (control.type !== 'select') return null;

          return (
            <SelectField
              key={control.key as string}
              label={control.label}
              value={value as string}
              options={control.options}
              onChange={(v) => update(control.key, v as T[keyof T])}
            />
          );
        })}
      </div>

      <div className='flex flex-wrap gap-4 pt-2'>
        {checkboxes.map((control) => {
          const value = state[control.key];

          if (control.type !== 'checkbox') return null;

          return (
            <CheckboxField
              key={control.key as string}
              label={control.label}
              checked={value as boolean}
              onChange={(v) => update(control.key, v as T[keyof T])}
            />
          );
        })}
      </div>
    </>
  );
}
