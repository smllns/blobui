export interface ComponentProp {
  name: string;
  type: string;
  default: string;
  description: string;
}

export const prop = (
  name: string,
  type: string,
  defaultValue: string,
  description: string,
): ComponentProp => ({
  name,
  type,
  default: defaultValue,
  description,
});

export const union = (values: readonly string[]) =>
  values.map((value) => `'${value}'`).join(' | ');

export const describe = (
  base: ComponentProp,
  description: string,
): ComponentProp => ({ ...base, description });
