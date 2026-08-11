import { Icon, type IconProps } from '../Icon';

export function Tag(props: IconProps) {
  return (
    <Icon {...props}>
      <path d='M9 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9L3.5 12Z' />
      <circle cx='7.5' cy='12' r='1.5' />
    </Icon>
  );
}
