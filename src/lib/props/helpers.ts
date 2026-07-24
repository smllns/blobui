interface ComponentProp {
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
